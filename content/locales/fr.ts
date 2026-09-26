import type { SiteContent } from "../site";
const fr: SiteContent = {
  nav: {
    home: "Accueil",
    solutions: "Solutions",
    work: "Projets",
    contact: "Contact",
    start: "Écrire sur WhatsApp",
    language: "Choisir la langue",
    open: "Ouvrir le menu",
    close: "Fermer le menu",
    skip: "Aller au contenu",
  },
  hero: {
    label: "STUDIO DE LOGICIELS & PRODUITS NUMÉRIQUES",
    title: "Votre entreprise.",
    accent: "Mieux connectée.",
    description:
      "Du logiciel sur mesure aux applications mobiles, des systèmes de gestion aux expériences web créatives : nous transformons les idées en produits numériques utilisés au quotidien.",
    primary: "Écrire sur WhatsApp",
    secondary: "Découvrir nos projets",
    visual: "Vitrine des produits : écrans de vrais produits réalisés par MK Digital Systems",
    needsLabel: "Que souhaitez-vous faire ?",
    needs: {
      "operations": "Simplifier mon quotidien",
      "presence": "Être plus visible en ligne",
      "idea": "Concrétiser mon idée",
    },
    stage: {
      "prev": "Produit précédent",
      "next": "Produit suivant",
      "pause": "Mettre le défilement en pause",
      "play": "Reprendre le défilement",
      "goTo": "Aller à {name}",
    },
    categories: {
      "saha-santiye": "Système d’opérations terrain & chantier",
      "aura": "Application mobile de journal",
      "mavi-sarkilar": "Expérience web créative",
      "mk-adisyon": "Gestion de restaurant & café",
      "kadraj-rotam": "Plateforme de routes photo",
      "musty": "Expérience web visuelle premium",
      "mk-farm": "Logiciel de gestion agricole",
      "aria": "Interface de plateforme sociale",
      "namehub": "Plateforme de noms & d’identité numérique",
      "mavi-kadraj-otel": "Site web d’hôtel",
      "gonul-pusulasi": "Web créatif & contenu numérique",
      "mavi-kadraj-arsiv": "Archive photo & expérience web",
    },
    tags: {
      "selected": "Réalisation choisie",
      "sector-demo": "Site d’exemple",
    },
  },
  work: {
    label: "PROJETS CHOISIS",
    pageLabel: "PROJETS",
    title: "Des métiers différents.\nLa même attention.",
    description:
      "Des produits et démonstrations qui transforment des besoins concrets en expériences numériques claires.",
    all: "Découvrir tous les projets",
    discuss: "Se renseigner sur WhatsApp",
    inquiry:
      "Bonjour, je souhaite des informations sur une solution similaire à {project}.",
    problem: "Le besoin",
    solution: "Notre approche",
    experience: "Ce qui se rassemble",
    diagram: "VUE D'ENSEMBLE DU PARCOURS",
    confidential:
      "Un système en service ; captures et liens ne sont pas partagés par confidentialité.",
    statuses: {
      "live-demo": "Démo en ligne",
      "closed-test": "Test fermé",
      "sample-site": "Site d’exemple",
      "in-use": "En utilisation active",
      "coming-soon": "Bientôt",
    },
    filter: "Filtrer les réalisations",
    allLabel: "Tout",
    layers: {
      "flagship": {
        label: "Systèmes",
        title: "Systèmes d’entreprise",
        description:
          "Des systèmes pour les opérations quotidiennes, chacun né d’un problème réel.",
      },
      "selected": {
        label: "Sélection",
        title: "Réalisations choisies",
        description:
          "Produits numériques, applications mobiles et expériences web créatives.",
      },
      "sector-demo": {
        label: "Sites sectoriels",
        title: "Sites sectoriels",
        description:
          "Des exemples de sites conçus pour différents secteurs.",
      },
    },
    linkLabels: {
      demo: "Ouvrir la démo",
      product: "Site du produit",
      app: "Ouvrir l’application mobile",
      site: "Voir le site",
    },
  },
  process: {
    label: "NOTRE MÉTHODE",
    title: "D'abord, vous écouter.\nPuis, construire ensemble.",
    description:
      "Le même ordre à chaque projet : comprendre le travail, puis construire.",
    steps: [
      {
        title: "Comprendre",
        description:
          "Nous écoutons comment le travail se déroule aujourd’hui, qui l’utilisera et ce qui doit changer.",
      },
      {
        title: "Concevoir",
        description:
          "Nous clarifions le parcours et les écrans avant de développer.",
      },
      {
        title: "Développer",
        description:
          "Nous transformons la direction choisie en un système qui fonctionne.",
      },
      {
        title: "Tester",
        description:
          "Nous l’essayons dans des scénarios d’usage réels et comblons les manques avant la mise en ligne.",
      },
      {
        title: "Mettre en ligne et en service",
        description:
          "Nous publions le système et l’ouvrons à votre équipe et à vos clients.",
      },
    ],
  },
  contact: {
    label: "DÉMARRER UN PROJET",
    title: "Les bonnes idées naissent\nd'une conversation.",
    description:
      "Parlez-nous d'une idée, d'un défi ou d'un processus qui pourrait être plus simple.",
    intro: "Quelques détails suffisent pour commencer.",
    direct: "Choisissez votre moyen de contact.",
    call: "Appeler",
    emailUs: "Envoyer un e-mail",
    whatsapp: "Écrire sur WhatsApp",
    next: "Et ensuite ?",
    nextText:
      "Nous lisons votre demande, posons les questions utiles et discutons d'une approche avant de définir ensemble le périmètre.",
    required: "Obligatoire",
    optional: "Facultatif",
    name: "Votre nom",
    company: "Entreprise",
    email: "Adresse e-mail",
    phone: "Téléphone / WhatsApp",
    country: "Pays",
    type: "Qu'avez-vous en tête ?",
    message: "Parlez-nous un peu du projet",
    placeholder: "Que souhaitez-vous créer ou simplifier ?",
    more: "Ajouter des coordonnées ou une entreprise",
    consent:
      "J'accepte l'utilisation de mes coordonnées pour répondre à cette demande, conformément à la",
    privacy: "notice de confidentialité",
    submit: "Envoyer votre demande",
    sending: "Envoi de votre demande…",
    success: "Votre demande est en route.",
    successText:
      "Merci d'avoir partagé votre idée. Nous répondrons aux coordonnées indiquées.",
    error:
      "Votre demande n'a pas pu être envoyée. Vos informations sont conservées. Réessayez ou contactez-nous directement.",
    invalid:
      "Complétez les champs obligatoires et acceptez la notice de confidentialité.",
    retry: "Envoyer une autre demande",
    types: {
      web: "Site web",
      custom: "Logiciel sur mesure",
      business: "Système de gestion d’entreprise",
      mobile: "Application mobile",
      support: "Aide pour mon site existant",
      unsure: "Pas encore sûr",
    },
  },
  footer: {
    label: "VOTRE PROCHAIN CHAPITRE",
    title: "Créons quelque chose\nde vraiment utile.",
    cta: "Écrire sur WhatsApp",
    description:
      "Expériences numériques et logiciels métier. Conçus avec attention. Adaptés à vous.",
    privacy: "Confidentialité",
    terms: "Conditions",
    copyright: "Tous droits réservés.",
    top: "Retour en haut",
    socialLabel: "Réseaux sociaux",
    socialProfile:
      "MK Digital Systems sur {platform} — s’ouvre dans un nouvel onglet",
    signature:
      "Produits numériques et logiciels sur mesure développés par Mustafa Öner",
  },
  legal: {
    privacyTitle: "Notice de confidentialité",
    privacyIntro:
      "Cette notice explique comment MK Digital Systems traite les informations partagées sur ce site.",
    privacySections: [
      {
        title: "Vos informations",
        body: "La demande de projet comprend votre nom, e-mail, type de projet, message et accord. Entreprise, téléphone et pays sont facultatifs. Partagez uniquement les informations nécessaires à votre demande.",
      },
      {
        title: "Leur utilisation",
        body: "Nous utilisons vos informations pour répondre à votre demande, comprendre vos besoins et discuter d'un éventuel projet. Nous ne vendons pas vos données personnelles.",
      },
      {
        title: "Transmission et hébergement",
        body: "Les demandes peuvent être transmises par Formspree ou notre fournisseur de messagerie configuré. Ces prestataires et notre hébergeur traitent les informations nécessaires au service. Les liens e-mail et WhatsApp utilisent leurs fournisseurs respectifs.",
      },
      {
        title: "Vos questions",
        body: "Écrivez à l'adresse du site pour demander l'accès, la rectification ou la suppression des informations de votre demande. La conservation et les traitements propres à un projet sont à convenir avant son démarrage.",
      },
    ],
    termsTitle: "Conditions du site",
    termsIntro:
      "Ces conditions décrivent l'utilisation du site MK Digital Systems. Un projet nécessite un accord séparé.",
    termsSections: [
      {
        title: "Informations sur les projets",
        body: "Les travaux présentés comprennent des produits indépendants et des démonstrations identifiées. Les démos ne sont pas présentées comme des missions clients rémunérées. Les descriptions ne garantissent aucun résultat commercial précis.",
      },
      {
        title: "Utilisation du site",
        body: "Utilisez ce site légalement. Ne tentez aucun accès non autorisé, ne perturbez pas son fonctionnement et n'envoyez pas de demandes abusives. Vous êtes responsable des informations soumises.",
      },
      {
        title: "Périmètre et liens externes",
        body: "Une demande ne constitue pas un contrat de service. Périmètre, délais, tarifs et accompagnement sont convenus séparément. Les projets externes et plateformes de contact ont leurs propres conditions et pratiques de confidentialité.",
      },
    ],
    updated: "Mise à jour : septembre 2026",
  },
  caseStudy: {
    label: "ÉTUDE DE CAS",
    sector: "Secteur",
    services: "Ce que nous avons conçu",
    status: "Statut",
    serviceNames: {
      "web": "Web",
      "custom": "Logiciel sur mesure",
      "business": "Systèmes de gestion",
      "mobile": "Application mobile",
      "smart": "Expériences intelligentes",
    },
    screensHeading: "Le système obtenu",
    statusHeading: "Où en est-il aujourd’hui ?",
    relatedWork: "Réalisations liées",
    relatedSolutions: "Solutions liées",
    ctaTitle: "Un problème similaire ?",
    ctaPrimary: "Nous écrire sur WhatsApp",
    ctaSecondary: "Décrire votre besoin",
    inquiry: "Bonjour, j’ai lu l’étude de cas {project}. Nous avons un besoin similaire.",
    read: "Lire l’étude de cas",
  },
  meta: {
    home: {
      title: "MK Digital Systems | Sites web, logiciel sur mesure et apps mobiles",
      description:
        "Sites web, logiciels sur mesure, systèmes de gestion et applications mobiles. Découvrez de vraies réalisations et parlez-nous de votre besoin.",
    },
    solutions: {
      title: "Solutions web et logicielles | MK Digital Systems",
      description:
        "Sites web, logiciel sur mesure, systèmes de gestion et applications mobiles, chacun avec de vraies réalisations. Trouvez la solution adaptée.",
    },
    work: {
      title: "Projets choisis | MK Digital Systems",
      description:
        "Explorez nos produits indépendants et démos pour le terrain, l'hébergement, l'agriculture, la restauration et les expériences numériques.",
    },
    contact: {
      title: "Contact | MK Digital Systems",
      description:
        "Partagez votre idée ou défi métier avec MK Digital Systems. Envoyez une demande courte ou contactez-nous par e-mail et WhatsApp.",
    },
    privacy: {
      title: "Confidentialité | MK Digital Systems",
      description:
        "Comment MK Digital Systems utilise et transmet les informations du formulaire de projet.",
    },
    terms: {
      title: "Conditions du site | MK Digital Systems",
      description:
        "Informations sur le site, les projets de démonstration, les liens externes et les demandes de projet.",
    },
  },
  notFound: {
    title: "Cette page a été déplacée.",
    description: "Retrouvons un point de départ utile.",
    back: "Retour à l'accueil",
  },
};
export default fr;
