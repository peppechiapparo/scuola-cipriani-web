import { Link } from 'wouter'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#080D0A] border-t border-[#1E3028] mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#00A878] flex items-center justify-center text-xl">🐉</div>
              <div>
                <p className="text-xs text-[#00A878] tracking-[0.2em] uppercase">Scuola della Montagna</p>
                <h3 className="text-sm font-bold text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>SHAN · CIPRIANI</h3>
              </div>
            </div>
            <p className="text-sm text-[#6B9E84] leading-relaxed">
              Oltre 50 anni di tradizione nelle arti marziali. Karate, Kung Fu, Tai Chi, Kurash — Viterbo, Lazio.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://www.instagram.com/scuolacipriani" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#1E3028] flex items-center justify-center text-[#6B9E84] hover:text-[#00A878] hover:border-[#00A878] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#1E3028] flex items-center justify-center text-[#6B9E84] hover:text-[#00A878] hover:border-[#00A878] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-[#1E3028] flex items-center justify-center text-[#6B9E84] hover:text-[#00A878] hover:border-[#00A878] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h4 className="text-xs font-semibold text-[#00A878] tracking-[0.2em] uppercase mb-4">Navigazione</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/corsi', label: 'I Corsi' },
                { href: '/biografia', label: 'Il Maestro' },
                { href: "/albo-oro", label: "Albo d'Oro" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="text-[#6B9E84] hover:text-[#00A878] cursor-pointer transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplne */}
          <div>
            <h4 className="text-xs font-semibold text-[#00A878] tracking-[0.2em] uppercase mb-4">Discipline</h4>
            <ul className="space-y-2 text-sm text-[#6B9E84]">
              <li>🥋 Karate Wado Ryu</li>
              <li>🐉 Kung Fu Wushu</li>
              <li>☯️ Tai Chi Quan</li>
              <li>🤼 Kurash</li>
              <li>🥊 Kontact</li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="text-xs font-semibold text-[#00A878] tracking-[0.2em] uppercase mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#00A878] mt-0.5 flex-shrink-0" />
                <span className="text-[#6B9E84]">Strada Tuscanese 107/g<br />Viterbo (VT) — Lazio</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#00A878]" />
                <a href="mailto:info@scuolacipriani.it" className="text-[#6B9E84] hover:text-[#00A878] transition-colors">
                  info@scuolacipriani.it
                </a>
              </li>
            </ul>
            <Link href="/prenotazioni">
              <span className="mt-5 inline-block px-5 py-2.5 text-sm font-semibold rounded-md bg-[#00A878] text-[#0A0F0D] hover:bg-[#00D49A] transition-colors cursor-pointer shadow-[0_0_12px_rgba(0,168,120,0.3)]">
                Prova Gratuita →
              </span>
            </Link>
          </div>
        </div>

        <div className="border-t border-[#1E3028] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#3D6B52]">
            © {currentYear} Scuola della Montagna Shan — Maestro Pietro Cipriani. Tutti i diritti riservati.
          </p>
          <p className="text-xs text-[#3D6B52]">
            <Link href="/privacy"><span className="hover:text-[#6B9E84] cursor-pointer">Privacy Policy</span></Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
