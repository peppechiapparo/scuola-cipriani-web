import { fadeUp } from '@/lib/animations'
import SEOHead from '@/components/SEOHead'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'


const DISCIPLINE = ['Karate Wado Ryu', 'Kung Fu Wushu', 'Tai Chi Quan', 'Kurash', 'Kontact', 'Non so ancora, voglio provare']
const FASCE = ['Bambino (6-12 anni)', 'Adolescente (13-17 anni)', 'Adulto (18-40 anni)', 'Senior (40+ anni)']
const LIVELLI = ['Assoluto principiante', 'Ho già qualche esperienza', 'Praticante con cintura/grado', 'Agonista']

export default function Prenotazioni() {
  const [inviato, setInviato] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const formData = new FormData(e.currentTarget)
    formData.append('access_key', 'a1dff947-2a12-4c93-a601-c3a60f3824df')
    formData.append('subject', 'Richiesta lezione gratuita — scuolakungfucipriani.it')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) setInviato(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">
      <SEOHead
        title="Prenota una Lezione Gratuita"
        description="Prenota subito una lezione di prova gratuita presso la Scuola della Montagna Shan di Viterbo. Kung Fu, Karate, Tai Chi, Kurash — tutte le età e livelli."
        path="/prenotazioni"
      />

      {/* Hero */}
      <section className="py-20 text-center px-4 border-b border-[#1E3028] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00A878]/5 blur-[80px] pointer-events-none" />
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative z-10">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#00A878] border border-[#00A878]/30 rounded-full bg-[#00A878]/5 mb-5">
            Completamente gratuita
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
            Prova una Lezione
          </h1>
          <p className="text-[#6B9E84] mt-4 max-w-xl mx-auto">
            La prima lezione è gratuita e senza impegno. Vieni a scoprire la disciplina che fa per te.
          </p>
        </motion.div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Vantaggi */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 mb-10">
          {[
            { icon: '🎁', label: 'Gratuita' },
            { icon: '🤝', label: 'Senza impegno' },
            { icon: '🥋', label: 'Tutte le discipline' },
          ].map((v, i) => (
            <div key={i} className="text-center p-4 rounded-xl border border-[#1E3028] bg-[#111B16]">
              <div className="text-2xl mb-1">{v.icon}</div>
              <div className="text-xs text-[#6B9E84]">{v.label}</div>
            </div>
          ))}
        </motion.div>

        {inviato ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-2xl border border-[#00A878]/30 bg-[#00A878]/5 text-center">
            <CheckCircle className="w-12 h-12 text-[#00A878] mx-auto mb-4" />
            <h2 className="text-2xl font-black text-[#E8F0EC] mb-3" style={{ fontFamily: 'Cinzel, serif' }}>
              Richiesta inviata!
            </h2>
            <p className="text-sm text-[#9DC4B0] leading-relaxed">
              Il Maestro Cipriani ti contatterà entro 24 ore per confermare il giorno e l'orario della tua prima lezione gratuita.
            </p>
            <button onClick={() => setInviato(false)}
              className="mt-6 text-xs text-[#3D6B52] hover:text-[#6B9E84] transition-colors">
              Invia un'altra richiesta
            </button>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Nome *</label>
                <input required name="nome" type="text"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50" />
              </div>
              <div>
                <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Cognome *</label>
                <input required name="cognome" type="text"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Email *</label>
              <input required name="email" type="email"
                className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50" />
            </div>

            <div>
              <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Telefono</label>
              <input name="telefono" type="tel"
                className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50" />
            </div>

            <div>
              <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Disciplina di interesse *</label>
              <select required name="disciplina"
                className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#9DC4B0] text-sm focus:outline-none focus:border-[#00A878]/50">
                <option value="">Seleziona...</option>
                {DISCIPLINE.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Fascia d'età *</label>
              <select required name="fascia_eta"
                className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#9DC4B0] text-sm focus:outline-none focus:border-[#00A878]/50">
                <option value="">Seleziona...</option>
                {FASCE.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Livello</label>
              <select name="livello"
                className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#9DC4B0] text-sm focus:outline-none focus:border-[#00A878]/50">
                <option value="">Seleziona...</option>
                {LIVELLI.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Note aggiuntive</label>
              <textarea name="note" rows={3}
                placeholder="Domande, esigenze particolari, disponibilità oraria..."
                className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50 resize-none" />
            </div>

            <button type="submit" disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#00A878] text-[#0A0F0D] font-bold hover:bg-[#00D49A] transition-colors shadow-[0_0_30px_rgba(0,168,120,0.4)] text-sm disabled:opacity-60">
              <Send className="w-4 h-4" /> {sending ? 'Invio in corso...' : 'Richiedi la lezione gratuita'}
            </button>

            <p className="text-xs text-center text-[#3D6B52]">
              Nessun dato viene ceduto a terzi. Ti ricontatteremo solo per questa richiesta.
            </p>
          </motion.form>
        )}
      </div>
    </div>
  )
}
