// <details>/<summary> natif : accessible et fonctionnel sans JavaScript,
// contrairement à un accordéon animé qui dépendrait de framer-motion.
const FAQ_ITEMS = [
  {
    question: 'Combien de temps pour livrer un site ?',
    answer:
      'Entre 5 et 15 jours selon la complexité du projet, du premier appel à la mise en ligne. Un workflow IA-augmenté qui compresse les délais sans rogner sur la qualité.',
  },
  {
    question: 'Quel est le tarif pour un site vitrine ?',
    answer:
      "Chaque projet est chiffré après un appel gratuit de 30 minutes, selon vos besoins réels. Un site vitrine simple et une application sur-mesure n'ont pas le même prix — pas de forfait générique, un devis adapté à votre activité.",
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      'Next.js, TypeScript, Tailwind CSS principalement. Du code sur-mesure à chaque fois, jamais de template — des bases solides, rapides et faciles à faire évoluer.',
  },
  {
    question: 'Dans quelle zone intervenez-vous ?',
    answer:
      "100% remote, basé en Loire-Atlantique. La distance n'est jamais un frein : tout se fait par appel et par message, partout en France.",
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      "Un accompagnement reste possible : mises à jour, ajustements, évolutions du site. On en discute ensemble selon vos besoins, sans engagement imposé.",
  },
  {
    question: "Pour quel type d'activité travaillez-vous ?",
    answer:
      "PME, commerces locaux, artisans, restaurants, startups. Chaque secteur a ses propres attentes — le site est pensé pour votre clientèle, pas pour un modèle générique.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-6 border-t border-white/8">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
          Questions fréquentes
        </p>
        <h2 className="font-semibold tracking-tight text-4xl md:text-5xl text-foreground leading-tight mb-10">
          Vous vous demandez peut-être...
        </h2>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/8 bg-white/[0.02] open:bg-white/[0.04] transition-colors duration-300"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold text-foreground text-base">
                {item.question}
                <span className="shrink-0 text-metallic-light text-xl leading-none transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-metallic-light text-sm leading-relaxed">
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
