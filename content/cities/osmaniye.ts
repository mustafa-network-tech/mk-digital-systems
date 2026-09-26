import type { CityPage } from "./types";

export const osmaniye: CityPage = {
  id: "osmaniye",
  name: "Osmaniye",
  region: "guney",
  ready: true,
  meta: {
    title: "Osmaniye Yazılım ve Web Tasarım: Fıstık, Çelik, Lojistik | MK Digital Systems",
    description:
      "Osmaniye'deki yer fıstığı işleyicileri, demir-çelik tedarikçileri ve lojistik firmaları için parti takibi, sevkiyat ve ihracata dönük web siteleri.",
  },
  eyebrow: "Osmaniye · Doğu Akdeniz",
  title: "Osmaniye'de ürün yoldan geçmez, yola çıkar: parti, sevkiyat ve ihracat için yazılım.",
  lead:
    "Türkiye'de üretilen yer fıstığının büyük kısmı Osmaniye'de işleniyor; ilin ihracatını ise demir-çelik taşıyor. Osmaniye'deki işletmeler için partiyi, sevkiyatı ve müşteriyi tek yerde toplayan sistemler geliştiriyoruz.",
  hero: {
    src: "/cities/osmaniye.webp",
    alt: "Sabah ışığında yüksek, mavi bir dağ silsilesinin önünde uzanan yeşil tarla sıraları",
    kind: "illustration",
    caption: "Amanos eteklerinde ova ve tarlalar.",
    focus: "50% 60%",
    source: "Mustafa tarafından eklenecek; Amanos ve ova temalı üretilmiş görsel",
  },
  summary: "Yer fıstığı işleme, demir-çelik ve lojistik: parti takibi, sevkiyat ve ihracat sitesi.",
  blocks: [
    {
      kind: "economy",
      heading: "Rakamlarla Osmaniye'nin üç ekseni",
      intro:
        "Doğu Akdeniz Kalkınma Ajansı verileri Osmaniye ekonomisini üç eksende özetliyor: tarım ve tarıma dayalı sanayi, demir-çelik ve konumdan gelen lojistik gücü.",
      sectors: [
        {
          title: "Yer fıstığı işleme",
          text: "Türkiye üretiminin yaklaşık yüzde 40'ı Osmaniye'de yetişiyor, ülkede üretilen fıstığın yaklaşık yüzde 80'i ilde işleniyor. Sektörde 350 civarı işletme var.",
        },
        {
          title: "Demir-çelik",
          text: "2019'da il ihracatının yüzde 77'sinden fazlası bu sektörden geldi. Teşviklerle büyüyen, ilin sanayisini sürükleyen kol.",
        },
        {
          title: "Tekstil",
          text: "İhracatta ikinci sırada; ilin sanayi yapısını çeşitlendiren sektör.",
        },
        {
          title: "Lojistik",
          text: "Adana, Hatay, Gaziantep ve Kahramanmaraş arasındaki konumu; Orta Doğu ve Kuzey Afrika pazarlarına dönük ticaret.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "İşleyici, tedarikçi ve nakliyeci için ortak ihtiyaç: görünürlük",
      items: [
        {
          title: "Partinin izini sürmek",
          text: "Fıstığın hangi üreticiden, hangi tarihte geldiğini; hangi işlemden geçip hangi siparişe gittiğini görebilmek.",
        },
        {
          title: "Sevkiyatı planlamak",
          text: "Araç, yük ve teslim tarihlerini telefon ve mesaj trafiğine bırakmadan planlamak ve takip etmek.",
        },
        {
          title: "Yabancı alıcıya güven vermek",
          text: "İhracat yapılan pazarlardaki alıcılara ürün, kapasite ve belgeleri kendi dillerinde anlatan bir site.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Osmaniye için önerdiğimiz sıralama",
      intro: "Üretimi ve sevkiyatı yöneten sistemler önce geliyor; vitrin, bu düzenin dışarıya yansıyan yüzü.",
      items: [
        {
          id: "custom",
          text: "Alım, işleme, paketleme ve sevkiyat adımlarını parti bazında bağlayan, müşterinizin izlenebilirlik beklentisini karşılayan özel yazılımlar.",
        },
        {
          id: "business",
          text: "Stok, cari hesap, araç ve personel takibini bir araya getiren yönetim sistemleri; nakliye firmaları için sipariş ve teslim paneli.",
        },
        {
          id: "web",
          text: "İhracata dönük, birden fazla dilde hazırlanabilen kurumsal ve katalog siteleri.",
        },
        {
          id: "mobile",
          text: "Şoför, depo ve saha ekipleri için teslim, fotoğraf ve imza kaydı alınan uygulamalar.",
        },
      ],
    },
    {
      kind: "story",
      heading: "Dört yolun buluştuğu yer",
      paragraphs: [
        "Osmaniye, Çukurova'nın doğu ucunda, Amanos Dağları'nın eteğinde kurulu. Karatepe-Aslantaş gibi antik yerleşimler bölgenin binlerce yıllık bir geçiş yolu olduğunu hatırlatıyor.",
        "Bugün aynı konum, ürünün yola çıktığı bir merkeze dönüşmüş durumda. Tarladan gelen fıstık, fabrikadan çıkan çelik ve kavşaktan geçen yük, aynı soruyu soruyor: Neyin nerede olduğunu kim, ne zaman biliyor?",
      ],
    },
    {
      kind: "work",
      heading: "Bu soruları çözdüğümüz projeler",
      intro: "Osmaniye'de yapılmış işler değil; parti, sevkiyat ve saha takibinde kurabildiğimiz yapıları gösteren örnekler.",
      projects: [
        { id: "mk-kargo", note: "Fiyat hesaplayan müşteri sitesi ve siparişleri yöneten operasyon paneliyle kargo ve lojistik ürünü." },
        { id: "gunluk-imalat", note: "Günlük imalat kayıtlarını dijital karta dönüştüren uygulama; işleme hattında parti bazlı kayıt mantığı." },
        { id: "mavi-yapi", note: "İki dilli B2B tedarik sitesi; ihracata dönük bir katalog ve teklif akışının örneği." },
        { id: "is-takip", note: "Görevlerin durumunu ve sorumlusunu izleyen iş takip uygulaması." },
      ],
    },
    {
      kind: "faq",
      heading: "Osmaniye'deki işletmelerin sorabileceği sorular",
      items: [
        {
          question: "Sitemizi Arapça ya da İngilizce hazırlayabilir misiniz?",
          answer:
            "Evet, siteyi birden fazla dilde kurgulayabiliriz. Çevirilerin ürününüzü ve sektör terimlerini doğru yansıtması için metinleri sizinle ya da çalıştığınız çevirmenle birlikte kontrol ederiz.",
        },
        {
          question: "Fıstık işleme hattında her partiyi ayrı izlemek zorunda mıyız?",
          answer:
            "Ne kadar ayrıntıya ihtiyacınız olduğunu müşterinizin beklentisi belirler. Kaydı gereğinden karmaşık yapmadan, istenen izlenebilirliği sağlayan seviyeyi birlikte buluruz.",
        },
        {
          question: "Nakliye firmamız için hazır yazılım yerine neden özel sistem?",
          answer:
            "Hazır yazılım iş akışınıza uyuyorsa onu kullanmanızı öneririz. Özel sistem, fiyatlandırma, araç planlaması ya da müşteri bildirimleri gibi konularda farklı çalışıyorsanız anlam kazanır.",
        },
      ],
    },
  ],
  cta: {
    title: "Osmaniye'deki işinizi uçtan uca görünür kılalım.",
    text: "Ürününüzün ya da yükünüzün bugün izlediği yolu anlatın; hangi adımda kayıt kaybolduğunu birlikte bulalım.",
    whatsapp: "Merhaba, Osmaniye'deki işletmemiz için takip sistemi / web sitesi hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "DOĞAKA: Osmaniye Ekonomik Veriler", url: "https://www.dogaka.gov.tr/dogu-akdeniz/osmaniye/ekonomik-veriler" },
    { label: "DOĞAKA: Yer Fıstığı İşleme Sektörü", url: "https://www.dogaka.gov.tr/dogu-akdeniz/osmaniye/yer-fistigi-isleme-sektoru" },
    { label: "Osmaniye TSO: Osmaniye Yer Fıstığı", url: "https://www.osmaniyetso.org.tr/osmaniye-yer-fistigi/" },
  ],
};
