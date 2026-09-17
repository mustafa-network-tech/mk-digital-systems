import type { Locale } from "@/config/i18n";
import type { StoryCopy } from "./site";
// Verified source: https://mustafaoner.net/projects and its project detail pages.
export const projectStatus: Record<Locale, Record<string, string>> = {
  en: {
    demo: "Demonstration project",
    active: "In active use",
    development: "In development",
    project: "Independent project",
  },
  tr: {
    demo: "Örnek uygulama",
    active: "Aktif kullanımda",
    development: "Geliştirme aşamasında",
    project: "Bağımsız proje",
  },
  de: {
    demo: "Demonstrationsprojekt",
    active: "Im aktiven Einsatz",
    development: "In Entwicklung",
    project: "Eigenständiges Projekt",
  },
  fr: {
    demo: "Projet de démonstration",
    active: "En utilisation active",
    development: "En développement",
    project: "Projet indépendant",
  },
};
export const additionalStories: Record<Locale, Record<string, StoryCopy>> = {
  en: {
    "mk-traceops": {
      industry: "MANUFACTURING",
      headline: "Follow the journey of what you make.",
      problem:
        "Parts, production steps, stock and shipments need a connected record.",
      solution:
        "A system in development connecting production routes, warehouse movements and traceability.",
      features: [
        "Production routes",
        "Inventory movements",
        "Shipment tracking",
      ],
      alt: "Actual MK TraceOps interface from the published project gallery",
    },
    "mavi-kadraj-otel": {
      industry: "HOSPITALITY WEBSITES",
      headline: "The stay begins before the arrival.",
      problem:
        "Guests need to discover the place, compare rooms and understand how to book.",
      solution:
        "A hotel website demo connecting rooms, nature routes and a step-by-step booking journey.",
      features: ["Room discovery", "Local experiences", "Booking journey"],
      alt: "Actual Mavi Kadraj Otel website demo",
    },
    "mavi-gayrimenkul": {
      industry: "REAL ESTATE",
      headline: "Help the right property find its person.",
      problem:
        "Property searches need clear listings, useful filters and an easy next step.",
      solution:
        "A real-estate demo combining listings, areas, comparisons and inquiry journeys.",
      features: ["Property listings", "Search & comparison", "Appointments"],
      alt: "Actual Mavi Gayrimenkul real estate website demo",
    },
    "mavi-kafe": {
      industry: "RESTAURANT WEBSITES",
      headline: "A taste of the place, before the visit.",
      problem:
        "Guests want to explore the menu, feel the atmosphere and plan their visit.",
      solution:
        "A restaurant website demo bringing menu, venue stories, gallery and reservations together.",
      features: ["Digital menu", "Venue gallery", "Reservations"],
      alt: "Actual Mavi Kafe and Restaurant website demo",
    },
  },
  tr: {
    "mk-traceops": {
      industry: "ÜRETİM",
      headline: "Ürettiğiniz her şeyin yolculuğunu izleyin.",
      problem:
        "Parçalar, üretim adımları, stok ve sevkiyatlar birbirine bağlı kayıtlara ihtiyaç duyar.",
      solution:
        "Üretim rotalarını, depo hareketlerini ve izlenebilirliği birleştiren, geliştirme aşamasındaki sistem.",
      features: ["Üretim rotaları", "Stok hareketleri", "Sevkiyat takibi"],
      alt: "Yayınlanan proje galerisinden alınan gerçek MK TraceOps arayüzü",
    },
    "mavi-kadraj-otel": {
      industry: "OTEL WEB SİTELERİ",
      headline: "Konaklama, varıştan önce başlar.",
      problem:
        "Misafirler mekânı keşfetmek, odaları karşılaştırmak ve rezervasyonu kolayca anlamak ister.",
      solution:
        "Odaları, doğa rotalarını ve adım adım rezervasyon deneyimini birleştiren otel sitesi demosu.",
      features: ["Oda keşfi", "Yerel deneyimler", "Rezervasyon akışı"],
      alt: "Gerçek Mavi Kadraj Otel web sitesi demosu",
    },
    "mavi-gayrimenkul": {
      industry: "GAYRİMENKUL",
      headline: "Doğru ev, doğru insanla buluşsun.",
      problem:
        "Gayrimenkul arayışı anlaşılır ilanlar, işe yarayan filtreler ve kolay iletişim gerektirir.",
      solution:
        "İlanları, bölgeleri, karşılaştırmayı ve talep akışlarını birleştiren gayrimenkul demosu.",
      features: ["Gayrimenkul ilanları", "Arama & karşılaştırma", "Randevu"],
      alt: "Gerçek Mavi Gayrimenkul web sitesi demosu",
    },
    "mavi-kafe": {
      industry: "RESTORAN WEB SİTELERİ",
      headline: "Mekânın tadı, ziyaretten önce.",
      problem:
        "Misafirler menüyü incelemek, atmosferi hissetmek ve ziyaretlerini planlamak ister.",
      solution:
        "Menü, mekân hikâyesi, galeri ve rezervasyonu buluşturan restoran web sitesi demosu.",
      features: ["Dijital menü", "Mekân galerisi", "Rezervasyon"],
      alt: "Gerçek Mavi Kafe ve Restaurant web sitesi demosu",
    },
  },
  de: {
    "mk-traceops": {
      industry: "FERTIGUNG",
      headline: "Verfolgen, was Sie herstellen.",
      problem:
        "Teile, Fertigungsschritte, Bestände und Lieferungen brauchen verbundene Aufzeichnungen.",
      solution:
        "Ein System in Entwicklung verbindet Fertigungswege, Lagerbewegungen und Rückverfolgbarkeit.",
      features: ["Fertigungswege", "Bestandsbewegungen", "Lieferverfolgung"],
      alt: "Tatsächliche MK TraceOps Oberfläche aus der veröffentlichten Projektgalerie",
    },
    "mavi-kadraj-otel": {
      industry: "HOTELWEBSITES",
      headline: "Der Aufenthalt beginnt vor der Ankunft.",
      problem:
        "Gäste möchten den Ort entdecken, Zimmer vergleichen und einfach buchen können.",
      solution:
        "Eine Hotelwebsite-Demo verbindet Zimmer, Naturrouten und einen schrittweisen Buchungsweg.",
      features: ["Zimmer entdecken", "Lokale Erlebnisse", "Buchungsweg"],
      alt: "Tatsächliche Website-Demo Mavi Kadraj Otel",
    },
    "mavi-gayrimenkul": {
      industry: "IMMOBILIEN",
      headline: "Die passende Immobilie finden.",
      problem:
        "Die Immobiliensuche braucht klare Angebote, nützliche Filter und einen einfachen nächsten Schritt.",
      solution:
        "Eine Immobiliendemo mit Angeboten, Regionen, Vergleichen und Anfragewegen.",
      features: ["Immobilienangebote", "Suche & Vergleich", "Termine"],
      alt: "Tatsächliche Immobilienwebsite-Demo Mavi Gayrimenkul",
    },
    "mavi-kafe": {
      industry: "RESTAURANTWEBSITES",
      headline: "Den Ort schon vor dem Besuch erleben.",
      problem:
        "Gäste möchten Speisekarte und Atmosphäre entdecken und ihren Besuch planen.",
      solution:
        "Eine Restaurantwebsite-Demo verbindet Menü, Geschichte, Galerie und Reservierung.",
      features: ["Digitale Speisekarte", "Raumgalerie", "Reservierungen"],
      alt: "Tatsächliche Website-Demo Mavi Kafe und Restaurant",
    },
  },
  fr: {
    "mk-traceops": {
      industry: "FABRICATION",
      headline: "Suivre le parcours de votre production.",
      problem:
        "Pièces, étapes de fabrication, stocks et expéditions nécessitent des dossiers reliés.",
      solution:
        "Un système en développement relie parcours de production, mouvements de stock et traçabilité.",
      features: [
        "Parcours de production",
        "Mouvements de stock",
        "Suivi des expéditions",
      ],
      alt: "Véritable interface MK TraceOps issue de la galerie publiée",
    },
    "mavi-kadraj-otel": {
      industry: "SITES HÔTELIERS",
      headline: "Le séjour commence avant l'arrivée.",
      problem:
        "Les clients souhaitent découvrir le lieu, comparer les chambres et réserver simplement.",
      solution:
        "Une démonstration hôtelière relie chambres, itinéraires nature et réservation par étapes.",
      features: [
        "Découverte des chambres",
        "Expériences locales",
        "Parcours de réservation",
      ],
      alt: "Véritable démonstration du site Mavi Kadraj Otel",
    },
    "mavi-gayrimenkul": {
      industry: "IMMOBILIER",
      headline: "Le bon bien pour la bonne personne.",
      problem:
        "La recherche immobilière demande des annonces claires, des filtres utiles et un contact simple.",
      solution:
        "Une démonstration immobilière réunit annonces, quartiers, comparaisons et demandes.",
      features: [
        "Annonces immobilières",
        "Recherche & comparaison",
        "Rendez-vous",
      ],
      alt: "Véritable démonstration immobilière Mavi Gayrimenkul",
    },
    "mavi-kafe": {
      industry: "SITES DE RESTAURANTS",
      headline: "Goûter l'ambiance avant la visite.",
      problem:
        "Les clients veulent découvrir le menu, ressentir l'atmosphère et préparer leur visite.",
      solution:
        "Une démonstration de restaurant relie menu, histoire du lieu, galerie et réservations.",
      features: ["Menu numérique", "Galerie du lieu", "Réservations"],
      alt: "Véritable démonstration du site Mavi Kafe et Restaurant",
    },
  },
};
