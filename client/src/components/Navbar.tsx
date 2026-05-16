import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/corsi', label: 'Corsi' },
  { href: '/biografia', label: 'Maestro' },
  { href: '/albo-oro', label: "Albo d'Oro" },
  { href: '/news', label: 'News' },
  { href: '/galleria', label: 'Galleria' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setIsOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F0D]/95 backdrop-blur-md border-b border-[#1E3028] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-full border-2 border-[#00A878] flex items-center justify-center text-xl group-hover:shadow-[0_0_12px_rgba(0,168,120,0.5)] transition-all">
                🐉
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-[#00A878] font-medium tracking-[0.2em] uppercase">Scuola della Montagna</p>
                <h1 className="text-base font-bold text-[#E8F0EC] leading-tight" style={{ fontFamily: 'Cinzel, serif' }}>
                  SHAN · CIPRIANI
                </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all cursor-pointer ${
                    location === link.href
                      ? 'text-[#00A878] bg-[#00A878]/10'
                      : 'text-[#9DC4B0] hover:text-[#E8F0EC] hover:bg-[#1A2820]'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/prenotazioni">
              <span className="ml-2 px-4 py-2 text-sm font-semibold rounded-md bg-[#00A878] text-[#0A0F0D] hover:bg-[#00D49A] transition-colors cursor-pointer shadow-[0_0_12px_rgba(0,168,120,0.3)]">
                Prova Gratuita
              </span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#9DC4B0] hover:text-[#00A878] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A0F0D]/98 border-b border-[#1E3028]"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`block px-4 py-3 text-sm font-medium rounded-md cursor-pointer transition-colors ${
                      location === link.href
                        ? 'text-[#00A878] bg-[#00A878]/10'
                        : 'text-[#9DC4B0] hover:text-[#E8F0EC] hover:bg-[#1A2820]'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/prenotazioni">
                <span className="block mt-3 px-4 py-3 text-sm font-semibold rounded-md bg-[#00A878] text-[#0A0F0D] text-center cursor-pointer">
                  Prova Gratuita
                </span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
