// Badge : tuile arrondie + R en aplat. Couleurs sur --accent/--accent-foreground,
// donc thémable gratuitement (gris quasi blanc en sombre, teinte sombre en clair,
// exactement l'inversion déjà utilisée pour les CTA) sans filtre CSS ni double asset.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect width="100" height="100" rx="24" className="fill-accent" />
      <g transform="translate(6,4) scale(0.86)" className="fill-accent-foreground">
        <rect x="24" y="18" width="13" height="64" rx="2" />
        <path d="M37 18 H60 C70 18 76 24 76 34 C76 44 70 49 60 49 H37 V37 H58 C62 37 64 36 64 34 C64 32 62 31 58 31 H37 Z" />
        <path d="M55 49 L77 82 H62 L44 55 Z" />
      </g>
    </svg>
  )
}
