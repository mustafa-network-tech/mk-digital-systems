import type { CityPage } from "./types";

export const edirne: CityPage = {
  id: "edirne",
  name: "Edirne",
  region: "marmara",
  ready: true,
  meta: {
    title: "Edirne Web Tasarım ve Yazılım: Sınır Ticareti ve Turizm | MK Digital Systems",
    description:
      "Edirne'deki otel, restoran, lojistik ve tarım işletmeleri için web sitesi, rezervasyon ve adisyon, sevkiyat ve alım kaydı tutan yazılımlar.",
  },
  eyebrow: "Edirne · Avrupa'ya açılan kapı",
  title: "Edirne'den her gün binlerce kişi geçiyor; bir kısmı sizi arıyor.",
  lead:
    "Edirne, Kapıkule ile Türkiye'nin Avrupa'ya açılan kapısı; Selimiye ve Kırkpınar ile de dünyanın tanıdığı bir miras şehri. Buradaki otel, restoran, lojistik ve tarım işletmeleri için ziyaretçiyi, yolcuyu ve yükü düzenli karşılayan dijital çözümler geliştiriyoruz.",
  summary: "Kapıkule, Selimiye ve Kırkpınar; pirinç ve ayçiçeği: konaklama, lojistik ve tarım.",
  blocks: [
    {
      kind: "story",
      heading: "İki UNESCO mirası, bir sınır kapısı",
      paragraphs: [
        "Selimiye Camii, Osmanlı mimarisinin ustalığını gösteren yapısıyla UNESCO Dünya Mirası Listesi'nde. Altı yüzyılı aşkın geçmişiyle dünyanın en eski spor organizasyonlarından biri olan Kırkpınar Yağlı Güreşleri de UNESCO'nun kültürel miras listesinde yer alıyor.",
        "Kapıkule ise hem Türkiye'nin hem Avrupa'nın en büyük sınır kapısı. Yük ve yolcu trafiğiyle Edirne'yi sınır ticaretinde stratejik bir noktaya taşıyor.",
      ],
    },
    {
      kind: "economy",
      heading: "Edirne'nin ekonomik dokusu",
      intro: "Edirne'nin ekonomisi tarım, turizm, sanayi ve ticaretin birbirini beslediği dinamik bir yapıya sahip.",
      sectors: [
        {
          title: "Tarım: pirinç ve ayçiçeği",
          text: "Geniş ovalarda buğday, ayçiçeği, pirinç ve mısır; Edirne, Türkiye'nin önemli pirinç üreticilerinden.",
        },
        {
          title: "Sınır ticareti ve lojistik",
          text: "Kapıkule üzerinden Avrupa'ya uzanan ticaret; taşımacılık, gümrük ve depolama hizmetleri.",
        },
        {
          title: "Kültür turizmi",
          text: "Selimiye, tarihi köprüler ve Kırkpınar dönemi; yıl boyu gelen ziyaretçi ve hafta sonu turları.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Edirne için önerdiğimiz çözümler",
      intro: "Ziyaretçi ve yolcu trafiği web sitesini öne çıkarıyor; lojistik ve tarım tarafında işe özel yazılım devreye giriyor.",
      items: [
        {
          id: "web",
          text: "Otel, restoran ve tur işletmeleri için Türkçe ve gerektiğinde farklı dillerde, mobilde hızlı açılan tanıtım ve rezervasyon talebi siteleri.",
        },
        {
          id: "custom",
          text: "Lojistik ve gümrük hizmeti veren firmalar için yük, belge ve teslim adımlarını takip eden; pirinç ve hububat işletmeleri için alım ve depo kaydı tutan yazılımlar.",
        },
        {
          id: "mobile",
          text: "Şoförler ve saha ekipleri için teslim, fotoğraf ve belge kaydı alınan uygulamalar.",
        },
        {
          id: "business",
          text: "Otel ve restoranlar için resepsiyon ve adisyon; ticari işletmeler için stok ve cari yönetimi.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Edirne'de sık rastlanabilecek ihtiyaçlar",
      items: [
        {
          title: "Kırkpınar ve bayram yoğunluğu",
          text: "Belirli haftalarda katlanan misafir ve masa trafiğinde rezervasyonun ve siparişin karışmaması.",
        },
        {
          title: "Yükün ve belgenin aynı yerde takibi",
          text: "Taşıma ve gümrük işlerinde aracın, yükün ve evrakın durumunu tek ekranda görmek.",
        },
        {
          title: "Hasatta alım kaydı",
          text: "Çeltik ve ayçiçeği alımında üretici, miktar, nem ve ödeme bilgisinin doğru tutulması.",
        },
      ],
    },
    {
      kind: "work",
      heading: "İlgili projelerimiz",
      intro: "Bu projeler Edirne'de yapılmadı; lojistik, konaklama ve restoran tarafında kurabildiğimiz yapıları gösteriyor.",
      projects: [
        { id: "mk-kargo", note: "Fiyat hesaplayan müşteri sitesi ve siparişleri yöneten operasyon paneliyle kargo ve lojistik ürünü." },
        { id: "mavi-kadraj-otel", note: "Oda sayfaları, galeri ve rezervasyon talebiyle otel sitesi örneği." },
        { id: "mk-adisyon", note: "Garson, mutfak ve kasayı bağlayan adisyon ürünü; yoğun dönemler için tasarlandı." },
        { id: "mavi-gayrimenkul", note: "İlan arama, bölge rehberi ve değerleme talebiyle emlak ofisi sitesi örneği; şehir bilgisini sitede kullanmanın bir yolu." },
      ],
    },
    {
      kind: "note",
      heading: "Sınır şehrinde çok dilli site ne zaman gerekir?",
      paragraphs: [
        "Her işletmenin çok dilli bir siteye ihtiyacı yok. Misafirlerinizin ya da müşterilerinizin önemli bir kısmı sınırın öte yakasından geliyorsa, en azından temel bilgilerin onların dilinde olması güven verir.",
        "Önce Türkçe siteyi sağlam kurar, ziyaretçi verisine bakarak hangi dilin eklenmesi gerektiğine birlikte karar veririz.",
      ],
    },
    {
      kind: "faq",
      heading: "Edirne'deki işletmeler için sorular",
      items: [
        {
          question: "Otelimizin sitesi Bulgarca ya da Yunanca olabilir mi?",
          answer:
            "Olabilir. Çevirileri sizinle ya da çalıştığınız bir çevirmenle birlikte kontrol ederek ekleriz; yanlış ya da otomatik görünen metinler güveni zedeler.",
        },
        {
          question: "Gümrük süreçlerini de yazılıma ekleyebilir misiniz?",
          answer:
            "Kendi iç takibiniz için belge, aşama ve sorumlu kaydını kurabiliriz. Resmî gümrük sistemleriyle doğrudan bağlantı ayrı bir konu; bunun mümkün olup olmadığını proje başında açıkça değerlendiririz.",
        },
        {
          question: "Çeltik alımında nem ve randımanı da kaydedebilir miyiz?",
          answer:
            "Evet; alım ekranını tartım, nem ve randıman gibi sizin kullandığınız ölçülere göre tasarlar, ödeme hesabını bu bilgilere bağlayabiliriz.",
        },
      ],
    },
  ],
  cta: {
    title: "Edirne'deki işiniz için doğru kapıyı açalım.",
    text: "Otel, restoran, lojistik ya da tarım; bugün nasıl çalıştığınızı anlatın, önceliğinize göre ilk adımı planlayalım.",
    whatsapp: "Merhaba, Edirne'deki işletmemiz için web sitesi / yazılım hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Edirne Valiliği: Ekonomi", url: "http://www.edirne.gov.tr/ekonomi" },
    { label: "Edirne İl Kültür ve Turizm Müdürlüğü: Sınır Kapılarımız", url: "https://edirne.ktb.gov.tr/TR-76391/sinir-kapilarimiz.html" },
    { label: "Edirne İl Kültür ve Turizm Müdürlüğü: Kırkpınar Yağlı Güreşleri", url: "https://edirne.ktb.gov.tr/TR-76392/kirkpinar-yagli-guresleri.html" },
    { label: "Trakya Kalkınma Ajansı: Edirne Yatırım Ortamı", url: "https://www.trakyaka.org.tr/upload/Node/35520/xfiles/EDIRNE_YATIRIM_ORTAMI.pdf" },
  ],
};
