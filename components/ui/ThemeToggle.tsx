'use client'
import { Sun, Moon } from 'lucide-react'

const STORAGE_KEY = 'rwd-theme'

// Les deux icônes sont toujours dans le DOM ; seule la classe CSS
// (theme-icon-sun / theme-icon-moon, définie dans globals.css selon
// html[data-theme]) décide laquelle s'affiche. Aucun état React à
// resynchroniser au montage, donc aucun flash d'icône incorrecte.
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Changer de thème (clair / sombre)"
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[rgb(var(--overlay)/10%)] text-metallic-light hover:text-foreground hover:border-[rgb(var(--overlay)/20%)] transition-colors duration-300 shrink-0"
    >
      <Sun size={16} className="theme-icon-sun" />
      <Moon size={16} className="theme-icon-moon" />
    </button>
  )
}
