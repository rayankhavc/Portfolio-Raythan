import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { CITIES } from '@/lib/local-seo'

export const metadata: Metadata = {
  title: 'Création de site internet à Nantes et en Loire-Atlantique',
  description:
    "Agence web à Nantes : création de site internet sur-mesure dans toute la Loire-Atlantique. SEO technique inclus, sites rapides et lisibles par les IA. Devis gratuit.",
  alternates: { canonical: 'https://raythan.fr/creation-site-internet' },
}

export default function CitiesHubPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
            Zones d'intervention
          </p>
          <h1 className="font-semibold tracking-tight text-display-md text-foreground leading-tight mb-6">
            Création de site internet à Nantes et autour
          </h1>
          <p className="text-metallic-light text-lg md:text-xl max-w-2xl leading-relaxed">
            Agence web indépendante basée à Nantes, on développe des sites sur-mesure
            pour les commerces, artisans, indépendants et PME de la Loire-Atlantique.
            Choisissez votre commune pour en savoir plus.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/creation-site-internet/${city.slug}`}
              className="card-surface group p-6 rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] hover:bg-[rgb(var(--overlay)/6%)] hover:border-[rgb(var(--overlay)/20%)] transition-all duration-500 flex items-center justify-between gap-4"
            >
              <span className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl border border-[rgb(var(--overlay)/10%)] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-metallic-light" />
                </span>
                <span className="font-semibold text-foreground">{city.name}</span>
              </span>
              <ArrowRight size={16} className="text-metallic group-hover:text-accent transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
