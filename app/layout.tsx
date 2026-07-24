import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
  metadataBase: new URL('https://raythan.fr'),
  title: {
    template: '%s | Raythan Web Design',
    default: 'Raythan Web Design Agence digitale',
  },
  description:
    'Agence web indépendante à Nantes. Création de sites web avec SEO inclus, automatisation et IA sur-mesure, publicité Google et Meta.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Raythan Web Design',
  },
}

// Exécutés dans <head>, avant tout <link> vers globals.css : posent les
// attributs data-theme / data-intro sur <html> avant le premier paint, sans
// dépendre du chargement d'aucune ressource externe (feuille de style
// comprise). C'est la seule garantie réelle contre un flash de contenu non
// stylé sur connexion lente — un script placé n'importe où dans <body>
// s'exécute toujours après que le navigateur ait eu une chance de peindre
// le <head> et le tout début du document.

// Lit la préférence stockée ; ne touche à rien si sombre (thème par défaut
// de la marque, valeurs déjà dans :root — aucun attribut à poser).
const THEME_INIT_SCRIPT = `(function(){try{if(localStorage.getItem('rwd-theme')==='light')document.documentElement.setAttribute('data-theme','light')}catch(e){}})()`

// Mémorise la page d'entrée de la session, et pose data-intro sur <html>
// uniquement si la session commence par la home, que l'intro n'a pas encore
// été jouée et que prefers-reduced-motion est inactif. L'overlay
// (components/IntroOverlay.tsx) n'est visible que via cet attribut — les
// visiteurs récurrents et les navigations internes ne voient jamais l'intro.
const INTRO_ENTRY_SCRIPT = `(function(){try{var s=sessionStorage,p=location.pathname;if(!s.getItem('rwd-entry'))s.setItem('rwd-entry',p==='/'?'home':'other');if(p==='/'&&s.getItem('rwd-entry')==='home'&&!s.getItem('rwd-intro')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-intro','')}catch(e){}})()`

// Duplique en dur (donc indépendamment de globals.css) les règles qui
// déterminent si l'overlay d'intro couvre correctement l'écran : display,
// position, z-index et couleur de fond. Se limiter au display/overflow
// demandés initialement ne suffit pas — un <div> display:flex sans
// position:fixed/inset/z-index resterait visible dans le flux du document,
// juste sous une autre forme de flash. Les couleurs de fond sont dupliquées
// en dur (deux thèmes) car les variables CSS de globals.css ne sont pas
// non plus garanties disponibles à cet instant ; à resynchroniser
// manuellement si --background change un jour.
const CRITICAL_INTRO_CSS = `#intro-overlay{display:none}html[data-intro] #intro-overlay{display:flex;position:fixed;inset:0;z-index:100;align-items:center;justify-content:center;background-color:#1d1d1f}html[data-theme="light"][data-intro] #intro-overlay{background-color:#f5f4f2}html[data-intro]{overflow:hidden}`

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Raythan Web Design',
  description:
    'Agence web indépendante à Nantes : création de sites web avec SEO inclus, automatisation et IA sur-mesure, publicité Google et Meta.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nantes',
    addressRegion: 'Loire-Atlantique',
    addressCountry: 'FR',
  },
  areaServed: ['Nantes', 'Loire-Atlantique', 'France'],
  email: 'raythanwebdesign@gmail.com',
  telephone: '+33651598293',
  url: 'https://raythan.fr',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: INTRO_ENTRY_SCRIPT }} />
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_INTRO_CSS }} />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        {/* mix-blend-overlay force un recalcul de compositing à chaque frame
            de scroll (élément fixed superposé à tout le contenu) : coût
            GPU non négligeable sur mobile pour un effet purement décoratif.
            Masqué sous md, gardé sur desktop où la marge de perf est large. */}
        <div
          aria-hidden="true"
          className="grain-overlay hidden md:block pointer-events-none fixed inset-0 z-40 opacity-[0.035] mix-blend-overlay"
        />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
