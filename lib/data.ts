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
// Pour ajouter une image :
// 1. Fais un screenshot de ton projet (plein écran, format 16/9)
// 2. Renomme-le exactement comme indiqué ci-dessous
// 3. Glisse-le dans le dossier /public/projects/
// C'est tout — le site l'affiche automatiquement.

export interface Project {
  id: string
  slug: string
  title: string
  type: 'Web App' | 'No-Code'
  description: string
  status: 'Live' | 'En cours'
  image?: string
  category: string
  tags: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'zenhertz',
    slug: 'zenhertz',
    title: 'ZenHertz',
    type: 'Web App',
    status: 'Live',
    description: "Outil d'analyse musicale IA fréquences, BPM et effets sur le bien-être.",
    image: '/projects/zenhertz.jpg', // → screenshot à mettre dans public/projects/zenhertz.jpg
    category: 'Web App',
    tags: ['Next.js', 'IA', 'Audio'],
  },
  {
    id: 'fundedcalc',
    slug: 'fundedcalc',
    title: 'FundedCalc',
    type: 'Web App',
    status: 'Live',
    description: 'Calculateur de risque pour traders en Prop Firms.',
    image: '/projects/fundedcalc.jpg', // → screenshot à mettre dans public/projects/fundedcalc.jpg
    category: 'Web App',
    tags: ['React', 'Finance', 'Tool'],
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
