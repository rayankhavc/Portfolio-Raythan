import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAllPosts, getPost, formatDate } from '@/lib/blog'
import { getCaseStudy } from '@/lib/data'
import { Reveal } from '@/components/blog/Reveal'
import { CTABand } from '@/components/sections/CTABand'

const BASE_URL = 'https://raythan.fr'

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${post.title} · Raythan Web Design`,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${post.slug}`
  const study = post.caseStudySlug ? getCaseStudy(post.caseStudySlug) : undefined
  const others = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  // Rendu côté serveur comme le reste du JSON-LD du site. L'auteur est
  // l'agence déclarée dans app/layout.tsx, jamais une personne inventée.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: url,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        inLanguage: 'fr-FR',
        articleSection: post.category,
        author: { '@id': `${BASE_URL}/#agence` },
        publisher: { '@id': `${BASE_URL}/#agence` },
        isPartOf: { '@id': `${BASE_URL}/blog#blog` },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="px-6 pt-32 pb-12">
        <div className="mx-auto max-w-3xl">
          <Reveal onMount>
            <Link
              href="/blog"
              className="mb-10 inline-flex items-center gap-2 text-sm text-metallic transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Tous les articles
            </Link>
            <p className="mb-4 text-xs font-medium tracking-widest text-accent uppercase">{post.category}</p>
            <h1 className="font-semibold tracking-tight text-display-sm leading-tight text-foreground">{post.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-metallic-light">{post.description}</p>
            <p className="mt-6 border-b border-[rgb(var(--overlay)/10%)] pb-8 text-sm text-metallic">
              Publié le <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && post.updated !== post.date && (
                <>
                  {' '}
                  · mis à jour le <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              )}{' '}
              · {post.readingMinutes} min de lecture
            </p>
          </Reveal>

          <Reveal onMount delay={0.15}>
            {/* Contenu Markdown du dépôt, relu en PR avant publication. */}
            <div className="blog-prose mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Reveal>

          {study && (
            <Reveal className="mt-14">
              <Link
                href={`/projets/${study.slug}`}
                className="card-surface group block rounded-2xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] p-7 transition-colors hover:border-[rgb(var(--overlay)/20%)] hover:bg-[rgb(var(--overlay)/5%)]"
              >
                <p className="mb-2 text-xs font-medium tracking-widest text-accent uppercase">Exemple réel</p>
                <p className="mb-2 text-lg font-semibold tracking-tight text-foreground">{study.name}</p>
                <p className="mb-4 leading-relaxed text-metallic-light">{study.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Lire l&apos;étude de cas
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          )}

          {others.length > 0 && (
            <Reveal className="mt-14">
              <p className="mb-5 text-xs font-medium tracking-widest text-accent uppercase">À lire aussi</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="rounded-2xl border border-[rgb(var(--overlay)/10%)] p-5 transition-colors hover:border-[rgb(var(--overlay)/20%)] hover:bg-[rgb(var(--overlay)/3%)]"
                  >
                    <p className="mb-1 text-xs text-metallic">{p.category}</p>
                    <p className="font-medium text-foreground">{p.title}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </article>
      <CTABand />
    </>
  )
}
