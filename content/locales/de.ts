import type { SiteContent } from "../site";
const de: SiteContent = {
  nav: {
    home: "Startseite",
    solutions: "Lösungen",
    work: "Projekte",
    contact: "Kontakt",
    start: "Per WhatsApp schreiben",
    language: "Sprache wählen",
    open: "Menü öffnen",
    close: "Menü schließen",
    skip: "Zum Inhalt",
  },
  hero: {
    label: "DIGITALAGENTUR & STUDIO FÜR INDIVIDUELLE SOFTWARE",
    title: "Ihr Unternehmen.",
    accent: "Besser verbunden.",
    description:
      "Durchdachte Websites. Nützliche Software. Digitale Systeme, die zu Ihren Abläufen passen.",
    primary: "Per WhatsApp schreiben",
    secondary: "Unsere Projekte entdecken",
    note: "Von der ersten Idee bis zu den täglichen Details.",
    visual: "Eine Auswahl unserer tatsächlichen digitalen Projekte",
    caption: "IDEEN, DIE WEITERHELFEN.",
    detail: "Design und Entwicklung im Zusammenspiel.",
  },
  needs: {
    label: "HIER FÄNGT ES AN",
    title: "Was würde Ihren\nArbeitsalltag verbessern?",
    description:
      "Sie brauchen kein technisches Konzept. Erzählen Sie uns einfach, was sich ändern soll.",
    explore: "Diese Lösung entdecken",
    items: [
      {
        title: "Einen stärkeren Eindruck machen.",
        subtitle: "Websites & digitale Erlebnisse",
        description:
          "Ein digitaler Auftritt, der Sie treffend darstellt, Orientierung bietet und den nächsten Schritt einfach macht.",
        steps: ["Entdecken", "Erkunden", "Kontakt aufnehmen"],
        family: "web",
      },
      {
        title: "Die tägliche Arbeit erleichtern.",
        subtitle: "Individuelle Software & Betriebssysteme",
        description:
          "Aufgaben, Daten und Teams zusammenbringen. Eine Lösung für Ihre Abläufe entwickeln, statt Ihre Arbeit an ein Werkzeug anzupassen.",
        steps: ["Ordnen", "Abstimmen", "Überblick behalten"],
        family: "business",
      },
      {
        title: "Eine Idee Wirklichkeit werden lassen.",
        subtitle: "Individuelle digitale Produkte",
        description:
          "Den nützlichen Kern Ihrer Idee finden, das Erlebnis gestalten und eine erste Version für echte Nutzung entwickeln.",
        steps: ["Formulieren", "Entwickeln", "Verbessern"],
        family: "custom",
      },
    ],
  },
  work: {
    label: "AUSGEWÄHLTE PROJEKTE",
    title: "Verschiedene Aufgaben.\nDieselbe Sorgfalt.",
    description:
      "Digitale Produkte und Demonstrationsprojekte, die konkrete Bedürfnisse in verständliche Erlebnisse übersetzen.",
    all: "Alle Projekte entdecken",
    explore: "Projekt entdecken",
    discuss: "Ein ähnliches Projekt besprechen",
    problem: "Der Bedarf",
    solution: "Unser Ansatz",
    experience: "Was zusammenkommt",
    demo: "Demonstrationsprojekt",
    project: "Eigenständiges Projekt",
    diagram: "ABLAUF IM ÜBERBLICK",
    stories: {
      "mk-ops": {
        industry: "AUSSENDIENST",
        headline: "Außendienst und Büro auf demselben Stand.",
        problem:
          "Aufträge, Teams und Bestände brauchen einen gemeinsamen Überblick statt einzelner Nachrichten und Tabellen.",
        solution:
          "Ein Arbeitsbereich für Aufgaben, Projekte, Bestände und rollenbasierten Zugriff.",
        features: [
          "Aufgabenverfolgung",
          "Teamkoordination",
          "Bestandsübersicht",
        ],
        alt: "Bestehende MK Ops Website für Außendienstabläufe",
      },
      "mavi-resepsiyon": {
        industry: "BEHERBERGUNG",
        headline: "Ein ruhigerer Tag an der Rezeption.",
        problem:
          "Reservierungen, Zimmerstatus und Zahlungen gehören zu einem gemeinsamen Gästeerlebnis.",
        solution:
          "Eine Hoteldemo verbindet Zimmerplanung, Ankunft, Zahlungseingänge und Verwaltungsansichten.",
        features: ["Zimmerplanung", "Gästeankunft", "Zahlungen & Daten"],
        alt: "Ablauf von Zimmerplanung über Ankunft bis zur Zahlung",
      },
      "mk-farm": {
        industry: "LANDWIRTSCHAFT",
        headline: "Jedes Tier. Ein klarer Überblick.",
        problem:
          "Individuelle Tierdaten müssen mit der täglichen Arbeit auf dem Hof verbunden bleiben.",
        solution:
          "Eine Hofverwaltung führt QR-Identität, Gewicht und Gesundheitsverlauf zusammen.",
        features: ["QR-Identität", "Gewichtsverlauf", "Gesundheitsdaten"],
        alt: "Tatsächliche Übersicht der Anwendung MK Farm",
      },
      "mavi-adisyon": {
        industry: "GASTRONOMIE",
        headline: "Von der Bestellung bis zur Rechnung.",
        problem:
          "Service, Küche und Kasse müssen denselben Bestellablauf verfolgen können.",
        solution:
          "Eine Restaurantdemo mit abgestimmten Ansichten für Service, Küche, Kasse und Leitung.",
        features: ["Service", "Küche", "Kasse", "Leitung"],
        alt: "Restaurantablauf zwischen Service, Küche, Kasse und Leitung",
      },
      "mavi-kadraj": {
        industry: "FOTOGRAFIE & INHALTE",
        headline: "Visuellen Geschichten Raum geben.",
        problem:
          "Fotografie braucht einen geordneten Ort, an dem Bilder und Geschichten leicht auffindbar sind.",
        solution:
          "Eine Plattform verbindet Fotogalerien, Reiseberichte und Inhaltsverwaltung.",
        features: [
          "Fotogalerien",
          "Visuelle Geschichten",
          "Inhalte veröffentlichen",
        ],
        alt: "Bestehende Fotografie-Website Mavi Kadraj",
      },
      namehub: {
        industry: "DIGITALER AUFTRITT",
        headline: "Ein klarer digitaler Einstieg.",
        problem:
          "Eine Unternehmenswebsite soll Identität und Angebot in einem zugänglichen Erlebnis verbinden.",
        solution:
          "Ein Websiteprojekt mit klarer Inhaltsstruktur und einem Auftritt für unterschiedliche Geräte.",
        features: ["Markenauftritt", "Klare Navigation", "Mobile Nutzung"],
        alt: "Bestehende Website Namehub.tr",
      },
      santiye: {
        industry: "BAU & AUSSENDIENST",
        headline: "Sehen, was vorangeht. Wissen, was wartet.",
        problem:
          "Projektphasen, Orte und offene Aufgaben sind in getrennten Aufzeichnungen schwer zu verfolgen.",
        solution:
          "Ein Bausystem organisiert Projektphasen, Status und durchsuchbare Datensätze.",
        features: ["Projektphasen", "Statusverfolgung", "Durchsuchbare Daten"],
        alt: "Tatsächliches Dashboard der Baustellenverwaltung",
      },
      "mk-skor": {
        industry: "BEWERTUNG & ANALYSE",
        headline: "Entwicklung leichter verstehen.",
        problem:
          "Tests und Messungen brauchen einen zeitlichen Zusammenhang über ein Einzelergebnis hinaus.",
        solution:
          "Ein Bewertungsprodukt verbindet Tests, zeitliche Auswertung und statistische Berichte.",
        features: [
          "Bewertungen",
          "Fortschrittsverfolgung",
          "Statistische Berichte",
        ],
        alt: "Bewertungsablauf mit Tests, Fortschritt und Berichten",
      },
    },
  },
  solutions: {
    label: "LÖSUNGEN",
    title: "Für das entwickelt,\nwas Ihr Geschäft braucht.",
    description:
      "Ein besseres Erlebnis für Ihre Kunden. Ein klarerer Alltag für Ihr Team. Eine Idee, die Wirklichkeit wird.",
    audience: "Für wen?",
    builds: "Was wir entwickeln",
    example: "Ein Beispiel entdecken",
    cta: "Erzählen Sie uns von Ihrem Bedarf",
    items: [
      {
        id: "web",
        title: "Web & digitale Erlebnisse",
        description:
          "Ihr Geschäft leichter finden, verstehen und wählen. Wir verbinden Ihre Geschichte mit einem angenehmen Nutzungserlebnis.",
        for: "Unternehmen, eigenständige Marken und Fachleute, die ihren digitalen Auftritt stärken möchten.",
        features: [
          "Marken- und Unternehmenswebsites",
          "Inhalts- & Entdeckungsplattformen",
          "Wege zur Kundenanfrage",
        ],
        project: "mavi-kadraj-otel",
      },
      {
        id: "custom",
        title: "Individuelle Software",
        description:
          "Wenn Standardwerkzeuge nicht passen, beginnen wir bei Ihren tatsächlichen Abläufen und den wichtigen Aufgaben.",
        for: "Teams mit besonderen Abläufen, einer Produktidee oder einer Aufgabe, für die Standardsoftware nicht reicht.",
        features: [
          "Individuelle Webanwendungen",
          "Digitale Produkte & erste Versionen",
          "Verbundene Werkzeuge & Automatisierung",
        ],
        project: "mk-traceops",
      },
      {
        id: "business",
        title: "Betriebliche Verwaltungssysteme",
        description:
          "Menschen, Daten und tägliche Entscheidungen an einem Ort. Ein klarer nächster Schritt für alle Beteiligten.",
        for: "Hotels, Restaurants, Höfe und Außendienstteams mit unterschiedlichen Rollen.",
        features: [
          "Abläufe & Teamkoordination",
          "Reservierungen, Bestellungen & Daten",
          "Verwaltungsansichten & Berichte",
        ],
        project: "mavi-resepsiyon",
      },
      {
        id: "smart",
        title: "Intelligente & sprachbasierte Erlebnisse",
        description:
          "Einfachere Wege zum Fragen, Finden und Handeln erkunden. Sprachbasierte und unterstützte Erlebnisse mit einem konkreten Nutzen gestalten.",
        for: "Unternehmen, die zugänglichere Kundenkontakte oder geführte interne Abläufe erkunden möchten.",
        features: [
          "Konzepte für Sprachinteraktion",
          "Unterstützte Kundenabläufe",
          "Praktische Automatisierungsprototypen",
        ],
        project: "",
      },
    ],
  },
  process: {
    label: "SO ARBEITEN WIR",
    title: "Zuerst hören wir zu.\nDann setzen wir um.",
    description:
      "Eine gemeinsame Richtung, klare Entscheidungen und ein nützlicher Schritt in jeder Phase.",
    steps: [
      {
        title: "Verstehen",
        description: "Ihre Menschen, Ihre Abläufe und was sich ändern soll.",
      },
      {
        title: "Gestalten",
        description: "Den Weg klären, bevor die Details entstehen.",
      },
      {
        title: "Entwickeln",
        description:
          "Die vereinbarte Richtung in ein nutzbares Erlebnis übersetzen.",
      },
      {
        title: "Starten",
        description: "Details prüfen und Ihr System in Gebrauch bringen.",
      },
      {
        title: "Verbessern",
        description: "Aus dem Alltag lernen und den nächsten Schritt formen.",
      },
    ],
  },
  industries: {
    label: "ERFAHRUNG AUS TATSÄCHLICHEN PROJEKTEN",
    title: "Verschiedene Welten.\nKonkrete tägliche Aufgaben.",
    description:
      "Unsere eigenständigen Projekte und Demos erkunden digitale Erlebnisse für unterschiedliche Arbeitsweisen.",
    items: [
      "Beherbergung",
      "Gastronomie",
      "Landwirtschaft",
      "Außendienst",
      "Fertigung",
      "Immobilien",
    ],
  },
  contact: {
    label: "PROJEKT STARTEN",
    title: "Gute Ideen beginnen\nmit einem Gespräch.",
    description:
      "Erzählen Sie uns von Ihrer Idee, einer Herausforderung oder einem Ablauf, der leichter werden könnte.",
    intro: "Ein paar Details reichen für den Anfang.",
    direct: "Lieber direkt miteinander sprechen?",
    emailUs: "Schreiben Sie uns",
    whatsapp: "Auf WhatsApp sprechen",
    next: "Was passiert danach?",
    nextText:
      "Wir lesen Ihre Anfrage, stellen die hilfreichen Fragen und besprechen einen Ansatz, bevor wir gemeinsam den Umfang festlegen.",
    required: "Erforderlich",
    optional: "Optional",
    name: "Ihr Name",
    company: "Unternehmen",
    email: "E-Mail-Adresse",
    phone: "Telefon / WhatsApp",
    country: "Land",
    type: "Was haben Sie vor?",
    message: "Erzählen Sie uns etwas darüber",
    placeholder: "Was möchten Sie entwickeln oder erleichtern?",
    more: "Unternehmens- oder Kontaktdaten ergänzen",
    consent:
      "Ich stimme der Nutzung meiner Angaben zur Beantwortung dieser Anfrage zu, wie beschrieben in der",
    privacy: "Datenschutzerklärung",
    submit: "Projektanfrage senden",
    sending: "Ihre Anfrage wird gesendet…",
    success: "Ihre Anfrage ist unterwegs.",
    successText:
      "Vielen Dank für Ihre Idee. Wir antworten über die angegebenen Kontaktdaten.",
    error:
      "Ihre Anfrage konnte nicht gesendet werden. Ihre Angaben bleiben erhalten. Versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
    invalid:
      "Bitte füllen Sie die Pflichtfelder aus und stimmen Sie dem Datenschutzhinweis zu.",
    retry: "Eine weitere Anfrage senden",
    types: [
      "Website",
      "Individuelle Software",
      "Betriebliches System",
      "Digitales Produkt",
      "Intelligentes / sprachbasiertes Erlebnis",
      "Noch nicht sicher",
    ],
  },
  footer: {
    label: "IHR NÄCHSTES KAPITEL",
    title: "Etwas Nützliches\ngemeinsam schaffen.",
    cta: "Per WhatsApp schreiben",
    description:
      "Digitale Erlebnisse und betriebliche Software. Sorgfältig gestaltet. Für Ihre Abläufe entwickelt.",
    privacy: "Datenschutz",
    terms: "Bedingungen",
    copyright: "Alle Rechte vorbehalten.",
    top: "Nach oben",
  },
  legal: {
    privacyTitle: "Datenschutzhinweis",
    privacyIntro:
      "Dieser Hinweis erklärt, wie MK Digital Systems Angaben verarbeitet, die Sie über diese Website teilen.",
    privacySections: [
      {
        title: "Ihre Angaben",
        body: "Die Projektanfrage enthält Name, E-Mail, Projekttyp, Nachricht und Zustimmung. Unternehmen, Telefon und Land sind optional. Teilen Sie nur Informationen, die für Ihre Anfrage erforderlich sind.",
      },
      {
        title: "Verwendungszweck",
        body: "Wir nutzen Ihre Angaben, um Ihre Anfrage zu beantworten, Ihren Bedarf zu verstehen und ein mögliches Projekt zu besprechen. Wir verkaufen Ihre personenbezogenen Daten nicht.",
      },
      {
        title: "Übermittlung und Hosting",
        body: "Anfragen können über Formspree oder unseren eingerichteten E-Mail-Anbieter zugestellt werden. Diese Anbieter und unser Hostinganbieter verarbeiten die für den Betrieb nötigen Informationen. E-Mail und WhatsApp verwenden die jeweiligen Anbieter.",
      },
      {
        title: "Ihre Fragen",
        body: "Für Fragen zur Einsicht, Berichtigung oder Löschung Ihrer Anfrage nutzen Sie die E-Mail-Adresse auf dieser Website. Aufbewahrung und projektspezifische Datenverarbeitung sollten vor Projektbeginn vereinbart werden.",
      },
    ],
    termsTitle: "Websitebedingungen",
    termsIntro:
      "Diese Bedingungen beschreiben die Nutzung der Website von MK Digital Systems. Projekte erfordern eine gesonderte Vereinbarung.",
    termsSections: [
      {
        title: "Projektinformationen",
        body: "Die gezeigten Arbeiten umfassen eigenständige Produkte und gekennzeichnete Demonstrationsprojekte. Demos werden nicht als bezahlte Kundenprojekte dargestellt. Beschreibungen garantieren kein bestimmtes Geschäftsergebnis.",
      },
      {
        title: "Nutzung der Website",
        body: "Nutzen Sie die Website rechtmäßig. Versuchen Sie keinen unbefugten Zugriff, stören Sie den Betrieb nicht und senden Sie keine missbräuchlichen Anfragen. Sie sind für Ihre Angaben verantwortlich.",
      },
      {
        title: "Umfang und externe Links",
        body: "Eine Anfrage begründet keinen Dienstleistungsvertrag. Umfang, Termine, Gebühren und Betreuung werden gesondert vereinbart. Externe Projekte und Kontaktplattformen haben eigene Bedingungen und Datenschutzpraktiken.",
      },
    ],
    updated: "Aktualisiert im September 2026",
  },
  meta: {
    home: {
      title:
        "MK Digital Systems | Websites & individuelle Unternehmenssoftware",
      description:
        "Digitale Erlebnisse und nützliche Software passend zu Ihren Abläufen. Entdecken Sie MK Digital Systems Projekte und beginnen Sie ein Gespräch.",
    },
    solutions: {
      title: "Lösungen | MK Digital Systems",
      description:
        "Websites, individuelle Software, betriebliche Verwaltungssysteme und intelligente Erlebnisse für Ihre Kunden und täglichen Abläufe.",
    },
    work: {
      title: "Ausgewählte Projekte | MK Digital Systems",
      description:
        "Eigenständige Produkte und Demos für Außendienst, Beherbergung, Landwirtschaft, Gastronomie und digitale Erlebnisse.",
    },
    contact: {
      title: "Projekt besprechen | MK Digital Systems",
      description:
        "Teilen Sie Ihre Idee oder betriebliche Herausforderung mit MK Digital Systems. Senden Sie eine kurze Anfrage oder schreiben Sie per E-Mail und WhatsApp.",
    },
    privacy: {
      title: "Datenschutzhinweis | MK Digital Systems",
      description:
        "Wie MK Digital Systems Angaben aus dem Projektformular verwendet und übermittelt.",
    },
    terms: {
      title: "Websitebedingungen | MK Digital Systems",
      description:
        "Hinweise zur Website, Demonstrationsprojekten, externen Links und Projektanfragen.",
    },
  },
  notFound: {
    title: "Diese Seite ist umgezogen.",
    description: "Kehren wir zu einem hilfreichen Ausgangspunkt zurück.",
    back: "Zur Startseite",
  },
};
export default de;
