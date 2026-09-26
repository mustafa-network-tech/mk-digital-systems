import type { ProjectCopyBook } from ".";

const de: ProjectCopyBook = {
  "saha-santiye": {
    name: "Außendienst- & Baustellenbetrieb",
    industry: "TELEKOMMUNIKATION & AUSSENDIENST",
    summary:
      "Betriebssysteme für Telekommunikations- und Glasfaserfirmen im Außendienst – zwei unterschiedliche Ansätze für dasselbe Problem.",
    headline: "Arbeit im Feld, sofort im Büro sichtbar.",
    problem:
      "Tagesaufträge, Teams, Materialbewegungen, Einsatzprotokolle und Abrechnungen verteilen sich auf Nachrichten und getrennte Tabellen – was erledigt ist und was wartet, wird spät sichtbar.",
    solution:
      "Ein SaaS-Ansatz, den mehrere Unternehmen jeweils im eigenen Bereich nutzen (MK OPS), und ein Verwaltungssystem, das auf die Abläufe eines einzelnen Unternehmens zugeschnitten wird (Şantiye Yönetim).",
    modules: [
      "Tägliche Auftragserfassung und Freigaben",
      "Team- und Projektverwaltung",
      "Material- und Lagerverfolgung",
      "Abrechnungszeiträume und Berichte",
    ],
    alt: "Freigabe ausstehender Aufträge in der MK-OPS-Demo mit Beispieldaten",
    parts: {
      "mk-ops": {
        name: "MK OPS",
        description: "SaaS-Ansatz, bei dem mehrere Unternehmen in eigenen, rollenbasierten Bereichen arbeiten.",
      },
      "santiye-yonetim": {
        name: "Şantiye Yönetim",
        description: "Auf die Abläufe eines Unternehmens zugeschnittenes Panel mit sicherer Sitzungsverwaltung.",
      },
    },
  },
  "mk-adisyon": {
    industry: "RESTAURANTS & CAFÉS",
    summary: "Bestell- und Bonprodukt für Gastronomie mit laufendem Websystem und mobiler App im geschlossenen Test.",
    headline: "Von der ersten Bestellung bis zur Rechnung.",
    problem:
      "Service, Küche und Kasse müssen sehen, in welcher Phase sich dieselbe Bestellung befindet.",
    solution:
      "Ein laufendes Websystem, das Service, Küche, Kasse und Verwaltung verbindet, plus eine getrennte entwickelte mobile App im geschlossenen Test.",
    modules: ["Service", "Küche", "Kasse", "Verwaltung", "Mobile App · geschlossener Test"],
    alt: "MK Adisyon-Demo mit Beispieldaten: Kassenansicht mit offenen Tischen und Zahlungen",
    parts: {
      web: { name: "Web-App", description: "Ansichten für Service, Küche, Kasse und Verwaltung." },
      mobile: { name: "Mobile App", description: "Entwickelte mobile App, derzeit im geschlossenen Test." },
    },
  },
  "mk-farm": {
    industry: "LANDWIRTSCHAFT & VIEHZUCHT",
    summary: "Eine Verwaltungs-App, die einzelne Tierakten mit der täglichen Arbeit auf dem Hof verbindet.",
    headline: "Ein klarerer Eintrag für jedes Tier.",
    problem:
      "Einzelne Tierakten müssen zusammen mit den täglichen Abläufen des Betriebs geführt werden.",
    solution:
      "Eine Hofverwaltungs-App, die QR-Kennung, Wiegungen und Gesundheitsverlauf zusammenführt.",
    modules: ["QR-Kennung", "Gewichtsverlauf", "Gesundheitsakten"],
    alt: "Echte Übersichtsansicht der MK-Farm-App",
  },
  "mk-resepsiyon": {
    industry: "HOTELLERIE",
    summary:
      "Ein Betriebssystem für Hotels und Pensionen, das Zimmerplan, Check-in und Zahlungen verbindet.",
    headline: "Ein ruhigerer Tag an der Rezeption.",
    problem: "Reservierungen, Zimmerstatus und Zahlungen gehören zum selben Gästeerlebnis.",
    solution:
      "Ein Hotelbetriebssystem, das Zimmerplan, Check-in, Zahlungen und Verwaltungsansichten verbindet.",
    modules: ["Zimmerplan", "Gäste-Check-in", "Zahlungen & Belege"],
    alt: "MK Resepsiyon-Demo mit Beispieldaten: Übersicht der Rezeption",
  },
  "mk-pati": {
    industry: "TIERARZTPRAXEN",
    summary:
      "Patienten-, Untersuchungs-, Impf- und Terminverwaltung für Tierarztpraxen – mit KI-Praxisassistent.",
    headline: "Die Patientenhistorie auf einen Blick.",
    problem:
      "Wenn Patientenkarten, Impfpläne und Termine an verschiedenen Orten liegen, gerät die Nachverfolgung ins Stocken.",
    solution:
      "Ein Praxisverwaltungssystem, das Patienten-, Untersuchungs-, Impf- und Termindaten bündelt – unterstützt durch einen KI-Praxisassistenten.",
    modules: ["Patientenakten", "Untersuchungen & Impfungen", "Termine", "KI-Praxisassistent"],
    alt: "Startansicht der MK Pati Produktwebsite",
  },
  "mk-kargo": {
    industry: "FRACHT & LOGISTIK",
    summary:
      "Eine Kundenseite mit Preisrechner für Busfracht-Unternehmen und ein Betriebspanel zur Auftragsverwaltung.",
    headline: "Ein Ablauf von der Anfrage bis zur Zustellung.",
    problem: "Preisanfragen, Sendungsanfragen und Auftragsstatus verteilen sich auf Anrufe und Nachrichten.",
    solution:
      "Eine Kundenseite, die Preise nach Maßen und Strecke sofort berechnet, und ein Betriebspanel für Anfragen, Aufträge, Fahrzeuge und Dokumentexporte.",
    modules: ["Sofortige Preisberechnung", "Sendungsanfragen", "Auftrags- und Fahrzeugverwaltung", "PDF- und Excel-Exporte"],
    alt: "Startansicht der MK Kargo Beispiel-Website",
  },
  namehub: {
    industry: "DIGITALES PRODUKT",
    summary: "Eine Namensplattform mit Vorschlägen für Babys, Haustiere, Marken und Benutzernamen.",
    alt: "Startseite von NameHub",
  },
  aria: {
    industry: "SOZIALE PLATTFORM",
    summary:
      "Oberfläche einer sozialen Plattform für eine Foto- und Natur-Community: Feed, Profile, Folgen, Nachrichten und Uploads.",
    alt: "Entdecken-Feed der sozialen Plattform ARIA",
  },
  "mavi-kadraj-arsiv": {
    industry: "FOTOARCHIV",
    summary: "Ein Fotoarchiv, das sich nach Themen und Städten durchsuchen und filtern lässt.",
    alt: "Startseite des Mavi-Kadraj-Fotoarchivs",
  },
  "kadraj-rotam": {
    industry: "FOTOROUTEN",
    summary: "Eine Plattform für lokale und internationale Fotorouten, Feldnotizen und Entdeckungsführer.",
    alt: "Startseite von Kadraj Rotam",
  },
  aura: {
    industry: "MOBILE APP",
    summary: "Eine schlichte App für Tagebuch und Stimmungsverlauf.",
    alt: "Aura-App mit Beispieldaten: Heute, Stimmungsauswahl und Kalender",
  },
  "is-takip": {
    name: "Auftragsverfolgung",
    industry: "AUFTRAGSVERFOLGUNG",
    summary: "Eine App, um Status und Zuständigkeit der täglichen Arbeit an einem Ort zu verfolgen.",
    alt: "Ansicht der App zur Auftragsverfolgung",
  },
  "gunluk-imalat": {
    name: "Tägliche Produktionskarte",
    industry: "FERTIGUNG",
    summary: "Eine App, die tägliche Produktionsaufzeichnungen in der Werkstatt in eine digitale Karte verwandelt.",
    alt: "Ansicht der App „Tägliche Produktionskarte“",
  },
  "mavi-sarkilar": {
    industry: "MUSIK & KÜNSTLER",
    summary:
      "Ein Web-Erlebnis für einen Musiker: Spotify-Showcase, Musikvideos, Konzerttermine und Newsletter-Bereich.",
    alt: "Startansicht der Künstlerseite Mavi Şarkılar",
  },
  musty: {
    industry: "CINEASTISCHES PORTFOLIO",
    summary:
      "Ein cineastisches, zweisprachiges Portfolio für einen bildenden Künstler: Galerie, Video und Bilder.",
    alt: "Startansicht der Portfolio-Seite Musty",
  },
  "mk-firsat": {
    industry: "PLATTFORM FÜR ANGEBOTE & EINKAUFSENTDECKUNG",
    summary:
      "Eine moderne digitale Plattform, die Angebote entdecken und Einkaufsmöglichkeiten in einem Erlebnis zusammenbringen soll.",
    description:
      "MK Fırsat ist ein modernes Einkaufs- und Entdeckungserlebnis, mit dem Menschen Angebote leichter entdecken, Optionen vergleichen und interessante Angebote schnell erreichen sollen. Von Anfang an für Web und Mobil gedacht, erscheint das Projekt künftig als eigenständiges digitales Produkt der MK Digital Systems Produktfamilie.",
  },
  "mavi-kadraj-otel": {
    industry: "HOTEL-WEBSITE",
    summary:
      "Beispiel-Website für Hotels und Pensionen mit Zimmerseiten, Galerie und schrittweisem Buchungsablauf.",
    alt: "Startansicht der Beispiel-Website Mavi Kadraj Otel",
  },
  "mavi-kafe": {
    industry: "CAFÉ- & RESTAURANT-WEBSITE",
    summary: "Beispiel-Website für Cafés und Restaurants mit digitaler Speisekarte, Galerie und Reservierung.",
    alt: "Startansicht der Beispiel-Website Mavi Kafe",
  },
  "mavi-guzellik": {
    industry: "KOSMETIKSALON-WEBSITE",
    summary:
      "Beispiel-Website für Kosmetiksalons mit Leistungen, Teamvorstellung und WhatsApp-Terminablauf.",
    alt: "Startansicht der Beispiel-Website Mavi Güzellik",
  },
  "mavi-danismanlik": {
    industry: "BERATUNGS-WEBSITE",
    summary: "Beispiel-Website für Beratung mit Leistungsseiten, Terminanfrage und Kontaktablauf.",
    alt: "Startansicht der Beispiel-Website Mavi Danışmanlık",
  },
  "mavi-yapi": {
    industry: "B2B-BESCHAFFUNGS-WEBSITE",
    summary:
      "Zweisprachige B2B-Beispiel-Website mit Produktkatalog, Kategorieseiten und Angebotsformular.",
    alt: "Startansicht der Beispiel-Website Mavi Yapı",
  },
  "mavi-iletisim": {
    industry: "TECHNIK-SHOP-WEBSITE",
    summary: "Beispiel-Website für einen Technikladen mit Produktkatalog, Warenkorb und Reparaturanfragen.",
    alt: "Startansicht der Beispiel-Website Mavi İletişim",
  },
};

export default de;
