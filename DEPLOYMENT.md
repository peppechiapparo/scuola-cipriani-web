# DEPLOYMENT — scuola-cipriani-web

> **LEGGERE QUESTO FILE PRIMA DI QUALSIASI DEPLOY.**

## Architettura

Il sito è un **Cloudflare Worker con Static Assets** (NON Cloudflare Pages).
Il codice sorgente è su GitHub (`peppechiapparo/scuola-cipriani-web`) ma il deploy
**non è automatico** — va lanciato manualmente con `wrangler deploy`.

```
GitHub (sorgente) ──► push (codice) ──► solo backup/versioning
                                            │
Local build ──► pnpm build ──► dist/  ──► wrangler deploy ──► Cloudflare Worker
                                                                      │
                                                          scuolakungfucipriani.it
                                                          www.scuolakungfucipriani.it
```

## Procedura corretta

```bash
cd /opt/TPZ/src/scuola_cipriani/scuola_cipriani_web

# 1. Imposta PATH per Node/nvm
export PATH="/home/giuseppe/.nvm/versions/node/v22.22.2/bin:$PATH"

# 2. Build
pnpm build

# 3. Deploy su Cloudflare (Worker + Assets)
npx wrangler deploy

# 4. Push codice sorgente su GitHub (facoltativo — non fa il deploy)
git add -A && git commit -m "..." && git push origin main
```

## Verifica post-deploy

```bash
# Controlla che il sito live abbia le ultime modifiche
curl -s https://www.scuolakungfucipriani.it/ | grep -E "(canonical|description)" | head -3
```

## Configurazione (wrangler.toml)

```toml
name = "scuola-cipriani-web"
compatibility_date = "2025-01-01"

routes = [
  { pattern = "scuolakungfucipriani.it/*", zone_name = "scuolakungfucipriani.it" },
  { pattern = "www.scuolakungfucipriani.it/*", zone_name = "scuolakungfucipriani.it" }
]

[assets]
directory = "./dist"
not_found_handling = "single-page-application"
```

**NON aggiungere** `pages_build_output_dir` — è per Cloudflare Pages, non per Worker.
**NON usare** `wrangler pages deploy` — non è un progetto Pages.
**NON creare** nuovi progetti Pages da Cloudflare dashboard o wrangler CLI.

## Errori da NON ripetere

| Errore | Causa | Soluzione |
|--------|-------|-----------|
| `wrangler pages deploy` / creazione nuovo progetto Pages | Confusione Worker vs Pages | Usare solo `wrangler deploy` |
| Push su GitHub senza `wrangler deploy` | Non c'è CI/CD automatico | Lanciare sempre `wrangler deploy` dopo il build |
| `../dist` come path | Il `dist/` è dentro `scuola_cipriani_web/`, non nella cartella padre | Usare `dist` (relativo) |
| Token Cloudflare scaduto | OAuth token ha scadenza ~24h | Eseguire `npx wrangler login` se authentication error |

## Account Cloudflare

- Email: peppe.chiapparo@gmail.com
- Account ID: `1f684c7eb8d134dae1724134a86ff2f2`
- Zone: `scuolakungfucipriani.it` (Zone ID: `9c5301b12c2c754bd00a5b0f2caefd91`)
- Worker name: `scuola-cipriani-web`

## File sorgente HTML

Il file da modificare per meta tag, SEO, social link è:
`client/index.html`

Il `dist/index.html` viene generato da `pnpm build` — non modificarlo direttamente.
