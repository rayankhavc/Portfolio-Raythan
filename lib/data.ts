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

// ── PROJECTS ──────────────────────────────────────────────────────────────────
// Source de vérité unique pour tous les projets : grille /portfolio ET pages
// de détail /projets/[slug].
// Pour ajouter une image de couverture : screenshot 16/9 dans /public/projects/,
// puis renseigner `image`. Les captures de la galerie vont dans `images`.

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  valueAdded: string
  type: 'Web App' | 'Site Vitrine' | 'No-Code'
  status: 'Live' | 'En cours'
  featured: boolean
  tags: string[]
  details: string[]
  cta: string
  image?: string
  images?: string[]
  link?: string
}

export const PROJECTS: Project[] = [
  {
    slug: 'chikano',
    name: 'Chikano',
    tagline: 'Site vitrine pour un snack du littoral vendéen.',
    description:
      "Site vitrine one-page pour Chikano, restauration rapide à La Barre-de-Monts (Vendée). Structure claire, chargement rapide, et un référencement local pensé pour capter la clientèle touristique de la zone : Fromentine, Saint-Jean-de-Monts, Noirmoutier.",
    valueAdded:
      "Premier projet client de l'agence livré en production. SEO local orienté tourisme, informations pratiques accessibles en un scroll, site pensé pour transformer les visiteurs saisonniers en clients sur place.",
    type: 'Site Vitrine',
    status: 'Live',
    featured: true,
    tags: ['Next.js', 'Tailwind', 'SEO local'],
    details: [
      'One-page vitrine Next.js 14 + Tailwind',
      'SEO optimisé tourisme (Fromentine, Saint-Jean-de-Monts, Noirmoutier)',
      'Mobile-first, chargement rapide',
      'Informations pratiques accessibles en un scroll',
    ],
    cta: 'Voir le site',
    link: 'https://chikano.vercel.app',
  },
  {
    slug: 'zenhertz',
    name: 'ZenHertz',
    tagline: "Web App interactive d'analyse et de bien-être sonore.",
    description:
      "Outil d'analyse musicale basé sur l'IA. Le site traite les fréquences et le BPM des morceaux pour corréler les effets sur le bien-être et optimiser les activités quotidiennes (sommeil, sport, travail).",
    valueAdded:
      'Application déployée en production. Interface bilingue FR/EN, moteurs BPM & Hz intégrés, design system complet.',
    type: 'Web App',
    status: 'Live',
    featured: false,
    tags: ['Next.js', 'IA', 'Audio'],
    details: [
      'Analyse BPM & fréquences',
      'Effets neurologiques et physiologiques de la musique',
      'Support fichiers audio',
      'Interface bilingue FR / EN',
    ],
    cta: "Tester l'outil",
    image: '/projects/zenhertz.jpg',
    images: [
      '/assets/zenhertz logo.jpeg',
      '/assets/image zenhertz (1).jpeg',
      '/assets/image zenhertz (2).jpeg',
      '/assets/image zenhertz 1.jpeg',
      '/assets/image zenhertz 2 (1).jpeg',
    ],
    link: 'https://zen-hertz.vercel.app',
  },
  {
    slug: 'fundedcalc',
    name: 'FundedCalc',
    tagline: 'Calculateur de risque pour les Prop Firms.',
    description:
      "Outil de calcul stratégique pour les traders passant des challenges Prop Firm. L'outil analyse les paramètres utilisateur pour fournir des projections mathématiques précises de gestion du risque.",
    valueAdded:
      'Application déployée sur Vercel. Interface claire, calculs en temps réel, adoptée par des traders en phase de challenge.',
    type: 'Web App',
    status: 'Live',
    featured: false,
    tags: ['React', 'Finance', 'Tool'],
    details: [
      'Gestion du drawdown',
      'Chance de passer funded',
      'Interface rapide et sans inscription',
    ],
    cta: 'Tester le calculateur',
    image: '/projects/fundedcalc.jpg',
    images: [
      '/assets/fundedcalc logo.jpeg',
      '/assets/image funded calc.jpeg',
      '/assets/Image funded Calc (2).jpeg',
      '/assets/Image funded Calc (3).jpeg',
      '/assets/Image funded Calc 1.jpeg',
    ],
    link: 'https://fundedcalc.vercel.app',
  },
]

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
