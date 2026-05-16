# Setup Cloudflare Pages + Dominio Aruba

## 1. Cloudflare Pages — Deploy automatico da GitHub

### 1.1 Crea account Cloudflare (se non hai già)
- Vai su https://cloudflare.com → Sign Up (gratuito)
- Usa l'email principale

### 1.2 Connetti GitHub a Cloudflare Pages
1. Dashboard Cloudflare → **Workers & Pages** → **Create**
2. Seleziona **Pages** → **Connect to Git**
3. Autorizza Cloudflare ad accedere al tuo account GitHub (`peppechiapparo`)
4. Seleziona il repository: `scuola-cipriani-web`

### 1.3 Configura il build
| Campo | Valore |
|-------|--------|
| Framework preset | `Vite` |
| Build command | `npx pnpm install && npx pnpm build` |
| Build output directory | `dist` |
| Root directory | *(lascia vuoto)* |
| Node.js version | `20` (imposta in Environment Variables) |

**Environment Variables da aggiungere:**
| Nome | Valore |
|------|--------|
| `NODE_VERSION` | `20` |

### 1.4 Primo deploy
- Clicca **Save and Deploy**
- Attendi 2-3 minuti — Cloudflare compila e pubblica
- Riceverai un URL tipo: `https://scuola-cipriani-web.pages.dev`
- Testa che tutte le pagine funzionino su quell'URL

---

## 2. Dominio personalizzato — Da Aruba a Cloudflare

### 2.1 Aggiungi il dominio su Cloudflare Pages
1. Apri il progetto `scuola-cipriani-web` su Cloudflare Pages
2. Vai in **Custom domains** → **Set up a custom domain**
3. Inserisci: `www.scuolacipriani.it`
4. Cloudflare ti mostrerà i **nameserver** (es. `aria.ns.cloudflare.com`, `carl.ns.cloudflare.com`)

### 2.2 Aggiungi il sito su Cloudflare (zona DNS)
1. Dashboard Cloudflare → **Add a Site**
2. Digita: `scuolacipriani.it` → plan **Free**
3. Cloudflare scannerà i DNS esistenti di Aruba — importale tutte
4. Ti fornirà 2 nameserver Cloudflare

### 2.3 Modifica nameserver su Aruba
1. Accedi su https://admin.aruba.it con le credenziali Aruba
2. **Domini** → `scuolacipriani.it` → **Modifica nameserver**
3. Sostituisci i nameserver Aruba con quelli Cloudflare (step 2.2)
4. Salva — la propagazione richiede da 30 minuti a 24 ore

### 2.4 Configura DNS su Cloudflare
Una volta che Cloudflare ha il controllo del dominio, aggiungi questi record:

| Tipo | Nome | Contenuto | Proxy |
|------|------|-----------|-------|
| CNAME | `www` | `scuola-cipriani-web.pages.dev` | ✅ Proxied |
| CNAME | `@` (root) | `scuola-cipriani-web.pages.dev` | ✅ Proxied |

> **Nota**: Cloudflare gestisce automaticamente il redirect `scuolacipriani.it` → `www.scuolacipriani.it`

### 2.5 HTTPS automatico
Cloudflare genera e rinnova automaticamente il certificato SSL — nessuna azione richiesta.

---

## 3. Deploy successivi

Ogni volta che fai `git push` sul branch `main`, Cloudflare Pages:
1. Rileva automaticamente il push
2. Rebuilda il sito (~2 minuti)
3. Pubblica la nuova versione

**Preview builds**: i push su branch diversi da `main` generano preview URL automatici (utili per testare prima di pubblicare).

---

## 4. Configurazioni post-deploy

### 4.1 Disqus (commenti News)
1. Crea account su https://disqus.com
2. **Admin** → **Add site** → Nome sito: `Scuola Cipriani`
3. Nota lo **shortname** assegnato (es. `scuola-cipriani-12345`)
4. Modifica `client/src/pages/News.tsx`:
   ```tsx
   // Riga con s.src — sostituisci lo shortname:
   s.src = 'https://TUO-SHORTNAME.disqus.com/embed.js'
   ```
5. `git add -A && git commit -m "fix: disqus shortname reale" && git push`

### 4.2 Formsubmit (form contatti e prenotazioni)
- **Prima volta** che qualcuno compila il form, Formsubmit manda un'email di conferma a `info@scuolacipriani.it`
- **Devi cliccare il link di conferma** nell'email per attivare il form
- I form funzionano senza account — ma serve questa conferma una tantum

### 4.3 Google Maps (mappa Contatti)
1. Vai su https://maps.google.com
2. Cerca: `Strada Tuscanese 107/g, Viterbo`
3. **Condividi** → **Incorpora mappa** → Copia l'iframe `src`
4. Modifica `client/src/pages/Contatti.tsx`:
   ```tsx
   // Sostituisci il valore src dell'iframe con quello reale di Google Maps
   src="https://www.google.com/maps/embed?pb=..."
   ```
5. Commit + push

### 4.4 Social media (Footer)
Nel file `client/src/components/Footer.tsx`, sostituisci i link `href="#"`:
```tsx
// Instagram
href="https://www.instagram.com/TIZO_PROFILO"
// Facebook  
href="https://www.facebook.com/TIZO_PROFILO"
// YouTube
href="https://www.youtube.com/@TIZO_CANALE"
```

---

## 5. Struttura del progetto

```
scuola_cipriani_web/
├── client/
│   ├── index.html              # Entry point con meta SEO
│   ├── public/
│   │   ├── _redirects          # SPA routing Cloudflare Pages
│   │   ├── _headers            # Security headers
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── images/             # Inserire qui le foto (futuro)
│   └── src/
│       ├── lib/animations.ts   # Varianti framer-motion condivise
│       ├── pages/              # 8 pagine del sito
│       └── components/         # Navbar, Footer, UI components
├── dist/                       # Build output (non committato)
└── package.json
```

---

## 6. Future sviluppi — Galleria automatica con Raspberry Pi 5

La pagina Galleria (`client/src/pages/Galleria.tsx`) è pronta per ricevere le foto.

**Workflow previsto:**
1. Raspberry Pi 5 monitora una cartella con agenti AI
2. Le foto vengono copiate in `client/public/images/`
3. `Galleria.tsx` usa `import.meta.glob` per caricarle automaticamente
4. Un GitHub Action o webhook Cloudflare triggera il rebuild

Quando sei pronto, aggiorna `Galleria.tsx` con:
```tsx
const modules = import.meta.glob('/public/images/*.{jpg,jpeg,png,webp}', { eager: true })
const IMMAGINI = Object.keys(modules).map(path => path.replace('/public', ''))
```
