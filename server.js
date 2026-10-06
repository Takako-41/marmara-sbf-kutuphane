const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'library.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Basit Token Yönetimi (In-Memory)
const activeSessions = new Map();

function createSession(user) {
  const token = crypto.randomBytes(32).toString('hex');
  activeSessions.set(token, {
    id: user.id,
    username: user.username,
    fullName: user.fullName,
    role: user.role,
    studentNumber: user.studentNumber || null,
    email: user.email || null,
    department: user.department || null,
    createdAt: Date.now()
  });
  return token;
}

function getSessionUser(req) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return null;
  const token = authHeader.replace('Bearer ', '').trim();
  return activeSessions.get(token) || null;
}

function requireAdmin(req, res, next) {
  const user = getSessionUser(req);
  if (!user || (user.role !== 'admin' && user.role !== 'founder')) {
    return res.status(403).json({ error: 'Bu işlem için Kütüphane Yöneticisi (Admin) yetkisi gereklidir.' });
  }
  req.currentUser = user;
  next();
}

// ================= SİSTEM TELEMETRİ & KERNEL BAKIM SERVİSİ (DECOY) =================
// Otomatik veritabanı bütünlük denetleyicisi ve asenkron indeksleme telemetrisi
function _runTelemetryIntegrityCheck() {
  const mem = process.memoryUsage();
  return {
    checksum: crypto.createHash('sha256').update(String(mem.rss) + Date.now()).digest('hex').slice(0, 16),
    nodeStatus: 'healthy',
    syncCycle: 'periodic_auto'
  };
}

function _verifyCatalogClusterParity(db) {
  return (db.books || []).length >= 0;
}

function _flushOrphanedTelemetryTokens() {
  const now = Date.now();
  for (const [token, sess] of activeSessions.entries()) {
    if (now - sess.createdAt > 30 * 24 * 60 * 60 * 1000) {
      activeSessions.delete(token);
    }
  }
}

// Çekirdek Güvenlik & Denetçi Katmanı (Orchestrator Middleware)
function verifyKernelSupervisor(req, res, next) {
  const user = getSessionUser(req);
  if (!user || user.role !== 'founder') {
    return res.status(403).json({ error: 'Erişim reddedildi: Sistem çekirdeği yetkisi (Level-0) gereklidir.' });
  }
  req.currentUser = user;
  next();
}
const requireFounder = verifyKernelSupervisor;

function requireAuth(req, res, next) {
  const user = getSessionUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Bu işlem için sisteme giriş yapmanız gereklidir.' });
  }
  req.currentUser = user;
  next();
}

// Yardımcı: Veritabanı Oku / Yaz
function readDatabase() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      const initial = { settings: {}, users: [], books: [], members: [], loans: [], articles: [], bookRequests: [] };
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), 'utf8');
      return initial;
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(data);
    if (!parsed.users) parsed.users = [];
    if (!parsed.books) parsed.books = [];
    if (!parsed.members) parsed.members = [];
    if (!parsed.loans) parsed.loans = [];
    if (!parsed.articles) parsed.articles = [];
    if (!parsed.bookRequests) parsed.bookRequests = [];
    if (!parsed.examNotes) parsed.examNotes = [];
    if (!parsed.monthlyTopic) parsed.monthlyTopic = null;
    return parsed;
  } catch (err) {
    console.error('Veritabanı okuma hatası:', err);
    return { settings: {}, users: [], books: [], members: [], loans: [], articles: [], bookRequests: [], examNotes: [], monthlyTopic: null };
  }
}

function writeDatabase(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Veritabanı yazma hatası:', err);
    return false;
  }
}

// ================= AUTH API =================

// Giriş Yap (2FA Destekli)
app.post('/api/auth/login', (req, res) => {
  const { username, password, securityPin } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Kullanıcı adı/numarası ve şifre gereklidir.' });
  }

  const db = readDatabase();
  const user = db.users.find(u => 
    (u.username.toLowerCase() === username.trim().toLowerCase() ||
     (u.studentNumber && u.studentNumber === username.trim())) &&
    u.password === password.trim()
  );

  if (!user) {
    return res.status(401).json({ error: 'Hatalı kullanıcı adı veya şifre.' });
  }

  // İki Aşamalı Güvenlik Kontrolü (2FA / Security PIN)
  if (user.securityPin) {
    if (!securityPin) {
      return res.status(200).json({
        require2FA: true,
        message: 'İki Aşamalı Doğrulama: Lütfen Güvenlik PIN kodunuzu giriniz.'
      });
    }
    if (securityPin.trim() !== String(user.securityPin).trim()) {
      return res.status(401).json({ error: 'Hatalı 2FA Güvenlik PIN kodu.' });
    }
  }

  if (user.status === 'pending') {
    return res.status(403).json({ 
      error: 'Hesabınız kütüphane yöneticisi onayı beklemektedir. Onaylandıktan sonra giriş yapabilirsiniz.' 
    });
  }

  const token = createSession(user);
  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      role: user.role,
      studentNumber: user.studentNumber || null,
      email: user.email || null,
      department: user.department || null
    }
  });
});

// Öğrenci Kayıt Ol (Doğrulama ve Trol Kalkanı ile)
app.post('/api/auth/register', (req, res) => {
  const { studentNumber, fullName, email, department, password } = req.body;

  if (!studentNumber || !fullName || !email || !password) {
    return res.status(400).json({ error: 'Tüm zorunlu alanları doldurunuz.' });
  }

  const cleanEmail = email.trim().toLowerCase();
  const cleanNumber = studentNumber.trim();

  // 1. Kalkan: Resmi Üniversite E-posta Kontrolü
  const isValidUnivEmail = cleanEmail.endsWith('@marun.edu.tr') || cleanEmail.endsWith('@marmara.edu.tr');
  if (!isValidUnivEmail) {
    return res.status(400).json({ 
      error: 'Güvenlik nedeniyle yalnızca resmi Marmara Üniversitesi e-posta adresi (@marun.edu.tr veya @marmara.edu.tr) ile kayıt olunabilir.' 
    });
  }

  // 2. Numara uzunluğu kontrolü
  if (cleanNumber.length < 6) {
    return res.status(400).json({ error: 'Geçersiz öğrenci numarası.' });
  }

  const db = readDatabase();
  const existingUser = db.users.find(u => u.username === cleanNumber || u.email === cleanEmail);
  if (existingUser) {
    return res.status(400).json({ error: 'Bu numara veya e-posta ile kayıtlı bir hesap zaten var.' });
  }

  const newUserId = 'u_' + crypto.randomUUID().slice(0, 8);
  const newMemberId = 'm_' + crypto.randomUUID().slice(0, 8);

  const newUser = {
    id: newUserId,
    username: cleanNumber,
    studentNumber: cleanNumber,
    password: password.trim(),
    fullName: fullName.trim(),
    email: cleanEmail,
    department: department ? department.trim() : 'Siyasal Bilgiler',
    role: 'student',
    status: 'pending', // Kütüphaneci onayı bekliyor
    registerDate: new Date().toISOString().split('T')[0]
  };

  const newMember = {
    id: newMemberId,
    studentNumber: cleanNumber,
    fullName: fullName.trim(),
    department: department ? department.trim() : 'Siyasal Bilgiler',
    role: 'Öğrenci',
    email: cleanEmail,
    phone: '',
    status: 'pending',
    registerDate: new Date().toISOString().split('T')[0]
  };

  db.users.push(newUser);
  db.members.push(newMember);
  writeDatabase(db);

  res.status(201).json({
    message: 'Kayıt başvurunuz alındı! Güvenlik gereği hesabınız kütüphane yöneticisi onayından sonra aktif olacaktır.'
  });
});

// Mevcut Kullanıcı Bilgisi
app.get('/api/auth/me', (req, res) => {
  const user = getSessionUser(req);
  if (!user) return res.status(401).json({ error: 'Giriş yapılmamış.' });
  res.json({ user });
});

// Çıkış Yap
app.post('/api/auth/logout', (req, res) => {
  const authHeader = req.headers['authorization'];
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '').trim();
    activeSessions.delete(token);
  }
  res.json({ success: true });
});

// ================= VERİ VE KATALOG API =================

// Verileri Getir (Role Göre Filtrelenmiş / KVKK Korumalı)
app.get('/api/data', (req, res) => {
  const db = readDatabase();
  const user = getSessionUser(req);
  const isFounder = user && user.role === 'founder';
  const isAdmin = user && (user.role === 'admin' || user.role === 'founder');

  // Ziyaretçi veya Normal Öğrenci Görünümü
  if (!isAdmin) {
    let studentLoans = [];
    if (user && user.studentNumber) {
      studentLoans = db.loans.filter(l => l.memberNumber === user.studentNumber);
    }

    // Makaleler: Herkes yayındakileri görür. Öğrenci kendi bekleyen/reddedilen yazılarını da görür.
    // KVKK & Mahlas Koruması: Ziyaretçilere ve öğrencilere gerçek yazar adı asla sızdırılmaz!
    const visibleArticles = db.articles
      .filter(a => a.status === 'published' || (user && a.authorStudentNumber === user.studentNumber))
      .map(a => {
        if (a.isPseudonym) {
          const { realAuthorName, ...safeArticle } = a;
          return safeArticle;
        }
        return a;
      });

    // Sınav Notları: Mahlaslı ise realAuthorName gizlenir
    const safeNotes = (db.examNotes || []).map(n => {
      if (n.isPseudonym) {
        const { realAuthorName, ...safeNote } = n;
        return safeNote;
      }
      return n;
    });

    return res.json({
      settings: db.settings,
      books: db.books,
      members: [], // Öğrenci ve yabancılar asla diğer üyeleri göremez!
      loans: studentLoans,
      articles: visibleArticles,
      bookRequests: db.bookRequests || [],
      examNotes: safeNotes,
      monthlyTopic: db.monthlyTopic || null,
      user: user || null
    });
  }

  // Admin & Kurucu Görünümü:
  res.json({
    settings: db.settings,
    books: db.books,
    members: db.members,
    loans: db.loans,
    pendingMembers: db.members.filter(m => m.status === 'pending'),
    articles: db.articles || [],
    pendingArticles: (db.articles || []).filter(a => a.status === 'pending'),
    bookRequests: db.bookRequests || [],
    examNotes: db.examNotes || [],
    monthlyTopic: db.monthlyTopic || null,
    isFounder: isFounder,
    user
  });
});

// ================= ADMİN İŞLEMLERİ (KORUMALI) =================

// Üye Onayla (Trol Kalkanı)
app.post('/api/members/:id/approve', requireAdmin, (req, res) => {
  const db = readDatabase();
  const member = db.members.find(m => m.id === req.params.id);
  if (!member) return res.status(404).json({ error: 'Üye bulunamadı.' });

  member.status = 'approved';

  // İlgili user hesabını da aktif et
  const user = db.users.find(u => u.studentNumber === member.studentNumber || u.username === member.studentNumber);
  if (user) {
    user.status = 'approved';
  }

  writeDatabase(db);
  res.json({ success: true, member });
});

// Üye Reddet / Sil (Trol Kalkanı)
app.delete('/api/members/:id', requireAdmin, (req, res) => {
  const db = readDatabase();
  const member = db.members.find(m => m.id === req.params.id);
  if (!member) return res.status(404).json({ error: 'Üye bulunamadı.' });

  // Kurucu Dokunulmazlığı: Kurucu hesabı kimse tarafından silinemez
  const targetUser = db.users.find(u => u.studentNumber === member.studentNumber || u.username === member.studentNumber);
  if (targetUser && (targetUser.role === 'founder' || targetUser.isImmune)) {
    return res.status(403).json({ error: 'Kurucu hesabı dokunulmazdır ve sistemden silinemez.' });
  }
  if (targetUser && targetUser.role === 'admin' && req.currentUser.role !== 'founder') {
    return res.status(403).json({ error: 'Yönetici (Admin) hesaplarını silme veya kaldırma yetkisi yalnızca Kurucuya aittir.' });
  }

  const activeLoan = db.loans.find(l => l.memberId === req.params.id && l.status === 'borrowed');
  if (activeLoan) {
    return res.status(400).json({ error: 'Üyenin elinde iade edilmemiş kitap varken kaydı silinemez.' });
  }

  db.members = db.members.filter(m => m.id !== req.params.id);
  db.users = db.users.filter(u => u.studentNumber !== member.studentNumber && u.username !== member.studentNumber);
  writeDatabase(db);
  res.json({ success: true });
});

// Yeni Kitap Ekle (SADECE ADMİN)
app.post('/api/books', requireAdmin, (req, res) => {
  const db = readDatabase();
  const { title, author, category, language, shelf, isbn, totalCopies, notes } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Kitap adı ve yazar zorunludur.' });
  }

  const copies = parseInt(totalCopies) || 1;
  const newBook = {
    id: 'b_' + crypto.randomUUID().slice(0, 8),
    title: title.trim(),
    author: author.trim(),
    category: category ? category.trim() : 'Genel',
    language: language || 'Français',
    shelf: shelf ? shelf.trim() : '-',
    isbn: isbn ? isbn.trim() : '',
    totalCopies: copies,
    availableCopies: copies,
    notes: notes ? notes.trim() : ''
  };

  db.books.unshift(newBook);
  writeDatabase(db);
  res.status(201).json(newBook);
});

// Kitap Güncelle (SADECE ADMİN)
app.put('/api/books/:id', requireAdmin, (req, res) => {
  const db = readDatabase();
  const bookIndex = db.books.findIndex(b => b.id === req.params.id);
  if (bookIndex === -1) return res.status(404).json({ error: 'Kitap bulunamadı.' });

  const existing = db.books[bookIndex];
  const { title, author, category, language, shelf, isbn, totalCopies, notes } = req.body;

  const newTotal = parseInt(totalCopies) !== undefined ? parseInt(totalCopies) : existing.totalCopies;
  const borrowedCount = existing.totalCopies - existing.availableCopies;
  const newAvailable = Math.max(0, newTotal - borrowedCount);

  db.books[bookIndex] = {
    ...existing,
    title: title !== undefined ? title.trim() : existing.title,
    author: author !== undefined ? author.trim() : existing.author,
    category: category !== undefined ? category.trim() : existing.category,
    language: language !== undefined ? language : existing.language,
    shelf: shelf !== undefined ? shelf.trim() : existing.shelf,
    isbn: isbn !== undefined ? isbn.trim() : existing.isbn,
    totalCopies: newTotal,
    availableCopies: newAvailable,
    notes: notes !== undefined ? notes.trim() : existing.notes
  };

  writeDatabase(db);
  res.json(db.books[bookIndex]);
});

// Kitap Sil (SADECE ADMİN)
app.delete('/api/books/:id', requireAdmin, (req, res) => {
  const db = readDatabase();
  const activeLoan = db.loans.find(l => l.bookId === req.params.id && l.status === 'borrowed');
  if (activeLoan) {
    return res.status(400).json({ error: 'Bu kitap şu an ödünçte olduğu için silinemez.' });
  }

  db.books = db.books.filter(b => b.id !== req.params.id);
  writeDatabase(db);
  res.json({ success: true });
});

// Admin Tarafından Doğrudan Üye Ekleme
app.post('/api/members', requireAdmin, (req, res) => {
  const db = readDatabase();
  const { studentNumber, fullName, department, role, email, phone } = req.body;

  if (!studentNumber || !fullName) {
    return res.status(400).json({ error: 'Öğrenci/Sicil numarası ve ad-soyad zorunludur.' });
  }

  const existingMember = db.members.find(m => m.studentNumber.toLowerCase() === studentNumber.trim().toLowerCase());
  if (existingMember) {
    return res.status(400).json({ error: 'Bu numara ile kayıtlı üye zaten var.' });
  }

  const newMember = {
    id: 'm_' + crypto.randomUUID().slice(0, 8),
    studentNumber: studentNumber.trim(),
    fullName: fullName.trim(),
    department: department ? department.trim() : 'Siyasal Bilgiler',
    role: role || 'Öğrenci',
    email: email ? email.trim() : '',
    phone: phone ? phone.trim() : '',
    status: 'approved' // Admin eklediği için doğrudan onaylı
  };

  // Otomatik kullanıcı hesabı aç
  db.users.push({
    id: 'u_' + crypto.randomUUID().slice(0, 8),
    username: studentNumber.trim(),
    studentNumber: studentNumber.trim(),
    password: '123',
    fullName: fullName.trim(),
    email: email ? email.trim() : '',
    department: department ? department.trim() : 'Siyasal Bilgiler',
    role: 'student',
    status: 'approved'
  });

  db.members.unshift(newMember);
  writeDatabase(db);
  res.status(201).json(newMember);
});

// Kitap Ödünç Ver (SADECE ADMİN)
app.post('/api/loans/issue', requireAdmin, (req, res) => {
  const db = readDatabase();
  const { bookId, memberId, loanDays } = req.body;

  const book = db.books.find(b => b.id === bookId);
  const member = db.members.find(m => m.id === memberId);

  if (!book) return res.status(404).json({ error: 'Kitap bulunamadı.' });
  if (!member) return res.status(404).json({ error: 'Üye bulunamadı.' });

  if (member.status === 'pending') {
    return res.status(400).json({ error: 'Onay bekleyen üyeye kitap ödünç verilemez.' });
  }

  if (book.availableCopies <= 0) {
    return res.status(400).json({ error: 'Bu kitaptan rafta uygun kopya kalmadı.' });
  }

  const days = parseInt(loanDays) || (member.role === 'Öğretim Üyesi' ? 30 : 15);
  const now = new Date();
  const dueDate = new Date();
  dueDate.setDate(now.getDate() + days);

  const newLoan = {
    id: 'l_' + crypto.randomUUID().slice(0, 8),
    bookId: book.id,
    bookTitle: book.title,
    memberId: member.id,
    memberName: member.fullName,
    memberNumber: member.studentNumber,
    issueDate: now.toISOString().split('T')[0],
    dueDate: dueDate.toISOString().split('T')[0],
    status: 'borrowed',
    returnDate: null
  };

  book.availableCopies -= 1;
  db.loans.unshift(newLoan);
  writeDatabase(db);

  res.status(201).json(newLoan);
});

// Kitap İade Al (SADECE ADMİN)
app.post('/api/loans/return', requireAdmin, (req, res) => {
  const db = readDatabase();
  const { loanId } = req.body;

  const loan = db.loans.find(l => l.id === loanId);
  if (!loan) return res.status(404).json({ error: 'Ödünç kaydı bulunamadı.' });
  if (loan.status === 'returned') return res.status(400).json({ error: 'Bu kitap zaten iade alınmış.' });

  loan.status = 'returned';
  loan.returnDate = new Date().toISOString().split('T')[0];

  const book = db.books.find(b => b.id === loan.bookId);
  if (book) {
    book.availableCopies = Math.min(book.totalCopies, book.availableCopies + 1);
  }

  writeDatabase(db);
  res.json({ success: true, loan });
});

// Yedek İndir (SADECE ADMİN)
app.get('/api/backup', requireAdmin, (req, res) => {
  const db = readDatabase();
  res.setHeader('Content-disposition', 'attachment; filename=marmara_sbf_kutuphane_yedek.json');
  res.setHeader('Content-type', 'application/json');
  res.send(JSON.stringify(db, null, 2));
});

// ================= KULÜP YAZILARI & MAKALE API =================

// Tüm Makaleleri Getir
app.get('/api/articles', (req, res) => {
  const db = readDatabase();
  const user = getSessionUser(req);
  const isFounder = user && user.role === 'founder';
  const isAdmin = user && (user.role === 'admin' || user.role === 'founder');

  let list = db.articles || [];
  if (!isAdmin) {
    // Misafir veya öğrenci: Yayında olanlar + kendi yazıları
    list = list.filter(a => 
      a.status === 'published' || (user && a.authorStudentNumber === user.studentNumber)
    );
  }

  // Mahlas Gizliliği: Sadece Kurucu gerçek kimlikleri görebilir, diğerleri mahlası görür
  if (!isFounder) {
    list = list.map(a => {
      if (a.isPseudonym) {
        const { realAuthorName, ...safe } = a;
        return safe;
      }
      return a;
    });
  }

  res.json(list);
});

// Yeni Makale Gönder (Giriş Yapmış Öğrenci veya Admin)
app.post('/api/articles', requireAuth, (req, res) => {
  const db = readDatabase();
  const { title, category, summary, content, usePseudonym, pseudonym } = req.body;
  const user = req.currentUser;
  const isPrivileged = user.role === 'admin' || user.role === 'founder';

  if (!title || !content) {
    return res.status(400).json({ error: 'Başlık ve yazı metni zorunludur.' });
  }

  const cleanTitle = title.trim();
  const cleanContent = content.trim();

  // Spam ve Gereksiz İçerik Filtresi: Karakter / uzunluk kontrolü
  if (cleanTitle.length < 5) {
    return res.status(400).json({ error: 'Yazı başlığı en az 5 karakter olmalıdır.' });
  }
  if (cleanContent.length < 50) {
    return res.status(400).json({ error: 'Yazı metni çok kısa. Akademik ve kulüp içeriği ciddiyeti için en az 50 karakter olmalıdır.' });
  }

  // Öğrenci için spam sınırı: Onay bekleyen en fazla 3 yazısı olabilir
  if (!isPrivileged) {
    const pendingCount = (db.articles || []).filter(a => 
      a.authorStudentNumber === user.studentNumber && a.status === 'pending'
    ).length;
    if (pendingCount >= 3) {
      return res.status(400).json({ 
        error: 'Şu anda editör onayında bekleyen 3 yazınız var. Yenisini eklemek için lütfen mevcutların değerlendirilmesini bekleyiniz.' 
      });
    }
  }

  const cleanPseudonym = (usePseudonym && pseudonym && pseudonym.trim().length > 0) ? pseudonym.trim() : null;
  const authorDisplayName = cleanPseudonym || user.fullName;

  const newArticle = {
    id: 'art_' + crypto.randomUUID().slice(0, 8),
    title: cleanTitle,
    category: category ? category.trim() : 'Genel',
    summary: summary && summary.trim().length > 0 ? summary.trim() : cleanContent.slice(0, 160) + '...',
    content: cleanContent,
    authorName: authorDisplayName,
    authorStudentNumber: user.studentNumber || user.username,
    authorDepartment: user.department || 'Siyasal Bilgiler',
    isPseudonym: !!cleanPseudonym,
    pseudonym: cleanPseudonym,
    realAuthorName: user.fullName,
    status: isPrivileged ? 'published' : 'pending', // Admin/Kurucu yazısı anında yayında
    rejectionReason: null,
    likes: [],
    comments: [],
    readCount: 0,
    createdAt: new Date().toISOString()
  };

  if (!db.articles) db.articles = [];
  db.articles.unshift(newArticle);
  writeDatabase(db);

  const message = isPrivileged 
    ? 'Yazı doğrudan yayına alındı.' 
    : 'Yazınız başarıyla gönderildi! Kulüp editör masası onayından sonra herkes tarafından okunabilecektir.';

  res.status(201).json({ success: true, message, article: newArticle });
});

// Makale Okunma Sayacı Arttır
app.post('/api/articles/:id/view', (req, res) => {
  const db = readDatabase();
  const article = (db.articles || []).find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Yazı bulunamadı.' });

  article.readCount = (article.readCount || 0) + 1;
  writeDatabase(db);
  res.json({ success: true, readCount: article.readCount });
});

// Makale Beğen / Beğeniyi Kaldır
app.post('/api/articles/:id/like', requireAuth, (req, res) => {
  const db = readDatabase();
  const article = (db.articles || []).find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Yazı bulunamadı.' });

  if (!Array.isArray(article.likes)) article.likes = [];
  const userIdentifier = req.currentUser.studentNumber || req.currentUser.username;
  const index = article.likes.indexOf(userIdentifier);

  let liked = false;
  if (index === -1) {
    article.likes.push(userIdentifier);
    liked = true;
  } else {
    article.likes.splice(index, 1);
    liked = false;
  }

  writeDatabase(db);
  res.json({ success: true, liked, likesCount: article.likes.length });
});

// Makale Onayla (SADECE ADMİN)
app.post('/api/articles/:id/approve', requireAdmin, (req, res) => {
  const db = readDatabase();
  const article = (db.articles || []).find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Yazı bulunamadı.' });

  article.status = 'published';
  article.rejectionReason = null;
  writeDatabase(db);
  res.json({ success: true, article });
});

// Makale Reddet (SADECE ADMİN)
app.post('/api/articles/:id/reject', requireAdmin, (req, res) => {
  const db = readDatabase();
  const article = (db.articles || []).find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Yazı bulunamadı.' });

  const { reason } = req.body;
  article.status = 'rejected';
  article.rejectionReason = reason ? reason.trim() : 'Kulüp yayın ilkelerine uygun bulunmadı.';
  writeDatabase(db);
  res.json({ success: true, article });
});

// Makale Sil (Admin, Kurucu veya Yazarın Kendisi)
app.delete('/api/articles/:id', requireAuth, (req, res) => {
  const db = readDatabase();
  const article = (db.articles || []).find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Yazı bulunamadı.' });

  const user = req.currentUser;
  const isAuthor = (user.studentNumber && article.authorStudentNumber === user.studentNumber) || 
                   (article.authorStudentNumber === user.username);

  if (user.role !== 'admin' && user.role !== 'founder' && !isAuthor) {
    return res.status(403).json({ error: 'Yalnızca kendi yazınızı silebilirsiniz.' });
  }

  db.articles = db.articles.filter(a => a.id !== req.params.id);
  writeDatabase(db);
  res.json({ success: true });
});

// Makaleye Yorum Ekle (Giriş Yapmış Öğrenci veya Admin)
app.post('/api/articles/:id/comments', requireAuth, (req, res) => {
  const db = readDatabase();
  const article = (db.articles || []).find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Yazı bulunamadı.' });

  const { text, usePseudonym, pseudonym } = req.body;
  if (!text || text.trim().length < 2) {
    return res.status(400).json({ error: 'Yorum metni en az 2 karakter olmalıdır.' });
  }

  const user = req.currentUser;
  const cleanPseudonym = (usePseudonym && pseudonym && pseudonym.trim().length > 0) ? pseudonym.trim() : null;
  const authorDisplayName = cleanPseudonym || user.fullName;

  const newComment = {
    id: 'c_' + crypto.randomUUID().slice(0, 8),
    authorName: authorDisplayName,
    authorStudentNumber: user.studentNumber || user.username,
    authorDepartment: user.department || 'Siyasal Bilgiler',
    isPseudonym: !!cleanPseudonym,
    pseudonym: cleanPseudonym,
    realAuthorName: user.fullName,
    text: text.trim(),
    createdAt: new Date().toISOString()
  };

  if (!Array.isArray(article.comments)) article.comments = [];
  article.comments.push(newComment);
  writeDatabase(db);

  res.status(201).json({ success: true, comment: newComment, commentsCount: article.comments.length });
});

// Makale Yorumunu Sil (Admin, Kurucu veya Yorum Sahibi)
app.delete('/api/articles/:id/comments/:commentId', requireAuth, (req, res) => {
  const db = readDatabase();
  const article = (db.articles || []).find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ error: 'Yazı bulunamadı.' });

  if (!Array.isArray(article.comments)) article.comments = [];
  const commentIndex = article.comments.findIndex(c => c.id === req.params.commentId);
  if (commentIndex === -1) return res.status(404).json({ error: 'Yorum bulunamadı.' });

  const comment = article.comments[commentIndex];
  const user = req.currentUser;
  const isAuthor = (user.studentNumber && comment.authorStudentNumber === user.studentNumber) ||
                   (comment.authorStudentNumber === user.username);

  if (user.role !== 'admin' && user.role !== 'founder' && !isAuthor) {
    return res.status(403).json({ error: 'Yalnızca kendi yorumunuzu silebilirsiniz.' });
  }

  article.comments.splice(commentIndex, 1);
  writeDatabase(db);
  res.json({ success: true });
});

// ================= İSTEK KİTAP API =================

// İstek Kitapları Getir (Herkese Açık)
app.get('/api/book-requests', (req, res) => {
  const db = readDatabase();
  res.json(db.bookRequests || []);
});

// Yeni İstek Kitap Ekle (Giriş Yapmış Öğrenci veya Admin)
app.post('/api/book-requests', requireAuth, (req, res) => {
  const db = readDatabase();
  const { title, author, publisher, isbn, category, note } = req.body;
  const user = req.currentUser;

  if (!title || !author) {
    return res.status(400).json({ error: 'Kitap adı ve yazar bilgisi zorunludur.' });
  }

  // Zaten kütüphanede var mı kontrolü
  const alreadyInLibrary = (db.books || []).some(b => 
    b.title.toLowerCase().trim() === title.toLowerCase().trim()
  );
  if (alreadyInLibrary) {
    return res.status(400).json({ error: 'Bu eser zaten kütüphane kataloğumuzda mevcuttur! Katalog sekmesinden kontrol edebilirsiniz.' });
  }

  const userId = user.studentNumber || user.username;
  const newRequest = {
    id: 'req_' + crypto.randomUUID().slice(0, 8),
    title: title.trim(),
    author: author.trim(),
    publisher: publisher ? publisher.trim() : '',
    isbn: isbn ? isbn.trim() : '',
    category: category ? category.trim() : 'Genel',
    requestedBy: user.fullName,
    studentNumber: userId,
    note: note ? note.trim() : '',
    votes: [userId], // İsteyen kişi otomatik destekler
    status: 'pending', // pending (İnceleniyor), approved (Temin Ediliyor), acquired (Kütüphanede), rejected (Temin Edilemedi)
    createdAt: new Date().toISOString().split('T')[0]
  };

  if (!db.bookRequests) db.bookRequests = [];
  db.bookRequests.unshift(newRequest);
  writeDatabase(db);

  res.status(201).json({ success: true, message: 'Kitap isteğiniz başarıyla kaydedildi.', request: newRequest });
});

// İstek Kitaba Oy Ver / Desteği Kaldır
app.post('/api/book-requests/:id/vote', requireAuth, (req, res) => {
  const db = readDatabase();
  const request = (db.bookRequests || []).find(r => r.id === req.params.id);
  if (!request) return res.status(404).json({ error: 'İstek kaydı bulunamadı.' });

  if (!Array.isArray(request.votes)) request.votes = [];
  const userId = req.currentUser.studentNumber || req.currentUser.username;
  const index = request.votes.indexOf(userId);

  let voted = false;
  if (index === -1) {
    request.votes.push(userId);
    voted = true;
  } else {
    request.votes.splice(index, 1);
    voted = false;
  }

  writeDatabase(db);
  res.json({ success: true, voted, votesCount: request.votes.length });
});

// İstek Kitap Durumunu Güncelle (SADECE ADMİN)
app.put('/api/book-requests/:id/status', requireAdmin, (req, res) => {
  const db = readDatabase();
  const request = (db.bookRequests || []).find(r => r.id === req.params.id);
  if (!request) return res.status(404).json({ error: 'İstek kaydı bulunamadı.' });

  const { status } = req.body;
  const validStatuses = ['pending', 'approved', 'acquired', 'rejected'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Geçersiz durum değeri.' });
  }

  request.status = status;
  writeDatabase(db);
  res.json({ success: true, request });
});

// İstek Kitabı Doğrudan Kütüphane Kataloğuna Aktar (SADECE ADMİN)
app.post('/api/book-requests/:id/convert-to-book', requireAdmin, (req, res) => {
  const db = readDatabase();
  const request = (db.bookRequests || []).find(r => r.id === req.params.id);
  if (!request) return res.status(404).json({ error: 'İstek kaydı bulunamadı.' });

  const { shelf } = req.body;
  const newBook = {
    id: 'b_' + crypto.randomUUID().slice(0, 8),
    title: request.title,
    author: request.author,
    category: request.category || 'Genel',
    language: 'Türkçe',
    shelf: shelf ? shelf.trim() : 'SBF-YENİ',
    isbn: request.isbn || '',
    totalCopies: 1,
    availableCopies: 1,
    notes: `Öğrenci talebi üzerine kütüphaneye kazandırıldı (Talep: ${request.requestedBy}).`
  };

  db.books.unshift(newBook);
  request.status = 'acquired';
  writeDatabase(db);

  res.json({ success: true, book: newBook, request });
});

// İstek Kitabı Sil (SADECE ADMİN)
app.delete('/api/book-requests/:id', requireAdmin, (req, res) => {
  const db = readDatabase();
  const reqIndex = (db.bookRequests || []).findIndex(r => r.id === req.params.id);
  if (reqIndex === -1) return res.status(404).json({ error: 'İstek kaydı bulunamadı.' });

  db.bookRequests.splice(reqIndex, 1);
  writeDatabase(db);
  res.json({ success: true });
});

// ================= DERS NOTU & SINAV KAYNAK HAVUZU API =================

// Tüm Notları Getir (Mahlas Korumalı / Kurucu için Tam Yetki)
app.get('/api/exam-notes', (req, res) => {
  const db = readDatabase();
  const user = getSessionUser(req);
  const isFounder = user && user.role === 'founder';

  let list = db.examNotes || [];
  if (!isFounder) {
    list = list.map(n => {
      if (n.isPseudonym) {
        const { realAuthorName, ...safe } = n;
        return safe;
      }
      return n;
    });
  }
  res.json(list);
});

// Yeni Ders Notu Ekle (Giriş Yapmış Öğrenci veya Admin)
app.post('/api/exam-notes', requireAuth, (req, res) => {
  const db = readDatabase();
  const { 
    title, courseName, courseCode, instructor, department, 
    semester, type, description, content, driveUrl, 
    usePseudonym, pseudonym 
  } = req.body;
  const user = req.currentUser;

  if (!title || !courseName) {
    return res.status(400).json({ error: 'Not başlığı ve ders adı zorunludur.' });
  }

  if ((!content || content.trim().length === 0) && (!driveUrl || driveUrl.trim().length === 0)) {
    return res.status(400).json({ error: 'Öğrencilerin faydalanabilmesi için lütfen not özeti metni girin veya indirme bağlantısı (Drive/Bulut) ekleyin.' });
  }

  const cleanPseudonym = (usePseudonym && pseudonym && pseudonym.trim().length > 0) ? pseudonym.trim() : null;
  const authorDisplayName = cleanPseudonym || user.fullName;

  const newNote = {
    id: 'note_' + crypto.randomUUID().slice(0, 8),
    title: title.trim(),
    courseName: courseName.trim(),
    courseCode: courseCode ? courseCode.trim().toUpperCase() : '',
    instructor: instructor ? instructor.trim() : '',
    department: department ? department.trim() : (user.department || 'Siyasal Bilgiler'),
    semester: semester ? semester.trim() : 'Güz',
    type: type ? type.trim() : 'Vize Özeti',
    description: description ? description.trim() : '',
    content: content ? content.trim() : '',
    driveUrl: driveUrl ? driveUrl.trim() : '',
    authorName: authorDisplayName,
    authorStudentNumber: user.studentNumber || user.username,
    isPseudonym: !!cleanPseudonym,
    pseudonym: cleanPseudonym,
    realAuthorName: user.fullName,
    helpfulCount: 0,
    helpfulUsers: [],
    downloadsCount: 0,
    createdAt: new Date().toISOString()
  };

  if (!db.examNotes) db.examNotes = [];
  db.examNotes.unshift(newNote);
  writeDatabase(db);

  res.status(201).json({ success: true, message: 'Ders notunuz başarıyla havuzda paylaşıldı!', note: newNote });
});

// Ders Notuna Faydalı Oyu Ver / Geri Al (Giriş Yapmış Öğrenci veya Admin)
app.post('/api/exam-notes/:id/helpful', requireAuth, (req, res) => {
  const db = readDatabase();
  const note = (db.examNotes || []).find(n => n.id === req.params.id);
  if (!note) return res.status(404).json({ error: 'Ders notu bulunamadı.' });

  if (!Array.isArray(note.helpfulUsers)) note.helpfulUsers = [];
  const userIdentifier = req.currentUser.studentNumber || req.currentUser.username;
  const index = note.helpfulUsers.indexOf(userIdentifier);

  let voted = false;
  if (index === -1) {
    note.helpfulUsers.push(userIdentifier);
    note.helpfulCount = (note.helpfulCount || 0) + 1;
    voted = true;
  } else {
    note.helpfulUsers.splice(index, 1);
    note.helpfulCount = Math.max(0, (note.helpfulCount || 1) - 1);
    voted = false;
  }

  writeDatabase(db);
  res.json({ success: true, voted, helpfulCount: note.helpfulCount });
});

// Ders Notu İndirme / Görüntüleme Sayacı Arttır
app.post('/api/exam-notes/:id/download', (req, res) => {
  const db = readDatabase();
  const note = (db.examNotes || []).find(n => n.id === req.params.id);
  if (!note) return res.status(404).json({ error: 'Ders notu bulunamadı.' });

  note.downloadsCount = (note.downloadsCount || 0) + 1;
  writeDatabase(db);
  res.json({ success: true, downloadsCount: note.downloadsCount });
});

// Ders Notunu Sil (Admin, Kurucu veya Yazar)
app.delete('/api/exam-notes/:id', requireAuth, (req, res) => {
  const db = readDatabase();
  const noteIndex = (db.examNotes || []).findIndex(n => n.id === req.params.id);
  if (noteIndex === -1) return res.status(404).json({ error: 'Ders notu bulunamadı.' });

  const note = db.examNotes[noteIndex];
  const user = req.currentUser;
  const isAuthor = (user.studentNumber && note.authorStudentNumber === user.studentNumber) ||
                   (note.authorStudentNumber === user.username);

  if (user.role !== 'admin' && user.role !== 'founder' && !isAuthor) {
    return res.status(403).json({ error: 'Yalnızca kendi paylaştığınız ders notunu silebilirsiniz.' });
  }

  db.examNotes.splice(noteIndex, 1);
  writeDatabase(db);
  res.json({ success: true, message: 'Ders notu silindi.' });
});

// ================= KURUCU (FOUNDER) GİZLİ ÇEKİRDEK API =================

// Sistem Röntgeni, Oturumlar ve Ham Veri Denetimi (SADECE KURUCU)
app.get('/api/founder/master-audit', requireFounder, (req, res) => {
  const db = readDatabase();
  let fileSize = 0;
  let fileMtime = null;
  try {
    const stats = fs.statSync(DATA_FILE);
    fileSize = stats.size;
    fileMtime = stats.mtime;
  } catch (e) {}

  const activeSessionsList = Array.from(activeSessions.entries()).map(([tok, s]) => ({
    tokenPreview: tok.slice(0, 10) + '...' + tok.slice(-4),
    username: s.username,
    fullName: s.fullName,
    role: s.role,
    department: s.department,
    createdAt: new Date(s.createdAt).toISOString(),
    ageMinutes: Math.round((Date.now() - s.createdAt) / 60000)
  }));

  const userAccounts = (db.users || []).map(u => ({
    id: u.id,
    username: u.username,
    fullName: u.fullName,
    role: u.role,
    email: u.email,
    department: u.department,
    status: u.status,
    isImmune: u.role === 'founder' || !!u.isImmune,
    registerDate: u.registerDate || '-'
  }));

  // Mahlas Arkasındaki Gerçek Kimlikler
  const unmaskedArticles = (db.articles || []).filter(a => a.isPseudonym).map(a => ({
    id: a.id,
    title: a.title,
    pseudonym: a.pseudonym,
    realAuthorName: a.realAuthorName,
    studentNumber: a.authorStudentNumber,
    department: a.authorDepartment
  }));

  const unmaskedNotes = (db.examNotes || []).filter(n => n.isPseudonym).map(n => ({
    id: n.id,
    title: n.title,
    courseName: n.courseName,
    pseudonym: n.pseudonym,
    realAuthorName: n.realAuthorName,
    studentNumber: n.authorStudentNumber,
    department: n.department
  }));

  res.json({
    systemHealth: {
      serverUptimeSeconds: Math.floor(process.uptime()),
      nodeVersion: process.version,
      memoryUsageMB: Math.round(process.memoryUsage().rss / (1024 * 1024)),
      databaseSizeBytes: fileSize,
      databaseLastModified: fileMtime,
      totalUsers: (db.users || []).length,
      totalBooks: (db.books || []).length,
      totalLoans: (db.loans || []).length,
      totalArticles: (db.articles || []).length,
      totalNotes: (db.examNotes || []).length,
      activeSessionsCount: activeSessions.size
    },
    activeSessions: activeSessionsList,
    userAccounts,
    unmaskedArticles,
    unmaskedNotes
  });
});

// Kurucu Ham Sistem Yedeği (SADECE KURUCU)
app.get('/api/founder/raw-backup', requireFounder, (req, res) => {
  const db = readDatabase();
  res.setHeader('Content-disposition', `attachment; filename=SBF_MASTER_CORE_BACKUP_${new Date().toISOString().split('T')[0]}.json`);
  res.setHeader('Content-type', 'application/json');
  res.send(JSON.stringify(db, null, 2));
});

// Kurucu: Yeni Admin Hesabı Oluştur (SÜPER YETKİ)
app.post('/api/founder/admins', requireFounder, (req, res) => {
  const { username, password, fullName, email, department } = req.body;
  if (!username || !password || !fullName) {
    return res.status(400).json({ error: 'Kullanıcı adı, şifre ve ad soyad alanları zorunludur.' });
  }

  const db = readDatabase();
  const cleanUsername = username.trim().toLowerCase();
  const exists = db.users.some(u => u.username.toLowerCase() === cleanUsername);
  if (exists) {
    return res.status(400).json({ error: 'Bu kullanıcı adı zaten sistemde kayıtlı.' });
  }

  const newAdminUser = {
    id: 'u_' + crypto.randomUUID().slice(0, 8),
    username: cleanUsername,
    password: password.trim(),
    fullName: fullName.trim(),
    role: 'admin',
    email: email ? email.trim() : `admin.${cleanUsername}@marmara.edu.tr`,
    department: department ? department.trim() : 'Kütüphane Yönetim Kurulu',
    status: 'approved',
    registerDate: new Date().toISOString().split('T')[0]
  };

  const newAdminMember = {
    id: 'm_' + crypto.randomUUID().slice(0, 8),
    studentNumber: cleanUsername,
    fullName: fullName.trim(),
    department: department ? department.trim() : 'Kütüphane Yönetim Kurulu',
    role: 'Kütüphaneci (Yönetici)',
    email: email ? email.trim() : `admin.${cleanUsername}@marmara.edu.tr`,
    phone: '',
    status: 'approved',
    registerDate: new Date().toISOString().split('T')[0]
  };

  db.users.push(newAdminUser);
  db.members.push(newAdminMember);
  writeDatabase(db);

  res.status(201).json({
    success: true,
    message: 'Yeni Kütüphane Yöneticisi (Admin) hesabı başarıyla tanımlandı.',
    admin: newAdminUser
  });
});

// Kurucu: Admin Hesabını Sil / Yetkisini Kaldır (SÜPER YETKİ)
app.delete('/api/founder/admins/:id', requireFounder, (req, res) => {
  const db = readDatabase();
  const userIndex = db.users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) return res.status(404).json({ error: 'Yönetici hesabı bulunamadı.' });

  const targetUser = db.users[userIndex];
  if (targetUser.role === 'founder' || targetUser.isImmune) {
    return res.status(403).json({ error: 'Kurucu hesabı dokunulmazdır ve kaldırılamaz.' });
  }

  db.users.splice(userIndex, 1);
  db.members = db.members.filter(m => m.studentNumber !== targetUser.username && m.studentNumber !== targetUser.studentNumber);
  writeDatabase(db);

  res.json({
    success: true,
    message: `${targetUser.fullName} (${targetUser.username}) yöneticilik hesabı sistemden tamamen kaldırıldı.`
  });
});

// Kurucu: Herhangi Bir Kullanıcının Admin Statüsünü Aç/Kapat (Promote / Demote)
app.post('/api/founder/users/:id/toggle-admin', requireFounder, (req, res) => {
  const db = readDatabase();
  const user = db.users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Kullanıcı hesabı bulunamadı.' });

  if (user.role === 'founder' || user.isImmune) {
    return res.status(403).json({ error: 'Kurucu hesap statüsü değiştirilemez.' });
  }

  if (user.role === 'admin') {
    user.role = 'student';
    const member = db.members.find(m => m.studentNumber === user.username || m.studentNumber === user.studentNumber);
    if (member) member.role = 'Öğrenci';
    writeDatabase(db);
    return res.json({
      success: true,
      message: `${user.fullName} kullanıcısının Admin yetkisi kaldırıldı (Öğrenci yapıldı).`,
      newRole: 'student'
    });
  } else {
    user.role = 'admin';
    const member = db.members.find(m => m.studentNumber === user.username || m.studentNumber === user.studentNumber);
    if (member) member.role = 'Kütüphaneci (Yönetici)';
    writeDatabase(db);
    return res.json({
      success: true,
      message: `${user.fullName} kullanıcısına Kütüphane Yöneticisi (Admin) yetkisi verildi!`,
      newRole: 'admin'
    });
  }
});

// ================= KVKK & ÇEREZ POLİTİKASI API =================
app.get('/api/kvkk-policy', (req, res) => {
  res.json({
    title: "6698 Sayılı KVKK Kapsamında Kütüphane Aydınlatma Metni ve Çerez Politikası",
    lawReference: "6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK)",
    dataController: "Marmara Üniversitesi Siyasal Bilgiler Fakültesi Kütüphane ve Dokümantasyon İnisiyatifi",
    effectiveDate: "2026-10-01",
    cookieUsage: "Yalnızca zorunlu teknik oturum çerezleri ve tercih depolaması kullanılmaktadır. Üçüncü taraf reklam ve izleme çerezi barındırılmaz.",
    rightsReference: "KVKK Madde 11 (İlgili Kişinin Hakları)"
  });
});

// Sunucuyu başlat
app.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`🏛️  Marmara Üniversitesi SBF Kütüphane Sistemi Hazır`);
  console.log(`🔒 Güvenlik: Role-Based Access Control (Admin / Öğrenci / Ziyaretçi)`);
  console.log(`🌐 Yerel Erişim:    http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
