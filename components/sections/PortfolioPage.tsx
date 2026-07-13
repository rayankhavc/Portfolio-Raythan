'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, type Project } from '@/lib/data'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'
import { CTABand } from '@/components/sections/CTABand'

const ease = [0.22, 1, 0.36, 1] as const

function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <motion.div variants={fadeUp} className={featured ? 'md:col-span-2' : ''}>
      <Link
        href={`/projets/${project.slug}`}
        className="group block rounded-3xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden"
      >
        {/* Image */}
        <div className={`${featured ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[16/9]'} bg-card relative overflow-hidden`}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
            />
          ) : (
            /* Placeholder élégant si pas encore de screenshot */
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="font-semibold text-6xl text-white/10 group-hover:text-white/20 transition-colors">
                {project.name.charAt(0)}
              </span>
              <span className="text-xs text-metallic">Screenshot bientôt</span>
            </div>
          )}

          {/* Overlay gradient bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge statut */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-background/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-foreground font-medium">{project.status}</span>
          </div>

          {/* Arrow top right */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <ArrowUpRight size={14} className="text-accent-foreground" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-semibold tracking-tight text-foreground text-2xl">
              {project.name}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-metallic group-hover:text-accent transition-colors shrink-0 mt-1"
            />
          </div>

          <p className="text-metallic text-sm leading-relaxed mb-4">
            {project.tagline}
          </p>

          {/* Tags */}
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-xs border border-white/15 text-metallic-light px-2.5 py-1 rounded-full">
              {project.type}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-white/8 text-metallic px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function PortfolioPage() {
  const ordered = [...PROJECTS].sort((a, b) => Number(b.featured) - Number(a.featured))

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-1/3 w-[500px] h-[350px] bg-accent/[0.04] blur-[100px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-accent text-xs font-medium tracking-widest uppercase mb-4"
          >
            Nos réalisations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-semibold tracking-tight text-5xl md:text-7xl text-foreground leading-tight mb-6"
          >
            Ce qu'on a livré.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="text-metallic-light text-xl max-w-lg leading-relaxed"
          >
            Sites et applications en production.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {ordered.map((project) => (
              <ProjectCard key={project.slug} project={project} featured={project.featured} />
            ))}
          </motion.div>

          {/* Note "En cours de construction" */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center text-metallic text-sm mt-10"
          >
            D'autres projets arrivent bientôt
          </motion.p>
        </div>
      </section>

      <CTABand />
    </>
  )
}
