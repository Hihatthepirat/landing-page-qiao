# HONESTY_LEDGER.md — Qiáo landing page

> Per the organizers' rules, we over-disclose. This ledger separates what is **real and wired** on the
> landing page from what is a **visual mock**, what is **pre-existing tooling**, and what is **roadmap**.
> The landing page is a *pitch surface*, not the product. The product app itself is reached via the
> "See Live Demo →" CTA.

_Last updated: final handoff — loop stopped at iteration 3 (code at commit `8356abc`)._

---

## ✅ FULLY FUNCTIONAL on the landing page (real, wired, working)

- Static marketing site renders all 8 sections, fully responsive (375 / 768 / 1440 px). Production build is green.
- **"See Live Demo →" CTA** (in the sticky nav + the Hero + the closing Ask) is a real link to
  `process.env.NEXT_PUBLIC_APP_LOGIN_URL`, opening in the **same tab** so the browser Back button returns
  to the landing page mid-pitch. _The destination URL is currently a placeholder (`https://TODO-REPLACE-…`)
  in `.env.local` — the link is wired; only the target value must be filled in before the pitch._
- In-page anchor navigation ("How it works ↓" → Section 3) works.
- The **citation links are real, working external links** to PubMed
  (e.g. the hero card → `pubmed.ncbi.nlm.nih.gov/11302416`).
- Reduced-motion support is real (CSS `@media` + Framer `MotionConfig reducedMotion="user"`).

## 🖼 VISUAL ONLY (mockups / static assets that look live — NOT connected to the real engine)

- **Section 1 — the danshen ↔ warfarin alert card** is a *static visual mock* styled to look like a real
  Qiáo alert. It is hand-authored markup, not output from the live deterministic engine or the 51-row
  interaction dataset. The depicted interaction is real and sourced (Chan TYK, *Ann Pharmacother.* 2001,
  PMID 11302416); the *card* is a mock. "Mrs. Chen" is fictional; the record is labelled "synthetic record".
- **Section 2 — the WM record / TCM record split-screen** shows illustrative synthetic med/herb chips.
  Not connected to any real patient record.
- **Section 3 — the EXTRACT → CHECK → ALERT diagram** is an explanatory illustration of the product
  architecture, not a live pipeline running on the landing page.
- Any figures describing the product ("51 sourced interactions", evidence tiers, "data stays local")
  describe the **product**, not anything computed on this marketing page.

## 🧩 PRE-EXISTING ASSETS USED (not built during this hackathon)

- **Next.js 14**, **React 18**, **Tailwind CSS v3**, **Framer Motion**, **lucide-react** (icons),
  **PostCSS / Autoprefixer**, **Playwright** (screenshot tooling) — all third-party open-source libraries.
- **System fonts** (San Francisco / Segoe UI / New York / Georgia) — OS-provided, not bundled.
- **`STYLE_GUIDE.md`** was authored from the **existing Qiáo product app's** design tokens
  (`tailwind.config.ts`, `globals.css`, component library) — the visual system pre-existed this page.

## 🛣 ROADMAP / VISION (clearly labelled on the page as future — Section 7, terracotta accent + "not yet built")

- Digital prescription bridge (clinician-side prescribing) — not built.
- Preventative screening planner — not built.
- Anonymized federated population-safety data layer (GBA-scoped) — not built.
- Patient-held medication passport with read-only clinician view — not built.

---

## Clinical & market claim sourcing (all verified against real sources — see LOOP_LOG.md)

| Claim on page | Source | Identifier |
|---|---|---|
| Hero: danshen potentiates warfarin → bleeding risk (MAJOR) | Chan TYK, *Ann Pharmacother.* 2001;35(4):501–504 | **PMID 11302416** |
| Section 2: 16.6% of HK outpatient users used both TCM + Western medicine (2005 THS, n=18,087) | Chung VCH et al., *BMC Health Serv Res.* 2009 | **PMID 19917139** |
| Section 6: CMHHK (香港中醫醫院) opened December 2025 | gov.hk press release | P2025121100320 |
| Section 6: HKSTP **300+** life-and-health-tech companies (60+ clinical-stage) | HKSTP official + SCMP 2026 | — |
| Section 6: GBA ~86M people | bayarea.gov.hk overview | — |
| Roadmap support: dong quai ↔ warfarin (not shown, dataset basis) | Page RL 2nd & Lawrence JD, *Pharmacotherapy.* 1999;19(7):870–876 | **PMID 10417036** |

> ⚠ **Disclosure of a corrected figure:** the original pitch deck cited HKSTP's biomed cluster as
> "160+ companies" (a 2021 figure). Research confirmed the current official figure is **300+** (incl.
> 60+ clinical-stage); the page uses the updated number. The team should confirm they are comfortable
> citing 300+ in the spoken pitch.

## 📝 Content placeholders (clean-looking, but to confirm before the pitch)

- **Demo URL** — `NEXT_PUBLIC_APP_LOGIN_URL` is a `TODO-REPLACE` placeholder.
- **Team roles / one-liners** (Section 8) are functional placeholders — confirm actual roles.
- **Footer contact email** (`hello@qiao.health`) and **repo URL** are placeholders.
