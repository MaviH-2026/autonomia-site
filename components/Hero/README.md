# Hero

> **Organism** · AUTONOMIA Design System
> First organism: composes Display + Lede + Button + media slot.

---

## What This Is

A **Hero** is the top-of-page (or top-of-section) attention-grabber. It typically combines:

1. An eyebrow (small mono label)
2. A display headline
3. A descriptive lede paragraph
4. One or two CTAs
5. Optional media (image/video)

The component composes existing **atoms** (Eyebrow, Display, Lede, Button) into a coherent layout pattern. This is the first **organism** in the design system.

---

## Two API Styles

### 1. Prop-driven (concise)

For standard hero patterns, pass everything as props:

```jsx
<Hero
  eyebrow="Mentoria executiva · 2026"
  title={<>Forme-se como o <em>líder orquestrador</em></>}
  description="Não é um curso. É uma travessia..."
  primaryAction={{ label: 'Agendar diagnóstico', href: '#diag', arrow: true }}
  secondaryAction={{ label: 'Ver método', href: '#metodo', play: true }}
  media={
    <HeroPortrait
      src="igor.png"
      alt="Igor Drews"
      caption={{ name: 'Igor Drews', role: 'Estrategista de IA' }}
      action={{ label: 'Trailer · 2:14', play: true }}
    />
  }
/>
```

### 2. Composition (children)

For custom layouts, use sub-components:

```jsx
<Hero layout="split" tone="dark">
  <Hero.Body>
    <Eyebrow tone="on-dark-soft">Mentoria executiva</Eyebrow>
    <Display tone="on-dark">Forme-se como o <em>líder</em></Display>
    <Lede tone="on-dark-soft">Não é um curso...</Lede>
    <Hero.Actions>
      <Button variant="accent" arrow>Agendar</Button>
      <Button variant="secondary" onDark>Ver método</Button>
    </Hero.Actions>
  </Hero.Body>
  <Hero.Media>
    <HeroPortrait src="igor.png" alt="..." caption={{ name: 'Igor' }} />
  </Hero.Media>
</Hero>
```

**Children take priority** if both are provided. Use composition when you need anything beyond the standard pattern.

---

## Layouts

| Layout | Use case |
|--------|----------|
| `split` (default) | Content left + media right · stacks on mobile |
| `centered` | Single column, centered, max 56ch · for closing CTAs, intros without media |
| `stacked` | Content top, full-width media below · for case studies, product pages |

```jsx
<Hero layout="split" />     {/* default */}
<Hero layout="centered" />  {/* no media slot */}
<Hero layout="stacked" />   {/* media below content */}
```

---

## Tones

| Tone | Visual | Auto-applies |
|------|--------|--------------|
| `default` | Bege background | Eyebrow=secondary, Display=default, Lede=secondary |
| `dark` | Dark background, full-bleed | Eyebrow=on-dark-soft, Display=on-dark, Lede=on-dark-soft |

**Tone propagates to typography automatically** in prop-driven mode. In composition mode, set tones manually on each component.

---

## Common Patterns

### Hero with portrait media (variation-a)
```jsx
<Hero
  eyebrow="Mentoria executiva · 2026"
  title={<>Forme-se como o<br /><em>líder orquestrador</em></>}
  description="Não é um curso..."
  primaryAction={{
    label: 'Agendar diagnóstico gratuito',
    href: '#diag',
    arrow: true
  }}
  secondaryAction={{
    label: 'Ver o método',
    href: '#metodo',
    play: true
  }}
  media={
    <HeroPortrait
      src="igor-stage.png"
      alt="Igor Drews em sessão de mentoria executiva"
      caption={{
        name: 'Igor Drews',
        role: 'Estrategista de IA · Mentor'
      }}
      action={{
        label: 'Trailer · 2:14',
        play: true,
        ariaLabel: 'Assistir trailer da mentoria, duração 2 minutos e 14 segundos'
      }}
    />
  }
/>
```

### Closing CTA (centered, dark)
```jsx
<Hero
  layout="centered"
  tone="dark"
  eyebrow="Próximo passo"
  title={<>Pronto para <em>orquestrar</em> a próxima era?</>}
  description="O diagnóstico é gratuito. A clareza, sua."
  primaryAction={{
    label: 'Agendar diagnóstico',
    href: '/diag',
    variant: 'accent',
    size: 'lg',
    arrow: true
  }}
  secondaryAction={{
    label: 'Ver o método',
    href: '#metodo',
    onDark: true,
    size: 'lg'
  }}
/>
```

### Intro hero without media
```jsx
<Hero
  layout="centered"
  eyebrow="Sobre"
  title={<>Trinta anos dentro das <em>ondas</em></>}
  description="Há mais de três décadas eu vivo dentro das ondas de transformação."
  primaryAction={{ label: 'Conhecer Igor', href: '#bio', size: 'lg' }}
/>
```

---

## HeroPortrait — Media Sub-Component

Encapsulates the common pattern of an image with overlay caption + optional play button.

```jsx
<HeroPortrait
  src="/path/to/image.jpg"
  alt="Descriptive alt text (required)"
  aspectRatio="4/5"           // default. Try '16/9', '1/1', '3/4'

  caption={{
    name: 'Igor Drews',        // bold display italic
    role: 'Estrategista de IA' // mono uppercase
  }}

  action={{
    label: 'Trailer · 2:14',
    play: true,                // shows play pill
    href: '#video',            // or onClick: () => {}
    ariaLabel: 'Full description for screen readers'
  }}
/>
```

**Visual features:**
- Bottom gradient overlay for caption legibility
- Caption fades from accent to black
- Play button positioned bottom-right
- Image filtered: `contrast(1.05) brightness(0.95) saturate(0.9)` for editorial feel

---

## Accessibility

| Feature | WCAG | Status |
|---------|------|--------|
| Real `<header>` landmark | 1.3.1 | ✅ |
| Single `<h1>` (Display renders h1) | 1.3.1 | ✅ |
| Image alt required | 1.1.1 | ✅ |
| Decorative SVGs aria-hidden | 1.1.1 | ✅ |
| aria-label on icon-only buttons | 4.1.2 | ✅ |
| Color contrast (typography tones aware) | 1.4.3 | ✅ |
| Touch targets ≥44px (via Button) | 2.5.5 | ✅ |
| Focus-visible on all interactive | 2.4.7 | ✅ |
| Mobile-first responsive | 1.4.10 | ✅ |

**Score: 9/9 ✅**

---

## Don'ts

❌ **Don't** use multiple `<Hero>` per page (the `<h1>` should be unique)
❌ **Don't** put body text inside Hero (it's not a content block — keep it focused)
❌ **Don't** use `tone="dark"` on `bg-page` sections (creates jarring transition)
❌ **Don't** override Display level (Hero is always page-top, deserves h1)
❌ **Don't** mix prop-driven and composition for same Hero (pick one)

---

## Migration from `.a-hero`

### Before (variation-a-v3.jsx, ~30 lines)
```jsx
<header className="a-hero">
  <div className="a-hero-left">
    <div className="lockup">
      <Eyebrow tone="secondary">Mentoria executiva · 2026</Eyebrow>
    </div>
    <Display>Forme-se como o<br /><em>líder orquestrador</em><br />da era da IA.</Display>
    <Lede>Não é um curso. É uma travessia...</Lede>
    <div className="a-hero-ctas">
      <Button as="a" href="#diag" variant="primary" arrow>Agendar diagnóstico gratuito</Button>
      <Button as="a" href="#metodo" variant="secondary" play>Ver o método</Button>
    </div>
  </div>
  <div className="a-hero-right">
    <img src={STAGE} alt="Igor Drews em sessão de mentoria executiva" className="a-hero-portrait" />
    <div className="a-hero-overlay">
      <div className="name">Igor Drews</div>
      <div className="role">Estrategista de IA · Mentor</div>
    </div>
    <div className="a-hero-play">
      <Button variant="secondary" play aria-label="Assistir trailer">Trailer · 2:14</Button>
    </div>
  </div>
</header>
```

### After (Hero organism, ~16 lines)
```jsx
<Hero
  eyebrow="Mentoria executiva · 2026"
  title={<>Forme-se como o<br /><em>líder orquestrador</em><br />da era da IA.</>}
  description="Não é um curso. É uma travessia. Cinco encontros 1:1..."
  primaryAction={{
    label: 'Agendar diagnóstico gratuito',
    href: '#diag',
    arrow: true
  }}
  secondaryAction={{
    label: 'Ver o método',
    href: '#metodo',
    play: true
  }}
  media={
    <HeroPortrait
      src={STAGE}
      alt="Igor Drews em sessão de mentoria executiva"
      caption={{ name: 'Igor Drews', role: 'Estrategista de IA · Mentor' }}
      action={{
        label: 'Trailer · 2:14',
        play: true,
        ariaLabel: 'Assistir trailer da mentoria, duração 2 minutos e 14 segundos'
      }}
    />
  }
/>
```

**~50% less markup. Self-documenting. Layout-agnostic (use `layout` prop to change).**

CSS savings: removes `.a-hero`, `.a-hero-left`, `.a-hero-left .lockup`, `.a-hero-right`, `.a-hero-portrait`, `.a-hero-overlay`, `.a-hero-overlay .name`, `.a-hero-overlay .role`, `.a-hero-play`, `.a-hero-ctas` from `styles-variation-a-v3.css` (~80 lines of CSS).

---

## Files

```
components/Hero/
├── Hero.jsx          # Component + 4 sub-components (~225 lines)
├── Hero.css          # Styles (~170 lines)
├── Hero.demo.html    # Visual catalog with 3 layouts × 2 tones
└── README.md         # This file
```

---

## Token Dependencies

```
Colors:    --color-bg-page, --color-bg-dark, --color-text-on-dark,
           --color-text-primary, --on-dark-70, --overlay-dark,
           --color-accent, --color-accent-hover

Typography: --font-display, --font-mono,
            --fs-display, --fs-h3, --fs-h4, --fs-mono,
            --lh-heading, --ls-heading, --ls-mono

Spacing:   --space-1, --space-3, --space-5, --space-6, --space-7, --space-8,
           --space-9, --space-10, --space-12, --space-16, --space-20

Layout:    --container-default, --container-wide, --section-pad-x,
           --section-pad-y-lg

Radii:     --radius-xl

Z-index:   --z-content, --z-overlay
```

---

## Layer Status

```
ATOM LAYER ✅
─────────
Button · Card · Faq · Typography · Form

ORGANISM LAYER (in progress)
─────────────
Hero ✅ ← This component
NavBar ⏳
Footer ⏳
Section ⏳ (next?)
ContactForm ⏳ (composes Form atoms)
```

**Hero is the proof-of-concept** for the organism layer. It demonstrates how atoms compose into reusable, layout-aware patterns. Future organisms (NavBar, Footer, ContactForm) follow the same pattern.
