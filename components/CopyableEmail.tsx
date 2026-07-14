'use client'
import { useState } from 'react'

const EMAIL = 'raythanwebdesign@gmail.com'

// mailto: dépend d'un client mail réglé par défaut sur l'appareil du visiteur —
// absent, le clic ne fait rien de visible. La copie presse-papier garantit un
// résultat utile dans tous les cas, en plus de la tentative mailto normale.
export function CopyableEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard?.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }

  return (
    <span className="inline-flex items-center gap-2">
      <a href={`mailto:${EMAIL}`} onClick={handleClick} className={className}>
        {EMAIL}
      </a>
      <span
        aria-live="polite"
        className={`text-xs text-metallic-light transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
      >
        Copié
      </span>
    </span>
  )
}
