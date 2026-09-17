import type { Locale } from "@/config/i18n";
import type { PricingId } from "./pricing";

export type PricingCopy = {
  previewFrom: string;
  label: string;
  title: string;
  description: string;
  disclaimer: string;
  previewTitle: string;
  previewDescription: string;
  viewAll: string;
  from: string;
  suffix: string;
  cta: string;
  call: string;
  whatsapp: string;
  email: string;
  inquiry: string;
  contactTitle: string;
  groups: [string, string, string];
  items: Record<PricingId, { title: string; description: string }>;
};
export const pricingCopy: Record<Locale, PricingCopy> = {
  tr: {
    previewFrom: "Başlayan fiyatlarla",
    label: "BAŞLANGIÇ FİYATLARI",
    title: "Fikrinize göre\nbir başlangıç noktası.",
    description:
      "Her proje farklıdır. Benzer kapsamlar için başlangıç bütçelerini inceleyin; size uygun kapsamı birlikte belirleyelim.",
    disclaimer:
      "Belirtilen tutarlar başlangıç fiyatlarıdır. Nihai proje bedeli kapsam, özellikler ve ihtiyaçlara göre değişebilir.",
    previewTitle: "İlk adım için\ndaha net bir bütçe.",
    previewDescription:
      "Bir web deneyiminden işletmenize özel bir sisteme. İhtiyacınıza uygun başlangıcı bulun.",
    viewAll: "Tüm başlangıç fiyatlarını inceleyin",
    from: "",
    suffix: "’den başlayan fiyatlarla",
    cta: "WhatsApp’tan bilgi alın",
    call: "Ara",
    whatsapp: "WhatsApp’tan yaz",
    email: "E-posta gönder",
    inquiry:
      "Merhaba, {service} için başlangıç kapsamı ve fiyatı hakkında bilgi almak istiyorum.",
    contactTitle: "Size uygun kapsamı\nbirlikte netleştirelim.",
    groups: ["Web & dijital deneyimler", "Özel yazılım", "İşletme sistemleri"],
    items: {
      landing_page: {
        title: "Landing page",
        description:
          "Markanızı, hizmetinizi veya kampanyanızı tek ve etkili bir sayfada anlatın.",
      },
      corporate_web: {
        title: "Kurumsal web sitesi",
        description:
          "İşletmenizi profesyonel sayfalar, iletişim ve temel SEO altyapısıyla güven veren bir şekilde temsil edin.",
      },
      premium_web: {
        title: "Premium web sitesi",
        description:
          "Özel tasarım, güçlü içerik ve kontrollü hareketlerle markanıza özgü bir dijital deneyim oluşturun.",
      },
      reservation_system: {
        title: "Rezervasyon / talep sistemi",
        description:
          "Müşterilerinizin rezervasyon, randevu veya hizmet taleplerini doğrudan dijital ortamdan alın.",
      },
      management_panel: {
        title: "Yönetim paneli",
        description:
          "Müşteri, personel, kayıt ve iş takibini işletmenize özel tek bir yönetim ekranında toplayın.",
      },
      custom_software: {
        title: "Özel yazılım",
        description:
          "Hazır yazılımlara uyum sağlamak yerine, yazılımı işinizin gerçek çalışma biçimine uyarlayın.",
      },
      operations_system: {
        title: "Operasyon yönetim sistemi",
        description:
          "Görev, stok, saha ve raporlama süreçlerinizi tek merkezden takip edip yönetin.",
      },
      saas_system: {
        title: "Çok kullanıcılı / SaaS sistem",
        description:
          "Kullanıcı rolleri ve ayrı işletme alanlarıyla büyümeye hazır bir dijital ürün geliştirin.",
      },
    },
  },
  en: {
    previewFrom: "Starting from",
    label: "STARTING PRICES",
    title: "A starting point\nfor your idea.",
    description:
      "Every project is different. Explore starting budgets for similar scopes, then shape the right approach for your business.",
    disclaimer:
      "These are starting prices. The final project fee depends on scope, features and your requirements.",
    previewTitle: "A clearer budget\nfor your first step.",
    previewDescription:
      "From a web experience to a system built around your business. Find a place to start.",
    viewAll: "Explore all starting prices",
    from: "From ",
    suffix: "",
    cta: "Ask us on WhatsApp",
    call: "Call us",
    whatsapp: "Message on WhatsApp",
    email: "Send an email",
    inquiry:
      "Hello, I would like to learn about the starting scope and price for {service}.",
    contactTitle: "Let’s find the scope\nthat fits your business.",
    groups: [
      "Web & digital experiences",
      "Custom software",
      "Business systems",
    ],
    items: {
      landing_page: {
        title: "Landing page",
        description:
          "Introduce your brand, service or campaign through one focused, compelling page.",
      },
      corporate_web: {
        title: "Business website",
        description:
          "Build a credible business presence with essential pages, contact options and an SEO foundation.",
      },
      premium_web: {
        title: "Premium website",
        description:
          "Create a distinctive brand experience with bespoke design, richer content and considered motion.",
      },
      reservation_system: {
        title: "Booking / enquiry system",
        description:
          "Let customers book, schedule appointments or request your services directly online.",
      },
      management_panel: {
        title: "Management dashboard",
        description:
          "Bring customer records, staff and day-to-day work into one dashboard built for your business.",
      },
      custom_software: {
        title: "Custom software",
        description:
          "Shape software around how your business works, instead of adapting your business to off-the-shelf tools.",
      },
      operations_system: {
        title: "Operations management system",
        description:
          "Manage tasks, inventory, field work and reporting from one connected workspace.",
      },
      saas_system: {
        title: "Multi-user / SaaS system",
        description:
          "Build a product ready to grow, with user roles and separate workspaces for multiple businesses.",
      },
    },
  },
  de: {
    previewFrom: "Einstieg ab",
    label: "EINSTIEGSPREISE",
    title: "Ein Ausgangspunkt\nfür Ihre Idee.",
    description:
      "Jedes Projekt ist anders. Entdecken Sie Einstiegsbudgets für vergleichbare Vorhaben und finden Sie den passenden Umfang für Ihr Unternehmen.",
    disclaimer:
      "Die genannten Beträge sind Einstiegspreise. Der endgültige Projektpreis richtet sich nach Umfang, Funktionen und Anforderungen.",
    previewTitle: "Ein klareres Budget\nfür den ersten Schritt.",
    previewDescription:
      "Vom Webauftritt bis zur individuellen Unternehmenslösung. Finden Sie Ihren Einstieg.",
    viewAll: "Alle Einstiegspreise ansehen",
    from: "Ab ",
    suffix: "",
    cta: "Informationen per WhatsApp",
    call: "Anrufen",
    whatsapp: "Per WhatsApp schreiben",
    email: "E-Mail senden",
    inquiry:
      "Guten Tag, ich möchte mehr über den Einstiegsumfang und Preis für {service} erfahren.",
    contactTitle: "Finden wir den Umfang,\nder zu Ihnen passt.",
    groups: [
      "Web & digitale Erlebnisse",
      "Individuelle Software",
      "Unternehmenssysteme",
    ],
    items: {
      landing_page: {
        title: "Landingpage",
        description:
          "Präsentieren Sie Ihre Marke, Leistung oder Kampagne auf einer fokussierten, überzeugenden Seite.",
      },
      corporate_web: {
        title: "Unternehmenswebsite",
        description:
          "Schaffen Sie Vertrauen mit professionellen Seiten, Kontaktmöglichkeiten und einer SEO-Grundlage.",
      },
      premium_web: {
        title: "Premium-Website",
        description:
          "Geben Sie Ihrer Marke ein eigenständiges digitales Erlebnis mit individuellem Design, Inhalten und gezielter Bewegung.",
      },
      reservation_system: {
        title: "Buchungs- / Anfragesystem",
        description:
          "Erhalten Sie Reservierungen, Terminbuchungen und Serviceanfragen direkt online.",
      },
      management_panel: {
        title: "Verwaltungsdashboard",
        description:
          "Bündeln Sie Kunden, Personal, Datensätze und Aufgaben in einer auf Ihr Unternehmen zugeschnittenen Oberfläche.",
      },
      custom_software: {
        title: "Individuelle Software",
        description:
          "Passen Sie die Software an Ihre Arbeitsweise an, statt Ihre Abläufe nach Standardlösungen auszurichten.",
      },
      operations_system: {
        title: "Betriebsmanagementsystem",
        description:
          "Verwalten Sie Aufgaben, Bestände, Außendienst und Berichte an einem zentralen Ort.",
      },
      saas_system: {
        title: "Mehrbenutzer- / SaaS-System",
        description:
          "Entwickeln Sie ein wachstumsfähiges Produkt mit Benutzerrollen und getrennten Bereichen für mehrere Unternehmen.",
      },
    },
  },
  fr: {
    previewFrom: "À partir de",
    label: "TARIFS DE DÉPART",
    title: "Un point de départ\npour votre idée.",
    description:
      "Chaque projet est différent. Découvrez des budgets de départ pour des besoins comparables, puis définissons le périmètre qui vous convient.",
    disclaimer:
      "Ces montants sont des tarifs de départ. Le prix final dépend du périmètre, des fonctionnalités et de vos besoins.",
    previewTitle: "Un budget plus clair\npour le premier pas.",
    previewDescription:
      "D’une présence web à un système conçu pour votre activité. Trouvez votre point de départ.",
    viewAll: "Voir tous les tarifs de départ",
    from: "À partir de ",
    suffix: "",
    cta: "Se renseigner sur WhatsApp",
    call: "Appeler",
    whatsapp: "Écrire sur WhatsApp",
    email: "Envoyer un e-mail",
    inquiry:
      "Bonjour, je souhaite en savoir plus sur le périmètre initial et le tarif pour {service}.",
    contactTitle: "Définissons le périmètre\nadapté à votre activité.",
    groups: [
      "Web & expériences numériques",
      "Logiciel sur mesure",
      "Systèmes de gestion",
    ],
    items: {
      landing_page: {
        title: "Landing page",
        description:
          "Présentez votre marque, votre service ou votre campagne sur une page claire et convaincante.",
      },
      corporate_web: {
        title: "Site web d’entreprise",
        description:
          "Inspirez confiance avec des pages professionnelles, des moyens de contact et les bases du référencement.",
      },
      premium_web: {
        title: "Site web premium",
        description:
          "Créez une expérience de marque singulière grâce à un design sur mesure, des contenus riches et des animations mesurées.",
      },
      reservation_system: {
        title: "Système de réservation / demandes",
        description:
          "Recevez directement en ligne les réservations, rendez-vous et demandes de service de vos clients.",
      },
      management_panel: {
        title: "Tableau de gestion",
        description:
          "Réunissez clients, personnel, dossiers et suivi des tâches dans une interface adaptée à votre entreprise.",
      },
      custom_software: {
        title: "Logiciel sur mesure",
        description:
          "Adaptez le logiciel à votre façon de travailler, plutôt que votre activité aux outils standards.",
      },
      operations_system: {
        title: "Système de gestion des opérations",
        description:
          "Pilotez tâches, stocks, interventions et rapports depuis un espace centralisé.",
      },
      saas_system: {
        title: "Système multi-utilisateur / SaaS",
        description:
          "Développez un produit prêt à grandir, avec des rôles utilisateurs et des espaces séparés pour plusieurs entreprises.",
      },
    },
  },
};
