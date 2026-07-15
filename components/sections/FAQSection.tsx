import { ChevronDown } from 'lucide-react'

// <details>/<summary> natif : accessible et fonctionnel sans JavaScript,
// contrairement à un accordéon animé qui dépendrait de framer-motion.
const FAQ_ITEMS = [
  {
    question: 'Combien de temps pour livrer un site ?',
    answer:
      "5 à 15 jours en général, du premier appel à la mise en ligne. Ça dépend de la taille du projet et de la rapidité de vos retours.",
  },
  {
    question: 'Quel est le tarif pour un site vitrine ?',
    answer:
      "Pas de prix fixe ici, chaque projet est différent. Vous obtenez un devis gratuit et précis après l'appel de 30 minutes.",
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      "Next.js, TypeScript, Tailwind CSS. Du code sur-mesure, jamais de template à moitié personnalisé.",
  },
  {
    question: 'Dans quelle zone intervenez-vous ?',
    answer:
      "Basé en Loire-Atlantique, à distance pour toute la France. Un appel vidéo suffit.",
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      "Le site vous appartient. Vous le gérez seul ou vous nous sollicitez pour des évolutions, au cas par cas.",
  },
  {
    question: "Pour quel type d'activité travaillez-vous ?",
    answer:
      "PME, commerces locaux, artisans, restaurants, startups. Le site colle à votre clientèle, pas à un modèle générique.",
  },
]

export function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 py-24 px-6 border-t border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/1.5%)]"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
          Questions fréquentes
        </p>
        <h2 className="font-semibold tracking-tight text-display-sm text-foreground leading-tight mb-10">
          Vous vous demandez peut-être...
        </h2>
        <div className="card-surface rounded-2xl border border-[rgb(var(--overlay)/8%)] divide-y divide-[rgb(var(--overlay)/8%)] overflow-hidden">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold text-foreground text-base hover:bg-[rgb(var(--overlay)/3%)] transition-colors duration-300">
                {item.question}
                <ChevronDown
                  size={16}
                  className="shrink-0 text-metallic-light transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="px-6 pb-5 text-metallic-light text-sm leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ_ITEMS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />
    </section>
  )
}
