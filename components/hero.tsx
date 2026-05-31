export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Title with Metallic Gradient */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          <span className="bg-gradient-to-b from-white via-white to-[#86868b] bg-clip-text text-transparent">
            RAYTHAN WEB DESIGN.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#86868b] font-light max-w-3xl mx-auto leading-relaxed text-pretty">
          Sites et applications qui convertissent. No-code pour les commerces locaux, développement sur-mesure pour les projets ambitieux.
        </p>

        {/* Two CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projets"
            className="inline-flex items-center px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-[#f5f5f7] transition-all duration-300"
          >
            Voir les projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-white text-sm font-medium rounded-full border border-[#333333] hover:border-[#86868b] transition-all duration-300"
          >
            Prendre contact
          </a>
        </div>

        {/* Stats Line */}
        <p className="mt-16 text-sm text-[#86868b] font-light tracking-wide">
          7 projets livrés · 2 apps en production · Nantes · Remote France
        </p>

        {/* Space for future JS interaction */}
        <div className="mt-16 h-16 md:h-24" />
      </div>
    </section>
  )
}
