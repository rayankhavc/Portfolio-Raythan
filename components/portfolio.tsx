"use client"

import { useState } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

type ProjectType = "App" | "No-Code"

interface Project {
  name: string
  slug: string
  category: string
  type: ProjectType
  badge?: string
  externalUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    name: "Zen Hertz",
    slug: "zen-hertz",
    category: "Application Fintech & Simulateur Trading",
    type: "App",
    badge: "Bêta Fonctionnelle",
    externalUrl: "https://music.music-hz.com",
    featured: true,
  },
  {
    name: "FundedCalc",
    slug: "fundedcalc",
    category: "Calculateur pour Traders Prop Firms",
    type: "App",
    externalUrl: "https://music.music-hz.com",
  },
  {
    name: "La Belle Broche",
    slug: "la-belle-broche",
    category: "Site Vitrine Gastronomie Premium",
    type: "No-Code",
  },
  {
    name: "Boulangerie Artisanale",
    slug: "boulangerie-artisanale",
    category: "Site Vitrine Local & Tradition",
    type: "No-Code",
  },
  {
    name: "Le Smash Burger",
    slug: "le-smash-burger",
    category: "Identité Visuelle & Restaurant Pop",
    type: "No-Code",
  },
  {
    name: "École Coranique",
    slug: "ecole-coranique",
    category: "Plateforme Éducative Épurée",
    type: "No-Code",
  },
  {
    name: "Portfolio Photographe",
    slug: "portfolio-photographe",
    category: "Galerie Visuelle Immersive",
    type: "No-Code",
  },
]

type FilterType = "Tous" | "Apps" | "No-Code"

export function Portfolio() {
  const [filter, setFilter] = useState<FilterType>("Tous")

  const filteredProjects = projects.filter((project) => {
    if (filter === "Tous") return true
    if (filter === "Apps") return project.type === "App"
    if (filter === "No-Code") return project.type === "No-Code"
    return true
  })

  return (
    <section id="projets" className="py-24 md:py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projets Sélectionnés
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg">
            Un aperçu de notre savoir-faire.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-12 md:mb-16">
          {(["Tous", "Apps", "No-Code"] as FilterType[]).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-5 py-2 text-sm font-light rounded-full transition-all duration-300 ${
                filter === filterOption
                  ? "bg-white text-black"
                  : "text-[#86868b] hover:text-white border border-[#333333] hover:border-[#86868b]"
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const CardWrapper = project.externalUrl ? "a" : Link
            const cardProps = project.externalUrl 
              ? { href: project.externalUrl, target: "_blank", rel: "noopener noreferrer" }
              : { href: `/projets/${project.slug}` }

            return (
              <div
                key={project.name}
                className={`group relative transition-opacity duration-500 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <CardWrapper
                  {...cardProps}
                  className="block"
                >
                  <div
                    className={`relative overflow-hidden border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500 ${
                      project.featured ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    {/* Image Placeholder Area */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
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
                        {/* Type Pill */}
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.type === "App"
                            ? "bg-white text-black"
                            : "bg-transparent text-[#86868b] border border-[#333333]"
                        }`}>
                          {project.type}
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
                      <p className="text-[#86868b] font-light">
                        {project.category}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center border border-[#333333] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.externalUrl ? (
                        <ExternalLink className="w-5 h-5 text-white" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </div>
                </CardWrapper>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
