import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolioraythanwebdesign.vercel.app'),
  title: {
    template: '%s | Raythan Web Design',
    default: 'Raythan Web Design — Agence digitale',
  },
  description:
    'Agence web indépendante. Création de sites, SEO, réseaux sociaux, publicité Google & Meta, automatisation et IA métier.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Raythan Web Design',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-[#080808] text-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
