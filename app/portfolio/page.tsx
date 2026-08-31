import type { Metadata } from 'next'
import { PortfolioIndex } from '@/components/sections/PortfolioIndex'
import { CTABand } from '@/components/sections/CTABand'
import { CASE_STUDIES } from '@/lib/data'

const BASE_URL = 'https://raythan.fr'

export const metadata: Metadata = {
  title: 'Réalisations : études de cas et démos testables',
  description:
    'Sites vitrines et web apps livrés en production : Anas Pizza, MK Boulangeries, Chikano, FundedCalc, BJ Coach Pro, Science Based Quiz, ZenHertz. Vraies captures, vraies décisions, démos testables en direct.',
  alternates: { canonical: `${BASE_URL}/portfolio` },
  openGraph: {
    title: 'Réalisations · Raythan Web Design',
    description:
      'Études de cas détaillées avec démos testables en direct : sites vitrines et web apps livrés en production.',
    images: ['/projects/chikano-hero.jpg'],
  },
}

// Liste ordonnée des études de cas, rendue côté serveur. C'est le seul moyen
// pour un moteur ou un assistant IA de connaître l'ensemble du portfolio sans
// exécuter le JavaScript : la grille elle-même est un composant client animé.
// La description reprend le résumé affiché, jamais un texte parallèle.
const PORTFOLIO_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE_URL}/portfolio#page`,
  name: 'Réalisations de Raythan Web Design',
  url: `${BASE_URL}/portfolio`,
  inLanguage: 'fr-FR',
  isPartOf: { '@id': `${BASE_URL}/#agence` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Réalisations', item: `${BASE_URL}/portfolio` },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: CASE_STUDIES.length,
    itemListElement: CASE_STUDIES.map((study, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/projets/${study.slug}`,
      name: study.name,
    })),
  },
}

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PORTFOLIO_JSON_LD) }}
      />
      <PortfolioIndex />
      <CTABand />
    </>
  )
}
