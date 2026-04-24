# Pasting this into Claude Design

This doc tells you exactly what to put in each field of Claude Design's "Set up your design system" form. Open https://claude.ai/design and follow along.

> **Field reference (as of April 2026):**
> Company name · Company blurb · Link code on GitHub · Upload a .fig file · Add fonts, logos and assets · Any other notes

---

## 1. Company name

```
SirCharles.DESIGN
```

That's it — no tagline, no subtitle. The period before "DESIGN" is part of the name.

---

## 2. Company blurb

Three options below. They are listed shortest → longest. Pick whichever fits the box. **Recommended: Option B** — it matches the live SEO meta description and gives Claude Design the most concrete context (numbers, named clients, work types) without losing the brand voice.

### Option A — short and poetic (matches the on-site hero)

```
SirCharles.DESIGN is the practice of Charles Hurst, an award-winning Product Design Director. Methodology meets artistry — design that looks good and works well.
```

### Option B — recommended, balanced (matches live SEO)

```
SirCharles.DESIGN is the practice of Charles Hurst, an award-winning Product Design Director. 20 years of UX, product, and brand work that actually moves business forward — across aerospace (HIVE for Hypergiant, 2024 Netty Award), retail logistics (Skipcart, acquired by 7-Eleven for $65M), and Fortune 500 transformation (Oracle, AT&T, H-E-B, Kubota). The aesthetic is cyberpunk-luxe: pure black, electric cyan, Mulish, generous space, full-pill buttons.
```

### Option C — long-form (use only if Claude Design accepts a paragraph)

```
SirCharles.DESIGN is the Product Design Director practice of Charles Hurst — 20 years of work where great design provably moved business forward. Notable: HIVE for Hypergiant Galactic Systems (2024 Netty Award for Best UI Integration; one operator now controls 75–100 satellites instead of 3–5), Skipcart (driver-focused logistics platform acquired by 7-Eleven for $65M, built as a direct competitor to DoorDash and Gopuff), and Cub3d (blockchain memorabilia authentication for Integral Reality Labs).

The voice is confident without boast: claims sit beside evidence, metaphors are exact and earned (chess phases, supercar standard, satellite operations), and outcomes lead. The aesthetic is restrained and atmospheric: pure black canvas, a single electric cyan accent (#00fff4), Mulish for everything, 50px page padding, 30px corner radii, full-pill buttons, cyan glow as elevation.
```

---

## 3. Link code on GitHub

Once you've followed [`GITHUB-SETUP.md`](./GITHUB-SETUP.md), paste your repo URL here. It will look like:

```
https://github.com/SirCharles-DESIGN/sircharles-design-system
```

Claude Design will read the entire repo. The structure is intentionally legible: `brand/` for human guidelines, `tokens/` for machine-readable values, `components/` for live HTML examples.

---

## 4. Upload a .fig file

We don't have a Figma file in this package (the source of truth is the live site, not a Figma library). **You can skip this field** — Claude Design treats it as optional.

If you want to add one later, the cleanest move is to:
1. Open a fresh Figma file
2. Paste the color tokens from `tokens/colors.css` as styles
3. Add a Mulish text style for each scale value in `tokens/typography.css`
4. Drop the SVG logos from `assets/` onto a frame
5. Save as "SirCharles.DESIGN — Library.fig" and upload

That's a 30-minute job; Claude Design will already have the same information from the GitHub repo, so it's not blocking anything.

---

## 5. Add fonts, logos and assets

Upload these files from this repo's `assets/` folder:

| File | Why |
|---|---|
| `assets/logo-lockup-cyan.svg` | Primary logo, dark surfaces |
| `assets/logo-lockup-black.svg` | Primary logo, light surfaces |
| `assets/crown-mark-cyan.svg` | Mark only, dark surfaces |
| `assets/crown-mark-black.svg` | Mark only, light surfaces |
| `assets/crown-mark.png` | Original 32×32 favicon |

For fonts: SirCharles uses **Mulish** (Google Fonts mirror of the original Muli family). You don't need to upload font files — Claude Design supports Google Fonts natively. If the form has a font field, type:

```
Mulish
```

…and select the weights `400, 600, 700, 900`.

---

## 6. Any other notes

Paste this verbatim:

```
Aesthetic in one sentence: cyberpunk-luxe — pure black canvas, one electric cyan accent (#00fff4), Mulish typeface, generous spacing.

Strict rules to enforce:
- Single chromatic color. Cyan is the only accent. No second hue. Never introduce orange, magenta, purple, etc.
- Single typeface. Mulish at weights 400 / 600 / 700 / 900. Never a second face.
- Pure black backgrounds (#000000), surfaces lift to #0a0a0a. No grays in between.
- Buttons are full pill (120px radius), uppercase text, hairline 1px border.
- Cards are 30px radius (20px on mobile), with cyan-tinted hairline borders.
- Page padding is 50px on desktop, 24px on mobile.
- Elevation is a cyan glow, not a drop shadow — shadows do not work on pure black.

Voice:
- Confident without boast. Pair every claim with a number or a named client.
- Direct verbs (rescued, rebuilt, tackled, transformed) over passive constructions.
- First-person singular when speaking as Charles. First-person plural when speaking as the practice.
- Two-beat headlines: a poetic line followed by a concrete one. Example: "Methodology meets artistry. Award-winning design."
- Earned metaphors only — chess phases, supercar standard, satellite ops. No decorative metaphors.

Don't:
- Don't soften the palette by adding grays (#222, #333, etc.) between black and cyan.
- Don't use the cyan as a flat fill for large body areas — use a tint.
- Don't write hedging corporate-speak ("leveraging," "best-in-class," "robust solutions").
- Don't add taglines under the logo lockup. Taglines live in body copy.

Source of truth: https://sircharles.design — extracted 2026-04-20. If anything in this package conflicts with the live site, the live site wins.
```

---

## 7. Signature button hover (don't strip this on import)

The button component in `components/button.html` carries the single most recognizable interaction on the live site. If you or any agent is tempted to "simplify" it into a generic hover state, read this first.

**Ghost / outline variant:**
A `::before` pseudo-element starts at `width: 0` behind the label and animates to `width: 100%` on hover. As the cyan plate slides across, the label color flips from cyan to near-black. Border-color locks to cyan throughout.

**Primary (solid) variant:**
No sliding plate (the pill is already filled). Instead, on hover the label shifts to `font-style: italic` and a soft white diffuse glow (`rgba(255, 255, 255, 0.4) 0 0 60px 5px`) pulses out behind the whole pill. The italic shift is subtle and reads as a micro-flourish.

**Why the pattern is structured the way it is:**

- `.sc-btn` sets `position: relative; overflow: hidden; isolation: isolate` so the sliding `::before` can be clipped to the pill's rounded bounds.
- The button's text content must live inside a child element (a `<span>` is used in the demo). That child sits at `z-index: 1` so the `::before` (at `z-index: -1`) slides underneath without covering the label.
- All hover rules are inside `@media (hover: hover) and (pointer: fine)` so touch devices don't get a stuck hover state. This is the modern replacement for the live theme's Modernizr `.no-touchevents` class.
- Motion timing is `300ms linear` (the theme's `--dur-slow`), not a bouncy cubic-bezier. The linearity is a deliberate brand characteristic.

**Shadow token to preserve:**
`--shadow-glow-white: rgba(255, 255, 255, 0.4) 0 0 60px 5px;` lives in `tokens/spacing.css`. It is the only white shadow in the system and it exists solely for primary-button hover.

---

## Final checklist before clicking "Save"

- [ ] Company name field has exactly `SirCharles.DESIGN`
- [ ] Blurb field has Option B (or your chosen option)
- [ ] GitHub URL field has the live URL of your `sircharles-design-system` repo and the repo is **public**
- [ ] At least the two SVG logo lockups are uploaded
- [ ] Font name "Mulish" is entered with weights 400/600/700/900
- [ ] Notes field has the strict-rules block above
