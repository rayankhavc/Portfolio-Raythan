import type { Metadata } from 'next'
import { IntroOverlay } from '@/components/IntroOverlay'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { WorkTeaser } from '@/components/sections/WorkTeaser'
import { WhyRaythan } from '@/components/sections/WhyRaythan'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AImodeSection } from '@/components/sections/AImodeSection'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Agence web à Nantes : sites, SEO, publicité et IA',
  description:
    'Agence web indépendante à Nantes (Loire-Atlantique). Création de sites avec SEO inclus, automatisation et IA sur-mesure, publicité Google et Meta.',
  alternates: { canonical: 'https://raythan.fr' },
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
      <AImodeSection />
      <FAQSection />
      <CTABand />
    </>
  )
}
