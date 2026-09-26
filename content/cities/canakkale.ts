import type { CityPage } from "./types";

export const canakkale: CityPage = {
  id: "canakkale",
  name: "Çanakkale",
  region: "marmara",
  ready: true,
  meta: {
    title: "Çanakkale Web Tasarım: Turizm, Tarih ve Yerel Ürün | MK Digital Systems",
    description:
      "Çanakkale'deki tur, konaklama, restoran ve yerel ürün işletmeleri için ziyaretçiyi doğrudan ulaştıran web siteleri, rezervasyon ve adisyon sistemleri.",
  },
  eyebrow: "Çanakkale · Boğaz'ın iki yakası",
  title: "Çanakkale'ye milyonlar tarih için geliyor; işletmenizi o yolculukta buldurun.",
  lead:
    "Gelibolu Yarımadası'ndan Troya'ya, Kilitbahir'den adalara Çanakkale her yıl milyonlarca ziyaretçi ağırlıyor. Tur, konaklama, restoran ve yerel ürün işletmeleri için bu ziyaretçiyi doğrudan size ulaştıran web siteleri ve yoğunluğu düzenleyen sistemler kuruyoruz.",
  summary: "Tarih ve kültür turizmi, adalar, zeytin ve köprüyle gelen lojistik: rezervasyon ve tanıtım.",
  blocks: [
    {
      kind: "story",
      heading: "Tarihin ortasında yaşayan bir şehir",
      paragraphs: [
        "Çanakkale Savaşları Gelibolu Tarihi Alanı her yıl milyonlarca yerli ve yabancı ziyaretçiyi ağırlıyor. Boğaz'a hâkim tepedeki Troya Ören Yeri ise Türkiye'ye gelen kültür turistlerinin rotalarındaki önemli duraklardan.",
        "18 Mart 2022'de açılan 1915 Çanakkale Köprüsü, şehrin iki yakasını ve pazarlara uzaklığını değiştirdi. Köprüyle birlikte Lapseki çevresi lojistik bir kimlik kazanıyor; Ayvacık'taki zeytin ve zeytinyağı gibi yerel ürünler de pazara daha kolay ulaşıyor.",
      ],
    },
    {
      kind: "needs",
      heading: "Ziyaretçi ekonomisinin dijital ihtiyaçları",
      items: [
        {
          title: "Planlama aşamasında görünmek",
          text: "Gezi planını telefonda yapan ziyaretçinin; tur, konaklama ve yemek arasında sizi bulup karşılaştırabilmesi.",
        },
        {
          title: "Grupları ve günleri düzenlemek",
          text: "Tur ve konaklama işletmelerinde grup, tarih ve kişi bilgisinin tek yerde, karışmadan tutulması.",
        },
        {
          title: "Yerel ürünü kalıcı müşteriye dönüştürmek",
          text: "Bir kez gelip zeytinyağını beğenen ziyaretçinin, eve döndükten sonra da size ulaşabileceği bir kanal.",
        },
        {
          title: "Ada sezonunda hızlı servis",
          text: "Bozcaada ve Gökçeada'da kısa ve yoğun sezonda masa, oda ve sipariş takibi.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Çanakkale'de önerdiğimiz sıra",
      intro: "Ziyaretçinin ilk teması ekranda olduğu için web sitesi başta; ardından yolda kullanılan mobil deneyim ve yoğunluğu yöneten sistemler geliyor.",
      items: [
        {
          id: "web",
          text: "Tur firmaları, oteller, pansiyonlar ve restoranlar için ziyaretçinin gerektiğinde farklı dillerde bilgi alıp doğrudan iletişime geçebildiği siteler.",
        },
        {
          id: "mobile",
          text: "Rota, program ya da menü gibi bilgilerin yolda telefondan rahat kullanılabileceği mobil deneyimler; ihtiyaç halinde uygulama.",
        },
        {
          id: "business",
          text: "Otel ve pansiyonlar için resepsiyon, restoranlar için adisyon; tur işletmeleri için grup ve program takibi.",
        },
        {
          id: "custom",
          text: "Köprüyle gelişen lojistik ve ticaret işletmeleri için sipariş, depo ve sevkiyat akışına özel yazılımlar.",
        },
      ],
    },
    {
      kind: "economy",
      heading: "Çanakkale ekonomisine kısa bakış",
      intro: "Çanakkale'nin ekonomisinde turizm, tarım ve köprüyle güçlenen ticaret birbirini tamamlıyor.",
      sectors: [
        {
          title: "Tarih ve kültür turizmi",
          text: "Gelibolu Tarihi Alanı, Troya ve bölgedeki tarihi yapılar; Troya Kültür Rotası gibi projelerle uzayan konaklama süreleri.",
        },
        {
          title: "Zeytin ve zeytinyağı",
          text: "İlin en önemli tarım ürünleri arasında; Ayvacık'ta değer kazanmasına yönelik çalışmalar sürüyor.",
        },
        {
          title: "Ticaret ve lojistik",
          text: "1915 Çanakkale Köprüsü sonrası Lapseki ve Çardak çevresinde yerel ürünlerin tanıtımı ve ticaretine yönelik yeni odaklar.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Ziyaretçi deneyimi üzerine çalışmalarımız",
      intro: "Bu projeler Çanakkale'de yapılmadı; bir yeri anlatmak, konuk ağırlamak ve yoğunluğu yönetmek üzerine neler kurabildiğimizi gösteriyor.",
      projects: [
        { id: "kadraj-rotam", note: "Yerel ve küresel rotaları, saha notlarını ve keşif rehberlerini sunan platform; bir bölgenin rotalarını dijitalde anlatmanın örneği." },
        { id: "mavi-kadraj-otel", note: "Oda sayfaları, galeri ve adım adım rezervasyon talebiyle otel ve pansiyon sitesi örneği." },
        { id: "mk-resepsiyon", note: "Oda planı, misafir girişi ve tahsilatı bağlayan resepsiyon sistemi." },
        { id: "mk-adisyon", note: "Garson, mutfak ve kasayı aynı akışta buluşturan adisyon ürünü." },
      ],
    },
    {
      kind: "faq",
      heading: "Çanakkale'deki işletmeler için sorular",
      items: [
        {
          question: "Yabancı ziyaretçiler için sitemizi birden fazla dilde yapabilir misiniz?",
          answer:
            "Evet. Türkçe ile başlayıp ziyaretçi profilinize göre İngilizce ya da başka dilleri ekleyebiliriz. Tarihî bilgilerde ve tur içeriklerinde çevirinin doğruluğunu sizinle birlikte kontrol ederiz.",
        },
        {
          question: "Tur firmamızın programları sık değişiyor; siteyi kim güncelleyecek?",
          answer:
            "Program, tarih ve fiyat gibi bilgileri kendi güncelleyebileceğiniz bir yapıda kurarız; tasarım değişikliği gerektiren işlerde destek hizmetimizle yanınızda oluruz.",
        },
        {
          question: "Adada internet zayıf; adisyon sistemi çalışır mı?",
          answer:
            "Sistem web tabanlı olduğu için bağlantıya ihtiyaç duyar. İşletmenizdeki bağlantı koşullarını baştan konuşur, gerekirse kurulumu buna göre planlarız; mümkün olmayan bir şeyi vaat etmeyiz.",
        },
      ],
    },
  ],
  cta: {
    title: "Çanakkale'ye gelen ziyaretçiyle doğrudan buluşun.",
    text: "İşletmenizi, ziyaretçilerinizi ve sezonunuzu anlatın; web sitesinden rezervasyona uzanan ilk adımı birlikte planlayalım.",
    whatsapp: "Merhaba, Çanakkale'deki işletmem için web sitesi / rezervasyon sistemi hakkında bilgi almak istiyorum.",
  },
  sources: [
    { label: "Çanakkale Valiliği: 1915 Çanakkale Köprüsü Bölgemize Ekonomik Hareketlilik Getirdi", url: "https://canakkale.gov.tr/mega-proje-1915-canakkale-koprusu-bolgemize-ekonomik-hareketlilik-getirdi" },
    { label: "Çanakkale İl Kültür ve Turizm Müdürlüğü: Troya Ören Yeri", url: "https://canakkale.ktb.gov.tr/TR-70511/troya-oren-yeri.html" },
    { label: "Çanakkale İl Kültür ve Turizm Müdürlüğü: Gelibolu Tarihi Alanı", url: "https://canakkale.ktb.gov.tr/TR-70574/canakkale-savaslari-gelibolu-tarihi-alani-eceabat.html" },
    { label: "GMKA: Bu Projeler Çanakkale Turizmine Değer Katacak", url: "https://www.gmka.gov.tr/haber/bu-projeler-canakkale-turizmine-deger-katacak" },
  ],
};
