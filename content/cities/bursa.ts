import type { CityPage } from "./types";

export const bursa: CityPage = {
  id: "bursa",
  name: "Bursa",
  region: "marmara",
  ready: true,
  meta: {
    title: "Bursa Yazılım ve Web Tasarım: Otomotiv ve Tekstil | MK Digital Systems",
    description:
      "Bursa'daki otomotiv yan sanayi, tekstil ve gıda işletmeleri için sipariş, üretim ve saha takibi yapan özel yazılımlar, yönetim sistemleri ve web siteleri.",
  },
  eyebrow: "Bursa · Osmanlı'nın ilk başkenti",
  title: "Hanlardan fabrikalara: Bursa'nın ticaret aklı yazılımda da işler.",
  lead:
    "Bursa, Türkiye'nin otomotiv ve tekstil üretiminde büyük pay sahibi, yüzyıllardır ticaretin şehri. Otomotiv yan sanayisinden tekstil atölyelerine, gıdadan çarşı esnafına kadar Bursa'daki işletmeler için sipariş, üretim ve müşteri takibini sadeleştiren sistemler geliştiriyoruz.",
  summary: "Otomotiv ve tekstil, UNESCO mirası hanlar bölgesi: tedarikçi, atölye ve çarşı için yazılım.",
  blocks: [
    {
      kind: "story",
      heading: "Bir imparatorluğun doğduğu ticaret şehri",
      paragraphs: [
        "Bursa, \"Bursa ve Cumalıkızık: Osmanlı İmparatorluğu'nun Doğuşu\" adıyla UNESCO Dünya Mirası Listesi'nde. Hanlar bölgesi, külliyeler ve 700 yıllık Cumalıkızık köyü, şehrin kuruluşundan beri bir ticaret ve üretim merkezi olduğunu gösteriyor.",
        "İpek ve kozanın ticaretini yapan hanlar, bugün yerini otomotiv ve tekstil fabrikalarına bıraktı; ama ticaretin mantığı aynı kaldı: doğru ürünü, doğru zamanda, doğru müşteriye ulaştırmak.",
        "Mudanya'daki Tirilye ise Bursa'nın öteki yüzü: Zeytiniyle ve eski zeytinyağı fabrikasıyla tanınan, tarihi yapılarını büyük ölçüde korumuş bir kıyı yerleşimi.",
      ],
    },
    {
      kind: "economy",
      heading: "Bursa'nın sanayi ağırlığı",
      intro:
        "Bursa Valiliği'nin aktardığına göre Bursa, Türkiye tekstilinin yaklaşık yüzde 22'sini, otomotiv üretiminin yaklaşık yüzde 34'ünü gerçekleştiriyor; ihracatın yaklaşık yüzde 7'si de buradan yapılıyor.",
      sectors: [
        {
          title: "Otomotiv ana ve yan sanayi",
          text: "Fabrikaların çevresinde kurulan geniş yan sanayi ağı; Bursa'yı Türkiye'nin otomotiv merkezi yapan tedarikçiler.",
        },
        {
          title: "Tekstil ve hazır giyim",
          text: "İpekten bugünün teknik tekstiline uzanan köklü bir üretim geleneği.",
        },
        {
          title: "Gıda, tarım ve hayvancılık",
          text: "Ovada ve kıyıda tarım, zeytin ve gıda işleme.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Bursa'daki işletmelerin ihtiyaçlarından bazıları",
      items: [
        {
          title: "Tedarik zincirinde hız",
          text: "Ana sanayinin talep ettiği teslim sürelerine uymak için sipariş, üretim ve sevkiyatı aynı ekranda görmek.",
        },
        {
          title: "Atölyeler arası koordinasyon",
          text: "Kesim, dikim ve paketleme gibi adımları farklı atölyelerde yürüten tekstil firmalarında işin nerede beklediğini bilmek.",
        },
        {
          title: "Çarşı esnafının dijital vitrini",
          text: "Hanlar bölgesi ve çarşılardaki köklü işletmelerin hikâyesini ve ürünlerini internette de anlatabilmesi.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Bursa için önerdiğimiz öncelik",
      intro: "Bursa'nın sanayi yapısı özel yazılımı ve yönetim sistemlerini öne çıkarıyor; web sitesi ise hem sanayici hem esnaf için vitrin.",
      items: [
        {
          id: "custom",
          text: "Otomotiv ve tekstil tedarikçileri için sipariş, iş emri, kalite ve sevkiyatı bağlayan, müşterinin izlenebilirlik beklentisini karşılayan özel yazılımlar.",
        },
        {
          id: "business",
          text: "Fason atölye, stok, personel ve cari takibi için yönetim sistemleri; birden fazla atölyeyi tek görünümde toplayan paneller.",
        },
        {
          id: "mobile",
          text: "Üretim şefleri, saha ve servis ekipleri için telefondan kayıt ve onay uygulamaları.",
        },
        {
          id: "web",
          text: "Tedarikçiler için güven veren kurumsal siteler; esnaf ve mağazalar için ürün ve iletişim odaklı siteler.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Bursa'nın ihtiyaçlarına yakın çalışmalarımız",
      intro: "Bursa'daki bir müşteriye ait işler değil; üretim, saha ve katalog konularında neler kurabildiğimizi gösteren örnekler.",
      projects: [
        { id: "gunluk-imalat", note: "Günlük imalat kayıtlarını dijital bir karta dönüştüren uygulama." },
        { id: "saha-santiye", note: "Birden fazla şirketin ekiplerini ve işlerini kendi alanında yönettiği operasyon sistemi; fason atölye ağlarına uyarlanabilir yapı." },
        { id: "mavi-yapi", note: "Katalog ve teklif formuyla iki dilli B2B tedarik sitesi örneği." },
        { id: "mavi-iletisim", note: "Ürün kataloğu, sepet ve servis talebiyle mağaza sitesi örneği; çarşıdaki bir işletmenin dijital vitrinine benzer." },
      ],
    },
    {
      kind: "note",
      heading: "Bursa gibi büyük bir pazarda neden biz?",
      paragraphs: [
        "Bursa'da çok sayıda yazılım firması var ve bu iyi bir şey. Bizim farkımız, sahadan gelen operasyon deneyimi ve her projeyi işin gerçek akışından başlatmamız: Önce sizi dinliyor, sonra ekranı çiziyoruz.",
        "Küçük ve orta ölçekli işletmelerle, büyük bir sistem yerine en çok zaman kaybettiren akışı çözen, sonra büyüyen projeler yapmayı tercih ediyoruz.",
      ],
    },
    {
      kind: "faq",
      heading: "Bursa'daki işletmeler için sorular",
      items: [
        {
          question: "Ana sanayi müşterimizin portalıyla çalışıyoruz; yeni sistem buna uyum sağlar mı?",
          answer:
            "Portaldan gelen ve portala gönderilen bilgileri proje başında listeler, sistemi bu alışverişi kolaylaştıracak şekilde kurarız. Otomatik bağlantı, portalın sunduğu imkânlara bağlıdır.",
        },
        {
          question: "Fason atölyelerimiz kendi ekranlarından iş güncelleyebilir mi?",
          answer:
            "Evet; her atölye yalnızca kendisine verilen işleri görür ve günceller, siz tüm işlerin aşamasını birlikte izlersiniz.",
        },
        {
          question: "Çarşıda küçük bir dükkânım var; web sitesi bana ne kazandırır?",
          answer:
            "Sizi arayan müşterinin ürünlerinizi, çalışma saatlerinizi ve konumunuzu kolayca bulmasını sağlar. Online satış şart değil; çoğu esnaf için iyi bir vitrin ve WhatsApp iletişimi iyi bir başlangıçtır.",
        },
      ],
    },
  ],
  cta: {
    title: "Bursa'daki işiniz için somut bir başlangıç yapalım.",
    text: "Tedarikçi, atölye ya da esnaf; bugünkü işleyişinizi anlatın, en çok vakit kaybettiğiniz yerden başlayan bir kapsam önerelim.",
    whatsapp: "Merhaba, Bursa'daki işletmemiz için yazılım / web sitesi hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Bursa Alan Başkanlığı: Bursa UNESCO Dünya Miras Listesi'nde", url: "https://alanbaskanligi.bursa.bel.tr/bursa-unesco-dunya-miras-listesinde/" },
    { label: "Bursa Valiliği: Daha Güzel Bursa İçin", url: "https://bursa.gov.tr/daha-guzel-bursa-icin2" },
    { label: "BEBKA: Bursa İli Otomotiv Sektörü Raporu", url: "https://bebka.org.tr/wp-content/uploads/2025/06/Otomotiv-Sektor-Raporu_26.pdf" },
    { label: "Mudanya Belediyesi: Tirilye", url: "https://mudanya.bel.tr/yerler/nostalji-sokaklar/tirilye" },
  ],
};
