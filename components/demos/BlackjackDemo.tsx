'use client'
import { useState } from 'react'

/* Démo live embarquée dans l'étude de cas BJ Coach Pro.
   Les tableaux de stratégie et la fonction de décision sont portés à
   l'identique depuis le moteur testé unitairement de l'application
   (bj-coach-pro/src/lib/engine.ts) : 6 jeux, croupier reste sur 17 souple,
   double après séparation. L'habillage feutrine et or est celui de l'app. */

type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'
type Suit = '♠' | '♥' | '♦' | '♣'
interface PlayingCard {
  r: Rank
  s: Suit
}
type Action = 'H' | 'S' | 'D' | 'P'

/* Tableaux 6 jeux · S17 · DAS, portés depuis le moteur de l'application. */
const HARD: Record<number, string> = {
  5: 'HHHHHHHHHH', 6: 'HHHHHHHHHH', 7: 'HHHHHHHHHH', 8: 'HHHHHHHHHH',
  9: 'HDDDDHHHHH', 10: 'DDDDDDDDHH', 11: 'DDDDDDDDDH', 12: 'HHSSSHHHHH',
  13: 'SSSSSHHHHH', 14: 'SSSSSHHHHH', 15: 'SSSSSHHHHH', 16: 'SSSSSHHHHH',
  17: 'SSSSSSSSSS',
}
const SOFT: Record<number, string> = {
  13: 'HHHDDHHHHH', 14: 'HHHDDHHHHH', 15: 'HHDDDHHHHH', 16: 'HHDDDHHHHH',
  17: 'HDDDDHHHHH', 18: 'STTTTSSHHH', 19: 'SSSSSSSSSS', 20: 'SSSSSSSSSS',
}
const PAIRS: Record<number, string> = {
  2: 'YYYYYYNNNN', 3: 'YYYYYYNNNN', 4: 'NNNYYNNNNN', 5: 'NNNNNNNNNN',
  6: 'YYYYYNNNNN', 7: 'YYYYYYNNNN', 8: 'YYYYYYYYYY', 9: 'YYYYYNYYNN',
  10: 'NNNNNNNNNN', 11: 'YYYYYYYYYY',
}
const COLS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const
const SUITS: Suit[] = ['♠', '♥', '♦', '♣']
const TEN_RANKS: Rank[] = ['10', 'J', 'Q', 'K']

const dcol = (v: number) => (v >= 10 ? (v === 11 ? 9 : 8) : v - 2)
const cardValue = (c: PlayingCard) => (c.r === 'A' ? 11 : TEN_RANKS.includes(c.r) ? 10 : Number(c.r))

function handValue(cards: PlayingCard[]): { total: number; soft: boolean } {
  let total = 0
  let aces = 0
  for (const c of cards) {
    total += cardValue(c)
    if (c.r === 'A') aces++
  }
  while (total > 21 && aces > 0) {
    total -= 10
    aces--
  }
  return { total, soft: aces > 0 }
}

function strategy(cards: PlayingCard[], dv: number): Action {
  const col = dcol(dv)
  if (cards.length === 2 && cardValue(cards[0]) === cardValue(cards[1])) {
    if (PAIRS[cardValue(cards[0])][col] === 'Y') return 'P'
  }
  const { total, soft } = handValue(cards)
  let code: string
  if (soft) code = total >= 21 ? 'S' : (SOFT[Math.max(13, total)] || 'SSSSSSSSSS')[col]
  else code = total >= 17 ? 'S' : total <= 5 ? 'H' : HARD[total][col]
  if (code === 'T') return 'D'
  return code as Action
}

const pick = <T,>(arr: readonly T[]) => arr[Math.floor(Math.random() * arr.length)]

/* Tirage pondéré vers les zones piégeuses, comme le drill de l'application. */
function dealSituation(): { cards: PlayingCard[]; dv: number } {
  const roll = Math.random()
  const col = Math.floor(Math.random() * 10)
  const s1 = pick(SUITS)
  const s2 = pick(SUITS)
  if (roll < 0.5) {
    const rows = [9, 10, 11, 12, 13, 14, 15, 16, 9, 10, 11, 12, 13, 14, 15, 16, 5, 6, 7, 8, 17]
    const row = pick(rows)
    let a = 0
    let b = 0
    do {
      a = 2 + Math.floor(Math.random() * 9)
      b = row - a
    } while (a === b || b < 2 || b > 10)
    const rn = (n: number): Rank => (n === 10 ? pick(TEN_RANKS) : (String(n) as Rank))
    return { cards: [{ r: rn(a), s: s1 }, { r: rn(b), s: s2 }], dv: COLS[col] }
  }
  if (roll < 0.75) {
    const row = 13 + Math.floor(Math.random() * 8)
    return { cards: [{ r: 'A', s: s1 }, { r: String(row - 11) as Rank, s: s2 }], dv: COLS[col] }
  }
  const v = pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  const r: Rank = v === 11 ? 'A' : v === 10 ? pick(TEN_RANKS) : (String(v) as Rank)
  return { cards: [{ r, s: s1 }, { r, s: s2 }], dv: COLS[col] }
}

const ACTION_NAMES: Record<Action, string> = { H: 'Tirer', S: 'Rester', D: 'Doubler', P: 'Séparer' }

function explain(cards: PlayingCard[], dv: number, best: Action): string {
  const { total, soft } = handValue(cards)
  const isPair = cards.length === 2 && cardValue(cards[0]) === cardValue(cards[1])
  const weak = dv >= 2 && dv <= 6
  const dealer = dv === 11 ? 'un As' : `un ${dv}`
  if (best === 'P') {
    const pv = cardValue(cards[0])
    if (pv === 11) return 'Deux As séparés, ce sont deux mains qui démarrent chacune à 11 : la meilleure carte de départ du jeu.'
    if (pv === 8) return 'Un 16 est le pire total possible. En séparant les 8, on casse ce 16 pour repartir sur deux mains jouables.'
    return `Contre ${dealer}, séparer cette paire crée deux mains à meilleure espérance que le total actuel de ${total}.`
  }
  if (best === 'D') {
    if (soft) return `Main souple de ${total} contre ${dealer} : le croupier est vulnérable et l'As protège du dépassement. On double pendant que l'avantage est là.`
    return `Un total de ${total} contre ${dealer} est le moment de doubler : forte chance de finir avec une main gagnante, croupier sous pression.`
  }
  if (best === 'S') {
    if (weak) return `Le croupier montre ${dealer} : il devra tirer et risque de sauter. Inutile de risquer votre ${total}, on le laisse travailler.`
    return `Avec ${total}, tirer fait sauter la main plus souvent qu'elle ne s'améliore. On reste et on laisse les probabilités décider.`
  }
  if (soft) return `Main souple de ${total} contre ${dealer} : l'As permet de tirer sans risque de sauter, et le total actuel ne suffit pas.`
  if (weak) return `Même contre ${dealer}, un ${total} est trop faible pour rester : la stratégie tire encore une carte ici.`
  return `Le croupier montre ${dealer}, une carte forte : votre ${total} ne suffit pas en l'état, il faut tirer.`
}

function CardFace({ card }: { card: PlayingCard }) {
  const red = card.s === '♥' || card.s === '♦'
  return (
    <div className="flex h-24 w-[4.2rem] flex-col justify-between rounded-lg border border-black/20 bg-[#f7f4ec] p-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.35)] md:h-28 md:w-20">
      <span className={`text-left font-semibold leading-none ${red ? 'text-[#c0392b]' : 'text-[#1a1a1a]'}`}>
        {card.r}
        <span className="block text-sm">{card.s}</span>
      </span>
      <span className={`rotate-180 text-left font-semibold leading-none ${red ? 'text-[#c0392b]' : 'text-[#1a1a1a]'}`}>
        {card.r}
        <span className="block text-sm">{card.s}</span>
      </span>
    </div>
  )
}

function CardBack() {
  return (
    <div
      className="h-24 w-[4.2rem] rounded-lg border border-black/30 shadow-[0_4px_12px_rgba(0,0,0,0.35)] md:h-28 md:w-20"
      style={{
        background: 'repeating-linear-gradient(45deg, #7a2c22 0 6px, #641f17 6px 12px)',
      }}
      aria-label="Carte cachée du croupier"
    />
  )
}

interface Deal {
  cards: PlayingCard[]
  dv: number
  dealerCard: PlayingCard
}

export function BlackjackDemo() {
  const [deal, setDeal] = useState<Deal | null>(null)
  const [answer, setAnswer] = useState<Action | null>(null)
  const [score, setScore] = useState({ good: 0, total: 0, streak: 0 })

  const newHand = () => {
    const d = dealSituation()
    const suit = pick(SUITS)
    const dealerCard: PlayingCard =
      d.dv === 11 ? { r: 'A', s: suit } : d.dv === 10 ? { r: pick(TEN_RANKS), s: suit } : { r: String(d.dv) as Rank, s: suit }
    setDeal({ ...d, dealerCard })
    setAnswer(null)
  }

  const best = deal ? strategy(deal.cards, deal.dv) : null
  const isPair = deal ? cardValue(deal.cards[0]) === cardValue(deal.cards[1]) : false
  const correct = answer !== null && answer === best

  const respond = (a: Action) => {
    if (!deal || answer !== null) return
    setAnswer(a)
    setScore((s) => ({
      good: s.good + (a === best ? 1 : 0),
      total: s.total + 1,
      streak: a === best ? s.streak + 1 : 0,
    }))
  }

  const hv = deal ? handValue(deal.cards) : null

  return (
    <div className="overflow-hidden rounded-2xl border border-[#3d2b18] bg-[#0a2e21] text-left">
      {/* Barre de fenêtre */}
      <div className="flex items-center justify-between border-b border-[#00000055] bg-[#241509] px-4 py-2.5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#d9b96a] uppercase">bj coach pro · démo live</p>
        <p className="font-mono text-[11px] tabular-nums text-[#d9b96a]">
          {score.total > 0 ? `${score.good}/${score.total} · série ${score.streak}` : 'série 0'}
        </p>
      </div>

      <div
        className="px-5 py-8 md:px-10"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, #10402e 0%, #0a2e21 55%, #072318 100%)' }}
      >
        {!deal && (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-6 text-center">
            <p className="max-w-md text-sm leading-relaxed text-[#cfe3d8]">
              Le croupier vous sert une main, vous choisissez l'action. Le moteur compare votre décision à la
              stratégie de base et vous explique la logique. Règles : 6 jeux, croupier reste sur 17, blackjack payé 3:2.
            </p>
            <button
              type="button"
              onClick={newHand}
              className="rounded-xl bg-[#d9b96a] px-8 py-3.5 text-sm font-bold tracking-wide text-[#241509] uppercase transition-transform hover:scale-[1.03] active:scale-100"
            >
              Distribuer une main
            </button>
          </div>
        )}

        {deal && hv && (
          <div className="flex flex-col items-center">
            {/* Croupier */}
            <p className="mb-3 font-mono text-[11px] tracking-[0.35em] text-[#9fbfae] uppercase">Croupier</p>
            <div className="flex gap-2">
              <CardFace card={deal.dealerCard} />
              <CardBack />
            </div>

            <p className="my-5 border-y border-[#d9b96a33] px-6 py-1 font-mono text-[10px] tracking-[0.25em] text-[#bfa05c] uppercase">
              Croupier reste sur 17 · BJ paie 3:2
            </p>

            {/* Joueur */}
            <p className="mb-3 font-mono text-[11px] tracking-[0.35em] text-[#9fbfae] uppercase">Vous</p>
            <div className="flex gap-2">
              {deal.cards.map((c, i) => (
                <CardFace key={i} card={c} />
              ))}
            </div>
            <p className="mt-3 rounded border border-[#d9b96a55] px-3 py-0.5 font-mono text-sm tabular-nums text-[#f2e7c9]">
              {hv.soft && hv.total !== 21 ? `${hv.total - 10} / ${hv.total}` : hv.total}
            </p>

            {/* Actions */}
            {answer === null && (
              <div className="mt-7 grid w-full max-w-md grid-cols-2 gap-2.5">
                <button type="button" onClick={() => respond('H')} className="rounded-xl bg-[#c9584a] py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-100">
                  Tirer
                </button>
                <button type="button" onClick={() => respond('S')} className="rounded-xl bg-[#3f9d68] py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-100">
                  Rester
                </button>
                <button type="button" onClick={() => respond('D')} className="rounded-xl bg-[#4478b8] py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-100">
                  Doubler
                </button>
                <button
                  type="button"
                  onClick={() => respond('P')}
                  disabled={!isPair}
                  className="rounded-xl bg-[#8a63c0] py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-100 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  Séparer
                </button>
              </div>
            )}

            {/* Verdict du coach */}
            {answer !== null && best && (
              <div className="mt-7 w-full max-w-lg" aria-live="polite">
                <div
                  className={`rounded-xl border px-5 py-4 ${
                    correct ? 'border-[#3f9d68] bg-[#3f9d68]/15' : 'border-[#c9584a] bg-[#c9584a]/15'
                  }`}
                >
                  <p className={`text-sm font-bold ${correct ? 'text-[#8fd9ae]' : 'text-[#f0a89e]'}`}>
                    {correct
                      ? `Bonne décision : ${ACTION_NAMES[best].toLowerCase()}.`
                      : `La stratégie de base dit : ${ACTION_NAMES[best].toLowerCase()}. Vous avez choisi ${ACTION_NAMES[answer].toLowerCase()}.`}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#e8f0ea]">{explain(deal.cards, deal.dv, best)}</p>
                </div>
                <button
                  type="button"
                  onClick={newHand}
                  className="mt-4 w-full rounded-xl bg-[#d9b96a] py-3.5 text-sm font-bold tracking-wide text-[#241509] uppercase transition-transform hover:scale-[1.02] active:scale-100"
                >
                  Nouvelle main
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
