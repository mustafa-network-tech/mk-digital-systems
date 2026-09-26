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
};

export default fr;
