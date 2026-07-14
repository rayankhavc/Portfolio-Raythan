import type { MetadataRoute } from 'next'

const BASE_URL = 'https://portfolioraythanwebdesign.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/contact', '/mentions-legales', '/politique-confidentialite']
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.6,
  }))
}
