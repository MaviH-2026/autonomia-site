# Button

> Atomic component · AUTONOMIA Design System
> WCAG 2.2 AA compliant · 5 variants · 3 sizes · 6 states · 90+ combinations

---

## Quick Reference

```jsx
<Button variant="primary" size="md" arrow>
  Agendar diagnóstico
</Button>
```

---

## When to Use Each Variant

| Variant | When | Example |
|---------|------|---------|
| **primary** | CTA principal da página/seção | "Agendar diagnóstico" |
| **secondary** | Ação secundária ao lado da primary | "Ver o método" |
| **tertiary** | Ações menos importantes | "Saiba mais" |
| **accent** | CTA de alta urgência (uma vez por página máx) | "Quero atravessar" |
| **ghost** | Cancelar, voltar, dismiss | "Cancelar" |

**Rule of thumb:** Não use mais de 1 `accent` por viewport. Quebra a hierarquia visual.

---

## Size Decision Tree

```
> CTA principal da página (hero, oferta, fechamento)?
  → size="lg" (56px height)

> CTA da nav, cards, FAQ?
  → size="md" (44px) — default · WCAG touch target

> Densidade alta (filtros, tabela, lista compacta)?
  → size="sm" (32px)
```

---

## Anatomy

```
┌─────────────────────────────────────────────┐
│ [leftIcon] [play] Label [arrow] [rightIcon] │
│           [spinner when loading]            │
└─────────────────────────────────────────────┘
```

- **leftIcon / rightIcon:** custom ReactNode (use Icon component)
- **arrow:** signature DS arrow pill (round, accent bg)
- **play:** signature play pill (for video/media CTAs)
- **spinner:** auto-shown when `loading={true}`

---

## States

| State | Trigger | Visual |
|-------|---------|--------|
| Default | — | Variant base style |
| Hover | `:hover` | Background shift, arrow translates +3px |
| Active | `:active` | Translate down 1px, darker bg |
| Focus | `:focus-visible` | 2px outline + 2px offset |
| Disabled | `disabled` prop | Opacity 0.5, cursor not-allowed |
| Loading | `loading` prop | Spinner appears, `aria-busy="true"` |

---

## Accessibility Checklist

- ✅ Keyboard navigable (Tab, Enter/Space)
- ✅ Focus-visible 2px outline
- ✅ Touch target ≥44×44px (size md/lg)
- ✅ `aria-busy` when loading
- ✅ `aria-disabled` when disabled (preserves focus)
- ✅ Decorative SVGs `aria-hidden`
- ✅ Hover disabled on touch devices
- ✅ Respects `prefers-reduced-motion`
- ✅ All variants pass WCAG 1.4.3 (4.5:1 minimum)

**Required props for a11y:**
- `aria-label` — when no visible text (icon-only buttons)
- Either visible text via `children` OR `aria-label`

---

## Common Patterns

### CTA pair (hero, oferta)
```jsx
<div className="cta-pair">
  <Button variant="primary" arrow>Agendar diagnóstico</Button>
  <Button variant="secondary" play>Ver o método</Button>
</div>
```

### Closing/highlight CTA
```jsx
<Button variant="accent" size="lg" arrow>
  Quero atravessar
</Button>
```

### Sticky bar / mobile bottom
```jsx
<Button variant="primary" size="lg" block arrow>
  Ir para diagnóstico
</Button>
```

### On dark background (footer, hero overlay)
```jsx
<Button variant="secondary" onDark>
  Ver método novamente
</Button>
```

### Loading state (forms)
```jsx
<Button
  variant="primary"
  loading={isSubmitting}
  disabled={!isValid}
>
  {isSubmitting ? 'Enviando...' : 'Enviar'}
</Button>
```

### As link (Next.js, React Router)
```jsx
<Button as="a" href="/diagnostico" variant="primary" arrow>
  Agendar agora
</Button>
```

---

## Don'ts

❌ **Don't** use `accent` for multiple buttons in same viewport
❌ **Don't** stack 3+ buttons of same variant (hierarchy fail)
❌ **Don't** use `disabled` without explanation (use tooltip or helper text)
❌ **Don't** override `min-height` (breaks WCAG 2.5.5)
❌ **Don't** add hardcoded colors via `style={}` (use variant prop)
❌ **Don't** use `<div onClick>` instead of `<Button>` (a11y nightmare)

---

## Migration from `.ds-btn`

The old `.ds-btn` class still works, but new code should use `<Button>`:

```jsx
{/* Old */}
<a className="ds-btn ds-btn--primary">
  Agendar
  <span className="ds-arrow-pill">...</span>
</a>

{/* New */}
<Button variant="primary" arrow>Agendar</Button>
```

**Benefits of migration:**
- 50% less markup
- Consistent accessibility
- Type-safe variants (when TS migration done)
- Centralized loading/disabled logic
- Self-documenting via props

---

## Files

```
components/Button/
├── Button.jsx          # React component
├── Button.css          # Styles (uses tokens-v2)
├── Button.demo.html    # Visual catalog (open in browser)
└── README.md           # This file
```

---

## Token Dependencies

Component uses these tokens from `styles-tokens-v2.css`:

```
Colors:    --color-bg-dark, --color-bg-dark-elev, --color-bg-surface,
           --color-bg-surface-2, --color-bg-page, --color-text-on-dark,
           --color-text-primary, --color-accent, --color-accent-hover,
           --color-accent-deep, --color-border-soft, --on-dark-10,
           --on-dark-20, --on-dark-50

Spacing:   --space-2, --space-3, --space-4, --space-5, --space-6, --space-8

Typography: --font-body, --fs-xs, --fs-body, --fs-lede

Radii:     --radius-sm, --radius-md, --radius-pill

Motion:    --duration-fast, --ease-out, --focus-ring, --focus-ring-offset
```

If any of these tokens change, button updates automatically.
