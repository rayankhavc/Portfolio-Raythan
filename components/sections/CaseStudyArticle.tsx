'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, MousePointerClick } from 'lucide-react'
import type { CaseStudy } from '@/lib/data'
import { ease, fadeUp, staggerContainer } from '@/lib/motion-variants'

/* Chargées à la demande : seules les études de cas concernées embarquent le
   code de leur démo. */
const FundedCalcDemo = dynamic(() =>
  import('@/components/demos/FundedCalcDemo').then((m) => m.FundedCalcDemo),
)
const BlackjackDemo = dynamic(() =>
  import('@/components/demos/BlackjackDemo').then((m) => m.BlackjackDemo),
)

interface NavRef {
  slug: string
  name: string
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease }}
    >
      <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">{kicker}</p>
      <h2 className="font-semibold tracking-tight text-display-sm leading-tight text-foreground">{title}</h2>
    </motion.div>
  )
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-5"
    >
      {paragraphs.map((p, i) => (
        <motion.p key={i} variants={fadeUp} className="text-base leading-relaxed text-metallic-light md:text-lg">
          {p}
        </motion.p>
      ))}
    </motion.div>
  )
}

export function CaseStudyArticle({
  study,
  prev,
  next,
}: {
  study: CaseStudy
  prev: NavRef
  next: NavRef
}) {
  const coverRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: coverRef, offset: ['start end', 'end start'] })
  // Parallax léger sur la couverture : l'image glisse à contre-courant du
  // scroll. Transform uniquement, image surdimensionnée pour ne jamais
  // découvrir de bord.
  const coverY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <article className="px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
        {/* Retour */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm text-metallic transition-colors hover:text-foreground"
          >
            <ArrowLeft size={15} className="transition-transform duration-500 group-hover:-translate-x-1" />
            Toutes les réalisations
          </Link>
        </motion.div>

        {/* En-tête */}
        <header className="mt-10 mb-12 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.05 }}
              className="mb-4 text-xs font-medium tracking-widest text-accent uppercase"
            >
              {study.kicker}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
              className="mb-5 font-semibold tracking-tight text-display-md leading-[1.05]"
            >
              {study.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="max-w-2xl text-xl leading-snug font-medium md:text-2xl"
            >
              <span className="bg-gradient-to-r from-foreground to-metallic-light bg-clip-text text-transparent">
                {study.tagline}
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-magnetic inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                >
                  {study.liveLabel ?? 'Voir le site en ligne'}
                  <ArrowUpRight size={15} />
                </a>
              )}
              {study.demo && (
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--overlay)/15%)] px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:border-[rgb(var(--overlay)/40%)]"
                >
                  <MousePointerClick size={15} />
                  Tester la démo live
                </a>
              )}
            </motion.div>
          </div>

          {/* Fiche projet */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="card-surface h-fit space-y-5 rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <dt className="text-[11px] tracking-widest text-metallic uppercase">Type</dt>
                <dd className="mt-1 text-sm text-foreground">{study.type}</dd>
              </div>
              <div className="text-right">
                <dt className="text-[11px] tracking-widest text-metallic uppercase">Année</dt>
                <dd className="mt-1 text-sm text-foreground">{study.year}</dd>
              </div>
            </div>
            <div>
              <dt className="text-[11px] tracking-widest text-metallic uppercase">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {study.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[rgb(var(--overlay)/10%)] px-2.5 py-0.5 text-xs text-metallic-light"
                  >
                    {s}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-widest text-metallic uppercase">Missions</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {study.missions.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-[rgb(var(--overlay)/10%)] px-2.5 py-0.5 text-xs text-metallic-light"
                  >
                    {m}
                  </span>
                ))}
              </dd>
            </div>
          </motion.dl>
        </header>

        {/* Couverture, parallax douce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.5 }}
        >
          <div
            ref={coverRef}
            className="card-surface relative aspect-[16/10] overflow-hidden rounded-3xl border border-[rgb(var(--overlay)/10%)] md:aspect-[16/9]"
          >
            <motion.div
              style={prefersReducedMotion ? undefined : { y: coverY }}
              className="absolute -inset-y-[6%] inset-x-0"
            >
              <Image
                src={study.cover.src}
                alt={study.cover.alt}
                fill
                priority
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover object-top"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Chiffres factuels */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid grid-cols-2 gap-6 border-t border-[rgb(var(--overlay)/8%)] pt-8 md:grid-cols-4"
        >
          {study.stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-metallic">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Le point de départ */}
        <section className="mt-24 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading kicker="Le contexte" title="Le point de départ" />
          <Prose paragraphs={study.context} />
        </section>

        {/* Ce qu'on a construit */}
        <section className="mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading kicker="La réponse" title="Ce qu'on a construit" />
          <Prose paragraphs={study.approach} />
        </section>

        {/* Galerie : vraies captures du projet */}
        <section className="mt-24">
          <div className="mb-10">
            <SectionHeading kicker="En images" title="Le produit, tel qu'il tourne" />
          </div>
          <motion.div
            variants={staggerContainer(0.14, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className={`grid gap-6 ${study.mobileShot ? 'md:grid-cols-[1.5fr_0.75fr]' : 'md:grid-cols-2'}`}
          >
            <div className="space-y-6">
              {study.shots.map((shot) => (
                <motion.figure key={shot.src} variants={fadeUp}>
                  <div className="card-surface relative aspect-[16/10] overflow-hidden rounded-2xl border border-[rgb(var(--overlay)/10%)]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  {shot.caption && <figcaption className="mt-3 text-sm text-metallic">{shot.caption}</figcaption>}
                </motion.figure>
              ))}
            </div>
            {study.mobileShot && (
              <motion.figure variants={fadeUp} className="mx-auto w-full max-w-[300px] md:mx-0">
                {/* Cadre téléphone minimal : bordure épaisse arrondie, aucun asset */}
                <div className="card-surface relative aspect-[390/700] overflow-hidden rounded-[2rem] border-[6px] border-[rgb(var(--overlay)/12%)]">
                  <Image
                    src={study.mobileShot.src}
                    alt={study.mobileShot.alt}
                    fill
                    sizes="300px"
                    className="object-cover object-top"
                  />
                </div>
                {study.mobileShot.caption && (
                  <figcaption className="mt-3 text-sm text-metallic">{study.mobileShot.caption}</figcaption>
                )}
              </motion.figure>
            )}
          </motion.div>
        </section>

        {/* Démo live */}
        {study.demo && (
          <section id="demo" className="mt-24 scroll-mt-24">
            <div className="mb-4">
              <SectionHeading kicker="Démo live" title={study.demoTitle ?? 'Testez par vous-même'} />
            </div>
            {study.demoNote && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
                className="mb-8 max-w-2xl text-base leading-relaxed text-metallic-light"
              >
                {study.demoNote}
              </motion.p>
            )}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease }}
              className="card-surface rounded-3xl border border-[rgb(var(--overlay)/10%)] bg-[rgb(var(--overlay)/2%)] p-2 md:p-3"
            >
              {study.demo === 'fundedcalc' ? <FundedCalcDemo /> : <BlackjackDemo />}
            </motion.div>
            {study.liveUrl && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="mt-5 text-sm text-metallic"
              >
                Convaincu ?{' '}
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-metallic-light underline decoration-[rgb(var(--overlay)/20%)] underline-offset-4 transition-colors hover:text-foreground"
                >
                  L'outil complet est en ligne
                </a>
                .
              </motion.p>
            )}
          </section>
        )}

        {/* Navigation entre projets */}
        <nav aria-label="Autres réalisations" className="mt-24 grid gap-4 border-t border-[rgb(var(--overlay)/8%)] pt-10 md:grid-cols-2">
          <Link
            href={`/projets/${prev.slug}`}
            className="card-surface group rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] p-6 transition-colors duration-500 hover:border-[rgb(var(--overlay)/20%)]"
          >
            <p className="mb-2 flex items-center gap-2 text-xs tracking-widest text-metallic uppercase">
              <ArrowLeft size={13} className="transition-transform duration-500 group-hover:-translate-x-1" />
              Projet précédent
            </p>
            <p className="text-lg font-semibold text-foreground">{prev.name}</p>
          </Link>
          <Link
            href={`/projets/${next.slug}`}
            className="card-surface group rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] p-6 text-right transition-colors duration-500 hover:border-[rgb(var(--overlay)/20%)]"
          >
            <p className="mb-2 flex items-center justify-end gap-2 text-xs tracking-widest text-metallic uppercase">
              Projet suivant
              <ArrowRight size={13} className="transition-transform duration-500 group-hover:translate-x-1" />
            </p>
            <p className="text-lg font-semibold text-foreground">{next.name}</p>
          </Link>
        </nav>
      </div>
    </article>
  )
}
