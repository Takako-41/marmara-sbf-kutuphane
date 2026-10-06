# Marmara Üniversitesi SBF Kütüphane & Öğrenci Platformu
### Bibliothèque & Tribune des Étudiants — Faculté des Sciences Politiques

Marmara Üniversitesi Siyasal Bilgiler Fakültesi (SBF) için geliştirilmiş modern, çok dilli kütüphane yönetim, öğrenci düşünce kürsüsü ve sınav dayanışma platformu.

---

## 🌟 Temel Özellikler

### 1. 📚 Kütüphane Kataloğu & Dolaşım (Circulation)
- **Akıllı Arama & Filtreleme:** Eser adı, yazar, kategori, dil ve raf numarasına (`SBF-POL-101`) göre anlık arama.
- **Ödünç Alma & Süre Takibi:** Öğrenciler (15 gün) ve öğretim üyeleri (30 gün) için dinamik iade/gecikme takibi.
- **Kişisel Kitaplığım:** Öğrencilerin kendi üzerlerindeki emanet kitapları ve kalan gün sayılarını görebildiği panel.

### 2. 🎓 Sınav Notları & Ders Kaynak Havuzu
- **SBF Bölüm Filtreleri:** Siyaset Bilimi ve Kamu Yönetimi (TR/FR), Uluslararası İlişkiler (EN), İktisat, Yerel Yönetimler.
- **Kategori & Tür:** Vize Özeti, Final Özeti, Çıkmış Sorular, Ders Notu ve Hoca Okuma Listesi (Syllabus).
- **Çift Formatlı Paylaşım:** Siteden doğrudan okunabilir kavram haritaları + Google Drive / OneDrive bulut linkleri.
- **Topluluk Oylaması (+1):** Öğrenciler en faydalı notları oylayarak öne çıkarabilir.

### 3. ✍️ Öğrenci Yazıları & Düşünceler (Acemi Eserler)
- Siyaset bilimi, uluslararası ilişkiler, felsefe ve kitap incelemeleri üzerine öğrenci denemeleri.
- **Etkileşim:** Beğeni, okuma sayacı ve akademik nezaket çerçevesinde yorum/tartışma akışı.
- **Kulüp Editör Masası:** Trol ve gereksiz içerikleri önleyen öğrenci hakemliği ve editör onay mekanizması.
- **Ayın Kitabı Münazarası:** Ortak okuma çemberi (Ekim: Cemil Meriç — *Bu Ülke*).

### 4. 🎭 Güvenli Mahlas (Takma İsim) Sistemi
- Öğrencilerin çekinmeden yazı, yorum ve not paylaşabilmesi için opsiyonel Mahlas seçeneği.
- Kamuya takma isim görünür; arka planda ise öğrenci numarası doğrulanmış olarak saklanır.

### 5. 🏆 Öğrenci Başarı Rozetleri (Gamification)
- *Kütüphane Kaşifi*, *Kitap Kurdu*, *Genç Kalem*, *Fikir Mimarı*, *Not Kahramanı* ve *Kürsü Küratörü* rozetleri.

### 6. 📖 İstek Kitap Havuzu (Desiderata)
- Öğrencilerin kütüphanede görmek istediği kitapları talep etmesi ve oylaması.
- Yöneticinin onaylanan talepleri tek tıkla kütüphane kataloğuna aktarabilmesi.

### 7. 🛡️ Güvenlik, KVKK & Trol Kalkanı
- **6698 Sayılı KVKK ve Çerez Uyumu:** Yalnızca zorunlu teknik oturum çerezleri, şık rıza banner'ı ve 3 dilde detaylı hukuki aydınlatma metni.
- **Trol Kalkanı:** `@marun.edu.tr` Marmara Üniversitesi e-posta doğrulaması ve kütüphaneci onay mekanizması.
- **Gizli Kurucu (Founder / SuperAdmin) Mimarisi:** Dokunulmazlık statüsü, canlı oturum röntgeni ve takma isimlerin arkasındaki gerçek kimlikleri denetleme paneli.

### 8. 🌐 3 Dil Desteği (Fransızca Ağırlıklı SBF Odaklı)
- Türkçe (TR), Fransızca (FR) ve İngilizce (EN) tam arayüz ve katalog lokalizasyonu.

---

## 💻 Kurulum ve Çalıştırma

### Gereksinimler
- [Node.js](https://nodejs.org/) (v16 veya üzeri)

### Adımlar
```bash
# Bağımlılıkları yükleyin
npm install

# Sunucuyu başlatın
npm start
# veya: node server.js
```

Sunucu yerel ağda ve tarayıcınızda `http://localhost:3000` adresinde çalışacaktır.

---

## 📄 Geliştirme Notları & Çalışma Günlüğü
Detaylı sürüm geçmişi, alınan kararlar ve gelecek yol haritası için [CALISMA-GUNLUGU-VE-YOL-HARITASI.md](file:///C:/Users/Tar%C4%B1k/.gemini/antigravity/scratch/marmara-sbf-kutuphane/CALISMA-GUNLUGU-VE-YOL-HARITASI.md) dosyasını inceleyebilirsiniz.
