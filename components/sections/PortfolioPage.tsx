'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'
import { CTABand } from '@/components/sections/CTABand'

const FILTERS = ['Tous', 'Web App', 'No-Code'] as const
type Filter = (typeof FILTERS)[number]

export function PortfolioPage() {
  const [active, setActive] = useState<Filter>('Tous')

  const filtered = active === 'Tous'
    ? PROJECTS
    : PROJECTS.filter((p) => p.type === active)

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-1/3 w-[500px] h-[350px] bg-[#C8FF00]/5 blur-[100px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8FF00] text-xs font-medium tracking-widest uppercase mb-4"
          >
            Nos réalisations
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="font-syne font-extrabold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            {['Ce qu\'on', 'a livré.'].map((w, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -30 },
                  visible: {
                    opacity: 1, y: 0, rotateX: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-xl max-w-lg leading-relaxed"
          >
            Sites, apps et outils digitaux — du concret, pas des mockups.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === f
                    ? 'bg-[#C8FF00] text-black'
                    : 'border border-white/10 text-zinc-500 hover:text-white hover:border-white/25'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-xs text-zinc-600">
              {filtered.length} projet{filtered.length > 1 ? 's' : ''}
            </span>
          </div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer(0.08, 0)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  layout
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Link
                    href={`/projets/${project.slug}`}
                    className="group block rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 overflow-hidden"
                  >
                    {/* Image or placeholder */}
                    <div className="aspect-[16/9] bg-zinc-900 relative overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-syne font-bold text-4xl text-zinc-800 group-hover:text-zinc-700 transition-colors">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="flex items-center gap-1 text-white text-xs font-medium">
                          Voir le projet <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-syne font-semibold text-white text-lg">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={14}
                          className="text-zinc-600 group-hover:text-[#C8FF00] transition-colors"
                        />
                      </div>
                      <p className="text-zinc-500 text-sm mb-3">{project.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs border border-white/10 px-2.5 py-1 rounded-full text-zinc-600">
                          {project.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-zinc-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
