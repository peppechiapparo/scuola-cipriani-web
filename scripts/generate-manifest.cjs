#!/usr/bin/env node
/**
 * generate-manifest.cjs
 *
 * Scansiona ../images/ (rispetto al progetto), copia le foto in
 * client/public/images/<cartella>/ e genera il manifest.json.
 *
 * Convenzione nomi cartella:
 *   TIPO-NOME-DD-MM-YYYY-LUOGO   →  evento (se presente locandina.jpg/png)
 *   TIPO-LUOGO-MM-YYYY           →  allenamento (generico)
 *
 * Utilizzo:
 *   node scripts/generate-manifest.cjs
 *   (oppure: pnpm media)
 */

const fs   = require('fs')
const path = require('path')

// ─── Percorsi ────────────────────────────────────────────────────────────────
const SRC_DIR  = path.resolve(__dirname, '../../images')          // /opt/TPZ/.../images
const DST_DIR  = path.resolve(__dirname, '../client/public/images')
const MANIFEST = path.join(DST_DIR, 'manifest.json')

// ─── Regex ───────────────────────────────────────────────────────────────────
const IMAGE_EXT  = /\.(jpg|jpeg|png|webp|gif)$/i
const LOCANDINA  = /^locandina\.(jpg|jpeg|png|webp)$/i

// ─── Parsing nome cartella ────────────────────────────────────────────────────
function toTitle(parts) {
  return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(' ')
}

function parseFolderName(name) {
  const parts = name.split('-')

  // Pattern 1: PREFIX...-DD-MM-YYYY[-LUOGO...]
  // Cerca due numeri a 2 cifre seguiti da un numero a 4 cifre
  for (let i = 0; i < parts.length - 2; i++) {
    if (/^\d{2}$/.test(parts[i]) && /^\d{2}$/.test(parts[i + 1]) && /^\d{4}$/.test(parts[i + 2])) {
      const prefix = toTitle(parts.slice(0, i))
      const day    = parts[i]
      const month  = parts[i + 1]
      const year   = parts[i + 2]
      const luogo  = parts.length > i + 3 ? toTitle(parts.slice(i + 3)) : ''
      return {
        titolo:      luogo ? `${prefix} · ${luogo}` : prefix,
        data:        `${year}-${month}-${day}`,
        dataDisplay: `${day}/${month}/${year}`,
        luogo,
      }
    }
  }

  // Pattern 2: PREFIX...-MM-YYYY
  for (let i = 0; i < parts.length - 1; i++) {
    if (/^\d{2}$/.test(parts[i]) && /^\d{4}$/.test(parts[i + 1])) {
      const prefix = toTitle(parts.slice(0, i))
      const month  = parts[i]
      const year   = parts[i + 1]
      const luogo  = parts.length > i + 2 ? toTitle(parts.slice(i + 2)) : ''
      return {
        titolo:      luogo ? `${prefix} · ${luogo}` : prefix,
        data:        `${year}-${month}-01`,
        dataDisplay: `${month}/${year}`,
        luogo,
      }
    }
  }

  // Fallback
  return { titolo: toTitle(parts), data: '', dataDisplay: '', luogo: '' }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
if (!fs.existsSync(SRC_DIR)) {
  console.error(`\n❌  Cartella sorgente non trovata: ${SRC_DIR}`)
  console.error('    Crea la cartella e inserisci i tuoi album.\n')
  process.exit(1)
}

fs.mkdirSync(DST_DIR, { recursive: true })

const folders = fs.readdirSync(SRC_DIR).filter(f => {
  const full = path.join(SRC_DIR, f)
  return fs.statSync(full).isDirectory()
})

if (folders.length === 0) {
  console.warn('⚠️  Nessuna cartella trovata in', SRC_DIR)
  fs.writeFileSync(MANIFEST, '[]')
  process.exit(0)
}

const manifest = []

for (const folder of folders) {
  const srcFolder = path.join(SRC_DIR, folder)
  const dstFolder = path.join(DST_DIR, folder)
  fs.mkdirSync(dstFolder, { recursive: true })

  const allFiles = fs.readdirSync(srcFolder).filter(f => IMAGE_EXT.test(f))

  let locandina = null
  const foto = []

  for (const file of allFiles) {
    fs.copyFileSync(path.join(srcFolder, file), path.join(dstFolder, file))
    if (LOCANDINA.test(file)) {
      locandina = `/images/${folder}/${file}`
    } else {
      foto.push(`/images/${folder}/${file}`)
    }
  }

  foto.sort()

  const parsed = parseFolderName(folder)
  const tipo   = locandina ? 'evento' : 'allenamento'

  const entry = {
    id:          folder,
    tipo,
    titolo:      parsed.titolo,
    data:        parsed.data,
    dataDisplay: parsed.dataDisplay,
    luogo:       parsed.luogo,
    foto,
    ...(locandina && { locandina }),
  }

  manifest.push(entry)

  const icon = tipo === 'evento' ? '🏆' : '🥋'
  console.log(`${icon}  ${folder}`)
  console.log(`    titolo:   ${entry.titolo}`)
  console.log(`    data:     ${entry.dataDisplay || '—'}`)
  console.log(`    luogo:    ${entry.luogo || '—'}`)
  console.log(`    foto:     ${foto.length}${locandina ? ' + locandina' : ''}`)
  console.log()
}

// Ordina per data decrescente (eventi più recenti prima)
manifest.sort((a, b) => (b.data || '').localeCompare(a.data || ''))

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2))
console.log(`✅  manifest.json generato: ${manifest.length} album → ${MANIFEST}`)
console.log()
console.log('Prossimo passo:')
console.log('  pnpm build && wrangler deploy')
console.log()
console.log('Oppure tutto in uno:')
console.log('  pnpm deploy')
