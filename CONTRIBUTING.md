# Contributing to ALKINDUS OS

**FR** — Merci de contribuer ! ALKINDUS OS est construit par la communauté, pour toutes les professions.  
**EN** — Thanks for contributing! ALKINDUS OS is built by the community, for every profession.

## Ways to contribute

### 1. Add a new profession
Open an issue using the [new profession template](./.github/ISSUE_TEMPLATE/new_profession.yml).  
Include: profession name, ISCO code (if known), 5–10 typical tasks mapped to T1–T10, recommended OSS tools.

### 2. Add or improve an OSS tool entry
PR on `data/oss_tools.json`. Must include: verified GitHub link, license, maintenance activity, self-hosted compatibility.

### 3. Improve a blueprint
PR on `data/professions.json` — improve task mapping, add country variants, refine approval rules.

### 4. Translate
Help translate README/docs beyond FR/EN. Open an issue first to claim a language.

### 5. Code
Fix bugs, add features from the roadmap. Label `good first issue` = beginner-friendly.

## Rules

- One PR = one logical change (one profession, one tool, one fix).
- All JSON must pass `npm run validate-data`.
- All new tools must have a verified license (no "license unknown").
- Human approval (T8) is never removed — it's an architectural constraint.
- Be respectful. See [Code of Conduct](./CODE_OF_CONDUCT.md).

## Quick start (dev)

```bash
git clone https://github.com/redaHamioui/alkindus-os
cd alkindus-os
npm ci
npm run validate-data
npm run dev
```

## First-timer?

Look for issues labeled `good first issue`. Ask questions in issues — no question is stupid.
