import { fadeUp } from '@/lib/animations'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, ChevronRight } from 'lucide-react'
import { Link } from 'wouter'


const CORSI = [
  {
    id: 'karate',
    foto: '/images/disciplines/ScuolaCipriani_KARATE.jpeg',
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
    maestro: 'Maestro Pietro Cipriani — 4° Dan',
  },
  {
    id: 'kungfu',
    foto: '/images/disciplines/ScuolaCipriani_kungfu.jpeg',
    icon: '🐉',
    nome: 'Kung Fu Wushu',
    livello: 'Tutti i livelli · Bambini e Adulti',
    colore: '#00A878',
    descrizione: 'L\'arte marziale cinese per eccellenza. Oltre alle forme tradizionali e al lavoro con le armi, il programma comprende Shuai Jiao (Lotta Cinese), Sanda e combattimento moderno, ed elementi di stili antichi e moderni. La Scuola della Montagna "Shan" unisce agonismo e tradizione millenaria.',
    benefici: ['Forme tradizionali e armi', 'Shuai Jiao — Lotta Cinese', 'Sanda e combattimento moderno', 'Stili antichi e moderni', 'Filosofia e tradizione orientale'],
    orari: [
      { giorni: 'Martedì · Giovedì', ora: '18:00 – 19:30', livello: 'Tutti i livelli' },
    ],
    maestro: 'Dir. Tecnico: M° Pietro Cipriani — 7° Duan · Kung Fu con M° Duranti Giovanni — 5° Duan',
  },
  {
    id: 'taichi',
    foto: '/images/disciplines/ScuolaCipriani_taichi.jpeg',
    icon: '☯️',
    nome: 'Tai Chi Quan',
    livello: 'Tutti i livelli · Adulti',
    colore: '#9DC4B0',
    descrizione: 'Arte marziale interna cinese basata su movimenti lenti e fluidi. Pratichiamo le forme Shan — tracciati e movimenti caratteristici della scuola trasmessi esclusivamente agli allievi di questo stile — la forma Yang e la forma dei 24 movimenti.',
    benefici: ['Riduzione dello stress', 'Equilibrio e postura', 'Forme Shan della scuola', 'Forma Yang e forma 24', 'Armonia corpo-mente'],
    orari: [
      { giorni: 'Martedì · Giovedì', ora: '18:00 – 19:30', livello: 'Tutti i livelli' },
    ],
    maestro: 'M° Pietro Cipriani · M° Duranti Giovanni — 5° Duan',
  },
  {
    id: 'kurash',
    foto: '/images/disciplines/ScuolaCipriani_KURASH.jpeg',
    icon: '🤼',
    nome: 'Kurash',
    livello: 'Principianti e Avanzati',
    colore: '#D4AF37',
    descrizione: 'Arte marziale nazionale dell\'Uzbekistan, simile al judo ma con regole specifiche che privilegiano le proiezioni in piedi. Disciplina emergente nel panorama olimpico internazionale.',
    benefici: ['Proiezioni e takedown', 'Forza funzionale', 'Strategia di combattimento', 'Tradizione centroasiatica', 'Disciplina olimpica emergente'],
    orari: [
      { giorni: 'Venerdì', ora: '19:00 – 20:30', livello: 'Tutti i livelli' },
    ],
    maestro: 'Istr. Minella Emanuele · Istr. Chiapparo Giuseppe',
  },
  {
    id: 'kontact',
    foto: '/images/disciplines/ScuolaCipriani_KARATE.jpeg',
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

          {/* Corso card — foto + dettaglio */}
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${corso.colore}30` }}
          >
            {/* Photo header */}
            <div className="relative h-64 md:h-[420px]">
              <img
                src={corso.foto}
                alt={corso.nome}
                className="w-full h-full object-cover object-center"
              />
              {/* Solo sfumatura in basso per raccordare col pannello */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1610] via-[#0D1610]/10 to-transparent" />
              {/* Tinta disciplina nell'angolo */}
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${corso.colore}20 0%, transparent 45%)` }}
              />
              {/* Titolo sovrapposto in basso */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="text-4xl drop-shadow-xl">{corso.icon}</span>
                <div>
                  <h2
                    className="text-2xl md:text-3xl font-black text-white"
                    style={{ fontFamily: 'Cinzel, serif', textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}
                  >
                    {corso.nome}
                  </h2>
                  <p className="text-xs text-white/60 mt-0.5">{corso.livello}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 p-8 bg-[#0D1610]">
              {/* Info */}
              <div className="space-y-6">
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
                  <strong className="text-[#D4AF37]">Staff:</strong> {corso.maestro}
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STAFF DOCENTE ──────────────────── */}
      <section className="py-14 px-4 border-t border-[#1E3028]">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Il nostro team</span>
            <h2 className="text-2xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>Staff Docente</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { ruolo: 'Direttore Tecnico', nome: 'M° Pietro Cipriani', dettaglio: '7° Duan Wu-Shu Kung Fu · 4° Dan Karate · Maestro Tai Chi Chuan · Kurash 1 stella' },
              { ruolo: 'Kung Fu · Tai Chi', nome: 'M° Duranti Giovanni', dettaglio: '5° Duan Wu-Shu Kung Fu' },
              { ruolo: 'Coordinatore dei Corsi', nome: 'M° Ferrazzani Federico', dettaglio: '' },
              { ruolo: 'Kurash · Lotta Cinese', nome: 'Istr. Minella Emanuele', dettaglio: 'Istruttore certificato' },
              { ruolo: 'Kurash · Lotta Cinese', nome: 'Istr. Chiapparo Giuseppe', dettaglio: 'Istruttore certificato' },
            ].map((p, i) => (
              <motion.div key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="p-5 rounded-xl border border-[#1E3028] bg-[#111B16]">
                <p className="text-xs font-semibold text-[#00A878] uppercase tracking-wider mb-2">{p.ruolo}</p>
                <p className="text-sm font-bold text-[#E8F0EC]">{p.nome}</p>
                {p.dettaglio && <p className="text-xs text-[#6B9E84] mt-1 leading-relaxed">{p.dettaglio}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
