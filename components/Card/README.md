# Card

> Atomic component · AUTONOMIA Design System
> Consolidates 15 v1 instances across 4 patterns into 1 reusable component.

---

## Why This Matters

The original landing had **4 separate card patterns** with **18 unique CSS classes** for what is essentially the same idea: "container with content." Card unifies them while preserving each visual treatment.

| v1 pattern | v1 instances | v1 classes | v2 |
|------------|--------------|------------|-----|
| `.a-pillar` | 3 | `.a-pillars`, `.a-pillar`, `.num`, `h3`, `p` | `<Card variant="numbered">` |
| `.a-module` | 5 | `.a-modules`, `.a-module`, `.num`, `h4`, `.duration` | `<Card variant="numbered" meta>` |
| `.a-stat` | 4 | `.a-stat`, `.num`, `p`, `.src` | `<Card variant="stat">` |
| `.a-diag-feature` | 3 | `.a-diag-feature`, `.ds-check-pill`, `.text`, `strong`, `p` | `<Card variant="feature">` |
| **Total** | **15** | **~18 classes** | **1 component, 4 variants** |

**Avg markup reduction:** ~73%.

---

## Variants Decision Tree

```
What's the primary content?

> Number/metric (30+, 100%, 1:1)
  → variant="stat"

> Numbered step or pillar
  → variant="numbered"
  + meta="60 min"   if has duration

> Icon + label + text (horizontal)
  → variant="feature"

> Generic (heading + body)
  → variant="default"  (or omit, it's the default)
```

---

## Tones (Background)

```
neutral    → transparent (page bg shows through) — for grids
surface    → bg-surface (creme) — cards on bg-page
elevated   → bg-surface-2 (off-white) + xl padding — for hero cards
dark       → bg-dark — in dark sections
```

---

## Common Patterns

### 3-pillar grid (replace `.a-pillars`)
```jsx
<div className="card-grid card-grid--3 card-grid--divided">
  {pillars.map(p => (
    <Card
      key={p.num}
      variant="numbered"
      eyebrow={`${p.num} · ${p.label}`}
      title={<>{p.title} <em>{p.emphasis}</em></>}
      body={p.body}
    />
  ))}
</div>
```

### 5-module journey (replace `.a-modules`)
```jsx
<div className="card-grid card-grid--5 card-grid--divided">
  {modules.map(m => (
    <Card
      key={m.n}
      variant="numbered"
      tone="surface"
      eyebrow={m.n}
      title={m.title}
      body={m.sub}
      meta={m.dur}
    />
  ))}
</div>
```

### Stats grid (replace `.a-proof-grid`)
```jsx
<div className="card-grid card-grid--4">
  {stats.map((s, i) => (
    <Card
      key={i}
      variant="stat"
      stat={s.num.includes('%')
        ? <em>{s.num}</em>
        : s.num}
      body={s.label}
      source={s.src}
    />
  ))}
</div>
```

### Feature list (replace `.a-diag-features`)
```jsx
<ul className="diag-features">
  {features.map(f => (
    <li key={f.title}>
      <Card
        variant="feature"
        icon={<CheckIcon />}
        title={f.title}
        body={f.body}
      />
    </li>
  ))}
</ul>
```

### Hero card with CTA (replace `.a-diag`)
```jsx
<Card
  tone="elevated"
  accentBar
  eyebrow="Passo zero · gratuito"
  title={<>Comece pelo <em>diagnóstico</em></>}
  body="60 minutos com Igor Drews..."
>
  <Button variant="primary" arrow>Agendar agora</Button>
</Card>
```

### Clickable card (new in v2)
```jsx
<Card
  variant="numbered"
  tone="elevated"
  interactive
  href="/metodo"
  eyebrow="Método"
  title="Como funciona"
  body="Os 3 pilares..."
/>
```

---

## Layout Helpers

CSS provides grid utilities that pair with Card:

```html
<div class="card-grid card-grid--3 card-grid--divided">
  <!-- 3 cards with dashed dividers between them on desktop -->
  <!-- Stacks on mobile -->
</div>
```

| Class | Behavior |
|-------|----------|
| `.card-grid` | Base grid (1 col mobile) |
| `.card-grid--2` | 2 cols ≥640px |
| `.card-grid--3` | 3 cols ≥1024px |
| `.card-grid--4` | 4 cols ≥1024px |
| `.card-grid--5` | 5 cols ≥1024px |
| `.card-grid--divided` | Adds dashed borders between cards (matches DS aesthetic) |

---

## Accessibility

| Feature | Behavior |
|---------|----------|
| Default root | `<article>` (semantic, addressable by screen readers) |
| With `href` | `<a>` (full keyboard support) |
| With `onClick` only | `<button type="button">` |
| Decorative accent bar | `aria-hidden="true"` |
| Decorative icons | `aria-hidden="true"` |
| Interactive cards | `:focus-visible` outline |
| Reduced motion | Hover lift disabled |
| Touch devices | Hover lift disabled |

**Required for interactive cards:**
- Provide either `href` or `onClick`
- Have visible text content (title or body)

---

## Don'ts

❌ **Don't** put multiple `<a>` inside an interactive Card — only one click target per card
❌ **Don't** use `tone="dark"` on `bg-page` (bad contrast)
❌ **Don't** stack `accentBar` cards next to each other (loses meaning)
❌ **Don't** use `variant="stat"` for content that isn't a number/metric
❌ **Don't** override padding/margins via `style={}` (use tone modifier)

---

## Files

```
components/Card/
├── Card.jsx          # React component (~100 lines)
├── Card.css          # Styles (uses tokens-v2)
├── Card.demo.html    # Visual catalog (open in browser)
└── README.md         # This file
```

---

## Migration Notes

When refactoring `variation-a-v2.jsx` to use Card:

1. **Pillars section** — replace 3 `<div class="a-pillar">` with 3 `<Card variant="numbered">`
2. **Modules section** — replace 5 `<div class="a-module">` with 5 `<Card variant="numbered" meta>`
3. **Stats section** — replace 4 `<div class="a-stat">` with 4 `<Card variant="stat">`
4. **Diag features** — replace 3 `<div class="a-diag-feature">` with 3 `<Card variant="feature">`

After migration, you can **delete** these CSS rules from `styles-variation-a-v2.css`:
- `.a-pillars`, `.a-pillar`
- `.a-modules`, `.a-module`
- `.a-stat` (entire section)
- `.a-diag-feature` (entire section)

**Estimated CSS reduction:** ~150 lines of variation-specific CSS removed.

---

## Token Dependencies

```
Colors:    --color-bg-surface, --color-bg-surface-2, --color-bg-dark,
           --color-text-primary, --color-text-secondary, --color-text-muted,
           --color-text-on-dark, --color-accent, --color-accent-hover,
           --on-dark-50, --on-dark-70, --color-border-soft

Spacing:   --space-1, --space-2, --space-3, --space-4, --space-6, --space-8, --space-12

Typography: --font-display, --font-body, --font-mono,
            --fs-mono, --fs-micro, --fs-sm, --fs-body, --fs-h4, --fs-h3, --fs-h1,
            --lh-heading, --lh-body, --ls-heading, --ls-display, --ls-mono, --ls-mono-wide

Radii:     --radius-lg, --radius-xl, --radius-pill

Borders:   --border-1, --border-dashed-1

Motion:    --duration-fast, --ease-out, --focus-ring, --focus-ring-offset
```
