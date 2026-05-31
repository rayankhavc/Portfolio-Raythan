import { Zap, Code } from "lucide-react"

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Notre Expertise
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg">
            Deux approches. Un seul objectif : votre succès.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: No-Code */}
          <div className="group p-8 md:p-10 lg:p-12 bg-black border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500">
            <div className="w-12 h-12 flex items-center justify-center border border-[#333333] rounded-xl mb-8 group-hover:border-[#86868b]/50 transition-colors duration-500">
              <Zap className="w-6 h-6 text-[#86868b]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Solutions Clé-en-main (No-Code)
            </h3>
            <p className="text-[#86868b] font-light leading-relaxed text-lg">
              Idéal pour les lancements rapides et les commerces locaux. Des sites vitrines administrables facilement, propulsés par Squarespace.
            </p>
          </div>

          {/* Card 2: Custom Code */}
          <div className="group p-8 md:p-10 lg:p-12 bg-black border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500">
            <div className="w-12 h-12 flex items-center justify-center border border-[#333333] rounded-xl mb-8 group-hover:border-[#86868b]/50 transition-colors duration-500">
              <Code className="w-6 h-6 text-[#86868b]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Applications & Code Sur-Mesure
            </h3>
            <p className="text-[#86868b] font-light leading-relaxed text-lg">
              Pour les projets complexes et les performances extrêmes. Développement sur-mesure (Astro, React) avec une liberté totale de design et d&apos;interactivité.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
