"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#projets", label: "Projets" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-[#333333]/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="text-white font-light tracking-[0.3em] text-sm">
            RAYTHAN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#86868b] hover:text-white transition-colors duration-300 text-sm font-light tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-light text-[#86868b] border border-[#333333] rounded-full hover:text-white hover:border-[#86868b] transition-all duration-300"
            >
              Nous contacter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#333333]/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#86868b] hover:text-white transition-colors duration-300 text-sm font-light tracking-wide py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 px-5 py-2.5 text-sm font-light text-[#86868b] border border-[#333333] rounded-full hover:text-white hover:border-[#86868b] transition-all duration-300 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nous contacter
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
