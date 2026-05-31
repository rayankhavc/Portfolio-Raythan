const steps = [
  {
    number: "01",
    title: "Brief & Audit",
    description: "Appel de cadrage 30 min. On définit l'objectif, le budget, le délai. Zéro surprise après.",
  },
  {
    number: "02",
    title: "Design & Validation",
    description: "Maquette Figma livrée en 5 jours. Un aller-retour de corrections inclus.",
  },
  {
    number: "03",
    title: "Dev & Mise en ligne",
    description: "Intégration Astro/React ou Squarespace selon le projet. Livraison avec formation à l'administration.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Notre Process
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg">
            Une méthodologie éprouvée en trois étapes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile, shown on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#333333] to-transparent z-0" />
              )}
              
              <div className="relative z-10">
                {/* Step Number */}
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a1a1a] mb-4">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#86868b] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
