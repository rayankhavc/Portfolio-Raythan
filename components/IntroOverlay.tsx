'use client'
import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ease } from '@/lib/motion-variants'

const LETTERS = 'Raythan'.split('')
// Sortie automatique à 1.8s : lettres + soulignement + label sont posés,
// le fade de 0.45s amène le total à ~2.25s, sous le plafond des 2.5s.
const AUTO_DISMISS_MS = 1800

// idle : premier rendu (identique au SSR), rien ne bouge tant que la
// présence de data-intro n'est pas vérifiée. off : overlay retiré.
type Phase = 'idle' | 'playing' | 'leaving' | 'off'

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease, delay: 0.15 + i * 0.07 },
  }),
}

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease, delay: 0.75 } },
}

const labelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease, delay: 0.95 } },
}

export function IntroOverlay() {
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    const root = document.documentElement
    if (!root.hasAttribute('data-intro')) {
      setPhase('off')
      return
    }
    try {
      sessionStorage.setItem('rwd-intro', '1')
    } catch {}
    // Filet de sécurité si la préférence a changé depuis le script d'entrée
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.removeAttribute('data-intro')
      setPhase('off')
      return
    }
    setPhase('playing')
  }, [])

  useEffect(() => {
    if (phase !== 'playing') return
    const dismiss = () => setPhase('leaving')
    const timer = setTimeout(dismiss, AUTO_DISMISS_MS)
    window.addEventListener('keydown', dismiss)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('keydown', dismiss)
    }
  }, [phase])

  if (phase === 'off') return null

  return (
    <motion.div
      id="intro-overlay"
      aria-hidden="true"
      initial={false}
      animate={{ opacity: phase === 'leaving' ? 0 : 1 }}
      transition={{ duration: 0.45, ease }}
      onAnimationComplete={() => {
        if (phase !== 'leaving') return
        document.documentElement.removeAttribute('data-intro')
        setPhase('off')
      }}
      onClick={() => setPhase((p) => (p === 'playing' ? 'leaving' : p))}
      className="fixed inset-0 z-[100] items-center justify-center bg-background"
    >
      <motion.div
        initial="hidden"
        animate={phase === 'idle' ? 'hidden' : 'visible'}
        className="flex flex-col items-center gap-5 px-6"
      >
        <div className="flex">
          {LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="text-6xl md:text-8xl font-semibold tracking-tight text-foreground"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div
          variants={lineVariants}
          className="h-px w-full origin-left bg-white/20"
        />
        <motion.p
          variants={labelVariants}
          className="text-xs uppercase tracking-[0.35em] text-metallic"
        >
          Web Design
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
