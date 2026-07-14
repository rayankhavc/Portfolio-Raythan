'use client'
import { motion } from 'framer-motion'
import {
  Monitor, TrendingUp, Share2, BarChart3, Zap, Brain, Check,
} from 'lucide-react'
import { SERVICES, type Service } from '@/lib/data'
import { CTABand } from '@/components/sections/CTABand'
import { ease, slideFromLeft, slideFromRight } from '@/lib/motion-variants'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor, TrendingUp, Share2, BarChart3, Zap, Brain,
}

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/3 w-[600px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-accent text-xs font-medium tracking-widest uppercase mb-4"
          >
            Ce qu'on fait
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-semibold tracking-tight text-5xl md:text-7xl text-foreground leading-tight mb-6"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="text-metallic-light text-xl max-w-xl leading-relaxed"
          >
            Tout ce dont votre business a besoin pour exister, grandir et convertir en ligne sous un même toit.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="pb-8 px-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {SERVICES.map((service: Service, i: number) => {
            const Icon = ICON_MAP[service.icon]
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={service.id}
                variants={isEven ? slideFromLeft : slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="group rounded-3xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div className={`flex flex-col md:flex-row gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Left / Right color strip */}
                  <div className="md:w-2 bg-gradient-to-b from-white/15 to-transparent shrink-0 h-1 md:h-auto w-full" />

                  <div className="p-8 md:p-10 flex-1">
                    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                      {/* Icon + Title */}
                      <div className="md:w-64 shrink-0">
                        <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-4 group-hover:border-white/20 transition-colors duration-500">
                          {Icon && <Icon size={20} className="text-metallic-light" />}
                        </div>
                        <h2 className="font-semibold tracking-tight text-2xl text-foreground mb-1">
                          {service.title}
                        </h2>
                        <p className="text-metallic text-sm">{service.tagline}</p>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-metallic-light leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Benefits */}
                        <div className="mb-6">
                          <p className="text-xs text-metallic uppercase tracking-widest mb-3">
                            Ce que ça vous apporte
                          </p>
                          <ul className="space-y-2">
                            {service.benefits.map((b: string, j: number) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                                <Check size={14} className="text-accent shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Sectors */}
                        <div>
                          <p className="text-xs text-metallic uppercase tracking-widest mb-3">
                            Secteurs cibles
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.sectors.map((s: string) => (
                              <span
                                key={s}
                                className="text-xs text-metallic border border-white/10 px-3 py-1 rounded-full"
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

      <CTABand />
    </>
  )
}
