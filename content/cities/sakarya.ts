import type { CityPage } from "./types";

export const sakarya: CityPage = {
  id: "sakarya",
  name: "Sakarya",
  region: "marmara",
  ready: true,
  meta: {
    title: "Sakarya Web Tasarım ve Yazılım: Adapazarı Sanayisi | MK Digital Systems",
    description:
      "Adapazarı ve Sakarya'daki otomotiv, raylı sistem ve makine tedarikçileri ile Sapanca'daki işletmeler için yazılım, web sitesi ve takip sistemleri.",
  },
  eyebrow: "Sakarya · Adapazarı",
  title: "Sakarya'da tedarik zinciri hızlı; takip sistemi de ona yetişmeli.",
  lead:
    "Adapazarı çevresinde otomobil, otobüs, traktör, raylı sistem araçları ve savunma sanayine üretim yapan işletmeler, büyük bir tedarik zincirinin halkaları. Sakarya'daki işletmeler için bu zincirde güven veren web siteleri ve işi kayıt altına alan yazılımlar geliştiriyoruz.",
  hero: {
    src: "/cities/sakarya.webp",
    alt: "Ovanın içinden kıvrılarak akan nehir, tarlalar ve uzakta göl",
    kind: "illustration",
    caption: "Sakarya ovası, kıvrılan nehir ve Sapanca yönü.",
    focus: "45% 50%",
    source: "Mustafa tarafından eklenecek; ova, nehir ve göl temalı üretilmiş görsel",
  },
  summary: "Otomotiv, raylı sistem ve makine tedarikçileri; Sapanca turizmi.",
  blocks: [
    {
      kind: "needs",
      heading: "Bir tedarikçinin gün içinde sorduğu sorular",
      intro:
        "Sakarya'daki birçok işletmenin müşterisi, kendisinden çok daha büyük bir üretici. Bu da günlük soruları belirliyor:",
      items: [
        {
          title: "Bu sipariş hangi aşamada?",
          text: "Müşteri aradığında cevabı üretim, kalite ve sevkiyattan tek tek sormadan tek ekranda görebilmek.",
        },
        {
          title: "Bu parti ne zaman, kim tarafından, hangi kontrolle üretildi?",
          text: "Parti ve iş emri bazında kayıt; gerektiğinde geriye dönük izlenebilirlik.",
        },
        {
          title: "Yeni bir müşteri bizi nasıl tanıyacak?",
          text: "Makine parkını, kapasiteyi, sertifikaları ve referans alanlarını düzenli anlatan bir kurumsal site.",
        },
        {
          title: "Sahadaki servis ekibi ne yaptı?",
          text: "Montaj ya da bakım için dışarıda çalışan ekiplerin iş kaydını, fotoğrafını ve onayını merkeze anında ulaştırmak.",
        },
      ],
    },
    {
      kind: "economy",
      heading: "Sakarya'nın sanayi karakteri",
      intro:
        "Sakarya, İstanbul–Ankara yolu üzerinde ve Karasu Limanı'na yakın konumuyla büyük pazarlara kolay ulaşan bir sanayi şehri. İlin öne çıkan sektörleri birbirini besleyen bir ağ oluşturuyor.",
      sectors: [
        {
          title: "Otomotiv",
          text: "Otomobil, otobüs, traktör ve zırhlı araç üretimi; çevresinde geniş bir yan sanayi ve tedarikçi ağı.",
        },
        {
          title: "Raylı sistemler",
          text: "Vagon ve motorlu tren seti üretimiyle ilin sanayi kimliğinin parçası; mesleki eğitimde de ayrı bir alan.",
        },
        {
          title: "Savunma, metal ve makine",
          text: "Metal işleme ve makine imalatı, savunma sanayine yönelik üretimle birlikte büyüyen kollar.",
        },
        {
          title: "Tarım, gıda ve mobilya",
          text: "Fındık başta olmak üzere tarım ürünleri, et ve süt ürünleri; mobilya imalatı da ilin geleneksel üretim alanlarından.",
        },
      ],
    },
    {
      kind: "story",
      heading: "Nehrin adını taşıyan şehir",
      paragraphs: [
        "Sakarya adını, ovayı kıvrılarak geçen nehirden alıyor. Verimli ova, tarımı ve ardından sanayiyi bu topraklara çekti; bugün Adapazarı merkezli ekonomi, tarlalardan fabrikalara uzanan bir çeşitlilik gösteriyor.",
        "Sapanca Gölü ise şehrin öteki yüzü: İstanbul'a yakınlığıyla hafta sonu kaçamaklarının ve konaklama işletmelerinin tercih edildiği bir göl kıyısı. Sanayi ile turizmin bu kadar yakın durması, Sakarya'da tek tip bir dijital çözüm olmadığını gösteriyor.",
      ],
    },
    {
      kind: "solutions",
      heading: "Sakarya için hangi çözüm, hangi işletmeye?",
      intro: "Sanayi tarafında özel yazılım, Sapanca tarafında web sitesi öne çıkıyor; ikisi arasında yönetim sistemleri köprü kuruyor.",
      items: [
        {
          id: "custom",
          text: "İş emri, parti takibi, kalite kontrol kayıtları ve sevkiyat planını bir araya getiren, müşterinizin beklediği izlenebilirliği sağlayan özel yazılımlar.",
        },
        {
          id: "web",
          text: "Tedarikçi olarak güven veren kurumsal siteler; Sapanca'daki konaklama işletmeleri için oda, galeri ve rezervasyon talebi sunan siteler.",
        },
        {
          id: "business",
          text: "Personel, stok ve günlük iş takibini sadeleştiren yönetim sistemleri; bungalov ve otel işletmeleri için resepsiyon kurgusu.",
        },
        {
          id: "mobile",
          text: "Montaj, servis ve saha ekipleri için iş kaydı, fotoğraf ve onay akışı olan mobil uygulamalar.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Yetkinliğimizi gösteren işler",
      intro:
        "Sakarya'daki bir müşteriye ait olmayan, ancak tedarik, saha ve üretim takibinde neler kurabildiğimizi gösteren çalışmalar:",
      projects: [
        { id: "saha-santiye", note: "Birden fazla şirketin saha ekiplerini, işlerini ve onaylarını kendi alanında yönettiği operasyon sistemi; servis ve montaj ekipleri için uyarlanabilir yapı." },
        { id: "gunluk-imalat", note: "Üretim sahasındaki günlük imalat kayıtlarını dijitale taşıyan uygulama." },
        { id: "mavi-yapi", note: "Katalog ve teklif formuyla kurgulanmış iki dilli B2B tedarik sitesi örneği." },
      ],
    },
    {
      kind: "faq",
      heading: "Sakarya'daki işletmelerden olası sorular",
      items: [
        {
          question: "Müşterimizin istediği izlenebilirlik raporlarını sistemden alabilir miyiz?",
          answer:
            "Raporun hangi bilgileri içermesi gerektiğini birlikte çıkarır, kayıt ekranlarını bu bilgiyi baştan toplayacak şekilde tasarlarız. Rapor, günlük işin yan ürünü olur.",
        },
        {
          question: "ERP kullanıyoruz; özel yazılım onunla çakışır mı?",
          answer:
            "Özel yazılımı çoğu zaman ERP'nin karşılamadığı bir boşluğu doldurmak için kurarız: saha, vardiya ya da kalite gibi. Aktarılması gereken verileri ve yöntemini proje başında netleştiririz.",
        },
        {
          question: "Sapanca'daki bungalov işletmem için sadece bir web sitesi yeterli mi?",
          answer:
            "Az sayıda üniteniz varsa iyi kurgulanmış bir site ve WhatsApp yönlendirmesi çoğu zaman yeterlidir. Rezervasyonları takip etmek zorlaşıyorsa resepsiyon tarafını da ekleyebiliriz.",
        },
      ],
    },
  ],
  cta: {
    title: "Sakarya'daki işletmeniz için doğru başlangıcı bulalım.",
    text: "Tedarikçi, üretici ya da konaklama işletmesi olun; bugünkü işleyişinizi anlatın, ihtiyacınıza uygun çözümü birlikte seçelim.",
    whatsapp: "Merhaba, Sakarya'daki işletmemiz için web sitesi / yazılım hakkında görüşmek istiyoruz.",
  },
  sources: [
    { label: "Sakarya Valiliği: Sakarya'da Ekonomi", url: "http://www.sakarya.gov.tr/sakaryada-ekonomi" },
    {
      label: "SATSO: Mesleki Tanıtım ve Kariyer Günlerinde İlk Sektör Raylı Sistemler",
      url: "https://www.satso.org.tr/haber/2041/satso-mesleki-tanitim-ve-kariyer-gunlerinde--ilk-sektor-rayli-sistemler-oldu.aspx",
    },
    { label: "MARKA: Sakarya İlçeleri Durum Raporları", url: "https://marka.org.tr/wp-content/uploads/2022/06/Sakarya-I%CC%87lc%CC%A7eleri-Durum-Raporlari-2014.pdf" },
  ],
};
