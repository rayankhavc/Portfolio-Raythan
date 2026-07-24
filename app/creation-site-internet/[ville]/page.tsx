import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CITIES, getCity } from '@/lib/local-seo'
import { LocalLanding } from '@/components/sections/LocalLanding'

export const dynamicParams = false

export function generateStaticParams() {
  return CITIES.map((c) => ({ ville: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>
}): Promise<Metadata> {
  const { ville } = await params
  const city = getCity(ville)
  if (!city) return {}
  const canonical = `https://raythan.fr/creation-site-internet/${city.slug}`
  return {
    title: city.title,
    description: city.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: `${city.title} | Raythan Web Design`,
      description: city.metaDescription,
      url: canonical,
    },
  }
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ ville: string }>
}) {
  const { ville } = await params
  const city = getCity(ville)
  if (!city) notFound()
  return (
    <LocalLanding
      kicker={`Agence web · ${city.name}`}
      h1={city.h1}
      intro={city.intro}
      angle={city.angle}
      faq={city.faq}
      breadcrumbName={city.h1}
      canonicalPath={`/creation-site-internet/${city.slug}`}
      serviceType="Création de site internet"
      areaServed={[city.name, 'Loire-Atlantique']}
      hub={{ href: '/creation-site-internet', label: 'Création de site internet' }}
    />
  )
}
