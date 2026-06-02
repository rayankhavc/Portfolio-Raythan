export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  valueAdded: string
  type: "Web App" | "No-Code"
  badge?: string
  featured?: boolean
  image: string
  images?: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: "zenhertz",
    name: "ZenHertz",
    tagline: "Web App de bien-être sonore basée sur les fréquences Hz",
    description:
      "Application web permettant d'explorer les fréquences sonores thérapeutiques (432Hz, 528Hz…) associées à des états mentaux spécifiques. Conçue pour un public en quête d'optimisation cognitive et de bien-être, elle combine analyse audio, visualisations dynamiques et interface glassmorphism.",
    valueAdded:
      "Application déployée en production. Interface bilingue FR/EN, moteurs BPM & Hz intégrés, design system complet.",
    type: "Web App",
    badge: "Live",
    featured: true,
    image: "/assets/zenhertz logo.jpeg",
    images: [
      "/assets/zenhertz logo.jpeg",
    ],
    link: "https://rayankhavc.github.io/zenhertz/",
  },
  {
    slug: "fundedcalc",
    name: "FundedCalc",
    tagline: "Calculateur de prop trading pour traders financés",
    description:
      "Outil de calcul dédié aux traders passant des challenges en propfirm.",
    valueAdded:
      "Application déployée sur Vercel. Interface claire, calculs en temps réel, adoptée par des traders en phase de challenge.",
    type: "Web App",
    badge: "Live",
    featured: false,
    image: "/assets/fundedcalc logo.jpeg",
    images: [
      "/assets/fundedcalc logo.jpeg",
    ],
    link: "https://fundedcalc.vercel.app/",
  },
  {
    slug: "la-belle-broche",
    name: "La Belle Broche",
    tagline: "Site vitrine pour un traiteur haut de gamme",
    description:
      "Conception et développement d'un site vitrine no-code pour un kebab local. Intégration d'une galerie visuelle attrayante et présentation claire des informations pratiques.",
    valueAdded:
      "Création d'une présence web professionnelle pour renforcer la visibilité locale et centraliser les informations essentielles pour la clientèle de proximité.",
    type: "No-Code",
    image: "/assets/labellebroche.jpg",
    images: [
      "/assets/labellebroche.jpg",
    ],
  },
  {
    slug: "fournil-du-sillon",
    name: "Au Fournil du Sillon",
    tagline: "Boulangerie artisanale — identité web locale",
    description:
      "Création d'un site vitrine pour une boulangerie artisanale. Architecture simple et rapide, orientée SEO local avec intégration de Google Maps et affichage dynamique des horaires.",
    valueAdded:
      "Mise en place d'une structure optimisée pour le référencement local, conçue pour capter les recherches de proximité et garantir une navigation fluide sur mobile pour les clients de passage.",
    type: "No-Code",
    image: "/assets/fournildusillon.png",
    images: [
      "/assets/fournildusillon.png",
    ],
  },
  {
    slug: "avesta-kebap",
    name: "Avesta Kebap",
    tagline: "Restaurant — commande en ligne et menu digital",
    description:
      "Site vitrine et menu digital pour un restaurant kebab. Présentation structurée des formules et intégration d'un design mobile-first spécifiquement pensé pour la consultation sur smartphone.",
    valueAdded:
      "Modernisation de l'image de l'établissement et accessibilité immédiate du menu en ligne, facilitant le choix des clients avant leur passage physique ou leur commande.",
    type: "No-Code",
    image: "/assets/avestakebap.png",
    images: [
      "/assets/avestakebap.png",
    ],
  },
  {
    slug: "la-baraka",
    name: "La Baraka",
    tagline: "Restaurant — présence web et carte en ligne",
    description:
      "Conception d'un site vitrine pour un restaurant local avec une mise en avant stratégique de la carte, des horaires et de la localisation. Application d'un design chaleureux reflétant l'identité de l'établissement.",
    valueAdded:
      "Création d'une vitrine digitale accessible, permettant aux clients de consulter l'offre de restauration facilement depuis n'importe quel appareil et d'ancrer la présence en ligne du restaurant.",
    type: "No-Code",
    image: "/assets/labaraka.jpg",
    images: [
      "/assets/labaraka.jpg",
    ],
  },
  {
    slug: "jardins-du-coran",
    name: "Les Jardins du Coran",
    tagline: "École coranique — plateforme d'apprentissage en ligne",
    description:
      "Site vitrine informatif pour une structure d'enseignement. Architecture claire et contenu hiérarchisé pour présenter efficacement les différents services, niveaux et méthodes d'apprentissage.",
    valueAdded:
      "Digitalisation de la présentation de l'établissement, offrant une image institutionnelle sérieuse et un point d'accès centralisé pour découvrir les cursus proposés.",
    type: "No-Code",
    image: "/assets/jardinsducoran.png",
    images: [
      "/assets/jardinsducoran.png",
    ],
  },
]