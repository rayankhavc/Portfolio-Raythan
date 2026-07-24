import type { Metadata } from 'next'
import { ServicesPage } from '@/components/sections/ServicesPage'

export const metadata: Metadata = {
  title: 'Nos Services',
  description:
    'Création de sites web avec SEO inclus, automatisation et IA sur-mesure, publicité Google et Meta. Des solutions digitales complètes pour votre business.',
  alternates: { canonical: 'https://raythan.fr/services' },
}

export default function Services() {
  return <ServicesPage />
}
