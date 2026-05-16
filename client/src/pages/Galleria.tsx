import { fadeUp } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Camera, Upload } from 'lucide-react'


// Le immagini vengono caricate automaticamente dalla cartella /images/
// attraverso il workflow del Raspberry Pi 5
const IMMAGINI: string[] = []
// In futuro: import.meta.glob('/public/images/*.{jpg,jpeg,png,webp}')

export default function Galleria() {
  const hasFotos = IMMAGINI.length > 0

  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">

      {/* Hero */}
      <section className="py-20 text-center px-4 border-b border-[#1E3028]">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Camera className="w-10 h-10 text-[#00A878] mx-auto mb-4" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Foto & Video</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
            Galleria
          </h1>
          <p className="text-[#6B9E84] mt-4 max-w-xl mx-auto">
            Momenti di allenamento, gare e vita della Scuola della Montagna Shan.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {hasFotos ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {IMMAGINI.map((src, i) => (
              <motion.div key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.05}
                className="aspect-square rounded-lg overflow-hidden border border-[#1E3028] bg-[#111B16] cursor-pointer group">
                <img src={src} alt={`Foto ${i + 1}`} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div variants={fadeUp} initial="hidden" animate="visible"
            className="py-20 text-center">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#1E3028] flex items-center justify-center mx-auto mb-6">
              <Upload className="w-8 h-8 text-[#3D6B52]" />
            </div>
            <h3 className="text-lg font-bold text-[#6B9E84] mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
              Galleria in costruzione
            </h3>
            <p className="text-sm text-[#3D6B52] max-w-sm mx-auto">
              Le foto e i video della scuola saranno disponibili a breve.
              Il caricamento avviene automaticamente tramite il workflow media.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
