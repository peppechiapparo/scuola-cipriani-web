import { fadeUp } from '@/lib/animations'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, ChevronRight } from 'lucide-react'
import { Link } from 'wouter'


const CORSI = [
  {
    id: 'karate',
    icon: '🥋',
    nome: 'Karate Wado Ryu',
    livello: 'Tutti i livelli · Bambini e Adulti',
    colore: '#D4AF37',
    descrizione: 'Arte marziale giapponese che sviluppa disciplina, rispetto e tecniche di autodifesa. Pratichiamo lo stile Wado-ryu, caratterizzato da movimenti fluidi e l\'integrazione di tecniche di jujutsu.',
    benefici: ['Disciplina mentale e fisica', 'Tecniche di autodifesa', 'Coordinazione e riflessi', 'Rispetto e valori tradizionali', 'Preparazione alle gare'],
    orari: [
      { giorni: 'Lunedì · Mercoledì', ora: '18:00 – 19:30', livello: 'Adulti' },
      { giorni: 'Martedì · Giovedì', ora: '17:00 – 18:00', livello: 'Bambini (6-12 anni)' },
    ],
    maestro: 'Maestro Pietro Cipriani — 3° Dan',
  },
  {
    id: 'kungfu',
    icon: '🐉',
    nome: 'Kung Fu Wushu',
    livello: 'Tutti i livelli · Bambini e Adulti',
    colore: '#00A878',
    descrizione: 'L\'arte marziale cinese per eccellenza. Forme tradizionali, lavoro con armi, tecniche di combattimento. La Scuola della Montagna "Shan" rappresenta la fusione tra agonismo e tradizione del Kung Fu.',
    benefici: ['Flessibilità e agilità', 'Forza e resistenza', 'Concentrazione', 'Armi tradizionali', 'Filosofia orientale'],
    orari: [
      { giorni: 'Martedì · Giovedì', ora: '18:00 – 19:30', livello: 'Tutti i livelli' },
    ],
    maestro: 'Maestro Pietro Cipriani — Cintura Oro 6° Duan',
  },
  {
    id: 'taichi',
    icon: '☯️',
    nome: 'Tai Chi Quan',
    livello: 'Tutti i livelli · Adulti',
    colore: '#9DC4B0',
    descrizione: 'Arte marziale interna cinese basata su movimenti lenti e fluidi. Pratichiamo la forma dei 24 movimenti, la forma "108" e le forme Shan tradizionali create dal Maestro Cipriani.',
    benefici: ['Riduzione dello stress', 'Equilibrio e postura', 'Consapevolezza corporea', 'Benefici cardiovascolari', 'Armonia corpo-mente'],
    orari: [
      { giorni: 'Martedì · Giovedì', ora: '18:00 – 19:30', livello: 'Tutti i livelli' },
    ],
    maestro: 'Maestro Pietro Cipriani',
  },
  {
    id: 'kurash',
    icon: '🤼',
    nome: 'Kurash',
    livello: 'Principianti e Avanzati',
    colore: '#D4AF37',
    descrizione: 'Arte marziale nazionale dell\'Uzbekistan, simile al judo ma con regole specifiche che privilegiano le proiezioni in piedi. Disciplina emergente nel panorama olimpico internazionale.',
    benefici: ['Proiezioni e takedown', 'Forza funzionale', 'Strategia di combattimento', 'Tradizione centroasiatica', 'Disciplina olimpica emergente'],
    orari: [
      { giorni: 'Venerdì', ora: '19:00 – 20:30', livello: 'Tutti i livelli' },
    ],
    maestro: 'Maestro Pietro Cipriani',
  },
  {
    id: 'kontact',
    icon: '🥊',
    nome: 'Kontact',
    livello: 'Tutti i livelli',
    colore: '#00A878',
    descrizione: 'Disciplina moderna che combina le migliori tecniche di striking (pugni, calci) e grappling. Ideale per chi cerca un allenamento completo, efficace e adatto anche al fitness funzionale.',
    benefici: ['Allenamento totale', 'Striking e grappling', 'Autodifesa pratica', 'Fitness e tonificazione', 'Sfogo energetico controllato'],
    orari: [
      { giorni: 'Sabato', ora: '10:00 – 11:30', livello: 'Tutti i livelli' },
    ],
    maestro: 'Maestro Pietro Cipriani',
  },
]

export default function Corsi() {
  const [selected, setSelected] = useState('karate')
  const corso = CORSI.find(c => c.id === selected)!

  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">

      {/* Hero */}
      <section className="py-20 text-center px-4 border-b border-[#1E3028]">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Programma didattico</span>
          <h1 className="text-4xl md:text-6xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
            I Corsi
          </h1>
          <p className="text-[#6B9E84] mt-4 max-w-xl mx-auto">
            Cinque discipline per ogni livello, età e obiettivo. Bambini, adulti, agonisti e praticanti amatoriali.
          </p>
        </motion.div>
      </section>

      {/* Tab selector */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {CORSI.map(c => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  selected === c.id
                    ? 'border-[#00A878] bg-[#00A878]/10 text-[#00A878]'
                    : 'border-[#1E3028] text-[#6B9E84] hover:border-[#00A878]/40 hover:text-[#9DC4B0]'
                }`}
              >
                <span>{c.icon}</span> {c.nome}
              </button>
            ))}
          </div>

          {/* Corso detail */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="text-5xl">{corso.icon}</div>
                <div>
                  <h2 className="text-2xl font-black text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>{corso.nome}</h2>
                  <p className="text-xs text-[#6B9E84] mt-1">{corso.livello}</p>
                </div>
              </div>
              <p className="text-sm text-[#9DC4B0] leading-relaxed">{corso.descrizione}</p>

              <div>
                <h3 className="text-xs font-semibold text-[#00A878] tracking-[0.2em] uppercase mb-3">Benefici</h3>
                <ul className="space-y-2">
                  {corso.benefici.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#9DC4B0]">
                      <ChevronRight className="w-3 h-3 text-[#00A878] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-[#1E3028] bg-[#111B16] text-sm text-[#9DC4B0]">
                <strong className="text-[#D4AF37]">Istruttore:</strong> {corso.maestro}
              </div>
            </div>

            {/* Orari */}
            <div>
              <h3 className="text-xs font-semibold text-[#00A878] tracking-[0.2em] uppercase mb-4">Orario delle Lezioni</h3>
              <div className="space-y-3">
                {corso.orari.map((o, i) => (
                  <div key={i} className="p-5 rounded-xl border border-[#1E3028] bg-[#111B16]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#E8F0EC] mb-2">
                      <Clock className="w-4 h-4 text-[#00A878]" />
                      {o.giorni}
                    </div>
                    <div className="text-2xl font-black text-[#00A878] mb-1">{o.ora}</div>
                    <div className="text-xs text-[#6B9E84]">{o.livello}</div>
                  </div>
                ))}

                <div className="p-4 rounded-lg border border-[#1E3028] bg-[#111B16] flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00A878] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-[#9DC4B0]">
                    <strong className="text-[#E8F0EC]">Sede:</strong><br />
                    Strada Tuscanese 107/g<br />Viterbo (VT) — Lazio
                  </div>
                </div>

                <Link href="/prenotazioni">
                  <span className="block mt-4 w-full text-center px-6 py-3 rounded-lg bg-[#00A878] text-[#0A0F0D] font-semibold text-sm hover:bg-[#00D49A] transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,168,120,0.3)]">
                    Prenota una Lezione Gratuita
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
