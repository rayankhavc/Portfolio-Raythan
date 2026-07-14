'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/motion-variants'

const STEPS = [
  {
    number: '01',
    title: 'Appel découverte',
    description: '30 minutes, gratuit. On parle de votre activité, vos objectifs, vos contraintes. Sans jargon, sans pression.',
  },
  {
    number: '02',
    title: 'Devis clair sous 48h',
    description: 'Un chiffrage précis et sans surprise, adapté à votre projet réel, pas à un forfait générique.',
  },
  {
    number: '03',
    title: 'Développement accompagné par l\'IA',
    description: 'Une technologie récente mais qui a déjà fait ses preuves sur nos projets en production, toujours relue et ajustée à la main.',
  },
  {
    number: '04',
    title: 'Mise en ligne et accompagnement',
    description: 'Le site est à vous. On reste disponible pour les évolutions, quand vous en avez besoin.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
            Notre méthode
          </p>
          <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight mb-4">
            Comment ça se passe.
          </h2>
          <p className="text-metallic-light leading-relaxed">
            Une méthode simple, où l'IA accélère le travail sans jamais remplacer l'attention portée à votre projet.
          </p>
        </div>

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STEPS.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-4xl font-semibold bg-gradient-to-br from-foreground to-metallic-light bg-clip-text text-transparent">
                {step.number}
              </span>
              <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
              <p className="text-metallic text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
