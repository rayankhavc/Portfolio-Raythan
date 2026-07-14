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
  const cardsY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

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

      <div className="relative max-w-6xl mx-auto w-full lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div>
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
            className="font-semibold text-display-lg leading-[1.05] tracking-tight mb-6"
          >
            Votre présence digitale,
            <br />
            <span className="bg-gradient-to-r from-foreground to-metallic-light bg-clip-text text-transparent">
              réinventée.
            </span>
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

          {/* Devis gratuit */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.75 }}
            className="text-xs text-metallic mt-4"
          >
            Devis gratuit · Réponse sous 48h
          </motion.p>

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

        {/* Visuel abstrait — composition de cartes superposées, même registre
            que le monogramme de l'intro. Pas de photo produit tant que le
            portfolio n'est pas rebranché. */}
        <motion.div
          style={prefersReducedMotion ? undefined : { y: cardsY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
          className="relative hidden lg:flex items-center justify-center h-[420px]"
        >
          <div className="absolute w-64 h-80 rounded-3xl border border-white/8 bg-white/[0.02] rotate-6 translate-x-10 translate-y-6" />
          <div className="absolute w-64 h-80 rounded-3xl border border-white/10 bg-white/[0.03] -rotate-3 -translate-x-6" />
          <div className="relative w-64 h-80 rounded-3xl border border-white/15 bg-card flex flex-col items-center justify-center gap-4">
            <span className="text-7xl font-semibold bg-gradient-to-br from-foreground to-metallic-light bg-clip-text text-transparent">
              R
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-metallic">Web Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
