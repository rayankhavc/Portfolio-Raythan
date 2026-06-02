"use client"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <><section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-white/[0.018] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-2 mb-10 border border-[#1f1f1f] rounded-full bg-[#0a0a0a]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-[#86868b] font-light">
            Disponible pour nouveaux projets
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-tight leading-none"
        >
          <span className="bg-gradient-to-b from-white via-white to-[#444] bg-clip-text text-transparent">
            RAYTHAN
            <br />
            WEB DESIGN.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
          className="mt-8 text-lg sm:text-xl text-[#86868b] font-light max-w-2xl mx-auto leading-relaxed"
        >
          Sites et applications qui convertissent. No-code pour les commerces
          locaux, développement sur-mesure pour les projets ambitieux.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projets"
            className="inline-flex items-center px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-[#f5f5f7] transition-all duration-300"
          >
            Voir les projets
          </a>

          <a
            href="https://cal.com/rayankhavc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-transparent text-white text-sm font-medium rounded-full border border-[#2a2a2a] hover:border-[#555] transition-all duration-300"
          >
            Réserver un appel →
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-xs text-[#444] font-light tracking-[0.15em] uppercase"
        >
          7 projets livrés · 2 apps en production · Nantes · Remote France
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#444]" />
        </motion.div>
      </motion.div>
    </section>
    </>
  )
}
