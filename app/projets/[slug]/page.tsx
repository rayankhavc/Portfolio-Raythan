import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    slug: 'zenhertz',
    title: 'ZenHertz',
    type: 'Web App',
    description:
      "Outil d'analyse musicale basé sur l'IA. Dépose un fichier audio et ZenHertz détecte le BPM, les fréquences dominantes et t'explique les effets sur ton cerveau et ton corps.",
    details: [
      'Analyse BPM & fréquences en temps réel',
      'Effets neurologiques et physiologiques de la musique',
      'Support fichiers audio',
      'Interface bilingue FR / EN',
    ],
    url: 'https://zenhertz.vercel.app',
    cta: "Tester l'outil",
  },
  {
    slug: 'fundedcalc',
    title: 'FundedCalc',
    type: 'Web App',
    description:
      'Calculateur de gestion du risque pour les traders en Prop Firm. Calcule automatiquement les chances de passer le challenge, le ratio risque/récompense et les seuils de drawdown selon les règles de ta firm.',
    details: [
      'Gestion du drawdown',
      'chance de passer funded',
      'Interface rapide et sans inscription',
    ],
    url: 'https://fundedcalc.vercel.app',
    cta: 'Tester le calculateur',
  },
]

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-[#080808] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-12 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Retour au portfolio
        </Link>

        <div className="flex items-center gap-2 mb-6">
          <span className="flex items-center gap-1.5 text-xs text-zinc-500 border border-white/10 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
            Live
          </span>
          <span className="text-xs text-[#C8FF00] border border-[#C8FF00]/30 px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        <h1 className="font-syne font-extrabold text-6xl md:text-8xl text-white mb-6 leading-none">
          {project.title}
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 mb-10">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4">Ce que ça fait</p>
          <ul className="space-y-3">
            {project.details.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-[#C8FF00] shrink-0 mt-0.5">→</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8FF00] text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors text-base"
          >
            {project.cta}
            <ArrowUpRight size={16} />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/15 text-white font-medium px-8 py-4 rounded-full hover:border-white/40 transition-colors text-base"
          >
            Projet similaire ?
          </Link>
        </div>

      </div>
    </main>
  )
}
