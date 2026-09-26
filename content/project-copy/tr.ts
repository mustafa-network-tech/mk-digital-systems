import type { ProjectCopyBook } from ".";

const tr: ProjectCopyBook = {
  "saha-santiye": {
    industry: "TELEKOM & SAHA OPERASYONLARI",
    summary:
      "Telekom ve fiber sahasında çalışan firmalar için aynı soruna iki farklı yaklaşımla geliştirilmiş operasyon sistemleri.",
    headline: "Sahadaki iş, ofiste aynı anda görünsün.",
    problem:
      "Günlük işler, ekipler, malzeme hareketleri, saha kayıtları ve hakedişler mesajlara ve ayrı tablolara dağılır; neyin yapıldığı ve neyin beklediği geç görülür.",
    solution:
      "Birden fazla şirketin kendi alanında kullanabileceği bir SaaS yaklaşımı (MK OPS) ve tek bir şirketin operasyonuna göre kurulan bir yönetim sistemi (Şantiye Yönetim).",
    modules: [
      "Günlük iş girişi ve onay akışı",
      "Ekip ve proje yönetimi",
      "Malzeme ve stok takibi",
      "Hakediş dönemleri ve raporlar",
    ],
    alt: "MK OPS demosunda örnek verilerle onay bekleyen işler ekranı",
    parts: {
      "mk-ops": {
        name: "MK OPS",
        description: "Birden fazla şirketin kendi alanında kullandığı, rollere göre ayrılmış SaaS yaklaşımı.",
      },
      "santiye-yonetim": {
        name: "Şantiye Yönetim",
        description: "Tek bir şirketin operasyonuna göre kurulan, güvenli oturum yönetimli panel.",
      },
    },
  },
  "mk-adisyon": {
    industry: "RESTORAN & KAFE",
    summary:
      "Restoran ve kafeler için web ve mobilde çalışan sipariş ve adisyon akışı.",
    headline: "İlk siparişten hesabın kapanışına.",
    problem:
      "Garson, mutfak ve kasa aynı siparişin hangi aşamada olduğunu görebilmelidir.",
    solution:
      "Garson, mutfak, kasa ve yönetim ekranlarını ortak akışta birleştiren web uygulaması ve siparişi telefondan almak için mobil uygulama.",
    modules: ["Garson", "Mutfak", "Kasa", "Yönetim", "Mobil sipariş"],
    alt: "Garson, mutfak, kasa ve yönetim arasındaki restoran iş akışı",
    parts: {
      web: {
        name: "Web uygulaması",
        description: "Garson, mutfak, kasa ve yönetim ekranları.",
      },
      mobile: {
        name: "Mobil uygulama",
        description: "Android uygulaması; Play Store'da kapalı test aşamasında.",
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
    alt: "Oda planı, misafir girişi ve tahsilatı bağlayan iş akışı",
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
    alt: "Hasta, muayene, aşı ve randevuyu bağlayan klinik iş akışı",
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
    alt: "Fiyat hesaplama, talep ve sipariş yönetimini bağlayan kargo iş akışı",
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
};

export default tr;
