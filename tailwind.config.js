/**
 * SirCharles.DESIGN — Tailwind Configuration
 *
 * Maps the design tokens (see /tokens/*.css) into Tailwind utility classes
 * so consumers can write `bg-sc-black text-sc-cyan rounded-pill` etc.
 *
 * Usage in another project:
 *   1. Copy this file to your project root.
 *   2. Set `content` to point at your template files.
 *   3. Import the token CSS files (or paste their :root vars into your stylesheet).
 *   4. Run Tailwind as normal.
 */
module.exports = {
  content: [
    "./components/**/*.{html,jsx,tsx,vue,svelte}",
    "./pages/**/*.{html,jsx,tsx,vue,svelte}",
    "./brand/**/*.md",
  ],
  theme: {
    // Reset Tailwind's defaults to match SirCharles' opinionated scale.
    fontFamily: {
      sans: ['Mulish', 'Muli', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      heading: ['Mulish', 'Muli', 'system-ui', 'sans-serif'],
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    fontSize: {
      '12': ['0.75rem',  { lineHeight: '1.3'  }],
      '14': ['0.875rem', { lineHeight: '1.3'  }],
      '16': ['1rem',     { lineHeight: '1.3'  }],
      '18': ['1.125rem', { lineHeight: '1.3'  }],
      '22': ['1.375rem', { lineHeight: '1.2'  }],
      '28': ['1.75rem',  { lineHeight: '1.15' }],
      '40': ['2.5rem',   { lineHeight: '1.1'  }],
      '64': ['4rem',     { lineHeight: '1.1'  }],
      '96': ['6rem',     { lineHeight: '1.05' }],
    },
    letterSpacing: {
      display: '-0.01em',
      body:    '0em',
      wide:    '0.04em',
    },
    extend: {
      colors: {
        sc: {
          black:     '#000000',
          'near-black': '#0a0a0a',
          'soft-black': '#121212',
          border:    '#141919',
          cyan:      '#00fff4',
          white:     '#ffffff',
        },
        // Cyan tints addressable as `bg-cyan-tint/15` etc.
        'cyan-tint': {
          DEFAULT: 'rgba(0, 255, 244, 1)',
          '04':    'rgba(0, 255, 244, 0.04)',
          '08':    'rgba(0, 255, 244, 0.08)',
          '10':    'rgba(0, 255, 244, 0.10)',
          '15':    'rgba(0, 255, 244, 0.15)',
          '30':    'rgba(0, 255, 244, 0.30)',
          '60':    'rgba(0, 255, 244, 0.60)',
        },
      },
      borderRadius: {
        'sc-pill':         '120px',
        'sc-grid':         '30px',
        'sc-grid-mobile':  '20px',
        'sc-input':        '12px',
      },
      borderWidth: {
        'sc-section':   '20px',
        'sc-container': '20px',
      },
      spacing: {
        'page-x':      '3.125rem',  // 50px
        'page-y':      '3.125rem',
        'grid-gap':    '3.125rem',
        'section-y':   '5rem',      // 80px section rhythm
      },
      boxShadow: {
        'sc-glow-sm': '0 0 0 1px rgba(0, 255, 244, 0.2),  0 0 12px rgba(0, 255, 244, 0.15)',
        'sc-glow-md': '0 0 0 1px rgba(0, 255, 244, 0.3),  0 0 24px rgba(0, 255, 244, 0.25)',
        'sc-glow-lg': '0 0 0 1px rgba(0, 255, 244, 0.4),  0 0 48px rgba(0, 255, 244, 0.35)',
      },
      transitionTimingFunction: {
        'sc-standard':  'cubic-bezier(0.2, 0.8, 0.2, 1)',
        'sc-emphatic':  'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'sc-fast': '120ms',
        'sc-base': '220ms',
        'sc-slow': '440ms',
      },
    },
  },
  plugins: [],
};
