import type { Metadata } from 'next'
import { IntroOverlay } from '@/components/IntroOverlay'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { WorkTeaser } from '@/components/sections/WorkTeaser'
import { WhyRaythan } from '@/components/sections/WhyRaythan'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Agence digitale en Loire-Atlantique : sites, SEO, pub, IA',
  description:
    'Raythan Web Design, agence digitale indépendante en Loire-Atlantique. Création de sites web, SEO, réseaux sociaux, publicité Google & Meta, automatisation et IA métier.',
  alternates: { canonical: 'https://portfolioraythanwebdesign.vercel.app' },
}

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <HeroSection />
      <MarqueeSection />
      <ServicesOverview />
      <WorkTeaser />
      <WhyRaythan />
      <ProcessSection />
      <FAQSection />
      <CTABand />
    </>
  )
}
