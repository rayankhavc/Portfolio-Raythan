'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Monitor, BarChart3, Zap, ArrowRight,
} from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor, BarChart3, Zap,
}

export function ServicesOverview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
              Ce qu'on fait
            </p>
            <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight">
              Une agence digitale<br />
              <span className="text-metallic">complète.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-metallic-light hover:text-foreground transition-colors shrink-0"
          >
            Voir tous les services <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards grid — chaque card redirige vers /services */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
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
              >
                <Link
                  href="/services"
                  className="card-surface group relative p-6 rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] hover:bg-[rgb(var(--overlay)/6%)] hover:border-[rgb(var(--overlay)/20%)] transition-all duration-500 flex flex-col h-full cursor-pointer block"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] flex items-center justify-center mb-4 group-hover:border-[rgb(var(--overlay)/20%)] transition-colors duration-500">
                    {Icon && <Icon size={18} className="text-metallic-light" />}
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-metallic text-sm mb-4">{service.tagline}</p>

                  {/* Benefits preview */}
                  <ul className="space-y-1.5 flex-1">
                    {service.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-metallic">
                        <span className="text-metallic-light shrink-0 mt-0.5">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow always visible on hover */}
                  <div className="flex items-center gap-1 mt-4 text-xs text-metallic group-hover:text-accent transition-colors duration-500">
                    En savoir plus <ArrowRight size={12} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
