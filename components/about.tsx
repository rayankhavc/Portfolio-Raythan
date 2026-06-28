import { FadeIn } from "./fade-in"

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 lg:px-8 bg-black border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <FadeIn>
            <p className="text-xs font-medium text-[#86868b] uppercase tracking-widest mb-6">
              À propos
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Une agence indépendante,{" "}
              <span className="text-[#86868b]">basée à Nantes.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} className="space-y-5 pt-2 md:pt-16">
            <p className="text-[#86868b] font-light leading-relaxed text-lg">
              Raythan Web Design conçoit des sites vitrine et des applications
              web pour les commerces et les projets digitaux ambitieux.
            </p>
            <p className="text-[#555] font-light leading-relaxed text-sm">
              Notre approche : livrer vite, livrer propre. No-code pour les
              besoins immédiats, développement sur-mesure quand le projet
              l&apos;exige.
            </p>

            <div className="pt-5 border-t border-[#111]">
              <p className="text-xs font-medium text-[#555] uppercase tracking-widest mb-3">
                Stack
              </p>
              <p className="text-[#86868b] font-light text-sm leading-relaxed">
                Next.js · React · Astro · TypeScript · Tailwind CSS · Vercel ·
                GitHub · Squarespace
              </p>
              <p className="mt-2 text-[#333] text-xs font-light">
                Workflow IA-augmenté · Claude · v0
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-3 gap-px mt-20 bg-[#1a1a1a] rounded-2xl overflow-hidden">
            {[
              { value: "7", label: "Projets livrés" },
              { value: "2", label: "Apps en production" },
              { value: "100%", label: "Remote France" },
            ].map((stat) => (
              <div key={stat.label} className="bg-black px-6 py-10 text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-[#555] font-light uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}