'use client'
import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ease } from '@/lib/motion-variants'

const LETTERS = 'Raythan'.split('')
// Sortie automatique à 2.3s (+0.5s demandé par Rayan par rapport à la
// version initiale à 1.8s) : lettres + soulignement + label sont posés,
// le fade de 0.45s amène le total à ~2.75s.
const AUTO_DISMISS_MS = 2300

// playing : rendu initial identique au serveur (shouldPlay=true), l'overlay
// est déjà dans le HTML envoyé, aucun JS requis pour qu'il couvre l'écran.
// leaving : fade de sortie. off : overlay retiré du DOM.
type Phase = 'playing' | 'leaving' | 'off'

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

export function IntroOverlay({ shouldPlay }: { shouldPlay: boolean }) {
  // shouldPlay vient du cookie lu côté serveur : identique au premier rendu
  // client, donc aucun mismatch d'hydratation possible.
  const [phase, setPhase] = useState<Phase>(shouldPlay ? 'playing' : 'off')

  useEffect(() => {
    if (phase !== 'playing') return
    document.documentElement.style.overflow = 'hidden'
    // Filet de sécurité si la préférence a changé depuis le rendu serveur.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.overflow = ''
      try {
        document.cookie = 'rwd-intro=1; path=/; SameSite=Lax'
      } catch {}
      setPhase('off')
      return
    }
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
        document.documentElement.style.overflow = ''
        try {
          document.cookie = 'rwd-intro=1; path=/; SameSite=Lax'
        } catch {}
        setPhase('off')
      }}
      onClick={() => setPhase((p) => (p === 'playing' ? 'leaving' : p))}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <motion.div
        initial="hidden"
        animate="visible"
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
          className="h-px w-full origin-left bg-[rgb(var(--overlay)/20%)]"
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
