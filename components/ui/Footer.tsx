import Link from 'next/link'
import { CopyableLink } from '@/components/CopyableLink'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
]

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--overlay)/8%)] bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo + baseline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="w-9 h-9 shrink-0" />
            <span className="whitespace-nowrap text-sm font-medium text-foreground">
              Raythan Web Design
            </span>
          </Link>
            <p className="text-metallic text-sm leading-relaxed max-w-xs">
              Agence digitale indépendante à Nantes : sites web, automatisation et IA, publicité Google et Meta.
            </p>
            <CopyableLink
              href="mailto:raythanwebdesign@gmail.com"
              label="raythanwebdesign@gmail.com"
              copyValue="raythanwebdesign@gmail.com"
              className="text-sm text-metallic-light hover:text-accent transition-colors"
            />
            <CopyableLink
              href="tel:+33651598293"
              label="06 51 59 82 93"
              copyValue="06 51 59 82 93"
              className="text-sm text-metallic-light hover:text-accent transition-colors"
            />
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-metallic uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-metallic hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs text-metallic uppercase tracking-widest mb-4">Démarrer</p>
            <p className="text-sm text-metallic mb-4 leading-relaxed">
              Un projet en tête ? Réservons un appel, devis gratuit à la clé.
            </p>
            <a
              href="https://cal.com/rayankhavc"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-2.5 rounded-full"
            >
              Prendre RDV →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgb(var(--overlay)/5%)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-metallic">
            © {new Date().getFullYear()} Raythan Web Design. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-metallic hover:text-metallic-light transition-colors"
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
