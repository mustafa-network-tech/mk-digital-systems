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
    label: "YAZILIM & DİJİTAL ÜRÜN STÜDYOSU",
    title: "İşinizin ritmine",
    accent: "uyumlu sistemler.",
    description:
      "Özel yazılımdan mobil uygulamaya, işletme sistemlerinden yaratıcı web deneyimlerine: fikirleri her gün kullanılan dijital ürünlere dönüştürüyoruz.",
    primary: "WhatsApp’tan yaz",
    secondary: "Çalışmalarımızı keşfedin",
    visual: "Ürün vitrini: MK Digital Systems’ın geliştirdiği gerçek ürünlerden ekranlar",
    needsLabel: "Ne yapmak istiyorsunuz?",
    needs: {
      "operations": "Günlük işlerimi kolaylaştırayım",
      "presence": "Dijitalde güçlü görüneyim",
      "idea": "Fikrimi hayata geçireyim",
    },
    stage: {
      "prev": "Önceki ürün",
      "next": "Sonraki ürün",
      "pause": "Otomatik geçişi durdur",
      "play": "Otomatik geçişi başlat",
      "goTo": "{name} ürününe git",
    },
    categories: {
      "saha-santiye": "Saha & şantiye operasyon sistemi",
      "aura": "Mobil günlük uygulaması",
      "mavi-sarkilar": "Yaratıcı web deneyimi",
      "mk-adisyon": "Restoran & kafe yönetimi",
      "kadraj-rotam": "Fotoğraf rotaları platformu",
      "musty": "Premium görsel web deneyimi",
      "mk-farm": "Çiftlik yönetim yazılımı",
      "aria": "Sosyal platform arayüzü",
      "namehub": "İsim & dijital kimlik platformu",
      "mavi-kadraj-otel": "Otel web sitesi",
      "gonul-pusulasi": "Marka görseli",
    },
    tags: {
      "selected": "Seçilmiş çalışma",
      "sector-demo": "Örnek site",
      "design": "Görsel tasarım",
    },
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
    pageLabel: "ÇALIŞMALAR",
    title: "Farklı işler.\nAynı özenli yaklaşım.",
    description:
      "Gerçek iş ihtiyaçlarını anlaşılır dijital deneyimlere dönüştüren ürünler ve örnek uygulamalar.",
    all: "Tüm çalışmaları keşfedin",
    discuss: "WhatsApp’tan bilgi al",
    inquiry:
      "Merhaba, {project} benzeri bir çözüm hakkında bilgi almak istiyorum.",
    problem: "İhtiyaç",
    solution: "Yaklaşımımız",
    experience: "Bir araya getirdikleri",
    diagram: "İŞ AKIŞINA GENEL BAKIŞ",
    statuses: {
      "live-demo": "Canlı demo",
      "closed-test": "Kapalı test",
      "sample-site": "Örnek site",
      "in-use": "Aktif kullanımda",
      "coming-soon": "Yakında",
    },
    filter: "Çalışmaları filtrele",
    allLabel: "Tümü",
    layers: {
      "flagship": {
        label: "Sistemler",
        title: "İşletme sistemleri",
        description:
          "İşletmelerin günlük operasyonu için geliştirdiğimiz sistemler; her biri gerçek bir sorundan yola çıkıyor.",
      },
      "selected": {
        label: "Seçilmiş",
        title: "Seçilmiş çalışmalar",
        description:
          "Dijital ürünler, mobil uygulamalar ve yaratıcı web deneyimleri.",
      },
      "sector-demo": {
        label: "Sektör siteleri",
        title: "Sektör web siteleri",
        description:
          "Farklı sektörler için hazırladığımız örnek web siteleri.",
      },
    },
    linkLabels: {
      demo: "Canlı demoyu incele",
      product: "Ürün sitesi",
      site: "Siteyi incele",
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
    label: "BİZE ULAŞIN",
    title: "İyi işler,\nbir konuşmayla başlar.",
    description:
      "Aklınızdakini anlatın. Bir fikir, çözülmesi gereken bir sorun ya da daha kolay yürüyebilecek bir iş.",
    intro: "Başlamak için birkaç ayrıntı yeterli.",
    direct: "Size uygun yoldan ulaşın.",
    call: "Ara",
    emailUs: "E-posta gönder",
    whatsapp: "WhatsApp’tan yaz",
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
    socialLabel: "Sosyal medya",
    socialProfile:
      "MK Digital Systems {platform} profili — yeni sekmede açılır",
    signature:
      "Mustafa Öner tarafından geliştirilen dijital ürünler ve özel yazılımlar",
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
        "İşinizin çalışma biçimine göre tasarlanan dijital deneyimler ve işletme yazılımları. MK Digital Systems çalışmalarını keşfedin, ihtiyacınız için bize ulaşın.",
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
      title: "İletişim | MK Digital Systems",
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
