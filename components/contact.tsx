export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
          Un projet en tête ?
        </h2>

        <a
          href="mailto:raythanwebdesign@gmail.com"
          className="inline-block text-2xl sm:text-3xl md:text-4xl font-light text-[#86868b] hover:text-white transition-colors duration-300 tracking-tight mb-16"
        >
          raythanwebdesign@gmail.com
        </a>

        <div className="max-w-lg mx-auto mt-12">
          <form action="https://formspree.io/f/raythanwebdesign@gmail.com" method="POST" className="flex flex-col gap-4">
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              required
              className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#333333] rounded-xl text-white placeholder-[#86868b] text-sm focus:outline-none focus:border-[#86868b] transition-colors duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#333333] rounded-xl text-white placeholder-[#86868b] text-sm focus:outline-none focus:border-[#86868b] transition-colors duration-300"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              rows={5}
              required
              className="w-full px-5 py-4 bg-[#0a0a0a] border border-[#333333] rounded-xl text-white placeholder-[#86868b] text-sm focus:outline-none focus:border-[#86868b] transition-colors duration-300 resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-[#f5f5f7] transition-all duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}