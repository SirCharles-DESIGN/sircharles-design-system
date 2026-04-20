# SirCharles.DESIGN — Logo & Assets

The mark, the wordmark, and the imagery rules.

## The mark: a crown

SirCharles uses a **typographic logo** as the primary identity, with a small **crown silhouette** as a secondary mark (currently used as the favicon). The crown is the only symbol associated with the brand — it ties together the "Sir" honorific, the chess metaphors used throughout the About page (Opening / Middlegame / Endgame), and the "supercar standard" framing of the practice.

### Files

- [`assets/crown-mark.png`](../assets/crown-mark.png) — original 32×32 favicon, black silhouette
- [`assets/crown-mark-cyan.svg`](../assets/crown-mark-cyan.svg) — recolored cyan version for use on dark backgrounds
- [`assets/logo-lockup-cyan.svg`](../assets/logo-lockup-cyan.svg) — full lockup: crown + "SirCharles.DESIGN" wordmark
- [`assets/logo-lockup-black.svg`](../assets/logo-lockup-black.svg) — black version for use on white/cyan backgrounds

### Wordmark construction

The wordmark is set in **Mulish Black (900)** with `letter-spacing: -0.01em`, all uppercase. The "DESIGN" suffix flips to Mulish Regular (400) with `letter-spacing: 0.04em` — the contrast in weight is what makes the lockup feel like a single object rather than two words.

```
SIRCHARLES.DESIGN
└── SIRCHARLES → 900 weight, tight tracking
└── .DESIGN     → 400 weight, wide tracking, white (or black on light backgrounds)
```

When the wordmark is used alone (no crown), the period before "DESIGN" stays — it's a load-bearing punctuation mark, not optional.

### Color rules

| Surface | Crown | "SirCharles" | ".DESIGN" |
|---|---|---|---|
| Black / near-black | Cyan `#00fff4` (with optional cyan glow) | Cyan `#00fff4` | White `#ffffff` |
| White / cyan | Black `#000000` | Black `#000000` | Soft black `#121212` |
| Photography | Wordmark only, white, with `--shadow-glow-sm` for legibility | — | — |

**Never use the logo in any other color.** The brand has one chromatic accent and the logo is its loudest expression.

### Clear space and minimum size

- **Clear space** equal to the height of the crown mark on all sides.
- **Minimum size** for the lockup: 80px wide (digital), 24mm wide (print).
- **Crown mark alone:** 16px minimum (favicon use), 24px minimum (in-product use).

### Don't

- Don't put the logo on a busy photograph without a backing scrim or guaranteed contrast.
- Don't recolor the crown to match a client's brand. If you need a co-branded mark, set the SirCharles logo at full color next to a divider, then the partner mark — never blend them.
- Don't add a tagline lock-up. The taglines ("Methodology meets artistry," "Design for Difference") live in body copy, not under the mark.
- Don't outline, drop-shadow, or 3D the crown. The cyan glow is the only sanctioned effect.

---

## Imagery

The site's hero alt text is the clearest description of the brand's preferred imagery direction:

> "Professional hand reaching toward luminous digital wave technology representing SirCharles.DESIGN's innovative strategic design leadership."

Distilled into a rule: **imagery shows the moment of contact between human and system.** Hands reaching toward interfaces. Operators looking at screens. Equipment in use. Never glamour shots of devices alone.

### Direction

| ✅ Use | ❌ Avoid |
|---|---|
| Cinematic, low-light, high-contrast scenes | Bright stock photography |
| Operators in context (cockpit, control room, vehicle, field) | Smiling stock-photo professionals at clean desks |
| Sci-fi-inspired UI mockups against dark gradients | Bright "modern" gradients (purple-to-pink, etc.) |
| Hands, equipment, tools mid-action | Logos floating in space |
| Real product screens from real work | Fake mockups with Lorem Ipsum |

### Treatment

- Apply a subtle cyan tint or vignette to integrate imagery with the brand palette. A `radial-gradient(circle at 30% 20%, var(--sc-cyan-15), transparent 60%)` overlay on dark imagery is the house treatment (see `components/card.html`).
- Pair imagery with one short caption in the brand voice. Never let an image stand alone without context.

---

## Iconography

The brand favors **conceptual** icons over literal ones — a compass for direction, a lighthouse for principles, a crown for excellence, a rocket for outcomes. The local `/ICONS/` working folder (in the parent SirCharles working directory) contains a curated set already aligned with this approach: `compass.png`, `lighthouse.png`, `crown-256.png`, `ribbon-256.png`, `rocket-256.png`, `outcomes.png`, `principles.png`, `transformation.png`, `discovery.png`, `engineering.png`, `refined.png`.

When using these in product, recolor to cyan (`#00fff4`) and pair with a single line of bold uppercase label text.

For pure UI icons (close, menu, chevron, search), use a thin-stroke, geometric set that visually agrees with Mulish — Phosphor (regular weight) or Lucide both fit cleanly.

---

## Client logos

Client logos appear primarily in the credibility wall on the homepage and case study headers. They are always rendered in **white at low opacity** (`opacity: 0.6`) to subordinate them to the SirCharles palette. A working set is in the parent `/CLIENT LOGOS/` folder (NASA, AT&T, Oracle, 7-Eleven, Forbes, Axios, Business Insider, FastCo, College Board, Hypergiant, Kubota, etc.).

**Don't render client logos in their original brand colors.** This is the one place the brand intentionally violates client brand guidelines — to maintain the SirCharles atmosphere — and that's correct: the client wall is about the prestige of the relationship, not the recognizability of any one mark.
