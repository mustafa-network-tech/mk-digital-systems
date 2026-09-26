import type { CityPage } from "./types";

export const yalova: CityPage = {
  id: "yalova",
  name: "Yalova",
  region: "marmara",
  ready: true,
  meta: {
    title: "Yalova Yazılım ve Web Tasarım: Çiçek, Tersane, Termal | MK Digital Systems",
    description:
      "Yalova'daki süs bitkisi üreticileri, tersane tedarikçileri ve termal tesisler için sipariş ve sevkiyat takibi, saha ekip sistemi ve web sitesi.",
  },
  eyebrow: "Yalova · Marmara kıyısı",
  title: "Yalova'da sera, tersane ve termal aynı sahilde; hepsinin ritmi farklı.",
  lead:
    "Yalova, Türkiye'nin kesme çiçek üretiminde önemli bir paya, ihracatında tersanelere ve turizminde termal kaynaklara sahip. Bu üç farklı iş koluna, her birinin kendi temposuna uyan yönetim sistemleri, saha yazılımları ve web siteleri geliştiriyoruz.",
  summary: "Kesme çiçek ve süs bitkileri, tersaneler, termal turizm: sipariş, saha ve rezervasyon.",
  blocks: [
    {
      kind: "economy",
      heading: "Yalova ekonomisinin üç kolu",
      intro:
        "Yalova'nın ekonomisi tarımda çiçekçilik ve süs bitkilerine, sanayide tersanelere, hizmette ise termal turizme dayanıyor.",
      sectors: [
        {
          title: "Kesme çiçek ve süs bitkileri",
          text: "Türkiye'nin kesme çiçek üretiminin yaklaşık yüzde 20'si Yalova'da. Seralarda yetişen saksı bitkileri ve orkide üretimi de ilin önemli gelir kaynakları arasında.",
        },
        {
          title: "Tersaneler",
          text: "Yalova ihracatının yaklaşık yüzde 88'i tersanelerden geliyor; 26 binden fazla kişi geçimini bu sektörden sağlıyor.",
        },
        {
          title: "Termal turizm",
          text: "Yüzyıllardır şifa merkezi olarak bilinen Termal'de sağlık turizmi ve konaklama ilçe ekonomisinin temeli.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Her kolun kendi dijital sorusu",
      items: [
        {
          title: "Sera: Sipariş hangi seradan, ne zaman çıkıyor?",
          text: "Toptancı ve ihracat siparişlerini ürün, sera ve sevk tarihiyle birlikte izlemek; soğuk zinciri bozmadan planlamak.",
        },
        {
          title: "Tersane tedarikçisi: Ekip bugün hangi gemide, hangi işte?",
          text: "Taşeron ve tedarikçi firmalarda iş emrini, puantajı ve iş bitiş onayını sahadan anında kayda almak.",
        },
        {
          title: "Termal tesis: Uzun konaklamada düzen",
          text: "Kür programı olan misafirlerin oda, ödeme ve hizmet bilgilerini tek yerde tutmak.",
        },
      ],
    },
    {
      kind: "story",
      heading: "İstanbul'a denizden bakan şehir",
      paragraphs: [
        "Yalova, Marmara'nın güney kıyısında, İstanbul'a deniz yoluyla en yakın illerden biri. Bu yakınlık, hem çiçeğin büyük pazara hızla ulaşmasını hem de hafta sonu misafirinin termal kaynaklara kolayca gelmesini sağlıyor.",
        "Seraların yeşili, tersanelerin çeliği ve kaplıcaların buharı aynı sahil şeridinde yan yana duruyor. Bu çeşitlilik Yalova'yı küçük ama çok katmanlı bir ekonomiye dönüştürüyor.",
      ],
    },
    {
      kind: "solutions",
      heading: "Yalova için önerdiğimiz çözümler",
      intro: "Yalova'da ilk ihtiyaç çoğu zaman düzenli bir yönetim sistemi; ardından vitrin ve işe özel yazılım geliyor.",
      items: [
        {
          id: "business",
          text: "Sera ve fidan işletmeleri için sipariş, stok ve sevkiyat; termal tesisler için oda ve misafir yönetimi.",
        },
        {
          id: "web",
          text: "Çiçek üreticileri için ürün kataloğu ve toptan talep formu olan siteler; termal tesisler için oda ve program odaklı tanıtım siteleri.",
        },
        {
          id: "custom",
          text: "Tersane taşeronları ve tedarikçileri için iş emri, ekip, puantaj ve onay akışını bağlayan saha yazılımları.",
        },
        {
          id: "mobile",
          text: "Sahada ve serada çalışan ekiplerin telefondan kayıt ve fotoğraf gönderdiği uygulamalar.",
        },
      ],
    },
    {
      kind: "work",
      heading: "İlgili çalışmalarımız",
      intro: "Bu projeler Yalova'da yapılmış işler değil; saha ekibi, iş takibi ve konaklama konularında kurduğumuz sistemlerin örnekleri.",
      projects: [
        { id: "saha-santiye", note: "Birden fazla şirketin saha ekiplerini, işlerini ve onaylarını yönettiği operasyon sistemi; tersane taşeronlarının ihtiyacına benzer bir yapı." },
        { id: "is-takip", note: "Görevlerin durumunu ve sorumlusunu tek yerde izleyen iş takip uygulaması." },
        { id: "mavi-kadraj-otel", note: "Oda sayfaları ve rezervasyon talebi akışıyla otel ve pansiyon sitesi örneği." },
      ],
    },
    {
      kind: "faq",
      heading: "Yalova'daki işletmeler için sorular",
      items: [
        {
          question: "Seramızın ürün listesi sezona göre değişiyor; sitede nasıl güncel tutarız?",
          answer:
            "Ürün ve stok bilgisini kendi güncelleyebileceğiniz bir panelden yönetilecek şekilde kurarız. Böylece katalog, seranızdaki gerçek durumu yansıtır.",
        },
        {
          question: "Tersanede çalışan ekiplerimiz farklı firmalardan; hepsi aynı sistemi kullanabilir mi?",
          answer:
            "Her firmanın yalnızca kendi ekibini ve işlerini gördüğü, sizin ise tümünü izleyebildiğiniz yetki yapısı kurulabilir. Bu, MK OPS'ta kullandığımız çok şirketli yaklaşımın aynısı.",
        },
        {
          question: "Termal tesisimizin sitesinde sağlıkla ilgili neler yazabiliriz?",
          answer:
            "Tesisinizin hizmetlerini ve olanaklarını anlatırız; tedavi vaadi içeren, doğrulanmamış sağlık iddialarına yer vermeyiz. Gerekli bilgileri sizin sağladığınız belgelere dayandırırız.",
        },
      ],
    },
  ],
  cta: {
    title: "Yalova'daki işiniz için doğru sistemi birlikte seçelim.",
    text: "Sera, tersane ya da tesis; bugünkü işleyişinizi anlatın, en çok zaman kaybettiğiniz yerden başlayalım.",
    whatsapp: "Merhaba, Yalova'daki işletmemiz için yazılım / web sitesi hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Yalova Valiliği: Çiçekçilik", url: "https://www.yalova.gov.tr/cicekcilik" },
    { label: "Yalova Belediyesi: Yalova Sanayisi", url: "https://www.yalova.bel.tr/sayfa/yalova-sanayisi" },
    { label: "Yalova Valiliği: Termal İlçesi", url: "https://www.yalova.gov.tr/termal" },
  ],
};
