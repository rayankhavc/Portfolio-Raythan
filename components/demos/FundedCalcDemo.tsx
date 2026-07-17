'use client'
import { useState } from 'react'

/* Démo live embarquée dans l'étude de cas FundedCalc.
   Le moteur Monte Carlo ci-dessous est porté à l'identique depuis l'outil en
   production (FundedCalc/src/components/App.jsx) : mêmes règles, mêmes
   paramètres, 5 000 simulations réelles par phase, calculées dans le
   navigateur du visiteur. L'habillage rétro-terminal ambré est celui de
   l'outil, volontairement distinct de l'identité du site : c'est le produit
   du client qu'on montre, pas une maquette. */

interface Phase {
  name: string
  profitTarget: number
  maxDD: number
  dailyDD: number
  minDays: number
  maxDays: number
}

interface FirmPreset {
  key: string
  name: string
  phases: Phase[]
}

const FIRMS: FirmPreset[] = [
  {
    key: 'ftmo',
    name: 'FTMO',
    phases: [
      { name: 'Phase 1', profitTarget: 10, maxDD: 10, dailyDD: 5, minDays: 10, maxDays: 30 },
      { name: 'Phase 2', profitTarget: 5, maxDD: 10, dailyDD: 5, minDays: 10, maxDays: 60 },
    ],
  },
  {
    key: 'the5ers',
    name: 'The 5%ers',
    phases: [
      { name: 'Phase 1', profitTarget: 8, maxDD: 8, dailyDD: 4, minDays: 0, maxDays: 60 },
      { name: 'Phase 2', profitTarget: 5, maxDD: 8, dailyDD: 4, minDays: 0, maxDays: 60 },
    ],
  },
  {
    key: 'fundingpips',
    name: 'Funding Pips',
    phases: [
      { name: 'Phase 1', profitTarget: 8, maxDD: 8, dailyDD: 5, minDays: 0, maxDays: 30 },
      { name: 'Phase 2', profitTarget: 5, maxDD: 8, dailyDD: 5, minDays: 0, maxDays: 60 },
    ],
  },
  {
    key: 'apex',
    name: 'Apex Trader',
    phases: [{ name: 'Évaluation', profitTarget: 6, maxDD: 6, dailyDD: 3, minDays: 7, maxDays: 30 }],
  },
]

interface SimResult {
  prob: number
  expectedTrades: number
  expectedDays: number
  avgDD: number
  riskRuin: number
  curves: { pts: number[]; pass: boolean }[]
}

/* Moteur Monte Carlo : porté tel quel depuis l'outil en production. */
function simulate(
  winRate: number,
  rr: number,
  riskPct: number,
  tradesPerDay: number,
  phase: Phase,
  numSims = 5000,
): SimResult {
  const { profitTarget, maxDD, dailyDD, minDays, maxDays } = phase
  const pWin = winRate / 100
  let passes = 0
  let ruins = 0
  let sumT = 0
  let sumDD = 0
  let sumDays = 0
  const curves: { pts: number[]; pass: boolean }[] = []

  for (let s = 0; s < numSims; s++) {
    let eq = 100
    let loEq = 100
    let passed = false
    let failed = false
    let td = 0
    let daysDone = 0
    let targetMet = false
    const curve = [100]

    outer: for (let day = 0; day < maxDays; day++) {
      daysDone = day + 1
      if (targetMet) {
        curve.push(eq)
        if (daysDone >= minDays) {
          passed = true
          break
        }
        continue
      }
      const dayStart = eq
      for (let tr = 0; tr < tradesPerDay; tr++) {
        const win = Math.random() < pWin
        const risk = eq * (riskPct / 100)
        eq += win ? risk * rr : -risk
        td++
        if (eq < loEq) loEq = eq
        if (dayStart > 0 && ((dayStart - eq) / dayStart) * 100 >= dailyDD) { failed = true; ruins++; break outer }
        if (100 - eq >= maxDD) { failed = true; ruins++; break outer }
        if (eq <= 0) { failed = true; ruins++; break outer }
        if (eq - 100 >= profitTarget) { targetMet = true; break }
      }
      if (!failed) curve.push(parseFloat(eq.toFixed(3)))
    }

    if (!passed && !failed) {
      if (targetMet && daysDone >= minDays) passed = true
      else failed = true
    }
    if (passed) { passes++; sumDays += daysDone }
    sumT += td
    sumDD += 100 - loEq
    if (curves.length < 60) curves.push({ pts: curve, pass: passed })
  }

  return {
    prob: passes / numSims,
    expectedTrades: Math.round(sumT / numSims),
    expectedDays: passes > 0 ? Math.round(sumDays / passes) : 0,
    avgDD: sumDD / numSims,
    riskRuin: ruins / numSims,
    curves,
  }
}

interface Results {
  overall: number
  probs: number[]
  trades: number
  days: number
  ruin: number
  avgDD: number
  curves: { pts: number[]; pass: boolean }[]
}

const AMBER = '#ffaa00'
const probColor = (p: number) =>
  p > 0.65 ? '#99ff00' : p > 0.4 ? '#ffdd00' : p > 0.25 ? '#ffaa00' : p > 0.1 ? '#ff8833' : '#ff5533'
const probLabel = (p: number) =>
  p > 0.65 ? 'EXCELLENTE' : p > 0.4 ? 'ÉLEVÉE' : p > 0.25 ? 'MODÉRÉE' : p > 0.1 ? 'FAIBLE' : 'TRÈS FAIBLE'

function Slider({
  label, value, display, min, max, step, onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between font-mono text-[11px] tracking-wider uppercase">
        <span className="text-[#cc9922]">{label}</span>
        <span className="text-[#ffcc44] text-sm">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-1.5 w-full accent-[#ffaa00] h-1 cursor-pointer"
      />
    </label>
  )
}

function EquityChart({ curves, phase }: { curves: { pts: number[]; pass: boolean }[]; phase: Phase }) {
  const W = 600
  const H = 190
  const P = { t: 12, r: 12, b: 16, l: 46 }
  const cw = W - P.l - P.r
  const ch = H - P.t - P.b
  let maxLen = 2
  let minV = Infinity
  let maxV = -Infinity
  curves.forEach((c) => {
    maxLen = Math.max(maxLen, c.pts.length)
    c.pts.forEach((v) => {
      minV = Math.min(minV, v)
      maxV = Math.max(maxV, v)
    })
  })
  const vr = maxV - minV || 1
  const X = (i: number) => P.l + (i / (maxLen - 1)) * cw
  const Y = (v: number) => P.t + ch - ((v - minV) / vr) * ch
  const pathD = (pts: number[]) =>
    pts.map((v, i) => `${i ? 'L' : 'M'}${X(i).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ')
  const ty = Y(100 + phase.profitTarget)
  const dy = Y(100 - phase.maxDD)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="block w-full" role="img" aria-label="Courbes d'équité simulées : trajectoires réussies en vert, échouées en rouge">
      <line x1={P.l} y1={ty} x2={W - P.r} y2={ty} stroke="rgba(153,255,0,.6)" strokeWidth={1} strokeDasharray="5 4" />
      <line x1={P.l} y1={dy} x2={W - P.r} y2={dy} stroke="rgba(255,80,40,.6)" strokeWidth={1} strokeDasharray="5 4" />
      {curves.filter((c) => !c.pass).map((c, i) => (
        <path key={`f${i}`} d={pathD(c.pts)} fill="none" stroke="rgba(255,80,40,.2)" strokeWidth={1} />
      ))}
      {curves.filter((c) => c.pass).map((c, i) => (
        <path key={`p${i}`} d={pathD(c.pts)} fill="none" stroke="rgba(153,255,0,.22)" strokeWidth={1} />
      ))}
      <text x={P.l - 5} y={ty + 4} textAnchor="end" fill="#99ff00" fontSize={10} fontFamily="monospace">
        +{phase.profitTarget}%
      </text>
      <text x={P.l - 5} y={dy + 4} textAnchor="end" fill="#ff7755" fontSize={10} fontFamily="monospace">
        -{phase.maxDD}%
      </text>
    </svg>
  )
}

export function FundedCalcDemo() {
  const [firmKey, setFirmKey] = useState('ftmo')
  const [winRate, setWinRate] = useState(50)
  const [rr, setRr] = useState(2)
  const [riskPct, setRiskPct] = useState(1)
  const [tpd, setTpd] = useState(3)
  const [running, setRunning] = useState(false)
  const [results, setResults] = useState<Results | null>(null)

  const firm = FIRMS.find((f) => f.key === firmKey) ?? FIRMS[0]
  const ev = (winRate / 100) * rr - (1 - winRate / 100)

  const run = () => {
    setRunning(true)
    setResults(null)
    // setTimeout libère le thread de rendu pour afficher l'état « calcul »
    // avant la boucle synchrone (~30 à 80 ms pour 2 phases × 5 000 passes).
    setTimeout(() => {
      try {
        const pr = firm.phases.map((phase) => simulate(winRate, rr, riskPct, tpd, phase))
        setResults({
          overall: pr.reduce((a, r) => a * r.prob, 1),
          probs: pr.map((r) => r.prob),
          trades: pr.reduce((a, r) => a + r.expectedTrades, 0),
          days: pr.reduce((a, r) => a + r.expectedDays, 0),
          ruin: pr[0].riskRuin,
          avgDD: pr[0].avgDD,
          curves: pr[0].curves,
        })
      } finally {
        setRunning(false)
      }
    }, 60)
  }

  const pct = results ? Math.round(results.overall * 100) : null

  return (
    <div className="overflow-hidden rounded-2xl border border-[#553300] bg-[#060400] text-left">
      {/* Barre de fenêtre : c'est l'outil du client qui tourne ici, pas une image */}
      <div className="flex items-center justify-between border-b border-[#2a1a00] bg-[#0c0800] px-4 py-2.5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#cc9922] uppercase">
          fundedcalc · démo live
        </p>
        <span className="font-mono text-[11px] text-[#775500]" aria-hidden="true">
          ▮
        </span>
      </div>

      <div className="grid gap-6 p-5 md:grid-cols-2 md:p-7">
        {/* Paramètres */}
        <div>
          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#ffcc44] uppercase">&gt; Prop firm</p>
          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Choix de la prop firm">
            {FIRMS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => {
                  setFirmKey(f.key)
                  setResults(null)
                }}
                className={`border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-colors ${
                  f.key === firmKey
                    ? 'border-[#ffaa00] bg-[#ffaa00]/10 text-[#ffcc44]'
                    : 'border-[#553300] text-[#cc9922] hover:border-[#aa7700] hover:text-[#ffcc44]'
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>

          <p className="mb-2 font-mono text-xs tracking-[0.2em] text-[#ffcc44] uppercase">&gt; Challenge</p>
          <div className="mb-6 space-y-1.5">
            {firm.phases.map((p) => (
              <p key={p.name} className="font-mono text-[11px] text-[#cc9922]">
                <span className="text-[#ffcc44]">{p.name.toUpperCase()}</span>
                {'  '}objectif +{p.profitTarget}% · DD max {p.maxDD}% · DD jour {p.dailyDD}%
              </p>
            ))}
          </div>

          <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#ffcc44] uppercase">&gt; Votre stratégie</p>
          <div className="space-y-4">
            <Slider label="Taux de réussite" value={winRate} display={`${winRate}%`} min={30} max={70} step={1} onChange={setWinRate} />
            <Slider label="Ratio risque / rendement" value={rr} display={`1:${rr}`} min={0.5} max={4} step={0.1} onChange={setRr} />
            <Slider label="Risque par trade" value={riskPct} display={`${riskPct}%`} min={0.25} max={3} step={0.25} onChange={setRiskPct} />
            <Slider label="Trades par jour" value={tpd} display={`${tpd}`} min={1} max={10} step={1} onChange={setTpd} />
          </div>

          <p className="mt-4 font-mono text-[11px] text-[#cc9922]">
            Espérance par trade :{' '}
            <span style={{ color: ev >= 0 ? '#99ff00' : '#ff5533' }}>
              {ev >= 0 ? '+' : ''}
              {ev.toFixed(3)}R
            </span>
          </p>

          <button
            type="button"
            onClick={run}
            disabled={running}
            className="mt-6 w-full border-2 border-[#ffaa00] bg-transparent px-4 py-3.5 font-mono text-sm font-bold tracking-[0.3em] text-[#ffcc44] uppercase transition-colors hover:bg-[#ffaa00] hover:text-[#060400] disabled:cursor-not-allowed disabled:border-[#553300] disabled:text-[#775500] disabled:hover:bg-transparent"
          >
            {running ? 'Calcul en cours…' : '▶ Lancer 5 000 simulations'}
          </button>
        </div>

        {/* Résultats */}
        <div aria-live="polite">
          {!results && (
            <div className="flex h-full min-h-[280px] items-center justify-center border border-dashed border-[#553300] p-6">
              <p className="max-w-[26ch] text-center font-mono text-xs leading-relaxed tracking-wider text-[#cc9922] uppercase">
                {running ? 'Moteur Monte Carlo en cours…' : 'Réglez votre stratégie puis lancez la simulation'}
              </p>
            </div>
          )}
          {results && pct !== null && (
            <div>
              <p className="mb-1 font-mono text-xs tracking-[0.2em] text-[#ffcc44] uppercase">
                &gt; Probabilité globale de succès
              </p>
              <p
                className="font-mono text-7xl font-bold tabular-nums"
                style={{ color: probColor(results.overall), textShadow: `0 0 24px ${probColor(results.overall)}55` }}
              >
                {pct}%
              </p>
              <p className="mt-1 font-mono text-xs tracking-[0.3em] uppercase" style={{ color: probColor(results.overall) }}>
                ◆ {probLabel(results.overall)} ◆
              </p>

              <div className="mt-4 space-y-3">
                {results.probs.map((p, i) => (
                  <div key={i}>
                    <div className="flex justify-between font-mono text-[11px] tracking-wider text-[#cc9922] uppercase">
                      <span>{firm.phases[i].name}</span>
                      <span style={{ color: probColor(p) }}>{(p * 100).toFixed(1)}%</span>
                    </div>
                    <div className="mt-1 h-1.5 border border-[#2a1a00] bg-[#120d00]">
                      <div className="h-full" style={{ width: `${p * 100}%`, background: probColor(p) }} />
                    </div>
                  </div>
                ))}
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-2">
                {[
                  { label: 'Trades attendus', val: String(results.trades) },
                  { label: 'Jours attendus', val: `${results.days}j` },
                  { label: 'Risque de ruine', val: `${(results.ruin * 100).toFixed(1)}%` },
                  { label: 'DD max moyen', val: `${results.avgDD.toFixed(2)}%` },
                ].map((s) => (
                  <div key={s.label} className="border border-[#2a1a00] bg-[#0c0800] px-3 py-2">
                    <dt className="font-mono text-[10px] tracking-wider text-[#cc9922] uppercase">{s.label}</dt>
                    <dd className="font-mono text-lg text-[#ffcc44] tabular-nums">{s.val}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 border border-[#2a1a00] bg-[#0c0800] p-2">
                <EquityChart curves={results.curves} phase={firm.phases[0]} />
              </div>
              <p className="mt-3 font-mono text-[10px] leading-relaxed text-[#997711]">
                Estimations probabilistes, pas un conseil financier. Vérifiez toujours les règles officielles de la firm.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
