import type { MetadataRoute } from 'next'
import { CASE_STUDIES } from '@/lib/data'
import { CITIES, TRADES } from '@/lib/local-seo'

const BASE_URL = 'https://raythan.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/portfolio',
    '/contact',
    '/creation-site-internet',
    '/site-internet',
    '/mentions-legales',
    '/politique-confidentialite',
  ]
  const pages = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/portfolio' ? 0.8 : 0.6,
  }))
  const caseStudies = CASE_STUDIES.map(({ slug }) => ({
    url: `${BASE_URL}/projets/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const cityPages = CITIES.map(({ slug }) => ({
    url: `${BASE_URL}/creation-site-internet/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const tradePages = TRADES.map(({ slug }) => ({
    url: `${BASE_URL}/site-internet/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [...pages, ...caseStudies, ...cityPages, ...tradePages]
}
