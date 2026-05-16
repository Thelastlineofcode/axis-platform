# AstroloG — Sacred Intelligence Blog

> *"The sky doesn't lie. Neither do we."*

**AstroloG** is a sidereal intelligence blog combining Lahiri ayanamsa precision, KP nakshatras, African ancestral cosmology (Dogon, Ifá, Vodou, Khemetic), and live OSINT geopolitical cross-reference. Built by Travone Butler — full-stack engineer, AI systems architect, and mystic-technologist rooted in New Orleans/LaPlace ancestral tradition.

The platform formerly known as AXIS is now consolidated here. The blog identity is the primary surface. AXIS remains the internal architecture name only.

## Stack

- **Site:** [Astro.js](https://astro.build) — static, SEO-native, MDX
- **Content source (launch):** local Astro content collection (`src/content/blog`)
- **CMS (next):** Sanity schemas present — not active publishing backend yet
- **Newsletter:** provider still to be wired; current signup UI is a launch placeholder
- **Deploy:** Vercel
- **Ephemeris:** Levite integration planned; current transit section is a non-live design preview until the bridge is wired

## Content Pillars

1. **MUNDANE MYSTIC** — Weekly. Real sidereal positions × real world events. Political astrology, environmental justice, ancestral cosmology mapped to current news.
2. **THE BLOOD REMEMBERS** — Flagship series. LaPlace/Cancer Alley environmental harm, genetic inheritance, Vodou cosmology, and community healing.
3. **THE AXIS** — Bi-weekly. Deep nakshatra + ancestral cosmology dives.
4. **TIMING REPORTS** — Monthly. Paid tier. Full transit + Dasha forecasts.

## Dev

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

## Launch Reality

AstroloG can go live now as a static publishing surface with local content.

What is live-ready:
- homepage
- about page
- static blog route from `src/content/blog`
- Vercel deployment path

What is not wired yet:
- Sanity Studio as the active publishing backend
- live Levite transit data
- real newsletter provider submission flow

## Deploy Automation

### Main deploy path
- pushes to `main` build through `.github/workflows/deploy.yml`
- Vercel remains the active deploy target

### Scheduled deploy hooks
Two scheduled workflows for repo-side automation:
- `.github/workflows/annual-rebuild.yml`
- `.github/workflows/weekly-deploy.yml`

Required GitHub secrets:
- `VERCEL_DEPLOY_HOOK_ANNUAL`
- `VERCEL_DEPLOY_HOOK_WEEKLY`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Use deploy hook URLs from the Vercel project settings when wiring the scheduled jobs.

## Working Rules

See `AGENTS.md` for working rules and agent handoff protocol.
See `VOICE.md` for content and copy standards.
