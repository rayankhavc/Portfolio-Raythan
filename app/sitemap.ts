import type { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/lib/data'
import { CITIES, TRADES } from '@/lib/local-seo'

const BASE_URL = 'https://raythan.fr'

// Dates de dernière modification réelles, en dur. Surtout PAS new Date() :
// le sitemap étant régénéré à chaque build, toutes les URLs déclaraient
// « modifiée à l'instant » à chaque déploiement, y compris les pages
// inchangées depuis des semaines. Google détecte ce genre de lastmod
// systématiquement faux et finit par ignorer le signal pour tout le site,
// ce qui dégrade la priorité de crawl. À bumper manuellement quand le
// contenu d'une section change vraiment.
//
// Chaque date doit correspondre à la dernière modification RÉELLE du contenu
// de la section. Une date antérieure au dernier crawl dit à Google « rien de
// neuf depuis ton passage », donc pas de raison de revenir : mettre une date
// trop ancienne sur du contenu qu'on vient de réécrire annule tout l'intérêt
// de la réécriture.
const LAST_CONTENT_UPDATE = {
  /** Home, services, portfolio, contact : socle du site. */
  core: '2026-08-28',
  /** Hubs listant les pages locales, contenu propre inchangé depuis leur création. */
  localHubs: '2026-07-25',
  /** Pages villes et métiers : contenu entièrement réécrit et enrichi. */
  localPages: '2026-08-15',
  /** Études de cas. */
  caseStudies: '2026-08-28',
  /** Pages légales, très stables. */
  legal: '2026-07-20',
} as const

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.8 },
    { path: '/portfolio', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
  ].map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_CONTENT_UPDATE.core,
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const legalPages = ['/mentions-legales', '/politique-confidentialite'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_CONTENT_UPDATE.legal,
    changeFrequency: 'yearly' as const,
    priority: 0.2,
  }))

  // Hubs listant les pages locales : point d'entrée du crawl vers elles,
  // donc priorité élevée.
  const hubs = ['/creation-site-internet', '/site-internet'].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_CONTENT_UPDATE.localHubs,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const caseStudies = CASE_STUDIES.map(({ slug }) => ({
    url: `${BASE_URL}/projets/${slug}`,
    lastModified: LAST_CONTENT_UPDATE.caseStudies,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  const cityPages = CITIES.map(({ slug }) => ({
    url: `${BASE_URL}/creation-site-internet/${slug}`,
    lastModified: LAST_CONTENT_UPDATE.localPages,
    changeFrequency: 'monthly' as const,
    priority: slug === 'nantes' ? 0.9 : 0.7,
  }))

  const tradePages = TRADES.map(({ slug }) => ({
    url: `${BASE_URL}/site-internet/${slug}`,
    lastModified: LAST_CONTENT_UPDATE.localPages,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...corePages, ...hubs, ...cityPages, ...tradePages, ...caseStudies, ...legalPages]
}
