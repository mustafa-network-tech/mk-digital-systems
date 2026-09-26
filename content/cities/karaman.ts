import type { CityPage } from "./types";

export const karaman: CityPage = {
  id: "karaman",
  name: "Karaman",
  region: "ic-anadolu",
  ready: true,
  meta: {
    title: "Karaman Yazılım ve Web Tasarım: Gıda Sanayi ve Tarım | MK Digital Systems",
    description:
      "Karaman'daki bisküvi ve gıda üreticileri, elma ve tahıl işletmeleri için sipariş, bayi, depo ve üretim takibi; sade Türkçe arayüzlü sistemler.",
  },
  eyebrow: "Karaman · Türkçenin başkenti",
  title: "Türkçenin başkenti Karaman'da yazılım da anlaşılır konuşmalı.",
  lead:
    "Karaman, bisküviden elmaya ülke üretiminde ağırlığı olan bir şehir. Buradaki gıda üreticileri, tarım işletmeleri ve tedarikçileri için ekipte herkesin ilk günden anlayacağı, sade Türkçe arayüzlü yönetim sistemleri ve özel yazılımlar geliştiriyoruz.",
  hero: {
    src: "/cities/karaman.webp",
    alt: "Geniş bir yayla, tek başına yükselen volkanik bir dağ ve önde elma bahçesi sıraları",
    kind: "illustration",
    caption: "Karaman ovası ve Karadağ yönü.",
    focus: "40% 55%",
    source: "Mustafa tarafından eklenecek; ova, volkanik dağ ve elma bahçesi temalı üretilmiş görsel",
  },
  summary: "Bisküvi ve gıda sanayi, elma ve tahıl: sipariş, bayi, depo ve üretim takibi.",
  blocks: [
    {
      kind: "story",
      heading: "1277'den bugüne bir dil şehri",
      paragraphs: [
        "13 Mayıs 1277'de Karamanoğlu Mehmet Bey'in yayımladığı fermanla Türkçe, Anadolu'da ilk kez resmî devlet dili olarak kabul edildi. Karaman bu yüzden bugün \"Türkçenin başkenti\" olarak anılıyor ve her yıl Türk Dil Bayramı'na ev sahipliği yapıyor.",
        "Bu mirası kendi işimize de taşımak istiyoruz: Bir yazılımın ekranındaki kelimeler, onu kullanan kişinin dili olmalı. Depodaki personelin, sahadaki çiftçinin ya da muhasebedeki uzmanın aynı ekranı aynı şekilde anlaması, bir sistemin gerçekten kullanılmasının ilk şartı.",
      ],
    },
    {
      kind: "note",
      heading: "Sade arayüz neden bu kadar önemli?",
      paragraphs: [
        "Yeni bir sistemin en büyük riski teknik değil, kullanılmamaktır. İngilizce terimlerle dolu, gereğinden fazla menüsü olan ekranlar ekiplerin eski deftere ve Excel'e dönmesine yol açar.",
        "Bu yüzden her projede önce rolleri ve kullanılan kelimeleri çıkarıyoruz; ekranları o kelimelerle kuruyoruz. Karaman'daki bir gıda fabrikasında \"parti\", \"sevk\" ya da \"bayi\" ne anlama geliyorsa sistemde de o anlama geliyor.",
      ],
    },
    {
      kind: "economy",
      heading: "Karaman'ın üretim gücü",
      intro:
        "Valilik verilerine göre Karaman 2022'de 154 ülkeye yaklaşık 310 milyon dolarlık ihracat yaptı; ihracatın başında bisküvi, kakao ürünleri ve şekerli mamuller geliyor.",
      sectors: [
        {
          title: "Bisküvi, çikolata ve kek",
          text: "Karaman'ın gıda sanayisi bu ürünlerde ülke üretiminde önemli bir yere sahip; bulgur, makarna ve meyve işleme de ilde yapılıyor.",
        },
        {
          title: "Elma",
          text: "Karaman, elma üretiminde Türkiye'nin lider illerinden; 2022'de ülke üretiminin yaklaşık yüzde 15,6'sı buradan geldi.",
        },
        {
          title: "Tahıl ve diğer tarım ürünleri",
          text: "Buğday, arpa, mısır, nohut ve şeker pancarı; il 2022'de 13 farklı tarım ürününde ilk beş arasında yer aldı.",
        },
        {
          title: "Makine, ambalaj ve mermer",
          text: "Gıda sanayisinin çevresinde gelişen makine imalatı ve ambalaj, bunlara ek olarak tekstil ve mermer.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Karaman'da hangi çözümle başlanır?",
      intro: "Karaman'da işletmelerin çoğu birden fazla depo, bayi ya da üretici ile çalışıyor; bu yüzden yönetim sistemleri ilk sırada.",
      items: [
        {
          id: "business",
          text: "Bayi siparişi, depo stoku, cari hesap ve sevkiyatı aynı ekranda gösteren, her rolün yalnızca kendi işini gördüğü yönetim sistemleri.",
        },
        {
          id: "custom",
          text: "Elma soğuk hava depoları ya da tahıl alımı gibi kendine özgü akışlar için üreticiden giriş, depolama ve çıkışı kayıt altına alan özel yazılımlar.",
        },
        {
          id: "web",
          text: "Gıda üreticileri için ürün gamını ve bayilik başvurusunu anlatan kurumsal siteler; tarım işletmeleri için sade tanıtım siteleri.",
        },
        {
          id: "mobile",
          text: "Saha satış ve dağıtım ekipleri için sipariş toplama ve teslim uygulamaları.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Referans olarak değil, örnek olarak",
      intro:
        "Bu projeler Karaman'daki işletmeler için yapılmadı. Sade arayüz, rol bazlı ekran ve günlük kayıt konularında nasıl çalıştığımızı gösteriyorlar.",
      projects: [
        { id: "is-takip", note: "Günlük işlerin durumunu ve sorumlusunu tek yerde izleyen, az menülü, sade iş takip uygulaması." },
        { id: "gunluk-imalat", note: "Üretim sahasındaki günlük kayıtları dijital karta dönüştüren uygulama." },
        { id: "mk-adisyon", note: "Garson, mutfak ve kasa için ayrı ekranları olan sipariş sistemi; rol bazlı arayüzün örneği." },
      ],
    },
    {
      kind: "faq",
      heading: "Karaman'daki işletmeler için sorular",
      items: [
        {
          question: "Ekibimizde bilgisayar kullanımı zayıf; sistemi öğrenebilirler mi?",
          answer:
            "Ekranları ekibinizin kullandığı kelimelerle ve her rol için yalnızca gerekli adımlarla tasarlıyoruz. Yayına almadan önce gerçek kullanıcılarla deneyip takıldıkları yerleri düzeltiyoruz.",
        },
        {
          question: "Bayilerimiz sipariş verirken sisteme girebilir mi?",
          answer:
            "Evet; bayiler için ayrı ve sınırlı yetkili bir giriş kurgulayabiliriz. Bayinin göreceği fiyat, stok ve sipariş bilgilerini sizinle birlikte belirleriz.",
        },
        {
          question: "Soğuk hava deposundaki ürünü kime ait olduğuyla birlikte izleyebilir miyiz?",
          answer:
            "Depoya giren her partiyi üretici, tarih, miktar ve oda bilgisiyle kaydeden, çıkışta da bu bilgiyi koruyan bir yapı kurulabilir. Ayrıntı seviyesini işinizin gerçek ihtiyacına göre belirleriz.",
        },
      ],
    },
  ],
  cta: {
    title: "Karaman'daki işiniz için anlaşılır bir sistem kuralım.",
    text: "Bugün siparişi, stoku ve ekibi nasıl yönettiğinizi anlatın; ilk görüşmede size uygun kapsamı birlikte çıkaralım.",
    whatsapp: "Merhaba, Karaman'daki işletmemiz için yönetim sistemi / yazılım hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Karaman Valiliği: Ekonomi ve Sanayi", url: "https://www.karaman.gov.tr/ekonomi-ve-sanayi" },
    { label: "Karaman Valiliği: Tarihsel Gelişim", url: "https://www.karaman.gov.tr/tarihsel-gelisim" },
    { label: "Karaman Valiliği: Türkçenin Başkenti Karaman'da Türk Dil Bayramı", url: "http://www.karaman.gov.tr/turkcenin-baskenti-karamanda-bayram-coskusu" },
  ],
};
