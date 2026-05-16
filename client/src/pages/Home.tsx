import { fadeUp } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { Award, Users, Clock, ChevronRight, Shield, Zap, Heart } from 'lucide-react'


const STATS = [
  { value: '50+', label: 'Anni di Esperienza' },
  { value: '3', label: 'Generazioni di Maestri' },
  { value: '5', label: 'Discipline Insegnate' },
  { value: 'Viterbo', label: 'Capoluogo Tuscia' },
]

const CORSI = [
  { icon: '🥋', nome: 'Karate Wado Ryu', short: 'Disciplina · Rispetto · Kata', color: '#D4AF37' },
  { icon: '🐉', nome: 'Kung Fu Wushu', short: 'Forme · Armi · Combattimento', color: '#00A878' },
  { icon: '☯️', nome: 'Tai Chi Quan', short: 'Armonia · Equilibrio · Salute', color: '#9DC4B0' },
  { icon: '🤼', nome: 'Kurash', short: 'Lotta · Proiezioni · Olimpica', color: '#D4AF37' },
  { icon: '🥊', nome: 'Kontact', short: 'Striking · Grappling · Fitness', color: '#00A878' },
]

const VALORI = [
  { icon: Shield, title: 'Tradizione', desc: 'Radici profonde nelle arti marziali orientali, tramandate con rispetto dal 1970.' },
  { icon: Zap, title: 'Eccellenza', desc: 'Vittorie ai Mondiali di Kung Fu in Polonia. Formazione della Nazionale italiana.' },
  { icon: Heart, title: 'Comunità', desc: 'Una famiglia marziale. Bambini, adulti, agonisti e praticanti amatoriali.' },
]

export default function Home() {
  return (
    <div className="bg-[#0A0F0D] min-h-screen">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background photo con overlay scuro */}
        <div className="absolute inset-0">
          <img
            src="/images/ALLENAMENTO-VASANELLO-07-2025/IMG-20250824-WA0062.jpg"
            alt=""
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D]/75 via-[#0A0F0D]/65 to-[#0A0F0D]" />
        </div>
        <div className="absolute inset-0 bg-[#00A878]/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00A878]/8 blur-[120px] pointer-events-none" />

        {/* Decorative Chinese character */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[18rem] font-bold text-[#00A878]/5 select-none pointer-events-none hidden xl:block"
          style={{ fontFamily: 'serif' }}>
          武
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.3em] uppercase text-[#00A878] border border-[#00A878]/30 rounded-full bg-[#00A878]/5 mb-8">
              Viterbo · Lazio · Dal 1970
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-6 text-[#E8F0EC]"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            Scuola della<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A878] to-[#00D49A]">
              Montagna Shan
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg sm:text-xl text-[#6B9E84] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Maestro <strong className="text-[#D4AF37]">Pietro Cipriani</strong> — Cintura Oro 6° Duan · Karate, Kung Fu,
            Tai Chi, Kurash. Oltre cinquant'anni di dedizione alle arti marziali tradizionali.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/prenotazioni">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-[#00A878] text-[#0A0F0D] hover:bg-[#00D49A] transition-all cursor-pointer shadow-[0_0_30px_rgba(0,168,120,0.4)] hover:shadow-[0_0_40px_rgba(0,168,120,0.6)]">
                Prova Gratuita <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/corsi">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg border border-[#1E3028] text-[#9DC4B0] hover:text-[#E8F0EC] hover:border-[#00A878]/50 hover:bg-[#00A878]/5 transition-all cursor-pointer">
                Scopri i Corsi <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#3D6B52]"
        >
          <span className="text-xs tracking-widest uppercase">Scorri</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-8 bg-gradient-to-b from-[#00A878] to-transparent"
          />
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────── */}
      <section className="py-16 border-y border-[#1E3028] bg-[#080D0A]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-[#00A878] mb-1" style={{ fontFamily: 'Cinzel, serif' }}>
                {s.value}
              </div>
              <div className="text-xs text-[#6B9E84] tracking-wider uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── I CORSI ──────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Le Discipline</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
              I Corsi delle 4K
            </h2>
            <p className="text-[#6B9E84] mt-4 max-w-xl mx-auto">
              Karate, Kung Fu, Kurash, Kontact — quattro percorsi per sviluppare corpo, mente e spirito.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORSI.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
                className="group relative rounded-xl border border-[#1E3028] bg-[#111B16] p-6 cursor-pointer card-hover overflow-hidden"
                onClick={() => window.location.href = '/corsi'}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10"
                  style={{ background: c.color }} />
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-lg font-bold text-[#E8F0EC] mb-1" style={{ fontFamily: 'Cinzel, serif' }}>
                  {c.nome}
                </h3>
                <p className="text-sm text-[#6B9E84]">{c.short}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium transition-all"
                  style={{ color: c.color }}>
                  Scopri di più <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/corsi">
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-[#1E3028] text-[#9DC4B0] hover:text-[#00A878] hover:border-[#00A878]/50 transition-all cursor-pointer">
                Tutti i corsi e gli orari <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOTO BANNER ────────────────────────── */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/images/ALLENAMENTO-VASANELLO-07-2025/IMG-20250824-WA0038.jpg"
          alt="Allenamento Scuola della Montagna Shan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D]/90 via-[#0A0F0D]/65 to-[#0A0F0D]/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-8 md:px-16 w-full">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase mb-3">La via delle arti marziali</p>
              <blockquote
                className="text-2xl md:text-4xl font-black text-[#E8F0EC] leading-snug"
                style={{ fontFamily: 'Cinzel, serif' }}
              >
                “Il Kung Fu è una via,<br className="hidden md:block" />
non una destinazione.”
              </blockquote>
              <p className="mt-4 text-sm text-[#6B9E84]">— Maestro Pietro Cipriani</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── IL MAESTRO ───────────────────────────── */}
      <section className="py-24 bg-[#080D0A] border-y border-[#1E3028]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Il Fondatore</span>
              <h2 className="text-3xl md:text-4xl font-black mt-2 text-[#E8F0EC] mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
                Maestro Pietro Cipriani
              </h2>
              <div className="space-y-4 text-[#6B9E84] text-sm leading-relaxed">
                <p>
                  Dagli anni '70, quando i primi Maestri portarono Judo e Karate Wado Ryu in Italia, Pietro Cipriani
                  ha dedicato la sua vita alle arti marziali. Allievo, insegnante, poi Maestro — un percorso di oltre
                  cinquant'anni che lo ha reso uno dei più rispettati nella Tuscia.
                </p>
                <p>
                  <strong className="text-[#D4AF37]">Cintura Oro 6° Duan</strong> in Kung Fu Wushu. Medaglie ai Campionati
                  Mondiali in Polonia con i suoi allievi. Formatore della Nazionale italiana di Karate.
                </p>
                <p>
                  Fondatore della <em className="text-[#9DC4B0]">Scuola della Montagna "Shan"</em>: la sintesi tra
                  combattimento, forme tradizionali e arti interne come il Tai Chi.
                </p>
              </div>
              <Link href="/biografia">
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#00A878] hover:text-[#00D49A] cursor-pointer transition-colors">
                  Leggi la biografia completa <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="space-y-4"
            >
              {[
                { icon: Award, label: 'Cintura Oro 6° Duan — Kung Fu Wushu' },
                { icon: Award, label: 'Maestro Karate Wado Ryu — 3° Dan' },
                { icon: Award, label: 'Campione ai Mondiali di Kung Fu — Polonia' },
                { icon: Users, label: 'Formatore della Nazionale Italiana Karate' },
                { icon: Clock, label: 'Oltre 50 anni di insegnamento' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-[#111B16] border border-[#1E3028]">
                  <item.icon className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm text-[#9DC4B0]">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALORI ───────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Perché sceglierci</span>
            <h2 className="text-3xl md:text-4xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
              I nostri valori
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALORI.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
                className="p-8 rounded-xl border border-[#1E3028] bg-[#111B16] text-center"
              >
                <v.icon className="w-8 h-8 text-[#00A878] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#E8F0EC] mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                  {v.title}
                </h3>
                <p className="text-sm text-[#6B9E84] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#080D0A] border-t border-[#1E3028]">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-full border-2 border-[#00A878] flex items-center justify-center text-3xl mx-auto mb-8 shadow-[0_0_30px_rgba(0,168,120,0.3)]">
            🥋
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#E8F0EC] mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Inizia il tuo percorso marziale
          </h2>
          <p className="text-[#6B9E84] mb-8 text-base leading-relaxed">
            La prima lezione è gratuita. Vieni a conoscerci, prova una disciplina,
            sentiti a casa nella Scuola della Montagna Shan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prenotazioni">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-[#00A878] text-[#0A0F0D] hover:bg-[#00D49A] transition-all cursor-pointer shadow-[0_0_30px_rgba(0,168,120,0.4)]">
                Prenota una lezione gratuita <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/contatti">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg border border-[#1E3028] text-[#9DC4B0] hover:text-[#00A878] hover:border-[#00A878]/50 transition-all cursor-pointer">
                Contattaci
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
