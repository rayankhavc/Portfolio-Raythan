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
      'Un site qui représente votre activité, attire vos clients et convertit. Design sur-mesure, mobile-first, performances optimisées dès le premier jour.',
    benefits: [
      'Crédibilité immédiate auprès de vos prospects',
      'Vos clients peuvent vous trouver 24h/24, 7j/7',
      'Vous démarquer visuellement de vos concurrents locaux',
    ],
    sectors: ['PME', 'Commerce local', 'Artisan', 'Restaurant'],
    icon: 'Monitor',
  },
  {
    id: 'seo',
    title: 'SEO & Référencement',
    tagline: 'Remonter sur Google, durablement.',
    description:
      "Audit technique complet, optimisation on-page, structured data, Core Web Vitals. Votre site visible par ceux qui cherchent exactement ce que vous proposez.",
    benefits: [
      'Trafic organique qualifié sans payer par clic',
      'Visibilité locale sur Google Maps & Search',
      'Prospects déjà intéressés par votre offre',
    ],
    sectors: ['PME', 'Commerce local', 'E-commerce', 'Startup'],
    icon: 'TrendingUp',
  },
  {
    id: 'social',
    title: 'Réseaux sociaux',
    tagline: 'Stratégie de contenu & présence digitale.',
    description:
      'Création et gestion de votre présence sur Instagram, LinkedIn, TikTok. Contenu adapté à votre secteur, calendrier éditorial, visuels cohérents.',
    benefits: [
      'Notoriété et reconnaissance de votre marque',
      'Engagement et communauté fidèle autour de votre activité',
      'Génération de leads via les plateformes sociales',
    ],
    sectors: ['Restaurant', 'Salon', 'Artisan', 'E-commerce'],
    icon: 'Share2',
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
  {
    id: 'automation',
    title: 'Automatisation',
    tagline: 'Make.com, workflows, intégrations.',
    description:
      "Automatisation de vos processus métier : facturation, CRM, relances email. Moins de tâches répétitives, plus de temps pour ce qui compte.",
    benefits: [
      'Des heures récupérées chaque semaine',
      'Zéro erreur humaine sur les processus critiques',
      'Scalabilité sans embauche supplémentaire',
    ],
    sectors: ['PME', 'Startup', 'E-commerce', 'Artisan'],
    icon: 'Zap',
  },
  {
    id: 'ia',
    title: 'IA Métier',
    tagline: "Outils IA sur-mesure pour votre activité.",
    description:
      "Chatbots intelligents, assistants de contenu, analyse de données des solutions IA adaptées à vos besoins spécifiques.",
    benefits: [
      'Avantage concurrentiel durable',
      'Productivité multipliée sans augmenter les coûts',
      'Innovation perçue par vos clients et partenaires',
    ],
    sectors: ['Startup', 'PME', 'E-commerce', 'Tech & SaaS'],
    icon: 'Brain',
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
  type: 'Site vitrine' | 'Web App'
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
    year: '2025',
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
    liveUrl: 'https://chikano.vercel.app',
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
    year: '2025',
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
    slug: 'au-fournil',
    name: 'Au Fournil',
    kicker: 'Boulangerie artisanale · Saint-Herblain, deux adresses',
    tagline: 'Deux vitrines sœurs pour une même exigence artisanale.',
    summary:
      "Au Fournil du Sillon et Au Fournil du Sud : deux boulangeries, deux sites statiques déclinés d'une même base. Zéro JavaScript embarqué, chargement immédiat, SEO local par adresse.",
    context: [
      "Au Fournil, c'est deux adresses à Saint-Herblain : le Sillon, place des Thébaudières, et le Sud, boulevard Salvador Allende. Pâtisseries orientales maison, pains artisanaux, snacking du midi.",
      "Chaque adresse avait besoin de sa propre vitrine : ses horaires, son itinéraire, ses spécialités. Deux sites, mais une seule identité et un seul budget de maintenance.",
    ],
    approach: [
      "Une base Astro commune, déclinée par adresse : contenus, coordonnées et accents visuels propres à chaque boutique. Les deux sites sortent en HTML et CSS purs, sans un seul kilo-octet de JavaScript embarqué : le chargement est immédiat, même sur un téléphone en 4G devant la boutique.",
      "L'identité visuelle assume le registre artisanal premium : typographie Playfair Display, fond profond, motifs discrets. Chaque site cible ses propres requêtes locales, avec itinéraire Google Maps et téléphone en un tap.",
    ],
    type: 'Site vitrine',
    year: '2026',
    featured: false,
    stack: ['Astro', 'HTML', 'CSS'],
    missions: ['Direction artistique', 'Développement', 'SEO local', 'Déclinaison deux adresses'],
    stats: [
      { value: '2', label: 'adresses, deux sites dédiés' },
      { value: '0 kB', label: 'de JavaScript embarqué' },
      { value: '7j/7', label: 'horaires détaillés par boutique' },
    ],
    cover: { src: '/projects/fournil-sillon-hero.jpg', alt: 'Page d’accueil du site Au Fournil du Sillon : typographie Playfair Display sur fond vert profond' },
    shots: [
      { src: '/projects/fournil-sillon-specialites.jpg', alt: 'Section spécialités du site Au Fournil du Sillon', caption: 'Pâtisseries orientales, pains artisanaux, snacking : le savoir-faire mis en avant.' },
      { src: '/projects/fournil-sud-hero.jpg', alt: 'Page d’accueil du site Au Fournil du Sud', caption: 'La déclinaison Sud : même base, identité propre à l’adresse.' },
    ],
    mobileShot: { src: '/projects/fournil-sillon-mobile.jpg', alt: 'Version mobile du site Au Fournil du Sillon', caption: 'Pensé pour le client debout devant la vitrine, téléphone en main.' },
    liveUrl: 'https://fournil-du-sud.vercel.app',
    liveLabel: 'Voir Au Fournil du Sud en ligne',
  },
]

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
