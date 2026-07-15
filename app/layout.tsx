import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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

// Un <head> JSX manuel n'est PAS garanti de passer avant les balises que
// Next.js injecte lui-même (link stylesheet, preload font/image) : vérifié
// sur le HTML réellement généré, ces balises apparaissaient EN PREMIER,
// avant nos scripts, malgré leur position dans ce fichier. next/script avec
// strategy="beforeInteractive" garantit l'exécution avant toute hydratation,
// quel que soit l'ordre d'écriture dans le JSX — mais reste un script JS :
// son exécution dépend du téléchargement du runtime Next.js, donc rien ne
// garantit qu'il tourne avant le premier paint sur une connexion lente.
// C'est pourquoi la décision "faut-il jouer l'intro ?" (app/page.tsx) est
// désormais tranchée côté serveur via un cookie, pas ici : ce script ne gère
// plus que le thème, où un flash de fond bref est un défaut mineur, pas un
// vrai contenu (Navbar) qui apparaît puis disparaît.

// Lit la préférence stockée ; ne touche à rien si sombre (thème par défaut
// de la marque, valeurs déjà dans :root — aucun attribut à poser).
const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem('rwd-theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}})()`

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Raythan Web Design',
  description:
    'Agence digitale indépendante : création de sites web, SEO, réseaux sociaux, publicité Google & Meta, automatisation et IA métier.',
  areaServed: 'Loire-Atlantique',
  email: 'raythanwebdesign@gmail.com',
  telephone: '+33651598293',
  url: 'https://portfolioraythanwebdesign.vercel.app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <div
          aria-hidden="true"
          className="grain-overlay pointer-events-none fixed inset-0 z-40 opacity-[0.035] mix-blend-overlay"
        />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
