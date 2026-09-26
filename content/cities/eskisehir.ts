import type { CityPage } from "./types";

export const eskisehir: CityPage = {
  id: "eskisehir",
  name: "Eskişehir",
  region: "ic-anadolu",
  ready: true,
  meta: {
    title: "Eskişehir Yazılım ve Mobil Uygulama: Sanayi ve Girişim | MK Digital Systems",
    description:
      "Eskişehir'deki girişimler, makine ve raylı sistem tedarikçileri, öğrenci şehrinin kafe ve hizmet işletmeleri için mobil uygulama, özel yazılım ve web.",
  },
  eyebrow: "Eskişehir · Üniversite ve sanayi şehri",
  title: "Eskişehir'de fikir bol; onu kullanılan bir ürüne çevirelim.",
  lead:
    "Eskişehir hem genç nüfusuyla bir üniversite şehri hem de uçak motorundan lokomotife uzanan bir sanayi şehri. Buradaki girişimciler, tedarikçiler ve hizmet işletmeleri için fikri sade bir mobil uygulamaya, özel bir yazılıma ya da iyi bir web sitesine dönüştürüyoruz.",
  summary: "Üniversiteler, girişimler, makine, raylı sistem ve havacılık: mobil uygulama ve özel yazılım.",
  blocks: [
    {
      kind: "needs",
      heading: "Eskişehir'den gelebilecek üç tür fikir",
      intro: "Eskişehir'in yapısı, farklı türde dijital ihtiyaçları bir arada barındırıyor:",
      items: [
        {
          title: "\"Bir uygulama fikrim var\"",
          text: "Öğrenciler, akademisyenler ya da genç girişimciler için fikri ilk kullanıcıya ulaşacak en küçük ürüne indirgemek ve hızla denemek.",
        },
        {
          title: "\"Excel artık yetmiyor\"",
          text: "Makine, raylı sistem ya da havacılık tedarikçilerinde iş emri, kalite ve teslim takibini güvenilir bir sisteme taşımak.",
        },
        {
          title: "\"Öğrenciler bizi bulmalı\"",
          text: "Kafe, kurs, yurt ve hizmet işletmelerinin, telefonundan arama yapan gençlere hızlı ve net bilgi sunması.",
        },
      ],
    },
    {
      kind: "story",
      heading: "İki üniversitenin, bir nehrin şehri",
      paragraphs: [
        "Anadolu Üniversitesi ve Osmangazi Üniversitesi ile Eskişehir, metropol kentlerin dışında iki üniversitesi olan tek Anadolu kenti unvanını almış bir şehir. Bu genç nüfus, şehrin kafelerine, sokaklarına ve girişimcilik iklimine yansıyor.",
        "Tarihi Odunpazarı evleri ve dünyanın en kaliteli lületaşının çıkarıldığı yataklar, şehrin zanaat ve miras tarafını oluşturuyor.",
      ],
    },
    {
      kind: "economy",
      heading: "Eskişehir sanayisinin öne çıkan kolları",
      intro:
        "Eskişehir sanayisinde makine imalatı, raylı sistemler, havacılık ve savunma, beyaz eşya ve madencilik ön planda. Türkiye'nin tek uçak motoru fabrikası ve dizel lokomotif motoru üreten tek fabrikası Eskişehir'de.",
      sectors: [
        {
          title: "Havacılık ve savunma",
          text: "Organize sanayi bölgesinde en çok istihdam sağlayan sektörler arasında; yüksek kalite ve izlenebilirlik beklentisi.",
        },
        {
          title: "Raylı sistemler",
          text: "Lokomotif ve raylı sistem üretimi etrafında gelişen tedarikçi ağı.",
        },
        {
          title: "Makine ve beyaz eşya",
          text: "Makine imalatı ve beyaz eşya; farklı ölçekte yan sanayi firmaları.",
        },
        {
          title: "Lületaşı ve zanaat",
          text: "Dünyanın en kaliteli lületaşının işlendiği atölyeler ve zanaat geleneği.",
        },
      ],
    },
    {
      kind: "solutions",
      heading: "Eskişehir için çözüm önceliği",
      intro: "Genç ve girişimci bir şehirde mobil uygulama ilk sıraya çıkıyor; sanayi tarafında ise özel yazılım belirleyici.",
      items: [
        {
          id: "mobile",
          text: "Girişim fikirleri için ilk kullanıcıya hızlı ulaşan sade mobil uygulamalar; kapsamı küçük tutup kullanım verisiyle büyütmek.",
        },
        {
          id: "custom",
          text: "Havacılık, raylı sistem ve makine tedarikçileri için iş emri, kalite kaydı ve izlenebilirlik sağlayan özel yazılımlar.",
        },
        {
          id: "web",
          text: "Kafe, kurs, yurt ve hizmet işletmeleri için mobilde hızlı, net ve güncel bilgi veren siteler.",
        },
        {
          id: "business",
          text: "Çok şubeli işletmeler ve atölyeler için sipariş, personel ve stok yönetimi.",
        },
      ],
    },
    {
      kind: "work",
      heading: "Ürün ve uygulama tarafında yaptıklarımız",
      intro: "Eskişehir'de yapılmış işler değil; fikirden ürüne giden yolda neler yaptığımızı gösteren örnekler.",
      projects: [
        { id: "aura", note: "Günlük tutma ve ruh hâli takibi için sade bir mobil uygulama; küçük kapsamla başlayan bir ürünün örneği." },
        { id: "namehub", note: "Bebek, evcil hayvan, marka ve kullanıcı adı önerileri sunan isim bulma platformu; bir fikirden dijital ürüne." },
        { id: "mk-adisyon", note: "Web uygulaması ve kapalı testteki mobil uygulamasıyla restoran ve kafeler için sipariş ürünü." },
        { id: "mk-pati", note: "Veteriner klinikleri için hasta, aşı ve randevu yönetimi; yapay zekâ destekli klinik danışmanıyla." },
      ],
    },
    {
      kind: "faq",
      heading: "Eskişehir'den girişimcilerin ve işletmelerin sorabileceği sorular",
      items: [
        {
          question: "Uygulama fikrim için önce ne yapmalıyım?",
          answer:
            "Önce fikrin çözdüğü tek bir problemi ve ilk kullanıcıyı netleştiriyoruz. Ardından o problemi çözen en küçük ürünü tasarlayıp geliştiriyor, kullanım sonrası neyin büyütüleceğine birlikte karar veriyoruz.",
        },
        {
          question: "Öğrenciyim; bütçem sınırlı, yine de çalışabilir miyiz?",
          answer:
            "Kapsamı bütçeye göre küçültmek mümkün; ancak başlangıç fiyatlarımız bellidir ve bunun altında bir çalışma vaat etmeyiz. İlk görüşmede fikrinizi dinleyip gerçekçi bir yol haritası çıkarırız.",
        },
        {
          question: "Havacılık tedarikçisiyiz; kalite kayıtlarımız çok ayrıntılı. Özel yazılım bunu karşılar mı?",
          answer:
            "Kalite dokümantasyonunuzu ve müşterinizin beklediği kayıtları birlikte inceleyerek sistemi bu ayrıntıya göre kurarız. Ayrıntı arttıkça kapsam ve süre de artar; bunu baştan açıkça planlarız.",
        },
      ],
    },
  ],
  cta: {
    title: "Eskişehir'deki fikrinizi ya da işinizi konuşalım.",
    text: "Bir uygulama fikri, bir sanayi problemi ya da yeni bir site; ne olduğunu kısaca anlatın, ilk adımı birlikte planlayalım.",
    whatsapp: "Merhaba, Eskişehir'den yazıyorum; mobil uygulama / yazılım fikrim hakkında görüşmek istiyorum.",
  },
  sources: [
    { label: "Eskişehir Büyükşehir Belediyesi: Ekonomi", url: "https://www.eskisehir.bel.tr/sayfalar.php?sayfalar_id=15" },
    { label: "BEBKA: TR41 Bölgesi Raylı Sistemler Sektörü Raporu 2025", url: "https://bebka.org.tr/wp-content/uploads/2025/08/TR41_Rayli_Sistemler_Raporu_2025_V02.pdf" },
    { label: "Eskişehir Sanayi Odası: Havacılık Sektörünün Geleceği Konuşuldu", url: "https://www.eso.org.tr/havacilik-sektorunun-gelecegi-konusuldu" },
  ],
};
