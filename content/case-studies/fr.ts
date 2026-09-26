import type { ProjectId } from "@/content/projects";
import type { CaseStudyCopy } from ".";

const fr: Partial<Record<ProjectId, CaseStudyCopy>> = {
  "saha-santiye": {
    meta: {
      title: "MK OPS : gestion des opérations terrain télécom et fibre | MK Digital Systems",
      description:
        "MK OPS réunit travaux du jour, validations, équipes, matériel et situations des équipes télécom et fibre dans un seul système, chaque entreprise dans son espace.",
    },
    title: "Réunir les opérations terrain en un seul endroit",
    lead:
      "Le travail sur le terrain, visible au bureau au même moment. MK OPS réunit les opérations terrain des projets télécom et fibre, de la saisie quotidienne et des validations aux équipes, au matériel et aux situations, dans un seul système que chaque entreprise utilise dans son propre espace.",
    audience: {
      heading: "Le problème de qui ?",
      text:
        "Des entreprises qui gèrent en même temps de nombreuses équipes, projets et matériels sur des chantiers télécom et fibre. Des chefs d’équipe sur le terrain aux opérations et à la comptabilité au bureau, chacun voit une partie différente du travail.",
      points: [
        "Des équipes et chefs d’équipe sur différents projets le même jour",
        "Des responsables de projet et d’entreprise qui planifient, contrôlent et valident",
        "Le magasin qui suit le matériel, les véhicules et les équipements",
        "Le bureau qui prépare les situations et les rapports",
      ],
    },
    problem: {
      heading: "Quel était le problème ?",
      text:
        "Sur le terrain, tout va vite ; l’information se disperse entre messages, photos et tableurs séparés. Quelle équipe fait quoi et où, quel travail attend une validation, où est parti tel matériel : souvent visible seulement le soir, reconstitué à la main.",
      points: [
        "Les travaux du jour restent dans des messages et des formulaires papier",
        "On ne sait qu’en fin de journée quel travail attend une validation",
        "Les sorties de matériel ne correspondent pas au stock",
        "Les gains des équipes et les situations sont rassemblés à la main en fin de période",
        "Les données de plusieurs entreprises se mélangent dans les mêmes tableurs",
      ],
    },
    approach: {
      heading: "Comment l’avons-nous abordé ?",
      text:
        "Nous sommes partis du déroulement d’une journée sur le terrain plutôt que des écrans : saisie dans la journée, contrôle et validation le soir, rapports en fin de période. Le but : la personne qui voit une information en premier la saisit directement, et chacun ne voit que ce qui lui est utile.",
      points: [
        "Penser par rôles : chefs d’équipe, responsables de projet et d’entreprise ne voient pas la même chose",
        "Saisie rapide sur téléphone sur le terrain, contrôle groupé sur ordinateur au bureau",
        "Un circuit de validation clair : brouillon, envoyé, validé ou refusé",
        "Regrouper les saisies par période de facturation",
      ],
    },
    solution: {
      heading: "Chaque entreprise dans son propre espace",
      text:
        "Nous avons conçu MK OPS comme un SaaS multi-locataire que plusieurs entreprises utilisent, chacune dans un espace isolé. Chaque entreprise y gère ses équipes, ses projets, ses travaux terrain et ses validations ; des droits par rôle font que chacun ne voit que son propre travail.",
      points: [
        "Isolation des données par entreprise et droits par rôle",
        "Saisie quotidienne des travaux terrain et circuit de validation",
        "Bons de livraison de matériel et suivi du stock",
        "Gains des équipes, part de l’entreprise et périodes de facturation",
        "Journal d’audit, rapports Excel et PDF",
        "Interface en turc, anglais, allemand, français et espagnol",
      ],
    },
    screens: {
      "ops-approvals": {
        caption: "MK OPS · Validations : les travaux du jour envoyés par les chefs d’équipe sont validés ou refusés dans une seule liste.",
        alt: "Écran de validations MK OPS avec des travaux d’exemple en attente",
      },
      "ops-mobile": {
        caption: "MK OPS · Mobile : la même liste de validations sur téléphone, sur le terrain.",
        alt: "Validations MK OPS sur mobile avec des données d’exemple",
      },
      "ops-management": {
        caption: "MK OPS · Gestion : équipes, véhicules, stock de matériel, équipements et postes de travail.",
        alt: "Panneau de gestion MK OPS avec une liste d’équipes d’exemple",
      },
    },
    ctaText: "Si vous voulez réunir le travail terrain et le suivi au bureau, racontez-nous comment se déroule votre journée aujourd’hui ; nous définirons ensemble la bonne approche.",
    screensNote: "Toutes les données de ces écrans sont des exemples ; elles ne contiennent aucune personne, entreprise ou projet réels.",
    modules: {
      heading: "Modules principaux",
      items: [
        { title: "Saisie et validation quotidiennes", text: "Le travail terrain est saisi le jour même ; un responsable le valide ou demande une correction depuis une liste." },
        { title: "Gestion des équipes et des projets", text: "Équipes, projets et postes de travail sont définis par entreprise ; la saisie quotidienne s’appuie sur eux." },
        { title: "Bons de livraison et stock", text: "Les sorties de matériel sont saisies avec un bon de livraison ; le stock se met à jour à partir des mêmes saisies." },
        { title: "Véhicules et équipements", text: "Véhicules et équipements sont tenus au même endroit que les équipes." },
        { title: "Périodes de facturation", text: "Les gains des équipes et la part de l’entreprise sont calculés par période à partir des mêmes saisies." },
        { title: "Espace entreprise et rôles", text: "Chaque entreprise travaille dans son espace isolé ; responsables d’entreprise, de projet et chefs d’équipe voient des écrans différents." },
        { title: "Journal d’audit", text: "Qui a modifié quoi et quand est conservé." },
        { title: "Rapports et langues", text: "Les rapports s’exportent en Excel et PDF ; l’interface s’utilise en cinq langues." },
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
