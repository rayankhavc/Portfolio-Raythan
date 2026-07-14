// <details>/<summary> natif : accessible et fonctionnel sans JavaScript,
// contrairement à un accordéon animé qui dépendrait de framer-motion.
const FAQ_ITEMS = [
  {
    question: 'Combien de temps pour livrer un site ?',
    answer:
      'En général entre 5 et 15 jours, du premier appel à la mise en ligne. Ça dépend surtout de la taille du projet et de la rapidité de vos retours.',
  },
  {
    question: 'Quel est le tarif pour un site vitrine ?',
    answer:
      "Il n'y a pas de prix fixe affiché ici, chaque projet est différent. On en parle pendant l'appel gratuit de 30 minutes et vous repartez avec un chiffrage précis.",
  },
  {
    question: 'Quelles technologies utilisez-vous ?',
    answer:
      "Next.js, TypeScript et Tailwind CSS. Tout est codé sur-mesure, pas de template qu'on personnalise à moitié.",
  },
  {
    question: 'Dans quelle zone intervenez-vous ?',
    answer:
      "On est basé en Loire-Atlantique et on travaille à distance avec des clients partout en France. Un appel vidéo remplace largement un rendez-vous en personne.",
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      "Le site vous appartient, vous pouvez le faire vivre seul ou nous solliciter pour des évolutions. On répond aux demandes de suivi au cas par cas.",
  },
  {
    question: "Pour quel type d'activité travaillez-vous ?",
    answer:
      "Beaucoup de PME, commerces locaux, artisans et restaurants, mais aussi des startups. Le site colle à votre clientèle réelle, pas à un modèle passe-partout.",
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
