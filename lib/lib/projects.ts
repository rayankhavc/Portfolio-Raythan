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
    image: "/assets/image zenhertz (1).jpeg",
    images: [
      "/assets/image zenhertz (1).jpeg",
      "/assets/image zenhertz (2).jpeg",
      "/assets/image zenhertz (4).jpeg",
      "/assets/image zenhertz 1.jpeg",
      "/assets/image zenhertz 2 (1).jpeg",
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
    image: "/assets/image funded calc.jpeg",
    images: [
      "/assets/image funded calc.jpeg",
      "/assets/Image funded Calc (2).jpeg",
      "/assets/Image funded Calc (3).jpeg",
      "/assets/Image funded Calc (4).jpeg",
      "/assets/Image funded Calc (5).jpeg",
      "/assets/Image funded Calc 1.jpeg",
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
    image: "/assets/Image belle broche (1).jpeg",
    images: [
      "/assets/Image belle broche (1).jpeg",
      "/assets/Image belle broche (2).jpeg",
      "/assets/Image belle broche (3).jpeg",
      "/assets/Image belle broche (4).jpeg",
      "/assets/Image belle broche (5).jpeg",
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
    image: "/assets/Image fournil du sillon (1).jpeg",
    images: [
      "/assets/Image fournil du sillon (1).jpeg",
      "/assets/Image fournil du sillon (2).jpeg",
      "/assets/Image fournil du sillon (3).jpeg",
      "/assets/image fournil du sillon (4).jpeg",
      "/assets/Image fournil du sillon (5).jpeg",
      "/assets/Image fournil du sillon (6).jpeg",
      "/assets/Image fournil du sillon (7).jpeg",
      "/assets/Image fournil du sillon (8).jpeg",
      "/assets/image fournil du sillon (9).jpeg",
      "/assets/Image fournil du sillon 1.jpeg",
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
    image: "/assets/Avesta Kebap (1).jpeg",
    images: [
      "/assets/Avesta Kebap (1).jpeg",
      "/assets/Avesta Kebap (2).jpeg",
      "/assets/Avesta Kebap (3).jpeg",
      "/assets/Avesta Kebap (4).jpeg",
      "/assets/Avesta Kebap (5).jpeg",
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
    image: "/assets/Image La Baraka (1).jpeg",
    images: [
      "/assets/Image La Baraka (1).jpeg",
      "/assets/Image La Baraka (2).jpeg",
      "/assets/Image La Baraka (3).jpeg",
      "/assets/Image La Baraka (4).jpeg",
      "/assets/Image La Baraka 1.jpeg",
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
    image: "/assets/image jardin du coran  (1).jpeg",
    images: [
      "/assets/image jardin du coran  (1).jpeg",
      "/assets/image jardin du coran  (2).jpeg",
      "/assets/image jardin du coran  (3).jpeg",
      "/assets/image jardin du coran  (4).jpeg",
      "/assets/image jardin du coran  (5).jpeg",
      "/assets/image jardin du coran  (6).jpeg",
    ],
  },
]