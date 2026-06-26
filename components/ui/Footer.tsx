import Link from 'next/link'

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          href="/"
          className="font-syne font-bold text-sm tracking-[0.2em] uppercase text-white"
        >
          RAYTHAN
        </Link>

        <nav className="flex items-center gap-6">
          {LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:raythanwebdesign@gmail.com"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            raythanwebdesign@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center">
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Raythan Web Design. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
