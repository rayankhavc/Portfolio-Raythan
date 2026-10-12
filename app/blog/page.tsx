import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { getAllPosts, formatDate } from '@/lib/blog'
import { Reveal } from '@/components/blog/Reveal'
import { CTABand } from '@/components/sections/CTABand'

const BASE_URL = 'https://raythan.fr'

export const metadata: Metadata = {
  title: 'Blog : sites internet, référencement local et outils',
  description:
    "Conseils concrets pour les commerçants, artisans et PME : créer, référencer et faire vivre un site internet. Tirés de projets réels, sans jargon.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Blog · Raythan Web Design',
    description: 'Créer, référencer et faire vivre un site internet : des conseils tirés de projets réels.',
  },
}

export default function BlogIndexPage() {
  const posts = getAllPosts()
  // Tant qu'aucun article n'est publié, la page n'existe pas : une page vide
  // indexée ferait plus de tort que pas de page.
  if (posts.length === 0) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
        ],
      },
      {
        '@type': 'Blog',
        '@id': `${BASE_URL}/blog#blog`,
        name: 'Blog de Raythan Web Design',
        url: `${BASE_URL}/blog`,
        inLanguage: 'fr-FR',
        publisher: { '@id': `${BASE_URL}/#agence` },
        blogPost: posts.map((p) => ({
          '@type': 'BlogPosting',
          headline: p.title,
          url: `${BASE_URL}/blog/${p.slug}`,
          datePublished: p.date,
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="px-6 pt-32 pb-12">
        <div className="mx-auto max-w-6xl">
          <Reveal onMount>
            <p className="mb-4 text-xs font-medium tracking-widest text-accent uppercase">Blog</p>
            <h1 className="max-w-3xl font-semibold tracking-tight text-display-md leading-[1.05] text-foreground">
              Créer, référencer,{' '}
              <span className="bg-gradient-to-r from-foreground to-metallic-light bg-clip-text text-transparent">
                faire vivre un site.
              </span>
            </h1>
          </Reveal>
          <Reveal onMount delay={0.15}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-metallic-light">
              Des réponses concrètes aux questions que posent les commerçants, artisans et PME, tirées des
              projets qu&apos;on livre.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 3) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-surface group flex h-full flex-col rounded-2xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] p-7 transition-colors hover:border-[rgb(var(--overlay)/20%)] hover:bg-[rgb(var(--overlay)/5%)]"
              >
                <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">{post.category}</p>
                <h2 className="mb-3 text-xl font-semibold tracking-tight text-foreground">{post.title}</h2>
                <p className="mb-6 flex-1 leading-relaxed text-metallic-light">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-metallic">
                  <span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min de lecture
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  )
}
