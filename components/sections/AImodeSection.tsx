import { Server, Braces, MapPin, MessagesSquare } from 'lucide-react'

// Server Component volontaire : aucun 'use client', aucune animation
// framer-motion. Tout le texte est dans le HTML initial à pleine opacité,
// lisible par les robots des assistants IA qui n'exécutent pas le JavaScript.
// C'est le sujet même de la section, autant l'appliquer à la section.
const AI_POINTS = [
  {
    icon: Server,
    title: 'Rendu côté serveur',
    description:
      "Les robots des IA n'exécutent pas le JavaScript. Ils ne lisent que le HTML renvoyé par le serveur. Vos textes, vos services et vos coordonnées y sont présents dès la première réponse, pas injectés après coup.",
  },
  {
    icon: Braces,
    title: 'Données structurées Schema.org',
    description:
      "Le type d'activité, la zone couverte, les services et les questions fréquentes sont décrits dans un format normalisé que Google et les assistants savent interpréter.",
  },
  {
    icon: MapPin,
    title: 'Fiches cohérentes avec le site',
    description:
      'Fiche Google Business et Apple Business Connect alignées sur le site : même nom, même zone, mêmes services. Les IA croisent ces sources avant de citer une entreprise.',
  },
  {
    icon: MessagesSquare,
    title: 'Contenu en questions-réponses',
    description:
      "Le contenu est organisé autour des questions que posent vos clients. Une réponse claire et directe a plus de chances d'être reprise qu'un bloc marketing.",
  },
]

export function AImodeSection() {
  return (
    <section
      id="ia"
      className="scroll-mt-24 py-24 px-6 border-t border-[rgb(var(--overlay)/8%)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
            Visibilité sur les IA
          </p>
          <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight mb-4">
            Votre site est-il lisible par les IA ?
          </h2>
          <p className="text-metallic-light leading-relaxed">
            Depuis le 22 juillet 2026, Google affiche des réponses générées par IA
            en France. Les assistants comme ChatGPT, Gemini et Perplexity
            recommandent des entreprises à partir de données structurées et de
            sites que leurs robots savent lire. Chaque site qu'on livre est pensé
            pour être compris par ces systèmes, pas seulement par un visiteur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AI_POINTS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[rgb(var(--overlay)/10%)] flex items-center justify-center">
                <Icon size={20} className="text-metallic-light" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-2">{title}</h3>
                <p className="text-metallic text-sm leading-relaxed">{description}</p>
              </div>
              <div className="h-px bg-gradient-to-r from-[rgb(var(--overlay)/15%)] to-transparent" />
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-metallic-light leading-relaxed max-w-2xl">
          Ces réponses IA sont actives en France depuis le 22 juillet 2026. À
          Nantes, c'est encore un réflexe rare. On l'intègre par défaut sur chaque
          site livré, sans ligne en plus sur le devis, pendant que le sujet est
          neuf.
        </p>
      </div>
    </section>
  )
}
