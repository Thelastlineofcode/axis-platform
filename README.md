# AXIS — Sacred Intelligence Platform

> *"The sky doesn't lie. Neither do we."*

AXIS is a sidereal intelligence platform combining Lahiri ayanamsa precision, KP nakshatras, African ancestral cosmology (Dogon, Ifá, Vodou, Khemetic), and live OSINT geopolitical cross-reference.

## Stack

- **Site:** [Astro.js](https://astro.build) — static, SEO-native, MDX
- **Content source (launch):** local Astro content collection
- **CMS (later):** Sanity schemas are present, but not part of the current site build path yet
- **Newsletter:** provider still to be wired; current signup UI is a launch placeholder
- **Deploy:** Vercel
- **Ephemeris:** Levite integration planned; current transit section is a non-live design preview until the bridge is wired

## Content Pillars

1. **MUNDANE MYSTIC** — Weekly. Real sidereal positions × real world events.
2. **THE AXIS** — Bi-weekly. Deep nakshatra + ancestral cosmology dives.
3. **TIMING REPORTS** — Monthly. Paid tier. Full transit + Dasha forecasts.

## Dev

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build
```

## Launch reality
AXIS can go live now as a static publishing surface with local content.

What is live-ready after the current cleanup:
- homepage
- about page
- static blog route from `src/content/blog`
- Vercel deployment path

What is not wired yet:
- Sanity Studio as the active publishing backend
- live Levite transit data
- real newsletter provider submission flow

## Deploy automation

### Main deploy path
- pushes to `main` build through `.github/workflows/deploy.yml`
- Vercel remains the active deploy target for AXIS

### Scheduled deploy hooks
Two scheduled workflows are available for repo-side automation:
- `.github/workflows/annual-rebuild.yml`
- `.github/workflows/weekly-deploy.yml`

Required GitHub secrets:
- `VERCEL_DEPLOY_HOOK_ANNUAL`
- `VERCEL_DEPLOY_HOOK_WEEKLY`
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Use deploy hook URLs from the Vercel project settings when wiring the scheduled jobs.

## Working rules

See `AGENTS.md` for local working rules and `VOICE.md` for content standards.
