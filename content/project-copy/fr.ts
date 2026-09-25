import type { ProjectCopyBook } from ".";

const fr: ProjectCopyBook = {
  "saha-santiye": {
    name: "Opérations terrain & chantier",
    industry: "TÉLÉCOMS & OPÉRATIONS TERRAIN",
    summary:
      "Des systèmes d’exploitation pour les entreprises télécoms et fibre sur le terrain, conçus selon deux approches du même problème.",
    headline: "Le travail sur le terrain, visible au bureau en temps réel.",
    problem:
      "Tâches du jour, équipes, mouvements de matériel, relevés terrain et situations de travaux se dispersent entre messages et tableurs, et l’on voit trop tard ce qui est fait et ce qui attend.",
    solution:
      "Une approche SaaS que plusieurs entreprises utilisent chacune dans leur espace (MK OPS) et un système de gestion configuré selon les opérations d’une seule entreprise (Şantiye Yönetim).",
    modules: [
      "Saisie quotidienne et validations",
      "Gestion des équipes et des projets",
      "Suivi du matériel et des stocks",
      "Périodes de facturation et rapports",
    ],
    alt: "Tâches en attente de validation dans la démo MK OPS, avec des données d’exemple",
    parts: {
      "mk-ops": {
        name: "MK OPS",
        description: "Approche SaaS où plusieurs entreprises travaillent dans leur propre espace, organisé par rôles.",
      },
      "santiye-yonetim": {
        name: "Şantiye Yönetim",
        description: "Panneau configuré selon les opérations d’une entreprise, avec gestion sécurisée des sessions.",
      },
    },
  },
  "mk-adisyon": {
    industry: "RESTAURANTS & CAFÉS",
    summary: "Un parcours de commande et d’addition pour restaurants et cafés, sur le web et sur mobile.",
    headline: "De la première commande à l’addition.",
    problem:
      "Service, cuisine et caisse doivent voir à quelle étape en est une même commande.",
    solution:
      "Une application web qui réunit les écrans service, cuisine, caisse et gestion dans un même parcours, et une application mobile pour prendre les commandes sur téléphone.",
    modules: ["Service", "Cuisine", "Caisse", "Gestion", "Commande mobile"],
    alt: "Parcours du restaurant entre service, cuisine, caisse et gestion",
    parts: {
      web: { name: "Application web", description: "Écrans service, cuisine, caisse et gestion." },
      mobile: { name: "Application mobile", description: "Application Android, en test fermé sur Google Play." },
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
    alt: "Parcours reliant plan des chambres, arrivées et encaissements",
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
    alt: "Parcours de la clinique reliant patients, examens, vaccins et rendez-vous",
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
    alt: "Parcours de fret reliant calcul de prix, demandes et gestion des commandes",
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
    alt: "Écran d’accueil de l’application Aura",
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
};

export default fr;
