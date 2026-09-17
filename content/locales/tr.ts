import type { SiteContent } from "../site";
const tr: SiteContent = {
  nav: {
    home: "Ana sayfa",
    solutions: "Çözümler",
    work: "Çalışmalar",
    contact: "İletişim",
    start: "WhatsApp’tan yaz",
    language: "Dil seçimi",
    open: "Menüyü aç",
    close: "Menüyü kapat",
    skip: "İçeriğe geç",
  },
  hero: {
    label: "DİJİTAL AJANS & ÖZEL YAZILIM STÜDYOSU",
    title: "İşinizin ritmine",
    accent: "uyumlu sistemler.",
    description:
      "İyi düşünülmüş web siteleri. İşe yarayan yazılımlar. İşinizin çalışma biçimine göre tasarlanan dijital sistemler.",
    primary: "WhatsApp’tan yaz",
    secondary: "Çalışmalarımızı keşfedin",
    note: "İlk fikirden, her gün ihtiyaç duyduğunuz ayrıntılara.",
    visual: "Gerçek dijital projelerimizden seçilmiş çalışmalar",
    caption: "FİKİRDEN, İŞE YARAYAN ÇÖZÜME.",
    detail: "Tasarım ve geliştirme, aynı amaç için.",
  },
  needs: {
    label: "BAŞLAMAK İÇİN DOĞRU YER",
    title: "İşinizde neyi\ndaha iyi yapabiliriz?",
    description:
      "Teknik bir dosyaya ihtiyacınız yok. Neyi değiştirmek istediğinizi anlatmanız yeterli.",
    explore: "Bu çözümü keşfedin",
    items: [
      {
        title: "Dijitalde daha güçlü görünebilirim.",
        subtitle: "Web siteleri & dijital deneyimler",
        description:
          "Sizi doğru anlatan, ziyaretçinin aradığını kolayca bulduğu ve iletişime geçmek istediği bir dijital deneyim.",
        steps: ["Keşfet", "Tanı", "İletişime geç"],
        family: "web",
      },
      {
        title: "Günlük işlerimi kolaylaştırabilirim.",
        subtitle: "Özel yazılım & işletme sistemleri",
        description:
          "Dağınık görevleri, kayıtları ve ekipleri bir araya getirin. İşinizi bir programa uydurmak yerine, sisteminizi işinize göre kuralım.",
        steps: ["Düzenle", "Birlikte çalış", "Net gör"],
        family: "business",
      },
      {
        title: "Aklımdaki fikri hayata geçirebilirim.",
        subtitle: "Özel dijital ürünler",
        description:
          "Fikrinizin işe yarayan özünü bulalım. Deneyimini tasarlayalım ve insanların kullanabileceği ilk sürümü birlikte geliştirelim.",
        steps: ["Şekillendir", "Geliştir", "İyileştir"],
        family: "custom",
      },
    ],
  },
  work: {
    label: "SEÇİLMİŞ ÇALIŞMALAR",
    title: "Farklı işler.\nAynı özenli yaklaşım.",
    description:
      "Gerçek iş ihtiyaçlarını anlaşılır dijital deneyimlere dönüştüren ürünler ve örnek uygulamalar.",
    all: "Tüm çalışmaları keşfedin",
    explore: "Projeyi keşfedin",
    discuss: "Benzer bir projeyi konuşalım",
    problem: "İhtiyaç",
    solution: "Yaklaşımımız",
    experience: "Bir araya getirdikleri",
    demo: "Örnek uygulama",
    project: "Bağımsız proje",
    diagram: "İŞ AKIŞINA GENEL BAKIŞ",
    stories: {
      "mk-ops": {
        industry: "SAHA OPERASYONLARI",
        headline: "Saha ve ofis aynı işin içinde.",
        problem:
          "İşlerin, ekiplerin ve stokların ayrı mesajlar ve tablolar yerine ortak bir görünümde izlenmesi gerekir.",
        solution:
          "İş takibi, proje yönetimi, envanter ve görev bazlı erişimi bir araya getiren çalışma alanı.",
        features: ["İş takibi", "Ekip koordinasyonu", "Envanter görünürlüğü"],
        alt: "MK Ops saha operasyonları ürününün mevcut web sitesi görüntüsü",
      },
      "mavi-resepsiyon": {
        industry: "KONAKLAMA",
        headline: "Resepsiyonda daha sakin bir gün.",
        problem:
          "Rezervasyonlar, oda durumu ve tahsilatlar aynı misafir deneyiminin parçalarıdır.",
        solution:
          "Oda planı, giriş işlemleri, tahsilat ve yönetim ekranlarını bağlayan otel operasyon demosu.",
        features: ["Oda planı", "Misafir girişi", "Tahsilat & kayıtlar"],
        alt: "Oda planı, misafir girişi ve tahsilatı bağlayan iş akışı",
      },
      "mk-farm": {
        industry: "TARIM & HAYVANCILIK",
        headline: "Her hayvan için daha net bir kayıt.",
        problem:
          "Hayvanların bireysel kayıtları, çiftliğin günlük işleriyle birlikte takip edilebilmelidir.",
        solution:
          "QR kimlik, tartım ve sağlık geçmişini bir araya getiren çiftlik yönetim uygulaması.",
        features: ["QR kimlik", "Kilo geçmişi", "Sağlık kayıtları"],
        alt: "MK Farm uygulamasının gerçek genel bakış ekranı",
      },
      "mavi-adisyon": {
        industry: "RESTORANLAR",
        headline: "İlk siparişten hesabın kapanışına.",
        problem:
          "Garson, mutfak ve kasa aynı siparişin hangi aşamada olduğunu görebilmelidir.",
        solution:
          "Garson, mutfak, kasa ve yönetim ekranlarını ortak akışta birleştiren restoran demosu.",
        features: ["Garson", "Mutfak", "Kasa", "Yönetim"],
        alt: "Garson, mutfak, kasa ve yönetim arasındaki restoran iş akışı",
      },
      "mavi-kadraj": {
        industry: "FOTOĞRAF & İÇERİK",
        headline: "Görsel hikâyelere alan açın.",
        problem:
          "Fotoğraflar ve hikâyeler, kolay keşfedilebilecekleri düzenli bir dijital alana ihtiyaç duyar.",
        solution:
          "Galerileri, gezi yazılarını ve içerik yönetimini bir araya getiren fotoğraf platformu.",
        features: [
          "Fotoğraf galerileri",
          "Görsel hikâyeler",
          "İçerik yayınlama",
        ],
        alt: "Mavi Kadraj fotoğraf sitesinin gerçek fotoğraflarıyla mevcut ekran görüntüsü",
      },
      namehub: {
        industry: "DİJİTAL VARLIK",
        headline: "İşinizi anlaşılır biçimde tanıtın.",
        problem:
          "Bir web sitesi, markanın kimliğini ve sunduklarını kolay kullanılan bir deneyimde birleştirmelidir.",
        solution:
          "Açık içerik yapısı ve farklı ekranlara uyumlu dijital varlık sunan web sitesi projesi.",
        features: ["Marka anlatımı", "Kolay gezinme", "Mobil deneyim"],
        alt: "Namehub.tr web sitesinin mevcut ekran görüntüsü",
      },
      santiye: {
        industry: "İNŞAAT & SAHA İŞLERİ",
        headline: "Neyin ilerlediğini, neyin beklediğini görün.",
        problem:
          "Proje aşamaları, konumlar ve bekleyen işler ayrı kayıtlarda kolayca kaybolur.",
        solution:
          "Proje aşamalarını, durumları ve aranabilir kayıtları düzenleyen şantiye takip sistemi.",
        features: ["Proje aşamaları", "Durum takibi", "Aranabilir kayıtlar"],
        alt: "Şantiye yönetim uygulamasının gerçek kontrol paneli",
      },
      "mk-skor": {
        industry: "DEĞERLENDİRME & ANALİZ",
        headline: "Gelişimi daha kolay anlayın.",
        problem:
          "Testlerin ve ölçümlerin tek bir sonuçtan öte, zaman içindeki anlamı görülebilmelidir.",
        solution:
          "Testleri, zamana bağlı değerlendirmeyi ve istatistiksel raporlamayı birleştiren ürün.",
        features: [
          "Değerlendirmeler",
          "Gelişim takibi",
          "İstatistiksel raporlar",
        ],
        alt: "Test, gelişim takibi ve raporlamayı bağlayan değerlendirme iş akışı",
      },
    },
  },
  solutions: {
    label: "ÇÖZÜMLER",
    title: "İşinizin ihtiyaçlarına\ngöre şekillenir.",
    description:
      "Müşteriniz için daha iyi bir deneyim. Ekibiniz için daha net bir gün. Hayata geçen yeni bir fikir.",
    audience: "Kimler için?",
    builds: "Neler geliştirebiliriz?",
    example: "Çalışan bir örneği keşfedin",
    cta: "İhtiyacınızı anlatın",
    items: [
      {
        id: "web",
        title: "Web & dijital deneyimler",
        description:
          "İşinizin bulunmasını, anlaşılmasını ve tercih edilmesini kolaylaştıralım. Markanızı insanların severek kullandığı bir deneyimle buluşturalım.",
        for: "Dijitalde daha güçlü bir varlık isteyen işletmeler, bağımsız markalar ve profesyoneller.",
        features: [
          "Marka ve işletme web siteleri",
          "İçerik & keşif platformları",
          "Müşteri talep akışları",
        ],
        project: "mavi-kadraj-otel",
      },
      {
        id: "custom",
        title: "Özel yazılım",
        description:
          "Hazır araçlar yetmediğinde işinizin gerçekte nasıl yürüdüğünden başlayalım. Önemli işleri kolaylaştıran yazılımlar tasarlayalım.",
        for: "Kendine özgü iş akışı, ürün fikri veya standart araçlarla çözülemeyen süreci olan ekipler.",
        features: [
          "İhtiyaca özel web uygulamaları",
          "Dijital ürünler & ilk sürümler",
          "Araçlar arası bağlantı & otomasyon",
        ],
        project: "mk-traceops",
      },
      {
        id: "business",
        title: "İşletme yönetim sistemleri",
        description:
          "İnsanları, kayıtları ve günlük kararları aynı yerde buluşturalım. Herkes için sıradaki adımı daha net hale getirelim.",
        for: "Farklı rollerle çalışan oteller, restoranlar, çiftlikler ve saha ekipleri.",
        features: [
          "Operasyon & ekip koordinasyonu",
          "Rezervasyon, sipariş & kayıtlar",
          "Yönetim ekranları & raporlama",
        ],
        project: "mavi-resepsiyon",
      },
      {
        id: "smart",
        title: "Akıllı & sesli deneyimler",
        description:
          "Soru sormanın, bilgi bulmanın ve işlem yapmanın daha kolay yollarını keşfedelim. Sesli ve yardımcı deneyimleri somut bir amaca göre şekillendirelim.",
        for: "Müşteri iletişimini kolaylaştırmak veya ekiplerine yönlendirmeli iş akışları sunmak isteyen işletmeler.",
        features: [
          "Sesli etkileşim fikirleri",
          "Yardımcı müşteri deneyimleri",
          "Pratik otomasyon prototipleri",
        ],
        project: "",
      },
    ],
  },
  process: {
    label: "NASIL ÇALIŞIYORUZ?",
    title: "Önce sizi dinleriz.\nSonra birlikte kurarız.",
    description:
      "Ortak bir yön, net kararlar ve her aşamada işe yarayan bir sonuç.",
    steps: [
      {
        title: "Anlarız",
        description: "İnsanlarınızı, iş akışınızı ve değişmesi gerekenleri.",
      },
      {
        title: "Tasarlarız",
        description: "Ayrıntıları geliştirmeden önce deneyimi netleştiririz.",
      },
      {
        title: "Geliştiririz",
        description:
          "Birlikte belirlenen yönü çalışan bir deneyime dönüştürürüz.",
      },
      {
        title: "Yayına alırız",
        description: "Ayrıntıları kontrol edip sistemi kullanıma açarız.",
      },
      {
        title: "İyileştiririz",
        description:
          "Günlük kullanımdan öğrenir, sonraki adımı şekillendiririz.",
      },
    ],
  },
  industries: {
    label: "GERÇEK ÇALIŞMALARDAN GELEN DENEYİM",
    title: "Farklı dünyalar.\nGerçek günlük ihtiyaçlar.",
    description:
      "Bağımsız projelerimiz ve örnek uygulamalarımız, dijital deneyimlerin farklı işlere nasıl uyum sağlayabileceğini gösterir.",
    items: [
      "Konaklama",
      "Restoranlar",
      "Tarım",
      "Saha operasyonları",
      "Fotoğraf",
      "Gayrimenkul",
    ],
  },
  contact: {
    label: "PROJENİZİ KONUŞALIM",
    title: "İyi işler,\nbir konuşmayla başlar.",
    description:
      "Aklınızdakini anlatın. Bir fikir, çözülmesi gereken bir sorun ya da daha kolay yürüyebilecek bir iş.",
    intro: "Başlamak için birkaç ayrıntı yeterli.",
    direct: "Doğrudan konuşmayı mı tercih edersiniz?",
    emailUs: "Bize yazın",
    whatsapp: "WhatsApp'tan konuşalım",
    next: "Sonrasında ne oluyor?",
    nextText:
      "Talebinizi inceler, gerekli soruları sorar ve kapsamı birlikte belirlemeden önce uygun yaklaşımı konuşuruz.",
    required: "Zorunlu",
    optional: "İsteğe bağlı",
    name: "Adınız soyadınız",
    company: "İşletme adı",
    email: "E-posta adresi",
    phone: "Telefon / WhatsApp",
    country: "Ülke",
    type: "Ne düşünüyorsunuz?",
    message: "Biraz anlatır mısınız?",
    placeholder: "Neyi geliştirmek veya kolaylaştırmak istersiniz?",
    more: "İşletme veya iletişim bilgisi ekleyin",
    consent:
      "Bilgilerimin bu talebe yanıt vermek için kullanılmasını kabul ediyorum. Ayrıntılar:",
    privacy: "gizlilik bildirimi",
    submit: "Proje talebini gönderin",
    sending: "Talebiniz gönderiliyor…",
    success: "Talebiniz bize ulaştı.",
    successText:
      "Fikrinizi paylaştığınız için teşekkürler. Bıraktığınız iletişim bilgileri üzerinden size dönüş yapacağız.",
    error:
      "Talebiniz gönderilemedi. Yazdıklarınız korunuyor. Yeniden deneyebilir veya doğrudan iletişime geçebilirsiniz.",
    invalid: "Zorunlu alanları doldurun ve gizlilik bildirimini onaylayın.",
    retry: "Yeni bir talep gönderin",
    types: [
      "Web sitesi",
      "Özel yazılım",
      "İşletme sistemi",
      "Dijital ürün",
      "Akıllı / sesli deneyim",
      "Henüz emin değilim",
    ],
  },
  footer: {
    label: "SIRADAKİ ADIMINIZ",
    title: "Birlikte işe yarayan\nbir şey yapalım.",
    cta: "WhatsApp’tan yaz",
    description:
      "Dijital deneyimler ve işletme yazılımları. Özenle tasarlanır. İşinize göre geliştirilir.",
    privacy: "Gizlilik",
    terms: "Koşullar",
    copyright: "Tüm hakları saklıdır.",
    top: "Başa dön",
  },
  legal: {
    privacyTitle: "Gizlilik bildirimi",
    privacyIntro:
      "Bu bildirim, MK Digital Systems'in bu site üzerinden paylaştığınız bilgileri nasıl kullandığını açıklar.",
    privacySections: [
      {
        title: "Paylaştığınız bilgiler",
        body: "Proje formu adınız, e-postanız, proje türü, mesajınız ve onayınızı ister. İşletme, telefon ve ülke bilgisi isteğe bağlıdır. Yalnızca talebiniz için gerekli bilgileri paylaşın.",
      },
      {
        title: "Kullanım amacı",
        body: "Bu bilgileri talebinize yanıt vermek, ihtiyacınızı anlamak ve olası bir projeyi konuşmak için kullanırız. Kişisel bilgilerinizi satmayız.",
      },
      {
        title: "İletim ve barındırma",
        body: "Talepler Formspree veya yapılandırılmış e-posta sağlayıcımız üzerinden iletilebilir. Bu sağlayıcılar ve barındırma sağlayıcımız hizmetin çalışması için gereken bilgileri işler. Doğrudan e-posta ve WhatsApp bağlantıları ilgili sağlayıcıları kullanır.",
      },
      {
        title: "Sorularınız",
        body: "Talep bilgilerinize erişim, düzeltme veya silme için bu sitedeki e-posta adresinden iletişime geçebilirsiniz. Saklama süreleri ve projeye özel veri kullanımı, proje başlamadan önce kararlaştırılmalıdır.",
      },
    ],
    termsTitle: "Site kullanım koşulları",
    termsIntro:
      "Bu koşullar MK Digital Systems web sitesinin kullanımını açıklar. Projeler için ayrıca anlaşma yapılır.",
    termsSections: [
      {
        title: "Proje bilgileri",
        body: "Gösterilen çalışmalar bağımsız ürünler ve örnek uygulamalar içerir. Örnek uygulamalar belirtilir ve ücretli müşteri projesi olarak sunulmaz. Açıklamalar belirli bir ticari sonucu garanti etmez.",
      },
      {
        title: "Sitenin kullanımı",
        body: "Siteyi hukuka uygun kullanın. Yetkisiz erişim girişiminde bulunmayın, çalışmasını engellemeyin veya kötüye kullanım amacıyla talep göndermeyin. Gönderdiğiniz bilgilerin doğruluğundan siz sorumlusunuz.",
      },
      {
        title: "Kapsam ve dış bağlantılar",
        body: "Talep göndermek hizmet sözleşmesi oluşturmaz. Kapsam, süre, ücret ve destek ayrı kararlaştırılır. Dış projelerin ve iletişim platformlarının kendi koşulları ve gizlilik uygulamaları vardır.",
      },
    ],
    updated: "Güncelleme: Eylül 2026",
  },
  meta: {
    home: {
      title: "MK Digital Systems | Web siteleri & özel işletme yazılımları",
      description:
        "İşinizin çalışma biçimine göre tasarlanan dijital deneyimler ve işletme yazılımları. MK Digital Systems çalışmalarını keşfedin, projenizi konuşalım.",
    },
    solutions: {
      title: "Çözümler | MK Digital Systems",
      description:
        "Müşterilerinize ve günlük işlerinize göre tasarlanan web siteleri, özel yazılımlar, işletme yönetim sistemleri ve akıllı deneyimler.",
    },
    work: {
      title: "Seçilmiş çalışmalar | MK Digital Systems",
      description:
        "Saha operasyonları, konaklama, tarım, restoranlar ve dijital deneyimler için bağımsız ürünleri ve örnek uygulamaları keşfedin.",
    },
    contact: {
      title: "Projenizi konuşalım | MK Digital Systems",
      description:
        "Fikrinizi veya işletmenizin ihtiyacını MK Digital Systems ile paylaşın. Kısa bir proje talebi gönderin ya da e-posta ve WhatsApp'tan ulaşın.",
    },
    privacy: {
      title: "Gizlilik bildirimi | MK Digital Systems",
      description:
        "MK Digital Systems proje formunda paylaşılan bilgilerin kullanımı ve iletilmesi hakkında açıklama.",
    },
    terms: {
      title: "Kullanım koşulları | MK Digital Systems",
      description:
        "Site kullanımı, örnek uygulamalar, dış bağlantılar ve proje talepleri hakkında bilgiler.",
    },
  },
  notFound: {
    title: "Bu sayfa taşınmış olabilir.",
    description: "Sizi yeniden doğru başlangıç noktasına götürelim.",
    back: "Ana sayfaya dön",
  },
};
export default tr;
