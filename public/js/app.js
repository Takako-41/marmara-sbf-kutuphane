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
    msgRejected: "Öğrenci başvurusu reddedildi ve silindi.",
    tabArticles: "Öğrenci Yazıları",
    tabBookRequests: "İstek Kitaplar",
    btnSubmitArticle: "Yazı / Düşünce Gönder",
    btnRequestBook: "Yeni Kitap Talep Et",
    articlesHeroDesc: "Fakülte ve kulüp öğrencilerimizden denemeler, kitap incelemeleri ve acemi eserler.",
    bookRequestsHeroDesc: "Kütüphanemizde veya kulüp kitaplığımızda görmek istediğiniz eserleri talep edin, diğer öğrencilerin isteklerini oylayarak önceliklendirin.",
    lblFilterCategory: "Kategori:",
    optAllCategories: "Tüm Kategoriler",
    pendingArticlesNoticeTitle: "Editör Masasında İncelenmeyi Bekleyen Yazılar Var",
    statTotalRequests: "Toplam Talep",
    statPendingRequests: "İnceleniyor",
    statApprovedRequests: "Temin Ediliyor",
    statAcquiredRequests: "Kütüphanede",
    colRequestedBy: "Talep Eden & Tarih",
    colRequestNote: "Gerekçe / Açıklama",
    colVotes: "Destek (+1)",
    modalAddArticleTitle: "Öğrenci Kürsüsüne Yazı Gönder",
    lblArticleTitle: "Yazı Başlığı *",
    lblArticleCategory: "Disiplin / Kategori *",
    lblArticleSummary: "Kısa Özet (1-2 Cümle)",
    lblArticleContent: "Yazı Metni *",
    btnSubmitArticleConfirm: "Yazıyı Editöre Gönder",
    modalRequestBookTitle: "Yeni Kitap Talep Et",
    lblRequestReason: "Talep Gerekçesi / Not",
    btnSendRequest: "Talebi İlet",
    statusAcquired: "Kütüphanede",
    statusPending: "İnceleniyor",
    statusApproved: "Temin Ediliyor",
    statusRejected: "Temin Edilemedi",
    tabExamNotes: "Sınav Notları & Havuz",
    btnShareExamNote: "Ders Notu / Kaynak Paylaş",
    kvkkBannerTitle: "6698 Sayılı KVKK ve Çerez (Cookie) Aydınlatma Bildirimi",
    kvkkSafeBadge: "Güvenli Kampüs Ağı",
    kvkkBannerDesc: "SBF Kütüphanesi platformumuzda, oturum güvenliğinizi sağlamak, ödünç geçmişinizi korumak ve dil tercihinizi hatırlamak amacıyla yalnızca zorunlu teknik çerezler kullanılmaktadır. Üçüncü taraf reklam ve ticari izleme çerezi barındırılmaz.",
    btnKvkkPolicy: "Aydınlatma Metni & Haklar",
    btnKvkkAccept: "Anladım ve Kabul Ediyorum"
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
    msgRejected: "Demande refusée et supprimée.",
    tabArticles: "Öğrenci Yazıları & Düşünceler",
    tabBookRequests: "Livres Demandés",
    btnSubmitArticle: "Rédiger un Texte / Réflexion",
    btnRequestBook: "Demander un Livre",
    articlesHeroDesc: "Textes et analyses rédigés par les étudiants en sciences politiques, relations internationales et administration.",
    bookRequestsHeroDesc: "Suggérez les ouvrages que vous souhaitez voir dans notre bibliothèque et votez pour les demandes existantes.",
    lblFilterCategory: "Catégorie :",
    optAllCategories: "Toutes les Catégories",
    pendingArticlesNoticeTitle: "Articles en Attente de Révision Éditoriale",
    statTotalRequests: "Total Demandes",
    statPendingRequests: "En Examen",
    statApprovedRequests: "En Acquisition",
    statAcquiredRequests: "En Rayon",
    colRequestedBy: "Demandé Par & Date",
    colRequestNote: "Motif / Remarque",
    colVotes: "Soutiens (+1)",
    modalAddArticleTitle: "Öğrenci Yazısı / Düşünce Gönder",
    lblArticleTitle: "Titre de l'Article *",
    lblArticleCategory: "Discipline / Catégorie *",
    lblArticleSummary: "Court Résumé",
    lblArticleContent: "Texte de l'Article *",
    btnSubmitArticleConfirm: "Envoyer au Comité Éditorial",
    modalRequestBookTitle: "Suggérer un Nouveau Livre",
    lblRequestReason: "Motif de la Demande",
    btnSendRequest: "Transmettre la Demande",
    statusAcquired: "En Rayon",
    statusPending: "En Examen",
    statusApproved: "En Acquisition",
    statusRejected: "Non Retenu",
    tabExamNotes: "Notes de Cours & Examens",
    btnShareExamNote: "Partager une Note de Cours",
    kvkkBannerTitle: "Notice de Confidentialité et Cookies (KVKK)",
    kvkkSafeBadge: "Réseau Campus Sécurisé",
    kvkkBannerDesc: "Sur notre plateforme, seuls les cookies techniques indispensables sont utilisés pour maintenir votre session et mémoriser la langue. Aucun cookie publicitaire tiers n'est utilisé.",
    btnKvkkPolicy: "Politique de Confidentialité",
    btnKvkkAccept: "J'accepte et j'ai compris"
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
    msgRejected: "Student application rejected.",
    tabArticles: "Öğrenci Yazıları & Düşünceler",
    tabBookRequests: "Book Requests",
    btnSubmitArticle: "Submit Essay / Thought",
    btnRequestBook: "Request a Book",
    articlesHeroDesc: "Original essays, book reviews, and student thoughts written by political science students.",
    bookRequestsHeroDesc: "Request books you'd like to see in our library or club collection, and vote to prioritize requests.",
    lblFilterCategory: "Category:",
    optAllCategories: "All Categories",
    pendingArticlesNoticeTitle: "Articles Pending Editorial Review",
    statTotalRequests: "Total Requests",
    statPendingRequests: "Under Review",
    statApprovedRequests: "Ordering",
    statAcquiredRequests: "In Library",
    colRequestedBy: "Requested By & Date",
    colRequestNote: "Rationale / Note",
    colVotes: "Support (+1)",
    modalAddArticleTitle: "Submit Student Essay / Thought",
    lblArticleTitle: "Article Title *",
    lblArticleCategory: "Discipline / Category *",
    lblArticleSummary: "Short Summary",
    lblArticleContent: "Article Body *",
    btnSubmitArticleConfirm: "Submit to Editors",
    modalRequestBookTitle: "Request a New Book",
    lblRequestReason: "Reason / Note",
    btnSendRequest: "Submit Request",
    statusAcquired: "In Library",
    statusPending: "Under Review",
    statusApproved: "Acquiring",
    statusRejected: "Declined",
    tabExamNotes: "Exam Notes & Hub",
    btnShareExamNote: "Share Lecture Note",
    kvkkBannerTitle: "KVKK Privacy Notice & Cookie Policy",
    kvkkSafeBadge: "Secure Campus Network",
    kvkkBannerDesc: "On our platform, only strictly necessary functional cookies and local storage are utilized to safeguard your session and remember your language. No third-party tracking or advertising cookies exist.",
    btnKvkkPolicy: "Privacy Policy & Rights",
    btnKvkkAccept: "I Understand & Accept"
  }
};

// Global State
let currentLang = localStorage.getItem('sbf_lang') || 'tr';
let currentUser = JSON.parse(localStorage.getItem('sbf_user') || 'null');
let currentToken = localStorage.getItem('sbf_token') || null;
let libraryData = { settings: {}, books: [], members: [], loans: [], pendingMembers: [], articles: [], bookRequests: [], pendingArticles: [] };
let activeTab = 'books'; // Varsayılan olarak kitap kataloğu açık
let activeArticleId = null;
let founderUnmasked = false; // Kurucu: Mahlasları açık/kapalı gösterme anahtarı

// DOM Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang, false);
  renderAuthHeader();
  renderNavigation();
  checkKvkkConsent();
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
    if (currentUser && (currentUser.role === 'admin' || currentUser.role === 'founder')) renderDashboard();
    renderBooks();
    renderBookRequests();
    renderArticles();
    renderExamNotes();
    if (currentUser && (currentUser.role === 'admin' || currentUser.role === 'founder')) {
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
    const isFounder = currentUser.role === 'founder';
    const isAdmin = currentUser.role === 'admin' || isFounder;

    const roleBadge = isAdmin 
      ? (isFounder 
          ? '<span class="px-1.5 py-0.5 text-[10px] bg-amber-400 text-slate-900 font-extrabold rounded shadow-xs" title="Kurucu Admin (SuperAdmin)">Admin</span>'
          : '<span class="px-1.5 py-0.5 text-[10px] bg-amber-400 text-slate-900 font-bold rounded">Admin</span>')
      : '<span class="px-1.5 py-0.5 text-[10px] bg-blue-300 text-blue-950 font-bold rounded">Öğrenci</span>';

    container.innerHTML = `
      <div class="flex items-center bg-white/10 hover:bg-white/15 cursor-pointer rounded-lg px-2.5 py-1 border border-white/15 text-xs text-white transition-all group" onclick="openUserProfileModal()" title="Profilim & Başarı Rozetlerim">
        <i data-lucide="${isAdmin ? (isFounder ? 'crown' : 'shield-check') : 'award'}" class="w-4 h-4 mr-1.5 text-amber-300 group-hover:scale-110 transition-transform"></i>
        <div class="mr-2 text-left">
          <div class="font-bold truncate max-w-[110px] sm:max-w-[150px]">${escapeHtml(currentUser.fullName)}</div>
        </div>
        ${roleBadge}
        <button onclick="event.stopPropagation(); logout();" title="${t('btnLogout')}" class="ml-2 pl-2 border-l border-white/20 text-red-200 hover:text-white">
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

  const isAdmin = currentUser && (currentUser.role === 'admin' || currentUser.role === 'founder');
  const isStudent = currentUser && currentUser.role === 'student';

  const pendingMembersCount = (libraryData.pendingMembers || []).length;
  const pendingArticlesCount = (libraryData.pendingArticles || []).length;

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
      <button onclick="switchTab('exam-notes')" id="nav-exam-notes" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="graduation-cap" class="w-4 h-4 mr-1.5 text-emerald-300"></i>
        <span>${t('tabExamNotes')}</span>
      </button>
      <button onclick="switchTab('book-requests')" id="nav-book-requests" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="bookmark-plus" class="w-4 h-4 mr-1.5 text-emerald-300"></i>
        <span>${t('tabBookRequests')}</span>
      </button>
      <button onclick="switchTab('articles')" id="nav-articles" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="feather" class="w-4 h-4 mr-1.5 text-amber-300"></i>
        <span>${t('tabArticles')}</span>
        ${pendingArticlesCount > 0 ? `<span class="ml-1.5 px-1.5 py-0.2 text-[10px] bg-amber-500 text-slate-900 font-bold rounded-full">${pendingArticlesCount}</span>` : ''}
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
        ${pendingMembersCount > 0 ? `<span class="ml-1.5 px-1.5 py-0.2 text-[10px] bg-amber-500 text-slate-900 font-bold rounded-full">${pendingMembersCount}</span>` : ''}
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
      <button onclick="switchTab('exam-notes')" id="nav-exam-notes" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="graduation-cap" class="w-4 h-4 mr-1.5 text-emerald-300"></i>
        <span>${t('tabExamNotes')}</span>
      </button>
      <button onclick="switchTab('book-requests')" id="nav-book-requests" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="bookmark-plus" class="w-4 h-4 mr-1.5 text-emerald-300"></i>
        <span>${t('tabBookRequests')}</span>
      </button>
      <button onclick="switchTab('articles')" id="nav-articles" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="feather" class="w-4 h-4 mr-1.5 text-amber-300"></i>
        <span>${t('tabArticles')}</span>
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
      <button onclick="switchTab('exam-notes')" id="nav-exam-notes" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="graduation-cap" class="w-4 h-4 mr-1.5 text-emerald-300"></i>
        <span>${t('tabExamNotes')}</span>
      </button>
      <button onclick="switchTab('book-requests')" id="nav-book-requests" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="bookmark-plus" class="w-4 h-4 mr-1.5 text-emerald-300"></i>
        <span>${t('tabBookRequests')}</span>
      </button>
      <button onclick="switchTab('articles')" id="nav-articles" class="tab-btn flex items-center px-3 py-1.5 rounded-lg text-blue-100 hover:bg-white/10 font-medium">
        <i data-lucide="feather" class="w-4 h-4 mr-1.5 text-amber-300"></i>
        <span>${t('tabArticles')}</span>
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
    if (!libraryData.articles) libraryData.articles = [];
    if (!libraryData.bookRequests) libraryData.bookRequests = [];
    if (!libraryData.examNotes) libraryData.examNotes = [];

    // Yetkiye göre ekranları doldur
    if (currentUser && (currentUser.role === 'admin' || currentUser.role === 'founder')) {
      renderDashboard();
      renderLoans();
      renderMembers();
      renderApprovals();
    }
    renderBooks();
    renderBookRequests();
    renderArticles();
    renderExamNotes();
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
  const isAdmin = currentUser && (currentUser.role === 'admin' || currentUser.role === 'founder');
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

  if (tabId === 'articles') renderArticles();
  if (tabId === 'book-requests') renderBookRequests();

  if (window.lucide) lucide.createIcons();
}

// ================= GİRİŞ / ÇIKIŞ / KAYIT =================

let pending2faLogin = null;

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

    // İki Aşamalı Güvenlik (2FA) Doğrulaması Gerekiyor mu?
    if (data.require2FA) {
      pending2faLogin = { username, password };
      closeModal('modal-login');
      openModal('modal-2fa-verify');
      setTimeout(() => {
        const pinInput = document.getElementById('input-2fa-pin');
        if (pinInput) {
          pinInput.value = '';
          pinInput.focus();
        }
      }, 150);
      return;
    }

    finishUserLogin(data);
  } catch (err) {
    alert(err.message);
  }
}

async function submit2faVerification(e) {
  e.preventDefault();
  if (!pending2faLogin) return;

  const securityPin = document.getElementById('input-2fa-pin').value;
  if (!securityPin) return;

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: pending2faLogin.username,
        password: pending2faLogin.password,
        securityPin
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'İki aşamalı doğrulama başarısız.');

    closeModal('modal-2fa-verify');
    document.getElementById('form-2fa-verify').reset();
    pending2faLogin = null;

    finishUserLogin(data);
  } catch (err) {
    alert(err.message);
  }
}

async function finishUserLogin(data) {
  currentToken = data.token;
  currentUser = data.user;
  localStorage.setItem('sbf_token', currentToken);
  localStorage.setItem('sbf_user', JSON.stringify(currentUser));

  closeModal('modal-login');
  const loginForm = document.getElementById('form-login');
  if (loginForm) loginForm.reset();
  showToast(`Hoş geldiniz, ${currentUser.fullName}!`, 'success');

  // UI Güncelle
  activeTab = (currentUser.role === 'admin' || currentUser.role === 'founder') ? 'dashboard' : 'books';
  renderAuthHeader();
  renderNavigation();
  await fetchData();
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

  // Kurucu Özel Paneli Kontrolü & Canlı İstatistikler
  const founderPanel = document.getElementById('founder-core-panel');
  if (founderPanel) {
    if (currentUser && currentUser.role === 'founder') {
      founderPanel.classList.remove('hidden');
      loadFounderCoreStats();
    } else {
      founderPanel.classList.add('hidden');
    }
  }
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
  if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'founder')) {
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
  if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'founder')) {
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
  if (!currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'founder')) {
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
  if (!currentToken || !currentUser || (currentUser.role !== 'admin' && currentUser.role !== 'founder')) {
    alert("Yedek indirme yetkisi sadece Admin ve Kurucu'dadır.");
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

// ================= KULÜP YAZILARI & MAKALE İŞLEMLERİ =================

function handleNewArticleBtnClick() {
  if (!currentUser) {
    showToast("Yazı göndermek için lütfen öğrenci veya yönetici hesabınızla giriş yapınız.", "info");
    openModal('modal-login');
    return;
  }
  openModal('modal-article-add');
}

function filterArticles() {
  renderArticles();
}

function renderArticles() {
  const container = document.getElementById('articlesGrid');
  if (!container) return;

  const categoryFilter = document.getElementById('articleCategoryFilter')?.value || 'all';
  const searchTerm = (document.getElementById('articleSearchInput')?.value || '').toLowerCase().trim();

  let articles = libraryData.articles || [];
  const isAdmin = currentUser && currentUser.role === 'admin';

  // Admin Bekleyen Bildirim Çubuğu
  const pendingAlert = document.getElementById('adminArticlesPendingAlert');
  const pendingText = document.getElementById('pendingArticlesCountText');
  const pendingArticles = articles.filter(a => a.status === 'pending');
  if (pendingAlert) {
    if (isAdmin && pendingArticles.length > 0) {
      pendingAlert.classList.remove('hidden');
      if (pendingText) pendingText.textContent = `${pendingArticles.length} yazı onayınızı bekliyor.`;
    } else {
      pendingAlert.classList.add('hidden');
    }
  }

  // Filtreleme
  if (categoryFilter !== 'all') {
    articles = articles.filter(a => a.category === categoryFilter);
  }
  if (searchTerm) {
    articles = articles.filter(a => 
      (a.title || '').toLowerCase().includes(searchTerm) ||
      (a.authorName || '').toLowerCase().includes(searchTerm) ||
      (a.summary || '').toLowerCase().includes(searchTerm)
    );
  }

  if (articles.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white rounded-2xl p-12 text-center border border-slate-200">
        <div class="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
          <i data-lucide="feather" class="w-8 h-8"></i>
        </div>
        <h3 class="text-base font-bold text-slate-800">Henüz Bu Kriterde Yazı Bulunmuyor</h3>
        <p class="text-xs text-slate-500 max-w-sm mx-auto mt-1">
          İlk yazıyı kaleme alarak Marmara SBF fikir köşesini zenginleştirebilirsiniz!
        </p>
        <div class="mt-4">
          <button onclick="handleNewArticleBtnClick()" class="px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl text-xs font-semibold shadow-sm inline-flex items-center">
            <i data-lucide="pen-tool" class="w-3.5 h-3.5 mr-1.5"></i>
            <span>Yeni Yazı Gönder</span>
          </button>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const categoryColors = {
    'Siyaset Bilimi': 'bg-blue-100 text-blue-800 border-blue-200',
    'Uluslararası İlişkiler': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'Kamu Yönetimi': 'bg-teal-100 text-teal-800 border-teal-200',
    'Kitap İncelemesi': 'bg-amber-100 text-amber-800 border-amber-200',
    'Felsefe & Sosyoloji': 'bg-purple-100 text-purple-800 border-purple-200',
    'Genel': 'bg-slate-100 text-slate-800 border-slate-200'
  };

  container.innerHTML = articles.map(art => {
    const badgeColor = categoryColors[art.category] || categoryColors['Genel'];
    const dateFormatted = art.createdAt ? new Date(art.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
    const likesCount = (art.likes || []).length;
    const commentsCount = (art.comments || []).length;
    const viewsCount = art.readCount || 0;
    const isAuthor = currentUser && (currentUser.studentNumber === art.authorStudentNumber || currentUser.username === art.authorStudentNumber);

    let statusBadge = '';
    if (art.status === 'pending') {
      statusBadge = '<span class="px-2 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded border border-amber-200 flex items-center"><i data-lucide="clock" class="w-3 h-3 mr-1"></i> Editör Onayı Bekliyor</span>';
    } else if (art.status === 'rejected') {
      statusBadge = '<span class="px-2 py-0.5 text-[10px] font-bold bg-rose-100 text-rose-800 rounded border border-rose-200 flex items-center"><i data-lucide="x-circle" class="w-3 h-3 mr-1"></i> Revizyon / Red</span>';
    }

    let adminControls = '';
    if (isAdmin && art.status === 'pending') {
      adminControls = `
        <div class="mt-3 pt-3 border-t border-amber-100 bg-amber-50/60 -mx-5 -mb-5 p-3 rounded-b-xl flex items-center justify-between">
          <span class="text-[11px] font-bold text-amber-900">Editör Kararı:</span>
          <div class="flex items-center space-x-2">
            <button onclick="approveArticle('${art.id}', event)" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition-colors flex items-center">
              <i data-lucide="check" class="w-3.5 h-3.5 mr-1"></i> Yayınla
            </button>
            <button onclick="rejectArticle('${art.id}', event)" class="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded text-xs font-bold transition-colors flex items-center">
              <i data-lucide="x" class="w-3.5 h-3.5 mr-1"></i> Reddet
            </button>
          </div>
        </div>
      `;
    }

    const deleteBtn = (isAdmin || isAuthor) ? `
      <button onclick="deleteArticle('${art.id}', event)" title="Yazıyı Sil" class="text-slate-400 hover:text-rose-600 transition-colors p-1">
        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
      </button>
    ` : '';

    return `
      <div onclick="openReadArticleModal('${art.id}')" class="bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-slate-200 p-5 flex flex-col justify-between cursor-pointer group hover:border-indigo-300">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${badgeColor}">
              ${escapeHtml(art.category)}
            </span>
            <div class="flex items-center space-x-1.5">
              ${statusBadge}
              ${deleteBtn}
            </div>
          </div>

          <h3 class="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors leading-snug line-clamp-2">
            ${escapeHtml(art.title)}
          </h3>

          <p class="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
            ${escapeHtml(art.summary || art.content.slice(0, 150))}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100">
          <div class="flex items-center justify-between text-xs text-slate-500">
            <div class="flex items-center space-x-1.5 truncate max-w-[210px]">
              <i data-lucide="user" class="w-3.5 h-3.5 text-indigo-600 shrink-0"></i>
              <span class="font-medium text-slate-700 truncate">${escapeHtml(art.authorName)}</span>
              ${(currentUser && currentUser.role === 'founder' && founderUnmasked && art.isPseudonym && art.realAuthorName) ? `<span class="text-[10px] text-amber-700 font-bold bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300 ml-1 shrink-0" title="Gerçek: ${escapeHtml(art.realAuthorName)}">👁️ ${escapeHtml(art.realAuthorName)}</span>` : ''}
            </div>
            <div class="flex items-center space-x-2.5 text-[11px] text-slate-400 shrink-0">
              <span class="flex items-center" title="Beğeniler"><i data-lucide="heart" class="w-3 h-3 mr-0.5 text-rose-500"></i> ${likesCount}</span>
              <span class="flex items-center" title="Yorumlar"><i data-lucide="message-square" class="w-3 h-3 mr-0.5 text-indigo-500"></i> ${commentsCount}</span>
              <span class="flex items-center" title="Okunma"><i data-lucide="eye" class="w-3 h-3 mr-0.5"></i> ${viewsCount}</span>
            </div>
          </div>
          ${adminControls}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

async function submitArticleForm(e) {
  e.preventDefault();
  if (!currentUser || !currentToken) {
    showToast("Giriş yapmanız gerekmektedir.", "error");
    return;
  }

  const title = document.getElementById('article-title').value;
  const category = document.getElementById('article-category').value;
  const summary = document.getElementById('article-summary').value;
  const content = document.getElementById('article-content').value;
  const usePseudonym = document.getElementById('article-use-pseudonym') ? document.getElementById('article-use-pseudonym').checked : false;
  const pseudonym = document.getElementById('article-pseudonym') ? document.getElementById('article-pseudonym').value.trim() : '';

  try {
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ title, category, summary, content, usePseudonym, pseudonym })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Yazı gönderilemedi.');

    closeModal('modal-article-add');
    document.getElementById('form-article-add').reset();
    if (document.getElementById('article-use-pseudonym')) document.getElementById('article-use-pseudonym').checked = false;
    if (document.getElementById('article-pseudonym-container')) document.getElementById('article-pseudonym-container').classList.add('hidden');
    showToast(data.message || 'Yazınız başarıyla iletildi!', 'success');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

function toggleArticlePseudonymInput() {
  const cb = document.getElementById('article-use-pseudonym');
  const box = document.getElementById('article-pseudonym-container');
  if (cb && box) {
    if (cb.checked) box.classList.remove('hidden');
    else box.classList.add('hidden');
  }
}

function handleNewArticleBtnClick(defaultCategory) {
  if (!currentUser) {
    showToast("Yazı göndermek için lütfen öğrenci girişi yapınız.", "info");
    openModal('modal-login');
    return;
  }
  if (defaultCategory && document.getElementById('article-category')) {
    document.getElementById('article-category').value = defaultCategory;
  }
  openModal('modal-article-add');
}

function openReadArticleModal(id) {
  const article = (libraryData.articles || []).find(a => a.id === id);
  if (!article) return;

  activeArticleId = id;

  document.getElementById('read-article-title').textContent = article.title;
  document.getElementById('read-article-category-badge').textContent = article.category;
  let authorDisplayText = article.authorName;
  if (currentUser && currentUser.role === 'founder' && founderUnmasked && article.isPseudonym && article.realAuthorName) {
    authorDisplayText = `${article.authorName} [👁️ Gerçek Yazar: ${article.realAuthorName} - No: ${article.authorStudentNumber || '-'}]`;
  }
  document.getElementById('read-article-author').textContent = authorDisplayText;
  document.getElementById('read-article-department').textContent = article.authorDepartment || 'SBF';
  document.getElementById('read-article-date').textContent = article.createdAt 
    ? new Date(article.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) 
    : '';
  document.getElementById('read-article-views').textContent = `${article.readCount || 0} okuma`;
  document.getElementById('read-article-content').textContent = article.content;

  // Status Badge
  const statusBadge = document.getElementById('read-article-status-badge');
  if (statusBadge) {
    if (article.status === 'published') {
      statusBadge.textContent = 'Yayında';
      statusBadge.className = 'px-2 py-0.5 rounded text-[11px] bg-emerald-800 text-emerald-200';
    } else if (article.status === 'pending') {
      statusBadge.textContent = 'Editör Masasında (Onay Bekliyor)';
      statusBadge.className = 'px-2 py-0.5 rounded text-[11px] bg-amber-800 text-amber-200';
    } else {
      statusBadge.textContent = 'Reddedildi';
      statusBadge.className = 'px-2 py-0.5 rounded text-[11px] bg-rose-800 text-rose-200';
    }
  }

  // Red gerekçesi
  const rejBox = document.getElementById('read-article-rejection');
  const rejText = document.getElementById('read-article-rejection-text');
  if (article.status === 'rejected' && article.rejectionReason) {
    rejBox.classList.remove('hidden');
    rejText.textContent = article.rejectionReason;
  } else {
    rejBox.classList.add('hidden');
  }

  // Like Durumu
  updateArticleLikeButtonUI(article);

  // Yorumları Yükle & Listele
  renderArticleComments(article);

  // Admin Butonları
  const adminActions = document.getElementById('read-article-admin-actions');
  const isAdmin = currentUser && currentUser.role === 'admin';
  const isAuthor = currentUser && (currentUser.studentNumber === article.authorStudentNumber || currentUser.username === article.authorStudentNumber);

  let extraBtns = '';
  if (isAdmin && article.status === 'pending') {
    extraBtns += `
      <button onclick="approveArticle('${article.id}'); closeModal('modal-article-read');" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold">Yayınla</button>
      <button onclick="rejectArticle('${article.id}'); closeModal('modal-article-read');" class="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold">Reddet</button>
    `;
  }
  if (isAdmin || isAuthor) {
    extraBtns += `
      <button onclick="deleteArticle('${article.id}'); closeModal('modal-article-read');" class="px-3 py-1.5 bg-slate-200 hover:bg-rose-100 hover:text-rose-700 text-slate-700 rounded-lg text-xs font-semibold">Sil</button>
    `;
  }
  adminActions.innerHTML = extraBtns + `<button onclick="closeModal('modal-article-read')" class="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100">Kapat</button>`;

  openModal('modal-article-read');

  // Arka planda görüntülenme sayısını artır
  fetch(`/api/articles/${id}/view`, { method: 'POST' }).catch(() => {});
  article.readCount = (article.readCount || 0) + 1;
  document.getElementById('read-article-views').textContent = `${article.readCount} okuma`;

  if (window.lucide) lucide.createIcons();
}

function updateArticleLikeButtonUI(article) {
  const btnLike = document.getElementById('btn-read-article-like');
  const txtLike = document.getElementById('read-article-like-text');
  if (!btnLike || !txtLike) return;

  const likes = article.likes || [];
  const userIdentifier = currentUser ? (currentUser.studentNumber || currentUser.username) : null;
  const isLiked = userIdentifier && likes.includes(userIdentifier);

  txtLike.textContent = `${likes.length} Beğeni`;
  if (isLiked) {
    btnLike.className = "px-3.5 py-1.5 bg-rose-50 border border-rose-300 text-rose-700 rounded-lg text-xs font-bold transition-all flex items-center shadow-xs";
  } else {
    btnLike.className = "px-3.5 py-1.5 bg-white border border-slate-300 hover:border-rose-400 text-slate-700 hover:text-rose-600 rounded-lg text-xs font-semibold transition-all flex items-center shadow-xs";
  }
}

async function likeActiveArticle() {
  if (!currentUser || !currentToken) {
    closeModal('modal-article-read');
    showToast("Beğenmek için lütfen giriş yapınız.", "info");
    openModal('modal-login');
    return;
  }
  if (!activeArticleId) return;

  try {
    const res = await fetch(`/api/articles/${activeArticleId}/like`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Beğenilemedi');

    const article = (libraryData.articles || []).find(a => a.id === activeArticleId);
    if (article) {
      const userIdentifier = currentUser.studentNumber || currentUser.username;
      if (data.liked) {
        if (!article.likes.includes(userIdentifier)) article.likes.push(userIdentifier);
      } else {
        article.likes = article.likes.filter(u => u !== userIdentifier);
      }
      updateArticleLikeButtonUI(article);
      renderArticles();
    }
  } catch (err) {
    alert(err.message);
  }
}

async function approveArticle(id, event) {
  if (event) event.stopPropagation();
  if (!currentToken) return;

  try {
    const res = await fetch(`/api/articles/${id}/approve`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Onaylanamadı');

    showToast("Yazı onaylandı ve yayına alındı!", "success");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function rejectArticle(id, event) {
  if (event) event.stopPropagation();
  if (!currentToken) return;

  const reason = prompt("Öğrenciye iletilecek red / düzeltme gerekçesini giriniz:", "Yayın ilkelerine ve kulüp odağına uygun bulunmadı.");
  if (reason === null) return;

  try {
    const res = await fetch(`/api/articles/${id}/reject`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ reason })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Reddedilemedi');

    showToast("Yazı reddedildi.", "info");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function deleteArticle(id, event) {
  if (event) event.stopPropagation();
  if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;

  try {
    const res = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Silinemedi');

    showToast("Yazı silindi.", "success");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

// ================= İSTEK KİTAP İŞLEMLERİ =================

function handleNewBookRequestBtnClick() {
  if (!currentUser) {
    showToast("Kitap talep etmek için lütfen giriş yapınız.", "info");
    openModal('modal-login');
    return;
  }
  openModal('modal-book-request-add');
}

function renderBookRequests() {
  const tbody = document.getElementById('book-requests-table-tbody');
  if (!tbody) return;

  const requests = libraryData.bookRequests || [];
  const isAdmin = currentUser && currentUser.role === 'admin';
  const currentUserId = currentUser ? (currentUser.studentNumber || currentUser.username) : null;

  // İstatistik Sayaçları
  const statTotal = document.getElementById('stat-total-requests');
  const statPending = document.getElementById('stat-pending-requests');
  const statApproved = document.getElementById('stat-approved-requests');
  const statAcquired = document.getElementById('stat-acquired-requests');

  if (statTotal) statTotal.textContent = requests.length;
  if (statPending) statPending.textContent = requests.filter(r => r.status === 'pending').length;
  if (statApproved) statApproved.textContent = requests.filter(r => r.status === 'approved').length;
  if (statAcquired) statAcquired.textContent = requests.filter(r => r.status === 'acquired').length;

  if (requests.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-12 text-center text-slate-400">
          <i data-lucide="bookmark" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
          <p class="text-sm font-medium">Henüz bir kitap talebi bulunmuyor.</p>
          <p class="text-xs text-slate-400 mt-1">İstediğiniz bir eseri kütüphanemize kazandırmak için yukarıdaki butondan talep oluşturabilirsiniz.</p>
        </td>
      </tr>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const statusConfig = {
    'pending': { label: 'İnceleniyor', cls: 'bg-amber-100 text-amber-800 border-amber-200' },
    'approved': { label: 'Temin Ediliyor', cls: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    'acquired': { label: 'Kütüphanede', cls: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    'rejected': { label: 'Temin Edilemedi', cls: 'bg-rose-100 text-rose-800 border-rose-200' }
  };

  tbody.innerHTML = requests.map(req => {
    const votes = req.votes || [];
    const hasVoted = currentUserId && votes.includes(currentUserId);
    const voteBtnCls = hasVoted 
      ? 'bg-emerald-600 text-white font-bold hover:bg-emerald-700' 
      : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200';

    const st = statusConfig[req.status] || statusConfig['pending'];

    let adminActionHtml = '';
    if (isAdmin) {
      adminActionHtml = `
        <div class="flex items-center justify-end space-x-1.5">
          <select onchange="changeBookRequestStatus('${req.id}', this.value)" class="text-[11px] border border-slate-300 rounded px-1.5 py-1 bg-white focus:outline-none">
            <option value="pending" ${req.status === 'pending' ? 'selected' : ''}>İnceleniyor</option>
            <option value="approved" ${req.status === 'approved' ? 'selected' : ''}>Temin Ediliyor</option>
            <option value="acquired" ${req.status === 'acquired' ? 'selected' : ''}>Kütüphanede</option>
            <option value="rejected" ${req.status === 'rejected' ? 'selected' : ''}>Temin Edilemedi</option>
          </select>
          ${req.status !== 'acquired' ? `
            <button onclick="convertRequestToBook('${req.id}')" title="Kütüphaneye Eser Olarak Ekle" class="p-1 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded">
              <i data-lucide="book-plus" class="w-4 h-4"></i>
            </button>
          ` : ''}
          <button onclick="deleteBookRequest('${req.id}')" title="Talebi Sil" class="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    } else {
      adminActionHtml = `
        <button onclick="voteBookRequest('${req.id}')" class="px-2.5 py-1 text-xs rounded-lg transition-all flex items-center space-x-1 ${voteBtnCls} shadow-2xs ml-auto">
          <i data-lucide="thumbs-up" class="w-3.5 h-3.5"></i>
          <span>${hasVoted ? 'Destekledin' : 'Destekle'}</span>
        </button>
      `;
    }

    return `
      <tr class="hover:bg-slate-50/70 transition-colors">
        <td class="py-3 px-4">
          <div class="font-bold text-slate-900 leading-snug">${escapeHtml(req.title)}</div>
          <div class="text-xs text-slate-500">${escapeHtml(req.author)} ${req.publisher ? `• <span class="italic text-slate-400">${escapeHtml(req.publisher)}</span>` : ''}</div>
          ${req.isbn ? `<div class="text-[10px] text-slate-400 font-mono mt-0.5">ISBN: ${escapeHtml(req.isbn)}</div>` : ''}
        </td>
        <td class="py-3 px-4">
          <span class="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-700 font-medium">${escapeHtml(req.category || 'Genel')}</span>
        </td>
        <td class="py-3 px-4">
          <div class="font-medium text-slate-800 text-xs">${escapeHtml(req.requestedBy || '-')}</div>
          <div class="text-[11px] text-slate-400">${req.createdAt || ''}</div>
        </td>
        <td class="py-3 px-4 max-w-xs">
          <p class="text-xs text-slate-600 line-clamp-2" title="${escapeHtml(req.note)}">${escapeHtml(req.note || '-')}</p>
        </td>
        <td class="py-3 px-4 text-center">
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800">
            <i data-lucide="arrow-up" class="w-3 h-3 mr-0.5 text-emerald-600"></i> ${votes.length}
          </span>
        </td>
        <td class="py-3 px-4 text-center whitespace-nowrap min-w-[130px]">
          <span class="inline-block whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] font-bold border ${st.cls}">
            ${st.label}
          </span>
        </td>
        <td class="py-3 px-4 text-right whitespace-nowrap">
          ${adminActionHtml}
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

async function submitBookRequestForm(e) {
  e.preventDefault();
  if (!currentUser || !currentToken) {
    showToast("Kitap talep etmek için lütfen giriş yapınız.", "error");
    return;
  }

  const title = document.getElementById('request-title').value;
  const author = document.getElementById('request-author').value;
  const category = document.getElementById('request-category').value;
  const publisher = document.getElementById('request-publisher').value;
  const isbn = document.getElementById('request-isbn').value;
  const note = document.getElementById('request-note').value;

  try {
    const res = await fetch('/api/book-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ title, author, category, publisher, isbn, note })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Talep iletilemedi.');

    closeModal('modal-book-request-add');
    document.getElementById('form-book-request-add').reset();
    showToast(data.message || 'Kitap talebiniz başarıyla kaydedildi!', 'success');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function voteBookRequest(id) {
  if (!currentUser || !currentToken) {
    showToast("Oy vermek için lütfen giriş yapınız.", "info");
    openModal('modal-login');
    return;
  }

  try {
    const res = await fetch(`/api/book-requests/${id}/vote`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'İşlem başarısız');

    showToast(data.voted ? "Talebe desteğiniz eklendi (+1)!" : "Desteğiniz kaldırıldı.", "success");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function changeBookRequestStatus(id, newStatus) {
  if (!currentToken || !currentUser || currentUser.role !== 'admin') return;

  try {
    const res = await fetch(`/api/book-requests/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ status: newStatus })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Güncellenemedi');

    showToast("Talep durumu güncellendi.", "success");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function convertRequestToBook(id) {
  if (!currentToken || !currentUser || currentUser.role !== 'admin') return;

  const shelf = prompt("Bu eser için raf / yer numarası belirleyiniz:", "SBF-POL-103");
  if (shelf === null) return;

  try {
    const res = await fetch(`/api/book-requests/${id}/convert-to-book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ shelf })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Kütüphaneye aktarılamadı');

    showToast("Eser kütüphane kataloğuna eklendi ve talep karşılandı!", "success");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function deleteBookRequest(id) {
  if (!currentToken || !currentUser || currentUser.role !== 'admin') return;
  if (!confirm("Bu kitap talebini silmek istediğinize emin misiniz?")) return;

  try {
    const res = await fetch(`/api/book-requests/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Silinemedi');

    showToast("Talep silindi.", "success");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

// ================= ÖĞRENCİ YAZISI YORUM SİSTEMİ =================

function renderArticleComments(article) {
  const container = document.getElementById('read-article-comments-list');
  const countBadge = document.getElementById('read-article-comments-count');
  const formBox = document.getElementById('article-comment-form-container');
  if (!container) return;

  const comments = article.comments || [];
  if (countBadge) countBadge.textContent = comments.length;

  if (formBox) {
    if (currentUser) {
      formBox.innerHTML = `
        <form id="form-add-article-comment" onsubmit="submitArticleComment(event)" class="space-y-2">
          <div class="flex items-center justify-between text-xs text-slate-600 font-medium mb-1">
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span><strong>${escapeHtml(currentUser.fullName || currentUser.username)}</strong> olarak yorum yapıyorsun</span>
            </div>
            <label class="flex items-center space-x-1.5 text-[11px] text-slate-500 cursor-pointer">
              <input type="checkbox" id="comment-use-pseudonym" onchange="toggleCommentPseudonymInput()" class="rounded text-indigo-600">
              <span>Mahlasla Yaz</span>
            </label>
          </div>
          <div id="comment-pseudonym-container" class="hidden mb-1">
            <input type="text" id="comment-pseudonym" placeholder="Yorumda görünecek takma isim (örn: SBF'li)..." class="w-full text-xs border border-slate-300 rounded p-1.5 bg-slate-50 outline-none focus:border-indigo-500">
          </div>
          <div class="relative">
            <textarea id="article-comment-text" rows="2" required placeholder="Düşünceni, eleştirini veya katkını saygı çerçevesinde paylaş..." class="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none bg-white pr-20"></textarea>
            <button type="submit" class="absolute bottom-2.5 right-2.5 px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-semibold rounded-md shadow-xs transition-colors flex items-center space-x-1">
              <span>Gönder</span>
              <i data-lucide="send" class="w-3 h-3"></i>
            </button>
          </div>
        </form>
      `;
    } else {
      formBox.innerHTML = `
        <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center">
          <p class="text-xs text-slate-500">Yorum yazmak ve akademik tartışmaya katılmak için <button onclick="closeModal('modal-article-read'); openModal('modal-login');" class="text-indigo-600 font-semibold hover:underline">öğrenci girişi yapın</button>.</p>
        </div>
      `;
    }
  }

  if (comments.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-400">
        <i data-lucide="message-circle" class="w-6 h-6 mx-auto mb-1 text-slate-300"></i>
        <p class="text-xs">Henüz yorum yapılmamış. İlk düşünceyi sen paylaş!</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const isAdmin = currentUser && currentUser.role === 'admin';
  const currentUserId = currentUser ? (currentUser.studentNumber || currentUser.username) : null;

  container.innerHTML = comments.map(c => {
    const isCommentAuthor = currentUserId && (currentUserId === c.authorStudentNumber);
    const canDelete = isAdmin || isCommentAuthor;

    const deleteBtn = canDelete ? `
      <button onclick="deleteArticleComment('${article.id}', '${c.id}')" title="Yorumu Sil" class="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors">
        <i data-lucide="trash-2" class="w-3 h-3"></i>
      </button>
    ` : '';

    return `
      <div class="p-3 rounded-lg bg-slate-50 border border-slate-100 flex flex-col space-y-1 text-xs">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="font-bold text-slate-800 text-xs">${escapeHtml(c.authorName)}</span>
            <span class="text-[10px] text-slate-400 font-normal">• ${escapeHtml(c.authorDepartment || 'SBF')}</span>
          </div>
          <div class="flex items-center space-x-1.5">
            <span class="text-[10px] text-slate-400">${c.createdAt || ''}</span>
            ${deleteBtn}
          </div>
        </div>
        <p class="text-slate-700 text-xs leading-relaxed mt-1 break-words">${escapeHtml(c.text)}</p>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

async function submitArticleComment(e) {
  e.preventDefault();
  if (!currentUser || !currentToken) {
    showToast("Yorum yapmak için lütfen giriş yapınız.", "error");
    return;
  }
  if (!activeArticleId) return;

  const textarea = document.getElementById('article-comment-text');
  if (!textarea) return;
  const text = textarea.value.trim();
  if (text.length < 2) {
    showToast("Yorum en az 2 karakter olmalıdır.", "error");
    return;
  }

  const usePseudonym = document.getElementById('comment-use-pseudonym') ? document.getElementById('comment-use-pseudonym').checked : false;
  const pseudonym = document.getElementById('comment-pseudonym') ? document.getElementById('comment-pseudonym').value.trim() : '';

  try {
    const res = await fetch(`/api/articles/${activeArticleId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ text, usePseudonym, pseudonym })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Yorum gönderilemedi.');

    showToast("Yorumunuz eklendi!", "success");
    textarea.value = '';
    if (document.getElementById('comment-use-pseudonym')) document.getElementById('comment-use-pseudonym').checked = false;
    if (document.getElementById('comment-pseudonym-container')) document.getElementById('comment-pseudonym-container').classList.add('hidden');

    const article = (libraryData.articles || []).find(a => a.id === activeArticleId);
    if (article) {
      if (!article.comments) article.comments = [];
      article.comments.push(data.comment);
      renderArticleComments(article);
      renderArticles();
    }
  } catch (err) {
    alert(err.message);
  }
}

function toggleCommentPseudonymInput() {
  const cb = document.getElementById('comment-use-pseudonym');
  const box = document.getElementById('comment-pseudonym-container');
  if (cb && box) {
    if (cb.checked) box.classList.remove('hidden');
    else box.classList.add('hidden');
  }
}

async function deleteArticleComment(articleId, commentId) {
  if (!confirm("Bu yorumu silmek istediğinize emin misiniz?")) return;
  if (!currentToken) return;

  try {
    const res = await fetch(`/api/articles/${articleId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${currentToken}`
      }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Yorum silinemedi.');

    showToast("Yorum silindi.", "success");
    const article = (libraryData.articles || []).find(a => a.id === articleId);
    if (article && article.comments) {
      article.comments = article.comments.filter(c => c.id !== commentId);
      renderArticleComments(article);
      renderArticles();
    }
  } catch (err) {
    alert(err.message);
  }
}

// ================= SINAV NOTLARI & DERS KAYNAK HAVUZU =================

let activeExamNoteId = null;

function handleNewExamNoteBtnClick() {
  if (!currentUser) {
    showToast("Ders notu paylaşmak için lütfen öğrenci girişi yapınız.", "info");
    openModal('modal-login');
    return;
  }
  openModal('modal-exam-note-add');
}

function toggleNotePseudonymInput() {
  const cb = document.getElementById('note-use-pseudonym');
  const box = document.getElementById('note-pseudonym-container');
  if (cb && box) {
    if (cb.checked) box.classList.remove('hidden');
    else box.classList.add('hidden');
  }
}

function filterExamNotes() {
  renderExamNotes();
}

function renderExamNotes() {
  const grid = document.getElementById('examNotesGrid');
  const statCount = document.getElementById('stat-total-notes-count');
  if (!grid) return;

  const notes = libraryData.examNotes || [];
  if (statCount) statCount.textContent = notes.length;

  const deptFilter = document.getElementById('examNoteDeptFilter')?.value || 'all';
  const typeFilter = document.getElementById('examNoteTypeFilter')?.value || 'all';
  const semFilter = document.getElementById('examNoteSemesterFilter')?.value || 'all';
  const search = (document.getElementById('examNoteSearchInput')?.value || '').trim().toLowerCase();

  const typeConfig = {
    'Vize Özeti': { bg: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    'Final Özeti': { bg: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    'Çıkmış Sorular': { bg: 'bg-amber-100 text-amber-800 border-amber-200' },
    'Ders Notu': { bg: 'bg-blue-100 text-blue-800 border-blue-200' },
    'Okuma Listesi': { bg: 'bg-purple-100 text-purple-800 border-purple-200' }
  };

  const filtered = notes.filter(n => {
    if (deptFilter !== 'all' && n.department && !n.department.includes(deptFilter)) return false;
    if (typeFilter !== 'all' && n.type !== typeFilter) return false;
    if (semFilter !== 'all' && n.semester && !n.semester.includes(semFilter)) return false;
    if (search) {
      const matchTitle = (n.title || '').toLowerCase().includes(search);
      const matchCourse = (n.courseName || '').toLowerCase().includes(search);
      const matchCode = (n.courseCode || '').toLowerCase().includes(search);
      const matchInst = (n.instructor || '').toLowerCase().includes(search);
      const matchAuthor = (n.authorName || '').toLowerCase().includes(search);
      if (!matchTitle && !matchCourse && !matchCode && !matchInst && !matchAuthor) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">
        <i data-lucide="book-open" class="w-10 h-10 mx-auto mb-2 text-slate-300"></i>
        <h4 class="text-sm font-bold text-slate-700">Aradığınız kriterde ders notu bulunamadı</h4>
        <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">
          İlk notu sen paylaşarak arkadaşlarına yardımcı olabilir ve Not Kahramanı rozetini kapabilirsin!
        </p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  const isAdmin = currentUser && currentUser.role === 'admin';
  const currentUserId = currentUser ? (currentUser.studentNumber || currentUser.username) : null;

  grid.innerHTML = filtered.map(n => {
    const isAuthor = currentUserId && (currentUserId === n.authorStudentNumber);
    const tc = typeConfig[n.type] || { bg: 'bg-slate-100 text-slate-800 border-slate-200' };
    const helpfulUsers = n.helpfulUsers || [];
    const hasVoted = currentUserId && helpfulUsers.includes(currentUserId);
    const helpfulBtnCls = hasVoted ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200';

    const deleteBtn = (isAdmin || isAuthor) ? `
      <button onclick="deleteExamNote('${n.id}', event)" title="Notu Sil" class="text-slate-400 hover:text-rose-600 transition-colors p-1">
        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
      </button>
    ` : '';

    const driveBtn = n.driveUrl ? `
      <a href="${escapeHtml(n.driveUrl)}" target="_blank" rel="noopener noreferrer" onclick="trackNoteDownload('${n.id}', event)" class="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold flex items-center space-x-1 border border-emerald-200" title="Buluttan İndir / Aç">
        <i data-lucide="download" class="w-3.5 h-3.5"></i>
      </a>
    ` : '';

    return `
      <div onclick="openReadExamNoteModal('${n.id}')" class="bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 border border-slate-200 p-5 flex flex-col justify-between cursor-pointer group hover:border-emerald-300">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center space-x-1.5">
              <span class="px-2.5 py-0.5 text-[10px] font-bold rounded-full border ${tc.bg}">
                ${escapeHtml(n.type || 'Ders Notu')}
              </span>
              ${n.courseCode ? `<span class="px-2 py-0.5 text-[10px] font-mono font-bold bg-slate-100 text-slate-600 rounded">${escapeHtml(n.courseCode)}</span>` : ''}
            </div>
            ${deleteBtn}
          </div>

          <h3 class="text-base font-bold text-slate-900 group-hover:text-emerald-900 transition-colors leading-snug line-clamp-2">
            ${escapeHtml(n.title)}
          </h3>

          <div class="mt-2 space-y-1 text-xs text-slate-600">
            <div class="flex items-center space-x-1.5 font-medium text-slate-800">
              <i data-lucide="book" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
              <span class="truncate">${escapeHtml(n.courseName)}</span>
            </div>
            ${n.instructor ? `
              <div class="flex items-center space-x-1.5 text-slate-500">
                <i data-lucide="graduation-cap" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
                <span class="truncate">${escapeHtml(n.instructor)}</span>
              </div>
            ` : ''}
          </div>

          <p class="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
            ${escapeHtml(n.description || n.content.slice(0, 120))}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div class="flex items-center space-x-1.5 truncate max-w-[210px]">
            <i data-lucide="user" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
            <span class="font-medium text-slate-700 truncate">${escapeHtml(n.authorName)}</span>
            ${(currentUser && currentUser.role === 'founder' && founderUnmasked && n.isPseudonym && n.realAuthorName) ? `<span class="text-[10px] text-amber-700 font-bold bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300 ml-1 shrink-0" title="Gerçek: ${escapeHtml(n.realAuthorName)}">👁️ ${escapeHtml(n.realAuthorName)}</span>` : ''}
          </div>

          <div class="flex items-center space-x-2 shrink-0">
            <button onclick="voteExamNoteHelpful('${n.id}', event)" class="px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${helpfulBtnCls}" title="Faydalı Buldum">
              <i data-lucide="thumbs-up" class="w-3 h-3"></i>
              <span>${n.helpfulCount || 0}</span>
            </button>
            ${driveBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function openReadExamNoteModal(id) {
  const note = (libraryData.examNotes || []).find(n => n.id === id);
  if (!note) return;

  activeExamNoteId = id;

  document.getElementById('read-note-title').textContent = note.title;
  document.getElementById('read-note-type-badge').textContent = note.type || 'Ders Notu';
  document.getElementById('read-note-course-code').textContent = note.courseCode || 'SBF';
  document.getElementById('read-note-course-name').textContent = note.courseName;
  document.getElementById('read-note-instructor').textContent = note.instructor || 'Öğretim Üyesi';
  document.getElementById('read-note-department').textContent = note.department || 'SBF';
  let noteAuthorText = note.authorName;
  if (currentUser && currentUser.role === 'founder' && founderUnmasked && note.isPseudonym && note.realAuthorName) {
    noteAuthorText = `${note.authorName} [👁️ Gerçek Yazar: ${note.realAuthorName} - No: ${note.authorStudentNumber || '-'}]`;
  }
  document.getElementById('read-note-author').textContent = noteAuthorText;

  const descBox = document.getElementById('read-note-description-box');
  const descText = document.getElementById('read-note-description');
  if (note.description) {
    descBox.classList.remove('hidden');
    descText.textContent = note.description;
  } else {
    descBox.classList.add('hidden');
  }

  const contentContainer = document.getElementById('read-note-content-container');
  const contentEl = document.getElementById('read-note-content');
  if (note.content && note.content.trim().length > 0) {
    contentContainer.classList.remove('hidden');
    contentEl.textContent = note.content;
  } else {
    contentContainer.classList.add('hidden');
  }

  const driveBox = document.getElementById('read-note-download-box');
  const driveLink = document.getElementById('read-note-drive-link');
  if (note.driveUrl) {
    driveBox.classList.remove('hidden');
    driveLink.href = note.driveUrl;
  } else {
    driveBox.classList.add('hidden');
  }

  updateExamNoteHelpfulButtonUI(note);

  const isAdmin = currentUser && currentUser.role === 'admin';
  const isAuthor = currentUser && (currentUser.studentNumber === note.authorStudentNumber || currentUser.username === note.authorStudentNumber);
  const actionsEl = document.getElementById('read-note-actions');

  let delBtn = '';
  if (isAdmin || isAuthor) {
    delBtn = `<button onclick="deleteExamNote('${note.id}'); closeModal('modal-exam-note-read');" class="px-3 py-1.5 bg-slate-200 hover:bg-rose-100 hover:text-rose-700 text-slate-700 rounded-lg text-xs font-semibold">Sil</button>`;
  }
  actionsEl.innerHTML = delBtn + `<button onclick="closeModal('modal-exam-note-read')" class="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100">Kapat</button>`;

  openModal('modal-exam-note-read');
  if (window.lucide) lucide.createIcons();
}

function updateExamNoteHelpfulButtonUI(note) {
  const btn = document.getElementById('btn-read-note-helpful');
  const txt = document.getElementById('read-note-helpful-text');
  if (!btn || !txt) return;

  const helpfulUsers = note.helpfulUsers || [];
  const currentUserId = currentUser ? (currentUser.studentNumber || currentUser.username) : null;
  const isHelpful = currentUserId && helpfulUsers.includes(currentUserId);

  txt.textContent = `${note.helpfulCount || 0} Faydalı`;
  if (isHelpful) {
    btn.className = "px-3.5 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold transition-all flex items-center shadow-xs";
  } else {
    btn.className = "px-3.5 py-1.5 bg-white border border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 rounded-lg text-xs font-semibold transition-all flex items-center shadow-xs";
  }
}

async function voteActiveExamNoteHelpful() {
  if (!activeExamNoteId) return;
  await voteExamNoteHelpful(activeExamNoteId);
  const note = (libraryData.examNotes || []).find(n => n.id === activeExamNoteId);
  if (note) updateExamNoteHelpfulButtonUI(note);
}

async function voteExamNoteHelpful(id, event) {
  if (event) event.stopPropagation();
  if (!currentUser || !currentToken) {
    showToast("Faydalı olarak işaretlemek için lütfen giriş yapınız.", "info");
    openModal('modal-login');
    return;
  }

  try {
    const res = await fetch(`/api/exam-notes/${id}/helpful`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'İşlem başarısız');

    const note = (libraryData.examNotes || []).find(n => n.id === id);
    if (note) {
      const userIdentifier = currentUser.studentNumber || currentUser.username;
      if (!note.helpfulUsers) note.helpfulUsers = [];
      if (data.voted) {
        if (!note.helpfulUsers.includes(userIdentifier)) note.helpfulUsers.push(userIdentifier);
      } else {
        note.helpfulUsers = note.helpfulUsers.filter(u => u !== userIdentifier);
      }
      note.helpfulCount = data.helpfulCount;
      renderExamNotes();
    }
  } catch (err) {
    alert(err.message);
  }
}

function trackNoteDownload(id, event) {
  if (event) event.stopPropagation();
  fetch(`/api/exam-notes/${id}/download`, { method: 'POST' }).catch(() => {});
}

async function submitExamNoteForm(e) {
  e.preventDefault();
  if (!currentUser || !currentToken) {
    showToast("Ders notu paylaşmak için lütfen giriş yapınız.", "error");
    return;
  }

  const title = document.getElementById('note-title').value;
  const courseName = document.getElementById('note-course-name').value;
  const courseCode = document.getElementById('note-course-code').value;
  const instructor = document.getElementById('note-instructor').value;
  const department = document.getElementById('note-department').value;
  const type = document.getElementById('note-type').value;
  const description = document.getElementById('note-description').value;
  const content = document.getElementById('note-content').value;
  const driveUrl = document.getElementById('note-drive-url').value;
  const usePseudonym = document.getElementById('note-use-pseudonym') ? document.getElementById('note-use-pseudonym').checked : false;
  const pseudonym = document.getElementById('note-pseudonym') ? document.getElementById('note-pseudonym').value.trim() : '';

  if ((!content || content.trim().length === 0) && (!driveUrl || driveUrl.trim().length === 0)) {
    showToast("Lütfen ya not özeti metni giriniz ya da bulut indirme linki ekleyiniz.", "error");
    return;
  }

  try {
    const res = await fetch('/api/exam-notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({
        title, courseName, courseCode, instructor, department,
        type, description, content, driveUrl, usePseudonym, pseudonym
      })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Ders notu kaydedilemedi.');

    closeModal('modal-exam-note-add');
    document.getElementById('form-exam-note-add').reset();
    if (document.getElementById('note-use-pseudonym')) document.getElementById('note-use-pseudonym').checked = false;
    if (document.getElementById('note-pseudonym-container')) document.getElementById('note-pseudonym-container').classList.add('hidden');

    showToast(data.message || 'Ders notunuz başarıyla paylaşıldı!', 'success');
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

async function deleteExamNote(id, event) {
  if (event) event.stopPropagation();
  if (!confirm("Bu ders notunu silmek istediğinize emin misiniz?")) return;
  if (!currentToken) return;

  try {
    const res = await fetch(`/api/exam-notes/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Silinemedi');

    showToast("Ders notu silindi.", "success");
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

// ================= ÖĞRENCİ BAŞARI ROZETLERİ (GAMIFICATION) =================

function openUserProfileModal() {
  if (!currentUser) {
    openModal('modal-login');
    return;
  }

  document.getElementById('profile-full-name').textContent = currentUser.fullName || currentUser.username;
  document.getElementById('profile-department').textContent = currentUser.department || 'Marmara SBF';

  const userIdentifier = currentUser.studentNumber || currentUser.username;

  // İstatistikleri Hesapla
  const loansCount = (libraryData.loans || []).filter(l => l.memberNumber === userIdentifier).length;
  const articles = (libraryData.articles || []).filter(a => a.authorStudentNumber === userIdentifier);
  const articlesCount = articles.filter(a => a.status === 'published').length;
  const notes = (libraryData.examNotes || []).filter(n => n.authorStudentNumber === userIdentifier);
  const notesCount = notes.length;
  const totalLikes = articles.reduce((sum, a) => sum + (a.likes || []).length, 0);
  const helpfulNotesCount = notes.reduce((sum, n) => sum + (n.helpfulCount || 0), 0);
  const acquiredRequests = (libraryData.bookRequests || []).filter(r => r.studentNumber === userIdentifier && r.status === 'acquired').length;

  document.getElementById('profile-stat-loans').textContent = loansCount;
  document.getElementById('profile-stat-articles').textContent = articlesCount;
  document.getElementById('profile-stat-notes').textContent = notesCount;

  // Rozet Listesi Tanımı
  const badges = [
    {
      id: 'badge-explorer',
      title: 'Kütüphane Kaşifi',
      icon: 'compass',
      desc: 'Marmara SBF kütüphane topluluğunun doğrulanmış üyesi.',
      earned: true,
      color: 'amber'
    },
    {
      id: 'badge-bookworm',
      title: 'Kitap Kurdu',
      icon: 'book-open',
      desc: 'Kütüphaneden en az 2 kitap ödünç alıp okuyan öğrenci.',
      earned: loansCount >= 2,
      color: 'blue'
    },
    {
      id: 'badge-young-author',
      title: 'Genç Kalem',
      icon: 'feather',
      desc: 'Düşünce kürsüsünde en az 1 orijinal yazısı yayınlanan yazar.',
      earned: articlesCount >= 1,
      color: 'indigo'
    },
    {
      id: 'badge-idea-architect',
      title: 'Fikir Mimarı',
      icon: 'lightbulb',
      desc: 'Yazıları ve düşünceleri 3+ arkadaşı tarafından beğenilen düşünür.',
      earned: totalLikes >= 3,
      color: 'rose'
    },
    {
      id: 'badge-note-hero',
      title: 'Not Kahramanı',
      icon: 'graduation-cap',
      desc: 'Ders notu paylaşarak en az 5 öğrenciye sınav öncesi ışık tutan dayanışmacı.',
      earned: (notesCount >= 1 && helpfulNotesCount >= 5),
      color: 'emerald'
    },
    {
      id: 'badge-curator',
      title: 'Kürsü Küratörü',
      icon: 'bookmark-check',
      desc: 'Önerdiği kitap kütüphane veya kulüp arşivine kazandırılan vizyoner.',
      earned: acquiredRequests >= 1,
      color: 'purple'
    }
  ];

  const earnedCount = badges.filter(b => b.earned).length;
  document.getElementById('profile-badge-summary').textContent = `${earnedCount} / ${badges.length} Rozet Açık`;

  const grid = document.getElementById('profile-badges-grid');
  grid.innerHTML = badges.map(b => {
    if (b.earned) {
      return `
        <div class="p-3 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-2xs flex items-start space-x-2.5">
          <div class="w-8 h-8 rounded-lg bg-${b.color}-100 text-${b.color}-700 flex items-center justify-center shrink-0 shadow-2xs">
            <i data-lucide="${b.icon}" class="w-4 h-4"></i>
          </div>
          <div>
            <div class="flex items-center space-x-1">
              <span class="text-xs font-bold text-slate-800">${escapeHtml(b.title)}</span>
              <i data-lucide="check" class="w-3 h-3 text-emerald-600"></i>
            </div>
            <p class="text-[10px] text-slate-500 mt-0.5 leading-snug">${escapeHtml(b.desc)}</p>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/60 opacity-60 flex items-start space-x-2.5">
          <div class="w-8 h-8 rounded-lg bg-slate-200 text-slate-400 flex items-center justify-center shrink-0">
            <i data-lucide="lock" class="w-4 h-4"></i>
          </div>
          <div>
            <div class="flex items-center space-x-1">
              <span class="text-xs font-bold text-slate-600">${escapeHtml(b.title)}</span>
            </div>
            <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${escapeHtml(b.desc)}</p>
          </div>
        </div>
      `;
    }
  }).join('');

  openModal('modal-user-profile');
  if (window.lucide) lucide.createIcons();
}

// ================= KVKK & ÇEREZ YÖNETİMİ =================

function checkKvkkConsent() {
  const isAccepted = localStorage.getItem('sbf_kvkk_accepted');
  const banner = document.getElementById('kvkkConsentBanner');
  if (banner) {
    if (!isAccepted) {
      banner.classList.remove('hidden');
    } else {
      banner.classList.add('hidden');
    }
  }
}

function acceptKvkkConsent() {
  localStorage.setItem('sbf_kvkk_accepted', 'true');
  const banner = document.getElementById('kvkkConsentBanner');
  if (banner) banner.classList.add('hidden');
  showToast('KVKK ve Çerez tercihleriniz başarıyla kaydedildi.', 'success');
}

// ================= KURUCU (FOUNDER) GİZLİ ÇEKİRDEK İŞLEMLERİ =================

async function loadFounderCoreStats() {
  if (!currentToken || !currentUser || currentUser.role !== 'founder') return;
  try {
    const res = await fetch('/api/founder/master-audit', {
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    if (!res.ok) return;
    const data = await res.json();

    const sessEl = document.getElementById('founder-stat-sessions');
    const pseudoEl = document.getElementById('founder-stat-pseudonyms');
    const dbSizeEl = document.getElementById('founder-stat-dbsize');

    if (sessEl) sessEl.textContent = `${data.activeSessions.length} Canlı Oturum`;
    const totalPseudos = (data.unmaskedArticles || []).length + (data.unmaskedNotes || []).length;
    if (pseudoEl) pseudoEl.textContent = `${totalPseudos} Mahlas Kayıtlı`;
    if (dbSizeEl) dbSizeEl.textContent = `${Math.round(data.systemHealth.databaseSizeBytes / 1024)} KB (Sağlam)`;
  } catch (e) {
    console.error('Founder stat error:', e);
  }
}

function toggleUnmaskAllPseudonyms() {
  if (!currentUser || currentUser.role !== 'founder') return;
  founderUnmasked = !founderUnmasked;
  const btnText = document.getElementById('founderUnmaskToggleText');
  const btn = document.getElementById('btnFounderUnmaskToggle');
  if (btnText && btn) {
    if (founderUnmasked) {
      btnText.textContent = "Mahlasları Gizle (Normal Görünüm)";
      btn.className = "px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center";
      showToast("👁️ Kurucu Modu: Mahlasların arkasındaki gerçek kimlikler açıldı!", "success");
    } else {
      btnText.textContent = "Mahlasları & Gerçek Kimlikleri Aç";
      btn.className = "px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center";
      showToast("Mahlaslar standart görünümüne döndü.", "info");
    }
  }
  renderArticles();
  renderExamNotes();
}

async function openFounderAuditModal() {
  if (!currentToken || !currentUser || currentUser.role !== 'founder') {
    alert("Bu denetim konsolu yalnızca Kurucu yetkisi ile görüntülenebilir.");
    return;
  }
  try {
    const res = await fetch('/api/founder/master-audit', {
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    if (!res.ok) throw new Error("Audit verisi alınamadı");
    const data = await res.json();

    // Sağlık kartları
    const uptimeMin = Math.floor(data.systemHealth.serverUptimeSeconds / 60);
    const upEl = document.getElementById('audit-uptime');
    const ramEl = document.getElementById('audit-ram');
    const sessCountEl = document.getElementById('audit-active-sessions');
    const dbSizeEl = document.getElementById('audit-dbsize');

    if (upEl) upEl.textContent = `${uptimeMin} dk (${data.systemHealth.serverUptimeSeconds}s)`;
    if (ramEl) ramEl.textContent = `${data.systemHealth.memoryUsageMB} MB`;
    if (sessCountEl) sessCountEl.textContent = `${data.activeSessions.length} Oturum`;
    if (dbSizeEl) dbSizeEl.textContent = `${Math.round(data.systemHealth.databaseSizeBytes / 1024)} KB`;

    // 1. Canlı Oturumlar Tablosu
    const sessTbody = document.getElementById('audit-sessions-tbody');
    if (sessTbody) {
      sessTbody.innerHTML = '';
      if (data.activeSessions.length === 0) {
        sessTbody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-slate-500">Aktif oturum kaydı bulunamadı.</td></tr>`;
      } else {
        data.activeSessions.forEach(s => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td class="py-2.5 px-3 font-bold text-white">${escapeHtml(s.fullName)} <span class="text-slate-400">(${escapeHtml(s.username)})</span></td>
            <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${s.role === 'founder' ? 'bg-amber-400 text-slate-950' : (s.role === 'admin' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200')}">${escapeHtml(s.role)}</span></td>
            <td class="py-2.5 px-3 text-emerald-400 font-mono">${s.ageMinutes} dk önce</td>
            <td class="py-2.5 px-3 text-slate-400">${escapeHtml(s.department || '-')}</td>
            <td class="py-2.5 px-3 text-right font-mono text-[10px] text-amber-300">${s.tokenPreview}</td>
          `;
          sessTbody.appendChild(tr);
        });
      }
    }

    // 2. Mahlas Eşleştirme Tablosu
    const unmaskTbody = document.getElementById('audit-unmask-tbody');
    if (unmaskTbody) {
      unmaskTbody.innerHTML = '';
      const allUnmasked = [
        ...data.unmaskedArticles.map(a => ({ type: 'Makale', title: a.title, ...a })),
        ...data.unmaskedNotes.map(n => ({ type: 'Sınav Notu', title: n.title, ...n }))
      ];
      if (allUnmasked.length === 0) {
        unmaskTbody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-slate-500">Şu an sistemde mahlas kullanan eser bulunmuyor.</td></tr>`;
      } else {
        allUnmasked.forEach(u => {
          const tr = document.createElement('tr');
          tr.className = "hover:bg-white/5";
          tr.innerHTML = `
            <td class="py-2.5 px-3"><span class="px-1.5 py-0.5 rounded text-[10px] ${u.type === 'Makale' ? 'bg-indigo-900/80 text-indigo-200' : 'bg-emerald-900/80 text-emerald-200'}">${u.type}</span> <span class="font-medium text-slate-300 ml-1">${escapeHtml(u.title)}</span></td>
            <td class="py-2.5 px-3 font-semibold text-slate-300 font-mono">${escapeHtml(u.pseudonym)}</td>
            <td class="py-2.5 px-3 font-bold text-amber-300">${escapeHtml(u.realAuthorName)}</td>
            <td class="py-2.5 px-3 font-mono text-slate-300">${escapeHtml(u.studentNumber)}</td>
            <td class="py-2.5 px-3 text-slate-400">${escapeHtml(u.department || '-')}</td>
          `;
          unmaskTbody.appendChild(tr);
        });
      }
    }

    // 3. Kullanıcı Hesapları Tablosu & Hızlı Yetkilendirme
    const usersTbody = document.getElementById('audit-users-tbody');
    if (usersTbody) {
      usersTbody.innerHTML = '';
      data.userAccounts.forEach(u => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-white/5";
        const isImmune = u.isImmune || u.role === 'founder';
        const roleBtn = isImmune
          ? '<span class="px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full font-bold">🛡️ Dokunulmaz</span>'
          : (u.role === 'admin'
              ? `<button onclick="toggleUserAdminRole('${u.id}')" class="px-2 py-0.5 text-[10px] bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 rounded font-bold border border-amber-500/30 transition-colors">Adminliği Al</button>`
              : `<button onclick="toggleUserAdminRole('${u.id}')" class="px-2 py-0.5 text-[10px] bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 rounded font-bold border border-blue-500/30 transition-colors">+ Admin Yap</button>`);

        tr.innerHTML = `
          <td class="py-2 px-3 font-mono font-bold text-slate-200">${escapeHtml(u.username)}</td>
          <td class="py-2 px-3 font-semibold text-white">${escapeHtml(u.fullName)}</td>
          <td class="py-2 px-3"><span class="px-1.5 py-0.5 text-[10px] rounded ${u.role === 'founder' ? 'bg-amber-400 text-slate-950 font-bold' : (u.role === 'admin' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200')}">${escapeHtml(u.role)}</span></td>
          <td class="py-2 px-3 text-slate-400 text-[10px] font-mono">${escapeHtml(u.email || '-')}</td>
          <td class="py-2 px-3 text-right">${roleBtn}</td>
        `;
        usersTbody.appendChild(tr);
      });
    }

    // 4. Admin Yönetim Masası Tablosu
    const adminsTbody = document.getElementById('audit-admins-tbody');
    if (adminsTbody) {
      adminsTbody.innerHTML = '';
      const adminAccounts = data.userAccounts.filter(u => u.role === 'admin');
      if (adminAccounts.length === 0) {
        adminsTbody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-slate-500">Şu anda kayıtlı standart admin bulunmamaktadır.</td></tr>`;
      } else {
        adminAccounts.forEach(adm => {
          const tr = document.createElement('tr');
          tr.className = "hover:bg-white/5";
          tr.innerHTML = `
            <td class="py-2 px-3 font-mono font-bold text-amber-300">${escapeHtml(adm.username)}</td>
            <td class="py-2 px-3 font-semibold text-white">${escapeHtml(adm.fullName)}</td>
            <td class="py-2 px-3 text-slate-300 font-mono text-[10px]">${escapeHtml(adm.email || '-')}</td>
            <td class="py-2 px-3"><span class="px-1.5 py-0.5 text-[10px] rounded bg-blue-600 text-white font-bold">Kütüphane Admini</span></td>
            <td class="py-2 px-3 text-right space-x-1.5 whitespace-nowrap">
              <button onclick="toggleUserAdminRole('${adm.id}')" title="Admin yetkisini kaldırıp öğrenci yap" class="px-2 py-1 text-[10px] bg-amber-500/20 hover:bg-amber-500/40 text-amber-300 rounded font-semibold border border-amber-500/30 transition-all">
                Yetkiyi Geri Al
              </button>
              <button onclick="deleteAdminAccount('${adm.id}', '${escapeHtml(adm.fullName)}')" title="Admin hesabını tamamen sil" class="px-2 py-1 text-[10px] bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 rounded font-semibold border border-rose-500/30 transition-all">
                Hesabı Sil
              </button>
            </td>
          `;
          adminsTbody.appendChild(tr);
        });
      }
    }

    openModal('modal-founder-audit');
    if (window.lucide) lucide.createIcons();
  } catch (err) {
    alert(err.message);
  }
}

// Kurucu: Yeni Admin Tanımla
async function submitCreateAdmin(e) {
  e.preventDefault();
  const username = document.getElementById('admin-new-username').value;
  const password = document.getElementById('admin-new-password').value;
  const fullName = document.getElementById('admin-new-fullname').value;
  const email = document.getElementById('admin-new-email').value;
  const department = document.getElementById('admin-new-department').value;

  try {
    const res = await fetch('/api/founder/admins', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentToken}`
      },
      body: JSON.stringify({ username, password, fullName, email, department })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Admin hesabı oluşturulamadı.');

    closeModal('modal-create-admin');
    document.getElementById('form-create-admin').reset();
    showToast(data.message, 'success');
    await openFounderAuditModal();
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

// Kurucu: Admin Hesabını Sil
async function deleteAdminAccount(id, name) {
  if (!confirm(`"${name}" yöneticisinin hesabını sistemden kalıcı olarak silmek istediğinize emin misiniz?`)) return;

  try {
    const res = await fetch(`/api/founder/admins/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Yönetici silinemedi.');

    showToast(data.message, 'info');
    await openFounderAuditModal();
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}

// Kurucu: Kullanıcının Rolünü Admin / Öğrenci Arasında Değiştir (Promote/Demote)
async function toggleUserAdminRole(id) {
  try {
    const res = await fetch(`/api/founder/users/${id}/toggle-admin`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${currentToken}` }
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'İşlem başarısız.');

    showToast(data.message, 'success');
    await openFounderAuditModal();
    await fetchData();
  } catch (err) {
    alert(err.message);
  }
}



