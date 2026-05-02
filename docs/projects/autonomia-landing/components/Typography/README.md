# Typography

> Atomic components · AUTONOMIA Design System
> 7 components covering 100% of text needs · Semantic ↔ visual decoupled

---

## The 7 Components

| Component | Visual size | Semantic default | Use case |
|-----------|-------------|------------------|----------|
| `<Display>` | 48-84px (fluid) | `h1` | Hero headlines, closing CTAs |
| `<Heading>` | level 1-4 (fluid) | `h2` (configurable) | Section/subsection titles |
| `<Lede>` | 16-18px (fluid) | `p` | Lead paragraphs after headings |
| `<Body>` | 14-16px | `p` | Default body text |
| `<Eyebrow>` | 12px | `span` | Mono uppercase labels |
| `<Quote>` | display size | `figure` + `blockquote` | Pull quotes |
| `<Mono>` | 11px | `span` | URLs, dates, codes inline |

---

## Why "Semantic vs Visual" Decoupling Matters

Traditional CSS forces semantic = visual. If you need an `<h2>` styled like an `<h1>`, you fight CSS. Typography components decouple:

```jsx
// Semantic h2, visual h1 — perfect for hero sections inside <section>
<Heading level={2} visualSize={1}>
  Comece pelo diagnóstico
</Heading>

// Semantic h1, visual h3 — for compact dashboard headers
<Heading level={1} visualSize={3}>
  Welcome back
</Heading>
```

This avoids **heading skip warnings** in axe/Lighthouse while preserving visual hierarchy.

---

## Quick Start

```jsx
import { Display, Heading, Lede, Body, Eyebrow, Quote, Mono } from './Typography';

// Hero
<Display>
  Forme-se como o <em>líder orquestrador</em> da era da IA.
</Display>

// Section header (compose with stack helper)
<div className="typo-stack">
  <Eyebrow withDash>O método</Eyebrow>
  <Heading level={2}>Não é um curso. É uma <em>travessia</em>.</Heading>
  <Lede>A IA não é tendência. É infraestrutura.</Lede>
</div>

// Body text
<Body tone="secondary">
  Texto secundário com ótimo contraste e legibilidade.
</Body>

// Pull quote
<Quote attribution="Igor Drews · Estrategista de IA" tone="on-dark">
  A tecnologia não é a estrela. Quem <em>conduz</em> é.
</Quote>
```

---

## Tone System

All typography components share the same `tone` prop:

| Tone | Color | WCAG status | Use for |
|------|-------|-------------|---------|
| `default` | #16140C | AAA | Primary text, headings |
| `secondary` | #52463A | AA | Lede paragraphs, descriptions |
| `muted` | #726855 | AA-Large only | Eyebrows, mono labels (≥18px) |
| `accent` | #E84A00 | Mixed | Numbers, em emphasis, dashes |
| `on-dark` | #FEFAF2 | AAA on dark | Text on dark backgrounds |
| `on-dark-soft` | 70% white | AAA on dark | Secondary text on dark |

**Important:** `accent` only passes WCAG AA on dark backgrounds for normal text. On light backgrounds, only use accent for ≥18px or non-text decoration.

---

## Composition Helper: `typo-stack`

CSS utility for vertical rhythm between typography elements:

```html
<div class="typo-stack">
  <Eyebrow>...</Eyebrow>     <!-- gap: 12px next -->
  <Display>...</Display>     <!-- gap: 24px next -->
  <Lede>...</Lede>          <!-- gap: 16px next -->
  <Body>...</Body>
</div>
```

Auto-generates spacing per element type:
- Eyebrow → next: `--space-3` (12px)
- Display/H1/H2 → next: `--space-6` (24px)
- Default: `--space-4` (16px)

---

## Migration Map

### Replace `.a-section-tag` (eyebrow + dash)
```jsx
{/* v1 */}
<div className="a-section-tag">O método</div>

{/* v2 */}
<Eyebrow withDash>O método</Eyebrow>
```

### Replace `.a-section-title`
```jsx
{/* v1 */}
<h2 className="a-section-title">
  Não é um curso. É uma <em>travessia</em>.
</h2>

{/* v2 */}
<Heading level={2}>
  Não é um curso. É uma <em>travessia</em>.
</Heading>
```

### Replace `.a-hero h1`
```jsx
{/* v1 */}
<h1>Forme-se como o <em>líder orquestrador</em></h1>

{/* v2 */}
<Display>Forme-se como o <em>líder orquestrador</em></Display>
```

### Replace `.a-hero p.lede`
```jsx
{/* v1 */}
<p className="lede">Não é um curso...</p>

{/* v2 */}
<Lede>Não é um curso...</Lede>
```

### Replace `.a-pullquote`
```jsx
{/* v1 */}
<section className="a-pullquote">
  <div className="a-pullquote-text">
    A tecnologia não é a estrela.
  </div>
  <div className="a-pullquote-attr">Igor Drews</div>
</section>

{/* v2 */}
<section>
  <Quote attribution="Igor Drews" tone="on-dark">
    A tecnologia não é a estrela.
  </Quote>
</section>
```

### Replace `.a-instructor-text .quote`
```jsx
{/* v1 */}
<div className="quote">
  <span className="quote-mark">"</span>
  Há mais de três décadas...
</div>

{/* v2 */}
<Quote
  className="typo-quote--inline"
  showMark
  attribution="— Igor Drews"
>
  Há mais de três décadas...
</Quote>
```

---

## Don'ts

❌ **Don't** use `Display` for non-hero content (loses meaning)
❌ **Don't** use `tone="muted"` for body text < 18px (fails WCAG AA)
❌ **Don't** use `tone="accent"` for body text on light backgrounds
❌ **Don't** skip heading levels (use `visualSize` to override visual without skipping)
❌ **Don't** use `<Heading level={1}>` more than once per page
❌ **Don't** apply manual styles via `style={}` (use tone prop)

---

## Accessibility

| Feature | Status |
|---------|--------|
| Semantic HTML | ✅ Real h1-h6, p, span, blockquote, figure |
| `text-wrap: balance` for headings | ✅ Built-in |
| Configurable heading levels | ✅ Avoids hierarchy skip |
| WCAG-aware tones | ✅ Documented per surface |
| Italic emphasis preserved | ✅ `<em>` styling |
| Quote with figcaption | ✅ Proper blockquote pattern |

---

## Files

```
components/Typography/
├── Typography.jsx          # 7 component exports
├── Typography.css          # Styles (uses tokens-v2)
├── Typography.demo.html    # Visual catalog
└── README.md               # This file
```

---

## Token Dependencies

```
Colors:     --color-text-primary, --color-text-secondary, --color-text-muted,
            --color-text-on-dark, --color-accent, --on-dark-60, --on-dark-70

Typography: --font-display, --font-body, --font-mono,
            --fs-display, --fs-h1, --fs-h2, --fs-h3, --fs-h4,
            --fs-lede, --fs-body, --fs-sm, --fs-eyebrow, --fs-mono, --fs-micro,
            --lh-tight, --lh-heading, --lh-body,
            --ls-display, --ls-heading, --ls-mono, --ls-mono-wide

Spacing:    --space-1, --space-2, --space-3, --space-4, --space-5,
            --space-6, --space-7

Borders:    --border-dashed-1
```

---

## API Reference

### `<Display>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tone` | tone | `'default'` | Color modifier |
| `as` | string | `'h1'` | Override semantic tag |
| `balance` | boolean | `true` | Apply text-wrap balance |

### `<Heading>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | 1\|2\|3\|4 | `2` | Semantic + visual default |
| `as` | string | — | Override semantic tag |
| `visualSize` | 1\|2\|3\|4 | `=level` | Override visual size only |
| `tone` | tone | `'default'` | Color modifier |
| `balance` | boolean | `true` | Apply text-wrap balance |

### `<Lede>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tone` | tone | `'secondary'` | Color modifier |
| `as` | string | `'p'` | Override tag |

### `<Body>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tone` | tone | `'default'` | Color modifier |
| `size` | 'sm'\|'md' | `'md'` | Body size |
| `as` | string | `'p'` | Override tag |

### `<Eyebrow>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tone` | tone | `'secondary'` | Color modifier |
| `withDash` | boolean | `false` | Prepend accent dash |
| `as` | string | `'span'` | Override tag |

### `<Quote>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `attribution` | string\|node | — | Caption text |
| `showMark` | boolean | `false` | Show " mark prefix |
| `tone` | tone | `'default'` | Color modifier |

### `<Mono>`
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tone` | tone | `'muted'` | Color modifier |
| `as` | string | `'span'` | Override tag |

---

## Why This Closes the Atom Layer

After Typography:

```
Atoms layer (foundation):
✅ Button     — All interactive button needs
✅ Card       — Container patterns (numbered, stat, feature)
✅ Faq        — Disclosure pattern
✅ Typography — All text needs

Molecules (next):
⏳ FormField  — Input + Label + Error
⏳ MediaCard  — Image + meta + caption
⏳ Section    — Eyebrow + Heading + Lede + content

Organisms (next):
⏳ Hero       — Full hero with media
⏳ Footer     — Multi-column footer
⏳ NavBar     — Navigation with CTA
```

The atom layer is now **complete**. Every text decision in the codebase can route through Typography components. Every styling decision routes through tokens. The next layer (molecules) composes these atoms.
