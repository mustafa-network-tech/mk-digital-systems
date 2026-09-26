import type { ProjectCopyBook } from ".";

const fr: ProjectCopyBook = {
  "saha-santiye": {
    industry: "TÉLÉCOMS & OPÉRATIONS TERRAIN",
    summary:
      "Un système d’exploitation multi-entreprises pour les sociétés télécoms et fibre sur le terrain : chaque entreprise gère ses équipes, ses tâches et ses validations dans son propre espace.",
    headline: "Le travail sur le terrain, visible au bureau en temps réel.",
    problem:
      "Tâches du jour, équipes, mouvements de matériel, relevés terrain et situations de travaux se dispersent entre messages et tableurs, et l’on voit trop tard ce qui est fait et ce qui attend.",
    solution:
      "Un SaaS multi-locataire que chaque entreprise utilise dans son espace isolé : saisie quotidienne et validations, équipes, matériel et périodes de facturation dans un seul système.",
    modules: [
      "Saisie quotidienne et validations",
      "Gestion des équipes, véhicules et projets",
      "Bons de livraison et stock",
      "Périodes de facturation et rapports",
    ],
    alt: "Tâches en attente de validation dans la démo MK OPS, avec des données d’exemple",
  },
  "santiye-yonetim": {
    industry: "CHANTIERS & PROJETS FIBRE",
    summary:
      "Un système de gestion conçu autour des opérations de chantier d’une entreprise, qui suit les projets, le planning quotidien des équipes, les travaux réalisés et les feuilles de temps.",
    headline: "Planifier la journée du chantier sur un seul écran.",
    problem:
      "Quand les étapes des projets, le planning des équipes, les travaux réalisés, le matériel et les véhicules sont dans des listes séparées, l’état réel d’un projet n’apparaît qu’après un rapprochement manuel.",
    solution:
      "Un panneau conçu selon la façon de travailler de l’entreprise : étapes des projets, plannings quotidiens, saisie des travaux, feuilles de temps, stock, matériel confié et véhicules au même endroit, avec inscription validée et sessions sécurisées.",
    modules: [
      "Suivi des projets et des étapes",
      "Plannings quotidiens et modèles d’équipe",
      "Saisie des travaux et rapport",
      "Feuilles de temps et récapitulatif",
      "Matériel, stock et affectations",
      "Rappels véhicules et documents",
    ],
    alt: "Tableau de bord Şantiye Yönetim avec des données d’exemple : état des projets, stock critique et rappels véhicules",
  },
  "mk-adisyon": {
    industry: "RESTAURANTS & CAFÉS",
    summary: "Un produit de commande et d’addition avec système web actif et application mobile en test fermé.",
    headline: "De la première commande à l’addition.",
    problem:
      "Service, cuisine et caisse doivent voir à quelle étape en est une même commande.",
    solution:
      "Un système web actif qui réunit service, cuisine, caisse et gestion, plus une application mobile distincte, développée et en test fermé.",
    modules: ["Service", "Cuisine", "Caisse", "Gestion", "Application mobile · test fermé"],
    alt: "Démo MK Adisyon avec des données d’exemple : la caisse avec tables ouvertes et paiements",
    parts: {
      web: { name: "Application web", description: "Écrans service, cuisine, caisse et gestion." },
      mobile: { name: "Application mobile", description: "Application mobile développée, actuellement en test fermé." },
    },
  },
  "mk-farm": {
    industry: "AGRICULTURE & ÉLEVAGE",
    summary: "Une application de gestion qui relie la fiche de chaque animal au travail quotidien de la ferme.",
    headline: "Une fiche plus claire pour chaque animal.",
    problem:
      "La fiche de chaque animal doit être suivie avec les opérations quotidiennes de la ferme.",
    solution:
      "Une application de gestion agricole qui réunit identifiant QR, pesées et historique de santé.",
    modules: ["Identifiant QR", "Historique de poids", "Dossiers de santé"],
    alt: "Écran d’ensemble réel de l’application MK Farm",
  },
  "mk-resepsiyon": {
    industry: "HÔTELLERIE",
    summary:
      "Un système d’exploitation pour hôtels et pensions reliant plan des chambres, arrivée des clients et encaissements.",
    headline: "Une journée plus sereine à la réception.",
    problem: "Réservations, état des chambres et encaissements font partie de la même expérience client.",
    solution:
      "Un système d’exploitation hôtelier qui relie plan des chambres, arrivées, encaissements et écrans de gestion.",
    modules: ["Plan des chambres", "Arrivée des clients", "Encaissements & registres"],
    alt: "Démo MK Resepsiyon avec des données d’exemple : vue d’ensemble de la réception",
  },
  "mk-pati": {
    industry: "CLINIQUES VÉTÉRINAIRES",
    summary:
      "Gestion des patients, examens, vaccins et rendez-vous pour les cliniques vétérinaires, avec un assistant clinique IA.",
    headline: "L’historique du patient sur un seul écran.",
    problem:
      "Quand fiches patients, calendriers de vaccination et rendez-vous sont éparpillés, le suivi se relâche.",
    solution:
      "Un système de gestion de clinique qui réunit patients, examens, vaccins et rendez-vous, avec l’appui d’un assistant clinique IA.",
    modules: ["Dossiers patients", "Examens & vaccins", "Rendez-vous", "Assistant clinique IA"],
    alt: "Écran d’accueil du site produit MK Pati",
  },
  "mk-kargo": {
    industry: "FRET & LOGISTIQUE",
    summary:
      "Un site client qui calcule les prix pour les sociétés de fret par autocar et un panneau d’exploitation pour gérer les commandes.",
    headline: "Un seul parcours, de la demande à la livraison.",
    problem: "Demandes de prix, demandes d’envoi et statuts de commande se dispersent entre appels et messages.",
    solution:
      "Un site client qui calcule instantanément le prix selon les dimensions et le trajet, et un panneau d’exploitation pour les demandes, commandes, véhicules et exports de documents.",
    modules: ["Calcul de prix instantané", "Demandes d’envoi", "Gestion des commandes et véhicules", "Exports PDF et Excel"],
    alt: "Écran d’accueil du site d’exemple MK Kargo",
  },
  "proje-asama-takip": {
    name: "Suivi des étapes de projet",
    industry: "INFRASTRUCTURES & CHANTIERS",
    summary:
      "Un système de suivi de chantier qui réunit les étapes des projets d’infrastructure, le personnel terrain, les véhicules et les feuilles de temps.",
    headline: "Savoir à quelle étape en est chaque projet.",
    problem:
      "Quand de nombreux projets d’infrastructure avancent en même temps, ce qui attend, ce qui est en retard, qui travaille où avec quel véhicule et l’état des feuilles de temps se dispersent dans différentes listes.",
    solution:
      "Une application web protégée par connexion qui suit les projets avec des états clairs (en attente, en cours, autorisation attendue, en retard, terminé) et réunit personnel, véhicules et feuilles de temps dans le même système. Les projets terminés passent d’eux-mêmes aux archives.",
    modules: [
      "État des projets et des étapes",
      "Suivi du personnel",
      "Suivi des véhicules",
      "Feuilles de temps",
      "Recherche, filtres et archives",
    ],
  },
  "onayli-proje-takip": {
    name: "Suivi de projet validé",
    industry: "SUIVI DE PROJETS D’INFRASTRUCTURE",
    summary:
      "Un panneau d’exploitation qui transforme les listes de projets et de bâtiments issues d’Excel en enregistrements durables et suit l’avancement, les notes et l’historique.",
    headline: "Un projet traçable plutôt qu’une liste Excel.",
    problem:
      "Les listes de projets et de bâtiments arrivent en fichiers Excel, chacun remplaçant le précédent. On perd ce qui a été réalisé dans quel bâtiment, qui a modifié quoi et quel enregistrement est à jour.",
    solution:
      "Avant d’appliquer un nouveau fichier Excel, ses changements sont prévisualisés puis, une fois validés, enregistrés en une seule fois. L’import ne met à jour que les champs issus du fichier ; l’avancement et les notes du terrain sont conservés. Chaque changement d’avancement ou de note est inscrit à l’historique avec l’utilisateur et la date.",
    modules: [
      "Import Excel avec aperçu validé",
      "Projets et bâtiments",
      "Avancement des travaux",
      "Notes",
      "Historique des modifications",
    ],
  },
  namehub: {
    industry: "PRODUIT NUMÉRIQUE",
    summary: "Une plateforme de noms avec des suggestions pour bébés, animaux, marques et pseudonymes.",
    alt: "Page d’accueil de NameHub",
  },
  aria: {
    industry: "PLATEFORME SOCIALE",
    summary:
      "Interface d’une plateforme sociale pour une communauté photo et nature : fil, profils, abonnements, messagerie et publication.",
    alt: "Fil Explorer de la plateforme sociale ARIA",
  },
  "mavi-kadraj-arsiv": {
    industry: "ARCHIVE PHOTO",
    summary: "Une archive photo consultable et filtrable par thème et par ville.",
    alt: "Page d’accueil de l’archive photo Mavi Kadraj",
  },
  "kadraj-rotam": {
    industry: "ITINÉRAIRES PHOTO",
    summary: "Une plateforme d’itinéraires photo locaux et internationaux, de notes de terrain et de guides.",
    alt: "Page d’accueil de Kadraj Rotam",
  },
  aura: {
    industry: "APPLICATION MOBILE",
    summary: "Une application simple pour tenir un journal et suivre son humeur.",
    alt: "Application Aura avec des données d’exemple : Aujourd’hui, choix de l’humeur et calendrier",
  },
  "is-takip": {
    name: "Suivi des tâches",
    industry: "SUIVI DES TÂCHES",
    summary: "Une application pour suivre au même endroit l’état et le responsable du travail quotidien.",
    alt: "Écran de l’application de suivi des tâches",
  },
  "gunluk-imalat": {
    name: "Fiche de production quotidienne",
    industry: "PRODUCTION",
    summary: "Une application qui transforme les relevés de production quotidiens de l’atelier en fiche numérique.",
    alt: "Écran de l’application Fiche de production quotidienne",
  },
  "mavi-sarkilar": {
    industry: "MUSIQUE & ARTISTE",
    summary:
      "Une expérience web pour un musicien : vitrine Spotify, clips, dates de concert et espace newsletter.",
    alt: "Écran d’accueil du site d’artiste Mavi Şarkılar",
  },
  musty: {
    industry: "PORTFOLIO CINÉMATIQUE",
    summary:
      "Un portfolio cinématique et bilingue pour un artiste visuel : galerie, vidéo et images.",
    alt: "Écran d’accueil du portfolio Musty",
  },
  "gonul-pusulasi": {
    industry: "WEB CRÉATIF & CONTENU NUMÉRIQUE",
    summary:
      "Un site de contenu créatif qui réunit lettres, phrases courtes et photographies, publié en pages web et en stories 9:16.",
    alt: "Page d’accueil de Gönül Pusulası",
  },
  "siir-dunyasi": {
    industry: "POÉSIE & WEB LITTÉRAIRE",
    summary: "Un site littéraire qui présente des poèmes d’amour, de nostalgie et de séparation dans une lecture apaisée.",
    alt: "Page d’accueil de Şiir Dünyası : coucher de soleil sur la mer et la phrase « Dans le silence, les mots marchent. »",
  },
  "mk-firsat": {
    industry: "PLATEFORME DE BONS PLANS & SHOPPING",
    summary:
      "Une plateforme numérique moderne qui vise à réunir la découverte de bons plans et les options d’achat dans une seule expérience.",
    description:
      "MK Fırsat est une expérience moderne de shopping et de découverte, conçue pour aider chacun à découvrir des bons plans plus facilement, à examiner les options et à accéder rapidement aux offres qui l’intéressent. Pensé dès le départ pour le web et le mobile, le projet sera ensuite lancé comme l’un des produits numériques indépendants de la famille MK Digital Systems.",
  },
  "mavi-kadraj-otel": {
    industry: "SITE D’HÔTEL",
    summary:
      "Exemple de site pour hôtels et pensions avec pages de chambres, galerie et réservation pas à pas.",
    alt: "Écran d’accueil de l’exemple de site Mavi Kadraj Otel",
  },
  "mavi-kafe": {
    industry: "SITE DE CAFÉ & RESTAURANT",
    summary: "Exemple de site pour cafés et restaurants avec menu numérique, galerie et réservation.",
    alt: "Écran d’accueil de l’exemple de site Mavi Kafe",
  },
  "mavi-guzellik": {
    industry: "SITE D’INSTITUT DE BEAUTÉ",
    summary:
      "Exemple de site d’institut de beauté avec prestations, présentation de l’équipe et prise de rendez-vous par WhatsApp.",
    alt: "Écran d’accueil de l’exemple de site Mavi Güzellik",
  },
  "mavi-danismanlik": {
    industry: "SITE DE CONSEIL",
    summary: "Exemple de site de conseil avec pages de services, demande de rendez-vous et contact.",
    alt: "Écran d’accueil de l’exemple de site Mavi Danışmanlık",
  },
  "mavi-yapi": {
    industry: "SITE D’APPROVISIONNEMENT B2B",
    summary:
      "Exemple de site B2B bilingue avec catalogue produits, pages de catégories et formulaire de devis.",
    alt: "Écran d’accueil de l’exemple de site Mavi Yapı",
  },
  "mavi-iletisim": {
    industry: "SITE DE BOUTIQUE HIGH-TECH",
    summary: "Exemple de site de boutique high-tech avec catalogue, panier et demandes de réparation.",
    alt: "Écran d’accueil de l’exemple de site Mavi İletişim",
  },
  "mavi-gayrimenkul": {
    industry: "SITE D’AGENCE IMMOBILIÈRE",
    summary: "Exemple de site d’agence immobilière avec recherche d’annonces à vendre et à louer, guide des quartiers et demande d’estimation.",
    alt: "Écran d’accueil de l’exemple de site Mavi Gayrimenkul : recherche d’annonces",
  },
  "adalet-hukuk": {
    industry: "SITE DE CABINET D’AVOCATS",
    summary: "Exemple de site de cabinet d’avocats avec domaines d’intervention, profils d’avocats et articles d’information.",
    alt: "Écran d’accueil de l’exemple de site Adalet Hukuk",
  },
};

export default fr;
