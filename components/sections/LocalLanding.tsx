import Link from 'next/link'
import Image from 'next/image'
import {
  Monitor, BarChart3, Zap, Check, ChevronDown, CalendarDays, ArrowRight,
  Rocket, Code2, Target, MapPin,
} from 'lucide-react'
import { SERVICES, getCaseStudy } from '@/lib/data'
import type { LocalFAQ, LocalFocus } from '@/lib/local-seo'

// Server Component volontaire : aucun 'use client', aucune animation
// framer-motion. Tout le texte est dans le HTML initial à pleine opacité,
// lisible par les robots des assistants IA qui n'exécutent pas le
// JavaScript, et affiché immédiatement sur mobile lent.
//
// Le socle d'offre (services, raisons, CTA) est partagé entre toutes les
// pages ; l'intro, l'angle, le contexte, les points sectoriels et la FAQ
// sont propres à chaque ville / métier. Cette proportion compte : une
// première version à 56% de phrases communes s'est fait déprioritiser au
// crawl par Google (« Détectée, actuellement non indexée »).

const SERVICE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor, BarChart3, Zap,
}

const REASON_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, Code2, Target,
}

const REASONS = [
  { icon: 'Rocket', title: 'Livraison rapide', description: 'Sites livrés en 5 à 15 jours, du premier appel à la mise en ligne.' },
  { icon: 'Code2', title: 'Code sur-mesure', description: 'Développé pour votre activité, jamais un template à moitié adapté.' },
  { icon: 'Target', title: 'Pensé pour convertir', description: 'Chaque décision de design sert un objectif : vous ramener des clients.' },
]

export interface LocalLandingProps {
  /** Petit kicker en capitales, ex. « Agence web · Nantes ». */
  kicker: string
  h1: string
  intro: string
  angle: string
  /** Paragraphe de contexte propre à la ville / au métier. */
  context: string
  /** Titre de la section des points spécifiques. */
  focusTitle: string
  /** Points spécifiques (secteurs locaux ou fonctionnalités métier). */
  focus: LocalFocus[]
  faq: LocalFAQ[]
  /** Autres pages liées, pour le maillage interne. */
  related?: { href: string; label: string }[]
  /** Titre de la section de maillage. */
  relatedTitle?: string
  /** Fil d'ariane : libellé de la page courante. */
  breadcrumbName: string
  /** Chemin canonique, ex. « /creation-site-internet/nantes ». */
  canonicalPath: string
  /** serviceType du schema Service. */
  serviceType: string
  /** Zones couvertes (noms), pour areaServed. */
  areaServed: string[]
  /** Lien retour vers la page hub (index villes ou métiers). */
  hub: { href: string; label: string }
  /**
   * Slug d'une étude de cas à montrer comme preuve. Uniquement quand le
   * projet correspond vraiment à la page : un commerce de cette commune, ou
   * un site de ce métier. Un exemple à peu près adapté ne prouve rien et
   * dilue le maillage interne, donc pas de valeur par défaut.
   */
  caseStudySlug?: string
  /** Phrase qui introduit l'exemple, ex. « Un projet livré à Nantes ». */
  caseStudyLead?: string
}

const BASE_URL = 'https://raythan.fr'

export function LocalLanding({
  kicker,
  h1,
  intro,
  angle,
  context,
  focusTitle,
  focus,
  faq,
  related,
  relatedTitle,
  breadcrumbName,
  canonicalPath,
  serviceType,
  areaServed,
  hub,
  caseStudySlug,
  caseStudyLead,
}: LocalLandingProps) {
  const proof = caseStudySlug ? getCaseStudy(caseStudySlug) : undefined
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: h1,
        serviceType,
        description: intro,
        url: `${BASE_URL}${canonicalPath}`,
        provider: { '@id': `${BASE_URL}/#agence` },
        areaServed: areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: hub.label, item: `${BASE_URL}${hub.href}` },
          { '@type': 'ListItem', position: 3, name: breadcrumbName, item: `${BASE_URL}${canonicalPath}` },
        ],
      },
      ...(faq.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          {/* Fil d'ariane */}
          <nav aria-label="Fil d'ariane" className="mb-6 text-xs text-metallic">
            <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span className="mx-2">·</span>
            <Link href={hub.href} className="hover:text-foreground transition-colors">{hub.label}</Link>
          </nav>

          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
            {kicker}
          </p>
          <h1 className="font-semibold tracking-tight text-display-md text-foreground leading-tight mb-6">
            {h1}
          </h1>
          <p className="text-metallic-light text-lg md:text-xl max-w-2xl leading-relaxed">
            {intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://cal.com/rayankhavc"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full text-sm"
            >
              <CalendarDays size={16} />
              Prendre RDV
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[rgb(var(--overlay)/15%)] text-foreground font-medium px-6 py-3 rounded-full hover:border-[rgb(var(--overlay)/40%)] transition-colors duration-300 text-sm"
            >
              Demander un devis <ArrowRight size={14} />
            </Link>
          </div>
          <p className="text-xs text-metallic mt-4">Devis gratuit · Réponse sous 48h</p>
        </div>
      </section>

      {/* Angle + contexte, contenu propre à la page */}
      <section className="py-16 px-6 border-t border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/1.5%)]">
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-metallic-light text-lg leading-relaxed">{angle}</p>
          <p className="text-metallic leading-relaxed">{context}</p>
        </div>
      </section>

      {/* Points spécifiques à la ville / au métier */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
              Concrètement
            </p>
            <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight">
              {focusTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focus.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="font-semibold text-foreground text-xl">{item.title}</h3>
                <p className="text-metallic text-sm leading-relaxed">{item.description}</p>
                <div className="h-px bg-gradient-to-r from-[rgb(var(--overlay)/15%)] to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preuve : une étude de cas du métier ou de la commune */}
      {proof && (
        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 max-w-2xl">
              <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
                Un exemple
              </p>
              <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight">
                {caseStudyLead ?? 'Un projet du même genre, déjà en ligne.'}
              </h2>
            </div>
            <Link
              href={`/projets/${proof.slug}`}
              className="card-surface group grid overflow-hidden rounded-3xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] transition-colors duration-500 hover:border-[rgb(var(--overlay)/20%)] md:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={proof.cover.src}
                  alt={proof.cover.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 p-7 md:p-9">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">{proof.name}</h3>
                  <p className="mt-1 text-sm text-metallic">{proof.kicker}</p>
                  <p className="mt-4 text-sm leading-relaxed text-metallic-light">{proof.summary}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Lire l'étude de cas
                  <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Offre */}
      <section className="py-24 px-6 border-t border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/1.5%)]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
              Ce qu'on met en place
            </p>
            <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight">
              Un site, et tout ce qu'il faut autour.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <div
                  key={service.id}
                  className="card-surface p-6 rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] flex flex-col h-full"
                >
                  <div className="w-10 h-10 rounded-xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] flex items-center justify-center mb-4">
                    {Icon && <Icon size={18} className="text-metallic-light" />}
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{service.title}</h3>
                  <p className="text-metallic text-sm mb-4">{service.tagline}</p>
                  <ul className="space-y-1.5 flex-1">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-metallic">
                        <Check size={12} className="text-accent shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi Raythan */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
              Pourquoi nous
            </p>
            <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight">
              Une agence indépendante à Nantes.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REASONS.map((r) => {
              const Icon = REASON_ICONS[r.icon]
              return (
                <div key={r.title} className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl border border-[rgb(var(--overlay)/10%)] flex items-center justify-center">
                    {Icon && <Icon size={20} className="text-metallic-light" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-xl mb-2">{r.title}</h3>
                    <p className="text-metallic text-sm leading-relaxed">{r.description}</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-[rgb(var(--overlay)/15%)] to-transparent" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ unique */}
      {faq.length > 0 && (
        <section className="py-24 px-6 border-t border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/1.5%)]">
          <div className="max-w-3xl mx-auto">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
              Questions fréquentes
            </p>
            <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight mb-10">
              Ce qu'on nous demande souvent.
            </h2>
            <div className="card-surface rounded-2xl border border-[rgb(var(--overlay)/8%)] divide-y divide-[rgb(var(--overlay)/8%)] overflow-hidden bg-background">
              {faq.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold text-foreground text-base hover:bg-[rgb(var(--overlay)/3%)] transition-colors duration-300">
                    {item.question}
                    <ChevronDown
                      size={16}
                      className="shrink-0 text-metallic-light transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-6 pb-5 text-metallic-light text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Maillage interne : autres pages liées */}
      {related && related.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
              {relatedTitle ?? 'Voir aussi'}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] px-5 py-2.5 text-sm text-metallic-light transition-colors duration-300 hover:border-[rgb(var(--overlay)/20%)] hover:text-foreground"
                >
                  <MapPin size={14} className="text-metallic" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="card-surface relative rounded-3xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] px-8 py-16 md:px-16 text-center overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/[0.06] blur-[80px] rounded-full" />
            <h2 className="font-semibold tracking-tight text-display-cta text-foreground mb-4 leading-tight">
              Un projet en tête ?
            </h2>
            <p className="text-metallic text-lg max-w-md mx-auto mb-10">
              Réservez un appel gratuit et repartez avec un devis clair, sans engagement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://cal.com/rayankhavc"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full text-sm"
              >
                <CalendarDays size={16} />
                Réserver un appel gratuit
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-[rgb(var(--overlay)/15%)] text-foreground font-medium px-8 py-4 rounded-full hover:border-[rgb(var(--overlay)/40%)] transition-colors duration-300 text-sm"
              >
                Voir nos réalisations <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
