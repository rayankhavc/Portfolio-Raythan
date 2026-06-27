'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden bg-[#080808]">
      {/* Glow subtil — pas de grain, pas de texture */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#C8FF00]/[0.03] blur-[150px]" />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs text-zinc-400 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
          Disponible pour nouveaux projets
        </motion.div>

        {/* Titre */}
        <div className="mb-6" style={{ perspective: '1000px' }}>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.0] tracking-tight"
          >
            {['Votre', 'présence', 'digitale,'].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.2em]"
                variants={{
                  hidden: { opacity: 0, y: 60, rotateX: -30 },
                  visible: {
                    opacity: 1, y: 0, rotateX: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              className="inline-block text-[#C8FF00]"
              variants={{
                hidden: { opacity: 0, y: 60, rotateX: -30 },
                visible: {
                  opacity: 1, y: 0, rotateX: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
                },
              }}
            >
              réinventée.
            </motion.span>
          </motion.h1>
        </div>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          Sites web, SEO, réseaux sociaux, publicité, automatisation et IA —
          tout ce dont votre business a besoin pour dominer en ligne.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="https://cal.com/rayankhavc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8FF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors duration-200 text-sm"
          >
            <CalendarDays size={16} />
            Prendre RDV
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-white/15 text-white font-medium px-6 py-3 rounded-full hover:border-white/40 transition-colors duration-200 text-sm"
          >
            Voir nos services
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-white/8"
        >
          {[
            { value: '7+', label: 'Projets livrés' },
            { value: '2', label: 'Apps en production' },
            { value: '100%', label: 'Remote France' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="font-syne font-bold text-xl text-white">{value}</span>
              <span className="text-xs text-zinc-600">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
