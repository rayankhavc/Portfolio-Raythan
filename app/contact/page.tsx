import type { Metadata } from 'next'
import { ContactPage } from '@/components/sections/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Discutons de votre projet digital. Formulaire de contact ou prise de RDV via Cal.com.',
  alternates: { canonical: 'https://raythan.fr/contact' },
}

export default function Contact() {
  return <ContactPage />
}
