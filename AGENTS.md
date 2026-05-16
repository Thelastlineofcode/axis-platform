# AGENTS.md — AstroloG Blog

## Purpose

This file defines the local working rules for AstroloG contributors and coding agents.
It should be usable on its own without requiring external issue threads just to understand how to work in this repo.

The blog was formerly scaffolded as `axis-platform`. The internal architecture remains AXIS. The editorial and product identity is now **AstroloG**.

## Working Roles

- **Product / editorial gate** — Travone Butler. Reviews direction, voice, acceptance criteria.
- **Implementation** — Site scaffolding, Astro wiring, Sanity schema wiring.
- **Content operations** — Post drafting, metadata entry, CMS population.
- **AI agents (Ann / Copilot)** — Operate under issue-first discipline. No changes to infra or deploy config without a linked issue.

## Repo Rules

1. GitHub issues and PRs are the working record for all decisions and changes.
2. `VOICE.md` is the copy and content source of truth — no blog post, UI label, or CTA merges without passing the voice gate.
3. No one changes `.env` shape, deployment settings, or Sanity config without documenting it as an infrastructure change in an issue.
4. Do not imply live astrology calculations unless the Levite bridge is actually wired.
5. No third-party ephemeris apps or hidden external astrology providers.
6. Blog-first identity: all issues, PRs, and documentation should reference AstroloG, not AXIS, at the product layer.
7. AXIS remains valid as the internal architecture/system name only.

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
| Agent/contributor rules | `AGENTS.md` |

## Active Content Series

| Series | Cadence | Status |
|---|---|---|
| THE BLOOD REMEMBERS | Ongoing | Active — LaPlace/Cancer Alley thesis |
| MUNDANE MYSTIC | Weekly | Active — sidereal × current events |
| THE AXIS | Bi-weekly | Planned |
| TIMING REPORTS | Monthly | Planned (paid tier) |

## Context Files

- `astro.config.mjs` — site config
- `studio/sanity.config.ts` — CMS config
- `AGENTS.md` — local working rules (this file)
- `VOICE.md` — copy and content standard
