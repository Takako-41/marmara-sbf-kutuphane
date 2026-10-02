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
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ error: 'Bu işlem için Kütüphane Yöneticisi (Admin) yetkisi gereklidir.' });
  }
  req.currentUser = user;
  next();
}

// Yardımcı: Veritabanı Oku / Yaz
function readDatabase() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      const initial = { settings: {}, users: [], books: [], members: [], loans: [] };
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), 'utf8');
      return initial;
    }
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(data);
    if (!parsed.users) parsed.users = [];
    return parsed;
  } catch (err) {
    console.error('Veritabanı okuma hatası:', err);
    return { settings: {}, users: [], books: [], members: [], loans: [] };
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

// Giriş Yap
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
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

  // Ziyaretçi veya Normal Öğrenci Görünümü
  if (!user || user.role !== 'admin') {
    // Sadece kitap kataloğu ve genel ayarlar herkese açıktır.
    // Öğrenci giriş yapmışsa sadece kendi ödünç aldığı kitapları görür.
    let studentLoans = [];
    if (user && user.studentNumber) {
      studentLoans = db.loans.filter(l => l.memberNumber === user.studentNumber);
    }

    return res.json({
      settings: db.settings,
      books: db.books,
      members: [], // Öğrenci ve yabancılar asla diğer üyeleri göremez!
      loans: studentLoans,
      user: user || null
    });
  }

  // Admin Görünümü: Her şeyi görür
  res.json({
    settings: db.settings,
    books: db.books,
    members: db.members,
    loans: db.loans,
    pendingMembers: db.members.filter(m => m.status === 'pending'),
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

// Sunucuyu başlat
app.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`🏛️  Marmara Üniversitesi SBF Kütüphane Sistemi Hazır`);
  console.log(`🔒 Güvenlik: Role-Based Access Control (Admin / Öğrenci / Ziyaretçi)`);
  console.log(`🌐 Yerel Erişim:    http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
