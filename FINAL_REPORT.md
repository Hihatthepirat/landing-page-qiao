# FINAL_REPORT.md — Qiáo landing page

**Status:** Loop stopped at **iteration 3** by request (handoff to Kshitij).
**Code state:** HEAD = commit `8356abc` ("iter-2: deepen glass…"). The **iter-3 screenshots were captured and critiqued, but the iter-3 critique fixes are NOT yet incorporated** — they are written up below as the handoff backlog.
**Build:** green (`npm run build` passes, types valid, lint clean). Page ≈ 39 kB / 126 kB First Load JS.

---

## Final scores (iter-3, 3 independent adversarial reviewers)

Axes: Style fidelity / Clinical credibility / Hierarchy / Demo-CTA / Honesty / Polish / Mobile-readability (1–5).

| Viewport | Sty | Cred | Hier | CTA | Hon | Pol | Mob | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1440 desktop | **5** | 5 | 4 | 5 | 5 | 4 | 5 | PASS |
| 768 tablet | **3** | 5 | 5 | 5 | 5 | 4 | 4 | FAIL (style) |
| 375 mobile | **5** | 5 | 4 | 5 | 5 | 4 | 4 | PASS |

**Stop-condition history:** all 7 axes were ≥4 at all viewports at **iter-2** (the formal stop condition was met). At iter-3, deeper pixel-sampling on the **tablet** surfaced a real, pre-existing style issue (page-wide warm gradient — see #1 below) that drops tablet style to 3. Desktop & mobile remain clean (style 5).

Consistent reviewer praise across iterations: exact mocha `#a3673a` CTAs (zero blue/teal pixels anywhere), correct solid `#c0561f` MAJOR severity badge, `brand-900` dot bullets, serif `ink-900` headings, correct `Qiáo · 橋` wordmark dot, warm brown-tinted (never grey) shadows, honest/sourced copy, and a clearly-labelled `Roadmap · not yet built` seam.

---

## What's built

A production-grade **Next.js 14 (App Router) + TypeScript + Tailwind v3 + Framer Motion + lucide-react** landing page implementing all **8 sections** of the brief:

1. **Hero** — narrative hook (Mrs. Chen) + a frosted danshen↔warfarin **MAJOR** alert mock with a real PubMed citation link.
2. **Problem** — split WM / TCM records with a "not connected" indicator + the **16.6%** sourced stat.
3. **How it works** — EXTRACT → CHECK → ALERT (model extracts, deterministic data decides) + 3 trust pills.
4. **Evidence** — 2×2: 51 sourced interactions, adversarial citation audit, independent review (Dr. Zhou), honest evidence tiers.
5. **Who pays** — B2B today / patient-held today / population-safety (roadmap).
6. **Why Hong Kong** — CMHHK, HKSTP cluster, GBA + bilingual herb names (繁體中文).
7. **Roadmap** — terracotta "Act 2" band, 4 future items, prominent "not yet built" label.
8. **Team + Ask** — 3 team cards, ask, footer.

**Wired & working:** sticky nav + Hero **"See Live Demo →"** CTA → `NEXT_PUBLIC_APP_LOGIN_URL` (same-tab so Back returns mid-pitch); in-page anchor nav; reduced-motion support (CSS + Framer); the hero/evidence PubMed citation links are real, working external links.

**Design system:** full token set (`brand`/`teal`/`ink`/`severity`), `.glass`/`.glass-strong`/`.glass-input`, warm cream gradient, fixed decorative orbs, brown-tinted shadows, serif/sans stacks — all per `STYLE_GUIDE.md`.

**Repo quality:** clean structure, `.env` gitignored, screenshots gitignored, no dead code / console logs / placeholders-as-TODO in shipped UI, README + STYLE_GUIDE + LOOP_LOG + HONESTY_LEDGER.

---

## What's mocked vs. real

See **`HONESTY_LEDGER.md`** for the precise breakdown. In short: this is a **pitch surface, not the product** — the alert card, the WM/TCM record cards, and the 3-step diagram are **static visual mocks** (the depicted interactions are real and sourced). Every clinical/market claim is grounded against a verified source (PMIDs/gov.hk/official) — see the "Fact grounding" table in `LOOP_LOG.md`.

---

## Known outstanding issues (iter-3 critique — NOT yet fixed)

1. **[HIGH · tablet style — the failing axis] Warm cream gradient isn't page-wide.** The body uses `background-attachment: fixed`, so the cream wash + radial washes pin to the viewport and read pale below the hero (and don't tile in full-page screenshots). The page reads cooler/whiter mid-page, flattening the glass cards at 768.
2. **[MED · mobile] Hero verdict line below the fold.** At 375×812 the alert card is cut at "…increased bleeding risk" — the red verdict sentence (the payoff) sits just under the fold.
3. **[LOW · desktop+mobile] How-it-works step icons too low-contrast** (currently `brand-300`) — they nearly vanish into the card.
4. **[LOW · desktop] HK card heading** "A bridge to the Greater Bay Area" wraps to 2 lines while its siblings stay on 1 → baseline misalignment in the 3-up row.
5. **[LOW] Body-card shadow depth** still reads faint to some reviewers (passing, but could lift more).

---

## Recommended next 30 minutes (prioritized)

1. **(~10 min) Make the warm gradient page-wide** — fixes the tablet style-3.
   - In `app/globals.css`, remove `background-attachment: fixed` from `body` and add `position: relative`.
   - Change `components/ui/BackgroundOrbs.tsx` container from `fixed inset-0` to `absolute inset-0`, and tune orb `top-[…]` values so they distribute down the *full page* (so mid/lower sections stay warm in both the live site and screenshots). Re-screenshot and confirm mid-page samples land near `#faf6ef`, not white.
2. **(~2 min) Set the real demo URL** — replace `NEXT_PUBLIC_APP_LOGIN_URL` in `.env.local` (currently `https://TODO-REPLACE-…`). The CTA is fully wired; only the destination is a placeholder.
3. **(~5 min) How-it-works icons** — wrap the step glyph in a `bg-brand-100 text-brand-700` rounded chip (match the other card icons) so each step is instantly parseable.
4. **(~5 min) Mobile hero fold** — trim the AlertCard's internal vertical spacing (`mt-3`→`mt-2`, the WM/TCM pair block padding) so the red "increased bleeding risk" verdict clears 812px.
5. **(~3 min) HK heading** — shorten to "Bridge to the Greater Bay Area" (or set a heading `min-h`) to align the 3-up baselines.
6. **(~5 min) Content confirm** — verify the **team roles / one-liners** (`components/sections/Team.tsx`), footer **contact email** and **repo URL** placeholders, and that the team is comfortable citing **HKSTP "300+"** (the verified current figure; the original deck said "160+", which is stale — see LOOP_LOG).

---

## How to run

```bash
npm install
cp .env.example .env.local            # then set NEXT_PUBLIC_APP_LOGIN_URL
npm run dev                           # http://localhost:3000
npm run build                         # production build (green)
npm run screenshot -- 4               # re-run the critique-loop capture (375/768/1440)
```

The screenshot harness sets `NEXT_PUBLIC_STATIC_REVEAL=1` so scroll-reveals render statically for deterministic full-page capture; real users get the scroll-reveal/animated experience.
