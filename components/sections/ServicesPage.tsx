'use client'
import { motion } from 'framer-motion'
import {
  Monitor, TrendingUp, Share2, BarChart3, Zap, Brain, Check,
} from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { CTABand } from '@/components/sections/CTABand'
import { staggerContainer, fadeUp, slideFromLeft, slideFromRight } from '@/lib/motion-variants'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor, TrendingUp, Share2, BarChart3, Zap, Brain,
}

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] bg-[#C8FF00]/5 blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C8FF00] text-xs font-medium tracking-widest uppercase mb-4"
          >
            Ce qu'on fait
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="font-syne font-extrabold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            {['Nos', 'Services'].map((w, i) => (
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
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-zinc-400 text-xl max-w-xl leading-relaxed"
          >
            Tout ce dont votre business a besoin pour exister, grandir et convertir en ligne — sous un même toit.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={service.id}
                variants={isEven ? slideFromLeft : slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: '-60px' }}
                className="group rounded-3xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div className={`flex flex-col md:flex-row gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Left / Right color strip */}
                  <div className="md:w-2 bg-gradient-to-b from-[#C8FF00]/60 to-transparent shrink-0 h-1 md:h-auto w-full" />

                  <div className="p-8 md:p-10 flex-1">
                    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                      {/* Icon + Title */}
                      <div className="md:w-64 shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-[#C8FF00]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8FF00]/20 transition-colors">
                          {Icon && <Icon size={20} className="text-[#C8FF00]" />}
                        </div>
                        <h2 className="font-syne font-bold text-2xl text-white mb-1">
                          {service.title}
                        </h2>
                        <p className="text-zinc-500 text-sm">{service.tagline}</p>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-zinc-400 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Benefits */}
                        <div className="mb-6">
                          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">
                            Ce que ça vous apporte
                          </p>
                          <ul className="space-y-2">
                            {service.benefits.map((b, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                                <Check size={14} className="text-[#C8FF00] shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Sectors */}
                        <div>
                          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">
                            Secteurs cibles
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.sectors.map((s) => (
                              <span
                                key={s}
                                className="text-xs text-zinc-500 border border-white/10 px-3 py-1 rounded-full"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      <div className="mt-16">
        <CTABand />
      </div>
    </>
  )
}
