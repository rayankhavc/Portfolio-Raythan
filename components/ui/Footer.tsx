import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo + baseline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-raythan.png"
                alt="Raythan Web Design"
                width={40}
                height={40}
                className="object-contain shrink-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            <span className="whitespace-nowrap text-sm font-medium text-white">
              Raythan Web Design
            </span>
          </Link>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-xs">
              Agence digitale indépendante — sites web, SEO, pub, automatisation et IA métier.
            </p>
            <a
              href="mailto:raythanwebdesign@gmail.com"
              className="text-sm text-zinc-400 hover:text-[#C8FF00] transition-colors"
            >
              raythanwebdesign@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">Démarrer</p>
            <p className="text-sm text-zinc-500 mb-4 leading-relaxed">
              Un projet en tête ? Réservons un appel de 30 min, gratuit.
            </p>
            <a
              href="https://cal.com/rayankhavc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8FF00] text-black text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-white transition-colors"
            >
              Prendre RDV →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Raythan Web Design. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
