import { projects } from "@/lib/lib/projects"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { ProjectGallery } from "@/components/ProjectGallery"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const allImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.image]

  return (
    <main className="min-h-screen bg-black px-6 lg:px-8 py-32">
      <div className="max-w-4xl mx-auto">

        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 text-sm text-[#86868b] hover:text-white transition-colors duration-300 mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.type === "Web App"
                ? "bg-white text-black"
                : "bg-transparent text-[#86868b] border border-[#333333]"
            }`}
          >
            {project.type === "Web App" ? "Application" : "Étude de cas"}
          </span>
          {project.badge && (
            <span className="px-3 py-1 text-xs font-medium text-white bg-white/10 border border-white/20 rounded-full">
              {project.badge}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
          {project.name}
        </h1>
        <p className="text-xl text-[#86868b] font-light mb-12">
          {project.tagline}
        </p>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#333333] mb-16">
          <Image
            src={project.image as string}
            alt={project.name}
            fill
            className="object-cover w-full h-full absolute top-0 left-0"
          />
        </div>

        <ProjectGallery images={allImages} name={project.name} />

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-4">
              Le projet
            </h2>
            <p className="text-white font-light leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-4">
              Valeur ajoutée
            </h2>
            <p className="text-white font-light leading-relaxed">
              {project.valueAdded}
            </p>
          </div>
        </div>

        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-[#f5f5f7] transition-all duration-300"
          >
            Voir le projet en ligne
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}

      </div>
    </main>
  )
}