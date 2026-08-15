import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CITIES, TRADES, getTrade } from '@/lib/local-seo'
import { LocalLanding } from '@/components/sections/LocalLanding'

export const dynamicParams = false

export function generateStaticParams() {
  return TRADES.map((t) => ({ secteur: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ secteur: string }>
}): Promise<Metadata> {
  const { secteur } = await params
  const trade = getTrade(secteur)
  if (!trade) return {}
  const canonical = `https://raythan.fr/site-internet/${trade.slug}`
  return {
    title: trade.title,
    description: trade.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${trade.title} | Raythan Web Design`,
      description: trade.metaDescription,
      url: canonical,
    },
  }
}

export default async function TradePage({
  params,
}: {
  params: Promise<{ secteur: string }>
}) {
  const { secteur } = await params
  const trade = getTrade(secteur)
  if (!trade) notFound()

  // Maillage interne : autres métiers + principales communes couvertes.
  const related = [
    ...TRADES.filter((t) => t.slug !== trade.slug)
      .slice(0, 3)
      .map((t) => ({ href: `/site-internet/${t.slug}`, label: `Site pour ${t.name}` })),
    ...CITIES.slice(0, 3).map((c) => ({
      href: `/creation-site-internet/${c.slug}`,
      label: c.name,
    })),
  ]

  return (
    <LocalLanding
      kicker={`Site internet · ${trade.name}`}
      h1={trade.h1}
      intro={trade.intro}
      angle={trade.angle}
      context={trade.context}
      focusTitle={`Ce qu'un site de ${trade.name} doit faire.`}
      focus={trade.features}
      faq={trade.faq}
      related={related}
      relatedTitle="Autres activités et communes couvertes"
      breadcrumbName={trade.h1}
      canonicalPath={`/site-internet/${trade.slug}`}
      serviceType="Création de site internet"
      areaServed={['Nantes', 'Loire-Atlantique']}
      hub={{ href: '/site-internet', label: 'Site internet par activité' }}
    />
  )
}
