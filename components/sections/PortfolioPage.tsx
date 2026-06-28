'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'
import { CTABand } from '@/components/sections/CTABand'

export function PortfolioPage() {
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
            {["Ce qu'on", 'a livré.'].map((w, i) => (
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
            Des apps web en production — du code propre, pas des mockups.
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
            viewport={{ once: false, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {PROJECTS.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Link
                  href={`/projets/${project.slug}`}
                  className="group block rounded-3xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#C8FF00]/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-[#111] relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
                      />
                    ) : (
                      /* Placeholder élégant si pas encore de screenshot */
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <span className="font-syne font-black text-6xl text-white/10 group-hover:text-white/20 transition-colors">
                          {project.title.charAt(0)}
                        </span>
                        <span className="text-xs text-zinc-700">Screenshot bientôt</span>
                      </div>
                    )}

                    {/* Overlay gradient bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Badge Live */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
                      <span className="text-xs text-white font-medium">{project.status}</span>
                    </div>

                    {/* Arrow top right */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <div className="w-8 h-8 rounded-full bg-[#C8FF00] flex items-center justify-center">
                        <ArrowUpRight size={14} className="text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-syne font-bold text-white text-2xl">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-zinc-700 group-hover:text-[#C8FF00] transition-colors shrink-0 mt-1"
                      />
                    </div>

                    <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="text-xs border border-[#C8FF00]/30 text-[#C8FF00] px-2.5 py-1 rounded-full">
                        {project.type}
                      </span>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-white/8 text-zinc-600 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Note "En cours de construction" */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="text-center text-zinc-700 text-sm mt-10"
          >
            D'autres projets arrivent bientôt ✦
          </motion.p>
        </div>
      </section>

      <CTABand />
    </>
  )
}
