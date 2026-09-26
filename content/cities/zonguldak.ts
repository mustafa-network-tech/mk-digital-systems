import type { CityPage } from "./types";

export const zonguldak: CityPage = {
  id: "zonguldak",
  name: "Zonguldak",
  region: "karadeniz",
  ready: true,
  meta: {
    title: "Zonguldak Yazılım: Maden, Çelik ve Liman Tedarikçileri | MK Digital Systems",
    description:
      "Zonguldak ve Ereğli'deki maden, demir-çelik ve liman çevresindeki taşeron ve tedarikçiler için ekip, vardiya, puantaj ve iş takibi yapan yazılımlar.",
  },
  eyebrow: "Zonguldak · Kömürün ve çeliğin kıyısı",
  title: "Zonguldak'ta iş vardiyayla döner; kaydı da vardiyayla tutulmalı.",
  lead:
    "Zonguldak'ın ekonomisi 19. yüzyılın ortasından beri taşkömürü, 1965'ten beri de demir-çelik üzerine kurulu. Bu iki ana sektörün ve limanların çevresinde çalışan taşeron, bakım ve tedarik firmaları için ekip, vardiya ve iş takibini tek yerde toplayan yazılımlar geliştiriyoruz.",
  hero: {
    src: "/cities/zonguldak.webp",
    alt: "Serin bir sabahta denize dik inen ormanlık burunlar ve kayalara vuran dalgalar",
    kind: "illustration",
    caption: "Zonguldak'ın sarp, yeşil Karadeniz kıyısı.",
    focus: "35% 55%",
    source: "Mustafa tarafından eklenecek; sarp kıyı temalı üretilmiş görsel",
  },
  summary: "Taşkömürü, demir-çelik ve beş uluslararası liman: taşeron ve tedarikçiler için ekip ve vardiya takibi.",
  blocks: [
    {
      kind: "economy",
      heading: "İki temel sektör, beş liman",
      intro:
        "Zonguldak Valiliği'ne göre ilin ekonomisini iki temel sektör belirliyor: 19. yüzyılın ortalarına uzanan madencilik ve bu kaynağa dayanarak gelişen demir-çelik sanayisi.",
      sectors: [
        {
          title: "Taşkömürü",
          text: "Türkiye Taşkömürü Kurumu'nun bulunduğu il; madencilik ve çevresindeki hizmet firmaları.",
        },
        {
          title: "Demir-çelik",
          text: "Karadeniz Ereğli'deki tesis 1965'ten beri faaliyette ve ülkenin en büyük yassı çelik üreticisi.",
        },
        {
          title: "Limanlar",
          text: "İl sınırlarında Filyos dahil beş uluslararası liman bulunuyor.",
        },
        {
          title: "Filyos Vadisi",
          text: "Limana entegre sanayi bölgesi ve serbest bölge; demir-çelik, orman ürünleri, çimento, cam ve kimya sanayisine yönelik bir gelişim alanı.",
        },
      ],
    },
    {
      kind: "story",
      heading: "Denize dik inen bir kıyı",
      paragraphs: [
        "Zonguldak'ın kıyısı sarp: Ormanlık tepeler neredeyse doğrudan Karadeniz'e iniyor. Şehir, bu dar kıyı şeridine ve yer altındaki kömür damarlarına göre şekillenmiş; madencilik kültürü şehrin hafızasında derin bir yer tutuyor.",
        "Bugün Filyos'taki liman ve vadi projesiyle Zonguldak, kömür ve çeliğin yanına yeni sanayi alanları eklemeyi hedefliyor. Büyük tesislerin çevresindeki küçük ve orta ölçekli firmalar için bu, daha fazla iş ve daha karmaşık bir operasyon demek.",
      ],
    },
    {
      kind: "needs",
      heading: "Taşeron ve tedarikçi firmaların ihtiyaçları",
      items: [
        {
          title: "Vardiya ve puantajın doğru tutulması",
          text: "Farklı sahalarda, farklı vardiyalarda çalışan personelin puantajını ay sonunda hatasız çıkarmak.",
        },
        {
          title: "İşin sahadan onaylanması",
          text: "Yapılan bakım ya da imalatın fotoğrafı ve onayıyla birlikte kayda geçmesi; hak edişin buna dayanması.",
        },
        {
          title: "Araç ve ekipmanın izlenmesi",
          text: "Hangi aracın ve ekipmanın hangi sahada, kimde olduğunu bilmek.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Zonguldak için çözüm önceliği",
      intro: "Zonguldak'taki firmalar için en büyük kazanç, sahadaki kaydın merkeze kaybolmadan ulaşması; özel yazılım ve mobil uygulama bu yüzden başta.",
      items: [
        {
          id: "custom",
          text: "Ekip, vardiya, puantaj, araç ve iş kayıtlarını birbirine bağlayan; hak ediş ve raporları bu kayıtlardan üreten özel saha yazılımları.",
        },
        {
          id: "mobile",
          text: "Saha şeflerinin telefondan ekip yoklaması, iş başlatma, fotoğraf ve onay kaydı yaptığı uygulamalar.",
        },
        {
          id: "web",
          text: "Büyük tesislere tedarik ve hizmet veren firmalar için yetkinlikleri ve belgeleri anlatan kurumsal siteler.",
        },
        {
          id: "business",
          text: "Personel, malzeme ve cari hesap takibini sadeleştiren yönetim panelleri.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Saha operasyonunda yaptıklarımız",
      intro: "Bu projeler Zonguldak'ta yapılmadı; ancak sahada ekip, iş ve puantaj takibinde kurduğumuz sistemlerin en yakın örnekleri.",
      projects: [
        { id: "santiye-yonetim", note: "Tek bir şirketin şantiye operasyonuna göre kurulan; projeleri, günlük ekip planını, imalatı ve puantajı izleyen yönetim sistemi. Aktif kullanımda." },
        { id: "saha-santiye", note: "Her şirketin saha ekiplerini, işlerini ve onaylarını kendi alanında yönettiği çok şirketli operasyon sistemi." },
        { id: "is-takip", note: "Görevlerin durumunu ve sorumlusunu tek yerde izleyen iş takip uygulaması." },
      ],
    },
    {
      kind: "faq",
      heading: "Zonguldak'taki firmaların sorabileceği sorular",
      items: [
        {
          question: "Puantajı sistemden alıp bordroya aktarabilir miyiz?",
          answer:
            "Puantajı bordro programınızın beklediği biçimde dışa aktarılabilir hale getirebiliriz. Doğrudan bağlantı, kullandığınız programın sunduğu imkânlara bağlıdır.",
        },
        {
          question: "Ana firmanın iş güvenliği formlarını da sisteme ekleyebilir miyiz?",
          answer:
            "Kontrol listelerini ve formları dijital ekranlara dönüştürüp işe bağlayabiliriz. Formların içeriğini ve geçerliliğini sizin iş güvenliği uzmanınız belirler; biz doğru kaydedilmesini sağlarız.",
        },
        {
          question: "Sistemi önce bir sahada deneyebilir miyiz?",
          answer:
            "Evet, bunu öneriyoruz. Tek bir sahada ve tek bir ekiple başlayıp geri bildirimle düzeltir, sonra diğer sahalara yayarız.",
        },
      ],
    },
  ],
  cta: {
    title: "Zonguldak'taki saha işinizi kayda geçirelim.",
    text: "Kaç sahada, kaç ekiple ve hangi vardiya düzeniyle çalıştığınızı anlatın; ilk sahanız için somut bir plan çıkaralım.",
    whatsapp: "Merhaba, Zonguldak'taki firmamız için ekip / vardiya / puantaj takip yazılımı hakkında görüşmek istiyoruz.",
  },
  sources: [
    { label: "Zonguldak Valiliği: Demir Çelik Sanayi", url: "http://www.zonguldak.gov.tr/demir-celik-sanayi" },
    { label: "Zonguldak Valiliği: Filyos Vadisi", url: "https://www.zonguldak.gov.tr/filyos-vadisi" },
    { label: "BAKKA: Sanayisiyle Batı Karadeniz", url: "https://bakka.gov.tr/en/bolgemiz/bati-karadeniz/sanayisiyle-bati-karadeniz" },
  ],
};
