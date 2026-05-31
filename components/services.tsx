import { Zap, Code, Repeat } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Site Vitrine No-Code",
    description: "Idéal pour les commerces locaux. Un site propre, rapide, administrable. Livré en moins d'une semaine.",
  },
  {
    icon: Code,
    title: "Application Sur-Mesure",
    description: "Dashboard, outil métier, SaaS. On développe en React ou Astro exactement ce dont vous avez besoin.",
  },
  {
    icon: Repeat,
    title: "Refonte & Optimisation",
    description: "Votre site existe déjà mais il performe mal ? On le repense de zéro — design, vitesse, conversion.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ce qu&apos;on fait
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg">
            Rapide. Sur-mesure. Exactement comme vous le voulez.
          </p>
        </div>

        {/* Service Cards - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-8 md:p-10 bg-black border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[#333333] rounded-xl mb-8 group-hover:border-[#86868b]/50 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-[#86868b]" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-[#86868b] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="text-center text-[#86868b] font-light mt-12 md:mt-16">
          Chaque projet est unique. On s&apos;adapte à votre budget et vos objectifs.
        </p>
      </div>
    </section>
  )
}
