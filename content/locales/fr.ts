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
    label: "AGENCE DIGITALE & STUDIO DE LOGICIELS SUR MESURE",
    title: "Votre entreprise.",
    accent: "Mieux connectée.",
    description:
      "Des sites bien pensés. Des logiciels utiles. Des systèmes numériques conçus autour de votre façon de travailler.",
    primary: "Écrire sur WhatsApp",
    secondary: "Découvrir nos projets",
    note: "De la première idée aux détails du quotidien.",
    visual: "Une sélection de nos véritables projets numériques",
    caption: "DES IDÉES QUI DEVIENNENT UTILES.",
    detail: "Design et développement, ensemble.",
  },
  needs: {
    label: "UN BON POINT DE DÉPART",
    title: "Qu'est-ce qui faciliterait\nvotre quotidien ?",
    description:
      "Pas besoin d'un cahier des charges technique. Dites-nous simplement ce que vous souhaitez changer.",
    explore: "Découvrir cette solution",
    items: [
      {
        title: "Faire une meilleure première impression.",
        subtitle: "Sites & expériences numériques",
        description:
          "Une présence qui vous ressemble, aide chacun à trouver l'essentiel et facilite la prise de contact.",
        steps: ["Découvrir", "Explorer", "Échanger"],
        family: "web",
      },
      {
        title: "Simplifier le travail au quotidien.",
        subtitle: "Logiciels sur mesure & systèmes métier",
        description:
          "Rassembler tâches, informations et équipes. Concevoir autour de vos processus pour respecter votre façon de travailler.",
        steps: ["Organiser", "Coordonner", "Voir clairement"],
        family: "business",
      },
      {
        title: "Donner vie à une idée.",
        subtitle: "Produits numériques sur mesure",
        description:
          "Trouver le cœur utile de votre idée, concevoir l'expérience et créer une première version à mettre entre les mains des utilisateurs.",
        steps: ["Définir", "Construire", "Faire évoluer"],
        family: "custom",
      },
    ],
  },
  work: {
    label: "PROJETS CHOISIS",
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
    statuses: {
      "live-demo": "Démo en ligne",
      "closed-test": "Test fermé",
      "sample-site": "Site d’exemple",
      "in-use": "En utilisation active",
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
      site: "Voir le site",
    },
  },
  solutions: {
    label: "SOLUTIONS",
    title: "Conçues pour\nvos besoins réels.",
    description:
      "Une meilleure expérience client. Un quotidien plus clair pour votre équipe. Une idée qui prend vie.",
    audience: "Pour qui ?",
    builds: "Ce que nous créons",
    example: "Découvrir un exemple",
    cta: "Parlez-nous de votre besoin",
    items: [
      {
        id: "web",
        title: "Web & expériences numériques",
        description:
          "Faciliter la découverte, la compréhension et le choix de votre entreprise. Relier votre histoire à une expérience agréable.",
        for: "Entreprises, marques indépendantes et professionnels qui souhaitent renforcer leur présence numérique.",
        features: [
          "Sites de marque et d'entreprise",
          "Plateformes de contenu & découverte",
          "Parcours de prise de contact",
        ],
      },
      {
        id: "custom",
        title: "Logiciels sur mesure",
        description:
          "Quand les outils standards ne conviennent pas, partons de vos processus réels et des tâches qui comptent.",
        for: "Équipes ayant un processus particulier, une idée de produit ou un besoin que les outils courants ne couvrent pas.",
        features: [
          "Applications web adaptées",
          "Produits numériques & premières versions",
          "Outils connectés & automatisations",
        ],
      },
      {
        id: "business",
        title: "Systèmes de gestion métier",
        description:
          "Rassembler personnes, informations et décisions quotidiennes. Clarifier la prochaine action pour chacun.",
        for: "Hôtels, restaurants, exploitations et équipes de terrain travaillant avec plusieurs rôles.",
        features: [
          "Opérations & coordination",
          "Réservations, commandes & dossiers",
          "Vues de gestion & rapports",
        ],
      },
      {
        id: "smart",
        title: "Expériences intelligentes & vocales",
        description:
          "Explorer des façons plus simples de demander, trouver et agir. Donner un objectif utile aux interactions vocales et assistées.",
        for: "Entreprises explorant des interactions clients plus accessibles ou des processus internes guidés.",
        features: [
          "Concepts d'interaction vocale",
          "Parcours clients assistés",
          "Prototypes d'automatisation pratiques",
        ],
      },
    ],
  },
  process: {
    label: "NOTRE MÉTHODE",
    title: "D'abord, vous écouter.\nPuis, concrétiser.",
    description:
      "Une direction commune, des décisions claires et une étape utile à chaque phase.",
    steps: [
      {
        title: "Comprendre",
        description: "Vos équipes, vos processus et ce qui doit changer.",
      },
      {
        title: "Concevoir",
        description: "Clarifier le parcours avant de construire les détails.",
      },
      {
        title: "Développer",
        description:
          "Transformer la direction choisie en expérience utilisable.",
      },
      {
        title: "Lancer",
        description: "Vérifier les détails et mettre votre système en service.",
      },
      {
        title: "Améliorer",
        description: "Apprendre de l'usage quotidien et préparer la suite.",
      },
    ],
  },
  industries: {
    label: "L'EXPÉRIENCE PAR LES PROJETS",
    title: "Des univers différents.\nDes besoins quotidiens concrets.",
    description:
      "Nos projets indépendants et démonstrations explorent des expériences numériques adaptées à différentes façons de travailler.",
    items: [
      "Hébergement",
      "Restauration",
      "Agriculture",
      "Opérations de terrain",
      "Industrie",
      "Services numériques",
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
    types: [
      "Site web",
      "Logiciel sur mesure",
      "Système métier",
      "Produit numérique",
      "Expérience intelligente / vocale",
      "Pas encore sûr",
    ],
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
  meta: {
    home: {
      title: "MK Digital Systems | Sites web & logiciels métier sur mesure",
      description:
        "Des expériences numériques et des logiciels utiles, adaptés à votre façon de travailler. Découvrez les projets MK Digital Systems et échangeons.",
    },
    solutions: {
      title: "Solutions | MK Digital Systems",
      description:
        "Sites web, logiciels sur mesure, systèmes de gestion et expériences intelligentes conçus autour de vos clients et opérations quotidiennes.",
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
