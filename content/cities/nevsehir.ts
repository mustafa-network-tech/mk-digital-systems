import type { CityPage } from "./types";

export const nevsehir: CityPage = {
  id: "nevsehir",
  name: "Nevşehir",
  region: "ic-anadolu",
  ready: true,
  meta: {
    title: "Nevşehir ve Kapadokya Web Tasarım: Otel ve Tur | MK Digital Systems",
    description:
      "Kapadokya'daki mağara oteller, tur ve balon işletmeleri, restoranlar ve kaya depolar için resepsiyon, rezervasyon, adisyon ve web siteleri.",
  },
  eyebrow: "Nevşehir · Kapadokya",
  title: "Kapadokya'da gün balonla başlıyor; Nevşehir'de rezervasyon ondan çok önce.",
  lead:
    "Nevşehir, Kapadokya'nın peribacaları, yeraltı şehirleri ve balonlarıyla dünyanın dört bir yanından misafir ağırlıyor. Mağara otellerden tur firmalarına, restoranlardan kaya depolara kadar Nevşehir'deki işletmeler için misafiri ve operasyonu yöneten sistemler kuruyoruz.",
  hero: {
    src: "/cities/nevsehir.webp",
    alt: "Gün doğumunda Kapadokya vadisi, peribacaları ve gökyüzünde sıcak hava balonları",
    kind: "photo",
    caption: "Nevşehir, Kapadokya",
    focus: "50% 45%",
    source: "Mavi Kadraj arşivi: KONULAR/Sıcak Hava Balonları/f59ba3a2-10e4-4a37-8c05-49fb052e1fc4-1_all_5283.jpg (önerilen kare; Mustafa'nın notuyla Kapadokya)",
  },
  summary: "Kapadokya turizmi, mağara oteller ve balon turları; patates ve kaya depolar.",
  blocks: [
    {
      kind: "story",
      heading: "Taşın içine oyulmuş bir bölge",
      paragraphs: [
        "Göreme Açık Hava Müzesi'nde 4. yüzyıldan 13. yüzyıla kadar yoğun bir manastır hayatı yaşandı; neredeyse her kaya kütlesinin içine kilise, şapel, yemekhane ve yaşam alanı oyuldu. Bölge, UNESCO Dünya Mirası Listesi'nde yer alıyor.",
        "Bugün Ürgüp, Avanos, Göreme, Ortahisar ve Uçhisar'da ekonominin merkezinde turizm var. Balon turları, Hacıbektaş'ta inanç turizmi ve Kozaklı'da termal turizm bu tabloyu çeşitlendiriyor.",
        "Kayaya oyulan mekânların bir başka kullanımı ise depolama: Nevşehir'deki kaya depolarda patates ve narenciye saklanıyor; depoculuk ilin ticaretinin önemli bir parçası.",
      ],
    },
    {
      kind: "needs",
      heading: "Kapadokya işletmelerinin günlük soruları",
      items: [
        {
          title: "Aynı misafir, birçok hizmet",
          text: "Oda, balon turu, transfer ve akşam yemeği; tek misafirin birden fazla hizmetini karışmadan takip etmek.",
        },
        {
          title: "Farklı dillerde misafir",
          text: "Dünyanın farklı ülkelerinden gelen misafire bilgiyi anlayacağı dilde ve telefonda hızlıca sunmak.",
        },
        {
          title: "Aracıya bağımlılığı azaltmak",
          text: "Rezervasyon platformlarının yanında, misafirin doğrudan size ulaşabileceği güvenilir bir kanal.",
        },
        {
          title: "Depoda kimin ürünü, ne kadar?",
          text: "Kaya depolarda hangi müşterinin hangi ürününün, ne kadar süredir ve hangi bölümde durduğunu kayıt altında tutmak.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Nevşehir'de çözüm önceliğimiz",
      intro: "Kapadokya'da misafirin deneyimi resepsiyonda başlayıp telefonunda devam ediyor; bu yüzden yönetim sistemi ve mobil deneyim öne çıkıyor.",
      items: [
        {
          id: "business",
          text: "Mağara oteller ve butik oteller için oda planı, misafir girişi, ek hizmet ve tahsilatı bir araya getiren resepsiyon sistemleri; restoranlar için adisyon.",
        },
        {
          id: "mobile",
          text: "Tur ve balon işletmeleri için misafir, program ve toplama noktası bilgilerini ekiplerin telefonunda gösteren uygulamalar.",
        },
        {
          id: "web",
          text: "Oteller ve tur firmaları için birden fazla dilde hazırlanabilen, doğrudan rezervasyon talebi alan siteler.",
        },
        {
          id: "custom",
          text: "Kaya depo işletmeleri için müşteri, ürün, bölüm ve süreye göre stok ve kira kaydı tutan özel yazılımlar.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Konaklama ve operasyon için yaptıklarımız",
      intro: "Bu çalışmalar Nevşehir'de yapılmadı; ancak bir Kapadokya otelinin, restoranının ya da tur işletmesinin ihtiyacına çok yakın.",
      projects: [
        { id: "mk-resepsiyon", note: "Otel ve pansiyonlarda oda planını, misafir girişini ve tahsilatı bağlayan operasyon sistemi." },
        { id: "mavi-kadraj-otel", note: "Oda sayfaları, galeri ve adım adım rezervasyon talebiyle otel sitesi örneği." },
        { id: "mk-adisyon", note: "Garson, mutfak ve kasayı aynı akışta buluşturan adisyon ürünü." },
        { id: "kadraj-rotam", note: "Rotaları, saha notlarını ve keşif rehberlerini sunan platform; bir bölgenin deneyimini dijitalde anlatmanın örneği." },
      ],
    },
    {
      kind: "economy",
      heading: "Turizmin yanında Nevşehir ekonomisi",
      intro: "Nevşehir'in ekonomisi tarım ve turizme dayanıyor; il merkezinde ticaret, Kapadokya bölgesinde turizm öne çıkıyor.",
      sectors: [
        {
          title: "Turizm",
          text: "Ürgüp, Avanos, Göreme, Ortahisar ve Uçhisar'da istihdamın başında gelen sektör.",
        },
        {
          title: "Patates",
          text: "2017'de Türkiye patates üretiminin yaklaşık yüzde 5,4'ü Nevşehir'den geldi.",
        },
        {
          title: "Depoculuk",
          text: "Patates ve narenciye için kaya depolar; ilin ticaretinde önemli bir hizmet kolu.",
        },
      ],
    },
    {
      kind: "faq",
      heading: "Nevşehir'deki işletmeler için sorular",
      items: [
        {
          question: "Balon turu ve konaklamayı aynı sistemde takip edebilir miyiz?",
          answer:
            "Evet; bir misafirin odasını ve aldığı ek hizmetleri aynı kayıtta toplayabiliriz. Tur operasyonunun ayrıntı seviyesini, iş birliği yaptığınız firmalarla nasıl çalıştığınıza göre belirleriz.",
        },
        {
          question: "Rezervasyon platformlarıyla çalışmaya devam edebilir miyiz?",
          answer:
            "Elbette. Amacımız platformları bırakmanız değil, doğrudan gelen misafirin de kolayca rezervasyon talebi bırakabileceği bir kanal kurmak. Otomatik bağlantılar platformun sunduğu imkânlara bağlıdır.",
        },
        {
          question: "Kaya depomuzun kaydını hâlâ defterde tutuyoruz; nereden başlamalıyız?",
          answer:
            "Önce giriş ve çıkış kaydını dijitale taşıyan sade bir ekranla başlamayı öneriyoruz. Müşteri bazlı raporlar ve faturalama, bu kayıt oturduktan sonra eklenebilir.",
        },
      ],
    },
  ],
  cta: {
    title: "Kapadokya'daki işletmeniz için sezonu sistemle karşılayın.",
    text: "Otel, tur, restoran ya da depo; bugün misafirinizi ve işinizi nasıl takip ettiğinizi anlatın, ilk adımı birlikte seçelim.",
    whatsapp: "Merhaba, Nevşehir/Kapadokya'daki işletmem için rezervasyon / yönetim sistemi hakkında bilgi almak istiyorum.",
  },
  sources: [
    { label: "Nevşehir Valiliği: Ekonomik Yapı", url: "https://www.nevsehir.gov.tr/kurumlar/nevsehir.gov.tr/ilimizrehber/2018yeni/ekonomik.pdf" },
    { label: "Nevşehir Valiliği: UNESCO Dünya Kültür Mirasında Kapadokya", url: "http://www.nevsehir.gov.tr/unesco-dunya-kultur-mirasinda-yer-alan-essiz-doganin-adresi-kapadokyayi-kesfet" },
    { label: "Ahiler Kalkınma Ajansı: Nevşehir Kapadokya Turizm Yatırım Olanakları Raporu", url: "https://www.ahika.gov.tr/dokuman-merkezi/sektor-raporlari/nevsehir-kapadokya-turizm-yatirim-olanaklari-raporu" },
  ],
};
