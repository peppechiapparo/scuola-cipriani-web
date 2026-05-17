import { fadeUp } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Award, Star, Globe, Users } from 'lucide-react'


const QUALIFICHE = [
  { titolo: 'Wu-Shu Kung Fu', grado: '7° Duan', icon: '🐉' },
  { titolo: 'Karate Wado Ryu', grado: 'Maestro · 4° Dan', icon: '🥋' },
  { titolo: 'Tai Chi Chuan', grado: 'Maestro — forme Shan, Yang e 24', icon: '☯️' },
  { titolo: 'Kurash', grado: 'Maestro 1 stella', icon: '🤼' },
]

const RUOLI = [
  { ruolo: 'Già Coordinatore Nazionale Us Acli', periodo: 'In attività' },
  { ruolo: 'Formatore della Nazionale Italiana Karate', periodo: 'Anni \'80–\'90' },
  { ruolo: 'Preparatore atletico istruttori nazionali', periodo: 'Anni \'80–\'90' },
  { ruolo: 'Fondatore Scuola della Montagna "Shan"', periodo: 'Viterbo, Lazio' },
  { ruolo: 'Giudice e arbitro internazionale di Kung Fu', periodo: 'In attività' },
  { ruolo: 'Membro federazioni nazionali arti marziali', periodo: 'In attività' },
]

const TIMELINE = [
  { anno: '1970s', titolo: 'Gli inizi', desc: 'Pietro Cipriani inizia la sua formazione nel Karate Wado Ryu e nel Judo, disciplinando corpo e mente dai primi Maestri italiani.' },
  { anno: '1980s', titolo: 'L\'incontro con il Kung Fu', desc: 'La scoperta del Kung Fu Wushu segna una svolta. Vittorie nei Campionati Nazionali: lotta, combattimento light contact, tao a mani nude e con armi.' },
  { anno: '1990s', titolo: 'I Mondiali in Polonia', desc: 'Il vertice della carriera agonistica: medaglie d\'oro ai Mondiali di Kung Fu in Polonia con la squadra della Scuola della Montagna Shan.' },
  { anno: '2000s', titolo: 'La Scuola Shan', desc: 'Nasce ufficialmente la Scuola della Montagna "Shan": fusione di combattimento, forme tradizionali, Tai Chi. Un approccio unico alle arti marziali.' },
  { anno: '2010s', titolo: 'Kris Cipriani', desc: 'Il figlio Kris (classe 1988) diventa Maestro a sua volta, con percorso agonistico in Kung Fu Sanda e Judo. La tradizione continua.' },
  { anno: 'Oggi', titolo: 'La Scuola cresce', desc: 'La Scuola della Montagna Shan è un punto di riferimento per le arti marziali nella Tuscia, con allievi di tutte le età e livelli.' },
]

export default function Biografia() {
  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">

      {/* Hero */}
      <section className="relative h-72 md:h-[460px] overflow-hidden border-b border-[#1E3028]">
        <img
          src="/images/disciplines/MAESTROCIPRIANIconLAMOGLIE.jpeg"
          alt="Maestro Pietro Cipriani"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-[#0A0F0D]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D]/60 via-transparent to-transparent" />
        <motion.div variants={fadeUp} initial="hidden" animate="visible"
          className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">Il Fondatore</span>
          <h1 className="text-3xl md:text-5xl font-black mt-2 text-white"
            style={{ fontFamily: 'Cinzel, serif', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
            Maestro Pietro Cipriani
          </h1>
          <p className="text-sm text-white/70 mt-3 max-w-xl"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.9)' }}>
            7° Duan Wu-Shu Kung Fu · Già Coordinatore Nazionale Us Acli · Oltre 50 anni di dedizione alle arti marziali tradizionali
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">

        {/* Qualifiche */}
        <section>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase mb-6">
            Qualifiche & Gradi
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {QUALIFICHE.map((q, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
                className="flex items-center gap-4 p-5 rounded-xl border border-[#1E3028] bg-[#111B16]">
                <span className="text-3xl">{q.icon}</span>
                <div>
                  <div className="font-semibold text-[#E8F0EC] text-sm">{q.titolo}</div>
                  <div className="text-xs text-[#D4AF37]">{q.grado}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase mb-8">
            La Storia
          </motion.h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00A878] via-[#1E3028] to-transparent" />
            <div className="space-y-8">
              {TIMELINE.map((t, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                  className="flex gap-6 pl-16 relative">
                  <div className="absolute left-0 w-12 h-12 rounded-full border-2 border-[#00A878] bg-[#0A0F0D] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#00A878]">{t.anno.replace('Oggi','●')}</span>
                  </div>
                  <div className="pb-2">
                    <span className="text-xs text-[#00A878] font-semibold">{t.anno}</span>
                    <h3 className="text-base font-bold text-[#E8F0EC] mt-0.5" style={{ fontFamily: 'Cinzel, serif' }}>{t.titolo}</h3>
                    <p className="text-sm text-[#6B9E84] mt-2 leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo strip — storia */}
        <motion.section
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative h-60 md:h-80 rounded-2xl overflow-hidden"
        >
          <img
            src="/images/disciplines/ScuolaCipriani_vecchiallievi.jpeg"
            alt="Vecchi allievi della Scuola della Montagna Shan"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D]/90 via-[#0A0F0D]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 md:px-12">
            <div className="max-w-xs">
              <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">50 anni di storia</span>
              <p className="text-xl md:text-2xl font-black text-[#E8F0EC] mt-3 leading-snug" style={{ fontFamily: 'Cinzel, serif' }}>
                &ldquo;Le arti marziali sono una via,<br />non una destinazione.&rdquo;
              </p>
              <p className="text-sm text-[#00A878] mt-4">— M° Pietro Cipriani</p>
            </div>
          </div>
        </motion.section>

        {/* Ruoli */}
        <section>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase mb-6">
            Ruoli & Incarichi
          </motion.h2>
          <div className="space-y-3">
            {RUOLI.map((r, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
                className="flex items-center justify-between p-4 rounded-lg border border-[#1E3028] bg-[#111B16]">
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm text-[#9DC4B0]">{r.ruolo}</span>
                </div>
                <span className="text-xs text-[#3D6B52] hidden sm:block">{r.periodo}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Kris */}
        <motion.section
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-[#1E3028]"
        >
          <div className="md:flex">
            <div className="p-8 md:flex-1">
              <div className="flex items-start gap-5">
                <div className="text-4xl flex-shrink-0">👨‍👦</div>
                <div>
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#00A878] uppercase">La Continuità</span>
                  <h3 className="text-xl font-black text-[#E8F0EC] mt-1 mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
                    Kris Cipriani — La Nuova Generazione
                  </h3>
                  <p className="text-sm text-[#9DC4B0] leading-relaxed">
                    Il figlio del Maestro, <strong className="text-[#E8F0EC]">Kris Cipriani</strong> (classe 1988),
                    è a sua volta Maestro con un solido percorso agonistico in Kung Fu/Sanda e Judo.
                    La continuità della famiglia Cipriani rappresenta un impegno verso le generazioni future
                    e verso la preservazione dell&apos;eccellenza tecnica e filosofica delle arti marziali nella Tuscia.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5 relative min-h-[220px]">
              <img
                src="/images/disciplines/MAESTROCIPRIANIconLAMOGLIE.jpeg"
                alt="Maestro Pietro Cipriani"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111B16] via-[#111B16]/30 to-transparent" />
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
