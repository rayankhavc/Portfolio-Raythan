import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Grain } from "@/components/grain"
import { Cursor } from "@/components/cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Grain />
      <Cursor />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Portfolio />
      <Services />
      <Pricing />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}