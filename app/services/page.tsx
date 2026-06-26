import type { Metadata } from 'next'
import { ServicesPage } from '@/components/sections/ServicesPage'

export const metadata: Metadata = {
  title: 'Nos Services',
  description:
    'Création de sites web, SEO, réseaux sociaux, publicité Google & Meta, automatisation et IA métier. Des solutions digitales complètes pour votre business.',
  alternates: { canonical: 'https://portfolioraythanwebdesign.vercel.app/services' },
}

export default function Services() {
  return <ServicesPage />
}
