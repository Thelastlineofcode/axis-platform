# AGENTS.md — AXIS Platform

## Purpose
This file defines the local working rules for AXIS contributors and coding agents.
It should be usable on its own without requiring external issue threads just to understand how to work in this repo.

## Working Roles
- **Product / editorial gate** — reviews direction, voice, acceptance
- **Implementation** — site scaffolding, Astro wiring, schema wiring
- **Content operations** — post drafting, metadata entry, CMS population

## Repo Rules
1. GitHub issues and PRs are the working record for decisions and changes.
2. `VOICE.md` is the copy and content source of truth.
3. No one should change `.env` shape, deployment settings, or Sanity config casually; treat those as infrastructure changes and document them clearly.
4. Do not imply live astrology calculations unless the Levite bridge is actually wired.
5. No third-party ephemeris apps or hidden external astrology providers.
6. Prefer repo-local explanation over off-repo orchestration lore.

## Change Reporting Format
```text
TASK:   {task}
STATUS: done | blocked | in-progress
OUTPUT: PR # / commit SHA / URL
NEXT:   {handoff}
```

## File Responsibility
| Area | Primary files |
|---|---|
| Site shell | `src/`, `astro.config.mjs`, `package.json` |
| CMS | `studio/schemas/`, `studio/sanity.config.ts` |
| Content standards | `VOICE.md` |
| Deploy config | `vercel.json` |

## Context Files
- `astro.config.mjs` — site config
- `studio/sanity.config.ts` — CMS config
- `AGENTS.md` — local working rules
- `VOICE.md` — copy and content standard
