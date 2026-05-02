# Faq

> Atomic component · AUTONOMIA Design System
> WAI-ARIA 1.2 Accordion Pattern compliant
> Full keyboard navigation (Arrows, Home, End)

---

## Why This Component Exists

The original FAQ in `variation-a.jsx` was minimal:

```jsx
<button className="a-faq-q" onClick={() => setOpenFaq(...)}>
  <span>{f.q}</span>
  <span className="a-faq-plus"></span>
</button>
{openFaq === i && <div className="a-faq-a">{f.a}</div>}
```

**Problems:**
- ❌ No `aria-expanded` (screen readers don't know state)
- ❌ No `aria-controls` (panel not associated with trigger)
- ❌ No keyboard arrow navigation (Tab-only, slow)
- ❌ Question wasn't a heading (semantic failure)
- ❌ Single-open mode hardcoded (no flexibility)

`<Faq>` fixes all of this with a single component call.

---

## Quick Start

### Composable API
```jsx
<Faq>
  <Faq.Item question="Para quem é a mentoria?">
    Executivos e líderes que conduzem operações reais...
  </Faq.Item>
  <Faq.Item question="Como funciona o diagnóstico?">
    Uma conversa de 30 minutos onde mapeamos...
  </Faq.Item>
</Faq>
```

### Data-driven API
```jsx
const faqs = [
  { q: 'Para quem é a mentoria?', a: 'Executivos...' },
  { q: 'Como funciona o diagnóstico?', a: 'Uma conversa...' },
];

<Faq items={faqs} />
```

---

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Next focusable (standard) |
| `Enter` / `Space` | Toggle current panel |
| `↓` Arrow Down | Focus next header (wraps) |
| `↑` Arrow Up | Focus previous header (wraps) |
| `Home` | Focus first header |
| `End` | Focus last header |

**This is THE WAI-ARIA Accordion Pattern.** Power users will navigate FAQs in seconds instead of Tab-Tab-Tab-Enter.

---

## ARIA Structure

```html
<div role="region" aria-label="Perguntas frequentes">
  <h3>
    <button
      aria-expanded="true"
      aria-controls="faq-panel-0"
      id="faq-header-0"
    >
      Question text
      <span aria-hidden="true">+ icon</span>
    </button>
  </h3>
  <div
    id="faq-panel-0"
    role="region"
    aria-labelledby="faq-header-0"
  >
    Answer content
  </div>
</div>
```

Each panel announces: **"Region, Para quem é a mentoria, expanded"** to screen readers.

---

## Open Modes

### Single-open (default)
Only one panel can be open at a time. Opening a new one closes the previous.
```jsx
<Faq /> {/* default — first item open */}
<Faq defaultOpen={null} /> {/* all closed initially */}
<Faq defaultOpen={2} /> {/* third item open */}
```

### Multi-open
Multiple panels can be open simultaneously.
```jsx
<Faq multiple />
<Faq multiple defaultOpen={[0, 2]} /> {/* first and third open */}
```

---

## Variants (CSS Modifiers)

| Class | Visual |
|-------|--------|
| (default) | Border-top + border-bottom items, no background |
| `.faq--on-dark` | Adapts text/borders for dark backgrounds |
| `.faq--bordered` | Full border, rounded card style |
| `.faq--sm` | Compact density (smaller padding/text) |

```jsx
<Faq className="faq--bordered" />
<Faq className="faq--on-dark" />
<Faq className="faq--sm" />
```

---

## Heading Hierarchy

The trigger is wrapped in a real heading element. Default is `<h3>`, configurable:

```jsx
<Faq headingLevel={2} /> {/* questions become h2 */}
<Faq headingLevel={4} /> {/* questions become h4 */}
```

**Why this matters:** Screen reader users navigate by headings. If FAQs are top-level on the page, use `h2`. If nested in a section, use `h3` or `h4` to maintain hierarchy.

---

## Don'ts

❌ **Don't** put interactive elements inside `Faq.Item` answer content (panels collapse/expand frequently — confusing UX)
❌ **Don't** nest `<Faq>` inside another `<Faq>` (ARIA pattern doesn't allow)
❌ **Don't** use for navigation menus (use `<nav>` + disclosure pattern instead)
❌ **Don't** override `aria-*` attributes manually (component manages state)
❌ **Don't** use for content that's always meant to be visible (defeats purpose)

---

## Accessibility Compliance

| WCAG Criterion | Level | Status |
|---------------|-------|--------|
| 1.1.1 Non-text Content | A | ✅ Pass |
| 1.3.1 Info and Relationships | A | ✅ Pass |
| 1.4.3 Contrast (Minimum) | AA | ✅ Pass |
| 1.4.11 Non-text Contrast | AA | ✅ Pass |
| 2.1.1 Keyboard | A | ✅ Pass |
| 2.1.2 No Keyboard Trap | A | ✅ Pass |
| 2.4.6 Headings and Labels | AA | ✅ Pass |
| 2.4.7 Focus Visible | AA | ✅ Pass |
| 2.5.5 Target Size | AAA | ✅ Pass |
| 4.1.2 Name, Role, Value | A | ✅ Pass |
| 4.1.3 Status Messages | AA | ✅ Pass |

**Score: 11/11 ✅** — WAI-ARIA Accordion Pattern fully implemented.

---

## Migration from `.a-faq-*`

### Before (variation-a.jsx)
```jsx
const [openFaq, setOpenFaq] = React.useState(0);

<div className="a-faq-list">
  {faqs.map((f, i) =>
    <div className={`a-faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
      <button className="a-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
        <span>{f.q}</span>
        <span className="a-faq-plus"></span>
      </button>
      {openFaq === i && <div className="a-faq-a">{f.a}</div>}
    </div>
  )}
</div>
```

### After (with Faq component)
```jsx
<Faq items={faqs} defaultOpen={0} />
```

**18 lines → 1 line. Zero state management. Full a11y for free.**

---

## Files

```
components/Faq/
├── Faq.jsx          # React component (composable + data-driven)
├── Faq.css          # Styles (uses tokens-v2)
├── Faq.demo.html    # Visual catalog (open in browser, try keyboard nav!)
└── README.md        # This file
```

---

## Token Dependencies

```
Colors:    --color-text-primary, --color-text-secondary, --color-text-on-dark,
           --color-bg-surface-2, --color-accent, --color-border-soft,
           --on-dark-10, --on-dark-20, --on-dark-70

Spacing:   --space-5, --space-6, --space-7

Typography: --font-display, --font-body, --fs-h4, --fs-body, --fs-lede, --fs-sm,
            --lh-heading, --lh-loose

Radii:     --radius-sm, --radius-lg, --radius-pill

Borders:   --border-1

Motion:    --duration-fast, --ease-out, --focus-ring, --focus-ring-offset
```
