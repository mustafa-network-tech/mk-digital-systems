import type { CityPage } from "./types";

export const duzce: CityPage = {
  id: "duzce",
  name: "Düzce",
  region: "karadeniz",
  ready: true,
  meta: {
    title: "Düzce Yazılım ve Web Tasarım: OSB ve Fındık | MK Digital Systems",
    description:
      "Düzce'deki üreticiler, OSB tedarikçileri ve fındık işletmeleri için üretim takibi, alım kaydı, B2B web sitesi ve işletme yönetim sistemleri.",
  },
  eyebrow: "Düzce · Batı Karadeniz",
  title: "Fındık bahçesinden OSB hattına: Düzce'nin işi kayıtla büyür.",
  lead:
    "Düzce'de ekonominin iki kolu yan yana çalışır: kıyıya doğru uzanan fındık bahçeleri ve organize sanayi bölgelerindeki fabrikalar. Bu iki dünyada da işin sağlıklı yürümesi, kaydın tutulmasına ve bilginin zamanında doğru kişiye ulaşmasına bağlı.",
  summary: "Fındık, OSB'lerdeki imalat ve tedarik: üretim takibi, alım kaydı ve B2B site.",
  blocks: [
    {
      kind: "economy",
      heading: "Düzce'nin üretim haritası",
      intro:
        "Düzce, küçük yüzölçümüne rağmen birden fazla organize sanayi bölgesi olan bir il. Tekstilden metal ve makineye, gıdadan orman ürünleri ve mobilyaya kadar geniş bir imalat yelpazesi, fındıkla birlikte ilin ekonomisini taşıyor.",
      sectors: [
        {
          title: "Organize sanayi bölgeleri",
          text: "Birinci OSB'de 47 tesis ve yaklaşık 4.900 çalışan var; ikinci OSB, Çilimli ve Gümüşova OSB'leri bunu tamamlıyor.",
        },
        {
          title: "Tekstil, metal ve makine",
          text: "İlin öne çıkan imalat kolları. Siparişe göre çalışan, müşterisi büyük firmalar olan tedarikçi işletmeler çoğunlukta.",
        },
        {
          title: "Fındık",
          text: "Akçakoca'da yaklaşık 220 bin dekar alanda fındık yetişiyor. Alım, depolama ve işleme, ilin tarımla sanayiyi buluşturduğu yer.",
        },
        {
          title: "Orman ürünleri ve mobilya",
          text: "Orman varlığına dayanan imalat ve mobilya işletmeleri; ölçüye göre üretim, teklif ve teslim takibi.",
        },
      ],
    },
    {
      kind: "story",
      heading: "Kıyı ile sanayi arasında bir şehir",
      paragraphs: [
        "Düzce, Karadeniz kıyısındaki Akçakoca'dan iç kesimdeki sanayi bölgelerine kadar kısa mesafede çok farklı işlerin yapıldığı bir il. Fındık sezonu açıldığında kıyı köyleri hareketlenirken, OSB'lerdeki fabrikalar yıl boyu vardiyayla çalışıyor.",
        "İlde son yıllarda fındığı daha fazla katma değerle işlemeye yönelik çalışmalar da yapılıyor; Düzce Üniversitesi bünyesinde açılan Fındık Dönüşüm Merkezi bunun bir örneği. Bu tür dönüşümler, üretimin yanında kaydın ve verinin de önem kazandığı bir dönemi işaret ediyor.",
      ],
    },
    {
      kind: "solutions",
      heading: "Düzce için çözüm önceliğimiz",
      intro:
        "Düzce'de ilk sırada özel yazılım var; çünkü buradaki işletmelerin çoğu hazır bir yazılıma sığmayan, kendine özgü bir üretim ya da alım akışıyla çalışıyor.",
      items: [
        {
          id: "custom",
          text: "Sipariş, iş emri, vardiya ve sevkiyat adımlarını fabrikanızın gerçek akışına göre kuran üretim takip yazılımları; fındık alımında müstahsil, tartım ve ödeme kayıtları.",
        },
        {
          id: "business",
          text: "Stok, cari hesap, personel ve günlük iş takibini tek panelde toplayan yönetim sistemleri; birden fazla şube ya da depo için ortak görünüm.",
        },
        {
          id: "web",
          text: "Büyük firmalara tedarik yapan işletmeler için kapasite, sertifika ve ürün gamını net anlatan kurumsal ve B2B web siteleri.",
        },
        {
          id: "mobile",
          text: "Saha, depo ve üretim ekiplerinin telefondan kayıt girdiği, fotoğraf eklediği uygulamalar.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Sahada gördüğümüz ihtiyaçlar",
      intro: "Düzce'deki üretici ve tedarikçi işletmelerde benzer tablolar sık karşımıza çıkabilir:",
      items: [
        {
          title: "Excel'de dağılan iş emirleri",
          text: "Her vardiyanın ayrı bir dosyası, her müşterinin ayrı bir listesi; hangi siparişin nerede beklediğini görmek için telefon trafiği.",
        },
        {
          title: "Sezonluk alımda hızlı ve güvenilir kayıt",
          text: "Fındık sezonunda kısa sürede yapılan çok sayıda alımın tartım, randıman ve ödeme bilgisiyle birlikte hatasız tutulması.",
        },
        {
          title: "Büyük müşteriye güven veren bir vitrin",
          text: "Tedarikçi seçerken internete bakan satın alma ekiplerine kapasiteyi, makine parkını ve kalite belgelerini düzenli göstermek.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Üretim ve takip üzerine yaptıklarımız",
      intro:
        "Bu projeler Düzce'deki bir işletme için yapılmadı; üretim, iş takibi ve B2B vitrin gibi Düzce'de karşılığı olan konulardaki yetkinliğimizi gösteriyor.",
      projects: [
        { id: "gunluk-imalat", note: "Üretim sahasındaki günlük imalat kayıtlarını dijital bir karta dönüştüren uygulama; vardiya bazlı kayıt mantığının örneği." },
        { id: "is-takip", note: "Günlük işlerin durumunu ve sorumlusunu tek yerde izleyen iş takip uygulaması." },
        { id: "mavi-yapi", note: "Ürün kataloğu, kategori sayfaları ve teklif formuyla iki dilli bir B2B tedarik sitesi örneği." },
      ],
    },
    {
      kind: "faq",
      heading: "Düzce'deki üreticilerin sorabileceği sorular",
      items: [
        {
          question: "Mevcut Excel dosyalarımızı yeni sisteme taşıyabilir miyiz?",
          answer:
            "Evet. Dosyalarınızı inceleyip hangi bilgilerin kalıcı kayda dönüşeceğini birlikte belirleriz; aktarımı projenin bir adımı olarak planlarız.",
        },
        {
          question: "Fındık alımı için ayrı bir modül mü gerekir?",
          answer:
            "Alım sadece sezonluk bir işse sade bir kayıt ekranı yeterli olabilir; işleme ve satış da yapıyorsanız alımı stok ve sevkiyatla aynı sistemde bağlamak daha doğru olur.",
        },
        {
          question: "Vardiyalı çalışan bir fabrikada ekip sistemi nasıl kullanır?",
          answer:
            "Her rol için yalnızca ihtiyaç duyduğu ekranı tasarlarız: operatör için hızlı kayıt, şef için vardiya özeti, yönetim için günlük ve haftalık görünüm.",
        },
        {
          question: "Önce küçük bir kapsamla başlayabilir miyiz?",
          answer:
            "Evet, çoğu zaman öyle başlamayı öneriyoruz. En çok zaman kaybettiren tek bir akışı dijitale taşıyıp kullanımdan sonra genişletmek hem riski hem maliyeti azaltır.",
        },
      ],
    },
  ],
  cta: {
    title: "Düzce'deki üretiminizi birlikte netleştirelim.",
    text: "Bugün kaydı nasıl tuttuğunuzu ve nerede zaman kaybettiğinizi anlatın; ilk adım için somut bir kapsam önerelim.",
    whatsapp: "Merhaba, Düzce'deki işletmemiz için üretim takibi / yazılım hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Düzce Valiliği: Sanayi ve Ticaret", url: "https://www.duzce.gov.tr/sanayi-ve-ticaret" },
    { label: "Düzce Valiliği: Akçakoca", url: "https://www.duzce.gov.tr/akcakoca" },
    { label: "Düzce TSO: Fındık Dönüşüm Merkezi Açıldı", url: "https://duzcetso.org.tr/detay/11838-findik-donusum-merkezi-acildi" },
  ],
};
