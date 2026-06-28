import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-[#080808] pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Retour au portfolio
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1.5 text-xs text-zinc-500 border border-white/10 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
              {project.status}
            </span>
            <span className="text-xs text-[#C8FF00] border border-[#C8FF00]/30 px-3 py-1 rounded-full">
              {project.type}
            </span>
          </div>

          <h1 className="font-syne font-extrabold text-5xl md:text-7xl text-white mb-4">
            {project.title}
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image principale */}
        <div className="rounded-3xl border border-white/8 overflow-hidden aspect-[16/9] bg-[#111] relative mb-10">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-syne font-black text-8xl text-white/5">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Tags + CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-white/10 text-zinc-500 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8FF00] text-black font-semibold px-5 py-2.5 rounded-full hover:bg-white transition-colors text-sm"
          >
            Projet similaire ?
            <ExternalLink size={13} />
          </Link>
        </div>

      </div>
    </main>
  )
}
