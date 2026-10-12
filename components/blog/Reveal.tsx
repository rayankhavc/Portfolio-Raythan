'use client'
import { motion } from 'framer-motion'
import { ease } from '@/lib/motion-variants'

// Fondu d'entrée commun aux pages du blog, mêmes réglages que le reste du
// site : une fois, transform/opacity uniquement, réduit par MotionConfig.
export function Reveal({
  children,
  delay = 0,
  className,
  onMount = false,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  /** Au chargement (haut de page) plutôt qu'à l'entrée dans le viewport. */
  onMount?: boolean
}) {
  const target = { opacity: 1, y: 0 }
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      {...(onMount ? { animate: target } : { whileInView: target, viewport: { once: true, margin: '-80px' } })}
      transition={{ duration: 0.8, ease, delay }}
      className={`reveal ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}
