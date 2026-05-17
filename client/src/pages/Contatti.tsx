import { fadeUp } from '@/lib/animations'
import SEOHead from '@/components/SEOHead'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Send, ExternalLink } from 'lucide-react'

// Coordinate Strada Tuscanese 107/g, Viterbo
// Verifica su: https://www.openstreetmap.org/?mlat=42.426&mlon=12.089#map=16/42.426/12.089
const MAP_LAT  = 42.426
const MAP_LON  = 12.089
const OSM_EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=12.070%2C42.414%2C12.108%2C42.438&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LON}`
const OSM_LINK  = `https://www.openstreetmap.org/?mlat=${MAP_LAT}&mlon=${MAP_LON}#map=16/${MAP_LAT}/${MAP_LON}`


export default function Contatti() {
  const [inviato, setInviato] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const formData = new FormData(e.currentTarget)
    formData.append('access_key', 'a1dff947-2a12-4c93-a601-c3a60f3824df')
    formData.append('subject', 'Nuovo messaggio da scuolakungfucipriani.it')
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
        title="Contatti e Sede"
        description="Contatta la Scuola della Montagna Shan — Strada Tuscanese 107/g, Viterbo (VT). Orari, telefono, email e mappa. Prima lezione gratuita su appuntamento."
        path="/contatti"
      />

      {/* Hero */}
      <section className="py-14 text-center px-4">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Vieni a trovarci</span>
          <h1 className="text-4xl md:text-6xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
            Contatti
          </h1>
          <p className="text-[#6B9E84] mt-4 max-w-xl mx-auto">
            Siamo a Viterbo, nel cuore della Tuscia. Scrivici o vieni direttamente in palestra.
          </p>
        </motion.div>
      </section>

      {/* ── MAPPA FULL WIDTH ──── */}
      <section className="relative">
        <div className="h-[380px] md:h-[480px] w-full overflow-hidden bg-[#0D1510]">
          <iframe
            title="Mappa Scuola della Montagna Shan — Viterbo"
            src={OSM_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            className="opacity-95"
          />
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0A0F0D] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0F0D] to-transparent pointer-events-none" />
        </div>
        {/* Address chip */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 w-max max-w-[90vw]">
          <div className="flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-xl
                          bg-[#0A0F0D]/92 backdrop-blur-sm border border-[#00A878]/30 shadow-2xl">
            <MapPin className="w-4 h-4 text-[#00A878] flex-shrink-0" />
            <span className="text-sm text-[#E8F0EC] font-medium">Strada Tuscanese 107/g, Viterbo</span>
            <a href={OSM_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-[#00A878] hover:text-[#00D49A] transition-colors">
              Apri mappa <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT INFO CARDS ─── */}
      <section className="max-w-5xl mx-auto px-4 pt-12 pb-4">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              icon: MapPin,
              label: 'Indirizzo',
              value: 'Strada Tuscanese 107/g\nViterbo (VT) — Lazio',
              link: { label: 'Indicazioni stradali', href: OSM_LINK, external: true },
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'info@scuolacipriani.it',
              link: { label: "Scrivi un'email", href: 'mailto:info@scuolacipriani.it', external: false },
            },
            {
              icon: Clock,
              label: 'Orari segreteria',
              value: 'Lun–Ven: 17:00–20:30\nSabato: 9:30–12:00',
              link: null,
            },
          ].map((item, i) => (
            <motion.div key={i}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
              className="flex flex-col p-6 rounded-xl border border-[#1E3028] bg-[#111B16]
                         hover:border-[#00A878]/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#00A878]/10 border border-[#00A878]/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#00A878]" />
              </div>
              <p className="text-xs font-semibold text-[#00A878] uppercase tracking-wider mb-2">{item.label}</p>
              <p className="text-sm text-[#9DC4B0] whitespace-pre-line flex-1 leading-relaxed">{item.value}</p>
              {item.link && (
                <a href={item.link.href}
                  target={item.link.external ? '_blank' : '_self'}
                  rel={item.link.external ? 'noopener noreferrer' : undefined}
                  className="mt-4 text-xs font-semibold text-[#00A878] hover:text-[#00D49A] transition-colors flex items-center gap-1">
                  {item.link.label} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FORM ─── */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Left: perché contattarci */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Scrivici</span>
              <h2 className="text-2xl font-black text-[#E8F0EC] mt-1" style={{ fontFamily: 'Cinzel, serif' }}>
                Come possiamo aiutarti?
              </h2>
              <p className="text-sm text-[#6B9E84] mt-3 leading-relaxed">
                Vuoi sapere di più sui corsi, sugli orari o su come iscriverti?
                Compila il modulo e ti risponderemo entro 24 ore.
              </p>
            </div>
            <div className="space-y-3 pt-2">
              {[
                { icon: '🥋', text: 'Prima lezione sempre gratuita' },
                { icon: '👶', text: 'Corsi per bambini da 6 anni' },
                { icon: '🏆', text: 'Percorsi agonistici e amatoriali' },
                { icon: '🤝', text: 'Risposta garantita entro 24h' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#6B9E84]">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div className="md:col-span-3"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            {inviato ? (
              <div className="p-8 rounded-xl border border-[#00A878]/30 bg-[#00A878]/5 text-center">
                <div className="text-3xl mb-3">✉️</div>
                <h3 className="text-lg font-bold text-[#00A878] mb-2">Messaggio inviato!</h3>
                <p className="text-sm text-[#6B9E84]">Ti risponderemo al più presto. Grazie per averci contattato.</p>
                <button onClick={() => setInviato(false)}
                  className="mt-4 text-xs text-[#3D6B52] hover:text-[#6B9E84] transition-colors">
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Nome *</label>
                    <input required name="nome" type="text" placeholder="Mario"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50" />
                  </div>
                  <div>
                    <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Cognome *</label>
                    <input required name="cognome" type="text" placeholder="Rossi"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Email *</label>
                  <input required name="email" type="email" placeholder="mario@esempio.it"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50" />
                </div>

                <div>
                  <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Oggetto</label>
                  <select name="oggetto"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#9DC4B0] text-sm focus:outline-none focus:border-[#00A878]/50">
                    <option value="informazioni">Informazioni sui corsi</option>
                    <option value="iscrizione">Iscrizione</option>
                    <option value="prova">Lezione di prova gratuita</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#6B9E84] mb-1.5 uppercase tracking-wider">Messaggio *</label>
                  <textarea required name="messaggio" rows={4} placeholder="Scrivi il tuo messaggio..."
                    className="w-full px-3 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50 resize-none" />
                </div>

                <button type="submit" disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#00A878] text-[#0A0F0D] font-semibold text-sm hover:bg-[#00D49A] transition-colors shadow-[0_0_20px_rgba(0,168,120,0.3)] disabled:opacity-60">
                  <Send className="w-4 h-4" /> {sending ? 'Invio in corso...' : 'Invia messaggio'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
