import type { Metadata } from 'next'
import { PortfolioIndex } from '@/components/sections/PortfolioIndex'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Réalisations : études de cas et démos testables',
  description:
    'Sites vitrines et web apps livrés en production : Chikano, FundedCalc, BJ Coach Pro, ZenHertz, Au Fournil. Vraies captures, vraies décisions, démos testables en direct.',
  alternates: { canonical: 'https://raythan.fr/portfolio' },
  openGraph: {
    title: 'Réalisations · Raythan Web Design',
    description:
      'Études de cas détaillées avec démos testables en direct : sites vitrines et web apps livrés en production.',
    images: ['/projects/chikano-hero.jpg'],
  },
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioIndex />
      <CTABand />
    </>
  )
}
