import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const de: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "Außendienst- & Baustellenmanagement für Telekom und Glasfaser | MK Digital Systems",
      description:
        "Zwei Ansätze, die Tagesarbeit, Teams, Material und Leistung im Telekom- und Glasfaser-Außendienst bündeln: MK OPS und Şantiye Yönetim.",
    },
    title: "Außendienst und Baustelle an einem Ort zusammenführen",
    lead:
      "Was draußen passiert, ist im Büro sofort sichtbar. Zwei Ansätze, mit denen wir Telekom- und Glasfaser-Einsätze – von der täglichen Arbeitserfassung über die Teamplanung bis zu Material und Leistung – in einem System zusammenführen.",
    audience: {
      heading: "Wessen Problem?",
      text:
        "Unternehmen, die bei Telekom- und Glasfaserprojekten viele Teams, Projekte und Materialien gleichzeitig steuern. Vom Teamleiter vor Ort bis zu Betrieb und Buchhaltung im Büro sehen verschiedene Menschen verschiedene Teile der Arbeit.",
      points: [
        "Außendienstteams und Teamleiter, die am selben Tag an verschiedenen Projekten arbeiten",
        "Projekt- und Geschäftsleitung, die Arbeit planen, prüfen und freigeben",
        "Das Lager, das Material, Fahrzeuge und Ausrüstung verfolgt",
        "Das Büro, das Stundenzettel, Abschlagsrechnungen und Berichte erstellt",
      ],
    },
    problem: {
      heading: "Was war das Problem?",
      text:
        "Draußen geht die Arbeit schnell voran; die Informationen verteilen sich auf Nachrichten, Fotos und einzelne Tabellen. Welches Team wo was macht, welche Arbeit auf Freigabe wartet, wohin Material gegangen ist – oft erst am Abend sichtbar und von Hand zusammengetragen.",
      points: [
        "Die Tagesarbeit bleibt in Nachrichten und Papierformularen",
        "Team-, Fahrzeug- und Personalplanung wird jeden Morgen neu aufgebaut",
        "Der Projektfortschritt (Pläne, Verteiler, Kabel, Tiefbau) ist nicht an einem Ort sichtbar",
        "Materialausgaben und Zuweisungen passen nicht zum Bestand",
        "Leistung, Stunden und Abrechnung werden am Periodenende von Hand gesammelt",
      ],
    },
    approach: {
      heading: "Wie sind wir vorgegangen?",
      text:
        "Wir haben nicht bei Bildschirmen angefangen, sondern beim Ablauf eines Arbeitstags: morgens die Teamplanung, tagsüber die Erfassung, abends Kontrolle und Freigabe, am Periodenende der Bericht. Ziel: Wer eine Information zuerst sieht, erfasst sie direkt – und jeder sieht nur, was ihm nützt.",
      points: [
        "In Rollen denken: Teamleiter, Projektleitung und Geschäftsleitung sehen Verschiedenes",
        "Schnelle Erfassung am Handy vor Ort, gesammelte Kontrolle am Desktop im Büro",
        "Ein klarer Freigabeprozess: Entwurf, eingereicht, freigegeben oder abgelehnt",
        "Einträge nach Abrechnungsperioden bündeln",
      ],
    },
    solution: {
      heading: "Zwei Ansätze für dasselbe Problem",
      text:
        "Wir haben das Problem für zwei Arbeitsweisen gelöst: als SaaS, das mehrere Unternehmen jeweils in ihrem eigenen Bereich nutzen, und als Verwaltungssystem, das auf die Arbeitsweise eines Unternehmens zugeschnitten ist. Das sind keine zwei Pakete zur Auswahl, sondern zwei Architekturentscheidungen für dasselbe Problem.",
      parts: {
        "mk-ops": {
          summary:
            "Ein mandantenfähiger SaaS-Ansatz: Jedes Unternehmen verwaltet Teams, Projekte, Außendienstarbeit und Freigaben in seinem eigenen, getrennten Arbeitsbereich.",
          highlights: [
            "Datentrennung pro Unternehmen und rollenbasierte Rechte",
            "Tägliche Arbeitserfassung im Außendienst mit Freigabeprozess",
            "Materiallieferscheine und Bestandsführung",
            "Teamverdienst, Unternehmensanteil und Abrechnungsperioden",
            "Prüfprotokoll, Excel- und PDF-Berichte",
            "Oberfläche auf Türkisch, Englisch, Deutsch, Französisch und Spanisch",
          ],
        },
        "santiye-yonetim": {
          summary:
            "Ein Panel, das auf den Betrieb eines Unternehmens zugeschnitten ist: von den Phasen der Glasfaserprojekte bis zur täglichen Teamplanung folgt es der eigenen Arbeitsweise.",
          highlights: [
            "Projektverfolgung: Typ, Status, Fortschritt, OBK, Muffe, Kabel und Tiefbau",
            "Tägliche Arbeitsplanung und Teamvorlagen",
            "Leistungserfassung und Leistungsberichte nach Zeitraum",
            "Stundenerfassung und Abrechnungsübersicht",
            "Material, Bestand, Zuweisungen und Fahrzeuge",
            "Freigegebene Registrierung und sichere Sitzungsverwaltung",
          ],
        },
      },
    },
    screens: {
      "ops-approvals": {
        caption: "MK OPS · Freigaben: Die von Teamleitern eingereichte Tagesarbeit wird in einer Liste freigegeben oder abgelehnt.",
        alt: "MK OPS Freigabeansicht mit Beispieldaten",
      },
      "ops-mobile": {
        caption: "MK OPS · Mobil: dieselbe Freigabeliste am Handy vor Ort.",
        alt: "MK OPS mobile Freigabeansicht mit Beispieldaten",
      },
      "ops-management": {
        caption: "MK OPS · Verwaltung: Teams, Fahrzeuge, Materialbestand, Ausrüstung und Leistungspositionen.",
        alt: "MK OPS Verwaltung mit einer Beispielliste von Teams",
      },
      "santiye-projects": {
        caption: "Şantiye Yönetim · Projekte: eine Projektliste, filterbar nach Typ, Status, Fortschritt und Bauphasen.",
        alt: "Şantiye Yönetim Projektansicht mit Beispiel-Glasfaserprojekten",
      },
      "santiye-mobile": {
        caption: "Şantiye Yönetim · Mobil: Projektliste und Filter am Handy.",
        alt: "Şantiye Yönetim mobile Projektansicht mit Beispieldaten",
      },
      "santiye-dashboard": {
        caption: "Şantiye Yönetim · Dashboard: Projektstatus nach Kategorie, kritischer Bestand und Fahrzeughinweise.",
        alt: "Şantiye Yönetim Dashboard mit Beispieldaten",
      },
    },
    ctaText: "Wenn Sie Außendienst und Bürosteuerung zusammenführen möchten, erzählen Sie uns, wie Ihr Tag heute abläuft – wir finden gemeinsam den passenden Ansatz.",
    screensNote: "Alle Einträge in diesen Ansichten sind Beispieldaten und enthalten keine echten Personen, Firmen oder Projekte.",
    modules: {
      heading: "Kernmodule",
      items: [
        { title: "Tägliche Erfassung und Freigabe", text: "Arbeit vor Ort wird am selben Tag erfasst; die Leitung gibt sie in einer Liste frei oder fordert eine Korrektur an." },
        { title: "Teams und Tagesplanung", text: "Welches Team mit welchem Fahrzeug zu welchem Projekt fährt, wird jeden Morgen in wenigen Schritten geplant." },
        { title: "Projekt- und Fortschrittsverfolgung", text: "Pläne, Verteiler, Kabel und Tiefbau der Glasfaserprojekte werden mit Fortschritt in Prozent verfolgt." },
        { title: "Leistungserfassung", text: "Die tägliche Leistung der Teams wird je Position erfasst und nach Zeitraum ausgewertet." },
        { title: "Material, Bestand und Zuweisungen", text: "Materialausgaben, Lieferscheine und Zuweisungen an Mitarbeitende werden mit dem Bestand geführt." },
        { title: "Fahrzeuge und Ausrüstung", text: "Fahrzeuge, Ausrüstung und Dokumentfristen an einem Ort, mit Hinweisen zu anstehender Prüfung und Versicherung." },
        { title: "Stunden und Abrechnung", text: "Anwesenheit, Vorschüsse und Periodenabrechnung entstehen aus denselben Einträgen." },
        { title: "Rollen und Berichte", text: "Jede Rolle sieht ihre eigenen Ansichten; Berichte lassen sich als Excel, PDF oder Word exportieren." },
      ],
    },
  },
};

export default de;
