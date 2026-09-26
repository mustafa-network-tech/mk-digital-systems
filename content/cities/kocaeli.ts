import type { CityPage } from "./types";

export const kocaeli: CityPage = {
  id: "kocaeli",
  name: "Kocaeli",
  region: "marmara",
  ready: true,
  meta: {
    title: "Kocaeli Yazılım ve Web Tasarım: İzmit Sanayisi İçin | MK Digital Systems",
    description:
      "İzmit, Gebze ve Kocaeli'deki OSB tedarikçileri, bakım-servis firmaları ve liman işletmeleri için saha, iş emri ve kalite takibi yapan özel yazılımlar.",
  },
  eyebrow: "Kocaeli · İzmit Körfezi",
  title: "Türkiye sanayisinin merkezinde, Kocaeli'nin tedarikçileri için yazılım.",
  lead:
    "Kocaeli; organize sanayi bölgeleri, limanları ve dış ticaret hacmiyle Türkiye sanayisinin merkezi. İzmit'ten Gebze'ye büyük üreticilere hizmet veren tedarikçi, bakım ve lojistik firmaları için iş emrini, saha ekibini ve kalite kaydını tek yerde toplayan sistemler geliştiriyoruz.",
  hero: {
    src: "/cities/kocaeli.webp",
    alt: "Alacakaranlıkta uzun bir körfez, uzakta asma köprü ve rıhtımda liman vinçleri",
    kind: "illustration",
    caption: "İzmit Körfezi, liman vinçleri ve köprü; alacakaranlık.",
    focus: "55% 55%",
    source: "Mustafa tarafından eklenecek; körfez, köprü ve liman temalı üretilmiş görsel",
  },
  summary: "OSB'ler, limanlar ve dış ticaret: tedarikçi, bakım ve lojistik firmaları için saha ve iş emri.",
  blocks: [
    {
      kind: "economy",
      heading: "Kocaeli'yi rakamlarla okumak",
      intro:
        "Kocaeli Valiliği verilerine göre ilde 14 organize sanayi bölgesi, 5 teknopark ve 2 serbest bölge bulunuyor. 2024'te Kocaeli gümrüklerinden yapılan 119 milyar doları aşan dış ticaret, Türkiye dış ticaretinin yaklaşık yüzde 20'sine karşılık geldi.",
      sectors: [
        {
          title: "İhtisas OSB'leri",
          text: "Otomotiv tedarik, kimya, makine ve plastik gibi alanlarda ihtisaslaşmış sanayi bölgeleri.",
        },
        {
          title: "Liman kenti",
          text: "37 liman tesisi; Kocaeli, elleçlenen yük miktarında 2017'den bu yana ilk sırada.",
        },
        {
          title: "Katma değerli sektörler",
          text: "Otomotiv ana ve yan sanayi, makine, demir-çelik, kimya, plastik-kauçuk ve elektrikli makineler.",
        },
        {
          title: "Ar-Ge ve teknopark",
          text: "Sanayinin yanında Ar-Ge ve yenilik alanında da merkez olma yolunda ilerleyen bir il.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Büyük üreticinin yanındaki küçük firmanın ihtiyaçları",
      intro:
        "Kocaeli'de her büyük fabrikanın çevresinde onlarca tedarikçi, bakım, servis ve taşımacılık firması çalışıyor. Bu firmaların dijital ihtiyacı çoğu zaman aynı noktada düğümleniyor:",
      items: [
        {
          title: "İş emrinden fatura edilebilir işe",
          text: "Gelen talebin iş emrine, iş emrinin sahada yapılan işe, yapılan işin onaylı ve faturalanabilir kayda dönüşmesi.",
        },
        {
          title: "Müşteri denetimine hazır kayıt",
          text: "Kalite, iş güvenliği ve bakım kayıtlarını müşteri istediğinde düzenli bir raporla sunabilmek.",
        },
        {
          title: "Aynı anda birçok sahada ekip",
          text: "Farklı fabrikalarda çalışan ekiplerin nerede, hangi işte olduğunu ve iş bitişini anlık görmek.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Kocaeli için çözüm önceliği",
      intro: "Kocaeli'de özel yazılım ve mobil uygulama yan yana gidiyor: Kayıt sahada doğuyor, merkezde karara dönüşüyor.",
      items: [
        {
          id: "custom",
          text: "Talep, iş emri, saha işi, onay ve raporu tek akışta bağlayan; müşterinizin denetim ve kalite beklentisine göre kurgulanan özel yazılımlar.",
        },
        {
          id: "mobile",
          text: "Saha ve bakım ekiplerinin telefondan iş başlatıp fotoğraf, ölçüm ve imza kaydettiği uygulamalar.",
        },
        {
          id: "business",
          text: "Personel, puantaj, araç ve malzeme takibini tek panelde toplayan yönetim sistemleri.",
        },
        {
          id: "web",
          text: "Yeni müşteri kazanmak isteyen tedarikçiler için yetkinlikleri, belgeleri ve referans alanlarını açık anlatan kurumsal siteler.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Saha ve operasyon üzerine yaptıklarımız",
      intro: "Bu projeler Kocaeli'deki bir firma için yapılmadı; ancak buradaki tedarikçi ve servis firmalarının yaşadığı operasyon sorunlarına çok yakın problemleri çözüyor.",
      projects: [
        { id: "saha-santiye", note: "Her şirketin saha ekiplerini, işlerini ve onaylarını kendi alanında yönettiği çok şirketli operasyon sistemi." },
        { id: "gunluk-imalat", note: "Günlük imalat kayıtlarını dijital karta dönüştüren uygulama." },
        { id: "is-takip", note: "Görevlerin durumunu ve sorumlusunu tek yerde izleyen iş takip uygulaması." },
        { id: "mk-kargo", note: "Fiyat hesaplayan müşteri sitesi ve sipariş operasyon paneliyle lojistik ürünü." },
      ],
    },
    {
      kind: "note",
      heading: "Saha deneyiminden gelen bir yaklaşım",
      paragraphs: [
        "MK Digital Systems'in kurucusu Mustafa Öner, 20 yılı aşkın telekom saha ve operasyon deneyimine sahip. Ekiplerin günlük işlerinin, malzeme takibinin ve dönem sonu raporlarının sahada nasıl yürüdüğünü içeriden biliyoruz.",
        "Bu yüzden saha yazılımlarında önce işin gerçekten nasıl yapıldığını anlıyor, ekranları masa başı varsayımlarla değil, sahadaki gerçek adımlarla kuruyoruz.",
      ],
    },
    {
      kind: "faq",
      heading: "Kocaeli'deki firmaların sorabileceği sorular",
      items: [
        {
          question: "Müşterimizin kendi portalına da veri girmemiz gerekiyor; çift kayıt olur mu?",
          answer:
            "Müşteri portalına aktarılacak bilgileri sistemde tek sefer toplayıp dışa aktarılabilir biçimde hazırlayabiliriz. Portalın sunduğu bağlantı imkânlarına göre otomasyonun seviyesini birlikte belirleriz.",
        },
        {
          question: "Birden fazla şirketimiz var; tek sistemde yönetebilir miyiz?",
          answer:
            "Evet. Her şirketin verisinin ayrı tutulduğu, yönetimin ise hepsini birlikte görebildiği çok şirketli bir yapı kurabiliriz.",
        },
        {
          question: "Sahada internet olmadığında ekip kayıt girebilir mi?",
          answer:
            "Bağlantısız çalışma ihtiyacını proje başında netleştiririz; gerekiyorsa kaydın cihazda bekleyip bağlantı gelince gönderildiği bir yapı planlarız.",
        },
      ],
    },
  ],
  cta: {
    title: "Kocaeli'deki operasyonunuzu tek akışta toplayalım.",
    text: "Talebin sahaya, sahanın rapora nasıl ulaştığını anlatın; kaybolan adımı birlikte bulup ilk kapsamı çıkaralım.",
    whatsapp: "Merhaba, Kocaeli'deki firmamız için saha / iş emri takip yazılımı hakkında görüşmek istiyoruz.",
  },
  sources: [
    { label: "Kocaeli Valiliği: Kocaeli Ekonomisinde Sanayinin Yeri", url: "https://www.kocaeli.gov.tr/kocaeli-ekonomisinde-sanayinin-yeri" },
    { label: "Kocaeli Valiliği: Sanayi, Liman ve Ulaşımın Buluşma Noktası", url: "https://www.kocaeli.gov.tr/lojistigin-merkezinde-bir-kent-kocaeli" },
    { label: "Kocaeli Sanayi Odası: Rakamlarla Kocaeli", url: "https://kosano.org.tr/rakamlarla-kocaeli/" },
  ],
};
