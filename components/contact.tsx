"use client"

import { useState } from "react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Formspree endpoint
    const response = await fetch("https://formspree.io/f/xyzyvqwz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })

    if (response.ok) {
      setSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-[#86868b] font-light text-lg">
            Décrivez votre besoin, on revient vers vous sous 24h.
          </p>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="text-center py-12">
            <p className="text-white text-xl font-light">Merci ! On vous recontacte très vite.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nom"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-6 py-4 bg-black border border-[#333333] rounded-xl text-white placeholder-[#86868b] font-light focus:outline-none focus:border-[#86868b] transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-6 py-4 bg-black border border-[#333333] rounded-xl text-white placeholder-[#86868b] font-light focus:outline-none focus:border-[#86868b] transition-colors duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-6 py-4 bg-black border border-[#333333] rounded-xl text-white placeholder-[#86868b] font-light focus:outline-none focus:border-[#86868b] transition-colors duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-[#f5f5f7] transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        )}

        {/* Direct Email */}
        <div className="mt-12 text-center">
          <p className="text-[#86868b] font-light text-sm mb-2">Ou écrivez-nous directement :</p>
          <a
            href="mailto:raythanwebdesign@gmail.com"
            className="text-white hover:text-[#86868b] transition-colors duration-300 font-light"
          >
            raythanwebdesign@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
