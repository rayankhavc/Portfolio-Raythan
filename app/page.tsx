import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { IntroOverlay } from '@/components/IntroOverlay'
import { HeroSection } from '@/components/sections/HeroSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { MarqueeSection } from '@/components/sections/MarqueeSection'
import { WhyRaythan } from '@/components/sections/WhyRaythan'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CTABand } from '@/components/sections/CTABand'

export const metadata: Metadata = {
  title: 'Agence digitale en Loire-Atlantique : sites, SEO, pub, IA',
  description:
    'Raythan Web Design, agence digitale indépendante en Loire-Atlantique. Création de sites web, SEO, réseaux sociaux, publicité Google & Meta, automatisation et IA métier.',
  alternates: { canonical: 'https://portfolioraythanwebdesign.vercel.app' },
}

export default async function HomePage() {
  // Décidée côté serveur (cookie, pas sessionStorage) : l'overlay est présent
  // ou absent dès le HTML envoyé, avant toute exécution JS côté client. Un
  // script client qui pose un attribut après coup (ancienne approche) laisse
  // une fenêtre où le HTML statique (Navbar, Hero...) est déjà peint mais où
  // le script n'a pas encore tourné, surtout sur connexion lente : c'est
  // exactement le flash rapporté.
  const introSeen = (await cookies()).has('rwd-intro')

  return (
    <>
      <IntroOverlay shouldPlay={!introSeen} />
      <HeroSection />
      <MarqueeSection />
      <ServicesOverview />
      <WhyRaythan />
      <ProcessSection />
      <FAQSection />
      <CTABand />
    </>
  )
}
