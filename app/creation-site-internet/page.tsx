import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'
import { CITIES } from '@/lib/local-seo'
import { LocalHub } from '@/components/sections/LocalHub'

export const metadata: Metadata = {
  title: 'Création de site internet à Nantes et en Loire-Atlantique',
  description:
    "Agence web à Nantes : création de site internet sur-mesure dans toute la Loire-Atlantique. SEO technique inclus, sites rapides et lisibles par les IA. Devis gratuit.",
  alternates: { canonical: 'https://raythan.fr/creation-site-internet' },
}

const FOCUS = [
  {
    title: 'Le site, pas seulement la fiche Google',
    description:
      "Une fiche Google Business vous rend visible quand on cherche votre nom. Elle ne vous positionne pas sur « restaurant Vertou » ou « plombier Orvault ». C'est le site qui va chercher ces requêtes, la fiche qui les transforme en appel.",
  },
  {
    title: 'Les données locales écrites dans le code',
    description:
      "Adresse, communes desservies, horaires, moyens de contact : ces informations sont inscrites en données structurées dans la page, pas seulement affichées à l'écran. C'est ce format que lisent Google et les assistants IA quand ils recommandent un commerce.",
  },
  {
    title: 'Une page par commune, pas un copier-coller',
    description:
      "Chaque page ci-dessus porte son propre contexte économique, ses secteurs caractéristiques et ses propres questions. Les pages satellites produites en série avec juste le nom de la ville qui change sont repérées et déclassées.",
  },
  {
    title: 'Un site rapide, sur mobile en premier',
    description:
      "La recherche locale se fait dans la rue, sur un réseau moyen. Un site lourd perd le visiteur avant de s'afficher. Le nôtre est construit pour tenir sur mobile d'abord, le confort desktop vient ensuite.",
  },
]

const FAQ = [
  {
    question: 'Vous intervenez dans toute la Loire-Atlantique ?',
    answer:
      "Oui. Rendez-vous sur place à Nantes et dans l'agglomération, en visio si c'est plus pratique pour vous. Le projet avance de la même façon dans les deux cas.",
  },
  {
    question: "Ma commune n'est pas dans la liste, c'est bloquant ?",
    answer:
      "Non. Cette liste couvre les communes d'où viennent le plus de demandes, elle n'est pas limitative. Décrivez votre projet, on répond sous 48h.",
  },
  {
    question: 'Faut-il une page par ville pour être visible partout ?',
    answer:
      "Pas systématiquement. Pour un commerce avec une seule adresse, une page bien construite suffit souvent. Les pages par commune ont du sens quand vous intervenez réellement sur plusieurs secteurs, comme un artisan ou un prestataire à domicile.",
  },
  {
    question: 'Combien de temps avant de remonter sur Google ?',
    answer:
      "Le site est indexable dès la mise en ligne. Le positionnement dépend ensuite de votre secteur, de votre fiche Google Business et de vos avis. Comptez plusieurs semaines, et méfiez-vous de qui vous promet une place précise à une date précise.",
  },
]

export default function CitiesHubPage() {
  return (
    <LocalHub
      kicker="Zones d'intervention"
      h1="Création de site internet à Nantes et autour"
      intro="Agence web indépendante basée à Nantes, on développe des sites sur-mesure pour les commerces, artisans, indépendants et PME de la Loire-Atlantique. Choisissez votre commune pour en savoir plus."
      path="/creation-site-internet"
      breadcrumbLabel="Site internet par ville"
      gridTitle="Les communes couvertes"
      items={CITIES.map(({ slug, name }) => ({
        href: `/creation-site-internet/${slug}`,
        label: name,
      }))}
      icon={MapPin}
      angle="Le référencement local ne se joue pas sur le même terrain selon l'endroit où vous exercez. À Nantes intra-muros, les requêtes principales sont saturées et la fiche Google Business pèse presque autant que le site. Dans les communes autour, la concurrence en ligne est souvent plus faible : un site bien structuré suffit fréquemment à passer devant des vitrines laissées à l'abandon depuis des années."
      context="C'est pour ça qu'on ne livre pas la même structure à un restaurant du Bouffay et à un artisan de Vertou. Les pages mises en avant, le vocabulaire, les informations locales intégrées au code : tout est calé sur la commune et sur l'activité. Chaque page ci-dessus détaille ce contexte pour sa ville, avec ses secteurs dominants et ses questions récurrentes."
      focusTitle="Ce qu'on met en place pour la visibilité locale."
      focus={FOCUS}
      faq={FAQ}
      crossLink={{
        href: '/site-internet',
        kicker: 'Par activité',
        title: 'Vous cherchez plutôt par métier ?',
        description:
          "Restaurant, artisan, commerce, coach, photographe, PME, boulangerie, pizzeria : le détail de ce qu'on installe selon l'activité, fonctionnalités comprises.",
      }}
    />
  )
}
