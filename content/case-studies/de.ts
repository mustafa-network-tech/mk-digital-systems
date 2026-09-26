import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const de: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "MK OPS: Außendienst-Management für Telekom und Glasfaser | MK Digital Systems",
      description:
        "MK OPS führt Tagesarbeit, Freigaben, Teams, Material und Abrechnung von Telekom- und Glasfaserteams in einem System zusammen – jedes Unternehmen im eigenen Bereich.",
    },
    title: "Den Außendienst an einem Ort zusammenführen",
    lead:
      "Arbeit vor Ort, zur gleichen Zeit im Büro sichtbar. MK OPS führt den Außendienst bei Telekom- und Glasfaserprojekten – von der täglichen Erfassung und Freigabe bis zu Teams, Material und Abrechnung – in einem System zusammen, das jedes Unternehmen in seinem eigenen Bereich nutzt.",
    audience: {
      heading: "Wessen Problem?",
      text:
        "Unternehmen, die bei Telekom- und Glasfaserprojekten viele Teams, Projekte und Materialien gleichzeitig steuern. Von den Teamleitern vor Ort bis zu Disposition und Buchhaltung im Büro sieht jeder einen anderen Teil der Arbeit.",
      points: [
        "Teams und Teamleiter, die am selben Tag auf verschiedenen Projekten arbeiten",
        "Projekt- und Unternehmensleitung, die Arbeit plant, prüft und freigibt",
        "Das Lager, das Material, Fahrzeuge und Ausrüstung verfolgt",
        "Das Büro, das Abrechnungen und Berichte erstellt",
      ],
    },
    problem: {
      heading: "Was war das Problem?",
      text:
        "Vor Ort geht es schnell; die Informationen landen in Nachrichten, Fotos und getrennten Tabellen. Welches Team wo was macht, welche Arbeit auf Freigabe wartet, wohin Material gegangen ist: oft erst am Abend sichtbar, von Hand zusammengesetzt.",
      points: [
        "Die Tagesarbeit bleibt in Nachrichten und Papierformularen",
        "Welche Arbeit auf Freigabe wartet, ist bis zum Abend unklar",
        "Materialausgaben stimmen nicht mit dem Bestand überein",
        "Teamverdienst und Abrechnung werden am Periodenende von Hand zusammengetragen",
        "Daten mehrerer Unternehmen vermischen sich in denselben Tabellen",
      ],
    },
    approach: {
      heading: "Wie sind wir vorgegangen?",
      text:
        "Wir haben nicht bei den Bildschirmen angefangen, sondern beim Ablauf eines Tages vor Ort: Erfassung tagsüber, Prüfung und Freigabe am Abend, Berichte zum Periodenende. Ziel: Wer eine Information zuerst sieht, erfasst sie direkt – und jeder sieht nur, was ihm nützt.",
      points: [
        "In Rollen denken: Teamleiter, Projektleitung und Unternehmensleitung sehen Unterschiedliches",
        "Schnelle Erfassung am Handy vor Ort, gesammelte Prüfung am Desktop im Büro",
        "Ein klarer Freigabeablauf: Entwurf, eingereicht, freigegeben oder abgelehnt",
        "Einträge nach Abrechnungszeiträumen bündeln",
      ],
    },
    solution: {
      heading: "Jedes Unternehmen in seinem eigenen Bereich",
      text:
        "Wir haben MK OPS als mandantenfähiges SaaS gebaut, das mehrere Unternehmen nutzen – jedes in einem eigenen, isolierten Bereich. Jedes Unternehmen verwaltet dort Teams, Projekte, Außendienstarbeit und Freigaben; rollenbasierte Rechte sorgen dafür, dass jeder nur seine eigene Arbeit sieht.",
      points: [
        "Datenisolierung pro Unternehmen und rollenbasierte Rechte",
        "Tägliche Erfassung der Arbeit vor Ort und Freigabeablauf",
        "Materiallieferscheine und Bestandsführung",
        "Teamverdienst, Unternehmensanteil und Abrechnungszeiträume",
        "Prüfprotokoll, Excel- und PDF-Berichte",
        "Oberfläche auf Türkisch, Englisch, Deutsch, Französisch und Spanisch",
      ],
    },
    screens: {
      "ops-approvals": {
        caption: "MK OPS · Freigaben: Die von Teamleitern eingereichte Tagesarbeit wird in einer Liste freigegeben oder abgelehnt.",
        alt: "MK-OPS-Freigabeansicht mit Beispielaufträgen, die auf Freigabe warten",
      },
      "ops-mobile": {
        caption: "MK OPS · Mobil: dieselbe Freigabeliste am Handy vor Ort.",
        alt: "MK-OPS-Freigaben auf dem Handy mit Beispieldaten",
      },
      "ops-management": {
        caption: "MK OPS · Verwaltung: Teams, Fahrzeuge, Materialbestand, Ausrüstung und Leistungspositionen.",
        alt: "MK-OPS-Verwaltung mit einer Beispielliste von Teams",
      },
    },
    ctaText: "Wenn Sie Außendienst und Bürosteuerung zusammenführen möchten, erzählen Sie uns, wie Ihr Tag heute abläuft – wir finden gemeinsam den passenden Ansatz.",
    screensNote: "Alle Einträge in diesen Ansichten sind Beispieldaten und enthalten keine echten Personen, Firmen oder Projekte.",
    modules: {
      heading: "Kernmodule",
      items: [
        { title: "Tägliche Erfassung und Freigabe", text: "Arbeit vor Ort wird am selben Tag erfasst; die Leitung gibt sie in einer Liste frei oder fordert eine Korrektur an." },
        { title: "Team- und Projektverwaltung", text: "Teams, Projekte und Leistungspositionen werden je Unternehmen angelegt; die tägliche Erfassung baut darauf auf." },
        { title: "Materiallieferscheine und Bestand", text: "Materialausgaben werden mit Lieferschein erfasst; der Bestand aktualisiert sich aus denselben Einträgen." },
        { title: "Fahrzeuge und Ausrüstung", text: "Fahrzeuge und Ausrüstung werden zusammen mit den Teams an einem Ort geführt." },
        { title: "Abrechnungszeiträume", text: "Teamverdienst und Unternehmensanteil werden je Zeitraum aus denselben Einträgen berechnet." },
        { title: "Unternehmensbereich und Rollen", text: "Jedes Unternehmen arbeitet in einem eigenen, isolierten Bereich; Unternehmensleitung, Projektleitung und Teamleiter sehen unterschiedliche Ansichten." },
        { title: "Prüfprotokoll", text: "Wer was wann geändert hat, wird festgehalten." },
        { title: "Berichte und Sprachen", text: "Berichte lassen sich als Excel und PDF exportieren; die Oberfläche ist in fünf Sprachen nutzbar." },
      ],
    },
  },
  "mk-adisyon": {
    meta: {
      title: "Bestell- und Bonverwaltung für Gastronomie | MK Digital Systems",
      description:
        "MK Adisyon verbindet Service, Küche, Kasse und Verwaltung in einem laufenden Websystem. Die mobile Anwendung befindet sich im geschlossenen Test.",
    },
    title: "Gastronomieabläufe von der Bestellung bis zur Zahlung bündeln",
    lead:
      "MK Adisyon ist ein Produkt mit zwei Oberflächen, das das Restaurantteam vom ersten Tischauftrag über die Küche bis zum Kassenabschluss mit demselben Datensatz arbeiten lässt: ein laufendes Websystem und eine mobile Anwendung im geschlossenen Test.",
    audience: {
      heading: "Wessen Problem?",
      text:
        "Restaurants und Cafés, die Bestellung, Zubereitung, Service und Zahlung gleichzeitig koordinieren. Was der Service eingibt, muss ohne erneute Erfassung Küche, Kasse und Verwaltung erreichen.",
      points: [
        "Serviceteams, die Bereiche und Tischstatus verfolgen",
        "Küchen, die wartende, zubereitete und fertige Bestellungen steuern",
        "Kassen, die geteilte oder teilweise Zahlungen abwickeln",
        "Leitung für Produkte, Tische, Schichten und Betrieb",
      ],
    },
    problem: {
      heading: "Was war das Problem?",
      text:
        "Der Restaurantbetrieb bewegt sich zwischen Teams mit unterschiedlichem Tempo. Liegen Bestelldetails, Tischänderungen und Zahlungsstatus nicht in einem Datensatz, steigen Verzögerungen, Doppelerfassung und Missverständnisse.",
      points: [
        "Unterschiedliche Tisch- und Bestellstände in den Teams",
        "Unvollständige Produktoptionen, Notizen oder Servicerunden in der Küche",
        "Fertige Bestellungen erreichen den Service nicht rechtzeitig",
        "Aufteilung nach Person oder Position verlangsamt den Kassenabschluss",
      ],
    },
    approach: {
      heading: "Wie sind wir vorgegangen?",
      text:
        "Wir haben aufgabenbezogene Ansichten je Rolle entworfen und alle Rollen mit demselben Bon verbunden. So bleiben der vom Service geöffnete Tisch, der Küchenstatus und die Zahlungsschritte an der Kasse in einem durchgängigen Ablauf.",
      points: [
        "Aufgabenbezogene Ansichten für Service, Küche, Kasse und Verwaltung",
        "Ein Bestelldatensatz vom Tisch bis zum Zahlungsabschluss",
        "Klare Statuswechsel wie in Zubereitung, fertig und serviert",
        "Passende Anordnung für Aufgaben am Handy und Desktop",
      ],
    },
    solution: {
      heading: "Ein echtes Websystem und eine mobile Anwendung im geschlossenen Test",
      text:
        "MK Adisyon hat zwei echte Produktoberflächen. Die unten beschriebenen Betriebsfunktionen wurden im laufenden Websystem geprüft. Eine eigene mobile Anwendung wurde entwickelt und befindet sich im geschlossenen Test; ihr werden hier nur geprüfte Inhalte zugeschrieben.",
      parts: {
        web: {
          summary:
            "Das laufende Websystem bündelt Tisch, Bestellung, Küche, Service, Kasse und Verwaltung in rollenbezogenen Ansichten.",
          highlights: [
            "Bereiche und Tische, Tischöffnung und Gästezahl",
            "Produkte, Optionen, Notizen, Servicerunden und Übergabe an die Küche",
            "Ablauf für wartende, zubereitete, fertige und servierte Bestellungen",
            "Tische verschieben und zusammenführen sowie Rechnungen aufteilen",
            "Teilung nach Betrag, Person oder Position und Teilzahlungen",
            "Schichten, Produkte, Tische, Ausgaben, Finanzen und Aktivitäten",
          ],
        },
        mobile: {
          summary:
            "Die zweite entwickelte Produktoberfläche von MK Adisyon ist die mobile Anwendung. Sie befindet sich im geschlossenen Test; über den geprüften Startbildschirm hinaus wird ihr Umfang hier nicht erweitert.",
          highlights: [
            "Eine echte, entwickelte Produktoberfläche von MK Adisyon",
            "Derzeit im geschlossenen Test",
            "Geprüfte Anwendungsadresse getrennt vom Websystem",
          ],
        },
      },
    },
    screens: {
      "adisyon-cashier": {
        caption: "Websystem · Kasse: offener Bon, Zahlungsaufteilung und Zahlungsarten in einer Ansicht.",
        alt: "MK Adisyon Web-Kassenansicht mit Beispielbestellung und -zahlung",
      },
      "adisyon-waiter": {
        caption: "Websystem · Service: die responsive Weboberfläche am Handy; dies ist nicht die mobile Anwendung.",
        alt: "Responsive MK Adisyon Serviceansicht mit Beispieltischen",
      },
      "adisyon-mobile-app": {
        caption: "Mobile Anwendung · Geprüfter MK Adisyon Startbildschirm der geschlossenen Testoberfläche.",
        alt: "Startbildschirm der mobilen MK Adisyon Anwendung im geschlossenen Test",
      },
      "adisyon-kitchen": {
        caption: "Webanwendung · Küche: Bestellungen als Karten nach Tisch, Runde und Station, markiert als wartend, in Zubereitung oder fertig.",
        alt: "Küchenansicht der MK-Adisyon-Demo mit Beispielbestellungen",
      },
    },
    screensNote:
      "Die Einträge der Webansichten sind Beispieldaten. Die Serviceansicht im Handyrahmen ist responsives Web; die separate App-Ansicht ist ausdrücklich markiert. „Mavi Adisyon“ in der Weboberfläche ist bestehende Rebranding-Schuld; der öffentliche Produktname lautet MK Adisyon.",
    ctaText:
      "Wenn Bestellung, Küche und Zahlung in Ihrem Betrieb mit einem gemeinsamen Datensatz arbeiten sollen, sehen wir uns Ihren heutigen Ablauf gemeinsam an.",
    modules: {
      heading: "Im Websystem geprüfte Module",
      items: [
        { title: "Bereiche und Tische", text: "Bereiche und Tische werden nach Status verfolgt; beim Öffnen wird die Gästezahl erfasst." },
        { title: "Bestellablauf im Service", text: "Produkte werden mit Optionen, Notizen und Servicerunden aufgenommen und an die Küche gesendet." },
        { title: "Küchenansicht", text: "Bestellungen wechseln zwischen wartend, in Zubereitung und fertig; die Fertigmeldung geht an den Service." },
        { title: "Tischvorgänge", text: "Offene Tische lassen sich verschieben oder zusammenführen; Positionen können auf einen neuen Bon geteilt werden." },
        { title: "Kasse und Zahlung", text: "Bons werden nach Betrag, Person oder Position geteilt; Teilzahlungen und Zahlungsarten werden erfasst." },
        { title: "Schicht und Kassenbewegung", text: "Schichtöffnung, Ein- und Auszahlungen sowie Kassenbestand bleiben im selben Betriebsdatensatz." },
        { title: "Verwaltung", text: "Produkte, Tische, Küche, Service, Kasse, Ausgaben, Finanzen und Aktivitäten werden zentral verfolgt." },
      ],
    },
  },
  "mk-farm": {
    meta: {
      title: "Farm- und Tierbetriebsmanagement | MK Digital Systems",
      description:
        "MK Farm bündelt Tiere, Gewicht, Milch, Gesundheit, Besamung, QR, Berichte und Felddaten in einem Mehrbetriebs-System mit Offline-Unterstützung.",
    },
    title: "Tägliche Farmdaten vom Feld bis zum Bericht führen",
    lead:
      "MK Farm bündelt tierbezogene Betriebsdaten in einem digitalen Betriebsbuch. Eigentümer und Mitarbeitende arbeiten von schnellen Eingaben vor Ort bis zu Berichten mit demselben aktuellen Datenstand.",
    audience: {
      heading: "Wessen Problem?",
      text:
        "Betriebe, die Mast- und Milchtiere, Personal und tägliche Pflegedaten gemeinsam verwalten. Sie brauchen schnellen Zugriff auf die Tierhistorie vor Ort und Berichte aus demselben Datensatz im Büro.",
      points: [
        "Eigentümer, die einen oder mehrere Betriebe verwalten",
        "Mitarbeitende, die Gewicht, Milch, Gesundheit und Besamung erfassen",
        "Leitung, die Tierhistorien und anstehende Kontrollen verfolgt",
        "Teams für regelmäßige Produktions- und Betriebsberichte",
      ],
    },
    problem: {
      heading: "Was war das Problem?",
      text:
        "Bleiben Tierdaten, Wiegungen, Milch-, Behandlungs- und Besamungsdaten in getrennten Büchern, sind Historien schwerer nachzuvollziehen und anstehende Aufgaben leichter zu übersehen. Auch die Verbindung im Feld kann Eingaben verzögern.",
      points: [
        "Aktueller Tierstatus und Historie liegen an verschiedenen Stellen",
        "Das richtige Tier ist über die Ohrmarke nicht schnell erreichbar",
        "Kontrollen, Wartezeiten für Medikamente und Wiederholungen werden übersehen",
        "Felddaten werden bei Verbindungsabbruch verschoben oder doppelt eingegeben",
      ],
    },
    approach: {
      heading: "Wie sind wir vorgegangen?",
      text:
        "Wir haben das Datenmodell um den Lebenszyklus des Tiers aufgebaut, tägliche Arbeit in kurze Formulare und den Leitungsbedarf in filterbare Berichte und Hinweise übersetzt. Die Offline-Warteschlange gehört dabei zur Feldnutzung.",
      points: [
        "Zugriff getrennt nach Betriebsmitgliedschaft und Eigentümer-Personal-Rollen",
        "Schneller Aufruf der Tierkarte über Ohrmarke und QR",
        "Getrennte, aber verbundene Abläufe für Gewicht, Milch, Gesundheit und Besamung",
        "Kontrollierte Synchronisierung und Konfliktbehandlung nach Rückkehr der Verbindung",
      ],
    },
    solution: {
      heading: "Felddaten, Tierhistorie und Berichte in einem System",
      text:
        "MK Farm verbindet Mehrbetriebs-Mitgliedschaft, rollenbasierten Zugriff und Daten des Tierlebenszyklus mit echter API und dauerhafter Datenbank. Die responsive PWA unterstützt geladene Daten offline und synchronisiert vorgemerkte Einträge später.",
    },
    screens: {
      "farm-dashboard": {
        caption: "Übersicht: Tierzahl, Tagesmilch, offene Aufgaben, letzte Wiegungen und Erinnerungen.",
        alt: "MK Farm Übersicht mit Betriebszusammenfassung aus lokalen Beispieldaten",
      },
      "farm-animals-mobile": {
        caption: "Responsive Feldansicht: Tierliste nach Ohrmarke, Name, Kategorie und Rasse.",
        alt: "MK Farm Handyansicht mit einer Beispiel-Tierliste",
      },
      "farm-reports": {
        caption: "Berichte: Milchproduktionsübersicht und Export mit Datums- und Tierfiltern.",
        alt: "MK Farm Milchproduktionsbericht mit lokalen Beispieldaten",
      },
    },
    screensNote:
      "Diese Ansichten zeigen vollständig fiktive Datensätze aus dem lokalen Demo-Loader; Personen, Betrieb, Tiere und Ohrmarken sind keine echten Einträge.",
    ctaText:
      "Wenn Felddaten, Tierhistorie und Berichte in Ihrem Betrieb denselben Ablauf teilen sollen, sehen wir uns Ihre heutige Arbeitsweise gemeinsam an.",
    modules: {
      heading: "Kernmodule",
      items: [
        { title: "Betriebe und Team", text: "Eigentümer- und Personalmitgliedschaften, Freigaben und aktiver Arbeitsbereich werden gemeinsam verwaltet." },
        { title: "Tierkarten", text: "Identität, Ohrmarke, Status und Lebenszyklusdaten von Mast- und Milchtieren stehen auf einer Karte." },
        { title: "QR-Kennung", text: "QR-Anzeige, Ausdruck und Zugriff per Kamera oder externem Leser öffnen die passende Tierkarte." },
        { title: "Gewicht und Wiegung", text: "Manuelle oder simulierte Wiegungen, Messhistorie und Änderung zur letzten Wiegung werden verfolgt." },
        { title: "Milchproduktion", text: "Morgen- und Abendmengen werden je Tier und Datum erfasst und in Periodenberichten gebündelt." },
        { title: "Gesundheit und Besamung", text: "Untersuchung, Medikamente, Tierarztkontrollen und Besamungshistorie sind mit der Tierkarte verknüpft." },
        { title: "Hinweise und Berichte", text: "Anstehende Kontrollen und Ausnahmen werden gelistet; Milch- und Betriebsdaten lassen sich exportieren." },
        { title: "Offline-Synchronisierung", text: "Einträge bleiben in der Gerätewarteschlange und werden nach Rückkehr der Verbindung kontrolliert gesendet." },
      ],
    },
  },
};

export default de;
