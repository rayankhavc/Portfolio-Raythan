'use client'
import { useState } from 'react'

// mailto:/tel: dépendent d'une appli réglée par défaut sur l'appareil du
// visiteur — absente, le clic ne fait rien de visible. La copie presse-papier
// garantit un résultat utile dans tous les cas, en plus de la tentative
// normale d'ouverture.
export function CopyableLink({
  href,
  label,
  copyValue,
  className,
}: {
  href: string
  label: string
  copyValue: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    navigator.clipboard?.writeText(copyValue).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }

  return (
    <span className="inline-flex items-center gap-2">
      <a href={href} onClick={handleClick} className={className}>
        {label}
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
