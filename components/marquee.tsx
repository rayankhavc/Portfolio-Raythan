const ITEMS = [
  "Site Vitrine No-Code",
  "Application Sur-Mesure",
  "Refonte & Optimisation",
  "Next.js",
  "React",
  "Astro",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
  "Nantes, France",
]

export function Marquee() {
  const repeated = [...ITEMS, ...ITEMS]

  return (
    <div className="py-5 overflow-hidden border-y border-[#1a1a1a] bg-black">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee-scroll 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track flex whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-xs text-[#444] uppercase tracking-[0.15em] font-light px-5"
          >
            {item}
            <span className="text-[#2a2a2a] text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
