export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <div>
            <p className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-6">
              À propos
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Une agence indépendante,<br />
              <span className="text-[#86868b]">basée à Nantes.</span>
            </h2>
          </div>

          <div className="space-y-6 pt-2 md:pt-16">
            <p className="text-[#86868b] font-light leading-relaxed text-lg">
              Raythan Web Design conçoit des sites vitrine et des applications web pour les commerces locaux et les projets digitaux ambitieux.
            </p>
            <p className="text-[#86868b] font-light leading-relaxed">
              Notre approche : livrer vite, livrer propre. No-code pour les besoins immédiats, développement sur-mesure quand le projet l&apos;exige.
            </p>

            <div className="pt-4 border-t border-[#1a1a1a]">
              <p className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-4">
                Stack
              </p>
              <p className="text-white font-light text-sm leading-relaxed">
                Next.js · React · Astro · TypeScript · Tailwind CSS · Vercel · GitHub · Squarespace
              </p>
              <p className="mt-3 text-[#555] text-xs font-light">
                Workflow IA-augmenté · Claude · v0
              </p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-px mt-20 border border-[#1a1a1a] rounded-2xl overflow-hidden">
          {[
            { value: "7", label: "Projets livrés" },
            { value: "2", label: "Web Apps en production" },
            { value: "100%", label: "Remote France" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0a0a0a] px-6 py-8 text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-[#86868b] font-light">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}