# Portfolio Raythan Web Design

Site vitrine de l'agence — Next.js (App Router) + Tailwind v4 + TypeScript strict + Framer Motion.
Langue du projet et des échanges : français.

## Workflow de livraison (demandé par Rayan — à appliquer à chaque changement validé)

1. Développer sur la branche de travail, commit, `git push -u origin <branche>`.
2. Créer une PR vers `main` et la merger.
3. Le merge déclenche automatiquement le déploiement production Vercel
   (projet `v0-portfolio-homepage-design` → portfolioraythanwebdesign.vercel.app).
4. Vérifier que le déploiement production est READY et que le contenu servi est le bon.

## Identité visuelle (validée, ne pas dévier)

- Fond unique : `#1D1D1F` via `--background` — jamais de noir pur ni de valeur en dur.
- Texte principal : `#F5F1EA` (`--foreground`).
- Accent unique : gris quasi blanc `#F0F0F1` (`--accent`), avec parcimonie —
  CTA remplis, soulignement nav, pastilles, kickers. Pas de couleur vive.
- Texte secondaire : `--metallic` (#939398) / `--metallic-light` (#A1A1A6) — pas de zinc-*.
- Mots mis en avant dans les titres : dégradé `from-foreground to-metallic-light`
  + `bg-clip-text` (pas de couleur d'accent sur du texte de titre).
- Typo : Inter seule (titres `font-semibold tracking-tight`). Pas de Syne.
- Animations : easing commun `ease` exporté de `lib/motion-variants.ts`
  ([0.22,1,0.36,1]), durées 0.8–0.9 s, reveals `once: true`, `.cta-magnetic`
  sur les CTA (scale + ombre, jamais de flash de couleur), transform/opacity
  uniquement (zéro CLS), `prefers-reduced-motion` respecté partout.
- Contraste WCAG AA (4.5:1) non négociable sur toute combinaison texte/fond,
  y compris sur les surfaces de carte et leurs états hover.
- Jamais de tiret long (—) dans le texte visible du site (titres, paragraphes,
  metadata, image OG). Rayan le trouve « atroce » et symptomatique d'un texte
  généré par IA sans relecture. Utiliser une virgule, un point, ou reformuler.
  Le point médian (·) reste autorisé pour séparer de courts éléments (ex.
  « Devis gratuit · Réponse sous 48h »), ce n'est pas la même chose.
- Ton des textes courts (FAQ, réassurance) : direct, neutre, carré — pas de
  formulations qui « expliquent » ou adoucissent, pas de tournures IA
  perceptibles.

## Thème clair/sombre

- `data-theme="light"|"dark"` sur `<html>` (absent = sombre, défaut de la marque).
  Toggle dans la Navbar. Persistance `localStorage` (`rwd-theme`), lue par un
  script bloquant dans `<head>` (anti-flash, même logique que `data-intro`).
- Le clair n'est jamais une inversion mécanique : chaque token est repensé
  dans `html[data-theme='light']` (`app/globals.css`), CTA/accent basculé en
  teinte sombre au lieu du gris quasi blanc, `--metallic`/`--metallic-light`
  recalculés pour l'AA sur fond ET sur carte, pas de simple `invert()`.
- Bordures/surfaces subtiles : jamais `border-white/N` ou `bg-white/[N]` en
  dur — utiliser `border-[rgb(var(--overlay)/N%)]` / `bg-[rgb(var(--overlay)/N%)]`.
  `--overlay` bascule `255 255 255` (sombre) / `0 0 0` (clair) ; les paliers
  d'opacité déjà calibrés (8%, 10%, 15%, 20%, 40%, 2%, 3%, 4%, 5%, 6%, 1.5%)
  restent identiques dans les deux thèmes.
- `.card-surface` : classe à ajouter sur toute carte élevée (form, service,
  FAQ container, CTA band...) — no-op en sombre, vraie ombre portée douce en
  clair (une bordure fine seule ne recrée pas la hiérarchie visuelle).
- Logo : badge (R en aplat dans une tuile arrondie), `components/ui/Logo.tsx`,
  SVG inline sur `fill-accent`/`fill-accent-foreground` — thémable gratuitement
  via les tokens existants, aucun filtre CSS ni double asset. Favicon
  (`public/icon.svg`) même mark, variante clair/sombre via `prefers-color-scheme`
  (pas d'accès à `data-theme` côté favicon).
- Toute couleur non tokenisée (ex. rouge d'erreur) doit être vérifiée AA
  dans les deux thèmes avant d'être codée en dur — `red-400` par exemple
  passe en sombre mais échoue largement en clair.

## Points d'architecture

- Tailwind v4 : les tokens vivent dans `app/globals.css` (`:root` + `@theme inline`).
  Il n'y a pas de `tailwind.config.ts` — ne pas en recréer un.
- Données projets : `lib/data.ts` (`PROJECTS`), actuellement débranchées de toute
  route — réservées à la future section « Ils nous ont fait confiance »
  (exemples + retours clients, seulement quand les projets seront finalisés).
  Le portfolio public a été retiré volontairement ; `/portfolio` et `/projets/*`
  redirigent vers la home (next.config.mjs).
- Intro plein écran : `components/IntroOverlay.tsx` + script inline dans
  `app/layout.tsx` (attribut `data-intro` posé avant le premier paint).
  Une fois par session, home en entrée de session uniquement, skippable,
  jamais avec reduced-motion.
- Server Components par défaut, `'use client'` seulement où nécessaire.
- `@vercel/speed-insights` (`<SpeedInsights />` dans `app/layout.tsx`) pour
  mesurer les Core Web Vitals réels en production, données visibles dans
  l'onglet Speed Insights du projet Vercel.
