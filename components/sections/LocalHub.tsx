import Link from 'next/link'
import { ChevronDown, CalendarDays, ArrowRight } from 'lucide-react'
import type { LocalFAQ, LocalFocus } from '@/lib/local-seo'

// Composant partagé par les deux hubs locaux (/creation-site-internet et
// /site-internet).
//
// Pourquoi il existe : dans leur première version, ces deux pages étaient une
// accroche de trois phrases suivie d'une grille de liens, soit ~65 mots de
// contenu propre (150 en comptant navbar et footer). Or ce sont les points
// d'entrée du crawl vers les 18 pages villes et métiers. Google échantillonne
// un hub aussi maigre, le classe comme simple page d'index, et déprioritise
// ce qu'il y a derrière : c'est exactement le profil « Détectée, actuellement
// non indexée » qu'on observait sur les pages enfants.
//
// Server Component volontaire : aucun 'use client', aucune animation. Le texte
// est dans le HTML initial à pleine opacité, lisible par les robots qui
// n'exécutent pas le JavaScript.

// La classe Tailwind `capitalize` met une majuscule à CHAQUE mot, ce qui
// donne « Commerce Local ». En français seule la première lettre prend la
// majuscule, d'où ce helper plutôt que la classe utilitaire.
function upperFirst(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export interface HubLink {
  href: string
  label: string
}

interface LocalHubProps {
  kicker: string
  h1: string
  intro: string
  /** Chemin canonique du hub, ex. « /creation-site-internet ». */
  path: string
  /** Libellé du hub dans le fil d'ariane et le breadcrumb structuré. */
  breadcrumbLabel: string
  /** Intitulé de la grille de liens. */
  gridTitle: string
  /** Les pages listées par ce hub. */
  items: HubLink[]
  /** Icône affichée dans chaque carte de la grille. */
  icon: React.ComponentType<{ size?: number; className?: string }>
  /** Vrai pour les métiers, dont les noms sont stockés en minuscules. */
  capitalizeLabels?: boolean
  /** Paragraphe d'angle, propre au hub. */
  angle: string
  /** Second paragraphe, propre au hub. */
  context: string
  focusTitle: string
  focus: LocalFocus[]
  faq: LocalFAQ[]
  /** Lien vers l'autre hub, pour que les deux se maillent entre eux. */
  crossLink: { href: string; kicker: string; title: string; description: string }
}

export function LocalHub({
  kicker,
  h1,
  intro,
  path,
  breadcrumbLabel,
  gridTitle,
  items,
  icon: Icon,
  capitalizeLabels,
  angle,
  context,
  focusTitle,
  focus,
  faq,
  crossLink,
}: LocalHubProps) {
  const url = `https://raythan.fr${path}`

  // @graph plutôt que trois blocs séparés : un seul objet, les entités se
  // référencent entre elles. L'ItemList décrit explicitement les pages
  // listées, ce qui donne au robot la liste des URLs sans dépendre de sa
  // lecture du HTML.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${url}#page`,
        url,
        name: h1,
        description: intro,
        isPartOf: { '@id': 'https://raythan.fr/#website' },
        about: { '@id': 'https://raythan.fr/#agency' },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            url: `https://raythan.fr${item.href}`,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://raythan.fr/' },
          { '@type': 'ListItem', position: 2, name: breadcrumbLabel, item: url },
        ],
      },
      ...(faq.length
        ? [
            {
              '@type': 'FAQPage',
              '@id': `${url}#faq`,
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

      {/* Hero, inchangé par rapport à la version précédente du hub */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <nav aria-label="Fil d'ariane" className="mb-6 text-xs text-metallic">
            <Link href="/" className="hover:text-foreground transition-colors">Accueil</Link>
            <span className="mx-2">·</span>
            <span className="text-metallic-light">{breadcrumbLabel}</span>
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
        </div>
      </section>

      {/* Grille de liens, position inchangée */}
      <section className="pb-24 px-6">
        <h2 className="sr-only">{gridTitle}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-surface group p-6 rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] hover:bg-[rgb(var(--overlay)/6%)] hover:border-[rgb(var(--overlay)/20%)] transition-all duration-500 flex items-center justify-between gap-4"
            >
              <span className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl border border-[rgb(var(--overlay)/10%)] flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-metallic-light" />
                </span>
                <span className="font-semibold text-foreground">
                  {capitalizeLabels ? upperFirst(item.label) : item.label}
                </span>
              </span>
              <ArrowRight size={16} className="text-metallic group-hover:text-accent transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* Angle + contexte, contenu propre au hub */}
      <section className="py-16 px-6 border-t border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/1.5%)]">
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-metallic-light text-lg leading-relaxed">{angle}</p>
          <p className="text-metallic leading-relaxed">{context}</p>
        </div>
      </section>

      {/* Points propres au hub */}
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

      {/* FAQ propre au hub */}
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

      {/* Lien vers l'autre hub : sans lui, les deux branches du site ne se
          parlent pas et chacune reste un cul-de-sac pour le crawl. */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href={crossLink.href}
            className="card-surface group block p-8 rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] hover:bg-[rgb(var(--overlay)/6%)] hover:border-[rgb(var(--overlay)/20%)] transition-all duration-500"
          >
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
              {crossLink.kicker}
            </p>
            <h2 className="font-semibold tracking-tight text-foreground text-2xl mb-3 flex items-center gap-3">
              {crossLink.title}
              <ArrowRight size={18} className="text-metallic group-hover:text-accent transition-colors shrink-0" />
            </h2>
            <p className="text-metallic text-sm leading-relaxed max-w-2xl">
              {crossLink.description}
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto card-surface rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] p-10 md:p-14 text-center">
          <h2 className="font-semibold tracking-tight text-display-cta text-foreground mb-4 leading-tight">
            Parlons de votre projet.
          </h2>
          <p className="text-metallic-light text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Un appel de vingt minutes suffit pour savoir ce qui est utile chez vous
            et ce qui ne l'est pas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
          <p className="text-xs text-metallic mt-6">Devis gratuit · Réponse sous 48h</p>
        </div>
      </section>
    </>
  )
}
