import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { ProjectGallery } from '@/components/ProjectGallery'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.name,
    description: project.tagline,
    alternates: {
      canonical: `https://portfolioraythanwebdesign.vercel.app/projets/${project.slug}`,
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-metallic hover:text-foreground transition-colors text-sm mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Retour au portfolio
        </Link>

        <div className="flex items-center gap-2 mb-6">
          <span className="flex items-center gap-1.5 text-xs text-metallic-light border border-white/10 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {project.status}
          </span>
          <span className="text-xs text-metallic-light border border-white/15 px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        <h1 className="font-semibold tracking-tight text-6xl md:text-8xl text-foreground mb-4 leading-none">
          {project.name}
        </h1>

        <p className="text-metallic-light text-xl leading-relaxed mb-8">
          {project.tagline}
        </p>

        <p className="text-metallic-light text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        {project.images && project.images.length > 0 && (
          <ProjectGallery images={project.images} name={project.name} />
        )}

        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 mb-6">
          <p className="text-xs text-metallic uppercase tracking-widest mb-4">Ce que ça fait</p>
          <ul className="space-y-3">
            {project.details.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="text-metallic-light shrink-0 mt-0.5">·</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 mb-10">
          <p className="text-xs text-metallic uppercase tracking-widest mb-4">Ce que ça apporte</p>
          <p className="text-sm text-foreground/80 leading-relaxed">{project.valueAdded}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full text-base"
            >
              {project.cta}
              <ArrowUpRight size={16} />
            </a>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/15 text-foreground font-medium px-8 py-4 rounded-full hover:border-white/40 transition-colors text-base"
          >
            Projet similaire ?
          </Link>
        </div>

      </div>
    </main>
  )
}
