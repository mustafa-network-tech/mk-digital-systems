import type { CityPage } from "./types";

export const yozgat: CityPage = {
  id: "yozgat",
  name: "Yozgat",
  region: "ic-anadolu",
  ready: true,
  meta: {
    title: "Yozgat Yazılım ve Web Tasarım: Hayvancılık, Tarım, Termal | MK Digital Systems",
    description:
      "Yozgat'taki hayvancılık ve tarım işletmeleri, Sorgun'daki termal tesisler ve yerel üreticiler için çiftlik kayıt sistemi, rezervasyon ve web sitesi.",
  },
  eyebrow: "Yozgat · Bozok Platosu",
  title: "Yozgat'ta, Bozok Platosu'nda sürü büyüyor; kayıtlar da onunla büyümeli.",
  lead:
    "Yozgat'ın ekonomisi tarım ve hayvancılık üzerine kurulu. Çiftlikler, termal tesisler ve yerel üreticiler için hayvandan misafire kadar kaydı düzenli tutan sistemler ve işletmeyi doğru anlatan web siteleri geliştiriyoruz.",
  hero: {
    src: "/cities/yozgat.webp",
    alt: "Serin bir sabahta çıplak, dalgalı plato tepeleri ve çam ormanıyla kaplı bir tepe",
    kind: "illustration",
    caption: "Bozok Platosu ve çamlık tepe, serin bir sabah.",
    focus: "70% 60%",
    source: "Mustafa tarafından eklenecek; plato ve çam ormanı temalı üretilmiş görsel",
  },
  summary: "Hayvancılık ve tarım, Sorgun termal turizmi: çiftlik kaydı, rezervasyon ve tanıtım.",
  blocks: [
    {
      kind: "story",
      heading: "Platonun ortasında bir çam ormanı",
      paragraphs: [
        "Yozgat, Orta Kızılırmak bölümünde, Bozok Platosu üzerinde kurulu. Doğusunda Akdağlar, güney ve batısında Delice Irmağı vadisi uzanıyor; karasal iklimin sert kışları ve geniş bozkırı şehrin karakterini belirliyor.",
        "Bu bozkırın ortasında şehre adeta yapışık duran Yozgat Çamlığı, Türkiye'nin ilk millî parkı. Kerkenes'teki antik kent kalıntıları ve Çapanoğlu döneminden kalan yapılar, şehrin tarihinin yüzyıllar öncesine uzandığını gösteriyor.",
        "Son yıllarda yüksek hızlı tren hattı Yozgat'ı Ankara ve Sivas'a bağladı. Ulaşım kısaldıkça hem ürünün hem de misafirin Yozgat'a ulaşması kolaylaşıyor.",
      ],
    },
    {
      kind: "economy",
      heading: "Yozgat'ın ekonomik zemini",
      intro: "Valilik tanımıyla Yozgat ekonomisinin merkezinde tarım ve hayvancılık var; organize sanayi bölgesi ise imalatı destekliyor.",
      sectors: [
        {
          title: "Hayvancılık",
          text: "Geniş meralar ve aile işletmelerinden büyük çiftliklere kadar farklı ölçekte besi ve süt işletmeleri.",
        },
        {
          title: "Tarım",
          text: "Karasal iklime uygun tahıl ve baklagiller; çiftçinin alım, hasat ve satış kayıtları.",
        },
        {
          title: "Termal ve doğa turizmi",
          text: "Sorgun'un şifalı kaplıcaları ve Çamlık Millî Parkı çevresindeki konaklama ve gezi işletmeleri.",
        },
      ],
    },
    {
      kind: "needs",
      heading: "Çiftlikten tesise dijital ihtiyaçlar",
      items: [
        {
          title: "Hayvan bazında kayıt",
          text: "Doğum, aşı, tartım ve sağlık geçmişinin her hayvan için ayrı ve kolay erişilebilir tutulması.",
        },
        {
          title: "Günlük işin ekip arasında paylaşılması",
          text: "Yem, sağım ve bakım işlerinin kimde olduğunu ve yapılıp yapılmadığını ahırdan telefonla görmek.",
        },
        {
          title: "Termal tesiste oda ve kür takibi",
          text: "Uzun süre kalan misafirlerin oda, program ve ödeme bilgisini tek yerde izlemek.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Bu ihtiyaçlara karşılık gelen işlerimiz",
      intro: "Yozgat'ta bir çiftlikte ya da tesiste yapılmış işler değil; aynı problemleri çözdüğümüz ürün ve sistemler.",
      projects: [
        { id: "mk-farm", note: "Hayvanların bireysel kayıtlarını çiftliğin günlük işleriyle birleştiren yönetim uygulaması; Yozgat'taki bir hayvancılık işletmesinin ihtiyaçlarına en yakın örneğimiz." },
        { id: "mk-resepsiyon", note: "Oda planı, misafir girişi ve tahsilatı bağlayan resepsiyon sistemi; termal tesisler için uyarlanabilir." },
        { id: "santiye-yonetim", note: "Günlük ekip planı, iş ve puantajı izleyen yönetim sistemi; sahada çalışan ekiplerin takibinin örneği." },
      ],
    },
    {
      kind: "solutions",
      heading: "Yozgat için çözüm sırası",
      intro: "Hayvancılıkta kaydın dağınıklığı en çok zaman kaybettiren şey; bu yüzden işinize özel bir kayıt sistemi ilk sırada.",
      items: [
        {
          id: "custom",
          text: "Sürünüzün büyüklüğüne ve çalışma şeklinize göre hayvan, sağlık, yem ve üretim kayıtlarını tutan çiftlik yazılımları.",
        },
        {
          id: "business",
          text: "Termal tesisler ve konaklama işletmeleri için oda, misafir ve tahsilat takibi; ticari işletmeler için stok ve cari hesap yönetimi.",
        },
        {
          id: "mobile",
          text: "Ahırda, merada ya da tesiste telefondan hızlı kayıt girilen, internet zayıfken de sade çalışan ekranlar.",
        },
        {
          id: "web",
          text: "Termal tesisler, yerel ürün satan işletmeler ve hizmet firmaları için tanıtım ve iletişim odaklı siteler.",
        },
      ],
    },
    {
      kind: "faq",
      heading: "Yozgat'taki işletmelerin sorabileceği sorular",
      items: [
        {
          question: "Küçük bir aile çiftliği için yazılım gerekli mi?",
          answer:
            "Her çiftliğe gerekmez. Hayvan sayısı arttıkça ve iş birden fazla kişiye dağıldıkça kayıt tutmak zorlaşır; o noktada sade bir sistem zaman kazandırır. İhtiyacınızı birlikte değerlendirip gerekmiyorsa bunu söyleriz.",
        },
        {
          question: "Veteriner kayıtlarını da aynı sisteme ekleyebilir miyiz?",
          answer:
            "Evet; aşı, tedavi ve kontrol kayıtlarını hayvanın geçmişine bağlayabiliriz. Veterinerin sisteme erişip erişmeyeceğini ve neleri göreceğini birlikte belirleriz.",
        },
        {
          question: "Termal tesisimiz için rezervasyonu siteden alabilir miyiz?",
          answer:
            "Talep formu ya da doğrudan iletişim yönlendirmesiyle başlayabilir, yoğunluk arttıkça rezervasyonları resepsiyon sistemine bağlayabiliriz.",
        },
      ],
    },
  ],
  cta: {
    title: "Yozgat'taki işletmeniz için düzenli bir kayıtla başlayın.",
    text: "Kaç hayvanınız ya da odanız olduğunu, bugün kaydı nasıl tuttuğunuzu anlatın; ilk adım için gerçekçi bir kapsam önerelim.",
    whatsapp: "Merhaba, Yozgat'taki işletmemiz için yazılım / web sitesi hakkında bilgi almak istiyoruz.",
  },
  sources: [
    { label: "Yozgat Valiliği: Yozgat Genel Bilgiler", url: "https://www.yozgat.gov.tr/yozgat-genel-bilgiler" },
    { label: "Yozgat Valiliği: Yozgat Çamlığı Millî Parkı", url: "https://www.yozgat.gov.tr/camlik-milli-parki" },
    { label: "Yozgat Valiliği: Yüksek Hızlı Tren", url: "http://www.yozgat.gov.tr/yuksek-hizli-tren" },
  ],
};
