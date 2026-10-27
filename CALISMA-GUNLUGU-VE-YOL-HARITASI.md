# Marmara SBF Kütüphanesi & Düşünce Kürsüsü — Çalışma Günlüğü ve Yol Haritası

Bu belge, projenin gelişim sürecini, alınan mimari kararları, eklenen özellikleri ve gelecek dönem planlarını kayıt altında tutmak amacıyla oluşturulmuştur. GitHub deposunda her zaman güncel kalacak şekilde saklanır.

---

## 📌 Çalışma Oturumu: 05 Ekim 2026
- **Geliştirici:** Tarık Özşentürk & Antigravity Pair-Programming
- **Odak Alanı:** Topluluk Katılımı, Sınav Dayanışması, Yorum Sistemi, Mahlas Desteği ve Oyunlaştırma (Gamification)
- **Durum:** ✅ Başarıyla Tamamlandı ve Test Edildi (`server.js` & `app.js` hatasız)

---

## 🚀 Bu Oturumda Hayata Geçirilen Özellikler

### 1. "Sınav Notları & Ders Kaynak Havuzu" (`tab-content-exam-notes`)
Öğrencilerin vize ve final dönemlerinde fakülteye ve kütüphaneye akın etmesini sağlayan kolektif sınav arşivi.
- **Fakülteye Özel Filtreler:**
  - **Bölüm:** Siyaset Bilimi ve Kamu Yönetimi (TR/FR), Uluslararası İlişkiler (EN), İktisat, Yerel Yönetimler, Ortak Dersler.
  - **Ders & Hoca:** Ders kodu (örn: `POL201`, `ULI305`, `KAM203`), ders adı ve dersi veren hoca adı ile anlık arama.
  - **Dönem & Tür:** *Vize Özeti*, *Final Özeti*, *Çıkmış Sorular*, *Ders Notu*, *Hoca Okuma Listesi (Syllabus)*.
  - **Sınıf:** 1., 2., 3. ve 4. Sınıf filtreleri.
- **Çift Formatlı Kaynak:**
  - Siteden doğrudan okunabilir kavram haritası / özet metni.
  - Harici Google Drive, OneDrive veya PDF indirme linki.
- **"Faydalı Buldum (+1)" Oylama Sistemi:**
  - Öğrencilerin kaliteli ve güvenilir notları öne çıkarmasını sağlayan upvote sistemi.
- **Modallar:**
  - `modal-exam-note-add`: Ders Notu / Kaynak Paylaş formu.
  - `modal-exam-note-read`: Detaylı not okuma ve bulut indirme modalı.

### 2. Öğrenci Yazıları İçin Yorum & Tartışma Sistemi
- `modal-article-read` modalı altına entegre edilen modern yorum akışı.
- Öğrencinin adı, bölümü ve zaman damgasıyla doğrudan akademik tartışmaya katılımı.
- Yazarın kendi yorumunu silebilmesi, yöneticinin ise moderasyon amaçlı silebilmesi.
- Ana kartlarda beğeni ve okunmanın yanında yorum balonu ve dinamik sayaç (`<i data-lucide="message-square"></i>`).

### 3. İsim Revizyonu: "Öğrenci Yazıları & Düşünceler" (Acemi Eserler)
- "Kulüp Yazıları & Makaleler" gibi bürokratik isimler yerine öğrencideki yazma çekingenliğini kıran **"Öğrenci Yazıları & Düşünceler"** başlığı seçildi.
- Slogan: *"Marmara SBF Düşünce Kürsüsü • Öğrenci Yazıları & Acemi Eserler"*.

### 4. Güvenli Mahlas (Takma İsim) Sistemi
- **Kapsam:** Yazı gönderirken, yorum yaparken ve ders notu paylaşırken `[x] Mahlas (Takma İsim) ile Yayınla` opsiyonu.
- **Güvenlik Dengesi:** Okuyucular ve ziyaretçiler sadece mahlası görür (örn: *Mülkiyeli 2024*, *SBF'li Düşünür*). Ancak veritabanında yazarın gerçek kimliği (`authorStudentNumber`) saklanır; böylece trollük, hakaret veya kötü niyetli içerik durumunda admin panelinden kimlik denetlenebilir.

### 5. Öğrenci Başarı Rozetleri (Gamification)
Sağ üstteki profil alanına tıklandığında açılan `modal-user-profile` üzerinde dinamik rozetler:
1. 🧭 **Kütüphane Kaşifi:** Doğrulanmış üye olan tüm öğrencilere.
2. 📖 **Kitap Kurdu:** Kütüphaneden en az 2 kitap ödünç alıp okuyan öğrenci.
3. ✍️ **Genç Kalem:** Kürsüde en az 1 orijinal yazısı yayınlanan yazar.
4. 💡 **Fikir Mimarı:** Yazıları toplam 3+ beğeni alan düşünür.
5. 🎓 **Not Kahramanı:** Ders notu paylaşıp en az 5 öğrenciye faydalı olan dayanışmacı.
6. 🔖 **Kürsü Küratörü:** İstek kitap bildirip o kitabı kütüphaneye kazandıran öğrenci.

### 6. "Ayın Kitabı & Münazara Köşesi"
- Öğrenci Yazıları sekmesinin tepesinde yer alan ortak okuma çemberi.
- **Ekim Ayı Eseri:** Cemil Meriç — *"Bu Ülke"*.
- **Münazara Konusu:** Doğu-Batı sentezi ve Türk aydınının sorumluluğu.

### 7. Görsel ve Tasarım Düzeltmeleri
- İstek Kitaplar tablosundaki durum rozetinin dar ekranda "Temin" ve "Ediliyor" şeklinde iki satıra bölünmesi hatası `whitespace-nowrap min-w-[130px]` sınıflarıyla tamamen giderildi.

---

## 💡 Gelecek Yol Haritası ve Fikir Havuzu (Roadmap)

İlerleyen günlerde sisteme eklenecek yüksek etkili özellikler:

1. **"Eksik Not Aranıyor / Not İsteği" (Bounty Board):**
   - *"Arkadaşlar Çarşamba günkü İktisat Politikası dersinde hoca tahtaya ne yazdı, notu olan var mı?"* şeklinde talep açılması.
   - Notu ilk yükleyen öğrenciye *"Hızır Rozeti"* verilmesi.
2. **"Hoca Onaylı / Asistan Doğrulamalı Not" Rozeti:**
   - Üst sınıflar veya dersin asistanı/hocası tarafından incelenip onaylanmış notlara yeşil *"Doğrulanmış / Eksiksiz Özet"* rozeti eklenmesi.
3. **"Vize Öncesi Tek Tıkla Dönemlik Not Paketi (.ZIP)":**
   - Vize haftasından 3 gün önce, ilgili sınıfın tüm ders notlarının tek tıkla topluca indirilmesi.
4. **Sınav Geri Sayım Sayacı & Vize Takvimi:**
   - SBF vize haftası yaklaştığında gün sayacı ve o günkü sınav dersinin notlarının ana sayfada parlatılması.

---

## 🛠️ GitHub Senkronizasyon & Değişen Dosyalar Rehberi

### Bu Oturumda Değiştirilen Çekirdek Dosyalar:
1. `server.js`:
   - `examNotes` ve `monthlyTopic` veritabanı okuma/yazma entegrasyonu.
   - `POST /api/exam-notes`, `POST /api/exam-notes/:id/helpful`, `POST /api/exam-notes/:id/download`, `DELETE /api/exam-notes/:id` uç noktaları.
   - `POST /api/articles` ve `POST /api/articles/:id/comments` için `usePseudonym` desteği.
2. `data/library.json`:
   - Örnek SBF ders notları (`POL201`, `ULI305`, `KAM203`).
   - Yorumlu örnek makaleler ve Ekim ayı münazara konusu.
3. `public/index.html`:
   - `tab-content-exam-notes` (Sınav Notları sekmesi).
   - `modal-exam-note-add`, `modal-exam-note-read`, `modal-user-profile` modalları.
   - Mahlas seçim kutucukları ve "Ayın Kitabı" banner'ı.
4. `public/js/app.js`:
   - TR / FR / EN çevirileri.
   - Not listeleme, arama, filtreleme, indirme takibi ve faydalı oylama işlevleri.
   - Profil rozetlerinin istatistiklere göre dinamik hesaplanması.
5. `README.md`:
   - Güncellenen sistem tanıtımı ve özellik listesi.
6. `CALISMA-GUNLUGU-VE-YOL-HARITASI.md`:
   - Bu kapsamlı çalışma günlüğü ve mimari kayıt belgesi.

---

### 📦 GitHub'a Yükleme (Commit & Push) Adımları

Eğer bilgisayarınızda Git yüklüyse veya GitHub Desktop kullanıyorsanız aşağıdaki adımları izleyebilirsiniz:

```bash
# 1. Değişen dosyaları kontrol edin
git status

# 2. Tüm güncellenen dosyaları ekleyin
git add server.js data/library.json public/index.html public/js/app.js README.md CALISMA-GUNLUGU-VE-YOL-HARITASI.md

# 3. Anlamlı bir commit mesajıyla kaydedin
git commit -m "feat: SBF sinav not havuzu, yorum sistemi, mahlas ve basari rozetleri eklendi"

# 4. GitHub'a gönderin
git push origin main
```

*(Not: Eğer GitHub Desktop uygulamasını kullanıyorsanız, programı açtığınızda sol tarafta bu 6 dosyanın otomatik olarak seçili olduğunu görürsünüz. Alt kısımdaki kutucuğa yukarıdaki commit mesajını yazıp "Commit to main" ve ardından "Push origin" butonuna basmanız yeterlidir.)*

---

### 🔄 Sistemi Yenileme ve Çalıştırma

- **Yerel Başlatma:**
  ```bash
  node server.js
  # veya proje kök dizinindeki baslat.bat dosyasına çift tıklayın
  ```
- **Canlı Link (Cloudflare Tüneli ile telefondan/arkadaşlarla test):**
  ```bash
  canli-link-baslat.bat
  ```
- **Tarayıcı Yenileme:**
  Arayüzde yapılan JavaScript ve CSS değişikliklerini anında görmek için tarayıcıda `Ctrl + F5` (önbelleksiz yenileme) yapmanız yeterlidir.

---

## 📌 Çalışma Oturumu: 06 Ekim 2026
- **Geliştirici:** Tarık Özşentürk & Antigravity Pair-Programming
- **Odak Alanı:** KVKK & Çerez Hukuki Uyumluluğu, "Kurucu (Founder / SuperAdmin)" Gizli Yönetici Mimarisi, Mahlas Denetleyicisi ve Canlı Sistem Röntgeni
- **Durum:** ✅ Başarıyla Tamamlandı ve Test Edildi

### Hayata Geçirilen Özellikler:
1. **6698 Sayılı KVKK ve Çerez (Cookie) Aydınlatma Bildirimi:**
   - Sayfa altına sabitlenen modern, estetik onay çubuğu (`#kvkkConsentBanner`).
   - Yalnızca zorunlu teknik oturum çerezleri (`sbf_token`, `sbf_lang`) kullanıldığı, ticari reklam/izleme çerezi barındırılmadığı açıkça deklare edildi.
   - Onay tercihi `localStorage` içine kaydedilerek (`sbf_kvkk_accepted`) bir kez kabul eden kullanıcının tekrar rahatsız edilmesi engellendi.
   - Kapsamlı 7 maddelik "Aydınlatma Metni & Haklar" modalı (`#modal-kvkk-info`) Türkçe, Fransızca ve İngilizce (TR/FR/EN) tam dil desteğiyle eklendi.
2. **Gizli "Kurucu" (Founder / SuperAdmin) Yetkilendirme Mimarisi:**
   - Tarık için mezuniyetten bağımsız, sistem devredilse bile kalıcı erişim sunan `founder` rolü oluşturuldu.
   - Normal admin girişinden (`/api/auth/login`) girilir; dışarıdan bakıldığında sıradan admin gibi kamufle olur.
   - **Dokunulmazlık (Immunity):** Normal kütüphaneciler veya başka adminler kurucu hesabını silemez, düzenleyemez veya durumunu değiştiremez.
   - **👁️ Mahlas Denetleyicisi (Unmasking Toggle):** Tek tıkla yazılarda, yorumlarda ve sınav notlarında takma isim kullanan öğrencilerin gerçek adı, numarası ve bölümü görünür hale gelir.
   - **📡 Sistem Çekirdek Röntgeni (`#modal-founder-audit`):** Canlı oturum tokenları, bellek (RAM) kullanımı, uptime, kayıtlı kullanıcı hesapları ve tek tıkla ham veritabanı yedeği (`/api/founder/raw-backup`).
3. **Hesap Bilgileri:**
   - **Öğrenci Hesabı (Tarık):** `139823048` / `1234`
   - **Kütüphaneci Admin Hesabı:** `admin` / `sbf`
   - **Gizli Kurucu (SuperAdmin) Hesabı:** `kurucu` / `sbf` (veya `kurucu2026`)


3. **İki Aşamalı Güvenlik (2FA), Kamufle Kimlik ve Master Admin Yönetimi (06 Ekim 2026 - Gece Oturumu):**
   - **Kamufle Kurucu Kimliği:** Tahmin edilebilir "kurucu" kullanıcı adı tamamen değiştirilerek kurumsal sistem bakım kimliğine büründürüldü. Arayüzdeki tüm açık ipuçları temizlendi.
   - **İki Aşamalı Doğrulama (2FA):** 6 haneli Güvenlik PIN kodu (`securityPin`) entegre edildi. Kullanıcı adı ve şifre doğru olsa dahi 2FA PIN kodu olmadan sisteme giriş yapılamaz.
   - **Kod Kamuflajı & Sahte (Decoy) Fonksiyonlar:** `server.js` içerisine dağıtık telemetri ve küme senkronizasyonu süsü verilmiş fonksiyonlar (`_runTelemetryIntegrityCheck`, `_verifyCatalogClusterParity`, `_flushOrphanedTelemetryTokens`) eklenerek mimari gizlendi.
   - **Master Admin Yönetim Masası:** Kurucu dilediği an yeni adminler tanımlayabilir (`POST /api/founder/admins`), mevcut adminleri silebilir (`DELETE /api/founder/admins/:id`) veya öğrencileri tek tıkla admine terfi/tenzil edebilir. Standart adminlerin admin silme yetkisi engellendi.
   - **Güvenli Obsidian Kasası:** Tüm hassas kurucu kimlik ve 2FA kodları doğrudan `C:/Users/Tarık/Documents/Trading-Vault/.guvenlik/SBF-Cekirdek-Erisim-Pusulasi.md` gizli dosyasına kaydedildi; sohbet ekranında veya kod tabanında açık iz bırakılmadı.

---

## 📌 Çalışma Oturumu: 06 Ekim 2026 (Kapanış & Güvenlik Revizyonu)
- **Geliştirici:** Tarık Özşentürk & Antigravity Pair-Programming
- **Odak Alanı:** Giriş Ekranı İpuçlarının Temizlenmesi, KVKK/Çerez Hukuki Entegrasyonu, Çift Admin Onayı (Dual Authorization) ve Şifre Değiştirme Mimarisi
- **Durum:** ✅ Başarıyla Tamamlandı

### Hayata Geçirilen Özellikler:
1. **Giriş Ekranı İpuçlarının Tamamen Kaldırılması:**
   - `modal-login` ekranında yer alan demo giriş bilgileri kutucuğu tamamen kaldırıldı.
   - Placeholder'lar nötr hale getirildi (`Öğrenci No veya Yönetici Adı`), dışarıdan sisteme bakanların hiçbir hesap bilgisini görememesi sağlandı.
2. **KVKK & Çerez Hukuki Netliği & Kalıcı Footer Erişimi:**
   - Platformda reklam/izleme çerezi olmayıp yalnızca zorunlu oturum çerezleri (`sbf_token`, `sbf_lang`) bulunduğu için önceden opt-in alma zorunluluğunun bulunmadığı (meşru menfaat ve sözleşmenin ifası kapsamında olduğu) teyit edildi.
   - Sayfa altına modern kurumsal Footer eklendi. Buradan tek tıkla hem KVKK Aydınlatma Metni açılabilir hem de çerez onay tercihi sıfırlanıp banner ekrana geri çağrılabilir (`resetAndShowKvkk()`).
3. **Öğrenci ve Adminler İçin Şifre Değiştirme (`POST /api/auth/change-password`):**
   - Sağ üstteki profil alanına tıklandığında açılan `modal-user-profile` penceresine "🔒 Hesap Güvenliği & Şifre Değiştir" formu entegre edildi.
   - Hem öğrenciler hem adminler mevcut şifrelerini doğrulayarak en az 4 karakterli yeni şifre belirleyebilir.
4. **Çift Admin Onayı (Dual Authorization / 4-Eyes Principle) ile Yönetici Masası:**
   - Admin menüsüne `Yönetici Masası` (`tab-content-admin-team`) sekmesi eklendi.
   - Sistemde birden fazla yönetici olduğunda, yeni bir admin tanımlama veya mevcut adminin yetkisini kaldırma işlemi **2 Yöneticinin Ortak Onayı** havuzuna düşer.
   - İkinci bir yönetici onay verdiğinde işlem otomatik olarak yürürlüğe girer. Kurucu (Founder) dilerse tek başına doğrudan yetkilendirme veya anında onay yapabilir.

---

## 📌 Çalışma Oturumu: 07 Ekim 2026 (Dinamik Tahsis ve Akademisyen Revizyonu)
- **Geliştirici:** Tarık Özşentürk & Antigravity Pair-Programming
- **Odak Alanı:** Hocanın Talebi Doğrultusunda Dinamik Kitap Tahsis Sistemi (Min 1 - Max 8 Gün), Akademisyen Günübirlik Ödünç Opsiyonu ve Akıllı Yoğunluk Analiz Modalı
- **Durum:** ✅ Başarıyla Tamamlandı ve Test Edildi

### Hayata Geçirilen Özellikler:
1. **Dinamik Kitap Tahsis Algoritması (Min 1 - Max 8 Gün):**
   - Sabit 14/15 gün ödünç modeli tamamen kaldırılarak yerine stok, kopya oranı ve geçmiş talep yoğunluğunu hesaba katan akıllı algoritma getirildi.
   - **Kritik Talep (1-2 Gün):** Tek nüsha veya rafta son 1 kopya kalmış, geçmişte sık talep görmüş kitaplar için süre daraltıldı.
   - **Yüksek Talep (3 Gün):** Rafta az kopya kalmış kitaplar.
   - **Orta Talep (5 Gün):** Standart sirkülasyondaki kitaplar.
   - **Normal Talep (8 Gün):** Rafta bol kopyası bulunan kitaplar için tavan süre (Maksimum 8 gün).
2. **Akademisyen & Hoca Özel Seçeneği: Günübirlik / Aynı Gün Tahsis:**
   - Öğretim üyeleri ve asistanlar için ders anlatımı ve kaynak incelemesinde kullanılmak üzere "Aynı Gün Teslim (Günübirlik - 0 Gün)" seçeneği eklendi.
   - Kitap günlerce öğrenciden koparılmadan gün sonunda raftaki yerine dönmesi sağlandı.
3. **Akıllı Ödünç Verme Modalı (`modal-issue`):**
   - Kitap ve üye seçildiği anda canlı olarak çalışan Yoğunluk & Talep Analiz Kartı (`#issue-book-demand-card`).
   - Sistem önerisi, hızlı gün butonları (1G, 2G, 3G, 5G, 8G), slider ve canlı teslim tarihi önizlemesi.
   - Akademisyen seçildiğinde otomatik beliren mor vurgulu "Günübirlik Tahsis" kartı ve tek tıkla seçim.
4. **Katalog ve Ödünç Tablosu Görsel İpuçları:**
   - Kitap kataloğunda her kitabın stok durumunun altında renkli dinamik tahsis etiketi (örn: `Kritik: 1-2 Gün`, `Dinamik: 8 Gün`).
   - Ödünç listesinde ve öğrenci ekranında günübirlik alınan kitaplara özel "Günübirlik (Bugün Teslim)" etiketi.

---

## 📌 Çalışma Oturumu: 27 Ekim 2026 (Kurucu Mimarinin Tasfiyesi ve Tam Otonom Çift Admin Sistemi)
- **Geliştirici:** Tarık Özşentürk & Antigravity Pair-Programming
- **Odak Alanı:** "Kurucu Yönetici (SuperAdmin)" kurgusunun, 2FA güvenlik PIN mekanizmasının ve gizli çekirdek API uçlarının sistemden tamamen sökülmesi; yönetimin tam demokratik Çift Admin Onay Kalkanına (Dual Authorization) devredilmesi.
- **Durum:** ✅ Başarıyla Tamamlandı

### Gerçekleştirilen İşlemler:
1. **Gizli Çekirdek & Kurucu Hesabının Silinmesi:**
   - Veritabanından (`data/library.json`) kamufle kurucu hesabı (`sys.curator_sbf`) ve 2FA güvenlik PIN kaydı tamamen silindi.
2. **Backend Çekirdek API Temizliği (`server.js`):**
   - Sahte telemetri fonksiyonları (`_runTelemetryIntegrityCheck`, `_verifyCatalogClusterParity`, `_flushOrphanedTelemetryTokens`) ve `verifyKernelSupervisor` middleware'i kaldırıldı.
   - Tüm `/api/founder/*` uç noktaları (`/api/founder/master-audit`, `/api/founder/raw-backup`, `/api/founder/admins`, `/api/founder/admins/:id`, `/api/founder/users/:id/toggle-admin`) silindi.
   - Giriş rotasından (`/api/auth/login`) 2FA Güvenlik PIN kontrolü kaldırıldı; standart ve güvenli kullanıcı adı/şifre akışına dönüldü.
   - Kurucu dokunulmazlık (`isImmune`), mahlas arkasını görme istisnası ve çift admin onayını tek başına geçme yetkileri kaldırıldı.
3. **Ön Yüz (Frontend) Temizliği (`index.html` & `app.js`):**
   - Kurucu Özel Çekirdek Konsolu (`#founder-core-panel`), Sistem Röntgeni Modalı (`#modal-founder-audit`), 2FA Doğrulama Modalı (`#modal-2fa-verify`) ve kurucu admin ekleme modalı (`#modal-create-admin`) arayüzden tamamen temizlendi.
   - Arayüz rozetleri, profil menüsü ve yetki kontrolleri standart hale getirildi (Yalnızca Admin ve Öğrenci rolleri).
4. **Tam Demokratik Yönetim:**
   - Yönetici ekleme ve yetki kaldırma süreçleri istisnasız 4-Eyes Principle prensibine (Çift Admin Onayı) bağlandı. Hiçbir tekil kullanıcının sistemi tek taraflı domine etme veya kalıcı arka kapı bırakma imtiyazı kalmadı.

