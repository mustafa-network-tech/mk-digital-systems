import type { CityPage } from "./types";

export const kilis: CityPage = {
  id: "kilis",
  name: "Kilis",
  region: "guney",
  ready: true,
  meta: {
    title: "Kilis Web Tasarım: Zeytinyağı ve Üretici Markaları | MK Digital Systems",
    description:
      "Kilis'teki zeytinyağı, pekmez ve gıda üreticileri için marka web siteleri, sipariş ve bayi takibi, alım ve stok kayıtlarını tutan yazılımlar.",
  },
  eyebrow: "Kilis · Güneydoğu",
  title: "Kilis zeytininin hikâyesi var; dijitalde de anlatılmayı bekliyor.",
  lead:
    "Kilis'in ekonomisi toprağa, zeytine ve bağa dayanıyor. Zeytinyağından pekmeze, bulgurdan tekstile üreten işletmeler için ürünü doğru anlatan web siteleri ve alımdan satışa kaydı tutan sistemler geliştiriyoruz.",
  summary: "Zeytin, zeytinyağı, üzüm ve gıda işleme: üretici markası, sipariş ve stok kaydı.",
  blocks: [
    {
      kind: "story",
      heading: "Zeytinin ve bağın şehri",
      paragraphs: [
        "Kilis'te tarım arazisinin önemli bir bölümü zeytinlik. İlde yaklaşık 1,4 milyon zeytin ağacı var; ince kabuğu, küçük çekirdeği ve yüksek yağ oranıyla bilinen Kilis zeytini, şehrin en tanınan ürünü.",
        "Zeytinin yanında bağcılık da güçlü: Üzüm, buğday ve arpa ilin başlıca ürünleri arasında. Bu ürünlerin önemli kısmı yine Kilis'te pekmeze, bulgura ve yağa dönüşüyor. Ekonomi, tarım ve hayvancılığın yanı sıra tarihsel olarak sınır ticaretine de dayanıyor.",
      ],
    },
    {
      kind: "economy",
      heading: "Kilis ekonomisinin yapı taşları",
      intro:
        "Valilik verilerine göre ilde 39 zeytinyağı fabrikası faaliyet gösteriyor. Organize sanayi bölgesinde ise gıda ve tekstil ağırlıklı firmalar çalışıyor.",
      sectors: [
        {
          title: "Zeytin ve zeytinyağı",
          text: "Coğrafi işaretli Kilis zeytinyağı, üretimden satışa kadar marka değeri taşıyan bir ürün.",
        },
        {
          title: "Bağcılık ve gıda işleme",
          text: "Üzümden pekmez, buğdaydan bulgur; tarım ürününü ilde işleyen gıda tesisleri.",
        },
        {
          title: "Organize sanayi",
          text: "OSB'de yaklaşık 1.300 kişiyi istihdam eden firmaların çoğu gıda ve tekstil alanında.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Kilis'teki üretici için öncelikler",
      intro: "Kilis'te çoğu üretici için ilk soru şu: Ürünümü, aracı olmadan tanıyan ve güvenen bir müşteriye nasıl ulaştırırım?",
      items: [
        {
          id: "web",
          text: "Zeytinyağı ve gıda üreticileri için ürünün kaynağını, üretim sürecini ve sipariş yolunu anlatan marka siteleri; toptan alıcılar için teklif formu.",
        },
        {
          id: "custom",
          text: "Üreticiden alım, tartım ve ödeme kayıtlarından parti ve stok takibine uzanan, fabrikanızın akışına göre kurulan yazılımlar.",
        },
        {
          id: "business",
          text: "Sipariş, bayi, cari hesap ve sevkiyatı tek ekranda toplayan yönetim sistemleri.",
        },
        {
          id: "mobile",
          text: "Alım noktasında ya da sahada telefonla kayıt girmeyi sağlayan sade uygulamalar.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Örnek çalışmalar",
      intro: "Kilis'e özel işler değil; üreticinin vitrini, sipariş ve sevkiyat takibi için neler yapabildiğimizi gösteren örnekler.",
      projects: [
        { id: "mavi-yapi", note: "Ürün kataloğu ve teklif formuyla kurgulanmış iki dilli B2B tedarik sitesi; toptan alıcıya hitap eden bir vitrin örneği." },
        { id: "mk-kargo", note: "Fiyat hesaplayan müşteri sitesi ve siparişleri yöneten operasyon paneli; gönderi ve sevkiyat takibinin örneği." },
        { id: "is-takip", note: "Günlük işlerin durumunu ve sorumlusunu tek yerde izleyen uygulama." },
      ],
    },
    {
      kind: "needs",
      heading: "Zeytinyağı işletmelerinde sık görülen ihtiyaçlar",
      items: [
        {
          title: "Hasatta yoğun alım trafiği",
          text: "Kısa sürede çok sayıda üreticiden gelen zeytinin kilo, randıman ve ödeme bilgisinin karışmadan tutulması.",
        },
        {
          title: "Parti bazında stok",
          text: "Hangi tankta hangi hasattan ne kadar yağ olduğunu ve hangi siparişe ayrıldığını görmek.",
        },
        {
          title: "Doğrudan satış",
          text: "Şehir dışındaki müşterinin ürünü tanıyıp sipariş verebileceği güvenilir bir kanal.",
        },
      ],
    },
    {
      kind: "faq",
      heading: "Kilis'teki üreticilerin sorabileceği sorular",
      items: [
        {
          question: "Sitemden doğrudan ödeme alarak satış yapabilir miyim?",
          answer:
            "Mümkün; ancak ödeme altyapısı, kargo ve iade süreçleri ayrı bir kapsam gerektirir. Çoğu üretici için önce sipariş talebi ve WhatsApp ile başlayıp talebe göre online ödemeye geçmeyi öneriyoruz.",
        },
        {
          question: "Coğrafi işaretli ürünümü sitede nasıl anlatmalıyım?",
          answer:
            "Ürünün nereden geldiğini, nasıl işlendiğini ve sizi diğer üreticilerden ayıran şeyi sade bir dille anlatırız. Belgelerinizi ve süreç fotoğraflarınızı bu anlatımın kanıtı olarak kullanırız.",
        },
        {
          question: "Alım kayıtları için internet bağlantısı sorun olur mu?",
          answer:
            "Sistemi web tabanlı kuruyoruz; bağlantının zayıf olabileceği noktaları proje başında konuşur, kayıt ekranlarını buna göre sade ve hafif tasarlarız.",
        },
      ],
    },
  ],
  cta: {
    title: "Kilis'teki üretiminizi dijitalde doğru anlatalım.",
    text: "Ürününüzü, bugün nasıl sattığınızı ve kaydı nasıl tuttuğunuzu anlatın; size uygun ilk adımı birlikte belirleyelim.",
    whatsapp: "Merhaba, Kilis'teki işletmemiz için web sitesi / yazılım hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Kilis Valiliği: Ekonomi", url: "https://www.kilis.gov.tr/ekonomi" },
    { label: "Kilis İl Kültür ve Turizm Müdürlüğü: Zeytin, Zeytinyağı ve Sabun", url: "https://kilis.ktb.gov.tr/TR-61808/zeytin-zeytinyagi-ve-sabun.html" },
    { label: "İpekyolu Kalkınma Ajansı: Kilis Ekonomi Strateji Belgesi", url: "https://ika.org.tr/assets/upload/dosyalar/kilis-ekonomi-stratejisi.pdf" },
    {
      label: "Kilis TSO: Coğrafi İşaretli Ürünler, Kilis Zeytinyağı",
      url: "https://www.kilistso.org.tr/Co%C4%9Frafi%C4%B0%C5%9Faretli%C3%9Cr%C3%BCnler/KilisZeytinya%C4%9F%C4%B1/tabid/19998/Default.aspx",
    },
  ],
};
