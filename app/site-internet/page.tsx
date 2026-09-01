import type { Metadata } from 'next'
import { Store } from 'lucide-react'
import { TRADES } from '@/lib/local-seo'
import { LocalHub } from '@/components/sections/LocalHub'

export const metadata: Metadata = {
  title: 'Site internet par activité : restaurant, artisan, commerce, PME',
  description:
    "Création de site internet adaptée à votre métier : restaurant, artisan, commerce local, coach, photographe, PME, boulangerie, pizzeria. Sites sur-mesure, SEO inclus. Agence web à Nantes.",
  alternates: { canonical: 'https://raythan.fr/site-internet' },
}

const FOCUS = [
  {
    title: 'Les fonctionnalités qui servent vraiment',
    description:
      "Réservation, devis en ligne, galerie, prise de rendez-vous, carte, catalogue : on installe ce qui correspond à votre façon de travailler. Un module en moins, c'est une page plus rapide et un visiteur qui ne se perd pas.",
  },
  {
    title: 'Le vocabulaire de votre métier',
    description:
      "Les mots que tapent vos clients ne sont pas ceux de votre plaquette. On organise les pages autour des recherches réelles de votre secteur plutôt qu'autour de l'organigramme de l'entreprise.",
  },
  {
    title: "L'ordre des sections change selon l'activité",
    description:
      "Un restaurant met la carte et la réservation en haut, un photographe laisse la place aux images, un artisan met en avant la zone d'intervention et les réalisations. Le gabarit ne décide pas à la place du métier.",
  },
  {
    title: 'Un site qui tient dans le temps',
    description:
      "Base technique propre, contenus modifiables sans nous rappeler, possibilité de brancher vos outils plus tard. L'objectif n'est pas un site à refaire dans six mois.",
  },
]

const FAQ = [
  {
    question: "Mon activité n'est pas dans la liste.",
    answer:
      "Les pages ci-dessus couvrent les demandes les plus fréquentes, ce n'est pas une limite. Décrivez votre activité et on vous dit ce qui s'applique, la logique de travail reste la même.",
  },
  {
    question: 'Vous utilisez des modèles tout faits par secteur ?',
    answer:
      "Non. Le point de départ est identique pour tout le monde, un site développé sur-mesure. Ce qui change d'un métier à l'autre, ce sont les fonctionnalités installées et l'ordre des pages.",
  },
  {
    question: 'Un site vitrine suffit ou faut-il du e-commerce ?',
    answer:
      "Ça dépend de ce que vous vendez et de comment. Pour beaucoup d'activités locales, une vitrine avec une prise de contact efficace rapporte plus qu'une boutique en ligne sous-utilisée. On en parle avant d'écrire la moindre ligne de code.",
  },
  {
    question: 'Le contenu, vous le rédigez ?',
    answer:
      "On structure les pages et on écrit les textes avec vous, à partir de ce que vous nous dites de votre activité. Pour les photos, vos visuels s'ils sont bons, sinon on vous oriente vers un photographe : sur un site, ça se voit tout de suite.",
  },
]

export default function TradesHubPage() {
  return (
    <LocalHub
      kicker="Par activité"
      h1="Un site internet pensé pour votre métier"
      intro="Chaque activité a ses codes et sa clientèle. On adapte le site à votre métier plutôt qu'à un modèle générique. Choisissez le vôtre pour voir ce qu'on met en place."
      path="/site-internet"
      breadcrumbLabel="Site internet par métier"
      gridTitle="Les activités couvertes"
      items={TRADES.map(({ slug, name }) => ({
        href: `/site-internet/${slug}`,
        label: name,
      }))}
      icon={Store}
      capitalizeLabels
      angle="Un site de restaurant et un site de photographe n'ont pas le même travail à faire. Le premier doit donner faim et amener à la réservation en deux clics, souvent sur mobile, souvent à quelques minutes du repas. Le second doit montrer le travail sans l'écraser et supporter des images lourdes sans devenir lent."
      context="On part donc du métier, pas d'un gabarit qu'on remplit. Les fonctionnalités installées, l'ordre des sections, ce qu'on met dès le premier écran : tout découle de la façon dont vos clients décident. Chaque page ci-dessus détaille ce qu'on met en place pour l'activité concernée."
      focusTitle="Ce qui change d'un métier à l'autre."
      focus={FOCUS}
      faq={FAQ}
      crossLink={{
        href: '/creation-site-internet',
        kicker: "Zones d'intervention",
        title: 'Vous cherchez plutôt par commune ?',
        description:
          "Nantes, Saint-Herblain, Rezé, Vertou, Carquefou, Orvault et le reste de l'agglomération : le contexte local commune par commune, et ce qu'il change pour votre visibilité.",
      }}
    />
  )
}
