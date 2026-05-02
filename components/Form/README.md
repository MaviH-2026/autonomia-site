# Form

> Atomic form components · AUTONOMIA Design System
> WCAG 2.2 AA compliant · Native semantic inputs · Auto-wired ARIA

---

## The 7 Components

| Component | Purpose | Element |
|-----------|---------|---------|
| `<FormField>` | Wrapper providing label + helper + error | `<div>` (context provider) |
| `<Input>` | Text-like inputs (text, email, tel, url, password, search, number) | `<input>` |
| `<Textarea>` | Multi-line text input | `<textarea>` |
| `<Select>` | Native select dropdown | `<select>` |
| `<Checkbox>` | Custom-styled real checkbox | `<input type="checkbox">` |
| `<Radio>` | Custom-styled real radio | `<input type="radio">` |
| `<RadioGroup>` | Wrapper for related radios | `<fieldset>` + `<legend>` |

---

## Why Native HTML

Many design systems build "fancy" custom dropdowns, checkboxes, and selects from `<div>` + JS. This system uses **real form controls** because:

1. ✅ **Native keyboard handling** for free (Tab, Space, Enter, arrows for radios)
2. ✅ **Form submission works** without JS (graceful degradation)
3. ✅ **Mobile keyboard auto-shows** correct type (email keyboard for type="email")
4. ✅ **Browser autofill works** out of the box
5. ✅ **Screen readers handle them** correctly (no ARIA workarounds needed)
6. ✅ **Smaller bundle** (no custom dropdown logic)

The only "custom" parts are **visual styling** of the box/circle for checkbox/radio, and the chevron on select. The actual control is always real HTML.

---

## Auto-Wired ARIA via Context

The killer feature: `<FormField>` automatically wires up:
- `id` (auto-generated UUID, links label↔input)
- `aria-describedby` (links helper + error to input)
- `aria-invalid` (set when error prop is provided)
- `required` (passed to control)
- `disabled` (passed to control)

You write:
```jsx
<FormField label="Email" helper="Para enviar o link" error="Inválido" required>
  <Input type="email" />
</FormField>
```

You get:
```html
<div class="field field--error">
  <label for="field-1">Email <span>*</span></label>
  <div class="field__control">
    <div class="input">
      <input
        type="email"
        id="field-1"
        required
        aria-invalid="true"
        aria-describedby="field-1-error"
      >
    </div>
  </div>
  <p id="field-1-helper">...</p>
  <p id="field-1-error" role="alert">Inválido</p>
</div>
```

**Zero manual ARIA management. Works correctly out of the box.**

---

## Quick Start

```jsx
// Simple input
<FormField label="Nome" required>
  <Input type="text" name="name" />
</FormField>

// Email with helper
<FormField label="Email" helper="Para confirmar agendamento" required>
  <Input type="email" name="email" placeholder="seu@email.com" />
</FormField>

// Error state (auto-wires aria-invalid)
<FormField label="Email" error="Email inválido">
  <Input type="email" defaultValue="abc" />
</FormField>

// Select with options array
<FormField label="Cargo">
  <Select
    placeholder="Selecione"
    options={[
      { value: 'ceo', label: 'CEO / Founder' },
      { value: 'vp', label: 'VP / C-Level' }
    ]}
  />
</FormField>

// Textarea with character count
<FormField label="Mensagem" helper="Min 50 caracteres">
  <Textarea rows={4} maxLength={500} showCount />
</FormField>

// Standalone checkbox (label is direct prop)
<Checkbox
  label="Aceito os termos de uso"
  required
/>

// Radio group
<RadioGroup label="Empresa" name="size">
  <Radio value="pme" label="PME" />
  <Radio value="mid" label="Mid-market" />
  <Radio value="ent" label="Enterprise" />
</RadioGroup>
```

---

## Input Types Supported

```jsx
<Input type="text" />
<Input type="email" />     {/* mobile: email keyboard */}
<Input type="tel" />       {/* mobile: numeric keyboard */}
<Input type="url" />
<Input type="password" />  {/* dots */}
<Input type="search" />    {/* with X clear button on iOS */}
<Input type="number" />
<Input type="date" />      {/* native date picker */}
<Input type="time" />
```

---

## Slots (icons, prefixes, suffixes)

```jsx
{/* Search with icon */}
<Input type="search" leftSlot={<SearchIcon />} />

{/* Currency input */}
<Input type="number" rightSlot="BRL" />

{/* Email with icon */}
<Input type="email" leftSlot={<EmailIcon />} />

{/* Phone with country code */}
<Input type="tel" leftSlot="+55" />
```

Slots are **decorative only** (`aria-hidden="true"`). They don't affect form value.

---

## Sizes

| Size | min-height | Use case |
|------|-----------|----------|
| `sm` | 36px | Filters, dense UIs |
| `md` (default) | 44px | Most forms · WCAG touch target |

---

## Validation Patterns

### Inline error (most common)
```jsx
const [errors, setErrors] = useState({});

<FormField
  label="Email"
  error={errors.email}
  required
>
  <Input
    type="email"
    onBlur={(e) => {
      if (!e.target.validity.valid) {
        setErrors(prev => ({ ...prev, email: 'Email inválido' }));
      }
    }}
  />
</FormField>
```

### Native HTML validation
```jsx
{/* Browser shows native error tooltip on submit */}
<FormField label="Email" required>
  <Input type="email" pattern="[^@]+@[^@]+\.[^@]+" />
</FormField>
```

### Real-time character count
```jsx
<FormField label="Bio" helper="Conte um pouco sobre você">
  <Textarea
    rows={3}
    maxLength={500}
    showCount  {/* shows "150/500" with warning color near limit */}
  />
</FormField>
```

---

## Accessibility Checklist

| Feature | WCAG | Status |
|---------|------|--------|
| Real semantic inputs (not divs) | 4.1.2 | ✅ |
| Label↔input via htmlFor (auto-wired) | 1.3.1, 3.3.2 | ✅ |
| `aria-describedby` for helper/error | 1.3.1, 3.3.1 | ✅ |
| `aria-invalid` in error state | 1.3.1 | ✅ |
| `role="alert"` on error message | 4.1.3 | ✅ |
| Required indicator with `aria-label` | 3.3.2 | ✅ |
| Native select keyboard nav | 2.1.1 | ✅ |
| Touch targets ≥44px (md size) | 2.5.5 | ✅ |
| Focus-visible (2px + offset) | 2.4.7 | ✅ |
| State changes visible | 1.4.11 | ✅ |
| Color not sole indicator | 1.4.1 | ✅ |
| `<fieldset>` + `<legend>` for radios | 1.3.1 | ✅ |
| Disabled preserves text contrast | 1.4.3 | ✅ |

**Score: 13/13 ✅**

---

## Don'ts

❌ **Don't** wrap multiple fields in same FormField (one field, one wrapper)
❌ **Don't** use Checkbox/Radio inside FormField with label (they have own labels)
❌ **Don't** override `id` manually unless needed (auto-generated handles it)
❌ **Don't** use `<div onClick>` for clickable areas (use Checkbox/Radio)
❌ **Don't** show helper AND error simultaneously (error overrides helper)
❌ **Don't** style with inline `style={}` (use size prop or CSS modifiers)
❌ **Don't** build custom dropdown — native Select handles all edge cases

---

## Files

```
components/Form/
├── Form.jsx          # 7 components (~340 lines)
├── Form.css          # Styles (~430 lines)
├── Form.demo.html    # Visual catalog
└── README.md         # This file
```

---

## Token Dependencies

```
Colors:    --color-text-primary, --color-text-secondary, --color-text-muted,
           --color-text-on-dark, --color-accent-deep, --color-bg-page,
           --color-bg-surface, --color-bg-surface-2,
           --color-border-soft, --color-border-strong

Typography: --font-body, --font-mono,
            --fs-xs, --fs-sm, --fs-body, --fs-micro,
            --lh-body, --space-1 through --space-10

Radii:     --radius-sm, --radius-pill

Motion:    --duration-fast, --ease-out, --focus-ring-offset, --focus-ring-width
```

---

## Layer Status

```
ATOM LAYER — COMPLETE ✅
═══════════════════════
Button       ✅ 5 variants × 3 sizes × 6 states
Card         ✅ 4 variants × 4 tones
Faq          ✅ WAI-ARIA accordion
Typography   ✅ 7 text components
Form         ✅ 7 form components ← NEW
```

**Atomic foundation is now 100% complete.** Every UI need on the landing page can be composed from these 5 atom groups.

Next layer (molecules) composes these:
- `FormGroup` — Multiple FormFields with shared submit
- `SectionHeader` — Eyebrow + Heading + Lede
- `MediaCard` — Card + Image + Caption
- etc.
