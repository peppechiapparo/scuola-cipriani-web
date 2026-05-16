import { fadeUp } from '@/lib/animations'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Mail, Clock, Send } from 'lucide-react'


export default function Contatti() {
  const [inviato, setInviato] = useState(false)

  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">

      {/* Hero */}
      <section className="py-20 text-center px-4 border-b border-[#1E3028]">
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

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <h2 className="text-xl font-black text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
              Dove siamo
            </h2>

            {[
              {
                icon: MapPin,
                label: 'Sede',
                value: 'Strada Tuscanese 107/g\nViterbo (VT) — Lazio',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'info@scuolacipriani.it',
                href: 'mailto:info@scuolacipriani.it',
              },
              {
                icon: Clock,
                label: 'Orari segreteria',
                value: 'Lun–Ven: 17:00–20:30\nSabato: 9:30–12:00',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-[#1E3028] bg-[#111B16]">
                <item.icon className="w-5 h-5 text-[#00A878] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#00A878] uppercase tracking-wider mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-[#9DC4B0] hover:text-[#00A878] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#9DC4B0] whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-[#1E3028] h-52">
              <iframe
                title="Mappa Scuola Cipriani"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.8!2d12.1074!3d42.4174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI1JzAwLjAiTiAxMsKwMDYnMjcuMCJF!5e0!3m2!1sit!2sit!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <h2 className="text-xl font-black text-[#E8F0EC] mb-6" style={{ fontFamily: 'Cinzel, serif' }}>
              Scrivici
            </h2>

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
              // Formsubmit.co — nessun backend richiesto
              // Sostituire YOUR_EMAIL con l'email reale prima del deploy
              <form
                action="https://formsubmit.co/info@scuolacipriani.it"
                method="POST"
                onSubmit={() => setInviato(true)}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="Nuovo messaggio da scuolacipriani.it" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

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

                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#00A878] text-[#0A0F0D] font-semibold text-sm hover:bg-[#00D49A] transition-colors shadow-[0_0_20px_rgba(0,168,120,0.3)]">
                  <Send className="w-4 h-4" /> Invia messaggio
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
