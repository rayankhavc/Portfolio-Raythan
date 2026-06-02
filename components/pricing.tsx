import { Check, ArrowUpRight } from "lucide-react"
import { FadeIn } from "./fade-in"

const PLANS = [
  {
    name: "Site Vitrine",
    price: "500€",
    sub: "Idéal pour démarrer",
    description:
      "Pour les commerces locaux qui veulent une présence web propre, rapide et efficace.",
    features: [
      "Design sur-mesure",
      "Mobile-first",
      "SEO technique inclus",
      "Formulaire de contact",
      "Livré en moins d'une semaine",
    ],
    cta: "Démarrer",
    highlight: false,
  },
  {
    name: "Site Premium",
    price: "1 000€+",
    sub: "Le plus demandé",
    description:
      "Pour les projets plus ambitieux avec animations, plusieurs pages et contenu rich.",
    features: [
      "Tout du plan Vitrine",
      "Pages multiples",
      "Animations Framer Motion",
      "Blog ou catalogue produit",
      "Accompagnement 30 jours",
    ],
    cta: "Démarrer",
    highlight: true,
  },
  {
    name: "Application",
    price: "Sur devis",
    sub: "Scope = prix",
    description:
      "Dashboard, SaaS, outil métier — développement React ou Astro entièrement sur-mesure.",
    features: [
      "Architecture technique",
      "Full-stack si nécessaire",
      "Déploiement Vercel",
      "Maintenance disponible",
      "Délai défini ensemble",
    ],
    cta: "Nous contacter",
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section
      id="tarifs"
      className="py-24 md:py-32 px-6 lg:px-8 bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-4">
            Tarifs
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Transparent, sans surprise.
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg max-w-xl mx-auto">
            Ces fourchettes donnent un cadre. Chaque projet est discuté et adapté.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-black border border-white"
                    : "bg-[#080808] text-white border border-[#1a1a1a] hover:border-[#2a2a2a]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent" />
                )}

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <p
                      className={`text-xs font-medium uppercase tracking-widest ${
                        plan.highlight ? "text-[#888]" : "text-[#555]"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        plan.highlight
                          ? "bg-black/10 text-[#555]"
                          : "bg-white/5 text-[#555]"
                      }`}
                    >
                      {plan.sub}
                    </span>
                  </div>
                  <p
                    className={`text-4xl font-bold mb-3 tracking-tight ${
                      plan.highlight ? "text-black" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`text-sm font-light leading-relaxed ${
                      plan.highlight ? "text-[#666]" : "text-[#555]"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${
                        plan.highlight ? "text-[#444]" : "text-[#86868b]"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlight ? "text-black" : "text-white"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    plan.highlight
                      ? "bg-black text-white hover:bg-[#111]"
                      : "bg-transparent text-white border border-[#2a2a2a] hover:border-[#444] hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}