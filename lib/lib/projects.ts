export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  result: string
  type: "App" | "No-Code"
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
    tagline: "App de bien-être sonore basée sur les fréquences Hz",
    description:
      "ZenHertz est une application web permettant d'explorer les fréquences sonores thérapeutiques (432Hz, 528Hz…) associées à des états mentaux spécifiques. Conçue pour les 18-35 ans en quête d'optimisation cognitive et de bien-être, elle combine analyse audio, visualisations dynamiques et interface glassmorphism.",
    result:
      "Application déployée en production. Interface bilingue FR/EN, moteurs BPM & Hz intégrés, design system complet.",
    type: "App",
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
      "FundedCalc est un outil de calcul dédié aux traders passant des challenges de prop trading (FTMO, MyForexFunds…). Il permet de simuler les seuils de drawdown, objectifs de profit et règles de gestion du risque propres à chaque firme.",
    result:
      "Application déployée sur Vercel. Interface claire, calculs en temps réel, adoptée par des traders en phase de challenge.",
    type: "App",
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
      "Conception et développement d'un site vitrine no-code pour un service de traiteur spécialisé dans la broche. Mise en valeur des prestations, galerie visuelle et formulaire de contact optimisé pour la conversion.",
    result:
      "Site livré et opérationnel. Présence web professionnelle, augmentation des demandes de devis.",
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
      "Création d'un site vitrine pour une boulangerie artisanale, pensé pour renforcer l'ancrage local et la visibilité Google. Architecture simple, rapide, orientée SEO local avec intégration Google Maps et horaires dynamiques.",
    result:
      "Meilleure visibilité locale, site optimisé mobile-first, SEO local structuré.",
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
      "Site vitrine et menu digital pour un restaurant kebab. Présentation des formules, intégration d'un système de commande simplifié et design mobile-first adapté à une clientèle locale.",
    result:
      "Site livré, menu digital consulté quotidiennement, réduction des appels entrants pour les commandes.",
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
      "Conception d'un site vitrine pour un restaurant local. Mise en avant de la carte, des horaires et de la localisation. Design chaleureux adapté à l'identité de l'établissement.",
    result:
      "Présence web établie, carte consultable en ligne, site optimisé mobile.",
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
      "Site vitrine et plateforme de présentation pour une école d'apprentissage coranique. Architecture claire, parcours utilisateur simplifié pour l'inscription, contenu structuré pour différents niveaux.",
    result:
      "Site livré, inscriptions facilitées, image professionnelle renforcée pour l'établissement.",
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