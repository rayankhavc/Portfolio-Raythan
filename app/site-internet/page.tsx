import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Store } from 'lucide-react'
import { TRADES } from '@/lib/local-seo'

export const metadata: Metadata = {
  title: 'Site internet par activité : restaurant, artisan, commerce, PME',
  description:
    "Création de site internet adaptée à votre métier : restaurant, artisan, commerce local, coach, photographe, PME. Sites sur-mesure, SEO inclus. Agence web à Nantes.",
  alternates: { canonical: 'https://raythan.fr/site-internet' },
}

export default function TradesHubPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
            Par activité
          </p>
          <h1 className="font-semibold tracking-tight text-display-md text-foreground leading-tight mb-6">
            Un site internet pensé pour votre métier
          </h1>
          <p className="text-metallic-light text-lg md:text-xl max-w-2xl leading-relaxed">
            Chaque activité a ses codes et sa clientèle. On adapte le site à votre
            métier plutôt qu'à un modèle générique. Choisissez le vôtre pour voir
            ce qu'on met en place.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRADES.map((trade) => (
            <Link
              key={trade.slug}
              href={`/site-internet/${trade.slug}`}
              className="card-surface group p-6 rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] hover:bg-[rgb(var(--overlay)/6%)] hover:border-[rgb(var(--overlay)/20%)] transition-all duration-500 flex items-center justify-between gap-4"
            >
              <span className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl border border-[rgb(var(--overlay)/10%)] flex items-center justify-center shrink-0">
                  <Store size={16} className="text-metallic-light" />
                </span>
                <span className="font-semibold text-foreground capitalize">{trade.name}</span>
              </span>
              <ArrowRight size={16} className="text-metallic group-hover:text-accent transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
