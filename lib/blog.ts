import fs from 'node:fs'
import path from 'node:path'
import { Marked } from 'marked'
import { CASE_STUDIES } from '@/lib/data'

// Blog : un article = un fichier Markdown dans content/blog/, avec un
// en-tête « clé: valeur » entre deux lignes « --- ». Les brouillons arrivent
// par PR (rédigés par la tâche planifiée, relus par Rayan avant merge) : le
// fichier est la seule source, la page, le sitemap, le JSON-LD et llms.txt
// en dérivent.
//
// Les règles de rédaction qui peuvent se vérifier mécaniquement le sont ici,
// au build : un article qui les enfreint fait échouer la PR au lieu de
// partir en production. Les autres sont dans content/blog/GUIDE.md.

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  /** Date de publication, AAAA-MM-JJ. */
  date: string
  /** Date de dernière révision réelle, AAAA-MM-JJ. Absente = date. */
  updated?: string
  /** Rubrique courte, affichée en kicker. */
  category: string
  /** Étude de cas citée en preuve, affichée en fin d'article. */
  caseStudySlug?: string
  readingMinutes: number
  html: string
}

const REQUIRED = ['title', 'description', 'date', 'category'] as const
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

function parseFile(file: string): { meta: Record<string, string>; body: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error(`content/blog/${file} : en-tête « --- » manquant`)
  const meta: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue
    const i = line.indexOf(':')
    if (i < 1) throw new Error(`content/blog/${file} : ligne d'en-tête illisible « ${line} »`)
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '')
  }
  return { meta, body: match[2] }
}

function check(file: string, meta: Record<string, string>, body: string) {
  const fail = (why: string) => {
    throw new Error(`content/blog/${file} : ${why}`)
  }
  for (const key of REQUIRED) if (!meta[key]) fail(`champ « ${key} » manquant`)
  if (!DATE_RE.test(meta.date)) fail('date au format AAAA-MM-JJ attendue')
  if (meta.updated && !DATE_RE.test(meta.updated)) fail('updated au format AAAA-MM-JJ attendu')
  if (meta.description.length > 160) fail(`description de ${meta.description.length} caractères, 160 maximum`)
  if (meta.title.length > 70) fail(`titre de ${meta.title.length} caractères, 70 maximum`)
  // Rayan ne veut jamais de tiret long dans le texte visible (CLAUDE.md).
  if ([meta.title, meta.description, body].some((t) => t.includes('—'))) fail('tiret long (—) interdit')
  // Le titre de l'article est le h1 de la page : un « # » dans le corps en
  // ferait un second.
  if (/^# /m.test(body)) fail('pas de titre « # » dans le corps, commencer à « ## »')
  if (meta.caseStudySlug && !CASE_STUDIES.some((c) => c.slug === meta.caseStudySlug)) {
    fail(`caseStudySlug « ${meta.caseStudySlug} » ne correspond à aucune étude de cas`)
  }
}

// Liens sortants : nouvel onglet et rel explicite. Liens internes : tels
// quels, ils restent dans la navigation du site.
const marked = new Marked({
  gfm: true,
  renderer: {
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens)
      const t = title ? ` title="${title}"` : ''
      if (/^https?:\/\//.test(href) && !href.startsWith('https://raythan.fr')) {
        return `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`
      }
      return `<a href="${href}"${t}>${text}</a>`
    },
  },
})

let cache: BlogPost[] | null = null

/** Articles publiés, du plus récent au plus ancien. */
export function getAllPosts(): BlogPost[] {
  if (cache) return cache
  const files = fs.existsSync(BLOG_DIR)
    ? fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') && f === f.toLowerCase() && !/^[A-Z]/.test(f))
    : []
  const posts = files.flatMap((file) => {
    const slug = file.replace(/\.md$/, '')
    if (!SLUG_RE.test(slug)) throw new Error(`content/blog/${file} : nom de fichier en minuscules-avec-tirets attendu`)
    const { meta, body } = parseFile(file)
    if (meta.draft === 'true') return []
    check(file, meta, body)
    const words = body.split(/\s+/).filter(Boolean).length
    return [
      {
        slug,
        title: meta.title,
        description: meta.description,
        date: meta.date,
        updated: meta.updated || undefined,
        category: meta.category,
        caseStudySlug: meta.caseStudySlug || undefined,
        readingMinutes: Math.max(1, Math.round(words / 220)),
        html: marked.parse(body, { async: false }),
      },
    ]
  })
  cache = posts.sort((a, b) => b.date.localeCompare(a.date))
  return cache
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

/** « 12 octobre 2026 », lu comme une date civile (pas de bascule UTC). */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
