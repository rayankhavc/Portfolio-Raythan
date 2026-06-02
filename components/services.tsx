import { Zap, Code2, RefreshCw } from "lucide-react"
import { FadeIn } from "./fade-in"

const SERVICES = [
  {
    icon: Zap,
    name: "Site Vitrine No-Code",
    desc: "Pour les commerces locaux. Un site propre, rapide, administrable. Livré en moins d'une semaine, optimisé SEO dès le départ.",
  },
  {
    icon: Code2,
    name: "Application Sur-Mesure",
    desc: "Dashboard, outil métier, SaaS. On développe en React ou Astro exactement ce dont vous avez besoin — sans compromis technique.",
  },
  {
    icon: RefreshCw,
    name: "Refonte & Optimisation",
    desc: "Votre site existe mais performe mal ? On le repense de zéro : design, vitesse, conversion, Core Web Vitals.",
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 lg:px-8 bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <p className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-lg">
            Ce qu&apos;on fait, et comment.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.1}>
              <div className="group p-8 border border-[#1a1a1a] rounded-2xl hover:border-[#2a2a2a] bg-[#080808] hover:bg-[#0a0a0a] transition-all duration-500 h-full flex flex-col">
                <div className="w-10 h-10 flex items-center justify-center border border-[#2a2a2a] rounded-xl mb-8 group-hover:border-[#444] transition-colors duration-300">
                  <s.icon className="w-4 h-4 text-[#86868b]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {s.name}
                </h3>
                <p className="text-[#555] font-light text-sm leading-relaxed flex-1">
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-10 text-center text-xs text-[#333] tracking-widest uppercase">
            Chaque projet est unique · On s&apos;adapte à votre budget et vos objectifs
          </p>
        </FadeIn>
      </div>
    </section>
  )
}