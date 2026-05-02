# SectionHeader

> **Molecule** · AUTONOMIA Design System
> Composes Eyebrow + Heading + Lede in the standard "section intro" pattern.

---

## Why This Component

The pattern `Eyebrow withDash → Heading → Lede` appears **9 times** in variation-a alone. Without a molecule, every section repeats this composition manually. SectionHeader consolidates it into one declarative call.

```jsx
{/* Manual composition (9x repeated) */}
<div className="typo-stack">
  <Eyebrow withDash tone="secondary">O método</Eyebrow>
  <Heading level={2}>Não é um curso. É uma <em>travessia</em>.</Heading>
  <Lede>A IA não é tendência. É infraestrutura...</Lede>
</div>

{/* SectionHeader (1 component, 9 uses) */}
<SectionHeader
  eyebrow="O método"
  title={<>Não é um curso. É uma <em>travessia</em>.</>}
  description="A IA não é tendência. É infraestrutura..."
/>
```

**~5 lines → ~5 lines**, but:
- Self-documenting prop names
- Auto-applies tones based on `tone="dark"`
- Layout built in (stack vs split)
- Alignment built in (start/center/end)
- Action slot for inline CTAs
- Auto-generates `{id}-title` for `aria-labelledby`

---

## Quick Reference

```jsx
// Most common: stack with eyebrow + title + lede
<SectionHeader
  eyebrow="O método"
  title={<>Não é um curso. É uma <em>travessia</em>.</>}
  description="A IA não é tendência..."
/>

// Split layout (heading + description in 2 cols on desktop)
<SectionHeader layout="split" {...} />

// Centered (closing CTA, FAQ)
<SectionHeader align="center" {...} />

// Dark tone (closing CTAs)
<SectionHeader
  tone="dark"
  align="center"
  eyebrowTone="accent"
  {...}
/>
```

---

## All 9 Patterns from variation-a

| # | Section | Layout | Align | Tone | withDash | Lede? |
|---|---------|--------|-------|------|----------|-------|
| 1 | Hero (lockup) | stack | start | default | ❌ | — |
| 2 | Promise (método) | split | start | default | ✅ | ✅ |
| 3 | Instrutor | stack | start | default | ✅ | — |
| 4 | Jornada | split | start | default | ✅ | ✅ |
| 5 | Diagnóstico | stack | start | default | ❌ | ✅ |
| 6 | Prova | stack | start | default | ✅ | — |
| 7 | Oferta | stack | start | default | ✅ | — |
| 8 | Fechamento | stack | center | dark | ✅ | ✅ |
| 9 | FAQ | stack | start | default | ✅ | — |

**Every one of these can become a single `<SectionHeader>` call.**

---

## Layouts

### `stack` (default)
Vertical: eyebrow → title → description (with optional support row containing description + actions)

```jsx
<SectionHeader
  eyebrow="O método"
  title={<>Não é um curso...</>}
  description="A IA não é tendência..."
/>
```

### `split`
Title left, description (and optional CTAs) right. Stacks on mobile.

```jsx
<SectionHeader
  layout="split"
  eyebrow="A jornada"
  title="Cinco encontros."
  description="Cada encontro é uma estação..."
/>
```

---

## Alignments

```jsx
<SectionHeader align="start" />   {/* default */}
<SectionHeader align="center" />  {/* FAQ headers, closing CTAs */}
<SectionHeader align="end" />     {/* rare, but supported */}
```

When `align="center"`:
- Text is centered
- Title gets `margin-inline: auto` (no max-width spillover)
- Description centers itself
- Actions (if any) center

---

## Tones

```jsx
<SectionHeader tone="default" />  {/* on bege/cream backgrounds */}
<SectionHeader tone="dark" />     {/* on dark backgrounds */}
```

When `tone="dark"`, typography tones automatically resolve to:
- Eyebrow: `on-dark-soft` (or `eyebrowTone` override)
- Title: `on-dark`
- Description: `on-dark-soft`

You can override the eyebrow tone explicitly:

```jsx
{/* Closing CTA with accent eyebrow */}
<SectionHeader
  tone="dark"
  eyebrowTone="accent"
  eyebrow="Próximo passo"
  title="Pronto para orquestrar?"
/>
```

---

## With Actions Slot

Append CTAs inline with the header:

```jsx
<SectionHeader
  layout="split"
  eyebrow="Investimento"
  title="Uma decisão, cinco encontros."
  description="Programa completo · 1:1..."
  actions={
    <Button variant="primary" arrow>
      Agendar diagnóstico
    </Button>
  }
/>
```

Actions appear below description in stack layout, or in the right column in split layout.

---

## Heading Level Control

Default level is `2` (most common). Override for nested sections:

```jsx
{/* Top of page (rare — usually Display in Hero) */}
<SectionHeader level={1} {...} />

{/* Default */}
<SectionHeader level={2} {...} />

{/* Subsection */}
<SectionHeader level={3} {...} />

{/* Visual override (semantic h2, looks like h3) */}
<SectionHeader level={2} visualSize={3} {...} />
```

---

## Aria-Labelledby Pattern

Pass `id` and the title gets `id="{id}-title"`. Use it for `aria-labelledby` on the parent section:

```jsx
<section aria-labelledby="metodo-title">
  <SectionHeader
    id="metodo"
    eyebrow="O método"
    title="Não é um curso..."
  />
  {/* section content */}
</section>
```

---

## Don'ts

❌ **Don't** use SectionHeader for hero (use `<Hero>` organism instead)
❌ **Don't** put more than 2-3 SectionHeaders in same section (creates noise)
❌ **Don't** use `level={1}` more than once per page
❌ **Don't** combine inline `style={}` for typography (use tone prop)
❌ **Don't** wrap SectionHeader in another `.typo-stack` (already has spacing built in)

---

## Migration Map

### Pattern A: Plain section header
**Before (~5 lines × 9 instances = 45 lines):**
```jsx
<div className="typo-stack">
  <Eyebrow withDash>O método</Eyebrow>
  <Heading level={2}>Não é um curso...</Heading>
  <Lede>A IA não é tendência...</Lede>
</div>
```

**After (~5 lines × 9 instances = same... but self-documenting):**
```jsx
<SectionHeader
  eyebrow="O método"
  title={<>Não é um curso...</>}
  description="A IA não é tendência..."
/>
```

The win isn't line count — it's **semantic clarity** and **layout flexibility** (one prop changes from stack to split).

### Pattern B: Closing CTA section
**Before:**
```jsx
<Eyebrow withDash tone="accent">Próximo passo</Eyebrow>
<Display tone="on-dark">Pronto para <em>orquestrar</em>?</Display>
<Lede tone="on-dark-soft">O diagnóstico é gratuito.</Lede>
```

**After:**
```jsx
<SectionHeader
  align="center"
  tone="dark"
  eyebrowTone="accent"
  eyebrow="Próximo passo"
  title={<>Pronto para <em>orquestrar</em>?</>}
  description="O diagnóstico é gratuito."
/>
```

---

## Files

```
components/SectionHeader/
├── SectionHeader.jsx     # Component (~110 lines)
├── SectionHeader.css     # Styles (~120 lines)
├── SectionHeader.demo.html # Visual catalog
└── README.md             # This file
```

---

## Token Dependencies

```
Spacing:    --space-3, --space-6, --space-10, --space-12, --space-20

Layout:     (responsive at 1024px)

(Other styling delegated to Eyebrow, Heading, Lede atoms)
```

This component is mostly **layout glue** between atoms. Visual tokens come from Typography components.

---

## Layer Status

```
ATOMS ✅
─────
Button · Card · Faq · Typography · Form

MOLECULES (started)
──────────────
SectionHeader ✅ ← This component
FormGroup ⏳ (Form atoms + Button)
MediaCard ⏳ (Card + Image)

ORGANISMS (started)
──────────────
Hero ✅
NavBar ⏳
Footer ⏳
ContactForm ⏳ (FormGroup × N + submit Button)
```

**SectionHeader is the simplest molecule possible** — pure composition of 3 atoms with zero new state, zero new logic, just clear API. It's a textbook example of how molecules should work: **transform repetitive multi-atom patterns into named, reusable units.**
