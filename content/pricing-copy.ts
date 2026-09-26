import type { Locale } from "@/config/i18n";
import type { PricingGroup, PricingId } from "./pricing";

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
  /** Shown instead of an amount where no price book exists (en/de/fr). */
  quote: string;
  groupTitles: Record<PricingGroup, string>;
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
    quote: "Proje bazlı teklif",
    groupTitles: { new: "Yeni proje", support: "Mevcut sitenize destek" },
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
      mobile_app: {
        title: "Mobil uygulama",
        description:
          "İşletmeniz veya fikriniz için kolay kullanılan bir mobil uygulama geliştirin.",
      },
      wordpress_revision: {
        title: "WordPress site düzenleme / revize",
        description:
          "Mevcut WordPress sitenizin tasarımını, içeriğini veya işleyişini ihtiyaçlarınıza göre güncelleyin.",
      },
      seo: {
        title: "SEO çalışmaları",
        description:
          "Sitenizin arama motorlarında daha kolay bulunması için teknik altyapıyı ve içerikleri iyileştirin.",
      },
    },
  },
  en: {
    previewFrom: "Starting from",
    label: "PRICING",
    title: "Priced around\nyour project.",
    description:
      "Every project is different, so we quote each one on its own scope. See what we build, then tell us what you need.",
    disclaimer:
      "Pricing is project-based. We prepare a quotation once we understand your scope, features and requirements.",
    previewTitle: "A clear quote\nfor your first step.",
    previewDescription:
      "From a web experience to a system built around your business. Tell us about your project and we’ll prepare a quote.",
    viewAll: "See all services",
    from: "From ",
    suffix: "",
    cta: "Request a quote on WhatsApp",
    call: "Call us",
    whatsapp: "Message on WhatsApp",
    email: "Send an email",
    inquiry:
      "Hello, I would like a project-based quotation for {service}.",
    contactTitle: "Let’s find the scope\nthat fits your business.",
    quote: "Project-based quotation",
    groupTitles: { new: "New projects", support: "Support for your existing website" },
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
      mobile_app: {
        title: "Mobile app",
        description:
          "Build an easy-to-use mobile app for your business or idea.",
      },
      wordpress_revision: {
        title: "WordPress updates / redesign",
        description:
          "Update the design, content or behaviour of your existing WordPress site to fit your needs.",
      },
      seo: {
        title: "SEO work",
        description:
          "Improve your site’s technical foundation and content so people find you more easily in search.",
      },
    },
  },
  de: {
    previewFrom: "Einstieg ab",
    label: "PREISE",
    title: "Preise, die sich\nnach Ihrem Projekt richten.",
    description:
      "Jedes Projekt ist anders – deshalb erstellen wir für jedes ein Angebot nach seinem Umfang. Sehen Sie, was wir entwickeln, und erzählen Sie uns von Ihrem Vorhaben.",
    disclaimer:
      "Unsere Preise sind projektbezogen. Wir erstellen ein Angebot, sobald wir Umfang, Funktionen und Anforderungen kennen.",
    previewTitle: "Ein klares Angebot\nfür den ersten Schritt.",
    previewDescription:
      "Vom Webauftritt bis zur individuellen Unternehmenslösung. Erzählen Sie uns von Ihrem Projekt – wir erstellen ein Angebot.",
    viewAll: "Alle Leistungen ansehen",
    from: "Ab ",
    suffix: "",
    cta: "Angebot per WhatsApp anfragen",
    call: "Anrufen",
    whatsapp: "Per WhatsApp schreiben",
    email: "E-Mail senden",
    inquiry:
      "Guten Tag, ich möchte ein projektbezogenes Angebot für {service} anfragen.",
    contactTitle: "Finden wir den Umfang,\nder zu Ihnen passt.",
    quote: "Projektbezogenes Angebot",
    groupTitles: { new: "Neue Projekte", support: "Unterstützung für Ihre bestehende Website" },
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
      mobile_app: {
        title: "Mobile App",
        description:
          "Entwickeln Sie eine benutzerfreundliche mobile App für Ihr Unternehmen oder Ihre Idee.",
      },
      wordpress_revision: {
        title: "WordPress-Überarbeitung",
        description:
          "Passen Sie Design, Inhalte oder Funktionen Ihrer bestehenden WordPress-Website an Ihre Anforderungen an.",
      },
      seo: {
        title: "SEO-Optimierung",
        description:
          "Verbessern Sie technische Basis und Inhalte Ihrer Website, damit Sie in Suchmaschinen leichter gefunden werden.",
      },
    },
  },
  fr: {
    previewFrom: "À partir de",
    label: "TARIFS",
    title: "Un tarif adapté\nà votre projet.",
    description:
      "Chaque projet est différent : nous établissons donc un devis selon son périmètre. Découvrez ce que nous réalisons, puis parlez-nous de votre besoin.",
    disclaimer:
      "Nos tarifs sont établis sur devis. Nous préparons une proposition une fois le périmètre, les fonctionnalités et vos besoins définis.",
    previewTitle: "Un devis clair\npour le premier pas.",
    previewDescription:
      "D’une présence web à un système conçu pour votre activité. Parlez-nous de votre projet, nous préparons un devis.",
    viewAll: "Voir tous les services",
    from: "À partir de ",
    suffix: "",
    cta: "Demander un devis sur WhatsApp",
    call: "Appeler",
    whatsapp: "Écrire sur WhatsApp",
    email: "Envoyer un e-mail",
    inquiry:
      "Bonjour, je souhaite recevoir un devis pour {service}.",
    contactTitle: "Définissons le périmètre\nadapté à votre activité.",
    quote: "Sur devis",
    groupTitles: { new: "Nouveaux projets", support: "Accompagnement de votre site existant" },
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
      mobile_app: {
        title: "Application mobile",
        description:
          "Développez une application mobile simple à utiliser pour votre activité ou votre idée.",
      },
      wordpress_revision: {
        title: "Refonte / mise à jour WordPress",
        description:
          "Mettez à jour le design, le contenu ou le fonctionnement de votre site WordPress existant.",
      },
      seo: {
        title: "Référencement (SEO)",
        description:
          "Améliorez les bases techniques et les contenus de votre site pour être trouvé plus facilement dans les moteurs de recherche.",
      },
    },
  },
};
