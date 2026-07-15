'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CalendarDays, Mail, Phone, Clock } from 'lucide-react'
import { ease, fadeUp } from '@/lib/motion-variants'
import { CopyableLink } from '@/components/CopyableLink'

const SERVICES_OPTIONS = [
  'Création de site web',
  'SEO & Référencement',
  'Réseaux sociaux',
  'Publicité Google & Meta',
  'Automatisation',
  'IA Métier',
  'Autre',
]

const INPUT_CLASSES =
  'w-full bg-[rgb(var(--overlay)/5%)] border border-[rgb(var(--overlay)/10%)] rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-metallic focus:outline-none focus:border-accent/60 transition-colors'

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mjgdbkej', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/[0.04] blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="text-accent text-xs font-medium tracking-widest uppercase mb-4"
          >
            Parlons de votre projet
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="font-semibold tracking-tight text-display-md text-foreground leading-tight mb-6"
          >
            Démarrons{' '}
            <span className="bg-gradient-to-r from-foreground to-metallic-light bg-clip-text text-transparent">
              ensemble.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="text-metallic-light text-xl max-w-md mx-auto"
          >
            Un message ou un appel, on s'adapte à vous.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="card-surface rounded-3xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/2%)] p-8"
            >
              <h2 className="font-semibold tracking-tight text-2xl text-foreground mb-6">
                Envoyez-nous un message
              </h2>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease }}
                  className="flex flex-col items-center justify-center h-64 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <Send size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xl mb-1">
                      Message envoyé !
                    </p>
                    <p className="text-metallic text-sm">
                      On revient vers vous très vite !
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-metallic mb-1.5" htmlFor="name">
                        Nom complet
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className={INPUT_CLASSES}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-metallic mb-1.5" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.fr"
                        className={INPUT_CLASSES}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-metallic mb-1.5" htmlFor="phone">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+33 6 00 00 00 00"
                        className={INPUT_CLASSES}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-metallic mb-1.5" htmlFor="service">
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-[rgb(var(--overlay)/5%)] border border-[rgb(var(--overlay)/10%)] rounded-xl px-4 py-3 text-sm text-metallic-light focus:outline-none focus:border-accent/60 transition-colors appearance-none"
                      >
                        <option value="" className="bg-secondary">Choisir...</option>
                        {SERVICES_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-secondary">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-metallic mb-1.5" htmlFor="message">
                      Votre projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins, votre délai idéal..."
                      className={`${INPUT_CLASSES} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-[var(--error-text)] text-xs">
                      Une erreur s'est produite. Réessayez ou contactez-nous directement.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="cta-magnetic w-full bg-accent text-accent-foreground font-semibold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        <Send size={14} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right side Cal + infos */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Cal.com card */}
              <div className="rounded-3xl border border-accent/15 bg-accent/[0.04] p-8 flex-1">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <CalendarDays size={20} className="text-accent" />
                </div>
                <h2 className="font-semibold tracking-tight text-2xl text-foreground mb-2">
                  Réserver un appel
                </h2>
                <p className="text-metallic-light text-sm leading-relaxed mb-6">
                  30 minutes, 100% gratuit. On analyse votre situation/objectifs, et on vous dit exactement ce qu'on peut faire pour vous.
                </p>
                <a
                  href="https://cal.com/rayankhavc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-magnetic inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-full text-sm"
                >
                  <CalendarDays size={15} />
                  Choisir un créneau
                </a>
              </div>

              {/* Infos */}
              <div className="card-surface rounded-3xl border border-[rgb(var(--overlay)/8%)] bg-[rgb(var(--overlay)/2%)] p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[rgb(var(--overlay)/5%)] flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-metallic-light" />
                  </div>
                  <div>
                    <p className="text-xs text-metallic mb-0.5">Email</p>
                    <CopyableLink
                      href="mailto:raythanwebdesign@gmail.com"
                      label="raythanwebdesign@gmail.com"
                      copyValue="raythanwebdesign@gmail.com"
                      className="text-sm text-foreground hover:text-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[rgb(var(--overlay)/5%)] flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-metallic-light" />
                  </div>
                  <div>
                    <p className="text-xs text-metallic mb-0.5">Téléphone</p>
                    <CopyableLink
                      href="tel:+33651598293"
                      label="06 51 59 82 93"
                      copyValue="06 51 59 82 93"
                      className="text-sm text-foreground hover:text-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[rgb(var(--overlay)/5%)] flex items-center justify-center shrink-0">
                    <Clock size={14} className="text-metallic-light" />
                  </div>
                  <div>
                    <p className="text-xs text-metallic mb-0.5">Délai de réponse</p>
                    <p className="text-sm text-foreground">Sous 24h en jours ouvrés</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
