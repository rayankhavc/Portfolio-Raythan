'use client'
import { motion } from 'framer-motion'

interface AnimatedTitleProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3'
  accent?: string // word to highlight in accent color
}

export function AnimatedTitle({ text, className, as = 'h1', accent }: AnimatedTitleProps) {
  const Tag = as
  const words = text.split(' ')

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className={`inline-block mr-[0.3em] ${
              accent && word.toLowerCase().includes(accent.toLowerCase())
                ? 'text-[#C8FF00]'
                : ''
            }`}
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { opacity: 0, y: 60, rotateX: -30 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
