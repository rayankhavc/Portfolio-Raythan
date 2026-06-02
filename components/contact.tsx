"use client"
import { useState } from "react"
import { ArrowUpRight, Calendar, Send } from "lucide-react"
import { FadeIn } from "./fade-in"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://formspree.io/f/mjgdbkej", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 lg:px-8 bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-xl mx-auto">
        <FadeIn className="text-center mb-12">
          <p className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-[#86868b] font-light mb-8">
            Décrivez-le en quelques mots. Réponse sous 24h.
          </p>

          <a
            href="https://cal.com/rayankhavc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2a2a2a] text-[#86868b] text-sm rounded-full hover:border-[#555] hover:text-white transition-all duration-300"
          >
            <Calendar className="w-4 h-4" />
            Réserver un appel de 30 min
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-4 mt-8 mb-2">
            <div className="flex-1 h-px bg-[#1a1a1a]" />
            <span className="text-xs text-[#444]">ou</span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>
        </FadeIn>

        {status === "success" ? (
          <FadeIn>
            <div className="text-center py-16 border border-[#1a1a1a] rounded-2xl">
              <p className="text-3xl mb-3">✓</p>
              <p className="text-xl font-semibold text-white mb-2">
                Message envoyé
              </p>
              <p className="text-[#86868b] font-light">
                On revient vers vous sous 24h.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Votre nom"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-5 py-4 bg-[#080808] border border-[#1a1a1a] rounded-xl text-white placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Votre email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-5 py-4 bg-[#080808] border border-[#1a1a1a] rounded-xl text-white placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors text-sm"
              />
              <textarea
                placeholder="Votre projet en quelques mots..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full px-5 py-4 bg-[#080808] border border-[#1a1a1a] rounded-xl text-white placeholder-[#444] focus:outline-none focus:border-[#333] transition-colors text-sm resize-none"
              />
              {status === "error" && (
                <p className="text-red-400 text-xs">
                  Erreur. Réessayez ou écrivez à raythanwebdesign@gmail.com
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-white text-black text-sm font-medium rounded-xl hover:bg-[#f5f5f7] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        )}

        <FadeIn className="mt-10 text-center">
          <p className="text-[#444] text-xs">
            Direct :{" "}
            <a
              href="mailto:raythanwebdesign@gmail.com"
              className="text-[#555] hover:text-[#86868b] transition-colors"
            >
              raythanwebdesign@gmail.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  )
}