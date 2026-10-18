# ALKINDUS OS

> **FR** — Transformez n'importe quel métier en environnement opérationnel agentique, sécurisé et installable.  
> **EN** — Transform any profession into a secure, installable, AI-native operating environment.

[![Deploy](https://github.com/redaHamioui/alkindus-os/actions/workflows/deploy.yml/badge.svg)](./.github/workflows/deploy.yml)
[![License](https://img.shields.io/badge/license-AGPL--3.0-blue)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](./CONTRIBUTING.md)

## 🌍 What is ALKINDUS OS?

ALKINDUS OS is **not** a Linux distribution, a single vertical product, or a dependency on any AI provider.

It is a **universal system-building methodology** that takes a real-world profession as input and produces a complete, documented, installable operating environment as output — combining open-source tools, specialized AI agents, and human approval boundaries.

**ALKINDUS OS n'est pas** une distribution Linux, un produit vertical, ou une dépendance à un fournisseur d'IA.  
**C'est** une méthodologie universelle : métier en entrée → environnement opérationnel complet en sortie.

## 🔁 The core loop

```text
INPUT: Profession X + country + org size + constraints
  ↓
[ALKINDUS Engine]
  1. Decompose profession into tasks (T1–T10, O*NET/ISCO-aligned)
  2. Map each task → best OSS tool + AI agent + approval level
  3. Select or generate GitHub repos (verified licenses)
  4. Assemble installable blueprint (Docker/ISO/VPS)
  ↓
OUTPUT:
  - Work cartography
  - GitHub repos to use/create
  - Installable blueprint (docker-compose + install.sh)
  - Human-approval matrix
  - Gain estimate (labeled "estimate")
```

## 🚀 Try it now

**Live**: https://redaHamioui.github.io/alkindus-os/

1. Select your profession
2. Answer 3 context questions
3. Download your ALKINDUS OS blueprint (ZIP)

## 🧩 Why it's different

| Dimension | Process Mining | Agentic Platforms | OSS Frameworks | **ALKINDUS OS** |
|---|---|---|---|---|
| Starting point | Event logs | Predefined process | Code bricks | **Profession** |
| Output | Process map | Agents | Workflows | **Complete environment** |
| Task decomposition | No | No | No | **Yes (core)** |
| Open source / installable | Rare | No | Yes | **Yes** |
| Profession → system | Indirect | Manual | Manual | **Automated** |

## 📚 Documentation

- [Master Plan](./docs/MASTER_PLAN.md) — 0 → success story
- [Methodology](./docs/METHODOLOGY.md) — scientific foundation
- [Taxonomy T1–T10](./docs/TAXONOMY.md)
- [Competitive Analysis](./docs/COMPETITIVE_ANALYSIS.md)
- [Engine Spec](./docs/ENGINE_SPEC.md)
- [Approval Matrix](./docs/APPROVAL_MATRIX.md)
- [Licensing](./docs/LICENSING.md)
- [Roadmap](./docs/ROADMAP.md)
- [Modules](./docs/MODULES.md)
- [Web Consultant PRD](./docs/PRD_WEB_CONSULTANT.md)

## 🤝 Contribute — worldwide call

ALKINDUS OS is built **by the community, for every profession**.

- **Add a profession** → open an issue with the [new profession template](./.github/ISSUE_TEMPLATE/new_profession.yml)
- **Add an OSS tool** → PR on `data/oss_tools.json`
- **Improve a blueprint** → PR on `data/professions.json`
- **Translate** → help us go beyond FR/EN

See [CONTRIBUTING.md](./CONTRIBUTING.md) to start. First-timers welcome — label `good first issue` available.

## 📄 License

Methodology + engine core: **AGPL-3.0**.  
Profession modules: see individual module licenses.  
Details: [LICENSING.md](./docs/LICENSING.md)

---

> *"We don't sell code. We sell time gained and chaos eliminated."*  
> *"Nous ne vendons pas du code. Nous vendons du temps gagné et du chaos éliminé."*
