const stackMain = ["Next.js", "React", "Astro", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Squarespace"]
const stackAI = ["Workflow IA-augmenté", "Claude", "v0"]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg md:text-xl text-[#86868b] font-light leading-relaxed text-pretty">
              Raythan Web Design, c&apos;est Rayan Khalifa et Ethan Guery, une agence indépendante basée à Nantes. On travaille avec des commerces locaux qui ont besoin d&apos;un site rapide, et des entrepreneurs qui ont besoin d&apos;une application sur-mesure.
            </p>
          </div>

          {/* Right: Tags */}
          <div className="flex flex-col gap-4">
            {/* Main Stack */}
            <div className="flex flex-wrap gap-3 md:justify-end">
              {stackMain.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2.5 text-sm font-medium text-white border border-[#333333] rounded-full hover:border-[#86868b] transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* AI Stack (smaller, gray) */}
            <div className="flex flex-wrap gap-2 md:justify-end">
              {stackAI.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-xs font-medium text-[#86868b] border border-[#333333]/50 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
