'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { SECTORS } from '@/lib/data'

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const prefersReducedMotion = useReducedMotion()
  const items = [...SECTORS, ...SECTORS]

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-8 shrink-0"
        animate={
          prefersReducedMotion ? undefined : { x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }
        }
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {[...items, ...items].map((sector, i) => (
          <span
            key={i}
            className="shrink-0 flex items-center gap-8 text-sm font-medium text-metallic uppercase tracking-widest"
          >
            {sector}
            <span className="text-metallic-light">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function MarqueeSection() {
  return (
    <section className="py-6 border-y border-[rgb(var(--overlay)/8%)] overflow-hidden">
      <MarqueeTrack />
    </section>
  )
}
