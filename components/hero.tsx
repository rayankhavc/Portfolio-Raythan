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
          Expériences numériques de haute précision. Nous fusionnons design premium et développement sur-mesure pour propulser votre marque.
        </p>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="#projets"
            className="inline-flex items-center px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-[#f5f5f7] transition-all duration-300"
          >
            Découvrir nos projets
          </a>
        </div>

        {/* Space for future JS interaction */}
        <div className="mt-32 h-32 md:h-48" />
      </div>
    </section>
  )
}
