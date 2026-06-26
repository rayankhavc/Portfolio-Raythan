import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedTitle } from '@/components/ui/AnimatedTitle'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { WhyRaythan } from '@/components/sections/WhyRaythan'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Agence digitale à Nantes — Sites, SEO, Pub, IA',
  description:
    'Raythan Web Design — Agence digitale indépendante à Nantes. Création de sites web, SEO, réseaux sociaux, publicité Google & Meta, automatisation et IA métier.',
  alternates: { canonical: 'https://portfolioraythanwebdesign.vercel.app' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <ServicesOverview />
      <WhyRaythan />
      <CTABand />
    </>
  )
}
