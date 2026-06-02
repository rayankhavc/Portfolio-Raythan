"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/ui/dialog"
import { ProjectGallery } from "@/components/ProjectGallery"
import { projects } from "@/lib/lib/projects"

type Filter = "Tous" | "Web App" | "No-Code"

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Tous")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const filtered = projects.filter((p) =>
    filter === "Tous" ? true : p.type === filter
  )

  const topSlugs = ["zenhertz", "fundedcalc"]
  const topApps = filtered.filter((p) => topSlugs.includes(p.slug))
  const restProjects = filtered.filter((p) => !topSlugs.includes(p.slug))

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" })
    }
  }, [filter])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <section id="projets" className="py-24 md:py-32 px-6 lg:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Projets Sélectionnés
          </h2>
          <p className="mt-4 text-[#86868b] font-light text-lg max-w-2xl mx-auto">
            Un aperçu de notre savoir-faire à travers nos dernières réalisations.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {(["Tous", "Web App", "No-Code"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 text-sm rounded-full border transition-all duration-300 cursor-pointer ${
                filter === f
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-[#86868b] border-[#333333] hover:border-[#86868b] hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Indicators & Scroll Buttons */}
        <div className="flex md:hidden items-center justify-between gap-2 mb-6 text-[#86868b] text-xs font-light">
          <span className="flex items-center gap-1.5 opacity-80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Glissez pour défiler
          </span>
          <div className="flex gap-1.5">
            <button 
              onClick={scrollLeft}
              className="w-8 h-8 rounded-full border border-[#333333] flex items-center justify-center hover:text-white active:bg-white/10"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-8 h-8 rounded-full border border-[#333333] flex items-center justify-center hover:text-white active:bg-white/10"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Top apps on desktop (ZenHertz + FundedCalc) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-6">
          {topApps.map((project) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className={`group relative block md:col-span-1 snap-center`}
            >
              <div
                className={`relative overflow-hidden border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500 bg-[#0d0d0d] ${
                  project.featured && filter === "Tous"
                    ? "aspect-[4/3] md:aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className={`object-cover w-full h-full transition-transform duration-700 group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  unoptimized
                />

                {/* Dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.type === "Web App"
                            ? "bg-white text-black"
                            : "bg-white/10 text-white border border-white/20"
                        }`}
                      >
                        {project.type === "Web App" ? "Application" : "No-Code"}
                    </span>
                    {project.badge && (
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1.5">
                    {project.name}
                  </h3>
                  <p className="text-[#86868b] font-light text-sm line-clamp-2 md:line-clamp-none max-w-xl">
                    {project.tagline}
                  </p>
                </div>

                {/* Top-right arrow button */}
                <div className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Projects scroll list / grid (mobile shows all; desktop hides topApps here) */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto md:grid md:grid-cols-2 gap-6 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible"
        >
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projets/${project.slug}`}
              className={`group relative block flex-shrink-0 w-[82vw] sm:w-[450px] md:w-auto snap-center ${
                project.featured && filter === "Tous" ? "md:col-span-2" : ""
              } ${topSlugs.includes(project.slug) ? "md:hidden" : ""}`}
            >
              <div
                className={`relative overflow-hidden border border-[#333333] rounded-2xl hover:border-[#86868b]/50 transition-all duration-500 bg-[#0d0d0d] ${
                  project.featured && filter === "Tous"
                    ? "aspect-[4/3] md:aspect-[16/9]"
                    : "aspect-[4/3]"
                }`}
              >
                {/* Image on Front */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className={`object-cover w-full h-full transition-transform duration-700 group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  unoptimized
                />

                {/* Modal trigger: open gallery without removing navigation link */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button aria-label={`Ouvrir la galerie de ${project.name}`} className="absolute inset-0 z-10 md:z-0" />
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl w-full">
                    <div className="p-0">
                      <ProjectGallery images={project.images && project.images.length ? project.images : [project.image]} name={project.name} />
                    </div>
                    <DialogClose className="sr-only">Close</DialogClose>
                  </DialogContent>
                </Dialog>

                {/* Dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.type === "Web App"
                          ? "bg-white text-black"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                    >
                      {project.type === "Web App" ? "Application" : "No-Code"}
                    </span>
                    {project.badge && (
                      <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1.5">
                    {project.name}
                  </h3>
                  <p className="text-[#86868b] font-light text-sm line-clamp-2 md:line-clamp-none max-w-xl">
                    {project.tagline}
                  </p>
                </div>

                {/* Top-right arrow button */}
                <div className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full opacity-0 md:group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
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
