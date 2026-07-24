import type { MetadataRoute } from 'next'

// Crawlers autorisés explicitement. Pour une agence, être présent dans les
// index de recherche ET dans les corpus des assistants IA est un avantage :
// on autorise à la fois les robots de « recherche/citation » (qui vont chercher
// une page pour répondre en direct) et les robots « d'entraînement » (GPTBot,
// Google-Extended, Applebot-Extended). Aucun n'exécute le JavaScript : c'est
// pour eux que tout le contenu est rendu côté serveur.
const ALLOWED_BOTS = [
  // Recherche classique
  'Googlebot',
  'Bingbot',
  'Applebot',
  // Recherche / citation IA (récupèrent une page pour répondre)
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'Claude-SearchBot',
  'Claude-User',
  // Entraînement des modèles (corpus)
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...ALLOWED_BOTS.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://raythan.fr/sitemap.xml',
  }
}
