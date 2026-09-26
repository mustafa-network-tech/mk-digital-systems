import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const fr: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "Gestion des opérations terrain & chantier : télécom et fibre | MK Digital Systems",
      description:
        "Deux approches qui réunissent travaux, équipes, matériel et production des chantiers télécom et fibre : MK OPS et Şantiye Yönetim.",
    },
    title: "Réunir les opérations terrain et chantier en un seul endroit",
    lead:
      "Ce qui se fait sur le terrain, visible au bureau au même moment. Deux approches conçues pour réunir les opérations télécom et fibre – de la saisie quotidienne au planning des équipes, du matériel à la production – dans un seul système.",
    audience: {
      heading: "Le problème de qui ?",
      text:
        "Des entreprises qui pilotent en même temps de nombreuses équipes, projets et matériels sur des chantiers télécom et fibre. Des chefs d’équipe sur le terrain aux opérations et à la comptabilité au bureau, chacun voit une partie différente du travail.",
      points: [
        "Des équipes terrain et chefs d’équipe sur plusieurs projets le même jour",
        "Des chefs de projet et dirigeants qui planifient, contrôlent et valident",
        "Le magasin qui suit le matériel, les véhicules et l’équipement",
        "Le bureau qui prépare pointages, situations de travaux et rapports",
      ],
    },
    problem: {
      heading: "Quel était le problème ?",
      text:
        "Sur le terrain, le travail avance vite ; l’information, elle, se disperse entre messages, photos et tableaux séparés. Quelle équipe fait quoi et où, quel travail attend une validation, où est parti le matériel : souvent visible seulement en fin de journée, reconstitué à la main.",
      points: [
        "Le travail quotidien reste dans les messages et les formulaires papier",
        "Le planning des équipes, véhicules et personnel est refait chaque matin",
        "L’avancement des projets (plans, armoires, câble, tranchée) ne se suit pas au même endroit",
        "Les sorties de matériel et les dotations ne correspondent pas au stock",
        "Production, pointages et situations sont rassemblés à la main en fin de période",
      ],
    },
    approach: {
      heading: "Comment l’avons-nous abordé ?",
      text:
        "Nous sommes partis du déroulé d’une journée sur le terrain plutôt que des écrans : planning des équipes le matin, saisie dans la journée, contrôle et validation le soir, rapport en fin de période. L’objectif : la première personne qui voit une information la saisit directement, et chacun ne voit que ce qui lui sert.",
      points: [
        "Penser par rôles : chef d’équipe, chef de projet et dirigeant ne voient pas la même chose",
        "Saisie rapide sur téléphone sur le terrain, contrôle groupé sur ordinateur au bureau",
        "Un circuit de validation clair : brouillon, envoyé, validé ou refusé",
        "Regrouper les saisies par période de situation",
      ],
    },
    solution: {
      heading: "Deux approches pour un même problème",
      text:
        "Nous avons résolu le problème pour deux façons de travailler : un SaaS que plusieurs entreprises utilisent chacune dans leur propre espace, et un système de gestion construit autour de la façon de travailler d’une seule entreprise. Ce ne sont pas deux offres à choisir, mais deux choix d’architecture pour un même problème.",
      parts: {
        "mk-ops": {
          summary:
            "Une approche SaaS multi-locataires : chaque entreprise gère ses équipes, projets, travaux terrain et validations dans son propre espace isolé.",
          highlights: [
            "Isolation des données par entreprise et droits par rôle",
            "Saisie quotidienne des travaux terrain avec circuit de validation",
            "Bons de livraison de matériel et suivi du stock",
            "Gains des équipes, part de l’entreprise et périodes de situation",
            "Journal d’audit, rapports Excel et PDF",
            "Interface en turc, anglais, allemand, français et espagnol",
          ],
        },
        "santiye-yonetim": {
          summary:
            "Un tableau de bord construit autour des opérations d’une entreprise : des étapes des projets fibre au planning quotidien des équipes, il suit sa propre façon de travailler.",
          highlights: [
            "Suivi de projet : type, statut, avancement, OBK, épissure, câble et tranchée",
            "Planning quotidien et modèles d’équipes",
            "Saisie de production et rapports par période",
            "Pointage et récapitulatif des situations",
            "Matériel, stock, dotations et véhicules",
            "Inscription validée et gestion de session sécurisée",
          ],
        },
      },
    },
    screens: {
      "ops-approvals": {
        caption: "MK OPS · Validations : les travaux du jour envoyés par les chefs d’équipe sont validés ou refusés dans une seule liste.",
        alt: "Écran de validations MK OPS avec des données d’exemple",
      },
      "ops-mobile": {
        caption: "MK OPS · Mobile : la même liste de validations sur téléphone, sur le terrain.",
        alt: "Écran mobile de validations MK OPS avec des données d’exemple",
      },
      "ops-management": {
        caption: "MK OPS · Gestion : équipes, véhicules, stock de matériel, équipements et postes de travail.",
        alt: "Tableau de gestion MK OPS avec une liste d’équipes d’exemple",
      },
      "santiye-projects": {
        caption: "Şantiye Yönetim · Projets : une liste filtrable par type, statut, avancement et étapes de chantier.",
        alt: "Écran des projets Şantiye Yönetim avec des projets fibre d’exemple",
      },
      "santiye-mobile": {
        caption: "Şantiye Yönetim · Mobile : la liste des projets et les filtres sur téléphone.",
        alt: "Écran mobile des projets Şantiye Yönetim avec des données d’exemple",
      },
      "santiye-dashboard": {
        caption: "Şantiye Yönetim · Tableau de bord : état des projets par catégorie, stock critique et alertes véhicules.",
        alt: "Tableau de bord Şantiye Yönetim avec des données d’exemple",
      },
    },
    ctaText: "Si vous voulez réunir le travail terrain et le suivi au bureau, racontez-nous comment se déroule votre journée aujourd’hui ; nous définirons ensemble la bonne approche.",
    screensNote: "Toutes les données de ces écrans sont des exemples ; elles ne contiennent aucune personne, entreprise ou projet réels.",
    modules: {
      heading: "Modules principaux",
      items: [
        { title: "Saisie et validation quotidiennes", text: "Le travail terrain est saisi le jour même ; un responsable le valide ou demande une correction depuis une liste." },
        { title: "Équipes et planning du jour", text: "Quelle équipe part sur quel projet avec quel véhicule : planifié chaque matin en quelques étapes." },
        { title: "Suivi des projets et de l’avancement", text: "Plans, armoires, câble et tranchée des projets fibre sont suivis avec un pourcentage d’avancement." },
        { title: "Production", text: "La production quotidienne des équipes est saisie par poste et restituée par période." },
        { title: "Matériel, stock et dotations", text: "Sorties de matériel, bons de livraison et dotations du personnel sont tenus avec le stock." },
        { title: "Véhicules et équipements", text: "Véhicules, équipements et échéances de documents au même endroit, avec alertes avant contrôle technique et assurance." },
        { title: "Pointage et situations", text: "Présences, avances et situations de période sont calculées à partir des mêmes saisies." },
        { title: "Rôles et rapports", text: "Chaque rôle voit ses propres écrans ; les rapports s’exportent en Excel, PDF ou Word." },
      ],
    },
  },
  "mk-adisyon": {
    meta: {
      title: "Gestion des commandes et additions en restauration | MK Digital Systems",
      description:
        "MK Adisyon relie service, cuisine, caisse et gestion dans un système web actif. Son application mobile est en test fermé.",
    },
    title: "Piloter le restaurant dans un même flux, de la commande au paiement",
    lead:
      "MK Adisyon est un produit à deux surfaces qui fait travailler l'équipe sur une même addition, de la première commande à table jusqu'à la préparation et à l'encaissement : un système web actif et une application mobile en test fermé.",
    audience: {
      heading: "Le problème de qui ?",
      text:
        "Des restaurants et cafés qui coordonnent en même temps commande, préparation, service et paiement. L'information saisie par le serveur doit parvenir à la cuisine, à la caisse et à la gestion sans nouvelle saisie.",
      points: [
        "Les équipes de salle qui suivent les zones et l'état des tables",
        "La cuisine qui gère les commandes en attente, en préparation et prêtes",
        "La caisse qui traite les paiements partagés ou partiels",
        "La direction qui suit produits, tables, services et opérations",
      ],
    },
    problem: {
      heading: "Quel était le problème ?",
      text:
        "L'exploitation d'un restaurant passe entre des équipes qui avancent à des rythmes différents. Si détails de commande, changements de table et état du paiement ne partagent pas le même dossier, retards, doubles saisies et malentendus augmentent.",
      points: [
        "Des états de table et de commande différents selon les équipes",
        "Des options, notes ou tours de service incomplets en cuisine",
        "Des commandes prêtes qui n'arrivent pas à temps à l'équipe de salle",
        "Le partage par personne ou par article qui ralentit l'encaissement",
      ],
    },
    approach: {
      heading: "Comment l'avons-nous abordé ?",
      text:
        "Nous avons conçu des vues centrées sur chaque rôle tout en les reliant à la même addition. La table ouverte en salle, l'état de préparation en cuisine et les étapes de paiement restent ainsi dans un flux continu.",
      points: [
        "Vues orientées tâches pour le service, la cuisine, la caisse et la gestion",
        "Un seul dossier de commande, de la table à la clôture du paiement",
        "États explicites : en préparation, prêt et servi",
        "Mise en page adaptée à la tâche sur téléphone et ordinateur",
      ],
    },
    solution: {
      heading: "Un vrai système web et une application mobile en test fermé",
      text:
        "MK Adisyon possède deux surfaces produit réelles. Les fonctions opérationnelles ci-dessous sont vérifiées dans le système web actif. Une application mobile distincte a été développée et se trouve en test fermé ; seuls les éléments vérifiés lui sont attribués ici.",
      parts: {
        web: {
          summary:
            "Le système web actif réunit tables, commandes, cuisine, service, caisse et gestion dans des vues adaptées aux rôles.",
          highlights: [
            "Zones et tables, ouverture de table et nombre de convives",
            "Produits, options, notes, tours de service et envoi en cuisine",
            "Flux des commandes en attente, en préparation, prêtes et servies",
            "Déplacement et fusion de tables, séparation de l'addition",
            "Partage par montant, personne ou article et paiements partiels",
            "Services, produits, tables, dépenses, finances et journal d'activité",
          ],
        },
        mobile: {
          summary:
            "La deuxième surface développée de MK Adisyon est son application mobile. Elle est en test fermé ; cette étude n'étend pas son périmètre au-delà de l'écran d'accueil vérifié.",
          highlights: [
            "Une surface MK Adisyon réelle et développée",
            "Actuellement en test fermé",
            "Une adresse d'application vérifiée, distincte du système web",
          ],
        },
      },
    },
    screens: {
      "adisyon-cashier": {
        caption: "Système web · Caisse : addition ouverte, partage du paiement et modes d'encaissement dans une vue.",
        alt: "Écran de caisse web MK Adisyon avec commande et paiement d'exemple",
      },
      "adisyon-waiter": {
        caption: "Système web · Service : l'interface web responsive sur téléphone ; ce n'est pas l'application mobile.",
        alt: "Écran responsive de service MK Adisyon avec tables d'exemple",
      },
      "adisyon-mobile-app": {
        caption: "Application mobile · Écran d'accueil MK Adisyon vérifié de la surface en test fermé.",
        alt: "Écran d'accueil de l'application mobile MK Adisyon en test fermé",
      },
      "adisyon-kitchen": {
        caption: "Application web · Cuisine : les commandes en cartes par table, tour et poste, marquées en attente, en préparation ou prêtes.",
        alt: "Écran cuisine de la démo MK Adisyon avec des commandes d’exemple",
      },
    },
    screensNote:
      "Les données des écrans web sont des exemples. La vue serveur encadrée comme un téléphone est l'interface web responsive ; l'écran de l'application séparée est clairement indiqué. « Mavi Adisyon » dans l'interface web est une dette de rebranding existante ; le nom public est MK Adisyon.",
    ctaText:
      "Si vous voulez réunir commande, cuisine et paiement autour du même dossier, examinons ensemble le fonctionnement actuel de votre restaurant.",
    modules: {
      heading: "Modules vérifiés dans le système web",
      items: [
        { title: "Salles et tables", text: "Zones et tables sont suivies par état ; l'ouverture d'une table commence avec le nombre de convives." },
        { title: "Commande en salle", text: "Les produits sont ajoutés avec options, notes et tours de service, puis envoyés en cuisine." },
        { title: "Écran cuisine", text: "Les commandes passent d'en attente à en préparation puis prêtes ; le service reçoit l'information." },
        { title: "Opérations de table", text: "Les tables ouvertes peuvent être déplacées ou fusionnées, et les articles séparés sur une autre addition." },
        { title: "Caisse et paiement", text: "L'addition se partage par montant, personne ou article ; paiements partiels et modes sont enregistrés." },
        { title: "Service et mouvements de caisse", text: "Ouverture, entrées, sorties et comptage de caisse restent dans le même dossier opérationnel." },
        { title: "Gestion", text: "Produits, tables, cuisine, service, caisse, dépenses, finances et activités sont suivis dans les vues de gestion." },
      ],
    },
  },
  "mk-farm": {
    meta: {
      title: "Gestion des fermes et des opérations d'élevage | MK Digital Systems",
      description:
        "MK Farm réunit animaux, poids, lait, santé, insémination, QR, rapports et saisies terrain dans un système multi-fermes avec mode hors ligne.",
    },
    title: "Faire passer les registres quotidiens de la ferme du terrain au rapport",
    lead:
      "MK Farm réunit les opérations par animal dans un registre numérique. Propriétaires et personnel travaillent sur les mêmes données à jour, de la saisie rapide sur le terrain aux rapports de gestion.",
    audience: {
      heading: "Le problème de qui ?",
      text:
        "Des exploitations qui gèrent ensemble bovins viande et lait, personnel et soins quotidiens. Elles doivent accéder vite à l'historique d'un animal sur le terrain et produire des rapports à partir du même dossier.",
      points: [
        "Les propriétaires qui gèrent une ou plusieurs fermes",
        "Le personnel qui saisit poids, lait, santé et insémination",
        "Les responsables qui suivent l'historique et les contrôles à venir",
        "Les équipes qui préparent les rapports périodiques de production et d'exploitation",
      ],
    },
    problem: {
      heading: "Quel était le problème ?",
      text:
        "Quand identité, pesées, lait, traitements et inséminations restent dans des cahiers séparés, l'historique est difficile à suivre et les tâches à venir faciles à manquer. La connexion sur le terrain peut aussi retarder la saisie.",
      points: [
        "L'état actuel et l'historique d'un animal sont conservés à des endroits différents",
        "L'animal correct n'est pas rapidement accessible depuis sa boucle",
        "Contrôles, délais d'attente des médicaments et répétitions sont oubliés",
        "Une coupure de connexion reporte ou fait ressaisir les données terrain",
      ],
    },
    approach: {
      heading: "Comment l'avons-nous abordé ?",
      text:
        "Nous avons structuré les données autour du cycle de vie de l'animal, transformé le travail quotidien en formulaires courts et les besoins de gestion en rapports et alertes filtrables. La file hors ligne fait partie de l'usage terrain.",
      points: [
        "Accès séparé par adhésion à la ferme et rôles propriétaire-personnel",
        "Accès rapide à la fiche animale par boucle et QR",
        "Flux distincts mais reliés pour poids, lait, santé et insémination",
        "Synchronisation contrôlée et gestion des conflits au retour de la connexion",
      ],
    },
    solution: {
      heading: "Saisies terrain, historique animal et rapports dans le même système",
      text:
        "MK Farm associe adhésion multi-fermes, accès par rôle et cycle de vie animal à une vraie API et une base persistante. Sa PWA responsive permet l'usage hors ligne des données déjà chargées et la synchronisation ultérieure des saisies en attente.",
    },
    screens: {
      "farm-dashboard": {
        caption: "Vue d'ensemble : nombre d'animaux, lait du jour, suivi, dernières pesées et rappels.",
        alt: "Vue d'ensemble MK Farm avec résumé de ferme issu des données locales d'exemple",
      },
      "farm-animals-mobile": {
        caption: "Vue terrain responsive : liste par boucle, nom, catégorie et race.",
        alt: "Vue téléphone MK Farm avec une liste d'animaux d'exemple",
      },
      "farm-reports": {
        caption: "Rapports : synthèse et export de la production laitière avec filtres par date et animal.",
        alt: "Rapport de production laitière MK Farm avec données locales d'exemple",
      },
    },
    screensNote:
      "Ces écrans montrent des données entièrement fictives générées par le chargeur de démonstration local ; personnes, ferme, animaux et boucles ne sont pas des dossiers réels.",
    ctaText:
      "Si vous voulez réunir saisies terrain, historique animal et rapports dans le même flux, examinons ensemble le fonctionnement actuel de votre ferme.",
    modules: {
      heading: "Modules principaux",
      items: [
        { title: "Fermes et équipe", text: "Adhésions des propriétaires et du personnel, validations et espace actif sont gérés ensemble." },
        { title: "Fiches animales", text: "Identité, boucle, état et cycle de vie des bovins viande et lait restent sur une même fiche." },
        { title: "Identité QR", text: "Affichage, impression et lecture du QR par caméra ou lecteur externe ouvrent la fiche animale." },
        { title: "Poids et pesée", text: "Saisies manuelles ou balance simulée, historique et écart avec la pesée précédente sont suivis." },
        { title: "Production laitière", text: "Les volumes matin et soir sont saisis par animal et date, puis réunis dans les rapports de période." },
        { title: "Santé et insémination", text: "Examens, médicaments, contrôles vétérinaires et historique d'insémination sont reliés à la fiche." },
        { title: "Alertes et rapports", text: "Contrôles à venir et exceptions sont listés ; les données de lait et de ferme s'exportent." },
        { title: "Synchronisation hors ligne", text: "Les saisies restent dans la file de l'appareil puis sont envoyées avec contrôles de version et de conflit." },
      ],
    },
  },
};

export default fr;
