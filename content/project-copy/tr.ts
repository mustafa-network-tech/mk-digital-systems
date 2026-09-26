import type { ProjectCopyBook } from ".";

const tr: ProjectCopyBook = {
  "saha-santiye": {
    industry: "TELEKOM & SAHA OPERASYONLARI",
    summary:
      "Telekom ve fiber sahasında çalışan firmalar için; her şirketin ekiplerini, saha işlerini ve onaylarını kendi alanında yönettiği çok şirketli operasyon sistemi.",
    headline: "Sahadaki iş, ofiste aynı anda görünsün.",
    problem:
      "Günlük işler, ekipler, malzeme hareketleri, saha kayıtları ve hakedişler mesajlara ve ayrı tablolara dağılır; neyin yapıldığı ve neyin beklediği geç görülür.",
    solution:
      "Her şirketin kendi izole çalışma alanında kullandığı çok kiracılı bir SaaS: günlük iş girişi ve onay akışı, ekip, malzeme ve hakediş takibi aynı sistemde.",
    modules: [
      "Günlük iş girişi ve onay akışı",
      "Ekip, araç ve proje yönetimi",
      "Malzeme teslim fişi ve stok",
      "Hakediş dönemleri ve raporlar",
    ],
    alt: "MK OPS demosunda örnek verilerle onay bekleyen işler ekranı",
  },
  "santiye-yonetim": {
    industry: "ŞANTİYE & FİBER PROJELERİ",
    summary:
      "Tek bir şirketin şantiye operasyonuna göre kurulan; projeleri, günlük ekip planını, imalatı ve puantajı izleyen yönetim sistemi.",
    headline: "Şantiyenin günü tek ekranda planlansın.",
    problem:
      "Projelerin saha aşamaları, günlük ekip planı, imalat, malzeme ve araç bilgileri ayrı listelerde tutulduğunda bir projenin gerçek durumu ancak elle birleştirilerek görülür.",
    solution:
      "Şirketin kendi çalışma biçimine göre kurulan panel: proje aşamaları, günlük iş planı, imalat kayıtları, puantaj, stok, zimmet ve araç takibi tek yerde; onaylı kullanıcı kaydı ve güvenli oturumla.",
    modules: [
      "Proje ve aşama takibi",
      "Günlük iş planı ve ekip şablonları",
      "İmalat kayıtları ve raporu",
      "Puantaj ve hakediş özeti",
      "Malzeme, stok ve zimmet",
      "Araç ve belge uyarıları",
    ],
    alt: "Şantiye Yönetim dashboard ekranı; örnek verilerle proje durumu, kritik stok ve araç uyarıları",
  },
  "mk-adisyon": {
    industry: "RESTORAN & KAFE",
    summary:
      "Restoran ve kafeler için çalışan web sistemi ve kapalı testte mobil uygulaması olan sipariş ve adisyon ürünü.",
    headline: "İlk siparişten hesabın kapanışına.",
    problem:
      "Garson, mutfak ve kasa aynı siparişin hangi aşamada olduğunu görebilmelidir.",
    solution:
      "Garson, mutfak, kasa ve yönetim ekranlarını ortak akışta birleştiren çalışan web sistemi; ayrıca geliştirilmiş ve kapalı testte olan ayrı mobil uygulama.",
    modules: ["Garson", "Mutfak", "Kasa", "Yönetim", "Mobil uygulama · kapalı test"],
    alt: "MK Adisyon demosunda örnek verilerle kasa paneli: açık masalar ve tahsilatlar",
    parts: {
      web: {
        name: "Web uygulaması",
        description: "Garson, mutfak, kasa ve yönetim ekranları.",
      },
      mobile: {
        name: "Mobil uygulama",
        description: "Geliştirilmiş mobil uygulama; kapalı test sürecinde.",
      },
    },
  },
  "mk-farm": {
    industry: "TARIM & HAYVANCILIK",
    summary:
      "Hayvanların bireysel kayıtlarını çiftliğin günlük işleriyle birleştiren yönetim uygulaması.",
    headline: "Her hayvan için daha net bir kayıt.",
    problem:
      "Hayvanların bireysel kayıtları, çiftliğin günlük işleriyle birlikte takip edilebilmelidir.",
    solution:
      "QR kimlik, tartım ve sağlık geçmişini bir araya getiren çiftlik yönetim uygulaması.",
    modules: ["QR kimlik", "Kilo geçmişi", "Sağlık kayıtları"],
    alt: "MK Farm uygulamasının gerçek genel bakış ekranı",
  },
  "mk-resepsiyon": {
    industry: "KONAKLAMA",
    summary:
      "Otel ve pansiyonlar için oda planı, misafir girişi ve tahsilatı bağlayan operasyon sistemi.",
    headline: "Resepsiyonda daha sakin bir gün.",
    problem:
      "Rezervasyonlar, oda durumu ve tahsilatlar aynı misafir deneyiminin parçalarıdır.",
    solution:
      "Oda planı, giriş işlemleri, tahsilat ve yönetim ekranlarını bağlayan otel operasyon sistemi.",
    modules: ["Oda planı", "Misafir girişi", "Tahsilat & kayıtlar"],
    alt: "MK Resepsiyon demosunda örnek verilerle resepsiyon genel bakış ekranı",
  },
  "mk-pati": {
    industry: "VETERİNER KLİNİKLERİ",
    summary:
      "Veteriner klinikleri için hasta, muayene, aşı ve randevu yönetimi; yapay zekâ destekli klinik danışmanıyla.",
    headline: "Hasta geçmişi tek ekranda.",
    problem:
      "Hasta kartları, aşı takvimleri ve randevular farklı yerlerde tutulduğunda takip aksar.",
    solution:
      "Hasta, muayene, aşı ve randevu kayıtlarını birleştiren, yapay zekâ destekli klinik danışmanıyla desteklenen klinik yönetim sistemi.",
    modules: ["Hasta kayıtları", "Muayene & aşı takibi", "Randevular", "AI klinik danışmanı"],
    alt: "MK Pati ürün sitesinin açılış ekranı",
  },
  "mk-kargo": {
    industry: "KARGO & LOJİSTİK",
    summary:
      "Otobüsle kargo firmaları için fiyat hesaplayan bir müşteri sitesi ve siparişleri yöneten bir operasyon paneli.",
    headline: "Talepten teslimata tek akış.",
    problem:
      "Fiyat soruları, gönderi talepleri ve sipariş durumları telefon ve mesajlara dağılır.",
    solution:
      "Ölçü ve güzergâha göre anlık fiyat hesaplayan müşteri sitesi ile talep, sipariş, araç ve belge çıktılarını yöneten operasyon paneli.",
    modules: [
      "Anlık fiyat hesaplama",
      "Gönderi talepleri",
      "Sipariş ve araç yönetimi",
      "PDF ve Excel çıktıları",
    ],
    alt: "MK Kargo örnek web sitesinin açılış ekranı",
  },
  "proje-asama-takip": {
    industry: "ALTYAPI & ŞANTİYE PROJELERİ",
    summary:
      "Altyapı projelerinin aşamalarını, saha personelini, araçları ve puantajı tek yerde izleyen şantiye takip sistemi.",
    headline: "Her projenin hangi aşamada olduğu bilinsin.",
    problem:
      "Çok sayıda altyapı projesi aynı anda yürürken hangi işin beklediği, hangisinin geciktiği, kimin hangi araçla nerede çalıştığı ve puantajın ne durumda olduğu farklı listelerde kalır.",
    solution:
      "Projeleri bekliyor, devam ediyor, izin bekliyor, gecikmiş ve tamamlandı gibi açık durumlarla izleyen; personel, araç ve puantaj kayıtlarını aynı sistemde toplayan, oturum korumalı bir web uygulaması. Tamamlanan projeler kendiliğinden arşive geçer.",
    modules: [
      "Proje ve aşama durumu",
      "Personel takibi",
      "Araç takibi",
      "Puantaj",
      "Arama, filtre ve arşiv",
    ],
  },
  "onayli-proje-takip": {
    industry: "ALTYAPI PROJE TAKİBİ",
    summary:
      "Excel'den gelen proje ve bina listelerini kalıcı kayıtlara dönüştüren; imalat ilerlemesini, notları ve değişiklik geçmişini izleyen operasyon paneli.",
    headline: "Excel listesi değil, izlenebilir bir proje kaydı.",
    problem:
      "Proje ve bina listeleri Excel dosyalarıyla gelir; her yeni dosya bir öncekinin yerine geçer. Hangi binada ne kadar imalat yapıldığı, kimin neyi değiştirdiği ve hangi kaydın güncel olduğu kaybolur.",
    solution:
      "Yeni Excel dosyası işlenmeden önce değişiklikler önizlenir ve onaylanınca tek seferde kaydedilir. Aktarım yalnızca dosyadan gelen alanları günceller; sahadaki ilerleme ve notlar korunur. Her ilerleme ve not değişikliği, kullanıcı ve tarih bilgisiyle geçmişe yazılır.",
    modules: [
      "Excel aktarımı ve onaylı önizleme",
      "Proje ve bina kayıtları",
      "İmalat ilerlemesi",
      "Notlar",
      "Değişiklik geçmişi",
    ],
  },
  namehub: {
    industry: "DİJİTAL ÜRÜN",
    summary:
      "Bebek, evcil hayvan, marka ve kullanıcı adı önerileri sunan isim bulma platformu.",
    alt: "NameHub ana sayfası",
  },
  aria: {
    industry: "SOSYAL PLATFORM",
    summary:
      "Fotoğraf ve doğa topluluğu için sosyal platform arayüzü: akış, profil, takip, mesajlaşma ve içerik yükleme.",
    alt: "ARIA sosyal platformunun keşfet akışı",
  },
  "mavi-kadraj-arsiv": {
    industry: "FOTOĞRAF ARŞİVİ",
    summary:
      "Konu ve şehir kategorileriyle aranabilen ve filtrelenebilen fotoğraf arşivi.",
    alt: "Mavi Kadraj fotoğraf arşivinin ana sayfası",
  },
  "kadraj-rotam": {
    industry: "FOTOĞRAF ROTALARI",
    summary:
      "Yerel ve küresel fotoğraf rotaları, saha notları ve keşif rehberleri sunan platform.",
    alt: "Kadraj Rotam ana sayfası",
  },
  aura: {
    industry: "MOBİL UYGULAMA",
    summary: "Günlük tutma ve ruh hâli takibi için sade bir uygulama.",
    alt: "Aura uygulamasında örnek verilerle Bugün, duygu seçimi ve takvim ekranları",
  },
  "is-takip": {
    industry: "İŞ TAKİBİ",
    summary:
      "Günlük işlerin durumunu ve sorumlusunu tek yerde izlemek için geliştirilen iş takip uygulaması.",
    alt: "İş Takip uygulamasının ekranı",
  },
  "gunluk-imalat": {
    industry: "ÜRETİM",
    summary:
      "Üretim sahasındaki günlük imalat kayıtlarını dijital bir karta dönüştüren uygulama.",
    alt: "Günlük İmalat Kartı uygulamasının ekranı",
  },
  "mavi-sarkilar": {
    industry: "MÜZİK & SANATÇI",
    summary:
      "Bir müzisyen için web deneyimi: Spotify vitrini, müzik videoları, konser takvimi ve bülten alanı.",
    alt: "Mavi Şarkılar sanatçı sitesinin açılış ekranı",
  },
  musty: {
    industry: "SİNEMATİK PORTFOLYO",
    summary:
      "Görsel bir sanatçı için sinematik, iki dilli portfolyo deneyimi: galeri, video ve kareler.",
    alt: "Musty portfolyo sitesinin açılış ekranı",
  },
  "gonul-pusulasi": {
    industry: "YARATICI WEB & DİJİTAL İÇERİK",
    summary:
      "Mektubu, kısa sözü ve fotoğrafı bir araya getiren; web sayfaları ve 9:16 hikâye formatında yayınlanan yaratıcı içerik sitesi.",
    alt: "Gönül Pusulası ana sayfası",
  },
  "siir-dunyasi": {
    industry: "ŞİİR & EDEBİ WEB",
    summary:
      "Sevda, hasret ve ayrılık temalı şiirleri sakin bir okuma deneyimiyle sunan edebi web sitesi.",
    alt: "Şiir Dünyası ana sayfası: deniz üzerinde gün batımı ve “Sessizliğin içinde, kelimeler yürür.” başlığı",
  },
  "mk-firsat": {
    industry: "FIRSAT & ALIŞVERİŞ KEŞİF PLATFORMU",
    summary:
      "Fırsatları keşfetmeyi ve alışveriş seçeneklerini tek bir deneyimde buluşturmayı hedefleyen modern bir dijital platform.",
    description:
      "MK Fırsat; kullanıcıların fırsatları daha kolay keşfedebilmesi, seçenekleri inceleyebilmesi ve ilgisini çeken fırsatlara hızlıca ulaşabilmesi için tasarlanan modern bir alışveriş ve keşif deneyimidir. Web ve mobil deneyimi birlikte düşünülerek geliştirilecek proje, ilerleyen dönemde MK Digital Systems ürün ailesinin bağımsız dijital ürünlerinden biri olarak yayınlanacaktır.",
  },
  "mavi-kadraj-otel": {
    industry: "OTEL WEB SİTESİ",
    summary:
      "Oda sayfaları, galeri ve adım adım rezervasyon akışıyla otel ve pansiyon web sitesi örneği.",
    alt: "Mavi Kadraj Otel örnek web sitesinin açılış ekranı",
  },
  "mavi-kafe": {
    industry: "KAFE & RESTORAN SİTESİ",
    summary:
      "Dijital menü, galeri ve rezervasyon akışıyla kafe ve restoran web sitesi örneği.",
    alt: "Mavi Kafe örnek web sitesinin açılış ekranı",
  },
  "mavi-guzellik": {
    industry: "GÜZELLİK SALONU SİTESİ",
    summary:
      "Hizmetler, ekip tanıtımı ve WhatsApp randevu akışıyla güzellik salonu web sitesi örneği.",
    alt: "Mavi Güzellik örnek web sitesinin açılış ekranı",
  },
  "mavi-danismanlik": {
    industry: "DANIŞMANLIK SİTESİ",
    summary:
      "Hizmet sayfaları, randevu talebi ve iletişim akışıyla danışmanlık web sitesi örneği.",
    alt: "Mavi Danışmanlık örnek web sitesinin açılış ekranı",
  },
  "mavi-yapi": {
    industry: "KURUMSAL TEDARİK SİTESİ",
    summary:
      "Ürün kataloğu, kategori sayfaları ve teklif formuyla iki dilli B2B tedarik web sitesi örneği.",
    alt: "Mavi Yapı örnek web sitesinin açılış ekranı",
  },
  "mavi-iletisim": {
    industry: "TEKNOLOJİ MAĞAZASI SİTESİ",
    summary:
      "Ürün kataloğu, sepet ve teknik servis talebiyle teknoloji mağazası web sitesi örneği.",
    alt: "Mavi İletişim örnek web sitesinin açılış ekranı",
  },
  "mavi-gayrimenkul": {
    industry: "EMLAK OFİSİ SİTESİ",
    summary:
      "Satılık ve kiralık ilan arama, bölge rehberi ve değerleme talebiyle emlak ofisi web sitesi örneği.",
    alt: "Mavi Gayrimenkul örnek web sitesinin açılış ekranı: ilan arama kutusu",
  },
  "adalet-hukuk": {
    industry: "HUKUK BÜROSU SİTESİ",
    summary:
      "Çalışma alanları, avukat tanıtımı ve bilgilendirici makalelerle hukuk bürosu web sitesi örneği.",
    alt: "Adalet Hukuk örnek web sitesinin açılış ekranı",
  },
};

export default tr;
