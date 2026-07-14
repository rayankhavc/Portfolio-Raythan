'use client'
import { motion } from 'framer-motion'
import { ease } from '@/lib/motion-variants'

// Transition de page : fondu + léger glissement vertical.
// Transform + opacity uniquement — aucun impact layout (CLS), et le fond
// reste --background pendant toute la transition (pas de flash de couleur).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {children}
    </motion.div>
  )
}
