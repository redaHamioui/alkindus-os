# METHODOLOGY

ALKINDUS OS maps a profession into a small set of task primitives (T1–T10). The generator uses deterministic rules to match tasks to OSS tooling and to decide human-in-the-loop boundaries.

Principles
- Profession-first: start from the job, not from tools or tech.
- Deterministic generation: reproducible outputs for the same input.
- Minimal client-side runtime: the generator runs in the browser; no backend required.
- License-aware: recommend only repos with declared SPDX-like licenses.
- Human-in-the-loop by default: tasks that are sensitive or risky are flagged as human_required.

Process (v1)
1. Input: profession_id + country + org size + volume.
2. Lookup: fetch profession module from data/professions.json.
3. Decompose: map typical tasks to T1–T10 primitives (tasks_taxonomy.json).
4. Match: find recommended OSS tools & repos (oss_tools.json, github_repos.json).
5. Assemble: render BLUEPRINT.md, docker-compose.yml, install.sh, approval_matrix.yaml.
6. Package: JSZip produces a downloadable ZIP.

Validation
- All static JSON files are validated with Zod via scripts/validate-data.ts before CI accepts a commit.

# COMPETITIVE_ANALYSIS

High-level comparison

- Process Mining: strong at event/log analysis, weak at delivering installable stacks.
- Agentic Platforms: orchestration and agent behavior, often provider-dependent and not easily self-hosted.
- OSS Frameworks: building blocks (workflow engines, OCR, etc.) but no profession-centric composition.

ALKINDUS OS differentiation
- Profession → installable environment (not just a process map).
- License-first recommendations, with an approval matrix included.
- Client-side deterministic generator: exportable, auditable, runnable without cloud dependencies.

# ENGINE_SPEC

Overview
- Frontend: Next.js 14 App Router, static export (output: "export") served on GitHub Pages.
- Knowledge base: versioned JSON files in /data (professions.json, tasks_taxonomy.json, oss_tools.json, github_repos.json).
- Generator: pure TypeScript function (lib/generator.ts) producing a blueprint object.
- Packaging: JSZip in browser to produce a downloadable ZIP containing safe-to-inspect artifacts (BLUEPRINT.md, docker-compose.yml, install.sh, approval_matrix.yaml).
- Validation: Zod schemas in scripts/validate-data.ts for CI-time validation.

Input schema
- profession_id: string
- country: string (ISO-like short code)
- size: one of [solo, 2-10, 11-50, 50+]
- volume: one of [low, medium, high]

Output artifacts
- BLUEPRINT.md — human-readable overview + recommended repos + next steps
- docker-compose.yml — suggested services (self-hosted tools)
- install.sh — orchestration helper script (docker compose up)
- approval_matrix.yaml — YAML listing tasks requiring human approvals
- README.md — package brief

# APPROVAL_MATRIX

Purpose
- Capture required human approvals for sensitive tasks (legal, financial, security).

Format (v1)
- YAML list of entries:
  - task_id: <id>
    title_en: "<English title>"
    title_fr: "<French title>"
    approvers:
      - role: manager
        required: true

Policy
- Any task with `human_required: true` in a profession's typical_tasks must appear here.
- Default approver role: `manager`. Projects can edit after generation.

# LICENSING

Project licensing policy (v1)
- Engine & methodology: AGPL-3.0-or-later (to ensure share-alike for networked use of the methodology).
- Curated OSS recommendations: report the declared license and the repo full_name; the user must review compatibility before deployment.
- Profession modules: may reference external repos with their own licenses; the aggregator does not relicense external content.

Practical notes
- We do not automatically include code from recommended repos into generated packages — we only link and recommend.
- If a user packages/embeds third-party code, they must comply with that repo's license.

# ROADMAP

v1.0 (launch)
- Documentation + community templates
- 3 curated professions (Accountant, Lawyer, HR Manager)
- Client-side generator + ZIP output
- GitHub Pages static site + CI validation

v1.x
- Community-contributed profession modules
- UX improvements and lightweight search

v2.0
- Module marketplace, curated case studies, optional managed deployment offering

# MODULES

Definition
- A module is the JSON representation of a profession:
  - profession_id, name_en, name_fr, isco_code
  - country_variants
  - typical_tasks[] (id, task_en, task_fr, primitive, automatable, human_required)
  - recommended_repos[]

Storage (v1)
- All modules bundled into data/professions.json for simplicity and versioning.
- Future: split modules into data/modules/<profession_id>.json for easier PRs and modularity.

# PRD — Web Consultant (v1)

Goal
- Provide a free, static web tool that generates an installable ALKINDUS OS blueprint from a profession and 3 context questions.

MVP scope
- 3 professions (accountant, lawyer, hr_manager)
- Profession selector + 3 questions (country, org size, volume)
- Client-side generator producing a ZIP with:
  - BLUEPRINT.md
  - docker-compose.yml
  - install.sh
  - approval_matrix.yaml
  - README.md
- One Playwright E2E (happy-path) and three Vitest unit tests
- Hosted on GitHub Pages at /alkindus-os with Next.js basePath & assetPrefix configured

Constraints
- No authentication, no backend, no external paid APIs required for generation.
- All logic client-side; validation using Zod.
