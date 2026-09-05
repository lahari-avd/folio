# Design System — Tokens & Type Scale

Reference doc for building the portfolio site. Covers color primitives, semantic
color tokens, typography primitives, and the semantic type scale. Use this as
the source of truth when building components — don't hardcode hex values or
font sizes directly.

---

## 1. Color Primitives

Five base ramps. Each of your 5 brand hexes has been anchored into the nearest
step of its matching scale (marked **★ brand anchor** below) — the rest of each
ramp is the generated scale you provided, untouched.

### `neutral` (carbon-black)

| Step | Hex | Notes |
|------|---------|-----------------|
| 50 | `#F2F2F2` | |
| 100 | `#E6E6E6` | |
| 200 | `#CCCCCC` | |
| 300 | `#B3B3B3` | |
| 400 | `#999999` | |
| 500 | `#808080` | |
| 600 | `#666666` | |
| 700 | `#4D4D4D` | |
| 800 | `#333333` | |
| **900** | **`#1A1A1A`** | ★ brand anchor |
| 950 | `#121212` | |

### `blue` (cornflower-blue)

| Step | Hex | Notes |
|------|---------|-----------------|
| 50 | `#e8f0fd` | |
| 100 | `#d1e1fa` | |
| 200 | `#a2c4f6` | |
| **300** | **`#639CF0`** | ★ brand anchor (was `#74a6f1`) |
| 400 | `#4588ed` | |
| 500 | `#176be8` | |
| 600 | `#1255ba` | |
| 700 | `#0e408b` | |
| 800 | `#092b5d` | |
| 900 | `#05152e` | |
| 950 | `#030f20` | |

### `bordeaux` (night-bordeaux)

| Step | Hex | Notes |
|------|---------|-----------------|
| 50 | `#f8eced` | |
| 100 | `#f1dada` | |
| 200 | `#e3b5b5` | |
| 300 | `#d68f90` | |
| 400 | `#c86a6c` | |
| 500 | `#ba4547` | |
| 600 | `#953739` | |
| 700 | `#70292a` | |
| **800** | **`#4F1D1E`** | ★ brand anchor (was `#4a1c1c`) |
| 900 | `#250e0e` | |
| 950 | `#1a0a0a` | |

### `gold` (old-lace)

| Step | Hex | Notes |
|------|---------|-----------------|
| **50** | **`#FDF5E5`** | ★ brand anchor (was `#fdf6e7`) |
| 100 | `#fbedd0` | |
| 200 | `#f8dba0` | |
| 300 | `#f4c871` | |
| 400 | `#f1b641` | |
| 500 | `#eda412` | |
| 600 | `#be830e` | |
| 700 | `#8e620b` | |
| 800 | `#5f4207` | |
| 900 | `#2f2104` | |
| 950 | `#211702` | |

### `sand` (porcelain)

| Step | Hex | Notes |
|------|---------|-----------------|
| **50** | **`#FCFAF7`** | ★ brand anchor (was `#f8f3ed`) |
| 100 | `#f1e8da` | |
| 200 | `#e3d1b5` | |
| 300 | `#d5b990` | |
| 400 | `#c7a26b` | |
| 500 | `#b98b46` | |
| 600 | `#946f38` | |
| 700 | `#6f532a` | |
| 800 | `#4a381c` | |
| 900 | `#251c0e` | |
| 950 | `#1a130a` | |

---

## 2. Semantic Color Tokens

Light mode only (no dark mode planned). These are what components should
actually reference — never a raw hex or a primitive name directly.

### Background / Surface
| Token | Value | Usage |
|---|---|---|
| `--color-bg-primary` | `sand-50` (#FCFAF7) | Main page background |
| `--color-bg-secondary` | `gold-50` (#FDF5E5) | Section backgrounds, cards, alternating rows |
| `--color-bg-inverse` | `neutral-900` (#1A1A1A) | Dark sections (e.g. footer) |

### Text
| Token | Value | Usage |
|---|---|---|
| `--color-text-primary` | `neutral-900` (#1A1A1A) | Body copy, headings |
| `--color-text-secondary` | `neutral-600` (#666666) | Supporting text, metadata |
| `--color-text-muted` | `neutral-400` (#999999) | Placeholder, disabled, timestamps |
| `--color-text-inverse` | `sand-50` (#FCFAF7) | Text on dark backgrounds |

### Border
| Token | Value | Usage |
|---|---|---|
| `--color-border-default` | `neutral-200` (#CCCCCC) | Dividers, card borders |
| `--color-border-subtle` | `neutral-100` (#E6E6E6) | Faint separators |

### Accent (interactive)
| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `blue-300` (#639CF0) | Links, interactive elements |
| `--color-accent-hover` | `blue-400` (#4588ed) | Hover/active states |
| `--color-accent-subtle` | `blue-50` (#e8f0fd) | Hover backgrounds, tag fills |
| `--color-focus-ring` | `blue-400` (#4588ed) | Focus outlines |

### Emphasis (secondary accent)
| Token | Value | Usage |
|---|---|---|
| `--color-emphasis` | `bordeaux-800` (#4F1D1E) | Sparingly: pull quotes, hero accents, key labels |
| `--color-emphasis-subtle` | `bordeaux-50` (#f8eced) | Tag/badge fills |

### State (for future forms)
| Token | Value | Usage |
|---|---|---|
| `--color-danger` | `bordeaux-600` (#953739) | Error text, invalid fields |
| `--color-danger-subtle` | `bordeaux-50` (#f8eced) | Error banners/backgrounds |

> **Open item:** no green/amber exists in your palette, so there's currently no
> distinct `success` or `warning` token — errors borrow from `bordeaux`. If
> your future forms need a real success state, you'll want to introduce one
> more scale rather than force a workaround.

---

## 3. Typography Primitives

```
--font-editorial: 'PP Editorial', Georgia, serif;
--font-mori: 'PP Mori', -apple-system, sans-serif;
```

**Role split:** PP Editorial is reserved for hero/display moments only. PP Mori
handles everything else — all headings, body copy, and UI text. This keeps
Editorial feeling special rather than diluted across the page.

**Weights** *(confirm against your actual license — adjust if different)*
- PP Mori: `400` regular · `500` medium · `600` semibold · `700` bold
- PP Editorial: `400` regular · `400 italic`

### Fixed type scale (base 16px)

| Token | rem | px |
|---|---|---|
| `--text-xs` | 0.75rem | 12px |
| `--text-sm` | 0.875rem | 14px |
| `--text-base` | 1rem | 16px |
| `--text-md` | 1.125rem | 18px |
| `--text-lg` | 1.25rem | 20px |
| `--text-xl` | 1.5rem | 24px |
| `--text-2xl` | 2rem | 32px |
| `--text-3xl` | 2.5rem | 40px |
| `--text-4xl` | 3rem | 48px |
| `--text-5xl` | 4rem | 64px |
| `--text-6xl` | 5rem | 80px *(display only)* |

### Line height & letter spacing

| Token | Value | Usage |
|---|---|---|
| `--leading-tight` | 1.1 | Display, large headings |
| `--leading-snug` | 1.25 | H2–H6 |
| `--leading-normal` | 1.5 | Body text |
| `--leading-relaxed` | 1.7 | Long-form / article body |
| `--tracking-tight` | -0.02em | Display, large headings |
| `--tracking-normal` | 0em | Default |
| `--tracking-wide` | 0.02em | Uppercase labels/eyebrows |

---

## 4. Semantic Type Scale

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display (hero only) | Editorial | `6xl` / scales down on mobile | 400 | tight | tight |
| H1 | Mori | `4xl` | 600 | tight | normal |
| H2 | Mori | `3xl` | 600 | snug | normal |
| H3 | Mori | `2xl` | 600 | snug | normal |
| H4 | Mori | `xl` | 500 | snug | normal |
| H5 | Mori | `lg` | 500 | normal | normal |
| Body Large (intros) | Mori | `md` | 400 | relaxed | normal |
| Body (default) | Mori | `base` | 400 | normal | normal |
| Body Small | Mori | `sm` | 400 | normal | normal |
| Eyebrow / Label | Mori | `xs` | 500 | normal | wide (uppercase) |
| Button | Mori | `sm` | 600 | normal | normal |

---

## 5. Spacing (8px base grid)

| Token | rem | px |
|---|---|---|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-24` | 6rem | 96px |
| `--space-32` | 8rem | 128px |

## 6. Radius

| Token | Value |
|---|---|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 16px |
| `--radius-full` | 9999px |

---

## 7. CSS Custom Properties (drop into `globals.css`)

```css
:root {
  /* Color — surface */
  --color-bg-primary: #FCFAF7;
  --color-bg-secondary: #FDF5E5;
  --color-bg-inverse: #1A1A1A;

  /* Color — text */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-muted: #999999;
  --color-text-inverse: #FCFAF7;

  /* Color — border */
  --color-border-default: #CCCCCC;
  --color-border-subtle: #E6E6E6;

  /* Color — accent */
  --color-accent: #639CF0;
  --color-accent-hover: #4588ed;
  --color-accent-subtle: #e8f0fd;
  --color-focus-ring: #4588ed;

  /* Color — emphasis */
  --color-emphasis: #4F1D1E;
  --color-emphasis-subtle: #f8eced;

  /* Color — state */
  --color-danger: #953739;
  --color-danger-subtle: #f8eced;

  /* Fonts */
  --font-editorial: 'PP Editorial', Georgia, serif;
  --font-mori: 'PP Mori', -apple-system, sans-serif;

  /* Type scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3rem;
  --text-5xl: 4rem;
  --text-6xl: 5rem;

  /* Line height / tracking */
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;
  --tracking-tight: -0.02em;
  --tracking-normal: 0em;
  --tracking-wide: 0.02em;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}
```

## 8. Tailwind config excerpt

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      neutral: {
        50: '#F2F2F2', 100: '#E6E6E6', 200: '#CCCCCC', 300: '#B3B3B3',
        400: '#999999', 500: '#808080', 600: '#666666', 700: '#4D4D4D',
        800: '#333333', 900: '#1A1A1A', 950: '#121212',
      },
      blue: {
        50: '#e8f0fd', 100: '#d1e1fa', 200: '#a2c4f6', 300: '#639CF0',
        400: '#4588ed', 500: '#176be8', 600: '#1255ba', 700: '#0e408b',
        800: '#092b5d', 900: '#05152e', 950: '#030f20',
      },
      bordeaux: {
        50: '#f8eced', 100: '#f1dada', 200: '#e3b5b5', 300: '#d68f90',
        400: '#c86a6c', 500: '#ba4547', 600: '#953739', 700: '#70292a',
        800: '#4F1D1E', 900: '#250e0e', 950: '#1a0a0a',
      },
      gold: {
        50: '#FDF5E5', 100: '#fbedd0', 200: '#f8dba0', 300: '#f4c871',
        400: '#f1b641', 500: '#eda412', 600: '#be830e', 700: '#8e620b',
        800: '#5f4207', 900: '#2f2104', 950: '#211702',
      },
      sand: {
        50: '#FCFAF7', 100: '#f1e8da', 200: '#e3d1b5', 300: '#d5b990',
        400: '#c7a26b', 500: '#b98b46', 600: '#946f38', 700: '#6f532a',
        800: '#4a381c', 900: '#251c0e', 950: '#1a130a',
      },
    },
    fontFamily: {
      editorial: ['PP Editorial', 'Georgia', 'serif'],
      mori: ['PP Mori', '-apple-system', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem', sm: '0.875rem', base: '1rem', md: '1.125rem',
      lg: '1.25rem', xl: '1.5rem', '2xl': '2rem', '3xl': '2.5rem',
      '4xl': '3rem', '5xl': '4rem', '6xl': '5rem',
    },
  },
}
```
