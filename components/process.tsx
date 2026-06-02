import { FadeIn } from "./fade-in"

const STEPS = [
  {
    n: "01",
    title: "Stratégie & Brief",
    desc: "On commence par comprendre votre business, vos clients et vos objectifs. Structure, message, architecture de l'information — tout est posé avant qu'une ligne de code soit écrite.",
  },
  {
    n: "02",
    title: "Design & Prototype",
    desc: "Identité visuelle, maquettes interactives, charte graphique. Vous validez chaque écran avant le développement. Aucune surprise à la livraison.",
  },
  {
    n: "03",
    title: "Développement & Mise en ligne",
    desc: "Code propre, performances optimales, déploiement Vercel. On livre, on teste, on accompagne. Core Web Vitals dans le vert dès le premier jour.",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32 px-6 lg:px-8 bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <p className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-4">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-lg">
            Trois étapes, zéro flou.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-[#1a1a1a] rounded-2xl overflow-hidden">
          {STEPS.map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.1}>
              <div className="bg-black p-8 md:p-10 h-full">
                <p className="text-5xl font-bold text-[#1a1a1a] mb-8 font-mono">
                  {step.n}
                </p>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-[#555] font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}