// Marmara Üniversitesi SBF Kütüphane Sistemi (TR / FR / EN) - Rol & Güvenlik Mimarisi

const I18N = {
  tr: {
    facultyTitle: "Marmara Üniversitesi",
    libSubtitle: "Siyasal Bilgiler Fakültesi Kütüphanesi",
    netOnline: "Ağ Aktif",
    guestNoticeTitle: "Katalog Arama Modundasınız (Açık Erişim)",
    guestNoticeDesc: "Kitapları tarayabilir ve raf numaralarını görebilirsiniz. Ödünç alma geçmişi ve işlemler için lütfen giriş yapınız.",
    btnLogin: "Giriş Yap",
    btnRegister: "Öğrenci Kayıt",
    btnLogout: "Çıkış Yap",
    tabDashboard: "Pano",
    tabBooks: "Kitap Kataloğu",
    tabMyBooks: "Ödünç Aldığım Kitaplar",
    tabLoans: "Ödünç & İade",
    tabMembers: "Öğrenci & Üyeler",
    tabApprovals: "Onay Bekleyenler",
    tabBackup: "Yedekleme & Ağ",
    statTotalBooks: "Toplam Kitap",
    statDistinctTitles: "farklı eser",
    statAvailableBooks: "Rafta Mevcut",
    statReadyToBorrow: "Ödünç verilmeye hazır",
    statActiveLoans: "Ödünçte",
    statCurrentlyReading: "Okuyucularda",
    statOverdueLoans: "Gecikmiş İadeler",
    statNeedsReturn: "Süresi dolan",
    quickActionsTitle: "Hızlı İşlemler",
    actionQuickLoan: "Hızlı Kitap Ödünç Ver",
    actionAddBook: "Yeni Kitap Ekle",
    recentLoansTitle: "Son Ödünç ve Geciken Kitaplar",
    viewAll: "Tümünü Gör →",
    colBook: "Kitap",
    colMember: "Öğrenci / Üye",
    colDueDate: "Teslim Tarihi",
    colAction: "İşlem",
    colActions: "İşlemler",
    colBookTitle: "Eser Adı",
    colAuthor: "Yazar",
    colCategory: "Disiplin / Tür",
    colLanguage: "Dil",
    colShelf: "Raf / Yer No",
    colCopies: "Mevcut / Toplam",
    colIssueDate: "Veriliş Tarihi",
    colStatus: "Durum",
    colMemberNumber: "Öğrenci / Sicil No",
    colFullName: "Ad Soyad",
    colDepartment: "Bölüm / Birim",
    colRole: "Statü",
    colContact: "İletişim",
    colActiveBookCount: "Elindeki Kitap",
    optAllLanguages: "Tüm Diller",
    btnAddBook: "Kitap Ekle",
    btnAddMember: "Üye Ekle",
    btnIssueBook: "Kitap Ödünç Ver",
    optActiveLoans: "Sadece Ödünçtekiler",
    optOverdueOnly: "Sadece Gecikenler",
    optReturnedOnly: "İade Edilenler",
    optAllLoans: "Tüm Geçmiş",
    myBooksTitle: "Ödünç Aldığım Kitaplar",
    myBooksSubtitle: "Elinizdeki kitaplar ve son teslim tarihleri",
    approvalsTitle: "Trol ve Sahte Hesap Kalkanı (Onay Bekleyenler)",
    approvalsDesc: "Öğrencilerin sisteme girebilmesi için burada öğrenci kimliklerini doğrulayıp onaylamanız gerekir.",
    btnApprove: "Onayla & Yetkilendir",
    btnReject: "Reddet / Sil",
    modalLoginTitle: "Sisteme Giriş Yap",
    lblLoginUsername: "Öğrenci No veya Yönetici Adı *",
    lblLoginPassword: "Şifre *",
    btnLoginSubmit: "Giriş Yap",
    btnGoRegister: "Öğrenci hesabınız yok mu? Kayıt Olun →",
    modalRegisterTitle: "Öğrenci Kütüphane Kaydı",
    regNotice: "Trol ve sahte hesapları önlemek için yalnızca @marun.edu.tr e-posta adresi kabul edilir. Kaydınız kütüphane görevlisi onayından sonra açılır.",
    lblRegNumber: "Öğrenci Numarası *",
    lblRegFullName: "Ad Soyad (Nom Prénom) *",
    lblRegPassword: "Şifre Belirleyin *",
    btnRegisterSubmit: "Başvuruyu Gönder",
    serverInfoTitle: "Kampüs ve Yerel Ağ Yayını",
    serverInfoSubtitle: "RTE-SBF-S1-1K.01.RC Switch Bağlantısı",
    serverInfoDesc: "Bu uygulama okulun yerel ağında (Intranet / eduroam) çalışacak şekilde yapılandırılmıştır.",
    backupTitle: "Tek Tıkla Veritabanı Yedeği",
    backupSubtitle: "Kayıp yaşamamak için anlık dışa aktarma",
    backupDesc: "Kütüphanedeki tüm kitap kataloğunu, öğrenci kayıtlarını ve ödünç geçmişini tek bir JSON dosyası halinde indirebilirsiniz.",
    btnDownloadBackup: "Tüm Kütüphane Verisini İndir (.JSON)",
    modalIssueTitle: "Kitap Ödünç Ver",
    lblSelectMember: "Öğrenci / Akademisyen Seçin *",
    lblSelectBook: "Kitap Seçin (Yalnızca Rafta Olanlar) *",
    lblLoanDuration: "Ödünç Süresi (Gün)",
    opt15Days: "15 Gün (Öğrenci)",
    opt30Days: "30 Gün (Akademisyen)",
    btnCancel: "İptal",
    btnConfirmIssue: "Ödünç Ver",
    modalAddBookTitle: "Yeni Kitap Ekle",
    modalEditBookTitle: "Kitap Bilgilerini Düzenle",
    lblBookTitle: "Eser Adı (Titre) *",
    lblAuthor: "Yazar (Auteur) *",
    lblCategory: "Disiplin / Tür",
    lblLanguage: "Kitabın Dili",
    lblShelf: "Raf / Yer No (Cote)",
    lblTotalCopies: "Toplam Adet (Kopya)",
    lblNotes: "Açıklama / Notlar",
    btnSave: "Kaydet",
    modalAddMemberTitle: "Yeni Öğrenci / Üye Ekle",
    modalEditMemberTitle: "Üye Bilgilerini Düzenle",
    lblMemberNumber: "Öğrenci / Sicil No *",
    lblFullName: "Ad Soyad (Nom Prénom) *",
    lblDepartment: "Bölüm / Département",
    lblRole: "Statü",
    roleStudent: "Öğrenci",
    roleFaculty: "Öğretim Üyesi",
    roleResearcher: "Araştırma Görevlisi",
    btnReturn: "İade Al",
    statusOverdue: "Gecikmiş",
    statusBorrowed: "Ödünçte",
    statusReturned: "İade Edildi",
    daysLeft: "gün kaldı",
    daysOverdue: "gün gecikti",
    confirmReturn: "Bu kitabı iade almak istiyor musunuz?",
    confirmDeleteBook: "Bu kitabı silmek istediğinize emin misiniz?",
    confirmDeleteMember: "Bu üyeyi silmek istediğinize emin misiniz?",
    msgBookAdded: "Kitap başarıyla kaydedildi.",
    msgMemberAdded: "Üye başarıyla kaydedildi.",
    msgIssued: "Kitap ödünç verildi.",
    msgReturned: "Kitap başarıyla iade alındı.",
    msgApproved: "Öğrenci başarıyla onaylandı ve sisteme dahil edildi.",
    msgRejected: "Öğrenci başvurusu reddedildi ve silindi."
  },
  fr: {
    facultyTitle: "Université de Marmara",
    libSubtitle: "Bibliothèque de la Faculté des Sciences Politiques",
    netOnline: "Réseau Actif",
    guestNoticeTitle: "Mode Consultation Ouverte (Accès Libre)",
    guestNoticeDesc: "Vous pouvez rechercher des ouvrages et consulter les cotes de rayon. Veuillez vous connecter pour vos emprunts.",
    btnLogin: "Connexion",
    btnRegister: "Inscription Étudiant",
    btnLogout: "Déconnexion",
    tabDashboard: "Tableau de Bord",
    tabBooks: "Catalogue",
    tabMyBooks: "Mes Emprunts",
    tabLoans: "Emprunts & Retours",
    tabMembers: "Membres & Étudiants",
    tabApprovals: "Validations en Attente",
    tabBackup: "Sauvegarde & Réseau",
    statTotalBooks: "Total des Livres",
    statDistinctTitles: "titres différents",
    statAvailableBooks: "En Rayon",
    statReadyToBorrow: "Prêts à emprunter",
    statActiveLoans: "En Prêt",
    statCurrentlyReading: "Chez les lecteurs",
    statOverdueLoans: "Prêts en Retard",
    statNeedsReturn: "Date dépassée",
    quickActionsTitle: "Actions Rapides",
    actionQuickLoan: "Emprunter un Livre",
    actionAddBook: "Ajouter un Livre",
    recentLoansTitle: "Emprunts Récents et Retards",
    viewAll: "Voir Tout →",
    colBook: "Livre",
    colMember: "Étudiant / Membre",
    colDueDate: "Date d'Échéance",
    colAction: "Action",
    colActions: "Actions",
    colBookTitle: "Titre de l'Ouvrage",
    colAuthor: "Auteur",
    colCategory: "Discipline / Genre",
    colLanguage: "Langue",
    colShelf: "Cote / Rayon",
    colCopies: "Dispo / Total",
    colIssueDate: "Date d'Emprunt",
    colStatus: "Statut",
    colMemberNumber: "N° Étudiant / Matricule",
    colFullName: "Nom & Prénom",
    colDepartment: "Département",
    colRole: "Statut",
    colContact: "Contact",
    colActiveBookCount: "Livres Empruntés",
    optAllLanguages: "Toutes les Langues",
    btnAddBook: "Nouveau Livre",
    btnAddMember: "Nouveau Membre",
    btnIssueBook: "Prêter un Livre",
    optActiveLoans: "Emprunts Actifs",
    optOverdueOnly: "En Retard Uniquement",
    optReturnedOnly: "Livres Retournés",
    optAllLoans: "Tout l'Historique",
    myBooksTitle: "Mes Emprunts en Cours",
    myBooksSubtitle: "Vos livres empruntés et leurs dates d'échéance",
    approvalsTitle: "Bouclier Anti-Trolls (Validations Étudiants)",
    approvalsDesc: "Validez l'identité des étudiants pour autoriser leur accès à la bibliothèque.",
    btnApprove: "Valider l'Accès",
    btnReject: "Rejeter / Supprimer",
    modalLoginTitle: "Connexion au Système",
    lblLoginUsername: "N° Étudiant ou Identifiant Admin *",
    lblLoginPassword: "Mot de Passe *",
    btnLoginSubmit: "Se Connecter",
    btnGoRegister: "Pas encore de compte ? S'inscrire →",
    modalRegisterTitle: "Inscription Étudiant",
    regNotice: "Pour éviter les comptes indésirables, seul l'email @marun.edu.tr est accepté. Votre compte sera activé après validation du bibliothécaire.",
    lblRegNumber: "Numéro Étudiant *",
    lblRegFullName: "Nom & Prénom *",
    lblRegPassword: "Définir un Mot de Passe *",
    btnRegisterSubmit: "Envoyer l'Inscription",
    serverInfoTitle: "Diffusion Réseau du Campus",
    serverInfoSubtitle: "Connexion Switch RTE-SBF-S1-1K.01.RC",
    serverInfoDesc: "Cette application est configurée pour le réseau local universitaire (Intranet / eduroam).",
    backupTitle: "Sauvegarde en 1 Clic",
    backupSubtitle: "Exportation instantanée pour sécuriser vos données",
    backupDesc: "Téléchargez l'intégralité du catalogue et des enregistrements en format JSON.",
    btnDownloadBackup: "Télécharger les Données (.JSON)",
    modalIssueTitle: "Enregistrer un Emprunt",
    lblSelectMember: "Sélectionner l'Étudiant / Enseignant *",
    lblSelectBook: "Sélectionner le Livre (En Rayon) *",
    lblLoanDuration: "Durée du Prêt (Jours)",
    opt15Days: "15 Jours (Étudiant)",
    opt30Days: "30 Jours (Enseignant)",
    btnCancel: "Annuler",
    btnConfirmIssue: "Confirmer le Prêt",
    modalAddBookTitle: "Ajouter un Nouveau Livre",
    modalEditBookTitle: "Modifier les Détails du Livre",
    lblBookTitle: "Titre de l'Ouvrage *",
    lblAuthor: "Auteur *",
    lblCategory: "Discipline / Genre",
    lblLanguage: "Langue du Livre",
    lblShelf: "Cote / Rayonnement",
    lblTotalCopies: "Nombre d'Exemplaires",
    lblNotes: "Description / Remarques",
    btnSave: "Enregistrer",
    modalAddMemberTitle: "Ajouter un Étudiant / Membre",
    modalEditMemberTitle: "Modifier le Profil du Membre",
    lblMemberNumber: "N° Étudiant / Matricule *",
    lblFullName: "Nom & Prénom *",
    lblDepartment: "Département",
    lblRole: "Statut",
    roleStudent: "Étudiant",
    roleFaculty: "Enseignant-Chercheur",
    roleResearcher: "Assistant de Recherche",
    btnReturn: "Retourner",
    statusOverdue: "En Retard",
    statusBorrowed: "En Prêt",
    statusReturned: "Retourné",
    daysLeft: "j restants",
    daysOverdue: "j de retard",
    confirmReturn: "Confirmez-vous le retour de cet ouvrage ?",
    confirmDeleteBook: "Êtes-vous sûr de vouloir supprimer cet ouvrage ?",
    confirmDeleteMember: "Êtes-vous sûr de vouloir supprimer ce membre ?",
    msgBookAdded: "Livre enregistré avec succès.",
    msgMemberAdded: "Membre enregistré avec succès.",
    msgIssued: "L'emprunt a été enregistré.",
    msgReturned: "Le livre a été retourné en rayon.",
    msgApproved: "Étudiant validé et compte activé avec succès.",
    msgRejected: "Demande refusée et supprimée."
  },
  en: {
    facultyTitle: "Marmara University",
    libSubtitle: "Faculty of Political Science Library",
    netOnline: "Network Online",
    guestNoticeTitle: "Open Public Catalog Mode",
    guestNoticeDesc: "You can search the book catalog and view shelf locations. Please log in to view loan status and perform library actions.",
    btnLogin: "Login",
    btnRegister: "Student Sign-Up",
    btnLogout: "Sign Out",
    tabDashboard: "Dashboard",
    tabBooks: "Book Catalog",
    tabMyBooks: "My Borrowed Books",
    tabLoans: "Circulation",
    tabMembers: "Members & Students",
    tabApprovals: "Pending Approvals",
    tabBackup: "Backup & Network",
    statTotalBooks: "Total Books",
    statDistinctTitles: "distinct titles",
    statAvailableBooks: "Available on Shelf",
    statReadyToBorrow: "Ready to borrow",
    statActiveLoans: "On Loan",
    statCurrentlyReading: "With borrowers",
    statOverdueLoans: "Overdue Returns",
    statNeedsReturn: "Past due date",
    quickActionsTitle: "Quick Actions",
    actionQuickLoan: "Quick Check-Out",
    actionAddBook: "Add New Book",
    recentLoansTitle: "Recent Loans & Overdue Books",
    viewAll: "View All →",
    colBook: "Book",
    colMember: "Student / Member",
    colDueDate: "Due Date",
    colAction: "Action",
    colActions: "Actions",
    colBookTitle: "Title",
    colAuthor: "Author",
    colCategory: "Subject / Category",
    colLanguage: "Language",
    colShelf: "Call No / Shelf",
    colCopies: "Avail / Total",
    colIssueDate: "Issue Date",
    colStatus: "Status",
    colMemberNumber: "Student / Staff ID",
    colFullName: "Full Name",
    colDepartment: "Department",
    colRole: "Role",
    colContact: "Contact",
    colActiveBookCount: "Active Loans",
    optAllLanguages: "All Languages",
    btnAddBook: "Add Book",
    btnAddMember: "Add Member",
    btnIssueBook: "Check-Out Book",
    optActiveLoans: "Active Loans Only",
    optOverdueOnly: "Overdue Only",
    optReturnedOnly: "Returned Only",
    optAllLoans: "Full History",
    myBooksTitle: "My Borrowed Books",
    myBooksSubtitle: "Your active loans and due dates",
    approvalsTitle: "Anti-Troll Shield (Pending Student Verifications)",
    approvalsDesc: "Verify student university credentials here to approve library system access.",
    btnApprove: "Approve & Authorize",
    btnReject: "Reject / Remove",
    modalLoginTitle: "Sign In to System",
    lblLoginUsername: "Student ID or Admin Username *",
    lblLoginPassword: "Password *",
    btnLoginSubmit: "Sign In",
    btnGoRegister: "No account yet? Register here →",
    modalRegisterTitle: "Student Library Registration",
    regNotice: "To prevent troll/fake accounts, only @marun.edu.tr university email is accepted. Accounts require librarian verification.",
    lblRegNumber: "Student ID *",
    lblRegFullName: "Full Name *",
    lblRegPassword: "Set Password *",
    btnRegisterSubmit: "Submit Registration",
    serverInfoTitle: "Campus Network Broadcast",
    serverInfoSubtitle: "Switch Connection: RTE-SBF-S1-1K.01.RC",
    serverInfoDesc: "Configured for local intranet and eduroam campus access.",
    backupTitle: "1-Click Full Backup",
    backupSubtitle: "Instant export to secure all records",
    backupDesc: "Download complete catalog and database in JSON format.",
    btnDownloadBackup: "Download Library Data (.JSON)",
    modalIssueTitle: "Check-Out Book",
    lblSelectMember: "Select Student / Academician *",
    lblSelectBook: "Select Book (Shelf Available Only) *",
    lblLoanDuration: "Loan Duration (Days)",
    opt15Days: "15 Days (Student)",
    opt30Days: "30 Days (Faculty)",
    btnCancel: "Cancel",
    btnConfirmIssue: "Check-Out",
    modalAddBookTitle: "Add New Book",
    modalEditBookTitle: "Edit Book Details",
    lblBookTitle: "Book Title *",
    lblAuthor: "Author *",
    lblCategory: "Subject / Category",
    lblLanguage: "Book Language",
    lblShelf: "Shelf / Call Number",
    lblTotalCopies: "Total Copies",
    lblNotes: "Description / Notes",
    btnSave: "Save",
    modalAddMemberTitle: "Add New Member",
    modalEditMemberTitle: "Edit Member Details",
    lblMemberNumber: "Student / Staff ID *",
    lblFullName: "Full Name *",
    lblDepartment: "Department",
    lblRole: "Role",
    roleStudent: "Student",
    roleFaculty: "Faculty Member",
    roleResearcher: "Research Assistant",
    btnReturn: "Check-In",
    statusOverdue: "Overdue",
    statusBorrowed: "Borrowed",
    statusReturned: "Returned",
    daysLeft: "days left",
    daysOverdue: "days overdue",
    confirmReturn: "Confirm check-in for this book?",
    confirmDeleteBook: "Are you sure you want to delete this book?",
    confirmDeleteMember: "Are you sure you want to delete this member?",
    msgBookAdded: "Book saved successfully.",
    msgMemberAdded: "Member saved successfully.",
    msgIssued: "Book successfully checked out.",
    msgReturned: "Book successfully returned to shelf.",
    msgApproved: "Student verified and approved successfully.",
    msgRejected: "Student application rejected."
  }
};

// Global State
let currentLang = localStorage.getItem('sbf_lang') || 'tr';
let currentUser = JSON.parse(localStorage.getItem('sbf_user') || 'null');
let currentToken = localStorage.getItem('sbf_token') || null;
let libraryData = { settings: {}, books: [], members: [], loans: [], pendingMembers: [] };
let activeTab = 'books'; // Varsayılan olarak kitap kataloğu açık

// DOM Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang, false);
  renderAuthHeader();
  renderNavigation();
  fetchData();
});

// Dil Yönetimi
function setLanguage(lang, reloadUI = true) {
  if (!I18N[lang]) lang = 'tr';
  currentLang = lang;
  localStorage.setItem('sbf_lang', lang);

  ['tr', 'fr', 'en'].forEach(l => {
    const btn = document.getElementById(`btnLang${l.toUpperCase()}`);
    if (btn) {
      if (l === lang) {
        btn.className = "px-2 py-1 text-xs font-semibold rounded-md transition-all flex items-center space-x-1 bg-white text-blue-950 shadow-sm";
      } else {
        btn.className = "px-2 py-1 text-xs font-medium rounded-md transition-all flex items-center space-x-1 text-white hover:bg-white/15";
      }
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  const headerFac = document.getElementById('headerFacultyName');
  const headerSub = document.getElementById('headerLibSubtitle');
  if (headerFac && I18N[lang].facultyTitle) headerFac.textContent = I18N[lang].facultyTitle;
  if (headerSub && I18N[lang].libSubtitle) headerSub.textContent = I18N[lang].libSubtitle;

  renderAuthHeader();
  renderNavigation();

  if (reloadUI) {
    if (currentUser && currentUser.role === 'admin') renderDashboard();
    renderBooks();
    if (currentUser && currentUser.role === 'admin') {
      renderLoans();
      renderMembers();
      renderApprovals();
    }
    if (currentUser && currentUser.role === 'student') {
      renderMyBooks();
    }
  }

  if (window.lucide) lucide.createIcons();
}

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) ? I18N[currentLang][key] : key;
}

// Kimlik Doğrulama Header Alanı (Sağ Üst)
function renderAuthHeader() {
  const container = document.getElementById('authHeaderArea');
  const guestBar = document.getElementById('guestNoticeBar');

  if (!currentUser) {
    // Ziyaretçi Görünümü
    if (guestBar) guestBar.classList.remove('hidden');
    container.innerHTML = `
      <button onclick="openModal('modal-login')" class="px-3 py-1.5 bg-white text-blue-950 hover:bg-blue-50 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center">
        <i data-lucide="log-in" class="w-3.5 h-3.5 mr-1 text-blue-900"></i>
        <span>${t('btnLogin')}</span>
      </button>
      <button onclick="openModal('modal-register')" class="px-2.5 py-1.5 bg-white/15 hover:bg-white/25 text-white rounded-lg text-xs font-medium transition-all hidden sm:flex items-center">
        <span>${t('btnRegister')}</span>
      </button>
    `;
  } else {
    // Giriş Yapmış Kullanıcı Görünümü
    if (guestBar) guestBar.classList.add('hidden');
    const roleBadge = currentUser.role === 'admin' 
      ? '<span class="px-1.5 py-0.5 text-[10px] bg-amber-400 text-slate-900 font-bold rounded">Admin</span>'
      : '<span class="px-1.5 py-0.5 text-[10px] bg-blue-300 text-blue-950 font-bold rounded">Öğrenci</span>';

    container.innerHTML = `
      <div class="flex items-center bg-white/10 rounded-lg px-2.5 py-1 border border-white/15 text-xs text-white">
        <i data-lucide="${currentUser.role === 'admin' ? 'shield-check' : 'user'}" class="w-4 h-4 mr-1.5 text-amber-300"></i>
        <div class="mr-2 text-left">
          <div class="font-bold truncate max-w-[110px] sm:max-w-[150px]">${escapeHtml(currentUser.fullName)}</div>
        </div>
        ${roleBadge}
        <button onclick="logout()" title="${t('btnLogout')}" class="ml-2 pl-2 border-l border-white/20 text-red-200 hover:text-white">
          <i data-lucide="log-out" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }
  if (window.lucide) lucide.createIcons();
}

// Dinamik Menü (Yetkiye Göre Sekmeleri Ayarlar)
function renderNavigation() {
  const nav = document.getElementById('mainNav');
  nav.innerHTML = '';

  const isAdmin = currentUser && currentUser.role === 'admin';
  const isStudent = currentUser && currentUser.role === 'student';

  const pendingCount = (libraryData.pendingMembers || []).length;

  if (isAdmin) {
    // ADMİN MENÜSÜ
    nav.innerHTML = `
      <button onclick="switchTab('dashboard')" id="nav-dashboard" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="layout-dashboard" class="w-4 h-4 mr-1.5"></i>
        <span>${t('tabDashboard')}</span>
      </button>
      <button onclick="switchTab('books')" id="nav-books" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="book-marked" class="w-4 h-4 mr-1.5"></i>
        <span>${t('tabBooks')}</span>
      </button>
      <button onclick="switchTab('loans')" id="nav-loans" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="arrow-left-right" class="w-4 h-4 mr-1.5"></i>
        <span>${t('tabLoans')}</span>
      </button>
      <button onclick="switchTab('members')" id="nav-members" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="users" class="w-4 h-4 mr-1.5"></i>
        <span>${t('tabMembers')}</span>
      </button>
      <button onclick="switchTab('approvals')" id="nav-approvals" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="shield-alert" class="w-4 h-4 mr-1.5 text-amber-300"></i>
        <span>${t('tabApprovals')}</span>
        ${pendingCount > 0 ? `<span class="ml-1.5 px-1.5 py-0.2 text-[10px] bg-amber-500 text-slate-900 font-bold rounded-full">${pendingCount}</span>` : ''}
      </button>
      <button onclick="switchTab('backup')" id="nav-backup" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="database" class="w-4 h-4 mr-1.5"></i>
        <span>${t('tabBackup')}</span>
      </button>
    `;
  } else if (isStudent) {
    // ÖĞRENCİ MENÜSÜ
    nav.innerHTML = `
      <button onclick="switchTab('books')" id="nav-books" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="book-marked" class="w-4 h-4 mr-1.5"></i>
        <span>${t('tabBooks')}</span>
      </button>
      <button onclick="switchTab('my-books')" id="nav-my-books" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="book-open-check" class="w-4 h-4 mr-1.5 text-amber-300"></i>
        <span>${t('tabMyBooks')}</span>
      </button>
    `;
  } else {
    // ZİYARETÇİ MENÜSÜ
    nav.innerHTML = `
      <button onclick="switchTab('books')" id="nav-books" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="book-marked" class="w-4 h-4 mr-1.5"></i>
        <span>${t('tabBooks')}</span>
      </button>
    `;
  }

  // Kitap ekleme butonunu sadece admine göster
  const btnAdminAdd = document.getElementById('btnAdminAddBook');
  if (btnAdminAdd) {
    if (isAdmin) btnAdminAdd.classList.remove('hidden');
    else btnAdminAdd.classList.add('hidden');
  }

  // Aktif sekmeyi işaretle
  switchTab(activeTab);
}

// Verileri API'den Çek
async function fetchData() {
  try {
    const headers = {};
    if (currentToken) {
      headers['Authorization'] = `Bearer ${currentToken}`;
    }

    const res = await fetch('/api/data', { headers });
    if (res.status === 401 && currentUser) {
      logout();
      return;
    }

    libraryData = await res.json();

    // Yetkiye göre ekranları doldur
    if (currentUser && currentUser.role === 'admin') {
      renderDashboard();
      renderLoans();
      renderMembers();
      renderApprovals();
    }
    renderBooks();
    if (currentUser && currentUser.role === 'student') {
      renderMyBooks();
    }

    // Pending rozeti güncelle
    const pCount = (libraryData.pendingMembers || []).length;
    const badge = document.getElementById('stat-pending-badge');
    if (badge) badge.textContent = pCount;

    if (window.lucide) lucide.createIcons();
  } catch (err) {
    console.error('Veri yükleme hatası:', err);
  }
}

// Sekme Değiştirici
function switchTab(tabId) {
  // Yetki kısıtlamaları
  const isAdmin = currentUser && currentUser.role === 'admin';
  const isStudent = currentUser && currentUser.role === 'student';

  if (!isAdmin && (tabId === 'dashboard' || tabId === 'loans' || tabId === 'members' || tabId === 'approvals' || tabId === 'backup')) {
    tabId = 'books';
  }
  if (!isStudent && tabId === 'my-books') {
    tabId = 'books';
  }

  activeTab = tabId;

  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(el => {
    el.classList.remove('active', 'bg-white/15');
    el.classList.add('text-blue-100');
  });

  const activePane = document.getElementById(`tab-content-${tabId}`);
  const activeNav = document.getElementById(`nav-${tabId}`);
  if (activePane) activePane.classList.remove('hidden');
  if (activeNav) {
    activeNav.classList.add('active', 'bg-white/15');
    activeNav.classList.remove('text-blue-100');
  }
  if (window.lucide) lucide.createIcons();
}

// ================= GİRİŞ / ÇIKIŞ / KAYIT =================

async function submitLogin(e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Giriş yapılamadı.');

    currentToken = data.token;
    currentUser = data.user;
    localStorage.setItem('sbf_token', currentToken);
    localStorage.setItem('sbf_user', JSON.stringify(currentUser));

    closeModal('modal-login');
    document.getElementById('form-login').reset();
    showToast(`Hoş geldiniz, ${currentUser.fullName}!`, 'success');

    // UI Güncelle
    activeTab = currentUser.role === 'admin' ? 'dashboard' : 'books';
    renderAuthHeader();
    renderNavigation();
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function submitRegister(e) {
  e.preventDefault();
  const studentNumber = document.getElementById('reg-number').value;
  const fullName = document.getElementById('reg-fullname').value;
  const email = document.getElementById('reg-email').value;
  const department = document.getElementById('reg-department').value;
  const password = document.getElementById('reg-password').value;

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentNumber, fullName, email, department, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Kayıt yapılamadı.');

    closeModal('modal-register');
    document.getElementById('form-register').reset();
    alert(data.message);
    showToast('Kayıt başvurusu alındı.', 'success');
  } catch (err) {
    alert(err.message);
  }
}

async function logout() {
  try {
    if (currentToken) {
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${currentToken}` }
      });
    }
  } catch (err) {}

  currentToken = null;
  currentUser = null;
  localStorage.removeItem('sbf_token');
  localStorage.removeItem('sbf_user');

  activeTab = 'books';
  renderAuthHeader();
  renderNavigation();
  await fetchData();
  showToast('Çıkış yapıldı.', 'info');
}

// ================= ADMİN ONAY EKRANI (TROL KALKANI) =================

function renderApprovals() {
  const tbody = document.getElementById('approvals-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const pending = libraryData.pendingMembers || [];
  if (pending.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400 text-sm">Şu an onay bekleyen öğrenci başvurusu bulunmamaktadır.</td></tr>`;
    return;
  }

  pending.forEach(m => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-amber-50/50 transition-colors";
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-xs text-blue-900">${escapeHtml(m.studentNumber)}</td>
      <td class="py-3 px-4 font-bold text-slate-900">${escapeHtml(m.fullName)}</td>
      <td class="py-3 px-4 text-xs text-slate-600">${escapeHtml(m.department || '-')}</td>
      <td class="py-3 px-4 font-mono text-xs text-emerald-800 font-semibold">${escapeHtml(m.email)}</td>
      <td class="py-3 px-4 text-xs text-slate-500">${m.registerDate || '-'}</td>
      <td class="py-3 px-4 text-right space-x-2 whitespace-nowrap">
        <button onclick="approveMember('${m.id}')" class="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors">
          ${t('btnApprove')}
        </button>
        <button onclick="rejectMember('${m.id}')" class="px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded-lg text-xs font-semibold transition-colors">
          ${t('btnReject')}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

async function approveMember(id) {
  try {
    const res = await fetch(`/api/members/${id}/approve`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Onaylanamadı');

    showToast(t('msgApproved'), 'success');
    await fetchData();
    renderNavigation();
  } catch (err) {
    alert(err.message);
  }
}

async function rejectMember(id) {
  if (!confirm("Bu öğrenci başvurusunu silmek istediğinize emin misiniz?")) return;
  try {
    const res = await fetch(`/api/members/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Silinemedi');

    showToast(t('msgRejected'), 'info');
    await fetchData();
    renderNavigation();
  } catch (err) {
    alert(err.message);
  }
}

// ================= ÖĞRENCİ: ÖDÜNÇ ALDIĞIM KİTAPLAR =================

function renderMyBooks() {
  const tbody = document.getElementById('my-books-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const myLoans = libraryData.loans || [];
  if (myLoans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center py-8 text-slate-400 text-sm">Şu an ödünç aldığınız bir kitap bulunmamaktadır.</td></tr>`;
    return;
  }

  const todayStr = new Date().toISOString().split('T')[0];

  myLoans.forEach(loan => {
    const isOverdue = loan.dueDate < todayStr;
    const diffDays = Math.round((new Date(loan.dueDate) - new Date(todayStr)) / (1000 * 60 * 60 * 24));

    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";
    tr.innerHTML = `
      <td class="py-3 px-4 font-bold text-slate-900">${escapeHtml(loan.bookTitle)}</td>
      <td class="py-3 px-4 text-xs text-slate-600">${loan.issueDate}</td>
      <td class="py-3 px-4 text-xs font-semibold ${isOverdue ? 'text-rose-600' : 'text-slate-800'}">${loan.dueDate}</td>
      <td class="py-3 px-4 text-center">
        ${isOverdue 
          ? `<span class="px-2.5 py-1 text-xs bg-rose-100 text-rose-700 font-bold rounded-full">${Math.abs(diffDays)} ${t('daysOverdue')}</span>`
          : `<span class="px-2.5 py-1 text-xs bg-emerald-100 text-emerald-700 font-semibold rounded-full">${diffDays} ${t('daysLeft')}</span>`
        }
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= KİTAP KATALOĞU ÇİZİMİ =================

function renderBooks(filteredList = null) {
  const books = filteredList || libraryData.books || [];
  const tbody = document.getElementById('books-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const isAdmin = currentUser && currentUser.role === 'admin';

  // Başlık işlemler sütununu göster/gizle
  document.querySelectorAll('.admin-col-action').forEach(el => {
    if (isAdmin) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });

  if (books.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-slate-400 text-sm">Aramaya uygun kitap bulunamadı.</td></tr>`;
    return;
  }

  books.forEach(b => {
    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";
    
    let langBadge = "bg-slate-100 text-slate-700";
    if (b.language === 'Français') langBadge = "bg-indigo-100 text-indigo-800 font-medium";
    if (b.language === 'Türkçe') langBadge = "bg-red-50 text-red-700 font-medium";
    if (b.language === 'English') langBadge = "bg-amber-50 text-amber-800 font-medium";

    tr.innerHTML = `
      <td class="py-3 px-4">
        <div class="font-bold text-slate-900">${escapeHtml(b.title)}</div>
        ${b.isbn ? `<div class="text-[11px] text-slate-400">ISBN: ${escapeHtml(b.isbn)}</div>` : ''}
      </td>
      <td class="py-3 px-4 text-slate-700">${escapeHtml(b.author)}</td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded-md">${escapeHtml(b.category)}</span></td>
      <td class="py-3 px-4"><span class="px-2 py-0.5 text-xs rounded-md ${langBadge}">${escapeHtml(b.language)}</span></td>
      <td class="py-3 px-4 font-mono text-xs text-blue-900 font-semibold">${escapeHtml(b.shelf || '-')}</td>
      <td class="py-3 px-4 text-center">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${b.availableCopies > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
          ${b.availableCopies} / ${b.totalCopies}
        </span>
      </td>
      ${isAdmin ? `
        <td class="py-3 px-4 text-right space-x-1 whitespace-nowrap admin-col-action">
          ${b.availableCopies > 0 ? `
            <button onclick="quickIssueForBook('${b.id}')" title="${t('actionQuickLoan')}" class="p-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg transition-colors">
              <i data-lucide="arrow-right-circle" class="w-4 h-4"></i>
            </button>
          ` : ''}
          <button onclick="openBookModal('${b.id}')" title="Düzenle" class="p-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors">
            <i data-lucide="edit-2" class="w-4 h-4"></i>
          </button>
          <button onclick="deleteBook('${b.id}')" title="Sil" class="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg transition-colors">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      ` : ''}
    `;
    tbody.appendChild(tr);
  });
  if (window.lucide) lucide.createIcons();
}

function filterBooks() {
  const query = (document.getElementById('bookSearchInput').value || '').toLowerCase().trim();
  const lang = document.getElementById('bookLangFilter').value;

  const filtered = libraryData.books.filter(b => {
    const matchLang = (lang === 'ALL') || (b.language === lang);
    const matchQuery = !query || 
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query) ||
      (b.shelf && b.shelf.toLowerCase().includes(query)) ||
      (b.isbn && b.isbn.toLowerCase().includes(query));
    return matchLang && matchQuery;
  });
  renderBooks(filtered);
}

// ================= PANO (DASHBOARD) - SADECE ADMİN =================

function renderDashboard() {
  const books = libraryData.books || [];
  const loans = libraryData.loans || [];

  const totalCopies = books.reduce((sum, b) => sum + (b.totalCopies || 0), 0);
  const availableCopies = books.reduce((sum, b) => sum + (b.availableCopies || 0), 0);
  const activeLoans = loans.filter(l => l.status === 'borrowed');

  const todayStr = new Date().toISOString().split('T')[0];
  const overdueLoans = activeLoans.filter(l => l.dueDate < todayStr);

  const elTotal = document.getElementById('stat-total-books');
  if (elTotal) elTotal.textContent = totalCopies;
  const elTitles = document.getElementById('stat-total-titles');
  if (elTitles) elTitles.textContent = books.length;
  const elAvail = document.getElementById('stat-available-books');
  if (elAvail) elAvail.textContent = availableCopies;
  const elAct = document.getElementById('stat-active-loans');
  if (elAct) elAct.textContent = activeLoans.length;
  const elOver = document.getElementById('stat-overdue-loans');
  if (elOver) elOver.textContent = overdueLoans.length;

  const tbody = document.getElementById('dashboard-loans-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const displayLoans = activeLoans.slice(0, 5);
  if (displayLoans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center py-6 text-slate-400 text-xs">Şu an aktif ödünç kaydı bulunmuyor.</td></tr>`;
    return;
  }

  displayLoans.forEach(loan => {
    const isOverdue = loan.dueDate < todayStr;
    const diffDays = Math.round((new Date(loan.dueDate) - new Date(todayStr)) / (1000 * 60 * 60 * 24));

    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";
    tr.innerHTML = `
      <td class="py-2.5 px-3 font-semibold text-slate-900">${escapeHtml(loan.bookTitle)}</td>
      <td class="py-2.5 px-3 text-slate-600">${escapeHtml(loan.memberName)} <span class="text-xs text-slate-400">(${escapeHtml(loan.memberNumber)})</span></td>
      <td class="py-2.5 px-3">
        <div class="flex items-center space-x-1.5">
          <span class="text-xs ${isOverdue ? 'text-rose-600 font-bold' : 'text-slate-700'}">${loan.dueDate}</span>
          ${isOverdue 
            ? `<span class="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded font-bold">${Math.abs(diffDays)} ${t('daysOverdue')}</span>`
            : `<span class="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">${diffDays} ${t('daysLeft')}</span>`
          }
        </div>
      </td>
      <td class="py-2.5 px-3 text-right">
        <button onclick="returnBook('${loan.id}')" class="px-2.5 py-1 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded font-semibold transition-colors">
          ${t('btnReturn')}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ================= ÖDÜNÇ VE İADE - SADECE ADMİN =================

function renderLoans(filteredList = null) {
  const loans = filteredList || libraryData.loans || [];
  const tbody = document.getElementById('loans-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (loans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400 text-sm">Ödünç kaydı bulunamadı.</td></tr>`;
    return;
  }

  const todayStr = new Date().toISOString().split('T')[0];

  loans.forEach(loan => {
    const isReturned = loan.status === 'returned';
    const isOverdue = !isReturned && (loan.dueDate < todayStr);
    const diffDays = Math.round((new Date(loan.dueDate) - new Date(todayStr)) / (1000 * 60 * 60 * 24));

    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";
    tr.innerHTML = `
      <td class="py-3 px-4 font-bold text-slate-900">${escapeHtml(loan.bookTitle)}</td>
      <td class="py-3 px-4">
        <div class="text-slate-800 font-medium">${escapeHtml(loan.memberName)}</div>
        <div class="text-xs text-slate-400">${escapeHtml(loan.memberNumber)}</div>
      </td>
      <td class="py-3 px-4 text-xs text-slate-600">${loan.issueDate}</td>
      <td class="py-3 px-4 text-xs">
        <span class="${isOverdue ? 'text-rose-600 font-bold' : 'text-slate-700'}">${loan.dueDate}</span>
        ${!isReturned ? (
          isOverdue 
            ? `<span class="ml-1 text-[10px] bg-rose-100 text-rose-700 px-1 py-0.5 rounded font-bold">${Math.abs(diffDays)} ${t('daysOverdue')}</span>`
            : `<span class="ml-1 text-[10px] bg-emerald-100 text-emerald-700 px-1 py-0.5 rounded">${diffDays} ${t('daysLeft')}</span>`
        ) : ''}
      </td>
      <td class="py-3 px-4 text-center">
        ${isReturned 
          ? `<span class="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-600 font-medium">${t('statusReturned')}</span>`
          : (isOverdue 
              ? `<span class="px-2.5 py-1 text-xs rounded-full bg-rose-100 text-rose-700 font-bold animate-pulse">${t('statusOverdue')}</span>`
              : `<span class="px-2.5 py-1 text-xs rounded-full bg-amber-100 text-amber-800 font-semibold">${t('statusBorrowed')}</span>`
            )
        }
      </td>
      <td class="py-3 px-4 text-right">
        ${!isReturned ? `
          <button onclick="returnBook('${loan.id}')" class="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-semibold transition-colors">
            ${t('btnReturn')}
          </button>
        ` : `<span class="text-xs text-slate-400">${loan.returnDate || '-'}</span>`}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function filterLoans() {
  const query = (document.getElementById('loanSearchInput').value || '').toLowerCase().trim();
  const filter = document.getElementById('loanStatusFilter').value;
  const todayStr = new Date().toISOString().split('T')[0];

  const filtered = libraryData.loans.filter(l => {
    let matchStatus = true;
    if (filter === 'ACTIVE') matchStatus = (l.status === 'borrowed');
    else if (filter === 'OVERDUE') matchStatus = (l.status === 'borrowed' && l.dueDate < todayStr);
    else if (filter === 'RETURNED') matchStatus = (l.status === 'returned');

    const matchQuery = !query ||
      l.bookTitle.toLowerCase().includes(query) ||
      l.memberName.toLowerCase().includes(query) ||
      l.memberNumber.toLowerCase().includes(query);

    return matchStatus && matchQuery;
  });
  renderLoans(filtered);
}

// ================= ÜYELER LİSTESİ - SADECE ADMİN =================

function renderMembers(filteredList = null) {
  const members = filteredList || libraryData.members || [];
  const loans = libraryData.loans || [];
  const tbody = document.getElementById('members-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const approvedMembers = members.filter(m => m.status !== 'pending');

  if (approvedMembers.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-slate-400 text-sm">Üye bulunamadı.</td></tr>`;
    return;
  }

  approvedMembers.forEach(m => {
    const activeLoanCount = loans.filter(l => l.memberId === m.id && l.status === 'borrowed').length;

    const tr = document.createElement('tr');
    tr.className = "hover:bg-slate-50 transition-colors";
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-xs text-blue-900">${escapeHtml(m.studentNumber)}</td>
      <td class="py-3 px-4 font-bold text-slate-900">${escapeHtml(m.fullName)}</td>
      <td class="py-3 px-4 text-xs text-slate-600">${escapeHtml(m.department || '-')}</td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 text-xs rounded-md ${m.role === 'Öğretim Üyesi' ? 'bg-purple-100 text-purple-800 font-semibold' : 'bg-slate-100 text-slate-700'}">
          ${escapeHtml(m.role || 'Öğrenci')}
        </span>
      </td>
      <td class="py-3 px-4 text-xs text-slate-500">
        <div>${escapeHtml(m.email || '')}</div>
        <div>${escapeHtml(m.phone || '')}</div>
      </td>
      <td class="py-3 px-4 text-center">
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${activeLoanCount > 0 ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600'}">
          ${activeLoanCount}
        </span>
      </td>
      <td class="py-3 px-4 text-right space-x-1 whitespace-nowrap">
        <button onclick="openMemberModal('${m.id}')" title="Düzenle" class="p-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors">
          <i data-lucide="edit-2" class="w-4 h-4"></i>
        </button>
        <button onclick="deleteMember('${m.id}')" title="Sil" class="p-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg transition-colors">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  if (window.lucide) lucide.createIcons();
}

function filterMembers() {
  const query = (document.getElementById('memberSearchInput').value || '').toLowerCase().trim();
  const filtered = (libraryData.members || []).filter(m => {
    return !query ||
      m.fullName.toLowerCase().includes(query) ||
      m.studentNumber.toLowerCase().includes(query) ||
      (m.department && m.department.toLowerCase().includes(query)) ||
      (m.email && m.email.toLowerCase().includes(query));
  });
  renderMembers(filtered);
}

// ================= MODAL & İŞLEM YARDIMCILARI =================

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function openIssueModal(preselectedBookId = null) {
  if (!currentUser || currentUser.role !== 'admin') {
    alert("Bu işlem sadece Kütüphane Yöneticisi (Admin) tarafından yapılabilir.");
    return;
  }

  const memberSelect = document.getElementById('issue-member-select');
  const bookSelect = document.getElementById('issue-book-select');

  memberSelect.innerHTML = '<option value="">-- ' + t('lblSelectMember') + ' --</option>';
  (libraryData.members || []).filter(m => m.status !== 'pending').forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = `${m.studentNumber} - ${m.fullName} (${m.role})`;
    memberSelect.appendChild(opt);
  });

  bookSelect.innerHTML = '<option value="">-- ' + t('lblSelectBook') + ' --</option>';
  libraryData.books.filter(b => b.availableCopies > 0).forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = `${b.title} - ${b.author} [Raf: ${b.shelf}] (Mevcut: ${b.availableCopies})`;
    if (preselectedBookId && b.id === preselectedBookId) {
      opt.selected = true;
    }
    bookSelect.appendChild(opt);
  });

  openModal('modal-issue');
}

function quickIssueForBook(bookId) {
  openIssueModal(bookId);
}

async function submitIssueLoan(e) {
  e.preventDefault();
  const memberId = document.getElementById('issue-member-select').value;
  const bookId = document.getElementById('issue-book-select').value;
  const loanDays = document.querySelector('input[name="loanDaysRadio"]:checked').value;

  try {
    const res = await fetch('/api/loans/issue', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ memberId, bookId, loanDays })
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'İşlem başarısız');

    closeModal('modal-issue');
    showToast(t('msgIssued'), 'success');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function returnBook(loanId) {
  if (!confirm(t('confirmReturn'))) return;

  try {
    const res = await fetch('/api/loans/return', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ loanId })
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'İade alınamadı');

    showToast(t('msgReturned'), 'success');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

function openBookModal(bookId = null) {
  if (!currentUser || currentUser.role !== 'admin') {
    alert("Kitap ekleme ve düzenleme yetkisi sadece Admin'e aittir.");
    return;
  }

  const form = document.getElementById('form-book');
  form.reset();
  document.getElementById('book-form-id').value = '';

  const titleEl = document.getElementById('modal-book-title');
  if (bookId) {
    const book = libraryData.books.find(b => b.id === bookId);
    if (!book) return;
    titleEl.textContent = t('modalEditBookTitle');
    document.getElementById('book-form-id').value = book.id;
    document.getElementById('book-title').value = book.title;
    document.getElementById('book-author').value = book.author;
    document.getElementById('book-category').value = book.category || '';
    document.getElementById('book-language').value = book.language || 'Français';
    document.getElementById('book-shelf').value = book.shelf || '';
    document.getElementById('book-copies').value = book.totalCopies || 1;
    document.getElementById('book-isbn').value = book.isbn || '';
    document.getElementById('book-notes').value = book.notes || '';
  } else {
    titleEl.textContent = t('modalAddBookTitle');
    document.getElementById('book-copies').value = 1;
    document.getElementById('book-language').value = 'Français';
  }

  openModal('modal-book');
}

async function submitBookForm(e) {
  e.preventDefault();
  const id = document.getElementById('book-form-id').value;
  const payload = {
    title: document.getElementById('book-title').value,
    author: document.getElementById('book-author').value,
    category: document.getElementById('book-category').value,
    language: document.getElementById('book-language').value,
    shelf: document.getElementById('book-shelf').value,
    totalCopies: parseInt(document.getElementById('book-copies').value) || 1,
    isbn: document.getElementById('book-isbn').value,
    notes: document.getElementById('book-notes').value
  };

  const url = id ? `/api/books/${id}` : '/api/books';
  const method = id ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method,
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'İşlem başarısız');

    closeModal('modal-book');
    showToast(t('msgBookAdded'), 'success');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function deleteBook(id) {
  if (!confirm(t('confirmDeleteBook'))) return;
  try {
    const res = await fetch(`/api/books/${id}`, { 
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Silinemedi');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

function openMemberModal(memberId = null) {
  if (!currentUser || currentUser.role !== 'admin') {
    alert("Üye yönetimi sadece Admin'e aittir.");
    return;
  }

  const form = document.getElementById('form-member');
  form.reset();
  document.getElementById('member-form-id').value = '';

  const titleEl = document.getElementById('modal-member-title');
  if (memberId) {
    const m = libraryData.members.find(x => x.id === memberId);
    if (!m) return;
    titleEl.textContent = t('modalEditMemberTitle');
    document.getElementById('member-form-id').value = m.id;
    document.getElementById('member-number').value = m.studentNumber;
    document.getElementById('member-fullname').value = m.fullName;
    document.getElementById('member-department').value = m.department;
    document.getElementById('member-role').value = m.role;
    document.getElementById('member-email').value = m.email || '';
    document.getElementById('member-phone').value = m.phone || '';
  } else {
    titleEl.textContent = t('modalAddMemberTitle');
  }

  openModal('modal-member');
}

async function submitMemberForm(e) {
  e.preventDefault();
  const id = document.getElementById('member-form-id').value;
  const payload = {
    studentNumber: document.getElementById('member-number').value,
    fullName: document.getElementById('member-fullname').value,
    department: document.getElementById('member-department').value,
    role: document.getElementById('member-role').value,
    email: document.getElementById('member-email').value,
    phone: document.getElementById('member-phone').value
  };

  const url = id ? `/api/members/${id}` : '/api/members';
  const method = id ? 'PUT' : 'POST';

  try {
    const res = await fetch(url, {
      method,
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify(payload)
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'İşlem başarısız');

    closeModal('modal-member');
    showToast(t('msgMemberAdded'), 'success');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function deleteMember(id) {
  if (!confirm(t('confirmDeleteMember'))) return;
  try {
    const res = await fetch(`/api/members/${id}`, { 
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.error || 'Silinemedi');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

function downloadBackup() {
  if (!currentToken || !currentUser || currentUser.role !== 'admin') {
    alert("Yedek indirme yetkisi sadece Admin'dedir.");
    return;
  }
  window.location.href = `/api/backup?token=${currentToken}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  msgEl.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}
