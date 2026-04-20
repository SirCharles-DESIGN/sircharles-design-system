# SirCharles.DESIGN — Design System

The brand and design system for **SirCharles.DESIGN**, a Product Design Director practice founded by Charles Hurst.

This repository is the source of truth for SirCharles' visual identity, voice, and reusable component code. It is structured to plug directly into [Claude Design](https://claude.ai/design)'s "Set up your design system" flow — see [`CLAUDE-DESIGN.md`](./CLAUDE-DESIGN.md) for the field-by-field mapping.

## What's in here

```
sircharles-design-system/
├── README.md                  ← you are here
├── CLAUDE-DESIGN.md           ← what to paste into Claude Design's setup form
├── GITHUB-SETUP.md            ← step-by-step for getting this repo onto GitHub (beginner-friendly)
│
├── brand/                     ← the human-readable brand
│   ├── foundations.md         ← color, type, spacing — the visual atoms
│   ├── voice-and-tone.md      ← how the brand sounds, with examples
│   └── logo-and-assets.md     ← logo usage, imagery direction, iconography
│
├── tokens/                    ← the machine-readable brand
│   ├── colors.css             ← CSS custom properties for color
│   ├── typography.css         ← font, weights, scale, base elements
│   └── spacing.css            ← spacing, radii, motion, shadows
│
├── tailwind.config.js         ← same tokens as Tailwind utilities
│
├── components/                ← live, openable HTML examples
│   ├── button.html
│   ├── card.html
│   └── nav.html
│
└── assets/                    ← logo files and the crown mark
    ├── crown-mark.png         ← original 32×32 favicon (black)
    ├── crown-mark-cyan.svg    ← cyan crown for dark backgrounds
    ├── crown-mark-black.svg   ← black crown for light backgrounds
    ├── logo-lockup-cyan.svg   ← full lockup (crown + wordmark) — dark surfaces
    └── logo-lockup-black.svg  ← full lockup — light surfaces
```

## How to use it

### If you're Claude Design, an AI tool, or an LLM
Read `brand/` for the rules and `tokens/` for the values. The tokens are intentionally named with semantic aliases (`--color-fg-primary`, `--radius-pill`) so you can reason about *why* a value is used, not just what it is. Components in `components/` are real, working HTML you can preview in any browser.

### If you're a human designer
Open the HTMLs in `components/` to see the brand rendered. Read `brand/foundations.md` for the rationale. Use `tailwind.config.js` to set up a new project that matches.

### If you're a developer adopting the system
1. Copy `tokens/*.css` into your project and `@import` them at the top of your stylesheet, OR
2. Copy `tailwind.config.js` and use the utilities (`bg-sc-cyan`, `text-sc-black`, `rounded-sc-pill`, etc.).
3. Reference `components/` for canonical implementations.

## Quick facts about the brand

- **Founder:** Charles Hurst, Product Design Director, 20 years
- **Practice:** SirCharles.DESIGN
- **Site:** https://sircharles.design
- **Featured work:** HIVE (Hypergiant satellite operations, 2024 Netty Award), Skipcart (acquired by 7-Eleven for $65M), Cub3d (Integral Reality Labs)
- **Aesthetic:** cyberpunk-luxe — pure black, electric cyan (`#00fff4`), Mulish typeface, generous spacing, full-pill buttons
- **Voice:** confident without boast, precise, premium-informal

## Where this came from

Every value in this repo was extracted from the live theme at sircharles.design on **2026-04-20**. Voice samples are direct quotes from the homepage, /pages/my-work, /pages/about-me, and /pages/contact. Color tokens and font choices match the Shopify theme's CSS exactly.

If the live site changes materially, regenerate this package — don't edit it by hand piecemeal.
