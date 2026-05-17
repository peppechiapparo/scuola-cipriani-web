import { fadeUp } from '@/lib/animations'
import SEOHead from '@/components/SEOHead'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, ChevronLeft, ChevronRight, X, Calendar, MapPin, Images } from 'lucide-react'

interface Album {
  id: string
  tipo: 'evento' | 'allenamento'
  titolo: string
  data: string
  dataDisplay: string
  luogo: string
  locandina?: string
  foto: string[]
}

// ─── Album card ───────────────────────────────────────────────────────────────

function AlbumCard({ album, index, onClick }: { album: Album; index: number; onClick: () => void }) {
  const cover = album.locandina ?? album.foto[0]
  const isEvento = album.tipo === 'evento'

  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      custom={index * 0.1}
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden border border-[#1E3028] bg-[#111B16]
                 hover:border-[#00A878]/40 hover:shadow-[0_0_20px_rgba(0,168,120,0.08)] transition-all duration-300"
    >
      {/* Cover */}
      <div className="aspect-[4/3] overflow-hidden bg-[#0D1510] relative">
        {cover ? (
          <img src={cover} alt={album.titolo} loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Camera className="w-12 h-12 text-[#1E3028]" />
          </div>
        )}
        <span className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full
          ${isEvento ? 'bg-[#00A878] text-[#0A0F0D]' : 'bg-[#1E3028] text-[#6B9E84]'}`}>
          {isEvento ? '🏆 Evento' : '🥋 Allenamento'}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-[#E8F0EC] font-semibold text-sm leading-snug mb-2">{album.titolo}</h3>
        <div className="flex items-center gap-3 text-xs text-[#3D6B52]">
          {album.dataDisplay && (
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{album.dataDisplay}</span>
          )}
          {album.luogo && (
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{album.luogo}</span>
          )}
          <span className="flex items-center gap-1 ml-auto">
            <Images className="w-3 h-3" />{album.foto.length} foto
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Pagina principale ────────────────────────────────────────────────────────

export default function Galleria() {
  const [albums, setAlbums]               = useState<Album[]>([])
  const [loading, setLoading]             = useState(true)
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)
  const [lightboxIdx, setLightboxIdx]     = useState<number | null>(null)

  useEffect(() => {
    fetch('/images/manifest.json')
      .then(r => r.json())
      .then((data: Album[]) => { setAlbums(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const closeAlbum    = useCallback(() => { setSelectedAlbum(null); setLightboxIdx(null) }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIdx !== null) { closeLightbox(); return }
        if (selectedAlbum)        { closeAlbum();    return }
      }
      if (lightboxIdx === null || !selectedAlbum) return
      if (e.key === 'ArrowRight') setLightboxIdx(i => Math.min((i ?? 0) + 1, selectedAlbum.foto.length - 1))
      if (e.key === 'ArrowLeft')  setLightboxIdx(i => Math.max((i ?? 0) - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIdx, selectedAlbum, closeLightbox, closeAlbum])

  const eventi      = albums.filter(a => a.tipo === 'evento')
  const allenamenti = albums.filter(a => a.tipo !== 'evento')

  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">
      <SEOHead
        title="Galleria Fotografica"
        description="Galleria fotografica della Scuola della Montagna Shan — allenamenti, gare e eventi di Kung Fu, Karate e Kurash a Viterbo e in Italia."
        path="/galleria"
      />

      {/* Hero */}
      <section className="py-20 text-center px-4 border-b border-[#1E3028]">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <Camera className="w-10 h-10 text-[#00A878] mx-auto mb-4" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Foto & Video</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 text-[#E8F0EC]"
              style={{ fontFamily: 'Cinzel, serif' }}>
            {selectedAlbum ? selectedAlbum.titolo : 'Galleria'}
          </h1>
          {selectedAlbum && (
            <div className="flex items-center justify-center flex-wrap gap-4 mt-4 text-[#6B9E84] text-sm">
              {selectedAlbum.dataDisplay && (
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{selectedAlbum.dataDisplay}</span>
              )}
              {selectedAlbum.luogo && (
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{selectedAlbum.luogo}</span>
              )}
              <span className="flex items-center gap-1.5"><Images className="w-3.5 h-3.5" />{selectedAlbum.foto.length} foto</span>
            </div>
          )}
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Back */}
        {selectedAlbum && (
          <button onClick={closeAlbum}
            className="flex items-center gap-1.5 mb-8 text-[#6B9E84] hover:text-[#00A878] transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" /> Torna alla galleria
          </button>
        )}

        {/* Lista album */}
        {!selectedAlbum && (
          <>
            {loading && <div className="text-center text-[#3D6B52] py-20 text-sm">Caricamento...</div>}

            {!loading && albums.length === 0 && (
              <div className="text-center py-20">
                <Camera className="w-12 h-12 text-[#1E3028] mx-auto mb-4" />
                <p className="text-[#3D6B52] text-sm">Nessun contenuto disponibile.</p>
              </div>
            )}

            {/* EVENTI */}
            {eventi.length > 0 && (
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">🏆 Eventi</span>
                  <div className="flex-1 h-px bg-[#1E3028]" />
                  <span className="text-xs text-[#3D6B52]">{eventi.length} album</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventi.map((album, i) => (
                    <AlbumCard key={album.id} album={album} index={i} onClick={() => setSelectedAlbum(album)} />
                  ))}
                </div>
              </div>
            )}

            {/* ALLENAMENTI */}
            {allenamenti.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-semibold tracking-[0.3em] text-[#4A8A6A] uppercase">🥋 Allenamenti & Gallery</span>
                  <div className="flex-1 h-px bg-[#1E3028]" />
                  <span className="text-xs text-[#3D6B52]">{allenamenti.length} album</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allenamenti.map((album, i) => (
                    <AlbumCard key={album.id} album={album} index={i} onClick={() => setSelectedAlbum(album)} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Griglia foto album */}
        {selectedAlbum && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {selectedAlbum.locandina && (
              <motion.div
                variants={fadeUp} initial="hidden" animate="visible"
                className="col-span-full sm:col-span-1 rounded-xl overflow-hidden border-2 border-[#00A878]/30 bg-[#111B16]">
                <img src={selectedAlbum.locandina} alt="Locandina" className="w-full h-auto object-contain" />
              </motion.div>
            )}
            {selectedAlbum.foto.map((src, i) => (
              <motion.button key={src}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.03}
                onClick={() => setLightboxIdx(i)}
                className="aspect-square rounded-lg overflow-hidden border border-[#1E3028] bg-[#111B16]
                           group focus:outline-none focus:ring-2 focus:ring-[#00A878]/50">
                <img src={src} alt={`Foto ${i + 1}`} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
              onClick={closeLightbox} aria-label="Chiudi">
              <X className="w-5 h-5" />
            </button>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-sm tabular-nums">
              {lightboxIdx + 1} / {selectedAlbum.foto.length}
            </div>

            {lightboxIdx > 0 && (
              <button
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white
                           p-2 rounded-full bg-black/40 hover:bg-black/70 transition-all"
                onClick={e => { e.stopPropagation(); setLightboxIdx(lightboxIdx - 1) }}
                aria-label="Precedente">
                <ChevronLeft className="w-7 h-7" />
              </button>
            )}

            <motion.img
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
              src={selectedAlbum.foto[lightboxIdx]}
              alt=""
              className="max-w-[88vw] max-h-[88vh] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />

            {lightboxIdx < selectedAlbum.foto.length - 1 && (
              <button
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-white
                           p-2 rounded-full bg-black/40 hover:bg-black/70 transition-all"
                onClick={e => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1) }}
                aria-label="Successiva">
                <ChevronRight className="w-7 h-7" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
