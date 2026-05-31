import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "Zen Hertz",
    category: "Application Fintech & Simulateur Trading",
    badge: "Bêta Fonctionnelle",
    cta: "Tester l'application",
    featured: true,
  },
  {
    name: "La Belle Broche",
    category: "Site Vitrine Gastronomie Premium",
  },
  {
    name: "Boulangerie Artisanale",
    category: "Site Vitrine Local & Tradition",
  },
  {
    name: "Le Smash Burger",
    category: "Identité Visuelle & Restaurant Pop",
  },
  {
    name: "École Coranique",
    category: "Plateforme Éducative Épurée",
  },
]

export function Portfolio() {
  return (
    <section id="projets" className="py-24 md:py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projets Sélectionnés
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg">
            Un aperçu de notre savoir-faire.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group relative ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500 ${
                  project.featured ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                {/* Image Placeholder Area */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  {/* Grid pattern overlay for visual interest */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, #333333 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {project.badge && (
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#86868b] font-light">
                    {project.category}
                  </p>
                  {project.cta && (
                    <button className="mt-4 inline-flex items-center gap-2 text-sm text-[#86868b] hover:text-white transition-colors duration-300 w-fit">
                      {project.cta}
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-[#333333] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
