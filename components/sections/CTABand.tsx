'use client'
import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CTABand() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 md:px-16 text-center overflow-hidden"
        >
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-accent/[0.06] blur-[80px] rounded-full" />
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
            Prêt à démarrer ?
          </p>
          <h2 className="font-semibold tracking-tight text-4xl md:text-6xl text-foreground mb-4 leading-tight">
            Un projet en tête ?
          </h2>
          <p className="text-metallic text-lg max-w-md mx-auto mb-10">
            Réservez un appel gratuit. On analyse votre situation et on vous dit exactement ce qu'on peut faire.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/rayankhavc"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-full text-sm"
            >
              <CalendarDays size={16} />
              Réserver un appel gratuit
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/15 text-foreground font-medium px-8 py-4 rounded-full hover:border-white/40 transition-colors duration-300 text-sm"
            >
              Envoyer un message <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
