import type { CityPage } from "./types";

export const tekirdag: CityPage = {
  id: "tekirdag",
  name: "Tekirdağ",
  region: "marmara",
  ready: true,
  meta: {
    title: "Tekirdağ Web Tasarım ve Yazılım: Çorlu, Çerkezköy | MK Digital Systems",
    description:
      "Tekirdağ'daki tekstil atölyeleri, Çorlu ve Çerkezköy tedarikçileri, bağ ve restoran işletmeleri için üretim takibi, adisyon ve web siteleri.",
  },
  eyebrow: "Tekirdağ · Trakya",
  title: "Ayçiçeği tarlası da tekstil hattı da Tekirdağ'da; ikisi de takip ister.",
  lead:
    "Tekirdağ, Türkiye'nin ayçiçeği üretiminde en önemli illerinden ve Çorlu–Çerkezköy hattıyla büyük bir sanayi merkezi. Buradaki atölyeler, tedarikçiler, bağ işletmeleri ve restoranlar için işin temposuna uyan yönetim sistemleri ve web siteleri geliştiriyoruz.",
  hero: {
    src: "/cities/tekirdag.webp",
    alt: "Yaz öğleden sonrasında denize doğru inen ayçiçeği sıraları ve yanında bağlar",
    kind: "illustration",
    caption: "Tekirdağ'da ayçiçeği tarlaları, bağlar ve Marmara.",
    focus: "45% 60%",
    source: "Mustafa tarafından eklenecek; ayçiçeği, bağ ve deniz temalı üretilmiş görsel",
  },
  summary: "Ayçiçeği ve bağcılık, Çorlu–Çerkezköy tekstil ve sanayisi: üretim takibi ve işletme yönetimi.",
  blocks: [
    {
      kind: "economy",
      heading: "Tarım ve sanayinin yan yana olduğu il",
      intro:
        "Tekirdağ'ın ekonomisi iki güçlü ayak üzerinde duruyor: Trakya'nın verimli tarım arazileri ve Çorlu–Çerkezköy çevresinde yoğunlaşan sanayi. İlde 12 organize sanayi bölgesi bulunuyor.",
      sectors: [
        {
          title: "Ayçiçeği",
          text: "Türkiye ayçiçeği üretiminin yaklaşık yüzde 30'u Tekirdağ'da; ayçiçek yağı ilin ihraç ürünleri arasında.",
        },
        {
          title: "Tekstil ve deri",
          text: "Sanayide ağırlık tekstilde; ardından deri, gıda, makine-metal ve metal eşya geliyor.",
        },
        {
          title: "Bağcılık",
          text: "Yaklaşık 6.700 hektar bağ alanı ve Şarköy çevresinde yoğunlaşan üzüm ve şarap üretimi.",
        },
        {
          title: "Kıyı ve balıkçılık",
          text: "Marmara kıyısındaki ilçelerde balıkçılık ve kıyı yaşamı; yaz aylarında canlanan restoran ve konaklama.",
        },
      ],
    },
    {
      kind: "story",
      heading: "Trakya'nın Marmara'ya açılan kapısı",
      paragraphs: [
        "Tekirdağ, Trakya'nın geniş ovaları ile Marmara Denizi'nin buluştuğu yerde. Yazın sararan ayçiçeği tarlaları, kıyıya inen bağlar ve sanayi bölgelerinin uzun çatıları aynı manzaranın parçası.",
        "Ünlü köftesiyle bilinen şehir merkezi, kıyı ilçeleri ve İstanbul'a yakın sanayi ilçeleri birbirinden çok farklı işletmelere ev sahipliği yapıyor. Bu çeşitlilik, dijitalde de tek bir kalıbın herkese uymayacağını gösteriyor.",
      ],
    },
    {
      kind: "needs",
      heading: "Tekirdağ'daki işletmelerin dijital gündemi",
      items: [
        {
          title: "Fason üretimde sipariş takibi",
          text: "Tekstil atölyelerinde model, adet ve termin bilgisinin kesimden sevkiyata kadar kaybolmadan izlenmesi.",
        },
        {
          title: "Kalabalık masada doğru hesap",
          text: "Köfteci, balık restoranı ve kıyı işletmelerinde yoğun saatlerde siparişin mutfağa ve kasaya doğru ulaşması.",
        },
        {
          title: "Bağdan satışa hikâye",
          text: "Bağ ve şarap işletmelerinin ürünlerini, ziyaret imkânlarını ve iletişim bilgilerini düzenli sunması.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Örnek aldığımız işler",
      intro: "Bu projeler Tekirdağ'da yapılmadı; ancak üretim takibi ve restoran operasyonu konusunda ne kurabildiğimizi gösteriyor.",
      projects: [
        { id: "gunluk-imalat", note: "Üretim sahasındaki günlük imalat kayıtlarını dijital karta dönüştüren uygulama; atölye bazlı kayıt mantığının örneği." },
        { id: "mk-adisyon", note: "Garson, mutfak ve kasayı bağlayan adisyon ürünü; kalabalık servis saatleri için tasarlandı." },
        { id: "mavi-kafe", note: "Dijital menü, galeri ve rezervasyon akışıyla kafe ve restoran sitesi örneği." },
      ],
    },
    {
      kind: "solutions",
      heading: "Tekirdağ için önerdiğimiz sıralama",
      intro: "Atölyeler ve restoranlar için hazır kalıpları uyarlanabilen yönetim sistemleri ilk sırada; ardından vitrin geliyor.",
      items: [
        {
          id: "business",
          text: "Tekstil atölyeleri için sipariş, model, adet ve termin takibi; restoranlar için masa, mutfak ve kasayı bağlayan adisyon sistemi.",
        },
        {
          id: "web",
          text: "Restoran, bağ ve kıyı işletmeleri için menü, galeri ve rezervasyon talebi sunan siteler; tedarikçiler için kurumsal siteler.",
        },
        {
          id: "mobile",
          text: "Atölye şefinin ya da garsonun telefondan kullanacağı hızlı kayıt ekranları.",
        },
        {
          id: "custom",
          text: "Standart bir sistemin karşılamadığı fason üretim, kalite ya da sevkiyat akışları için işinize özel yazılımlar.",
        },
      ],
    },
    {
      kind: "faq",
      heading: "Tekirdağ'daki işletmeler için sorular",
      items: [
        {
          question: "Birden fazla fason atölyeyle çalışıyoruz; hepsinin durumunu görebilir miyiz?",
          answer:
            "Evet; her atölyenin kendi işlerini güncellediği, sizin ise tüm siparişlerin aşamasını birlikte gördüğünüz bir yapı kurabiliriz.",
        },
        {
          question: "Restoranımız yazın çok yoğun, kışın sakin; sistem buna uyar mı?",
          answer:
            "Sistemi yoğun günleri düşünerek tasarlıyoruz; sakin dönemde daha az cihaz ve kullanıcıyla çalışmaya devam edebilirsiniz.",
        },
        {
          question: "Şarap ya da alkollü ürün satan bir işletmenin sitesinde nelere dikkat etmeliyiz?",
          answer:
            "Alkollü ürünlerin tanıtımı ve satışı yasal düzenlemelere tabi. Sitenin içeriğini ve iletişim akışını bu kurallara uygun kurgulamak için sizin ve danışmanınızın yönlendirmesiyle ilerleriz.",
        },
      ],
    },
  ],
  cta: {
    title: "Tekirdağ'daki işinizin ritmine uyan bir sistem kuralım.",
    text: "Atölye, restoran ya da bağ; bugün nasıl çalıştığınızı anlatın, önceliğinizi birlikte belirleyelim.",
    whatsapp: "Merhaba, Tekirdağ'daki işletmemiz için yazılım / web sitesi hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Tekirdağ TSO: Tekirdağ'ın Sosyo Ekonomik Durumu", url: "https://www.tekirdagtso.org.tr/Sayfalar/Detay/cdbea848-2ef5-422a-9eff-0a8b97be7257" },
    { label: "Tekirdağ Büyükşehir Belediyesi: Tekirdağ'da Tarım", url: "https://www.tekirdag.bel.tr/tarim" },
    { label: "Trakya Kalkınma Ajansı: Tekirdağ Yatırım Ortamı", url: "https://www.trakyaka.org.tr/upload/Node/35522/xfiles/TEKIRDAG_YATIRIM.pdf" },
  ],
};
