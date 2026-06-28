import type { Metadata } from 'next'
import { PortfolioPage } from '@/components/sections/PortfolioPage'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Nos réalisations sites vitrines, web apps, outils digitaux. Découvrez les projets livrés par Raythan Web Design.',
  alternates: { canonical: 'https://portfolioraythanwebdesign.vercel.app/portfolio' },
}

export default function Portfolio() {
  return <PortfolioPage />
}
