import type { SolutionsCopy } from ".";

/** German solutions copy: same rules as Turkish; pricing is a project-based quotation. */
const de: SolutionsCopy = {
  hub: {
    label: "LÖSUNGEN",
    title: "Web- und Softwarelösungen,\ngebaut um Ihre Arbeit.",
    description:
      "Von der Website bis zur individuellen Software, vom Betriebsmanagement-System bis zur mobilen App. Jede Lösung beginnt mit einem Bedarf und zeigt sich in echter Arbeit.",
    axesTitle: "Vier Lösungsbereiche",
    explore: "Lösung ansehen",
    example: "Ein echtes Beispiel",
    support: {
      title: "Unterstützung für Ihre bestehende Website",
      text: "Nicht immer braucht es ein neues Projekt. Wir können Design, Inhalte oder Funktionen Ihrer bestehenden WordPress-Website anpassen und Technik und Inhalte verbessern, damit sie in der Suche leichter gefunden wird.",
    },
  },
  page: {
    label: "LÖSUNG",
    price: "Preise",
    support: "Unterstützung für Ihre bestehende Website",
    others: "Weitere Lösungen",
    ctaPrimary: "Bedarf beschreiben",
    ctaSecondary: "Per WhatsApp schreiben",
    inquiry: "Hallo, ich möchte mehr über {solution} erfahren.",
  },
  items: {
    web: {
      meta: {
        title: "Webdesign: Unternehmens- und individuelle Websites | MK Digital Systems",
        description:
          "Websites, die Ihr Unternehmen klar erklären, leicht zu finden sind und den Kontakt einfach machen: Landingpages, Firmenseiten, eigenes Design und WordPress-Hilfe.",
      },
      name: "Webdesign",
      title: "Webdesign: eine Website, die Sie richtig erklärt",
      lead:
        "Besucher sollen in Sekunden verstehen, was Sie tun, finden, was sie suchen, und Kontakt aufnehmen wollen. Wir gestalten und entwickeln Ihre Website ausgehend davon, wie Ihr Unternehmen erklärt werden sollte.",
      need: "Unsere Arbeit ist gut, aber online sieht man das nicht.",
      approach:
        "Wir klären zuerst, was wem erzählt werden soll, und machen daraus eine klare Website, die auch am Handy gut funktioniert.",
      needs: {
        heading: "Mit welchem Bedarf kommt man zu uns?",
        items: [
          "Sie haben keine Website, oder sie spiegelt Ihr Unternehmen nicht mehr wider",
          "Besucher finden nicht, was sie suchen, und melden sich nicht",
          "Eine Leistung oder Kampagne braucht eine klare, fokussierte Seite",
          "Sie möchten ein eigenes Erlebnis statt einer weiteren Vorlage",
          "Ihre WordPress-Website muss überarbeitet oder in der Suche sichtbarer werden",
        ],
      },
      method: {
        heading: "Wie gehen wir vor?",
        text:
          "Wir beginnen nicht bei Farben, sondern bei der Aufgabe der Website: Wer besucht sie, was sucht er, und was soll er am Ende tun? Seitenstruktur, Texte und Bilder folgen den Antworten.",
        points: [
          "Zuerst Inhalt und Seitenstruktur, dann das visuelle Design",
          "Ein Layout, das am Handy genauso gut funktioniert",
          "Grundlegende SEO mit aussagekräftigen Titeln und Beschreibungen",
          "Klare Handlungsaufforderungen: Formular, Telefon, WhatsApp",
        ],
      },
      builds: {
        heading: "Was können wir entwickeln?",
        items: [
          { title: "Landingpage", text: "Eine fokussierte Seite für eine Leistung, ein Produkt oder eine Kampagne." },
          { title: "Unternehmenswebsite", text: "Leistungsseiten, Vorstellung und Kontaktbereiche, die Ihr Unternehmen überzeugend präsentieren." },
          { title: "Premium-Website", text: "Eigenes Design, starke Inhalte und dezente Bewegung für ein Erlebnis, das zu Ihrer Marke passt." },
          { title: "Kreative Web-Erlebnisse", text: "Erzählende, bildstarke Websites für Kunst, Fotografie und Content-Projekte." },
        ],
      },
      work: {
        heading: "Echte Arbeit",
        text: "Beispiel-Websites für verschiedene Branchen und kreative Webprojekte, die heute online sind.",
      },
      faq: {
        heading: "Häufige Fragen",
        items: [
          {
            question: "Kann meine bestehende Website überarbeitet statt neu gebaut werden?",
            answer:
              "Ja. Änderungen an Design, Inhalten oder Funktionen von WordPress-Websites sind eine eigene Unterstützungsleistung. Ob Sie wirklich eine neue Website brauchen, prüfen wir gemeinsam.",
          },
          {
            question: "Wird die Website in Suchmaschinen gefunden?",
            answer:
              "Websites entstehen mit grundlegender SEO: aussagekräftige Titel, Beschreibungen und eine saubere Seitenstruktur. Umfassendere SEO-Arbeit ist eine eigene Leistung. Bestimmte Platzierungen kann niemand versprechen – wir auch nicht.",
          },
          {
            question: "Wie entsteht der Preis einer Website?",
            answer:
              "Seitenzahl, wie individuell das Design ist, Inhalte und Zusatzfunktionen bestimmen den Umfang. Wir arbeiten mit projektbezogenen Angeboten: Sobald der Umfang klar ist, erstellen wir ein Angebot.",
          },
        ],
      },
      cta: {
        title: "Welche Website haben Sie im Sinn?",
        text: "Beschreiben Sie in wenigen Sätzen Ihr Unternehmen und für wen die Website gedacht ist; den passenden Umfang legen wir gemeinsam fest.",
      },
    },
    custom: {
      meta: {
        title: "Individuelle Softwareentwicklung | MK Digital Systems",
        description:
          "Wo Standardprogramme nicht reichen: Software, die um den tatsächlichen Ablauf Ihrer Arbeit entsteht – Webanwendungen, digitale Produkte und Mehrbenutzersysteme.",
      },
      name: "Individuelle Software",
      title: "Individuelle Software: ein System, das zu Ihrer Arbeit passt",
      lead:
        "Statt Ihre Arbeit an ein fertiges Programm anzupassen, bauen wir Software um die Art, wie Ihre Arbeit tatsächlich läuft. Vom internen Werkzeug eines Unternehmens bis zum Produkt für viele Unternehmen.",
      need: "Standardprogramme passen nicht zu unserer Arbeit.",
      approach:
        "Wir erfassen den Arbeitsablauf, bevor wir Bildschirme zeichnen, gestalten die Software danach und entwickeln sie Schritt für Schritt.",
      needs: {
        heading: "Mit welchem Bedarf kommt man zu uns?",
        items: [
          "Fertige Software passt nicht zu Ihrem Ablauf; das Team arbeitet um sie herum",
          "Die Arbeit ist über Excel-Dateien, Nachrichten und Papierformulare verteilt",
          "Sie haben eine Produktidee und möchten eine erste nutzbare Version sehen",
          "Sie brauchen ein System, das mehrere Unternehmen oder Teams in getrennten Bereichen nutzen",
        ],
      },
      method: {
        heading: "Wie gehen wir vor?",
        text:
          "Wir beginnen nicht beim Code, sondern bei der Arbeit: Wer erfasst was, wer gibt was frei, wer muss was sehen? Ist dieser Ablauf klar, gestalten wir die Bildschirme und entwickeln dann.",
        points: [
          "In Rollen denken: Jeder sieht, was ihm nützt",
          "Eine Oberfläche für das Handy vor Ort und den Desktop im Büro",
          "Zuerst der Kernablauf, dann weitere Module",
          "Anbindung an gewohnte Werkzeuge wie Excel und PDF, wo nötig",
        ],
      },
      builds: {
        heading: "Was können wir entwickeln?",
        items: [
          { title: "Maßgeschneiderte Webanwendungen", text: "Panels und Anwendungen nach der Arbeitsweise eines Unternehmens." },
          { title: "Digitale Produkte und erste Versionen", text: "Den nützlichen Kern einer Idee in eine erste nutzbare Version verwandeln." },
          { title: "Mehrbenutzer- / SaaS-Systeme", text: "Wachstumsfähige Systeme mit Rollenrechten und eigenem Bereich für jedes Unternehmen." },
          { title: "Datenimport und Berichte", text: "Import aus Excel mit freigegebener Vorschau; Excel- und PDF-Berichte." },
        ],
      },
      work: {
        heading: "Echte Arbeit",
        text: "Von Systemen nach dem Ablauf eines einzelnen Unternehmens bis zu Produkten für viele Unternehmen.",
      },
      faq: {
        heading: "Häufige Fragen",
        items: [
          {
            question: "Individuelle Software oder ein fertiges Programm?",
            answer:
              "Wenn ein fertiges Programm Ihre Arbeit abdeckt, reicht es oft. Individuelle Software lohnt sich, wenn Ihr Ablauf eigen ist, das Team um das Programm herumarbeiten muss oder es Ihre Produktidee sonst nicht gibt. Das klären wir im ersten Gespräch gemeinsam.",
          },
          {
            question: "Muss ich ein technisches Lastenheft vorbereiten?",
            answer:
              "Nein. Erzählen Sie uns, wie die Arbeit heute läuft und was sich ändern soll; die wichtigen Fragen stellen wir.",
          },
          {
            question: "Wie entsteht der Preis individueller Software?",
            answer:
              "Rollen, Anzahl der Ansichten und Module, angebundene Systeme und Berichte bestimmen den Umfang. Wir arbeiten mit projektbezogenen Angeboten: Sobald der Umfang klar ist, erstellen wir ein Angebot.",
          },
        ],
      },
      cta: {
        title: "Welche Arbeit sollte leichter laufen?",
        text: "Erzählen Sie uns, wie es heute läuft und was Sie am meisten Zeit kostet; wir schlagen darauf aufbauend einen Ansatz vor.",
      },
    },
    business: {
      meta: {
        title: "Betriebsmanagement-Systeme und Verwaltungspanels | MK Digital Systems",
        description:
          "Betriebsmanagement-Systeme, die Bestellungen, Buchungen, Datensätze, Teams und Berichte für Gastronomie, Hotels, Praxen, Höfe und Außendienst bündeln.",
      },
      name: "Betriebsmanagement-Systeme",
      title: "Betriebs­management-Systeme: die Tagesarbeit an einem Ort",
      lead:
        "Wenn Bestellungen, Buchungen, Datensätze und Teams an verschiedenen Orten liegen, wird der Tag länger. Wir entwickeln Verwaltungssysteme, in denen verschiedene Rollen mit demselben Datensatz arbeiten.",
      need: "Bestellungen, Daten und Teams sind schwer zu überblicken.",
      approach:
        "Wir bauen für jede Rolle eine einfache Ansicht und verbinden alle Rollen mit demselben Datensatz – einmal erfasst, bei allen sichtbar.",
      needs: {
        heading: "Mit welchem Bedarf kommt man zu uns?",
        items: [
          "Bestellungen, Buchungen oder Termine stehen auf Papier oder in Nachrichten",
          "Service, Küche, Kasse, Rezeption oder Außendienst führen dieselben Daten getrennt",
          "Um den Tag zu überblicken, führen Sie Tabellen von Hand zusammen",
          "Lager, Ausgaben, Fahrzeuge oder Stunden sind schwer nachzuverfolgen",
        ],
      },
      method: {
        heading: "Wie gehen wir vor?",
        text:
          "Wir bauen das System um Ihren Betriebstag: Wer erfasst die erste Information, wer nutzt sie, was soll die Leitung sehen? Jede Rolle hat ihre eigene Ansicht; alle arbeiten mit demselben Datensatz.",
        points: [
          "Ansichten nach Rolle: Service, Küche, Kasse, Rezeption, Außendienst, Leitung",
          "Klare Status, die zeigen, in welcher Phase eine Aufgabe ist",
          "Layouts für Handy, Tablet und Desktop",
          "Leitungsansichten und exportierbare Berichte",
        ],
      },
      builds: {
        heading: "Was können wir entwickeln?",
        items: [
          { title: "Betrieb und Teamkoordination", text: "Systeme, die Aufgaben, Teams, Lager und Außendienstdaten zentral verfolgen." },
          { title: "Bestellung und Rechnung", text: "Systeme, die eine Bestellung vom Tisch über die Küche bis zur Kasse in einem Ablauf führen." },
          { title: "Buchungs- und Anfragesysteme", text: "Lösungen, die Buchungen, Termine und Serviceanfragen digital sammeln." },
          { title: "Verwaltungspanel und Berichte", text: "Panels, die Kunden-, Personal- und Arbeitsdaten auf einer Ansicht für Ihr Unternehmen bündeln." },
        ],
      },
      work: {
        heading: "Echte Arbeit",
        text: "Systeme, die wir für Gastronomie, Beherbergung, Tierarztpraxen und Arbeitsverfolgung entwickelt haben.",
      },
      faq: {
        heading: "Häufige Fragen",
        items: [
          {
            question: "Arbeiten Sie nur mit bestimmten Branchen?",
            answer:
              "Unsere Beispiele kommen aus Gastronomie, Hotels, Tierarztpraxen, Landwirtschaft und Außendienst. Der Ansatz beruht aber auf dem Arbeitsablauf, nicht auf der Branche; auch anderswo beginnen wir mit denselben Fragen.",
          },
          {
            question: "Was passiert mit den Daten, die wir in Excel führen?",
            answer:
              "Der Import aus Excel lässt sich als Ablauf gestalten, in dem Sie Änderungen vorab prüfen und freigeben. Wie wir vorgehen, hängt vom Aufbau Ihrer Daten ab.",
          },
          {
            question: "Wie entsteht der Preis eines Verwaltungssystems?",
            answer:
              "Rollen, Ansichten, Module und Berichte bestimmen den Umfang. Wir arbeiten mit projektbezogenen Angeboten: Sobald der Umfang klar ist, erstellen wir ein Angebot.",
          },
        ],
      },
      cta: {
        title: "Was ist in Ihrem Betrieb am unübersichtlichsten?",
        text: "Erzählen Sie uns, wie Ihr Tag abläuft und wo es hakt; wo das System ansetzen soll, entscheiden wir gemeinsam.",
      },
    },
    mobile: {
      meta: {
        title: "Entwicklung mobiler Apps | MK Digital Systems",
        description:
          "Mobile Apps, die sich am Handy leicht bedienen lassen – für Ihr Unternehmen oder Ihre Idee: von Bestellungen unterwegs bis zum persönlichen Tagebuch.",
      },
      name: "Mobile Apps",
      title: "Mobile Apps: eine Lösung für Arbeit unterwegs",
      lead:
        "Manche Arbeit passiert nicht am Schreibtisch, sondern unterwegs. Wir gestalten und entwickeln mobile Apps für Ihr Unternehmen oder Ihre Idee, die sich am Handy angenehm bedienen lassen.",
      need: "Unser Team und unsere Kunden sind ständig unterwegs.",
      approach:
        "Wir gestalten im Wissen, dass der Bildschirm klein und die Zeit knapp ist, und machen die häufigste Aufgabe zum kürzesten Weg.",
      needs: {
        heading: "Mit welchem Bedarf kommt man zu uns?",
        items: [
          "Ihr Team ist vor Ort, im Service oder unterwegs und muss am Handy arbeiten",
          "Sie möchten Kunden ein Erlebnis auf ihrem eigenen Handy bieten",
          "Sie haben eine Idee, die Sie sich als App vorstellen",
          "Ihr bestehendes Websystem braucht einen Teil für die mobile Nutzung",
        ],
      },
      method: {
        heading: "Wie gehen wir vor?",
        text:
          "Mobil zählt jeder Tipp. Wir stellen die häufigste Handlung in den Mittelpunkt, streichen unnötige Schritte und erproben die App in echten Nutzungsszenarien.",
        points: [
          "Die häufigste Aufgabe auf wenige Tipps reduzieren",
          "Layouts für die Bedienung mit einer Hand",
          "Mobile Oberflächen, wo nötig gemeinsam mit dem Websystem geplant",
          "Vor der Veröffentlichung im geschlossenen Test im echten Einsatz erproben",
        ],
      },
      builds: {
        heading: "Was können wir entwickeln?",
        items: [
          { title: "Business-Apps", text: "Apps, mit denen Bestellungen, Datensätze oder Außendienstarbeit am Handy erledigt werden." },
          { title: "Apps für Kunden", text: "Erlebnisse, die Ihre Kunden auf ihrem eigenen Handy nutzen." },
          { title: "Persönliche und Lifestyle-Apps", text: "Schlichte Apps für Tagebuch, Verlauf und den persönlichen Gebrauch." },
        ],
      },
      work: {
        heading: "Echte Arbeit",
        text: "Die mobile App von MK Adisyon im geschlossenen Test und die Tagebuch-App Aura.",
      },
      faq: {
        heading: "Häufige Fragen",
        items: [
          {
            question: "Eine mobile App oder ein Websystem, das mobil gut funktioniert?",
            answer:
              "Nicht jeder Bedarf braucht eine App; ein Websystem, das mobil gut funktioniert, reicht oft. Wo eine App wirklich einen Unterschied macht, klären wir im ersten Gespräch gemeinsam.",
          },
          {
            question: "Kann die App vor der Veröffentlichung ausprobiert werden?",
            answer:
              "Ja. Die App kann vor der Veröffentlichung mit einer kleinen Nutzergruppe im geschlossenen Test erprobt werden; die mobile App von MK Adisyon ist heute in dieser Phase.",
          },
          {
            question: "Wie entsteht der Preis einer mobilen App?",
            answer:
              "Anzahl der Ansichten, Nutzerrollen und angebundene Systeme bestimmen den Umfang. Wir arbeiten mit projektbezogenen Angeboten: Sobald der Umfang klar ist, erstellen wir ein Angebot.",
          },
        ],
      },
      cta: {
        title: "Was soll Ihre App leichter machen?",
        text: "Erzählen Sie uns, wer sie wo und wofür nutzt; ob es wirklich eine App braucht, besprechen wir auch offen.",
      },
    },
  },
};
export default de;
