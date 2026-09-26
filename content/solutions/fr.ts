import type { SolutionsCopy } from ".";

/** French solutions copy: same rules as Turkish; pricing is a project-based quotation. */
const fr: SolutionsCopy = {
  hub: {
    label: "SOLUTIONS",
    title: "Des solutions web et logicielles\nconçues autour de votre activité.",
    description:
      "Du site web au logiciel sur mesure, du système de gestion à l’application mobile. Chaque solution part d’un besoin et trouve sa réponse dans une vraie réalisation.",
    axesTitle: "Quatre domaines de solutions",
    explore: "Voir la solution",
    example: "Un exemple réel",
    support: {
      title: "Aide pour votre site existant",
      text: "Un nouveau projet n’est pas toujours nécessaire. Nous pouvons faire évoluer le design, le contenu ou le fonctionnement de votre site WordPress, et améliorer sa technique et ses contenus pour qu’il soit plus facile à trouver.",
    },
  },
  page: {
    label: "SOLUTION",
    price: "Tarifs",
    support: "Aide pour votre site existant",
    others: "Autres solutions",
    ctaPrimary: "Décrire votre besoin",
    ctaSecondary: "Écrire sur WhatsApp",
    inquiry: "Bonjour, j’aimerais en savoir plus sur : {solution}.",
  },
  items: {
    web: {
      meta: {
        title: "Conception de sites web : vitrines et sur mesure | MK Digital Systems",
        description:
          "Des sites qui présentent clairement votre activité, se trouvent facilement et facilitent le contact : landing page, site vitrine, design sur mesure, aide WordPress.",
      },
      name: "Conception de sites web",
      title: "Conception de sites web : un site qui vous présente justement",
      lead:
        "En quelques secondes, le visiteur doit comprendre ce que vous faites, trouver ce qu’il cherche et avoir envie de vous contacter. Nous concevons et développons votre site à partir de la manière dont votre activité doit être racontée.",
      need: "Notre travail est bon, mais on ne le voit pas en ligne.",
      approach:
        "Nous clarifions d’abord quoi dire et à qui, puis nous en faisons un site clair, aussi simple à utiliser sur téléphone.",
      needs: {
        heading: "Quels besoins vous amènent ?",
        items: [
          "Vous n’avez pas de site, ou il ne reflète plus votre activité",
          "Les visiteurs ne trouvent pas ce qu’ils cherchent et ne vous contactent pas",
          "Un service ou une campagne a besoin d’une page claire et ciblée",
          "Vous voulez une expérience à vous, pas un modèle de plus",
          "Votre site WordPress doit être retouché ou mieux visible dans la recherche",
        ],
      },
      method: {
        heading: "Comment l’abordons-nous ?",
        text:
          "Nous ne partons pas des couleurs mais du rôle du site : qui est le visiteur, que cherche-t-il et que doit-il faire au final ? La structure, les textes et les images suivent les réponses.",
        points: [
          "D’abord le contenu et la structure, ensuite le design",
          "Une mise en page aussi agréable sur téléphone",
          "Des bases SEO avec des titres et descriptions pertinents",
          "Des appels à l’action clairs : formulaire, téléphone, WhatsApp",
        ],
      },
      builds: {
        heading: "Que pouvons-nous réaliser ?",
        items: [
          { title: "Landing page", text: "Une page ciblée pour un service, un produit ou une campagne." },
          { title: "Site vitrine", text: "Pages de services, présentation et contact pour présenter votre activité avec assurance." },
          { title: "Site premium", text: "Design sur mesure, contenus forts et animations maîtrisées pour une expérience à votre image." },
          { title: "Expériences web créatives", text: "Des sites narratifs et visuels pour les artistes, la photographie et les projets de contenu." },
        ],
      },
      work: {
        heading: "Réalisations",
        text: "Des sites d’exemple conçus pour différents secteurs et des projets web créatifs en ligne aujourd’hui.",
      },
      faq: {
        heading: "Questions fréquentes",
        items: [
          {
            question: "Puis-je faire retoucher mon site plutôt que le refaire ?",
            answer:
              "Oui. Les modifications de design, de contenu ou de fonctionnement sur un site WordPress sont un service d’aide à part. Nous regardons ensemble si un nouveau site est vraiment nécessaire.",
          },
          {
            question: "Le site apparaîtra-t-il dans les moteurs de recherche ?",
            answer:
              "Les sites sont réalisés avec des bases SEO : titres, descriptions pertinents et structure propre. Un travail SEO plus poussé est un service à part. Personne ne peut promettre des positions précises, nous non plus.",
          },
          {
            question: "Comment le prix d’un site est-il établi ?",
            answer:
              "Le nombre de pages, le degré de personnalisation du design, les contenus et les fonctions supplémentaires définissent le périmètre. Nous travaillons sur devis : une fois le périmètre clair, nous préparons un devis.",
          },
        ],
      },
      cta: {
        title: "Quel site avez-vous en tête ?",
        text: "Présentez en quelques phrases votre activité et le public du site ; nous définirons ensemble le bon périmètre.",
      },
    },
    custom: {
      meta: {
        title: "Développement de logiciel sur mesure | MK Digital Systems",
        description:
          "Quand les outils du marché ne suffisent pas : un logiciel conçu autour du fonctionnement de votre activité, des applications web aux systèmes multi-utilisateurs.",
      },
      name: "Logiciel sur mesure",
      title: "Logiciel sur mesure : un système adapté à votre activité",
      lead:
        "Plutôt que de plier votre activité à un programme tout fait, nous construisons le logiciel autour de la façon dont votre travail se déroule vraiment. De l’outil interne d’une entreprise au produit utilisé par plusieurs.",
      need: "Les logiciels du marché ne correspondent pas à notre façon de travailler.",
      approach:
        "Nous décrivons le déroulement du travail avant de dessiner le moindre écran, concevons le logiciel autour et le développons étape par étape.",
      needs: {
        heading: "Quels besoins vous amènent ?",
        items: [
          "Les logiciels tout faits ne suivent pas votre processus ; l’équipe les contourne",
          "Le travail est dispersé entre fichiers Excel, messages et formulaires papier",
          "Vous avez une idée de produit et voulez en voir une première version utilisable",
          "Il vous faut un système utilisé par plusieurs entreprises ou équipes dans des espaces séparés",
        ],
      },
      method: {
        heading: "Comment l’abordons-nous ?",
        text:
          "Nous partons du travail, pas du code : qui saisit quoi, qui valide quoi, qui doit voir quoi ? Une fois ce circuit clair, nous concevons les écrans, puis nous développons.",
        points: [
          "Penser par rôles : chacun voit ce qui lui est utile",
          "Une interface utilisable sur téléphone sur le terrain et sur ordinateur au bureau",
          "D’abord le circuit principal, ensuite les modules complémentaires",
          "Des liens avec les habitudes existantes comme Excel et PDF si nécessaire",
        ],
      },
      builds: {
        heading: "Que pouvons-nous réaliser ?",
        items: [
          { title: "Applications web sur mesure", text: "Des panneaux et applications conçus selon la façon de travailler d’une entreprise." },
          { title: "Produits numériques et premières versions", text: "Transformer le cœur utile d’une idée en une première version utilisable." },
          { title: "Systèmes multi-utilisateurs / SaaS", text: "Des systèmes prêts à grandir, avec droits par rôle et un espace pour chaque entreprise." },
          { title: "Import de données et rapports", text: "Import depuis Excel avec aperçu validé ; rapports Excel et PDF." },
        ],
      },
      work: {
        heading: "Réalisations",
        text: "Des systèmes conçus autour du fonctionnement d’une entreprise aux produits utilisés par plusieurs.",
      },
      faq: {
        heading: "Questions fréquentes",
        items: [
          {
            question: "Logiciel sur mesure ou programme tout fait ?",
            answer:
              "Si un programme tout fait couvre votre activité, il suffit souvent. Le sur mesure a du sens quand votre processus vous est propre, quand l’équipe doit contourner le programme ou quand votre idée de produit n’existe pas ailleurs. Nous en parlons ensemble dès le premier échange.",
          },
          {
            question: "Dois-je préparer un cahier des charges technique ?",
            answer:
              "Non. Expliquez-nous comment le travail se déroule aujourd’hui et ce que vous voulez changer ; nous poserons les questions utiles.",
          },
          {
            question: "Comment le prix d’un logiciel sur mesure est-il établi ?",
            answer:
              "Les rôles, le nombre d’écrans et de modules, les systèmes connectés et les rapports définissent le périmètre. Nous travaillons sur devis : une fois le périmètre clair, nous préparons un devis.",
          },
        ],
      },
      cta: {
        title: "Quel travail devrait avancer plus simplement ?",
        text: "Racontez-nous comment les choses se passent aujourd’hui et ce qui vous pèse le plus ; nous proposerons une approche à partir de là.",
      },
    },
    business: {
      meta: {
        title: "Systèmes de gestion d’entreprise et tableaux de bord | MK Digital Systems",
        description:
          "Des systèmes de gestion qui réunissent commandes, réservations, dossiers, équipes et rapports pour restaurants, hôtels, cliniques, fermes et équipes terrain.",
      },
      name: "Systèmes de gestion d’entreprise",
      title: "Systèmes de gestion d’entreprise : le travail du jour au même endroit",
      lead:
        "Quand commandes, réservations, dossiers et équipes sont à des endroits différents, la journée s’allonge. Nous développons des systèmes où différents rôles travaillent à partir du même enregistrement.",
      need: "Commandes, dossiers et suivi des équipes sont dispersés.",
      approach:
        "Nous créons un écran simple pour chaque rôle et relions tous les rôles au même enregistrement : l’information est saisie une fois et arrive à tous.",
      needs: {
        heading: "Quels besoins vous amènent ?",
        items: [
          "Commandes, réservations ou rendez-vous sont sur papier ou dans des messages",
          "Salle, cuisine, caisse, réception ou terrain tiennent les mêmes informations séparément",
          "Vous rassemblez des tableaux à la main pour voir ce qui s’est passé dans la journée",
          "Stock, matériel confié, véhicules ou pointage sont difficiles à suivre",
        ],
      },
      method: {
        heading: "Comment l’abordons-nous ?",
        text:
          "Nous construisons le système autour de votre journée : qui saisit la première information, qui l’utilise, que doit voir le responsable ? Chaque rôle a son écran ; tous travaillent sur le même enregistrement.",
        points: [
          "Des écrans par rôle : salle, cuisine, caisse, réception, terrain, direction",
          "Des statuts clairs qui montrent où en est chaque tâche",
          "Des mises en page adaptées au téléphone, à la tablette et à l’ordinateur",
          "Des écrans de direction et des rapports exportables",
        ],
      },
      builds: {
        heading: "Que pouvons-nous réaliser ?",
        items: [
          { title: "Opérations et coordination des équipes", text: "Des systèmes qui suivent tâches, équipes, stock et saisies terrain depuis un même centre." },
          { title: "Commandes et additions", text: "Des systèmes qui mènent une commande de la table à la cuisine et à la caisse en un seul circuit." },
          { title: "Réservations et demandes", text: "Des outils qui collectent réservations, rendez-vous et demandes de service en ligne." },
          { title: "Tableaux de bord et rapports", text: "Des panneaux qui réunissent clients, personnel et activité sur un écran conçu pour votre entreprise." },
        ],
      },
      work: {
        heading: "Réalisations",
        text: "Des systèmes conçus pour la restauration, l’hébergement, les cliniques vétérinaires et le suivi du travail.",
      },
      faq: {
        heading: "Questions fréquentes",
        items: [
          {
            question: "Travaillez-vous seulement avec certains secteurs ?",
            answer:
              "Nos exemples viennent de la restauration, de l’hôtellerie, des cliniques vétérinaires, de l’agriculture et des opérations terrain. Mais l’approche repose sur le déroulement du travail, pas sur le secteur ; ailleurs aussi, nous commençons par les mêmes questions.",
          },
          {
            question: "Que deviennent les données que nous tenons dans Excel ?",
            answer:
              "L’import depuis Excel peut être conçu comme un circuit où vous prévisualisez et validez les changements. La façon de procéder dépend de la structure de vos données.",
          },
          {
            question: "Comment le prix d’un système de gestion est-il établi ?",
            answer:
              "Les rôles, les écrans, les modules et les rapports définissent le périmètre. Nous travaillons sur devis : une fois le périmètre clair, nous préparons un devis.",
          },
        ],
      },
      cta: {
        title: "Qu’est-ce qui est le plus dispersé chez vous ?",
        text: "Racontez-nous comment se déroule votre journée et où elle bloque ; nous déciderons ensemble par où le système doit commencer.",
      },
    },
    mobile: {
      meta: {
        title: "Développement d’applications mobiles | MK Digital Systems",
        description:
          "Des applications mobiles agréables à utiliser sur téléphone, pour votre activité ou votre idée : de la prise de commande en mouvement au journal personnel.",
      },
      name: "Applications mobiles",
      title: "Applications mobiles : une solution pour le travail en mouvement",
      lead:
        "Certains travaux ne se font pas au bureau mais en déplacement. Nous concevons et développons des applications mobiles pour votre activité ou votre idée, agréables à utiliser sur téléphone.",
      need: "Notre équipe et nos clients sont toujours en mouvement.",
      approach:
        "Nous concevons en sachant que l’écran est petit et l’utilisateur pressé, et faisons de la tâche la plus fréquente le chemin le plus court.",
      needs: {
        heading: "Quels besoins vous amènent ?",
        items: [
          "Votre équipe est sur le terrain, en salle ou sur la route et doit travailler depuis le téléphone",
          "Vous voulez offrir à vos clients une expérience sur leur propre téléphone",
          "Vous avez une idée que vous imaginez comme une application",
          "Votre système web existant a besoin d’une partie utilisée sur mobile",
        ],
      },
      method: {
        heading: "Comment l’abordons-nous ?",
        text:
          "Sur mobile, chaque geste compte. Nous plaçons l’action la plus fréquente au centre, retirons les étapes inutiles et essayons l’application dans de vrais scénarios d’usage.",
        points: [
          "Réduire la tâche la plus fréquente à quelques gestes",
          "Des mises en page adaptées à une utilisation à une main",
          "Des surfaces mobiles pensées avec le système web si nécessaire",
          "Un essai en usage réel, en test fermé, avant la publication",
        ],
      },
      builds: {
        heading: "Que pouvons-nous réaliser ?",
        items: [
          { title: "Applications métier", text: "Des applications pour prendre des commandes, tenir des dossiers ou travailler sur le terrain depuis le téléphone." },
          { title: "Applications pour vos clients", text: "Des expériences que vos clients utilisent sur leur propre téléphone." },
          { title: "Applications personnelles et lifestyle", text: "Des applications simples pour tenir un journal, suivre et s’organiser." },
        ],
      },
      work: {
        heading: "Réalisations",
        text: "L’application mobile MK Adisyon en test fermé et l’application de journal Aura.",
      },
      faq: {
        heading: "Questions fréquentes",
        items: [
          {
            question: "Une application mobile ou un système web qui fonctionne bien sur mobile ?",
            answer:
              "Tous les besoins n’appellent pas une application ; un système web qui fonctionne bien sur mobile suffit souvent. Nous voyons ensemble, dès le premier échange, où une application ferait vraiment la différence.",
          },
          {
            question: "Peut-on essayer l’application avant sa publication ?",
            answer:
              "Oui. L’application peut être essayée en test fermé avec un petit groupe d’utilisateurs avant sa publication ; l’application mobile MK Adisyon en est à cette étape aujourd’hui.",
          },
          {
            question: "Comment le prix d’une application mobile est-il établi ?",
            answer:
              "Le nombre d’écrans, les rôles des utilisateurs et les systèmes connectés définissent le périmètre. Nous travaillons sur devis : une fois le périmètre clair, nous préparons un devis.",
          },
        ],
      },
      cta: {
        title: "Que doit simplifier votre application ?",
        text: "Dites-nous qui l’utilisera, où et pour quoi ; nous parlerons aussi franchement de la nécessité d’une application.",
      },
    },
  },
};
export default fr;
