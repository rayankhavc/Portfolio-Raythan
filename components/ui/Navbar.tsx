'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 md:bg-background/70 md:backdrop-blur-xl border-b border-[rgb(var(--overlay)/8%)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo className="w-10 h-10 shrink-0" />
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              Raythan Web Design
            </span>
          </Link>
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
        </nav>
      </header>

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
