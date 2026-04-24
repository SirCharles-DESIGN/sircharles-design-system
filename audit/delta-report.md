# SirCharles.DESIGN — Design System Delta Report

**Audit date:** 2026-04-24
**Source of truth:** live site, sircharles.design (Shopify theme, `/cdn/shop/t/25/assets/theme.css`)
**Subject:** `sircharles-design-system` repo (GitHub, built 2026-04-20)
**Method:** Claude in Chrome extraction of CSS variables, computed styles, and stylesheet rules from the live DOM

---

## Headline

The repo gets most of the brand right. Colors, radii, page padding, font family, headline scale, and the dark/cyan tonal system all match the live site cleanly. The real gaps are in **button interaction design** (especially the signature hover), a handful of **motion tokens** that drift from what the theme actually uses, and a few **typographic defaults** where the repo picked modern baselines instead of mirroring the theme.

None of this is alarming. The repo was built as a "best guess" reconstruction before we had a way to read the live styles directly. Now that we can, patching the gaps is mechanical.

---

## What already matches (leave alone)

| Layer | Repo value | Live value | Verdict |
|---|---|---|---|
| `--sc-black` | `#000000` | `#000000` | Match |
| `--sc-near-black` | `#0a0a0a` | `#0a0a0a` | Match |
| `--sc-soft-black` | `#121212` | `#121212` | Match |
| `--sc-border-dark` | `#141919` | `#141919` | Match |
| `--sc-cyan` | `#00fff4` | `#00fff4` | Match |
| Cyan tints (04/08/10/15/30/60) | All present | All present | Match |
| `--radius-pill` | `120px` | `120px` | Match |
| `--radius-grid` | `30px` (mobile `20px`) | Same | Match |
| `--page-pad-x` | `50px` / `24px` mobile | Same | Match |
| `--grid-gap` | `50px` / `24px` mobile | Same | Match |
| Font family | `Mulish` (modern Muli) | `Muli` | Match — same letterforms, Google Fonts renamed |
| Weights available | 400 / 600 / 700 / 900 | Same four | Match |
| Heading line-height | `1.1` | `1.1` | Match |
| Body line-height | `1.3` | `1.3` | Match |
| Heading letter-spacing | `-0.01em` | `-0.01em` | Match |
| Uppercase eyebrow letter-spacing | `0.04em` | `0.04em` | Match |

---

## Drift (fix)

### 1. Button base — four small mismatches

Repo `.sc-btn` default:
```
font-weight: 700 (--fw-bold)
font-size:   14px (--fs-14)
padding:     0.875rem 1.75rem  (14px 28px)
min-height:  (unset)
```

Live `.button--solid`/`.button--outline`:
```
font-weight: 400
font-size:   12px
padding:     ~15px 30px
min-height:  50px  (enforces pill height regardless of content)
```

**Why it matters:** the live buttons feel airier and more graphic. The cyan pill sits slightly taller, the text is thinner, and the label reads as a hair-thin all-caps wordmark, not a chunky button label. Repo version reads heavier and closer to a generic bootstrap button.

### 2. Body base font size

Repo sets `--fs-16 = 1rem` as body base. Live uses `12px` as the working body size and lets the browser's default 16px root stay untouched. In practice this is a style choice: the theme is intentionally small-type, with size reserved for headlines and display marks.

**Recommendation:** keep the scale tokens as they are, but add a `--fs-body: 0.75rem (12px)` default and let `.sc-prose` (long-form reading) step up to 16px. Matches the site and still gives you a readable default for editorial copy.

### 3. Motion timing

Repo:
```
--dur-base: 220ms;
--ease-standard: cubic-bezier(0.2, 0.8, 0.2, 1);
```

Live theme:
```
most transitions: 0.175s linear
button-specific (instance override): 0.3s (easing unspecified → browser default)
animation keyframes: 175ms linear
```

The live theme is unfashionably linear and a touch snappier. The repo's cubic-bezier springy curve is a perfectly good modern default, but it isn't what the site does.

### 4. Shadows — missing the signature white glow

Repo has `--shadow-glow-sm/md/lg`, all cyan. The site's primary button hover uses a **white** glow, not cyan:

```css
box-shadow: rgba(255, 255, 255, 0.4) 0px 0px 60px 5px;
```

This is the single most recognizable interaction on the site and it's missing from the repo's token palette.

---

## The big one — button hover interaction

This is the gap Bob flagged. The repo's button hover is a cyan glow `box-shadow`, which is fine but generic. The live site does something much more distinctive.

**Live hover sequence (solid / primary button):**

1. A `::before` pseudo-element starts at `width: 0%` behind the button's inner text.
2. On hover, `::before` animates `width: 0% → 100%` over ~300ms. This is the sliding fill.
3. The text color changes from cyan → near-black (`--color-scheme-accent-foreground`) as the cyan plate slides across behind it.
4. The text label shifts to `font-style: italic` at the same time. This is subtle and weirdly elegant. It's the detail that makes the interaction feel custom.
5. The border-color locks to cyan.
6. A soft white glow (`rgba(255, 255, 255, 0.4) 0 0 60px 5px`) pulses out behind the whole pill.

**Live hover sequence (outline / ghost button):**

Same `::before` sliding fill mechanic, same text color invert, same white glow. No italic shift on the outline variant.

**Repo hover today:**

Just a cyan box-shadow bump. The sliding fill, the italic text, the white glow, and the border lockup are all absent.

**Focus, active, disabled — what the live site actually does:**

- **Focus:** the site deliberately suppresses focus outlines except for keyboard users (`:focus:not(:focus-visible) { outline: none !important }`), and even then only form inputs get a visible ring (`box-shadow: 0 0 0 0.1875rem` in soft cyan). Buttons don't get a focus ring at all. This is technically an accessibility regression, and the repo has invented a reasonable cyan ring for buttons on focus-visible that the site doesn't have.
- **Active:** no active-state styling found on the live site. Repo has `transform: translateY(1px)` on press, which is invented.
- **Disabled:** Shopify's payment button uses `opacity: 0.6; cursor: default`. Repo uses `opacity: 0.4; cursor: not-allowed`, which is more obviously disabled but stronger than the live site.

---

## Modernization notes — `.no-touchevents`

Every hover rule on the live site is prefixed with `.no-touchevents`. That's a Modernizr class from ~2014 that added the class to `<html>` if the device had no touch screen. It's a legacy pattern. The modern equivalent is a media query:

```css
/* old */
.no-touchevents .button:hover { ... }

/* modern */
@media (hover: hover) and (pointer: fine) {
  .button:hover { ... }
}
```

Behaviorally identical for the user, and no need to load Modernizr. The repo should adopt the media query form.

---

## Decision points (your call)

These are places where "match 100%" and "do the modern/right thing" point in different directions. I picked a default for each, with the alternatives I considered. Tell me which ones to flip.

### A. Focus rings on buttons

- **My default:** keep the repo's invented keyboard focus ring on buttons. It's a small accessibility win over the live site, and WCAG 2.1 AA will be happier.
- **Alternative:** strip it to match the site exactly (no focus ring on buttons). The site does this; I don't think we should.
- **Alternative:** keep the ring but tone it down to match the form-input treatment (cyan 8% instead of cyan 30%).

### B. Body base font size

- **My default:** add `--fs-body: 0.75rem (12px)` as the default body size to match the site, and keep `.sc-prose` at 16px for long-form reading.
- **Alternative:** keep everything at 16px baseline. Modern, more accessible, but loses the "thin graphic" feel.
- **Alternative:** 14px compromise. Splits the difference, matches neither.

### C. Motion curve

- **My default:** mirror the live site — `--dur-base: 175ms; --ease-standard: linear;` plus a `--dur-button: 300ms` override for the sliding fill.
- **Alternative:** keep the repo's cubic-bezier. Looks more polished on modern hardware but isn't what the site does.

### D. Modernizr vs `@media (hover: hover)`

- **My default:** swap all `.no-touchevents` selectors for `@media (hover: hover) and (pointer: fine) { ... }`. Identical UX, no legacy polyfill.
- **Alternative:** keep `.no-touchevents` for 1:1 parity with the Shopify theme. Only worth it if we ever need to port CSS straight between the two.

### E. Italic hover on primary buttons

- **My default:** keep it. It's the single most distinctive interaction detail on the site and it costs nothing.
- **Alternative:** drop it. Some designers will read the italic shift as a bug. I don't think Bob will.

### F. Disabled opacity

- **My default:** match the live site — `opacity: 0.6; cursor: default`. Quieter, more theme-consistent.
- **Alternative:** keep the repo's `opacity: 0.4; cursor: not-allowed`. Louder/clearer. Standard bootstrap pattern.

---

## Proposed Phase 1b patch plan

Assuming defaults above are accepted, the patch is:

**tokens/spacing.css**
- Update `--dur-base: 175ms`, `--dur-slow: 300ms`
- Change `--ease-standard` to `linear` (keep `--ease-emphatic` for card lifts)
- Add `--shadow-glow-white: rgba(255, 255, 255, 0.4) 0 0 60px 5px;`

**tokens/typography.css**
- Add `--fs-body: 0.75rem;` (12px)
- Update `body, p, .sc-body` to use `var(--fs-body)`
- Add `.sc-prose { font-size: var(--fs-16); line-height: var(--lh-prose); }` (long-form override)

**components/button.html**
- Rewrite `.sc-btn` base:
  - `font-weight: var(--fw-regular)` (400, not 700)
  - `font-size: var(--fs-12)`
  - `padding: 15px 30px`
  - `min-height: 50px`
  - `position: relative; overflow: hidden; isolation: isolate;` (to contain the `::before`)
- Add `::before` pseudo-element for the sliding fill on primary and ghost variants
- On `@media (hover: hover) and (pointer: fine)`:
  - `::before` width: `0% → 100%` over 300ms
  - Text color flips to black
  - `.sc-btn--primary` adds `font-style: italic` on hover
  - Add the white glow box-shadow
  - Border-color locks to cyan
- Focus-visible: keep current keyboard ring (Decision A default)
- Disabled: switch to `opacity: 0.6; cursor: default`

**components/card.html**
- Leave the card alone for now. The live cards use a different mechanic (image scale + opacity layers), but the repo's cyan-glow hover is a reasonable abstraction and doesn't misrepresent anything. We can revisit when we audit the homepage specifically.

**components/nav.html**
- Haven't diffed this yet. Will do after button.

**README.md / CLAUDE-DESIGN.md**
- Add a short section documenting the signature button hover so any future agent reading this repo understands why the `::before` is there.

---

## What I rejected

A few approaches I considered and dropped:

- **Port the theme CSS directly.** Would give 100% parity, but we'd drag in hundreds of selectors for Shopify mechanics we don't need (product cards, carts, sliders, yotpo, etc). Not worth it.
- **Treat the live site as one big mock and ignore the repo.** Would throw away real work and lose the clean token structure the repo gives us. The repo's tokens are mostly right; it's the components that need the surgery.
- **Rebuild buttons from scratch in Tailwind 4 utility classes.** Tempting for the sircharles-design-web project, but the system should live at the CSS-variable level so it's portable to any renderer (Shopify, Astro, vanilla HTML). Tailwind consumes the tokens; it doesn't own them.

---

## Next

Once you confirm Decisions A–F, I can do the entire Phase 1b patch headlessly — commit by component — and open a PR against the design system repo so you have a diff to eyeball before merge. Then we pull the updated tokens + button into `sircharles-design-web` and the Astro scaffold starts looking like the real thing.
