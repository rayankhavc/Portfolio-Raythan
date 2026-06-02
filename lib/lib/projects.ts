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
    tagline: "Web App interactive d'analyse et de bien-être sonore.",
    description:
      "Outil d'analyse musicale basé sur l'IA. Le site traite les fréquences et le BPM des morceaux pour corréler les effets sur le bien-être et optimiser les activités quotidiennes (sommeil, sport, travail).",
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
    tagline: "Calculateur de risque pour les Prop Firms.",
    description:
      "Outil de calcul stratégique pour les traders passant des challenges Prop Firm. L'outil analyse les paramètres utilisateur pour fournir des projections mathématiques précises de gestion du risque.",
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
    tagline: "Site vitrine pour un restaurant kebab local.",
    description:
      "Site vitrine optimisé pour le référencement local. Mise en place de fonctionnalités pour la gestion des avis Google et intégration d'un système de commande par téléphone pour accroître les ventes.",
    valueAdded:
      "Création d'une présence web professionnelle pour renforcer la visibilité locale et centraliser les informations essentielles pour la clientèle de proximité.",
    type: "No-Code",
    image: "/assets/Image belle broche (4).jpeg",
    images: [
      "/assets/Image belle broche (4).jpeg",
      "/assets/Image belle broche (2).jpeg",
      "/assets/Image belle broche (3).jpeg",
      "/assets/labellebroche.jpg",
      "/assets/Image belle broche (5).jpeg",
    ],
  },
  {
    slug: "fournil-du-sillon",
    name: "Au Fournil du Sillon",
    tagline: "Site vitrine pour une boulangerie artisanale.",
    description:
      "Site vitrine multipages, moderne et fluide, permettant à la boulangerie d'étendre sa visibilité au-delà de la clientèle de proximité.",
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
    tagline: "Site vitrine présentant l'établissement et son menu.",
    description:
      "Site vitrine conçu pour exposer les produits de l'établissement et établir une présence en ligne claire et accessible.",
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
      "Site vitrine visant à moderniser l'image de l'établissement. Design personnalisé respectant l'identité visuelle du lieu (typographie et charte couleur) pour accroître la visibilité locale.",
    valueAdded:
      "Création d'une vitrine digitale accessible, permettant aux clients de consulter l'offre de restauration facilement depuis n'importe quel appareil et d'ancrer la présence en ligne du restaurant.",
    type: "No-Code",
    image: "/assets/Image La Baraka 1.jpeg",
    images: [
      "/assets/Image La Baraka 1.jpeg",
      "/assets/labaraka.jpg",
      "/assets/Image La Baraka (2).jpeg",
      "/assets/Image La Baraka (3).jpeg",
      "/assets/Image La Baraka (4).jpeg",
    ],
  },
  {
    slug: "jardins-du-coran",
    name: "Les Jardins du Coran",
    tagline: "Site vitrine de présentation pour un institut coranique.",
    description:
      "Site vitrine pour une école de langue arabe et de culture coranique. L'objectif est d'asseoir une présence numérique pour diversifier les canaux d'acquisition d'étudiants au-delà du bouche-à-oreille.",
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
