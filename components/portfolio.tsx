"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Filter = "Tous" | "App" | "No-Code"

type Project = {
  slug: string
  image: string
  name: string
  tagline: string
  type: "App" | "No-Code"
  badge?: string
  featured?: boolean
}

const projects: Project[] = []

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Tous")

  const filtered = projects.filter((p) =>
    filter === "Tous" ? true : p.type === filter
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
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className={`group relative block ${
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
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.type === "App"
                          ? "bg-white text-black"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                    >
                      {project.type}
                    </span>
                    {project.badge && (
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
                    {project.name}
                  </h3>
                  <p className="text-[#86868b] font-light text-sm">
                    {project.tagline}
                  </p>
                </div>

                <div className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}