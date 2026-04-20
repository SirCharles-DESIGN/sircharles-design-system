# SirCharles.DESIGN — Brand Foundations

The visual atoms of SirCharles.DESIGN. Every value below is sourced directly from the live theme at sircharles.design — these are not aspirations, they are the brand as it actually exists today.

## The aesthetic in one sentence

**Cyberpunk-luxe.** A deeply restrained palette (one color does almost all the work), tight type discipline (one typeface, four weights), generous white space (50px page padding, 30px corner radii, full-pill buttons), and a single neon-cyan accent that signals competence and futurism without ever feeling cheap.

The visual language matches the work — sci-fi-inspired interfaces for satellites and crypto, Fortune 500 transformations, "supercar standard" craft.

---

## Color

The palette is intentionally narrow. There is **one chromatic color** in the entire system. Resist any urge to add a second hue. If you need differentiation, use opacity, weight, or scale — never a new color.

### Core palette

| Token | Value | Role |
|---|---|---|
| `--sc-black` | `#000000` | Page background. The deepest layer. Never lighter. |
| `--sc-near-black` | `#0a0a0a` | Cards, modals, raised surfaces. Distinguishes "container" from "page." |
| `--sc-soft-black` | `#121212` | Text on white/cyan inverted surfaces. |
| `--sc-border-dark` | `#141919` | Structural borders that should read as "almost invisible." |
| `--sc-cyan` | `#00fff4` | **The brand color.** Body text, headlines, links, marks, primary CTAs. |
| `--sc-white` | `#ffffff` | Accent surface — used sparingly for the highest-priority object on a screen. |

### Cyan tints (for surfaces and borders)

Cyan at full opacity is for *content*. For backgrounds and borders, always use a tinted variant — this is what gives the brand its layered, atmospheric feel rather than a flat neon look.

| Token | Value | Use |
|---|---|---|
| `--sc-cyan-04` | `rgba(0,255,244,0.04)` | Faintest section wash |
| `--sc-cyan-08` | `rgba(0,255,244,0.08)` | Hover surfaces, secondary backgrounds |
| `--sc-cyan-10` | `rgba(0,255,244,0.10)` | Popups, highlight tints |
| `--sc-cyan-15` | `rgba(0,255,244,0.15)` | Default border (cards, dividers) |
| `--sc-cyan-30` | `rgba(0,255,244,0.30)` | Form input border (rest state) |
| `--sc-cyan-60` | `rgba(0,255,244,0.60)` | Form input border (focus state) |

### Inversion: light-on-cyan scheme

For product cards on hover, popups, and any surface where cyan becomes the background, the foreground inverts to black. This is the only place black-on-cyan is permitted, and it is always temporary or contained — never the default.

```
.sc-on-cyan { background: #00fff4; color: #000000; }
```

### What NOT to do

- Don't introduce a second saturated color (no oranges, purples, magentas). The palette is monochrome + cyan. That's the brand.
- Don't use cyan as a flat fill for large body areas — it overwhelms. Use a tint instead.
- Don't soften the black. Pages start at `#000000`. Cards and modals lift to `#0a0a0a`. Anything in between (e.g. `#222`, `#333`) is wrong and breaks the layering logic.
- Don't add gradients between unrelated colors. The only sanctioned gradient is cyan-tint → transparent (for atmospheric glow).

---

## Typography

A single typeface — **Mulish** (the modern release of the original Muli family) — does the entire job. Four weights, used decisively.

Self-hosted on the live theme; this repo loads from Google Fonts as a no-cost public mirror. Either source resolves to identical letterforms.

### Stack

```
font-family: "Mulish", "Muli", system-ui, -apple-system, "Segoe UI", sans-serif;
```

### Weights

| Token | Weight | Use |
|---|---|---|
| `--fw-regular` | 400 | Body copy, default UI text |
| `--fw-semibold` | 600 | Body emphasis, secondary buttons |
| `--fw-bold` | 700 | Headings (H2–H6), primary buttons, eyebrows |
| `--fw-black` | 900 | H1, display, hero numerals |

### Scale

A pragmatic 9-step scale. Most product UI sits between `fs-14` and `fs-22`; everything above is editorial.

| Token | Value | Px | Use |
|---|---|---|---|
| `--fs-12` | 0.75rem | 12 | Captions, fine print |
| `--fs-14` | 0.875rem | 14 | UI labels, eyebrows, button text |
| `--fs-16` | 1rem | 16 | Body |
| `--fs-18` | 1.125rem | 18 | Lead paragraphs |
| `--fs-22` | 1.375rem | 22 | Card titles, H5 |
| `--fs-28` | 1.75rem | 28 | H4 |
| `--fs-40` | 2.5rem | 40 | H3, section openers |
| `--fs-64` | 4rem | 64 | H2 |
| `--fs-96` | 6rem | 96 | H1 / hero display |

### Rhythm

- **Headings:** line-height `1.1`, letter-spacing `-0.01em`. Tight, confident, edge-to-edge.
- **Body:** line-height `1.3`, letter-spacing `0`. Compact but readable.
- **Long-form prose:** override to `1.55` line-height for sustained reading (case study text, blog posts).
- **Buttons & eyebrows:** uppercase, letter-spacing `0.04em`. The all-caps treatment + extra tracking is the brand's signature for actionable text.

### Practical rules

- Never use a second typeface. Mulish + weight changes is the entire system.
- H1s deserve weight 900. Everything else tops out at 700.
- Avoid italics. The brand voice is direct; italic accents read as soft-spoken.

---

## Spacing & layout

Generous, not cramped. The site uses 50px page padding on desktop and 30px corner radii on cards. Density should feel like a high-end portfolio, not a dashboard.

### Spacing scale (4px base)

`0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`

Most component gaps land in the `8–24` range. Section vertical rhythm is `80` (`--sp-20`).

### Page padding

| Context | Token | Value |
|---|---|---|
| Desktop horizontal | `--page-pad-x` | 50px (`3.125rem`) |
| Desktop vertical | `--page-pad-y` | 50px |
| Grid gap | `--grid-gap` | 50px |
| Mobile horizontal | (override) | 24px |
| Mobile vertical | (override) | 32px |

### Radii

| Token | Value | Use |
|---|---|---|
| `--radius-pill` | 120px | Buttons, chips, tags — fully rounded ends |
| `--radius-grid` | 30px | Cards, sections, large surfaces |
| `--radius-grid-mobile` | 20px | Cards on mobile |
| `--radius-input` | 12px | Form inputs — slightly tighter than cards |

### Border widths

| Token | Value | Use |
|---|---|---|
| `--bw-hairline` | 1px | Default borders, dividers, button strokes |
| `--bw-section` | 20px | Large structural frames (rare — used only for sectional dividers per theme) |
| `--bw-container` | 20px | Container outer frames |

---

## Elevation (the cyan glow)

Traditional shadows do not work on a pure black background. The brand uses a **cyan glow** for elevation — concentric rings of translucent cyan that suggest the surface is emitting light.

| Token | Use |
|---|---|
| `--shadow-glow-sm` | Default card hover, focus rings |
| `--shadow-glow-md` | Primary CTA hover, active surfaces |
| `--shadow-glow-lg` | Hero elements, special-occasion emphasis |

The glow should feel intentional, not ambient. If you find yourself adding a glow to every element, you've removed its meaning.

---

## Motion

Every motion choice should feel deliberate and brisk. Long, indulgent animations work against the "supercar standard" — supercars are quick, not slow.

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | Press states, micro-feedback |
| `--dur-base` | 220ms | Default — hover, color, opacity |
| `--dur-slow` | 440ms | Reveals, page transitions |
| `--ease-standard` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Most UI motion — settles fast |
| `--ease-emphatic` | `cubic-bezier(0.16, 1, 0.3, 1)` | Hero / featured-element entries |

---

## Files in this folder

- [`tokens/colors.css`](../tokens/colors.css) — full token list with semantic aliases
- [`tokens/typography.css`](../tokens/typography.css) — weights, sizes, base elements
- [`tokens/spacing.css`](../tokens/spacing.css) — scale, padding, radii, motion
- [`tailwind.config.js`](../tailwind.config.js) — same tokens mapped to Tailwind utilities
- [`components/`](../components/) — live HTML examples using these tokens
