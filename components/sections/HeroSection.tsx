'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { ease } from '@/lib/motion-variants'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Halo très subtil, parallax doux au scroll */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: glowY }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-accent/[0.04] blur-[150px]"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs text-metallic-light mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Disponible pour nouveaux projets
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6"
        >
          Votre présence digitale,
          <br />
          <span className="text-accent">réinventée.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.45 }}
          className="text-metallic-light text-lg md:text-xl max-w-xl leading-relaxed mb-10"
        >
          Sites web, SEO, réseaux sociaux, publicité, automatisation et IA.
          Tout ce dont votre business a besoin pour dominer en ligne.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
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
            href="/services"
            className="inline-flex items-center gap-2 border border-white/15 text-foreground font-medium px-6 py-3 rounded-full hover:border-white/40 transition-colors duration-300 text-sm"
          >
            Voir nos services
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-white/8"
        >
          {[
            { value: '10', label: 'Projets développés' },
            { value: '100%', label: 'Clients satisfaits' },
            { value: '5-15 j', label: 'Délai de livraison' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="font-semibold text-xl text-foreground">{value}</span>
              <span className="text-xs text-metallic">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
