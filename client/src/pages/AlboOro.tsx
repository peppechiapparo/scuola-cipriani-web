import { fadeUp } from '@/lib/animations'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Search } from 'lucide-react'


const ALBO = {
  kung_fu: {
    label: '🐉 Kung Fu Wushu',
    tecnici: [
      { nome: 'Pietro Cipriani', grado: 'Maestro · Cintura Oro 6° Duan', citta: 'Viterbo' },
      { nome: 'Kris Cipriani', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Viterbo' },
      { nome: 'Edmondo Bemporad', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Roma' },
      { nome: 'Giovanni Duranti', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Bagnoregio (VT)' },
      { nome: 'Emanuele Ippoliti', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Varese' },
      { nome: 'Federico Ferrazzani', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Viterbo' },
      { nome: 'Luciano Fumoso', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Montefiascone (VT)' },
      { nome: 'Alfredo Cusi', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Viterbo' },
      { nome: 'Poleggi Lanno', grado: 'Maestro · Cintura Nera 3° Duan', citta: 'Vasanello (VT)' },
      { nome: 'Danilo Porri', grado: 'Istruttore · Cintura Nera 2° Duan', citta: 'Narni (TR)' },
      { nome: 'Giancarlo Proietti', grado: 'Istruttore · Cintura Nera 2° Duan', citta: 'Roma' },
      { nome: 'Edoardo Artemi', grado: 'Istruttore · Cintura Nera 2° Duan', citta: 'Viterbo' },
      { nome: 'Manuela Manfredini', grado: 'Aiuto-istruttore · Cintura Nera 2° Duan', citta: 'Sassuolo (MO)' },
      { nome: 'Franco Teodoro', grado: 'Cintura Nera 1° Duan', citta: 'Viterbo' },
      { nome: 'Olindo Cicchetti', grado: 'Allenatore · Cintura Nera 1° Duan', citta: 'Vetralla (VT)' },
      { nome: 'Silvano Palaggi', grado: 'Allenatore · Cintura Nera 1° Duan', citta: 'Viterbo' },
      { nome: 'Matteo Lannaioli', grado: 'Aiuto-istruttore · Cintura Nera 1° Duan', citta: 'Narni (TR)' },
      { nome: 'Orfeo Menna', grado: 'Aiuto-istruttore · Cintura Nera 1° Duan', citta: 'Tarquinia (VT)' },
      { nome: 'Manuele Di Felice', grado: 'Allenatore · Cintura Nera 1° Duan', citta: 'Camerino (MC)' },
      { nome: 'Manuel Cusi', grado: 'Cintura Nera 1° Duan', citta: 'Viterbo' },
    ]
  },
  taichi: {
    label: '☯️ Tai Chi Quan',
    tecnici: [
      { nome: 'Pietro Cipriani', grado: 'Maestro', citta: 'Viterbo' },
      { nome: 'Giovanni Duranti', grado: 'Maestro', citta: 'Bagnoregio (VT)' },
      { nome: 'Edmondo Bemporad', grado: 'Maestro', citta: 'Roma' },
      { nome: 'Poleggi Lanno', grado: 'Allenatore', citta: 'Vasanello (VT)' },
      { nome: 'Mauro Gottardi', grado: 'Istruttore', citta: 'Orte (VT)' },
      { nome: 'Fabio De Angelis', grado: 'Allenatore', citta: 'Viterbo' },
    ]
  },
  shuai: {
    label: '🤼 Shuai Jiao',
    tecnici: [
      { nome: 'Pietro Cipriani', grado: 'Maestro', citta: 'Viterbo' },
      { nome: 'Kris Cipriani', grado: 'Maestro', citta: 'Viterbo' },
      { nome: 'Emanuele Ippoliti', grado: 'Istruttore', citta: 'Varese' },
      { nome: 'Giovanni Duranti', grado: 'Allenatore', citta: 'Bagnoregio (VT)' },
      { nome: 'Federico Ferrazzani', grado: 'Allenatore', citta: 'Viterbo' },
      { nome: 'Edoardo Artemi', grado: 'Allenatore', citta: 'Viterbo' },
      { nome: 'Orfeo Menna', grado: 'Allenatore', citta: 'Tarquinia (VT)' },
      { nome: 'Andrea Rossini', grado: 'Aiuto-allenatore', citta: 'Viterbo' },
      { nome: 'Luca Ragugini', grado: 'Allievo Avanzato', citta: 'Viterbo' },
      { nome: 'Simone Pomi', grado: 'Allievo Avanzato', citta: 'Viterbo' },
    ]
  }
}

export default function AlboOro() {
  const [tab, setTab] = useState<keyof typeof ALBO>('kung_fu')
  const [search, setSearch] = useState('')

  const lista = ALBO[tab].tecnici.filter(t =>
    !search ||
    t.nome.toLowerCase().includes(search.toLowerCase()) ||
    t.grado.toLowerCase().includes(search.toLowerCase()) ||
    t.citta.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">

      {/* Hero */}
      <section className="py-20 text-center px-4 border-b border-[#1E3028] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="relative z-10">
          <Trophy className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">Comitato Provinciale US ACLI · Viterbo</span>
          <h1 className="text-4xl md:text-6xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
            Albo d'Oro
          </h1>
          <p className="text-[#6B9E84] mt-4 max-w-lg mx-auto">
            I tecnici qualificati formati dalla Scuola della Montagna Shan nel corso dei decenni.
          </p>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {(Object.keys(ALBO) as Array<keyof typeof ALBO>).map(k => (
            <button key={k} onClick={() => setTab(k)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                tab === k
                  ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                  : 'border-[#1E3028] text-[#6B9E84] hover:border-[#D4AF37]/40 hover:text-[#9DC4B0]'
              }`}
            >
              {ALBO[k].label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3D6B52]" />
          <input
            type="text"
            placeholder="Cerca per nome, grado o città..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#1E3028] bg-[#111B16] text-[#E8F0EC] text-sm placeholder-[#3D6B52] focus:outline-none focus:border-[#00A878]/50"
          />
        </div>

        {/* Counter */}
        <p className="text-xs text-[#3D6B52] mb-4">{lista.length} tecnici</p>

        {/* Table */}
        <div className="rounded-xl border border-[#1E3028] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#111B16] border-b border-[#1E3028]">
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#00A878] tracking-wider uppercase">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#00A878] tracking-wider uppercase">Nome</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#00A878] tracking-wider uppercase hidden sm:table-cell">Grado / Qualifica</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-[#00A878] tracking-wider uppercase hidden md:table-cell">Città</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((t, i) => (
                <motion.tr key={i}
                  variants={fadeUp} initial="hidden" animate="visible" custom={i * 0.03}
                  className="border-b border-[#1E3028] last:border-0 hover:bg-[#111B16]/60 transition-colors"
                >
                  <td className="px-4 py-3 text-[#3D6B52]">{i + 1}</td>
                  <td className="px-4 py-3 font-medium text-[#E8F0EC]">{t.nome}</td>
                  <td className="px-4 py-3 text-[#6B9E84] hidden sm:table-cell">{t.grado}</td>
                  <td className="px-4 py-3 text-[#3D6B52] hidden md:table-cell">{t.citta}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {lista.length === 0 && (
            <div className="py-12 text-center text-[#3D6B52] text-sm">Nessun risultato trovato.</div>
          )}
        </div>
      </div>
    </div>
  )
}
