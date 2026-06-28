'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CalendarDays, Mail, Clock } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/motion-variants'

const SERVICES_OPTIONS = [
  'Création de site web',
  'SEO & Référencement',
  'Réseaux sociaux',
  'Publicité Google & Meta',
  'Automatisation',
  'IA Métier',
  'Autre',
]

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
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C8FF00]/5 blur-[120px] rounded-full" />
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C8FF00] text-xs font-medium tracking-widest uppercase mb-4"
          >
            Parlons de votre projet
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="font-syne font-extrabold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            {['Démarrons', 'ensemble.'].map((w, i) => (
              <motion.span
                key={i}
                className={`inline-block mr-[0.25em] ${i === 1 ? 'text-[#C8FF00]' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -30 },
                  visible: {
                    opacity: 1, y: 0, rotateX: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-xl max-w-md mx-auto"
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
              className="rounded-3xl border border-white/8 bg-white/[0.02] p-8"
            >
              <h2 className="font-syne font-bold text-2xl text-white mb-6">
                Envoyez-nous un message
              </h2>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C8FF00]/10 flex items-center justify-center">
                    <Send size={22} className="text-[#C8FF00]" />
                  </div>
                  <div>
                    <p className="font-syne font-semibold text-white text-xl mb-1">
                      Message envoyé !
                    </p>
                    <p className="text-zinc-500 text-sm">
                      On revient vers vous très vite !
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="name">
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#C8FF00]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="email">
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#C8FF00]/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="phone">
                        Téléphone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+33 6 00 00 00 00"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#C8FF00]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="service">
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-400 focus:outline-none focus:border-[#C8FF00]/50 transition-colors appearance-none"
                      >
                        <option value="" className="bg-zinc-900">Choisir...</option>
                        {SERVICES_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-zinc-900">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-zinc-500 mb-1.5" htmlFor="message">
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#C8FF00]/50 transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs">
                      Une erreur s'est produite. Réessayez ou contactez-nous directement.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#C8FF00] text-black font-semibold py-3.5 rounded-xl hover:bg-white transition-colors text-sm flex items-center justify-center gap-2 disabled:opacity-50"
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

            {/* Right side — Cal + infos */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Cal.com card */}
              <div className="rounded-3xl border border-[#C8FF00]/20 bg-[#C8FF00]/5 p-8 flex-1">
                <div className="w-12 h-12 rounded-2xl bg-[#C8FF00]/10 flex items-center justify-center mb-5">
                  <CalendarDays size={20} className="text-[#C8FF00]" />
                </div>
                <h2 className="font-syne font-bold text-2xl text-white mb-2">
                  Réserver un appel
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  30 minutes, 100% gratuit. On analyse votre situation/objectifs, et on vous dit exactement ce qu'on peut faire pour vous.
                </p>
                <a
                  href="https://cal.com/rayankhavc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C8FF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors text-sm"
                >
                  <CalendarDays size={15} />
                  Choisir un créneau
                </a>
              </div>

              {/* Infos */}
              <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 mb-0.5">Email</p>
                    <a
                      href="mailto:raythanwebdesign@gmail.com"
                      className="text-sm text-white hover:text-[#C8FF00] transition-colors"
                    >
                      raythanwebdesign@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <Clock size={14} className="text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 mb-0.5">Délai de réponse</p>
                    <p className="text-sm text-white">Sous 24h en jours ouvrés</p>
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
