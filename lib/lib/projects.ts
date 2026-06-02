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
      "Web App interactive d'analyse et de bien-être sonore.",
    valueAdded:
      "Application déployée en production. Interface bilingue FR/EN, moteurs BPM & Hz intégrés, design system complet.",
    type: "Web App",
    badge: "Live",
    featured: true,
    image: "/assets/zenhertz logo.jpeg",
    images: [
      "/assets/zenhertz logo.jpeg",
      "/assets/image zenhertz (1).jpeg",
      "/assets/image zenhertz (2).jpeg",
      "/assets/image zenhertz 1.jpeg",
      "/assets/image zenhertz 2 (1).jpeg",
    ],
    link: "https://rayankhavc.github.io/zenhertz/",
  },
  {
    slug: "fundedcalc",
    name: "FundedCalc",
    tagline: "Calculateur de risk management optimisé pour les challenges Prop Firm.",
    description:
      "Calculateur de risque pour les Prop Firms.",
    valueAdded:
      "Application déployée sur Vercel. Interface claire, calculs en temps réel, adoptée par des traders en phase de challenge.",
    type: "Web App",
    badge: "Live",
    featured: false,
    image: "/assets/fundedcalc logo.jpeg",
    images: [
      "/assets/fundedcalc logo.jpeg",
      "/assets/image funded calc.jpeg",
      "/assets/Image funded Calc (2).jpeg",
      "/assets/Image funded Calc (3).jpeg",
      "/assets/Image funded Calc 1.jpeg",
    ],
    link: "https://fundedcalc.vercel.app/",
  },
  {
    slug: "la-belle-broche",
    name: "La Belle Broche",
    tagline: "Site vitrine pour un traiteur haut de gamme",
    description:
      "Site vitrine pour un restaurant kebab local.",
    valueAdded:
      "Création d'une présence web professionnelle pour renforcer la visibilité locale et centraliser les informations essentielles pour la clientèle de proximité.",
    type: "No-Code",
    image: "/assets/labellebroche.jpg",
    images: [
      "/assets/labellebroche.jpg",
      "/assets/Image belle broche (2).jpeg",
      "/assets/Image belle broche (3).jpeg",
      "/assets/Image belle broche (4).jpeg",
      "/assets/Image belle broche (5).jpeg",
    ],
  },
  {
    slug: "fournil-du-sillon",
    name: "Au Fournil du Sillon",
    tagline: "Boulangerie artisanale, identité web locale",
    description:
      "Site vitrine pour une boulangerie artisanale.",
    valueAdded:
      "Mise en place d'une structure optimisée pour le référencement local, conçue pour capter les recherches de proximité et garantir une navigation fluide sur mobile pour les clients de passage.",
    type: "No-Code",
    image: "/assets/fournildusillon.png",
    images: [
      "/assets/fournildusillon.png",
      "/assets/Image fournil du sillon (1).jpeg",
      "/assets/Image fournil du sillon (2).jpeg",
      "/assets/image fournil du sillon (4).jpeg",
      "/assets/image fournil du sillon (9).jpeg",
    ],
  },
  {
    slug: "avesta-kebap",
    name: "Avesta Kebap",
    tagline: "Restaurant, commande en ligne et menu digital",
    description:
      "Site vitrine présentant l'établissement et son menu.",
    valueAdded:
      "Modernisation de l'image de l'établissement et accessibilité immédiate du menu en ligne, facilitant le choix des clients avant leur passage physique ou leur commande.",
    type: "No-Code",
    image: "/assets/avestakebap.png",
    images: [
      "/assets/avestakebap.png",
      "/assets/Avesta Kebap (1).jpeg",
      "/assets/Avesta Kebap (2).jpeg",
      "/assets/Avesta Kebap (3).jpeg",
      "/assets/Avesta Kebap (4).jpeg",
    ],
  },
  {
    slug: "la-baraka",
    name: "La Baraka",
    tagline: "Restaurant, présence web et carte en ligne",
    description:
      "Conception d'un site vitrine pour un restaurant local avec une mise en avant stratégique de la carte, des horaires et de la localisation. Application d'un design chaleureux reflétant l'identité de l'établissement.",
    valueAdded:
      "Création d'une vitrine digitale accessible, permettant aux clients de consulter l'offre de restauration facilement depuis n'importe quel appareil et d'ancrer la présence en ligne du restaurant.",
    type: "No-Code",
    image: "/assets/labaraka.jpg",
    images: [
      "/assets/labaraka.jpg",
      "/assets/Image La Baraka 1.jpeg",
      "/assets/Image La Baraka (2).jpeg",
      "/assets/Image La Baraka (3).jpeg",
      "/assets/Image La Baraka (4).jpeg",
    ],
  },
  {
    slug: "jardins-du-coran",
    name: "Les Jardins du Coran",
    tagline: "École coranique, plateforme d'apprentissage en ligne",
    description:
      "Site vitrine de présentation pour un institut coranique.",
    valueAdded:
      "Digitalisation de la présentation de l'établissement, offrant une image institutionnelle sérieuse et un point d'accès centralisé pour découvrir les cursus proposés.",
    type: "No-Code",
    image: "/assets/jardinsducoran.png",
    images: [
      "/assets/jardinsducoran.png",
      "/assets/image jardin du coran  (1).jpeg",
      "/assets/image jardin du coran  (2).jpeg",
      "/assets/image jardin du coran  (3).jpeg",
      "/assets/image jardin du coran  (4).jpeg",
    ],
  },
]
