import type { CityPage } from "./types";

export const bolu: CityPage = {
  id: "bolu",
  name: "Bolu",
  region: "karadeniz",
  ready: true,
  meta: {
    title: "Bolu Web Tasarım: Konaklama, Mutfak ve Üretim | MK Digital Systems",
    description:
      "Bolu'daki otel, restoran ve gıda üreticileri için web sitesi, rezervasyon ve adisyon sistemleri ile üretim kayıtlarını tutan özel yazılımlar.",
  },
  eyebrow: "Bolu · Batı Karadeniz",
  title: "Bolu'da misafir kararını yolda veriyor; işletmeniz orada görünmeli.",
  lead:
    "İstanbul ile Ankara arasındaki yolun ortasında, ormanın ve göllerin şehrinde işletmelerin çoğu misafirle, mutfakla ya da üretimle yaşıyor. Bolu'daki işletmeler için web siteleri, rezervasyon ve adisyon sistemleri ile üretimi izleyen özel yazılımlar geliştiriyoruz.",
  summary: "Doğa turizmi, Mengen mutfağı ve gıda üretimi: rezervasyon, adisyon ve üretim kaydı.",
  blocks: [
    {
      kind: "story",
      heading: "Ormanın, yolun ve mutfağın şehri",
      paragraphs: [
        "Bolu'nun topraklarının yaklaşık üçte ikisi ormanla kaplı. Abant, Yedigöller ve Gölcük gibi yerler şehri hafta sonu kaçamaklarının ve dört mevsim süren doğa turizminin adresi yapıyor. İstanbul–Ankara hattının tam ortasında olmak ise yoldan geçen herkesi olası bir misafire dönüştürüyor.",
        "Mengen'in yüzyıllardır babadan oğula geçen aşçılık geleneği de bu hikâyenin parçası. Her haziranda düzenlenen Mengen Aşçılar ve Turizm Festivali, mutfağın Bolu'da bir meslekten fazlası olduğunu hatırlatıyor.",
        "Bu yüzden Bolu'da dijitalleşme çoğu zaman aynı soruya varıyor: Yolda telefonundan arama yapan misafir sizi bulabiliyor mu, bulduğunda rezervasyonu, siparişi ya da bilgiyi zahmetsizce alabiliyor mu?",
      ],
    },
    {
      kind: "economy",
      heading: "Bolu ekonomisinde öne çıkanlar",
      intro:
        "Bolu'nun ekonomisi doğa, gıda ve hizmetin kesiştiği yerde duruyor. İşletmelerin çoğu büyük değil; ama her birinin mevsime göre değişen bir misafir, tedarik ve ekip trafiği var.",
      sectors: [
        {
          title: "Doğa ve konaklama turizmi",
          text: "Göl çevreleri, yaylalar ve kayak merkezi etrafında otel, pansiyon, bungalov ve kamp işletmeleri; hafta sonu ve tatil dönemlerinde ani yoğunluk.",
        },
        {
          title: "Kanatlı ve gıda üretimi",
          text: "Bolu, beyaz et üretiminde Türkiye'nin öne çıkan illeri arasında. Kümesten sevkiyata uzanan zincirde kayıt ve izlenebilirlik günlük iş.",
        },
        {
          title: "Mutfak ve yol üstü lokantalar",
          text: "Mengen geleneğinden gelen aşçılar, yol üstü tesisler ve şehir lokantaları; yoğun saatlerde hızlı sipariş, doğru hesap.",
        },
        {
          title: "Orman varlığı",
          text: "Türkiye ormanlarının yaklaşık yüzde 2,5'i Bolu'da. Bu varlık hem turizmin hem de ormanla ilişkili işlerin arka planını oluşturuyor.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Bolu'daki işletmelerin sık karşılaştığı dijital ihtiyaçlar",
      items: [
        {
          title: "Yoldan gelen misafire hızlı cevap",
          text: "Telefonda hızlı açılan, konumu, fiyat aralığını ve iletişim yolunu ilk ekranda veren bir site; arama sonuçlarında doğru bilgiyle görünmek.",
        },
        {
          title: "Sezon yoğunluğunda oda ve masa takibi",
          text: "Hafta sonu dolan odaları, bekleyen rezervasyonları ve kaporaları mesaj kutusundan ve defterden çıkarıp tek listede görmek.",
        },
        {
          title: "Mutfakla salon arasında kaybolmayan sipariş",
          text: "Garsonun aldığı siparişin mutfağa ve kasaya aynı anda ulaşması; gün sonunda hesabın tek bakışta çıkması.",
        },
        {
          title: "Üretimde kayıt ve izlenebilirlik",
          text: "Parti, vardiya ya da kümes bazındaki günlük kayıtların dağınık Excel dosyaları yerine tek bir sistemde tutulması.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Bolu için önceliklendirdiğimiz çözümler",
      intro:
        "Sıralama Bolu'daki işletme yapısına göre yapıldı. Sizin önceliğiniz farklıysa ilk görüşmede birlikte belirleriz.",
      items: [
        {
          id: "web",
          text: "Konaklama ve restoran işletmeleri için mobilde hızlı açılan, rezervasyon ya da WhatsApp yönlendirmesi olan, arama motorlarının kolayca anlayacağı yapıda web siteleri.",
        },
        {
          id: "business",
          text: "Oda planını, misafir girişini ve tahsilatı bir araya getiren resepsiyon sistemleri; salon, mutfak ve kasayı bağlayan adisyon sistemleri.",
        },
        {
          id: "custom",
          text: "Gıda ve kanatlı üretiminde parti, vardiya ve sevkiyat kayıtlarını sizin iş akışınıza göre tutan özel yazılımlar.",
        },
        {
          id: "mobile",
          text: "Ekibin depoda, mutfakta ya da sahada telefondan kullanacağı sade uygulamalar; ihtiyaç netleştiğinde mobil sürüm.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Bu ihtiyaçlara yakın çalışmalarımız",
      intro:
        "Aşağıdaki projeler Bolu'da yapılmış işler değil. Bolu'daki işletmelerin ihtiyaçlarına benzeyen problemleri nasıl çözdüğümüzü gösteren örnekler.",
      projects: [
        { id: "mk-resepsiyon", note: "Otel ve pansiyonlarda oda planını, girişleri ve tahsilatı birbirine bağlayan operasyon sistemi." },
        { id: "mk-adisyon", note: "Garson, mutfak ve kasayı aynı sipariş akışında buluşturan adisyon ürünü; kalabalık akşamlar düşünülerek tasarlandı." },
        { id: "mavi-kadraj-otel", note: "Oda sayfaları ve adım adım rezervasyon akışıyla bir otel sitesinin nasıl kurgulanabileceğini gösteren örnek site." },
        { id: "mk-farm", note: "Hayvan bazlı kayıtları günlük işlerle birleştiren uygulama; üretimde izlenebilirliği nasıl kurduğumuzun örneği." },
      ],
    },
    {
      kind: "faq",
      heading: "Bolu'daki işletmeler için sorular",
      items: [
        {
          question: "Sezon dışında sitemdeki fiyat ve bilgileri kim güncelleyecek?",
          answer:
            "Oda, menü ve fiyat gibi sık değişen bilgiler için kendi güncelleyebileceğiniz alanlar kurarız. Daha kapsamlı değişiklikler için destek hizmetimizden yararlanabilirsiniz.",
        },
        {
          question: "Telefonla, WhatsApp'tan ve siteden gelen rezervasyonları tek yerde görebilir miyim?",
          answer:
            "Resepsiyon kurgusunda farklı kanallardan gelen talepleri aynı listede toplayabiliriz. Hangi kanalların bağlanacağını ve nasıl bağlanacağını ilk görüşmede birlikte netleştiririz.",
        },
        {
          question: "Hem konaklama hem restoran işletiyorum; iki ayrı sistem mi gerekir?",
          answer:
            "Gerekmez. İki işi birlikte yürüten işletmeler için resepsiyon ve adisyon tarafını ortak müşteri ve tahsilat kayıtlarıyla bağlayabiliriz; ihtiyaç yoksa ayrı tutarız.",
        },
        {
          question: "Bolu'da ofisiniz olmaması süreci nasıl etkiler?",
          answer:
            "Görüşmeleri çevrim içi, telefonla ve WhatsApp üzerinden yapıyor, her adımı ekran paylaşarak birlikte ilerletiyoruz. Siteniz için fotoğrafları sizden ya da çalıştığınız bir fotoğrafçıdan alıyoruz.",
        },
      ],
    },
  ],
  cta: {
    title: "Bolu'daki işiniz için ilk adımı birlikte atalım.",
    text: "İşletmenizi, misafirinizi ve bugün nasıl çalıştığınızı kısaca anlatın; size uygun çözümü ve başlangıç kapsamını birlikte netleştirelim.",
    whatsapp: "Merhaba, Bolu'daki işletmem için web sitesi ve yazılım hakkında bilgi almak istiyorum.",
  },
  sources: [
    { label: "Bolu Ticaret ve Sanayi Odası: Bolu Ekonomisi", url: "https://www.bolutso.org.tr/kurumsal/bolu/bolu-ekonomisi/" },
    { label: "Bolu Valiliği: Mengen", url: "https://www.bolu.gov.tr/mengen" },
    { label: "Bolu Valiliği: Bolu Mutfağı", url: "https://www.bolu.gov.tr/bolu-mutfagi" },
    {
      label: "Tarım ve Orman Bakanlığı: Kanatlı Hayvancılık Sektör Politika Belgesi 2023-2027",
      url: "https://www.tarimorman.gov.tr/TAGEM/Belgeler/yayin/Kanatl%C4%B1%20Hayvanc%C4%B1l%C4%B1k%20Sekt%C3%B6r%20Politika%20Belgesi%202023-2027.pdf",
    },
  ],
};
