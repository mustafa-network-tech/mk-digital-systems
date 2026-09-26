import type { CityPage } from "./types";

export const bilecik: CityPage = {
  id: "bilecik",
  name: "Bilecik",
  region: "marmara",
  ready: true,
  meta: {
    title: "Bilecik Yazılım ve Web Tasarım: Mermer ve Seramik | MK Digital Systems",
    description:
      "Bilecik'teki mermer ocakları, seramik ve sanayi tedarikçileri için blok ve plaka stoku, üretim takibi, ihracat kataloğu ve kurumsal web siteleri.",
  },
  eyebrow: "Bilecik · Sakarya vadisi",
  title: "Bilecik'te taş bloktan plakaya; her parçanın kaydı olmalı.",
  lead:
    "Osmanlı'nın kuruluş topraklarında bugün mermer, seramik hammaddesi ve sanayi öne çıkıyor. Bilecik'teki ocaklar, fabrikalar ve tedarikçiler için stoğu, üretimi ve siparişi görünür kılan yazılımlar ve ihracata dönük siteler geliştiriyoruz.",
  summary: "Mermer ve Bilecik taşı, seramik hammaddesi, Bozüyük sanayisi: stok, üretim ve katalog.",
  blocks: [
    {
      kind: "story",
      heading: "Bir devletin kurulduğu vadi",
      paragraphs: [
        "Osmanlı Devleti'nin kurucusu Ertuğrul Gazi'nin türbesi Söğüt'te, manevi kurucusu Şeyh Edebali'nin türbesi ise Bilecik'te. Şehir, hem bir devletin doğuşunda hem de Cumhuriyet'in kuruluş sürecinde önemli rol oynamış bir yer.",
        "Bugün aynı toprak başka bir hikâye anlatıyor: \"Bilecik taşı\" olarak bilinen mermer, seramik ve cam sanayisinin kullandığı kil, kaolin ve feldspat. Vadinin taşı artık dünyaya ihraç ediliyor.",
      ],
    },
    {
      kind: "economy",
      heading: "Taşın ve toprağın ekonomisi",
      intro: "Bilecik'in ekonomisinde mermer sektörü hem rezerv hem de kurumsallaşmış, ihracata dönük firmalar açısından ön planda.",
      sectors: [
        {
          title: "Mermer",
          text: "Ocaktan blok çıkaran, fabrikada plakaya ve ebatlı ürüne dönüştüren, önemli kısmını ihraç eden bir sektör.",
        },
        {
          title: "Seramik ve cam hammaddeleri",
          text: "Kil, kaolin ve feldspat rezervleri; Söğüt çevresinde çıkarılan ve işlenen mineraller.",
        },
        {
          title: "Sanayi tesisleri",
          text: "Merkez ve Bozüyük'teki sanayi tesisleri, ilin ekonomik gelişiminin taşıyıcısı.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Bilecik için önerdiğimiz öncelik",
      intro: "Taş işinde değer, doğru bloğun doğru siparişe gitmesinde saklı; bu yüzden özel yazılım başta.",
      items: [
        {
          id: "custom",
          text: "Ocaktan çıkan bloğun ölçü ve kalitesinden, fabrikada kesilen plakalara ve sevk edilen siparişe kadar izini süren özel stok ve üretim yazılımları.",
        },
        {
          id: "web",
          text: "Mermer ve seramik üreticileri için renk, desen, ebat ve yüzey işlemlerini düzenli gösteren, birden fazla dilde hazırlanabilen katalog siteleri.",
        },
        {
          id: "mobile",
          text: "Ocakta ve depoda bloğun fotoğrafını ve ölçüsünü telefonla kayda geçiren uygulamalar.",
        },
        {
          id: "business",
          text: "Cari hesap, sevkiyat, personel ve bakım takibini bir araya getiren yönetim panelleri.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Taş sektöründe tipik sorunlar",
      items: [
        {
          title: "Stoğu görmeden satış",
          text: "Müşteri bir renk ve ebat istediğinde, depoda gerçekten ne olduğunu hızlıca görememek.",
        },
        {
          title: "Kalite farkının kaydı",
          text: "Aynı ocaktan çıkan blokların farklı kalite ve desende olması; bu farkın siparişe kadar korunması.",
        },
        {
          title: "Yabancı alıcıya katalog",
          text: "Fuar dışında da ürünleri gösterebilen, güncel ve düzenli bir dijital katalog.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Benzer problemleri çözdüğümüz işler",
      intro: "Bilecik'te yapılmış projeler değil; stok, üretim ve katalog konularındaki yetkinliğimizi gösteren çalışmalar.",
      projects: [
        { id: "gunluk-imalat", note: "Üretim sahasındaki günlük imalat kayıtlarını dijitale taşıyan uygulama." },
        { id: "santiye-yonetim", note: "Proje, ekip, imalat ve puantajı tek yerde izleyen yönetim sistemi; ağır saha işlerinin kayıt mantığı." },
        { id: "mavi-yapi", note: "Ürün kataloğu, kategori sayfaları ve teklif formu olan iki dilli B2B sitesi örneği." },
        { id: "mavi-kadraj-arsiv", note: "Konu ve kategoriye göre aranabilen, filtrelenebilen görsel arşiv; renk ve desene göre filtrelenen bir taş kataloğunun altyapısına benzer." },
      ],
    },
    {
      kind: "faq",
      heading: "Bilecik'teki işletmeler için sorular",
      items: [
        {
          question: "Her bloğu ayrı ayrı mı kaydetmemiz gerekir?",
          answer:
            "Değerli ya da desenli ürünlerde blok bazlı kayıt satışta büyük kolaylık sağlar. Standart ürünlerde parti bazında kayıt yeterli olabilir; hangisinin size uygun olduğunu birlikte belirleriz.",
        },
        {
          question: "Katalogdaki ürün fotoğraflarını biz mi çekeceğiz?",
          answer:
            "Ürün fotoğraflarını sizden alırız; tutarlı görünmeleri için ışık, açı ve arka plan konusunda basit bir çekim rehberi hazırlarız.",
        },
        {
          question: "Sistem fuarlarda ve müşteri ziyaretlerinde kullanılabilir mi?",
          answer:
            "Evet; stok ve katalog ekranlarını tablet ve telefonda rahat kullanılacak şekilde tasarlıyoruz. Müşteriye gösterilecek ekranla iç kullanım ekranını ayırabiliriz.",
        },
      ],
    },
  ],
  cta: {
    title: "Bilecik'teki ocak ya da fabrikanız için ilk adım.",
    text: "Stoğu ve siparişi bugün nasıl takip ettiğinizi anlatın; en çok kayıp yaşadığınız noktadan başlayan bir kapsam önerelim.",
    whatsapp: "Merhaba, Bilecik'teki işletmemiz için stok / üretim takibi ve web sitesi hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Bilecik Valiliği: Bilecik Tarihi", url: "https://www.bilecik.gov.tr/ilimizin-tarihcesi" },
    { label: "BEBKA: Bilecik Mermer Sektörü Raporu", url: "https://www.bebka.org.tr/admin/datas/yayins/149/bebka-bilecikmermersektoru_1511963042.pdf" },
    { label: "BEBKA: Bilecik", url: "https://bebka.org.tr/en/our-region/bilecik/" },
  ],
};
