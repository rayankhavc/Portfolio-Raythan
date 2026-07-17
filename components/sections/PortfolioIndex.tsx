'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MousePointerClick } from 'lucide-react'
import { CASE_STUDIES, type CaseStudy } from '@/lib/data'
import { ease, fadeUp, staggerContainer } from '@/lib/motion-variants'
import { TiltCard } from '@/components/portfolio/TiltCard'

function DemoBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--overlay)/15%)] bg-[rgb(var(--overlay)/5%)] px-3 py-1 text-[11px] font-medium text-foreground">
      <MousePointerClick size={12} className="text-metallic-light" />
      Démo testable dans la page
    </span>
  )
}

function MetaChips({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full border border-[rgb(var(--overlay)/10%)] px-3 py-1 text-[11px] text-metallic-light">
        {study.type}
      </span>
      <span className="rounded-full border border-[rgb(var(--overlay)/10%)] px-3 py-1 text-[11px] text-metallic-light">
        {study.year}
      </span>
      {study.demo && <DemoBadge />}
    </div>
  )
}

function FeaturedCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease }}
    >
      <TiltCard>
        <Link
          href={`/projets/${study.slug}`}
          className="card-surface group grid overflow-hidden rounded-3xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/3%)] transition-colors duration-500 hover:border-[rgb(var(--overlay)/20%)] lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={study.cover.src}
              alt={study.cover.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
            <div>
              <p className="mb-4 text-xs font-medium tracking-widest text-accent uppercase">Projet phare</p>
              <h2 className="mb-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {study.name}
              </h2>
              <p className="mb-4 text-sm text-metallic">{study.kicker}</p>
              <p className="text-base leading-relaxed text-metallic-light">{study.summary}</p>
            </div>
            <div className="flex flex-col gap-5">
              <MetaChips study={study} />
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Lire l'étude de cas
                <ArrowRight size={15} className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  )
}

function StudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.div variants={fadeUp}>
      <TiltCard className="h-full">
        <Link
          href={`/projets/${study.slug}`}
          className="card-surface group flex h-full flex-col overflow-hidden rounded-3xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] transition-colors duration-500 hover:border-[rgb(var(--overlay)/20%)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={study.cover.src}
              alt={study.cover.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex flex-1 flex-col gap-4 p-7">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">{study.name}</h2>
              <p className="mt-1 text-sm text-metallic">{study.kicker}</p>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-metallic-light">{study.summary}</p>
            <div className="flex items-end justify-between gap-4">
              <MetaChips study={study} />
              <ArrowUpRight
                size={18}
                className="shrink-0 text-metallic transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
              />
            </div>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  )
}

export function PortfolioIndex() {
  const featured = CASE_STUDIES.find((s) => s.featured) ?? CASE_STUDIES[0]
  const others = CASE_STUDIES.filter((s) => s.slug !== featured.slug)
  const demoCount = CASE_STUDIES.filter((s) => s.demo).length

  return (
    <div className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* En-tête */}
        <div className="mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="mb-4 text-xs font-medium tracking-widest text-accent uppercase"
          >
            Réalisations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="mb-6 font-semibold tracking-tight text-display-md leading-[1.05]"
          >
            Des projets livrés,
            <br />
            <span className="bg-gradient-to-r from-foreground to-metallic-light bg-clip-text text-transparent">
              pas des maquettes.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.35 }}
            className="max-w-xl text-lg leading-relaxed text-metallic-light"
          >
            Chaque étude de cas montre le vrai produit : de vraies captures d'écran, les décisions qui ont
            été prises, et quand le projet s'y prête, une démo à tester directement dans la page.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center gap-8 border-t border-[rgb(var(--overlay)/8%)] pt-6"
          >
            {[
              { value: String(CASE_STUDIES.length), label: 'études de cas détaillées' },
              { value: String(demoCount), label: 'démos testables en direct' },
              { value: '100%', label: 'code sur-mesure' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="text-xl font-semibold text-foreground">{value}</span>
                <span className="text-xs text-metallic">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Projet phare */}
        <FeaturedCard study={featured} />

        {/* Les autres études de cas */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {others.map((study) => (
            <StudyCard key={study.slug} study={study} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
