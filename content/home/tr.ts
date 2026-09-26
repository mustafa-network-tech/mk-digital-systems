import type { HomeCopy } from ".";

/**
 * Turkish home copy. Proof is real work only: no testimonials, ratings, client
 * logos or invented figures; no delivery times, support periods or guarantees.
 */
const tr: HomeCopy = {
  selectedWorks: {
    label: "SEÇİLMİŞ ÇALIŞMALAR",
    title: "Gerçek sorunlar.\nÇalışan sistemler.",
    description:
      "Her biri bir işin içinden çıktı. Sorunu, yaklaşımı ve ortaya çıkan sistemi proje hikâyelerinde anlatıyoruz.",
    others: "Diğer sistemler",
  },
  solutions: {
    label: "ÇÖZÜMLER",
    title: "İhtiyacınızdan başlayan\ndört çözüm alanı.",
    description:
      "Nereden başlarsanız başlayın, çözüm aynı sorudan doğar: işiniz nasıl daha kolay yürür?",
    need: "İhtiyaç",
    approach: "Yaklaşım",
    example: "Gerçek çalışma",
    all: "Tüm çözümleri inceleyin",
  },
  founder: {
    label: "KURUCU",
    title: "Sistemi kuran kişi,\nsahanın dilini de biliyor.",
    paragraphs: [
      "MK Digital Systems’ın kurucusu Mustafa Öner, 20 yılı aşkın telekom saha ve operasyon deneyimine sahip. Ekiplerin günlük iş kaydının, malzeme takibinin ve dönem sonu raporlarının sahada nasıl yürüdüğünü içeriden biliyor.",
      "Bu yüzden burada sistemler ekrandan değil, işin kendisinden başlar: bilgiyi kim giriyor, kim onaylıyor, kim neyi görmek istiyor?",
    ],
    name: "Mustafa Öner",
    role: "Kurucu, MK Digital Systems",
    proof: "Sahadan doğan bir sistem: MK OPS",
  },
  faq: {
    label: "SIK SORULAN SORULAR",
    title: "Başlamadan önce\nmerak edilenler.",
    items: [
      {
        question: "Hangi tür projeler geliştiriyorsunuz?",
        answer:
          "Dört alanda çalışıyoruz: web tasarım, özel yazılım, işletme yönetim sistemleri ve mobil uygulama. Yeni bir proje gerekmiyorsa mevcut WordPress sitenizde düzenleme ve SEO çalışmaları da yapıyoruz.",
      },
      {
        question: "Fiyat neye göre değişiyor?",
        answer:
          "Her çözümün bir başlangıç fiyatı var. Nihai bedel kapsam, özellikler ve ihtiyaçlara göre belirlenir; kapsamı birlikte netleştirdiğimizde işinize özel fiyat ortaya çıkar.",
      },
      {
        question: "Teknik bilgim yok. Nereden başlamalıyım?",
        answer:
          "İşinizin bugün nasıl yürüdüğünü ve neyin değişmesini istediğinizi anlatmanız yeterli. Formda “Henüz emin değilim” seçeneğiyle de yazabilirsiniz; gerekli soruları biz sorarız.",
      },
      {
        question: "Portföydeki projeler gerçek mi?",
        answer:
          "Evet, ve her birinin durumu açıkça yazılı. Canlı demo, açıp inceleyebileceğiniz çalışan bir sürümdür. Kapalı test, sınırlı kullanıcıyla denenen bir üründür. Örnek site, bir sektör için hazırladığımız kurgusal bir işletmenin sitesidir. Aktif kullanımda ise gerçekte kullanılan, verisi gizli olduğu için bağlantısı paylaşılmayan sistemleri gösterir.",
      },
      {
        question: "Mobil uygulama geliştiriyor musunuz?",
        answer:
          "Evet. MK Adisyon’un mobil uygulaması bugün kapalı test aşamasında; Aura ise günlük tutma ve ruh hâli takibi için geliştirdiğimiz bir uygulama.",
      },
      {
        question: "Mevcut sitem için SEO ya da WordPress düzenlemesi yapıyor musunuz?",
        answer:
          "Evet. Var olan WordPress sitenizin tasarımını, içeriğini ya da işleyişini düzenleyebilir; sitenizin aramalarda daha kolay bulunması için teknik altyapıyı ve içerikleri iyileştirebiliriz. Arama sıralaması için kesin sonuç vaat etmiyoruz.",
      },
    ],
  },
  finalCta: {
    label: "SIRADAKİ ADIM",
    title: "Daha kolay yürümesi gereken\nbir iş mi var?",
    text: "Neyi değiştirmek istediğinizi birkaç cümleyle anlatın. Bir fikir, dağınık bir süreç ya da yenilenmesi gereken bir site; başlangıç noktası fark etmez.",
    types: "Ne üzerinde düşünüyorsunuz?",
    primary: "İhtiyacınızı anlatın",
  },
};
export default tr;
