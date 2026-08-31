import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CASE_STUDIES, getCaseStudy, type CaseStudy } from '@/lib/data'
import { CaseStudyArticle } from '@/components/sections/CaseStudyArticle'
import { CTABand } from '@/components/sections/CTABand'

const BASE_URL = 'https://raythan.fr'

export function generateStaticParams() {
  return CASE_STUDIES.map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `${study.name}, étude de cas`,
    description: study.summary,
    alternates: { canonical: `${BASE_URL}/projets/${study.slug}` },
    openGraph: {
      type: 'article',
      title: `${study.name} · Raythan Web Design`,
      description: study.summary,
      images: [study.cover.src],
    },
  }
}

// Données structurées de l'étude de cas, rendues côté serveur : le fil
// d'Ariane donne à Google la place de la page dans le site (et l'affiche dans
// les résultats), le CreativeWork décrit le projet lui-même et le rattache à
// la fiche de l'agence déclarée dans app/layout.tsx.
//
// Aucune métrique inventée n'entre ici : name, description, image et mots-clés
// viennent tous de lib/data.ts, donc de ce qui est réellement affiché.
function caseStudyJsonLd(study: CaseStudy) {
  const url = `${BASE_URL}/projets/${study.slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Réalisations', item: `${BASE_URL}/portfolio` },
          { '@type': 'ListItem', position: 3, name: study.name, item: url },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${url}#projet`,
        name: study.name,
        headline: study.tagline,
        description: study.summary,
        url,
        image: `${BASE_URL}${study.cover.src}`,
        inLanguage: 'fr-FR',
        creator: { '@id': `${BASE_URL}/#agence` },
        keywords: [...study.stack, ...study.missions].join(', '),
        ...(study.liveUrl ? { sameAs: [study.liveUrl] } : {}),
      },
    ],
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const index = CASE_STUDIES.findIndex((c) => c.slug === study.slug)
  const prevStudy = CASE_STUDIES[(index - 1 + CASE_STUDIES.length) % CASE_STUDIES.length]
  const nextStudy = CASE_STUDIES[(index + 1) % CASE_STUDIES.length]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd(study)) }}
      />
      <CaseStudyArticle
        study={study}
        prev={{ slug: prevStudy.slug, name: prevStudy.name }}
        next={{ slug: nextStudy.slug, name: nextStudy.name }}
      />
      <CTABand />
    </>
  )
}
