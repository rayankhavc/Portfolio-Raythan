'use client'
import { motion } from 'framer-motion'
import { Rocket, Code2, Target } from 'lucide-react'
import { WHY_RAYTHAN } from '@/lib/data'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Rocket, Code2, Target,
}

export function WhyRaythan() {
  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-[#C8FF00] text-xs font-medium tracking-widest uppercase mb-3">
            Pourquoi nous
          </p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white leading-tight">
            Pas une agence<br />
            <span className="text-zinc-500">comme les autres.</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {WHY_RAYTHAN.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <motion.div key={i} variants={fadeUp} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center">
                  {Icon && <Icon size={20} className="text-[#C8FF00]" />}
                </div>
                <div>
                  <h3 className="font-syne font-semibold text-white text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="h-px bg-gradient-to-r from-[#C8FF00]/30 to-transparent" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
