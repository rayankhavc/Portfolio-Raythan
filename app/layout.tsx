import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'
import { MotionProvider } from '@/components/motion-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolioraythanwebdesign.vercel.app'),
  title: {
    template: '%s | Raythan Web Design',
    default: 'Raythan Web Design Agence digitale',
  },
  description:
    'Agence web indépendante. Création de sites, SEO, réseaux sociaux, publicité Google & Meta, automatisation et IA métier.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Raythan Web Design',
  },
}

// Exécuté avant le premier paint, à chaque chargement complet de document :
// mémorise la page d'entrée de la session, et pose data-intro sur <html>
// uniquement si la session commence par la home, que l'intro n'a pas encore
// été jouée et que prefers-reduced-motion est inactif. L'overlay
// (components/IntroOverlay.tsx) n'est visible que via cet attribut — les
// visiteurs récurrents et les navigations internes ne voient jamais l'intro.
const INTRO_ENTRY_SCRIPT = `(function(){try{var s=sessionStorage,p=location.pathname;if(!s.getItem('rwd-entry'))s.setItem('rwd-entry',p==='/'?'home':'other');if(p==='/'&&s.getItem('rwd-entry')==='home'&&!s.getItem('rwd-intro')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-intro','')}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: INTRO_ENTRY_SCRIPT }} />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
