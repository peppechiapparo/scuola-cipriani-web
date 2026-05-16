import { fadeUp } from '@/lib/animations'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, ArrowLeft } from 'lucide-react'


interface Post {
  id: number
  data: string
  titolo: string
  sommario: string
  contenuto: string
  tag: string
}

const POSTS: Post[] = [
  {
    id: 1,
    data: '2025-03-15',
    titolo: 'Campionato Provinciale Kung Fu — I nostri allievi sul podio',
    sommario: 'Ottimi risultati al campionato provinciale di Viterbo. La Scuola della Montagna Shan porta a casa 3 medaglie nelle categorie forme e combattimento.',
    contenuto: `Il 15 marzo 2025 si è svolto il Campionato Provinciale di Kung Fu Wushu a Viterbo. I nostri allievi si sono distinti in tutte le categorie, portando a casa tre medaglie.

Particolare menzione per Federico Ferrazzani, che ha conquistato l'oro nella categoria forme avanzate, e per il giovane allievo Lorenzo Bacci, argento nel combattimento under-18.

Un grazie speciale al Maestro Kris Cipriani per la preparazione atletica e al Maestro Pietro Cipriani per la guida tecnica.`,
    tag: 'Competizioni'
  },
  {
    id: 2,
    data: '2025-02-01',
    titolo: 'Nuovo corso di Tai Chi Quan per over 50',
    sommario: 'Da marzo 2025 parte un nuovo corso di Tai Chi Quan dedicato agli over 50. Un percorso dolce per benessere fisico e mentale.',
    contenuto: `Siamo felici di annunciare l'avvio di un nuovo corso di Tai Chi Quan dedicato agli adulti over 50.

Il Tai Chi è perfetto per chi cerca un'attività fisica dolce, che migliori l'equilibrio, la postura e riduca lo stress. Non è richiesta alcuna esperienza pregressa nelle arti marziali.

Le lezioni si terranno ogni martedì e giovedì dalle 10:00 alle 11:00. Per informazioni o iscrizioni, contattaci direttamente.`,
    tag: 'Corsi'
  },
  {
    id: 3,
    data: '2025-01-10',
    titolo: 'Auguri di Buon Anno 2025 dalla Scuola Shan',
    sommario: 'La Scuola della Montagna Shan augura a tutti gli allievi, famiglie e amici un felice e prospero 2025.',
    contenuto: `Un anno ricco di sfide, vittorie e crescita personale si chiude. La Scuola della Montagna Shan ringrazia tutti gli allievi, vecchi e nuovi, che hanno scelto di percorrere con noi il cammino delle arti marziali.

Il 2025 porta nuovi corsi, nuove gare e nuove opportunità di crescita. Continuate ad allenarvi con dedizione e rispetto.

Buon Anno dal Maestro Pietro Cipriani e da tutta la famiglia della Scuola Shan.`,
    tag: 'Scuola'
  },
]

// Disqus embed component
function DisqusComments({ postId, title }: { postId: number; title: string }) {
  useEffect(() => {
    // @ts-ignore
    if (window.DISQUS) {
      // @ts-ignore
      window.DISQUS.reset({
        reload: true,
        config() {
          // @ts-ignore
          this.page.url = window.location.href
          // @ts-ignore
          this.page.identifier = `post-${postId}`
          // @ts-ignore
          this.page.title = title
        }
      })
    } else {
      const d = document
      const s = d.createElement('script')
      // ⚠️ Sostituire 'scuola-cipriani' con il shortname Disqus reale dopo la registrazione
      s.src = 'https://scuola-cipriani.disqus.com/embed.js'
      s.setAttribute('data-timestamp', String(+new Date()))
      ;(d.head || d.body).appendChild(s)
    }
  }, [postId])

  return (
    <div className="mt-12 pt-8 border-t border-[#1E3028]">
      <h3 className="text-sm font-semibold text-[#9DC4B0] mb-4 tracking-wider uppercase">Commenti</h3>
      <div id="disqus_thread" />
    </div>
  )
}

export default function News() {
  const [selected, setSelected] = useState<Post | null>(null)

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })

  if (selected) {
    return (
      <div className="bg-[#0A0F0D] min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <button onClick={() => setSelected(null)}
            className="flex items-center gap-2 text-sm text-[#6B9E84] hover:text-[#00A878] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Tutte le news
          </button>
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 text-xs text-[#3D6B52] mb-3">
              <Calendar className="w-3 h-3" />
              {formatDate(selected.data)}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-[#00A878]/10 text-[#00A878] border border-[#00A878]/20">
                {selected.tag}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#E8F0EC] mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
              {selected.titolo}
            </h1>
            <div className="prose prose-invert max-w-none text-[#9DC4B0] text-sm leading-relaxed space-y-4">
              {selected.contenuto.split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <DisqusComments postId={selected.id} title={selected.titolo} />
          </motion.article>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#0A0F0D] min-h-screen pt-20">

      {/* Hero */}
      <section className="py-20 text-center px-4 border-b border-[#1E3028]">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#00A878] uppercase">Aggiornamenti</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 text-[#E8F0EC]" style={{ fontFamily: 'Cinzel, serif' }}>
            News
          </h1>
          <p className="text-[#6B9E84] mt-4">
            Notizie, eventi e risultati della Scuola della Montagna Shan
          </p>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-4">
        {POSTS.map((post, i) => (
          <motion.article key={post.id}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
            className="group p-6 rounded-xl border border-[#1E3028] bg-[#111B16] cursor-pointer hover:border-[#00A878]/40 hover:shadow-[0_0_20px_rgba(0,168,120,0.1)] transition-all"
            onClick={() => setSelected(post)}
          >
            <div className="flex items-center gap-2 text-xs text-[#3D6B52] mb-3">
              <Calendar className="w-3 h-3" />
              {formatDate(post.data)}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-[#00A878]/10 text-[#00A878] border border-[#00A878]/20">
                {post.tag}
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#E8F0EC] mb-2 group-hover:text-[#00A878] transition-colors"
              style={{ fontFamily: 'Cinzel, serif' }}>
              {post.titolo}
            </h2>
            <p className="text-sm text-[#6B9E84] leading-relaxed mb-4">{post.sommario}</p>
            <div className="flex items-center gap-1 text-xs font-medium text-[#00A878]">
              Leggi di più <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
