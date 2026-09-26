import type { CityPage } from "./types";

export const bartin: CityPage = {
  id: "bartin",
  name: "Bartın",
  region: "karadeniz",
  ready: true,
  meta: {
    title: "Bartın ve Amasra Web Tasarım: Pansiyon, Otel, Restoran | MK Digital Systems",
    description:
      "Bartın ve Amasra'daki pansiyon, otel ve balık restoranları için doğrudan rezervasyon alan web siteleri, oda planı ve adisyon sistemleri.",
  },
  eyebrow: "Bartın · Amasra",
  title: "Amasra'ya gelen misafir önce telefonuna bakıyor. Bartın'ın işletmeleri orada karşılamalı.",
  lead:
    "Bartın'ın ekonomisinde turizm, özellikle Amasra'nın tarihi yarımadası ve koyları etrafında dönüyor. Pansiyon, otel ve restoran işletmeleri için misafiri doğrudan size ulaştıran web siteleri ve yoğun günleri düzenleyen sistemler kuruyoruz.",
  hero: {
    src: "/cities/bartin.webp",
    alt: "Akşam mavisinde, üzerinde eski surlar bulunan kayalık yarımada ve sakin deniz",
    kind: "illustration",
    caption: "Amasra yarımadası ve surlar, akşam saatleri.",
    focus: "65% 55%",
    source: "Mustafa tarafından eklenecek; Amasra yarımadası temalı üretilmiş görsel",
  },
  summary: "Amasra turizmi, pansiyonlar ve balık restoranları: doğrudan rezervasyon ve düzenli yoğunluk.",
  blocks: [
    {
      kind: "story",
      heading: "Irmağın ve yarımadanın şehri",
      paragraphs: [
        "Bartın, adını eski çağlarda Parthenios olarak bilinen Bartın Irmağı'ndan alıyor. Irmak, Karadeniz'e ulaşana kadar yaklaşık 14 kilometre boyunca sakin akıyor ve tekne gezilerine elverişli; şehrin kıyıyla bağını bugün de canlı tutuyor.",
        "Amasra ise Karadeniz'in incisi olarak anılan, tarihi surları ve koylarıyla ilin turizm yüzü. Burada geçim kaynakları çeşitli: madencilik, turizm, seracılık, hayvancılık ve balıkçılık bir arada. Merkezde ve Çakraz'da otellerin, köylerde pansiyonların olduğu küçük ama canlı bir konaklama ekonomisi var.",
        "Bölgenin coğrafyası uzun süre ulaşımı zorlaştırdı; son yıllarda açılan yollar bu tabloyu değiştiriyor. Ulaşım kolaylaştıkça misafirin karşılaştırma yaptığı yer de ekran oluyor.",
      ],
    },
    {
      kind: "needs",
      heading: "Amasra ve Bartın'da dijitalin karşılığı",
      items: [
        {
          title: "Aracıya bağımlı olmadan rezervasyon",
          text: "Misafirin odaları, fiyat aralığını ve konumu görüp doğrudan sizinle iletişime geçebildiği, sade ve hızlı bir site.",
        },
        {
          title: "Yaz yoğunluğunda düzen",
          text: "Aynı hafta sonu için gelen talepleri, kaporaları ve giriş-çıkışları karışmadan tek ekranda görmek.",
        },
        {
          title: "Balık restoranında hızlı servis",
          text: "Kalabalık akşamlarda masadan mutfağa, mutfaktan kasaya giden siparişin kâğıtta kaybolmaması.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Bartın'da önerdiğimiz sıra",
      intro: "Bartın'daki işletmelerin çoğu için ilk adım görünür olmak; ardından yoğunluğu yöneten sistemler geliyor.",
      items: [
        {
          id: "web",
          text: "Pansiyon, otel ve restoranlar için telefonda hızlı açılan, fotoğrafları iyi gösteren, WhatsApp ve telefonla doğrudan ulaşılabilen web siteleri.",
        },
        {
          id: "business",
          text: "Oda planı, giriş-çıkış ve tahsilat için resepsiyon sistemi; restoranlar için masa, mutfak ve kasayı bağlayan adisyon sistemi.",
        },
        {
          id: "mobile",
          text: "Sezonluk ekiplerin kolayca öğrenebileceği, telefondan kullanılan sipariş ve oda durumu ekranları.",
        },
        {
          id: "custom",
          text: "Tekne turu, etkinlik ya da birden fazla işletmeyi birlikte yöneten girişimler için işinize özel kurgulanan sistemler.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Konaklama ve restoran için yaptıklarımız",
      intro:
        "Aşağıdaki çalışmalar Bartın'da yapılmadı; ancak Amasra'daki bir pansiyonun ya da restoranın ihtiyaçlarına çok yakın problemleri çözüyor.",
      projects: [
        { id: "mavi-kadraj-otel", note: "Oda sayfaları, galeri ve adım adım rezervasyon talebiyle bir otel ve pansiyon sitesinin örneği." },
        { id: "mk-resepsiyon", note: "Oda planı, misafir girişi ve tahsilatı bağlayan resepsiyon sistemi." },
        { id: "mavi-kafe", note: "Dijital menü, galeri ve rezervasyon akışıyla kafe ve restoran sitesi örneği." },
        { id: "kadraj-rotam", note: "Rotalar, saha notları ve keşif rehberleri sunan platform; bir yerin hikâyesini dijitalde anlatmanın örneği." },
      ],
    },
    {
      kind: "note",
      heading: "Sezonluk bir işletme için sezonluk bir plan",
      paragraphs: [
        "Turizm işletmelerinde en doğru zaman sezon öncesi. Siteyi ve rezervasyon kurgusunu kışın hazırlayıp baharda yayına almak, ilk yoğun hafta sonunu sistemle karşılamanızı sağlar.",
        "Sezon içinde büyük değişiklik yerine küçük düzeltmeler yapar, sezon sonunda neyin işe yaradığına birlikte bakarız.",
      ],
    },
    {
      kind: "faq",
      heading: "Bartın'daki işletmeler için sorular",
      items: [
        {
          question: "Sadece yazın açık olan bir pansiyon için web sitesi mantıklı mı?",
          answer:
            "Evet; misafirlerin çoğu tatil planını aylar önce yapıyor. Kışın da açık duran ve talep toplayan bir site, sezonu daha dolu başlatmanıza yardım eder.",
        },
        {
          question: "Fotoğraflarım yeterince iyi değil; ne yapabiliriz?",
          answer:
            "Mevcut fotoğrafları seçip düzenleyerek başlarız. Daha iyi görseller gerektiğini düşünürsek hangi karelerin çekilmesi gerektiğini listeleyip sizinle ya da çalıştığınız fotoğrafçıyla paylaşırız.",
        },
        {
          question: "Adisyon sistemi için özel donanım almam gerekir mi?",
          answer:
            "Sistem web üzerinde çalışıyor; tablet, telefon ya da bilgisayarla kullanılabilir. Hangi cihazların nerede duracağını işletmenizin düzenine göre birlikte planlarız.",
        },
      ],
    },
  ],
  cta: {
    title: "Bu sezonu Bartın'da daha düzenli karşılayın.",
    text: "İşletmenizi, oda ya da masa sayınızı ve bugün rezervasyonu nasıl aldığınızı anlatın; sezon öncesi için bir plan çıkaralım.",
    whatsapp: "Merhaba, Bartın/Amasra'daki işletmem için web sitesi ve rezervasyon sistemi hakkında bilgi almak istiyorum.",
  },
  sources: [
    { label: "Bartın Valiliği: Bartın Irmağı", url: "http://www.bartin.gov.tr/bartin-irmagi" },
    { label: "Bartın Valiliği: Amasra Kültür ve Turizm", url: "https://www.bartin.gov.tr/amasra-kultur---turizm1" },
    { label: "Bartın İl Kültür ve Turizm Müdürlüğü: Amasra", url: "https://bartin.ktb.gov.tr/TR-68972/amasra.html" },
    {
      label: "Bartın Valiliği: Çakraz-Karaman Karayolu Açıldı",
      url: "http://www.bartin.gov.tr/umhurbaskani-sayin-recep-tayyip-erdoganin-telekonferansla-katildigi-cakraz-karaman-karayolu-duzenlenen-torenle-acildi",
    },
  ],
};
