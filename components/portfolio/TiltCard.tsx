'use client'
import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/* Inclinaison « physique » au survol : le curseur pousse la carte, des
   springs la ramènent. Transform uniquement (zéro CLS), amplitude faible
   pour rester dans le registre posé du site, désactivé avec
   prefers-reduced-motion et sans effet sur écran tactile (pas de pointer
   move continu). */
const MAX_TILT = 3.5

export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const springRx = useSpring(rx, { stiffness: 160, damping: 18, mass: 0.6 })
  const springRy = useSpring(ry, { stiffness: 160, damping: 18, mass: 0.6 })

  const onPointerMove = (e: React.PointerEvent) => {
    if (prefersReducedMotion || e.pointerType !== 'mouse' || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rx.set(-py * MAX_TILT * 2)
    ry.set(px * MAX_TILT * 2)
  }

  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      style={
        prefersReducedMotion
          ? undefined
          : { rotateX: springRx, rotateY: springRy, transformPerspective: 1100 }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
