// ── SERVICES ──────────────────────────────────────────────────────────────────

export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  benefits: string[]
  sectors: string[]
  icon: string
}

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Création de site web',
    tagline: 'Vitrine, landing page, e-commerce.',
    description:
      'Un site qui représente votre activité, attire vos clients et convertit. Design sur-mesure, mobile-first, performances optimisées dès le premier jour. Le SEO technique (metadata, structure, indexation) est inclus par défaut sur chaque site livré.',
    benefits: [
      'Crédibilité immédiate auprès de vos prospects',
      'Vos clients peuvent vous trouver 24h/24, 7j/7',
      'Vous démarquer visuellement de vos concurrents locaux',
      'Trouvable sur Google dès la mise en ligne, SEO technique inclus',
    ],
    sectors: ['PME', 'Commerce local', 'Artisan', 'Restaurant'],
    icon: 'Monitor',
  },
  {
    id: 'automation-ia',
    title: 'Automatisation & IA',
    tagline: 'Workflows Make.com et outils IA sur-mesure.',
    description:
      'On connecte vos outils et on automatise vos processus avec Make.com : facturation, CRM, relances, synchronisations. Là-dessus, on branche des outils IA sur-mesure pour les tâches à forte valeur : tri, rédaction, réponses clients, analyse de données.',
    benefits: [
      'Des heures récupérées chaque semaine sur les tâches répétitives',
      'Des outils IA sur-mesure connectés à vos automatisations',
      'Zéro ressaisie et zéro erreur entre vos outils',
    ],
    sectors: ['PME', 'Startup', 'E-commerce', 'Tech & SaaS'],
    icon: 'Zap',
  },
  {
    id: 'ads',
    title: 'Publicité Google & Meta',
    tagline: 'Campagnes qui génèrent des résultats mesurables.',
    description:
      'Création et gestion de campagnes Google Ads et Meta Ads. Ciblage précis, A/B testing, optimisation continue du ROI.',
    benefits: [
      'ROI mesurable dès les premières semaines',
      'Ciblage ultra-précis de votre audience idéale',
      'Résultats rapides, scalables selon votre budget',
    ],
    sectors: ['E-commerce', 'PME', 'Startup', 'Commerce local'],
    icon: 'BarChart3',
  },
]

// ── ÉTUDES DE CAS ─────────────────────────────────────────────────────────────
// Portfolio public : /portfolio (index) + /projets/[slug] (études de cas).
// Toutes les captures sont réelles, prises sur les projets servis en local
// (voir public/projects/). Les stats sont factuelles et vérifiables dans le
// code des projets, jamais des métriques inventées.

export interface CaseStudyShot {
  src: string
  alt: string
  caption?: string
}

export interface CaseStudyStat {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  name: string
  /** Secteur + localisation, affiché en kicker. */
  kicker: string
  /** Une phrase d'accroche, affichée en grand sur l'étude de cas. */
  tagline: string
  /** Résumé court pour la carte de l'index. */
  summary: string
  /** « Le point de départ » : le besoin, le contexte. */
  context: string[]
  /** « Ce qu'on a construit » : la réponse apportée. */
  approach: string[]
  type: 'Site vitrine' | 'Web App' | 'Maquette'
  year: string
  featured: boolean
  stack: string[]
  missions: string[]
  stats: CaseStudyStat[]
  cover: CaseStudyShot
  shots: CaseStudyShot[]
  mobileShot?: CaseStudyShot
  liveUrl?: string
  liveLabel?: string
  /** Démo interactive embarquée dans l'étude de cas. */
  demo?: 'fundedcalc' | 'blackjack'
  demoTitle?: string
  demoNote?: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'chikano',
    name: 'Chikano',
    kicker: 'Restauration rapide · La Barre-de-Monts, Vendée',
    tagline: 'Un site vitrine qui capte la clientèle touristique du littoral.',
    summary:
      "Kebab, burger, tacos : un one-page qui transforme les vacanciers de passage en clients sur place. SEO local orienté tourisme, appel en un tap, carte lisible en un scroll.",
    context: [
      "Chikano est un snack de La Barre-de-Monts, à deux pas de Fromentine et de l'embarcadère pour l'île d'Yeu. Sa clientèle change chaque semaine : des vacanciers qui cherchent où manger, maintenant, sur leur téléphone.",
      "Le besoin était simple et exigeant à la fois : être trouvé sur Google avant les concurrents de la zone, montrer la carte sans friction, et déclencher l'appel ou la visite immédiatement.",
    ],
    approach: [
      "Un one-page Next.js pensé mobile-first, où tout est accessible en un scroll : la carte complète, les avis Google (4,9/5 affiché en circuit court), les horaires et l'itinéraire. Le bouton d'appel reste visible en permanence.",
      "Le référencement local cible les requêtes réelles de la zone : Fromentine, Saint-Jean-de-Monts, Noirmoutier. Chargement rapide, structure sémantique propre, données locales balisées pour Google.",
    ],
    type: 'Site vitrine',
    year: '2026',
    featured: true,
    stack: ['Next.js 14', 'Tailwind CSS', 'Framer Motion'],
    missions: ['Direction artistique', 'Développement', 'SEO local', 'Mise en ligne'],
    stats: [
      { value: '4,9/5', label: 'avis Google intégrés au site' },
      { value: '1 scroll', label: 'pour toute l’info pratique' },
      { value: '7j/7', label: 'horaires et appel accessibles' },
    ],
    cover: { src: '/projects/chikano-hero.jpg', alt: 'Page d’accueil du site Chikano : identité noire et or, note Google 4,9/5, appel en un clic' },
    shots: [
      { src: '/projects/chikano-carte.jpg', alt: 'La carte du snack Chikano présentée en ligne', caption: 'La carte complète, lisible sans zoomer.' },
      { src: '/projects/chikano-horaires.jpg', alt: 'Section horaires du site Chikano', caption: 'Les horaires en évidence, zéro ambiguïté.' },
    ],
    mobileShot: { src: '/projects/chikano-mobile.jpg', alt: 'Version mobile du site Chikano', caption: 'Mobile-first : la cible principale, des vacanciers sur leur téléphone.' },
    liveUrl: 'https://chikano.fr',
    liveLabel: 'Voir le site en ligne',
  },
  {
    slug: 'anas-pizza',
    name: 'Anas Pizza Original',
    kicker: 'Pizzeria · Nantes centre',
    tagline: "Une vitrine qui prend la commande, encaisse, et envoie le ticket en cuisine.",
    summary:
      "58 plats tenus par une seule source, un paiement qui tombe sur le compte SumUp déjà utilisé au comptoir, un écran cuisine, et un espace de gestion où le gérant change ses prix sans nous appeler.",
    context: [
      "Anas Pizza Original est une pizzeria du centre de Nantes, 10 allée Duguay Trouin, ouverte 7j/7 de 11h30 à 2h du matin. Sur place, à emporter, en livraison.",
      "Les commandes se prenaient au téléphone, service après service. Il fallait une carte à jour consultable en ligne, une commande payée d'avance, et surtout un site que le restaurant pilote lui-même : retirer un plat épuisé un vendredi soir ne doit pas passer par un développeur.",
    ],
    approach: [
      "Le site est en HTML, CSS et JavaScript natifs. Pas de framework, pas de CDN, pas de tracker : polices auto-hébergées, photos converties en WebP à la construction, illustration vectorielle de repli pour tout plat sans photo. La carte de l'accueil est la seule source de vérité, elle alimente la page de commande, le calcul serveur et le tableau des allergènes.",
      "La commande tient en quatre étapes, et le navigateur n'envoie jamais un prix : il envoie des identifiants de plats, de tailles et de suppléments. Le serveur relit chaque tarif et recalcule le total avant d'ouvrir le paiement, ce que vérifient les tests. Le paiement passe par le compte SumUp du restaurant, celui de la caisse : une seule réconciliation bancaire en fin de mois.",
      "Deux écrans complètent le dispositif. La cuisine relit les commandes payées, se rafraîchit toutes les quinze secondes et sonne à chaque nouvelle commande, sans aucune base de données à sauvegarder. L'espace de gestion permet de suspendre le service, de retirer un plat, de changer un prix par famille ou de remplacer une photo, avec retour à la carte d'origine en un clic.",
    ],
    type: 'Site vitrine',
    year: '2026',
    featured: false,
    stack: ['HTML', 'CSS', 'JavaScript', 'Fonctions serveur'],
    missions: ['Direction artistique', 'Développement', 'Commande en ligne', 'SEO local', 'Mise en ligne'],
    stats: [
      { value: '58', label: 'plats tenus par une seule source' },
      { value: '0', label: 'framework, 0 dépendance au chargement' },
      { value: '4 étapes', label: 'de la carte au paiement' },
      { value: '15 s', label: 'de rafraîchissement en cuisine' },
    ],
    cover: {
      src: '/projects/anas-hero.jpg',
      alt: "Page d'accueil du site Anas Pizza Original : identité noire et orange, téléphone et bouton Commander en évidence",
    },
    shots: [
      {
        src: '/projects/anas-carte.jpg',
        alt: 'La carte en ligne d\'Anas Pizza Original, filtrable par base et par ingrédient',
        caption: 'La carte complète, filtrable par base, avec recherche par ingrédient.',
      },
      {
        src: '/projects/anas-commander.jpg',
        alt: 'Page de commande en ligne : rubriques, prix par taille, plats illustrés',
        caption: "La commande en ligne : le catalogue vient de la carte, les prix sont recalculés côté serveur.",
      },
    ],
    mobileShot: {
      src: '/projects/anas-mobile.jpg',
      alt: 'Version mobile du site Anas Pizza Original',
      caption: 'Barre d\'action fixe sur mobile : appeler, commander, itinéraire.',
    },
    liveUrl: 'https://anaspizzaoriginal.fr',
    liveLabel: 'Voir le site en ligne',
  },
  {
    slug: 'mk-boulangeries',
    name: 'MK Boulangeries',
    kicker: 'Boulangerie artisanale · Nantes et Saint-Herblain',
    tagline: 'Trois boulangeries sur un seul domaine, sans se voler la vedette sur Google.',
    summary:
      "MK Boulangerie & Pâtisserie, Au Fournil du Sillon et Au Fournil du Sud : un site unique, une page autonome par boutique, badge ouvert ou fermé calculé en direct et commande écrite en un tap.",
    context: [
      "Les trois boulangeries avaient chacune leur page isolée, sur deux technologies différentes et sans lien entre elles. Chaque site repartait de zéro côté référencement, et corriger un horaire demandait de toucher trois dépôts.",
      "Le regroupement devait tenir une contrainte : une adresse ne doit pas prendre la visibilité des deux autres. Un client qui cherche une boulangerie aux Dervallières et un client qui en cherche une à Saint-Herblain ne doivent pas tomber sur la même page.",
    ],
    approach: [
      "Un seul site Astro, généré en statique : une page d'accueil qui oriente vers la bonne boutique, puis une page complète par boulangerie, avec son adresse, ses horaires, son téléphone, son quartier et ses données structurées Bakery. Les trois pages ressortent séparément sur Google tout en partageant l'autorité d'un seul domaine.",
      "Tout descend d'un fichier de données unique : pages, plans, données structurées, pied de page et badge d'ouverture. Le badge se calcule à l'heure de Paris quelle que soit la zone du visiteur, et reste masqué tant que le JavaScript n'a pas répondu, pour ne jamais annoncer « ouvert » à tort.",
      "Sur mobile, la barre d'appel reste à portée de pouce : sur un site de boulangerie, l'action utile est un appel ou un itinéraire, jamais un formulaire. Les commandes écrites partent en WhatsApp ou en SMS avec un message pré-rempli, et les clics appel, itinéraire et message sont comptés pour mesurer ce que le site rapporte vraiment.",
    ],
    type: 'Site vitrine',
    year: '2026',
    featured: false,
    stack: ['Astro', 'TypeScript', 'CSS'],
    missions: ['Direction artistique', 'Développement', 'SEO local', 'Regroupement de trois sites'],
    stats: [
      { value: '3', label: 'boutiques, une page autonome chacune' },
      { value: '1', label: 'fichier de données pour tout le site' },
      { value: '7', label: 'pages générées en statique' },
      { value: '3', label: 'actions mesurées : appel, itinéraire, message' },
    ],
    cover: {
      src: '/projects/mk-accueil.jpg',
      alt: "Page d'accueil MK Boulangeries : « Trois boulangeries, un même savoir-faire », photo de pétrissage en fond",
    },
    shots: [
      {
        src: '/projects/mk-boutique.jpg',
        alt: 'Page de la boulangerie MK à Nantes : adresse, badge fermé aujourd\'hui, appel et itinéraire',
        caption: 'Une page complète par boutique : adresse, horaires, quartier, appel en un tap.',
      },
      {
        src: '/projects/mk-produits.jpg',
        alt: 'Catalogue produits du site MK Boulangeries',
        caption: 'Le catalogue produits, commun aux trois maisons.',
      },
      {
        src: '/projects/mk-avant-fournil-sillon.jpg',
        alt: 'Ancien site isolé du Fournil du Sillon, avant le regroupement',
        caption: 'Avant : chaque boutique avait sa vitrine isolée, sur son propre domaine.',
      },
    ],
    mobileShot: {
      src: '/projects/mk-mobile.jpg',
      alt: 'Version mobile de la page Au Fournil du Sud, avec barre d\'appel collante',
      caption: "La barre d'appel suit le pouce, du haut au bas de la page.",
    },
    liveUrl: 'https://maisonkhalifa.vercel.app',
    liveLabel: 'Voir le site en ligne',
  },
  {
    slug: 'fundedcalc',
    name: 'FundedCalc',
    kicker: 'Trading · Outil en ligne, sans inscription',
    tagline: 'Un moteur Monte Carlo dans le navigateur pour préparer un challenge Prop Firm.',
    summary:
      "5 000 simulations calculées en direct pour estimer une probabilité de réussite avant de payer un challenge. 10 prop firms préconfigurées, graphiques de courbes d'équité, recommandations générées.",
    context: [
      "Les challenges Prop Firm sont payants : le trader avance des frais pour tenter d'obtenir un compte financé, avec des règles strictes de drawdown et d'objectif de profit. Beaucoup les tentent sans jamais avoir chiffré leur probabilité réelle de réussite.",
      "Il fallait un outil honnête et immédiat : pas d'inscription, pas de promesse, des mathématiques. L'utilisateur entre sa stratégie, l'outil répond en probabilités.",
    ],
    approach: [
      "Le cœur de l'outil est un moteur Monte Carlo qui rejoue le challenge 5 000 fois, trade par trade, dans le navigateur. Le calcul complet prend moins de 100 millisecondes, sans serveur : rien ne quitte la machine de l'utilisateur.",
      "Autour du moteur : 10 prop firms préconfigurées d'après leurs règles officielles, des phases entièrement éditables, un graphique SVG des courbes d'équité simulées, une analyse générée qui pointe les faiblesses de la stratégie, et une carte de résultats partageable générée en Canvas. Interface bilingue FR/EN, identité rétro-terminal assumée.",
    ],
    type: 'Web App',
    year: '2026',
    featured: false,
    stack: ['Astro', 'React', 'Canvas API'],
    missions: ['Produit', 'Design d’interface', 'Développement', 'Moteur de calcul'],
    stats: [
      { value: '5 000', label: 'simulations par analyse' },
      { value: '10', label: 'prop firms préconfigurées' },
      { value: '<100 ms', label: 'de calcul, sans serveur' },
      { value: 'FR/EN', label: 'interface bilingue' },
    ],
    cover: { src: '/projects/fundedcalc-results.jpg', alt: 'FundedCalc affichant 98% de probabilité de succès après 5 000 simulations Monte Carlo' },
    shots: [
      { src: '/projects/fundedcalc-config.jpg', alt: 'Configuration d’un challenge dans FundedCalc : prop firm, phases, stratégie', caption: 'Chaque paramètre du challenge est éditable.' },
    ],
    liveUrl: 'https://fundedcalc.vercel.app',
    liveLabel: 'Tester l’outil complet',
    demo: 'fundedcalc',
    demoTitle: 'Lancez une vraie simulation, ici même',
    demoNote:
      'Cette démo embarque le même moteur Monte Carlo que l’outil en production : 5 000 simulations réelles calculées dans votre navigateur au clic.',
  },
  {
    slug: 'bj-coach-pro',
    name: 'BJ Coach Pro',
    kicker: 'Pédagogie · Entraîneur de stratégie au blackjack',
    tagline: 'Un coach qui note chaque décision contre la stratégie de base, et explique pourquoi.',
    summary:
      "Table d'entraînement, drill éclair, tableau interactif et comptage Hi-Lo : un outil pédagogique complet, sans argent réel, avec un moteur de règles testé unitairement.",
    context: [
      "La stratégie de base au blackjack est un tableau de décisions mathématiquement optimales. L'apprendre dans un livre est aride ; l'apprendre au casino coûte cher. BJ Coach Pro est un outil d'entraînement, pas un jeu d'argent : aucune mise réelle, aucun compte.",
      "L'objectif : que chaque décision du joueur soit évaluée contre la décision optimale, immédiatement, avec une explication claire de la logique.",
    ],
    approach: [
      "Le moteur de règles est un module pur, couvert par des tests unitaires : 6 jeux, croupier reste sur 17 souple, double après séparation, blackjack payé 3:2. Le tableau intégré et le coaching correspondent exactement à ces règles.",
      "Quatre modes d'entraînement : une vraie table avec mise, assurance et débrief de main ; un drill éclair pondéré vers vos erreurs récurrentes ; le tableau complet avec quiz de cellules ; et un sabot multi-jeux honnête pour le comptage Hi-Lo, avec pénétration réglable et quiz de comptage caché. Bilingue FR/EN, reduced-motion respecté.",
    ],
    type: 'Web App',
    year: '2026',
    featured: false,
    stack: ['React', 'TypeScript', 'Zustand', 'Vitest'],
    missions: ['Produit', 'Développement', 'Moteur de jeu', 'Tests unitaires'],
    stats: [
      { value: '6 jeux', label: 'de règles simulées fidèlement' },
      { value: '4 modes', label: 'd’entraînement complémentaires' },
      { value: '100%', label: 'des décisions notées et expliquées' },
      { value: '0 €', label: 'd’argent réel, outil pédagogique' },
    ],
    cover: { src: '/projects/bjcoach-play.jpg', alt: 'Table d’entraînement BJ Coach Pro : main de 20 contre un 5 du croupier, actions Tirer, Rester, Doubler, Séparer' },
    shots: [
      { src: '/projects/bjcoach-home.jpg', alt: 'Page d’accueil de BJ Coach Pro', caption: 'L’entrée vers les quatre modes d’entraînement.' },
      { src: '/projects/bjcoach-strategy.jpg', alt: 'Tableau de stratégie de base interactif de BJ Coach Pro', caption: 'Le tableau complet, avec quiz de cellules intégré.' },
    ],
    demo: 'blackjack',
    demoTitle: 'Testez votre stratégie de base, main par main',
    demoNote:
      'Cette démo utilise le vrai moteur de l’application : mêmes tableaux de stratégie, mêmes règles (6 jeux, S17, DAS). Chaque réponse est notée et expliquée.',
  },
  {
    slug: 'science-based-quiz',
    name: 'Science Based Quiz',
    kicker: 'Sport et nutrition · Quiz multijoueur',
    tagline: 'Chaque réponse renvoie à la publication qui la fonde.',
    summary:
      "85 questions de culture scientifique sur l'entraînement, chacune sourcée sur PubMed. Quatre modes de jeu, dont un 1v1 en ligne classé au ELO et un mode party jusqu'à quatre joueurs.",
    context: [
      "La musculation est un terrain à mythes : chacun répète ce qu'il a entendu, rarement ce qui a été mesuré. Le principe du quiz tient en une phrase, tester ce qu'on croit savoir et donner la source à chaque réponse.",
      "Le produit devait rester sans inscription ni compte à créer, tout en gardant un vrai enjeu : jouer contre quelqu'un, et voir son niveau bouger.",
    ],
    approach: [
      "85 questions réparties en trois niveaux, facile, moyen et hardcore, et en quatre thèmes : biomécanique, hypertrophie, nutrition, physiologie. Chaque question porte son explication et le lien direct vers l'étude PubMed correspondante.",
      "Quatre façons de jouer : solo, 1v1 contre un bot, 1v1 en ligne contre un vrai joueur, et un mode party de deux à quatre joueurs par code de salon. Les trois bots sont calibrés et annoncés comme tels, de 50 % à 95 % de bonnes réponses et de 1 à 8 secondes de réflexion. Longueur de partie et minuteur se règlent avant de lancer.",
      "Le temps réel passe par Supabase Realtime : présence des joueurs, diffusion des réponses, salons à quatre lettres. Les matchs classés alimentent un classement ELO mis à jour en direct, sur authentification anonyme, avec des règles d'accès qui empêchent d'écrire le score d'un autre joueur. Interface bilingue français et anglais.",
    ],
    type: 'Web App',
    year: '2026',
    featured: false,
    stack: ['React', 'TanStack Start', 'Supabase Realtime', 'TypeScript'],
    missions: ['Produit', 'Développement', 'Temps réel', 'Classement ELO'],
    stats: [
      { value: '85', label: 'questions, chacune sourcée PubMed' },
      { value: '4', label: 'modes de jeu, dont deux en ligne' },
      { value: 'ELO', label: 'classement live sur les matchs classés' },
      { value: 'FR/EN', label: 'interface bilingue' },
    ],
    cover: {
      src: '/projects/quiz-arene.jpg',
      alt: 'Arène 1v1 de Science Based Quiz : question de physiologie, bonne et mauvaise réponse mises en évidence',
    },
    shots: [
      {
        src: '/projects/quiz-accueil.jpg',
        alt: "Page d'accueil de Science Based Quiz : les quatre modes de jeu",
        caption: "Les quatre modes, à l'entrée du jeu.",
      },
      {
        src: '/projects/quiz-adversaires.jpg',
        alt: 'Choix du bot adverse : Novice, Researcher et Dr. Hypertrophy, avec précision et temps de réponse',
        caption: 'Trois bots calibrés, précision et temps de réponse annoncés.',
      },
      {
        src: '/projects/quiz-categories.jpg',
        alt: 'Écran de configuration : catégorie, nombre de questions, temps par question',
        caption: 'Catégorie, longueur et minuteur se règlent avant la partie.',
      },
    ],
    mobileShot: {
      src: '/projects/quiz-mobile.jpg',
      alt: 'Version mobile de Science Based Quiz',
      caption: 'La partie se joue aussi bien au téléphone, entre deux séries.',
    },
    liveUrl: 'https://sciencebasedquiz.vercel.app',
    liveLabel: 'Jouer en ligne',
  },
  {
    slug: 'zenhertz',
    name: 'ZenHertz',
    kicker: 'Bien-être · Analyse audio dans le navigateur',
    tagline: 'Le tempo et les fréquences d’un morceau, traduits en effets sur votre état.',
    summary:
      "L'utilisateur dépose un morceau, ZenHertz détecte BPM et fréquences dominantes puis en déduit un profil neuro-acoustique : ondes cérébrales, tableau hormonal estimé, effets ressentis.",
    context: [
      "La musique module l'état physiologique : un tempo soutenu prépare à l'effort, certaines plages de fréquences favorisent la détente. ZenHertz rend cette lecture accessible : analyser n'importe quel morceau et comprendre ce qu'il déclenche.",
      "Contrainte forte dès le départ : l'analyse devait rester entièrement locale. Aucun fichier envoyé sur un serveur, aucune inscription.",
    ],
    approach: [
      "Toute l'analyse tourne dans le navigateur via la Web Audio API : détection du BPM par autocorrélation multi-bande (kick et snare), fréquences dominantes par détection de pics spectraux (FFT). Le morceau ne quitte jamais la machine de l'utilisateur.",
      "Les résultats sont traduits en profil lisible : position sur les cinq bandes d'ondes cérébrales (Delta à Gamma), tableau hormonal estimé, effets ressentis et conseils d'usage (sommeil, sport, concentration). Le tout avec un cadrage honnête : des estimations à visée informative, pas un diagnostic. Interface bilingue FR/EN, thème clair et sombre.",
    ],
    type: 'Web App',
    year: '2026',
    featured: false,
    stack: ['JavaScript', 'Web Audio API', 'FFT'],
    missions: ['Produit', 'Design d’interface', 'Développement', 'Moteur d’analyse'],
    stats: [
      { value: '100%', label: 'de l’analyse en local, zéro upload' },
      { value: '5', label: 'bandes d’ondes cérébrales profilées' },
      { value: '6', label: 'hormones estimées par morceau' },
      { value: 'FR/EN', label: 'interface bilingue' },
    ],
    cover: { src: '/projects/zenhertz-analyse.jpg', alt: 'Analyse ZenHertz d’un morceau : 120 BPM, fréquences dominantes, profil neuro-acoustique et tableau hormonal' },
    shots: [
      { src: '/projects/zenhertz-landing.jpg', alt: 'Page d’accueil de ZenHertz', caption: 'L’entrée de l’outil : analyser sa musique, gratuitement, sans inscription.' },
      { src: '/projects/zenhertz-upload.jpg', alt: 'Écran d’analyse d’un fichier audio dans ZenHertz', caption: 'Dépôt du fichier : l’analyse démarre immédiatement, en local.' },
    ],
    liveUrl: 'https://zen-hertz.vercel.app',
    liveLabel: 'Tester l’outil en ligne',
  },
  {
    slug: 'alex-moret',
    name: 'Alex Moret',
    kicker: 'Menuisier ébéniste · Saint-Sébastien-sur-Loire',
    tagline: "Une maquette envoyée sans avoir été demandée, pour montrer plutôt que promettre.",
    summary:
      "Landing page de démonstration pour un atelier d'ébénisterie nantais. Une seule page, aucune dépendance, volontairement en noindex : ce n'est pas un site livré, c'est une proposition.",
    context: [
      "L'atelier Alex Moret montre son travail sur Instagram, pas sur un site. Plutôt qu'un mail de prospection de plus, la page a été construite puis envoyée telle quelle.",
      "Le statut est assumé et écrit partout : le formulaire n'envoie rien et le dit à l'écran, la page est en noindex par balise et par en-tête HTTP pour ne jamais concurrencer son futur site, et les visuels viennent de son compte Instagram public, donc limités à 640 pixels, à remplacer par les originaux avant toute mise en ligne réelle.",
    ],
    approach: [
      "Une page unique, un seul fichier HTML, styles inline, aucune dépendance en dehors des polices. Registre haut de gamme : Cormorant Garamond en titres, fond bleu nuit, or discret, photos plein cadre pour laisser parler le bois.",
      "Le parcours va droit au but : les réalisations, ce qui sépare une pièce sur mesure d'un meuble de série, puis la prise de contact. C'est la démonstration d'un positionnement, pas un catalogue.",
    ],
    type: 'Maquette',
    year: '2026',
    featured: false,
    stack: ['HTML', 'CSS'],
    missions: ['Direction artistique', 'Développement', 'Proposition'],
    stats: [
      { value: '1', label: 'page, un seul fichier' },
      { value: '0', label: 'dépendance, hors polices' },
      { value: 'noindex', label: 'assumé, pour ne pas gêner son futur site' },
    ],
    cover: {
      src: '/projects/alexmoret-hero.jpg',
      alt: "Maquette Alex Moret : titre « L'unique, façonné à la main » sur fond bleu nuit, photo de mobilier en résine",
    },
    shots: [
      {
        src: '/projects/alexmoret-realisations.jpg',
        alt: 'Section réalisations de la maquette Alex Moret',
        caption: 'Les réalisations, en pleine largeur : le travail parle avant le texte.',
      },
    ],
    mobileShot: {
      src: '/projects/alexmoret-mobile.jpg',
      alt: 'Version mobile de la maquette Alex Moret',
      caption: 'Mobile : la cible réelle, un prospect qui vient depuis Instagram.',
    },
    liveUrl: 'https://maquette-alex-moret.vercel.app',
    liveLabel: 'Voir la maquette',
  },]

export const FEATURED_CASE_STUDY = CASE_STUDIES.find((c) => c.featured) ?? CASE_STUDIES[0]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug)
}

// ── SECTORS MARQUEE ───────────────────────────────────────────────────────────

export const SECTORS = [
  'Restaurant', 'Artisan', 'PME', 'Startup',
  'E-commerce', 'Tech & SaaS', 'Commerce local',
]

// ── WHY RAYTHAN ───────────────────────────────────────────────────────────────

export const WHY_RAYTHAN = [
  {
    icon: 'Rocket',
    title: 'Livraison rapide',
    description:
      'Sites livrés en 5 à 15 jours. Workflow IA-augmenté qui compresse les délais sans rogner sur la qualité.',
  },
  {
    icon: 'Code2',
    title: 'Code, pas de template',
    description:
      'Chaque projet est développé sur-mesure. Next.js, Astro, TypeScript... des bases solides pour durer.',
  },
  {
    icon: 'Target',
    title: 'Orienté résultats',
    description:
      "Un site beau qui ne convertit pas, ça ne nous intéresse pas. Chaque décision de design sert votre objectif.",
  },
]
