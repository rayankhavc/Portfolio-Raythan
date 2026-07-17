'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, MousePointerClick } from 'lucide-react'
import { CASE_STUDIES } from '@/lib/data'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'

/* Section « Ils nous ont fait confiance » de la home : trois projets en
   vitrine, le portfolio complet est sur /portfolio. */
const TEASED_SLUGS = ['chikano', 'fundedcalc', 'bj-coach-pro']

export function WorkTeaser() {
  const studies = TEASED_SLUGS.map((slug) => CASE_STUDIES.find((c) => c.slug === slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  )

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium tracking-widest text-accent uppercase">
              Ils nous ont fait confiance
            </p>
            <h2 className="font-semibold tracking-tight text-display-sm leading-tight text-foreground">
              Des projets réels,
              <br />
              <span className="text-metallic">en production.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex shrink-0 items-center gap-2 text-sm text-metallic-light transition-colors hover:text-foreground"
          >
            Voir toutes les réalisations <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {studies.map((study) => (
            <motion.div key={study.slug} variants={fadeUp} className="h-full">
              <Link
                href={`/projets/${study.slug}`}
                className="card-surface group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/3%)] transition-all duration-500 hover:border-[rgb(var(--overlay)/20%)] hover:bg-[rgb(var(--overlay)/6%)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={study.cover.src}
                    alt={study.cover.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">{study.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-metallic">{study.tagline}</p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs text-metallic">{study.type}</span>
                    {study.demo && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-metallic-light">
                        <MousePointerClick size={12} />
                        Démo live
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
