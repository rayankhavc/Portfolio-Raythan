import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <main className="min-h-screen bg-black px-6 lg:px-8 py-32">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 text-sm text-[#86868b] hover:text-white transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight capitalize">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-6 text-lg text-[#86868b] font-light">
          Étude de cas à venir. Cette page est en cours de préparation.
        </p>
      </div>
    </main>
  )
}
