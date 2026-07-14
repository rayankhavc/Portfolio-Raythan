import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6">
      <p className="text-accent text-xs font-medium tracking-widest uppercase">Erreur 404</p>
      <h1 className="font-semibold tracking-tight text-4xl md:text-6xl text-foreground">
        Page introuvable
      </h1>
      <p className="text-metallic-light max-w-md">
        Cette page n'existe pas ou plus. Retournez à l'accueil pour continuer votre navigation.
      </p>
      <Link
        href="/"
        className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full text-sm"
      >
        Retour à l'accueil
      </Link>
    </main>
  )
}
