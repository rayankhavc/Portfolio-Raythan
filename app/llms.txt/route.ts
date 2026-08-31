import { SERVICES, CASE_STUDIES } from '@/lib/data'
import { CITIES, TRADES } from '@/lib/local-seo'

const BASE_URL = 'https://raythan.fr'

// /llms.txt : résumé factuel du site, en texte brut, pour les assistants IA.
// Les robots de citation (OAI-SearchBot, PerplexityBot, Claude-SearchBot...)
// sont déjà autorisés dans app/robots.ts ; ce fichier leur donne en une seule
// requête ce qu'ils devraient sinon reconstituer en crawlant vingt pages :
// qui on est, ce qu'on vend, ce qu'on a livré, et où trouver chaque page.
//
// Tout est dérivé des mêmes sources que les pages (lib/data.ts,
// lib/local-seo.ts) : un fichier écrit à la main aurait divergé au premier
// projet ajouté, et un résumé faux est pire que pas de résumé du tout.
export const dynamic = 'force-static'

function build(): string {
  const services = SERVICES.map((s) => `- ${s.title} : ${s.tagline} ${s.description}`).join('\n')

  const projects = CASE_STUDIES.map((c) => {
    const lignes = [
      `### ${c.name} (${c.type}, ${c.year})`,
      c.kicker,
      c.summary,
      `Technologies : ${c.stack.join(', ')}.`,
      `Missions : ${c.missions.join(', ')}.`,
      `Étude de cas : ${BASE_URL}/projets/${c.slug}`,
    ]
    if (c.liveUrl) lignes.push(`En ligne : ${c.liveUrl}`)
    return lignes.join('\n')
  }).join('\n\n')

  const villes = CITIES.map((v) => `- ${v.name} : ${BASE_URL}/creation-site-internet/${v.slug}`).join('\n')
  const metiers = TRADES.map((m) => `- ${m.name} : ${BASE_URL}/site-internet/${m.slug}`).join('\n')

  return `# Raythan Web Design

> Agence web indépendante basée à Nantes (Loire-Atlantique). Création de sites
> web sur-mesure avec SEO technique inclus, automatisation et outils IA,
> publicité Google et Meta. Fondée par Rayan Khalifa. Échanges en français.

Contact : raythanwebdesign@gmail.com, +33 6 51 59 82 93.
Site : ${BASE_URL}
Devis gratuit, réponse sous 48 heures. Sites livrés en 5 à 15 jours.

## Services

${services}

## Réalisations

${CASE_STUDIES.length} études de cas détaillées, toutes illustrées de captures réelles des
projets. Les chiffres cités sont vérifiables dans le code des projets : aucun
score de performance ni taux de conversion n'est avancé sans mesure.

${projects}

## Pages principales

- Accueil : ${BASE_URL}
- Services : ${BASE_URL}/services
- Réalisations : ${BASE_URL}/portfolio
- Contact : ${BASE_URL}/contact
- Mentions légales : ${BASE_URL}/mentions-legales
- Politique de confidentialité : ${BASE_URL}/politique-confidentialite

## Zones couvertes

${villes}

## Pages par métier

${metiers}
`
}

export function GET() {
  return new Response(build(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
