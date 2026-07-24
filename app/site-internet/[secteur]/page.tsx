import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TRADES, getTrade } from '@/lib/local-seo'
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
  return (
    <LocalLanding
      kicker={`Site internet · ${trade.name}`}
      h1={trade.h1}
      intro={trade.intro}
      angle={trade.angle}
      faq={trade.faq}
      breadcrumbName={trade.h1}
      canonicalPath={`/site-internet/${trade.slug}`}
      serviceType="Création de site internet"
      areaServed={['Nantes', 'Loire-Atlantique']}
      hub={{ href: '/site-internet', label: 'Site internet par activité' }}
    />
  )
}
