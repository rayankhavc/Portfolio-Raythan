"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "ZenHertz",
    category: "Application web · Analyse bioacoustique & santé",
    badge: "Bêta live",
    tag: "App",
    featured: true,
    link: "https://rayankhavc.github.io/zenhertz/",
  },
  {
    name: "FundedCalc",
    category: "Application web · Simulateur Monte Carlo trading",
    badge: "Bêta live",
    tag: "App",
    featured: false,
    link: "https://fundedcalc.vercel.app/",
  },
  {
    name: "La Baraka",
    category: "Site vitrine · Fast-food burger",
    tag: "No-Code",
    featured: false,
  },
  {
    name: "La Belle Broche",
    category: "Site vitrine · Kebab",
    tag: "No-Code",
    featured: false,
  },
  {
    name: "Au Fournil du Sillon",
    category: "Site vitrine · Boulangerie artisanale",
    tag: "No-Code",
    featured: false,
  },
  {
    name: "Les Jardins du Coran",
    category: "Site vitrine · École arabe & coran",
    tag: "No-Code",
    featured: false,
  },
  {
    name: "Avesta Kebap",
    category: "Site vitrine · Restauration rapide",
    tag: "No-Code",
    featured: false,
  },
]

type Filter = "Tous" | "App" | "No-Code"

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Tous")

  const filtered = projects.filter((p) =>
    filter === "Tous" ? true : p.tag === filter
  )

  return (
    <section id="projets" className="py-24 md:py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projets Sélectionnés
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg">
            Un aperçu de notre savoir-faire.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-12">
          {(["Tous", "App", "No-Code"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm rounded-full border transition-all duration-300 ${
                filter === f
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-[#86868b] border-[#333333] hover:border-[#86868b] hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.name}
              className={`group relative ${
                project.featured && filter === "Tous" ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500 ${
                  project.featured && filter === "Tous"
                    ? "aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, #333333 1px, transparent 0)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.tag === "App"
                          ? "bg-white text-black"
                          : "bg-transparent text-[#86868b] border border-[#333333]"
                      }`}
                    >
                      {project.tag}
                    </span>
                    {project.badge && (
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-[#86868b] font-light">{project.category}</p>
                  {project.link && (
                    
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-[#86868b] hover:text-white transition-colors duration-300 w-fit"
                    >
                      Voir le projet
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

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