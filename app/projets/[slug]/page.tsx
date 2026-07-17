import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CASE_STUDIES, getCaseStudy } from '@/lib/data'
import { CaseStudyArticle } from '@/components/sections/CaseStudyArticle'
import { CTABand } from '@/components/sections/CTABand'

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
    alternates: { canonical: `https://portfolioraythanwebdesign.vercel.app/projets/${study.slug}` },
    openGraph: {
      title: `${study.name} · Raythan Web Design`,
      description: study.summary,
      images: [study.cover.src],
    },
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
      <CaseStudyArticle
        study={study}
        prev={{ slug: prevStudy.slug, name: prevStudy.name }}
        next={{ slug: nextStudy.slug, name: nextStudy.name }}
      />
      <CTABand />
    </>
  )
}
