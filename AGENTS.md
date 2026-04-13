# AGENTS.md — AXIS Platform

## Orchestration
- **Ann** (COO Layer) — orchestrates, reviews, gates
- **Scooter** — scaffold owner, implementation
- **JuneBug** — content schema population, post drafts

## Agent Rules
1. Read ANN-Mesh #72 (ops board) and #53 (orchestration map) before executing.
2. GitHub Issues is the truth bus. All work links to a directive issue.
3. No agent touches `studio/sanity.config.ts` or `.env` without a directive issue tagged `infrastructure`.
4. Sovereignty: no third-party ephemeris APIs. Transit data comes from Levite `astro-calc-api` only.
5. Report completions on directive issue using standard format:
```
AGENT:  {name}
TASK:   {task}
STATUS: done | blocked | in-progress
OUTPUT: PR # / commit SHA / URL
NEXT:   {handoff}
```

## File Ownership
| Agent | Owns | Do Not Touch |
|---|---|---|
| Scooter | `src/`, `astro.config.mjs`, `package.json`, `studio/schemas/` | `.env`, `vercel.json` secrets |
| JuneBug | `src/content/`, Sanity documents | `studio/schemas/` (propose changes via issue) |
| Ann | Issue board, acceptance criteria | Code files directly |

## Context Files
- `astro.config.mjs` — site config
- `studio/sanity.config.ts` — CMS config
- `src/content/config.ts` — content collections schema
- `AGENTS.md` — this file
