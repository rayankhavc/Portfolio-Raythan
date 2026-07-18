'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Réalisations' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

// Ressort commun à la contraction du header au scroll : assez raide pour
// rester posé (pas de rebond exagéré), assez vif pour se sentir physique.
const barSpring = { type: 'spring' as const, stiffness: 340, damping: 32, mass: 0.9 }

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const spring = prefersReducedMotion ? { duration: 0 } : barSpring

  return (
    <>
      {/* Header plein largeur en haut de page, devient une pilule flottante
          au scroll : le padding du header (l'inset) et la géométrie de la
          barre (largeur max, rayon, hauteur, échelle du logo) s'animent au
          ressort. Fixed : aucun impact sur le flux du document, zéro CLS.
          Couleur/flou/bordure restent en transition CSS classique, déjà le
          pattern du site ailleurs. */}
      <motion.header
        animate={{
          paddingTop: scrolled ? 12 : 0,
          paddingLeft: scrolled ? 12 : 0,
          paddingRight: scrolled ? 12 : 0,
        }}
        transition={spring}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      >
        <motion.div
          animate={{
            maxWidth: scrolled ? 880 : 1152,
            borderRadius: scrolled ? 9999 : 0,
          }}
          transition={spring}
          className={`w-full transition-colors duration-300 ${
            scrolled
              ? 'card-surface border border-[rgb(var(--overlay)/10%)] bg-background/90 md:bg-background/70 md:backdrop-blur-xl'
              : 'bg-transparent'
          }`}
        >
          <motion.nav
            animate={{ height: scrolled ? 52 : 64 }}
            transition={spring}
            className="max-w-6xl mx-auto px-6 flex items-center justify-between"
          >
            {/* Logo */}
            <motion.div
              animate={{ scale: scrolled ? 0.88 : 1 }}
              transition={spring}
              style={{ transformOrigin: 'left center' }}
            >
              <Link href="/" className="flex items-center gap-2">
                <Logo className="w-10 h-10 shrink-0" />
                <span className="whitespace-nowrap text-sm font-medium text-foreground">
                  Raythan Web Design
                </span>
              </Link>
            </motion.div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-medium transition-colors relative group ${
                    pathname === href ? 'text-foreground' : 'text-metallic hover:text-foreground'
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA desktop */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://cal.com/rayankhavc"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-full"
              >
                Prendre RDV
              </a>
            </div>

            {/* Mobile: toggle thème + menu */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                className="text-foreground p-1"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.nav>
        </motion.div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="https://cal.com/rayankhavc"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground text-base font-semibold px-6 py-3 rounded-full"
              >
                Prendre RDV
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
