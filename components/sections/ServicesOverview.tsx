'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Monitor, TrendingUp, Share2, BarChart3, Zap, Brain, ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor, TrendingUp, Share2, BarChart3, Zap, Brain,
}

export function ServicesOverview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#C8FF00] text-xs font-medium tracking-widest uppercase mb-3">
              Ce qu'on fait
            </p>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
              Une agence digitale<br />
              <span className="text-zinc-500">complète.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors shrink-0"
          >
            Voir tous les services <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-default"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-[#C8FF00]/10 flex items-center justify-center mb-4 group-hover:bg-[#C8FF00]/20 transition-colors">
                  {Icon && <Icon size={18} className="text-[#C8FF00]" />}
                </div>

                {/* Content */}
                <h3 className="font-syne font-semibold text-white text-lg mb-1">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-4">{service.tagline}</p>

                {/* Benefits preview */}
                <ul className="space-y-1.5">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-600">
                      <span className="text-[#C8FF00] shrink-0 mt-0.5">→</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Arrow on hover */}
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={14} className="text-zinc-500" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
