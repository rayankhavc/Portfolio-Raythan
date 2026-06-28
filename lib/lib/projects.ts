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
    link: "https://zen-hertz.vercel.app",
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
    link: "https://fundedcalc.vercel.app",
  },]