# LOOP_LOG.md — Qiáo landing page autonomous build

Append-only log of the screenshot → critique → improve loop, plus all assumptions made
during the build (per the "assume, log, proceed" protocol).

---

## ⚠ Open assumptions / blockers (read first)

- **`NEXT_PUBLIC_APP_LOGIN_URL` is a placeholder** (`https://TODO-REPLACE-WITH-APP-LOGIN-URL.example.com`)
  in `.env.local`. The "See Live Demo →" CTA points here. **A human must swap in the real app login URL
  before the pitch.** The CTA is fully wired; only the destination value is a placeholder.
- Clinical citations + the Section-2 statistic are being grounded against real web sources via a
  background research pass; until confirmed, any unsourced figure is rendered as a clearly-labelled
  placeholder and listed here. See "Fact grounding" entries below.

---

## Build assumptions

- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind v3 + Framer Motion + lucide-react.
  Manually scaffolded (no `create-next-app`) for full control over the token system.
- **Fonts:** system serif/sans stacks per STYLE_GUIDE.md §3 — no web fonts (matches the product app,
  zero network cost, faster paint).
- **Reduced motion:** handled two ways — global CSS `@media (prefers-reduced-motion)` for CSS keyframes,
  and `<MotionConfig reducedMotion="user">` for Framer Motion.
- **Screenshots** are gitignored as build artifacts (kept the repo clean; 20% of grade is repo quality).

---

## Fact grounding (background research pass — all verified against real web sources)

All 6 facts grounded high-confidence before building content. No fabricated identifiers.

| Claim on page | Grounded value | Source |
|---|---|---|
| Hero alert: danshen ↔ warfarin = MAJOR bleeding risk | Danshen potentiates warfarin's anticoagulant effect → elevated INR, bleeding | Chan TYK. *Ann Pharmacother.* 2001;35(4):501–504. **PMID 11302416** (DOI 10.1345/aph.19029) |
| Section 2 stat | **16.6%** of HK outpatient users were "double consulters" using both TCM + Western medicine (2005 Thematic Household Survey, n=18,087; skewed older / chronic-disease) | Chung VCH et al. *BMC Health Serv Res.* 2009. **PMID 19917139** (DOI 10.1186/1472-6963-9-207) |
| Section 6: CMHHK | "The Chinese Medicine Hospital of Hong Kong" (香港中醫醫院) commenced operations **11 Dec 2025** — confirms "December 2025" | gov.hk press release P2025121100320 |
| Section 6: HKSTP cluster | **"160+" is STALE** (a 2021 Nature figure). Current official figure: **300+ biotech / life-and-health-tech companies, incl. 60+ clinical-stage** → page UPDATED to 300+ | HKSTP official Life & Health Technology page + SCMP 2026-03-30 |
| Section 6: GBA population | ~86M accurate for 2019–2023 (latest official "over 88M"). Using "86M+" to stay safe | bayarea.gov.hk overview |
| Herb names (traditional 繁體) | danshen **丹參** / *Salvia miltiorrhiza*; dong quai **當歸** / *Angelica sinensis*; ginseng **人參** / *Panax ginseng* | en.wikipedia (binomials) |
| Roadmap support: dong quai ↔ warfarin | Potentiation of warfarin (>2× INR) | Page RL 2nd, Lawrence JD. *Pharmacotherapy.* 1999;19(7):870–876. **PMID 10417036** |

**Decision:** Section 6 HKSTP figure changed from the pitch's "160+" to the verified **"300+ (incl. 60+ clinical-stage)"** — more accurate AND more impressive. Logged for the team to confirm they're comfortable updating their spoken number.

**Content placeholders (clean, but to confirm before pitch):**
- Team roles/one-liners (Section 8) are functional placeholders — confirm actual roles.
- Footer contact email (`hello@qiao.health`) and repo URL are placeholders.

---

## Iterations

### Iteration 1 — critique of v1 (3 independent reviewer agents)

**Scores** (style / credibility / hierarchy / CTA / honesty / polish / mobile-read):
| Viewport | Sty | Cred | Hier | CTA | Hon | Pol | Mob | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1440 desktop | **3** | 5 | 4 | 5 | 5 | **3** | 4 | FAIL |
| 768 tablet | **3** | 5 | 5 | 5 | 5 | 4 | 4 | FAIL |
| 375 mobile | 5 | 5 | 4 | 5 | 5 | 4 | 4 | PASS |

**Top issues**
- **[HIGH · style]** Frosted-glass under-delivered — cards read as flat opaque panels over the smooth gradient; the signature Liquid-Glass blur isn't perceptible (desktop + tablet).
- **[MED · honesty/polish]** AlertCard citation uses `truncate` → PMID risks clipping on mobile, undercutting the "every flag is sourced" promise.
- **[MED · hierarchy]** Hero value-prop subtitle in ink-500 too muted / low contrast.
- **[MED · polish]** "Why HK" bilingual herb-chip row wraps with an orphan ginseng chip on tablet.
- **[LOW · polish]** Hero headline emphasis reuses the alert badge's major-orange → competes / reads link-like.
- **[LOW · polish]** Roadmap "not yet built" pill cramped against the section divider.
- _False positive:_ desktop reviewer flagged the MAJOR badge as outlined; detail crop + mobile reviewer confirm it is solid-fill white text per spec. No change.

**Fix plan (this commit)**
1. Add a fixed atmospheric blurred-orb layer (brand/teal hues) behind content so frosted cards have texture to blur → glass reads as glass.
2. AlertCard citation: drop `truncate`, shorten to "Chan TYK, Ann Pharmacother 2001 · PMID 11302416", allow wrap.
3. Hero subtitle → ink-600 medium for contrast.
4. Hero headline emphasis → deeper severity-contraindicated red, distinct from the badge.
5. HKFit herb chips → label on its own line; chips wrap evenly (no orphan).
6. Roadmap → more top breathing room for the disclaimer pill.

### Iteration 2 — critique after the glass-orb pass

**Scores**
| Viewport | Sty | Cred | Hier | CTA | Hon | Pol | Mob | Verdict |
|---|---|---|---|---|---|---|---|---|
| 1440 desktop | 4 | 5 | 5 | 5 | 5 | 4 | 5 | **PASS** |
| 768 tablet | 4 | 5 | 5 | 5 | 5 | 4 | 5 | **PASS** |
| 375 mobile | 5 | 5 | 4 | 5 | 5 | 4 | 5 | **PASS** |

✅ **Stop condition MET** — all 7 axes ≥4 at all viewports. Reviewers confirmed: exact mocha #a3673a CTAs (zero blue/teal pixels), correct #c0561f severity badge, brand-900 dot bullets, serif ink-900 headings, correct wordmark dot, honest/sourced copy, clearly-labelled roadmap, triple-placed demo CTA. Doing one optional polish pass before finalizing.

**Remaining issues**
- **[MED ×3 viewports]** Glass depth still under-delivered — body cards read a little flat; the warm shadow is barely perceptible vs the hero glass-strong card.
- **[MED tablet]** Content-fill imbalance across evidence/business grids (cards are already equal-height; the lighter ones look empty at the bottom).
- **[MED mobile]** Hero alert card (the warfarin↔danshen proof point) sits below the 812px fold.
- **[LOW]** Kshitij avatar reads near-black/cold next to the warm mocha + terracotta pair.
- **[LOW]** How-it-works number badge + supporting icon read as two separate marks.
- **[LOW mobile]** Loose vertical rhythm — large empty cream bands between sections.

**Fix plan (iter-3)**
1. Strengthen `.glass` shadow (two-layer warm + brighter inset top highlight); add a 5th background orb and raise opacities so every section has colour behind its cards.
2. Kshitij avatar → warm brand-700 (#6f4327).
3. How-it-works: number badge left, supporting icon as a muted right-corner accent.
4. Tighten mobile hero spacing + slightly smaller headline so the alert card peeks above the fold.
5. Reduce mobile section padding for a tighter vertical rhythm.

<!-- iteration entries appended below -->
