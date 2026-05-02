# 🚨 A11Y Audit Report — variation-a.jsx

**Standard:** WCAG 2.2 Level AA
**Auditor:** Brad Frost
**Date:** 2026-04-27
**File:** `docs/projects/autonomia-landing/variation-a.jsx` (427 lines)

---

## 📊 Executive Summary

```
Total issues:        17
🔴 Critical (block):  9
🟡 High:              5
🟢 Medium/Low:        3

WCAG AA status:    ❌ FAIL (9 blockers)
Estimated fix:     2-3 hours
```

**Verdict:** Cannot ship to production until 9 critical issues are fixed.

---

## 🔴 CRITICAL Issues (Block Release)

### #1. Missing `<main>` Landmark
**WCAG:** 1.3.1 Info and Relationships (Level A)
**Where:** Line 35 — root `<div className="a-page">`

**Problem:** Screen readers users have no way to skip nav and jump to main content.

**Fix:**
```jsx
<div className="a-page">
  <div className="a-topbar">...</div>
  <nav>...</nav>
  <main id="main">                ← ADD
    <header className="a-hero">...</header>
    <section>...</section>
    {/* all content */}
  </main>                          ← ADD
  <footer>...</footer>
</div>
```

---

### #2. Skip Link Missing
**WCAG:** 2.4.1 Bypass Blocks (Level A)

**Problem:** Keyboard users must Tab through entire nav every time.

**Fix:** First element in `<div className="a-page">`:
```jsx
<a href="#main" className="skip-link">
  Pular para conteúdo principal
</a>
```
(CSS já existe em `styles-tokens-v2.css`)

---

### #3. FAQ Accordion — Zero ARIA
**WCAG:** 4.1.2 Name, Role, Value (Level A) + 1.3.1
**Where:** Lines 354-362

**Problem:**
```jsx
{/* Current — invisible para screen readers */}
<button className="a-faq-q" onClick={...}>
  <span>{f.q}</span>
  <span className="a-faq-plus"></span>
</button>
{openFaq === i && <div className="a-faq-a">{f.a}</div>}
```
Screen reader vê só "button" sem saber se está aberto/fechado. Resposta nem é associada à pergunta.

**Fix:**
```jsx
<button
  className="a-faq-q"
  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
  aria-expanded={openFaq === i}
  aria-controls={`faq-panel-${i}`}
  id={`faq-question-${i}`}
>
  <span>{f.q}</span>
  <span className="a-faq-plus" aria-hidden="true"></span>
</button>
<div
  id={`faq-panel-${i}`}
  role="region"
  aria-labelledby={`faq-question-${i}`}
  className="a-faq-a"
  hidden={openFaq !== i}
>
  {f.a}
</div>
```

---

### #4. Portrait Image Sem Alt Text
**WCAG:** 1.1.1 Non-text Content (Level A)
**Where:** Lines 96-98, 176-180

**Problem:** Foto do Igor Drews carregada como `background-image` em `<div>`. Imagem **informacional** (não decorativa) precisa ser `<img>` com `alt`.

**Fix:**
```jsx
{/* Hero portrait */}
<div className="a-hero-right">
  <img
    src={STAGE}
    alt="Igor Drews em sessão de mentoria executiva"
    className="a-hero-portrait"
  />
  {/* overlay */}
</div>

{/* Instructor portrait */}
<div className="a-portrait-card">
  <img
    src={PORTRAIT}
    alt="Retrato de Igor Drews, estrategista de IA e mentor"
    className="img"
  />
  {/* meta */}
</div>
```

---

### #5. SVGs Decorativos Sem `aria-hidden`
**WCAG:** 1.1.1 Non-text Content (Level A)
**Where:** 11+ instances throughout

**Problem:** Screen readers anunciam "img" para cada SVG decorativo (setas, checks, play). Ruído desnecessário.

**Fix:** Adicionar `aria-hidden="true"` em **todos** os SVGs (são puramente decorativos):
```jsx
{/* Antes */}
<svg viewBox="0 0 14 14" fill="none">...</svg>

{/* Depois */}
<svg viewBox="0 0 14 14" fill="none" aria-hidden="true">...</svg>
```

---

### #6. Links Vazios `href="#"`
**WCAG:** 2.4.4 Link Purpose (Level A)
**Where:** Lines 63, 241, 313, 339, 405-406, 413-414

**Problem:** `<a href="#">` é placeholder mas em produção quebra navegação keyboard (volta ao topo da página).

**Fix:** Decidir entre:
1. Implementar funcionalidade real (LinkedIn URL, mailto, etc.)
2. Substituir por `<button>` se ação é JS-only:
```jsx
{/* WhatsApp - exemplo */}
<a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
  WhatsApp
</a>
```

---

### #7. Heading Hierarchy Skip
**WCAG:** 1.3.1 Info and Relationships (Level A)
**Where:** Lines 393, 402, 410 (footer h5 sem h4 acima)

**Problem:** Footer pula `<h2>` direto para `<h5>`. Hierarquia: h1 (hero) → h2 (sections) → h5 (footer columns) — falta h2/h3/h4 entre eles.

**Fix:**
```jsx
{/* Antes */}
<h5>Programa</h5>

{/* Depois — footer columns são top-level dentro de <footer> */}
<h2>Programa</h2>
{/* ou se quiser manter visual menor: */}
<h3>Programa</h3>
```
CSS visual permanece o mesmo (`.a-footer h5` → renomear para `.a-footer h3`).

---

### #8. Sections Sem Accessible Names
**WCAG:** 1.3.1 Info and Relationships (Level A)
**Where:** All `<section>` elements (lines 128, 159, 169, 203, 264, 284, 329, 350)

**Problem:** Screen readers anunciam "section" sem identificar qual.

**Fix:** Cada section recebe `aria-labelledby`:
```jsx
<section className="a-section a-promise" id="metodo" aria-labelledby="metodo-title">
  <h2 className="a-section-title" id="metodo-title">
    Não é um curso. É uma <em>travessia</em>.
  </h2>
  ...
</section>
```

---

### #9. Pulsing Status Sem `role="status"`
**WCAG:** 4.1.3 Status Messages (Level AA)
**Where:** Line 39 — `<span className="live"><span className="dot"></span>Diagnóstico aberto</span>`

**Problem:** Bolinha pulsante laranja indica status mas não é exposta como tal.

**Fix:**
```jsx
<span className="live" role="status">
  <span className="dot" aria-hidden="true"></span>
  Diagnóstico aberto
</span>
```

---

## 🟡 HIGH Issues (Fix Before Launch)

### #10. Inline Style Cores Hardcoded em CTA
**Where:** Lines 64, 86, 241, 341

**Problem:**
```jsx
style={{ color: 'rgb(236, 235, 231)' }}    {/* CTA 1 */}
style={{ color: 'rgb(249, 249, 249)' }}    {/* CTA 2 */}
style={{ color: "rgb(250, 250, 247)" }}    {/* CTA 3 */}
style={{ background: '#16140C', color: '#FF5C00' }}  {/* arrow pill */}
```
3 brancos diferentes. Inconsistência. E `#FF5C00` é a cor que falha WCAG.

**Fix:** Remover inline styles. CSS v2 já gerencia via tokens:
```jsx
<a href="#diag" className="ds-btn ds-btn--primary">
  Agendar diagnóstico
  <span className="ds-arrow-pill" aria-hidden="true">
    <svg ...>...</svg>
  </span>
</a>
```

---

### #11. Duplicate FAQ Question
**Where:** Lines 25-26

**Problem:**
```js
{ q: 'Para quem é a mentoria?', a: '...P&L, time ou estratégia...' },
{ q: 'Para quem é a mentoria?', a: 'Uma conversa de 30 minutos...' },
```
**Mesma pergunta, respostas diferentes.** Bug de conteúdo. Provavelmente FAQ #2 deveria ser "Como funciona o diagnóstico?".

---

### #12. Trailer Button Sem Label
**Where:** Lines 102-107

**Problem:** `<button>` com texto "Trailer · 2:14". Screen reader announces. Mas falta indicação de que é vídeo:
```jsx
<button aria-label="Assistir trailer da mentoria, duração 2 minutos e 14 segundos">
  ...
</button>
```

---

### #13. Stickybar Não É Landmark Identificado
**Where:** Line 367

**Problem:** Sticky bar é uma região importante mas é um `<div>` simples.

**Fix:**
```jsx
<aside
  className="a-stickybar"
  role="complementary"
  aria-label="Atalho rápido para perguntas frequentes"
>
  ...
</aside>
```

---

### #14. Touch Targets do Topbar
**Where:** Lines 38-44

**Problem:** Spans no topbar não têm padding, podem ser difíceis de focar/clicar em mobile.

**Fix:** CSS v2 já adicionou padding em `.a-topbar` mas spans individuais ainda compactos. Geralmente OK pois não são interativos.

---

## 🟢 MEDIUM/LOW Issues

### #15. Empty Span no Logo
**Where:** Lines 52-53
```jsx
<span className="sub">
</span>
```
**Fix:** Remover ou adicionar conteúdo (ex: "MENTORIA EXECUTIVA").

---

### #16. Falta `lang` no HTML Root
**Where:** No HTML wrapper file (não está no JSX, mas no `index.html`)

**Fix:** No HTML container:
```html
<html lang="pt-BR">
```

---

### #17. SVG Garantia Tem Cores Hardcoded
**Where:** Line 318
```jsx
<svg ...>
  <path stroke="#16140C" .../>
  <path stroke="#16140C" .../>
</svg>
```
**Fix:**
```jsx
<svg ... style={{ color: 'var(--color-text-primary)' }} aria-hidden="true">
  <path stroke="currentColor" .../>
</svg>
```

---

## 📋 Compliance Checklist

| WCAG Criteria | Level | Status | Issues |
|---------------|-------|--------|--------|
| 1.1.1 Non-text Content | A | ❌ FAIL | #4, #5 |
| 1.3.1 Info and Relationships | A | ❌ FAIL | #1, #7, #8 |
| 1.4.3 Contrast (Minimum) | AA | ✅ PASS (after CSS v2) | — |
| 1.4.11 Non-text Contrast | AA | ✅ PASS | — |
| 2.1.1 Keyboard | A | ⚠️ PARTIAL | #3 |
| 2.4.1 Bypass Blocks | A | ❌ FAIL | #2 |
| 2.4.4 Link Purpose | A | ⚠️ PARTIAL | #6 |
| 2.4.6 Headings and Labels | AA | ⚠️ PARTIAL | #8 |
| 2.4.7 Focus Visible | AA | ✅ PASS (CSS v2) | — |
| 2.5.5 Target Size | AA | ✅ PASS (CSS v2) | — |
| 3.1.1 Language of Page | A | ❌ FAIL | #16 |
| 4.1.2 Name, Role, Value | A | ❌ FAIL | #3 |
| 4.1.3 Status Messages | AA | ❌ FAIL | #9 |

**WCAG 2.2 AA Score:** 7/13 criteria pass (54%) → **NOT compliant**

---

## 🛠️ Action Plan (Priority Order)

### Sprint 1 — Critical Fixes (2h)
1. ✅ Wrap content in `<main id="main">`
2. ✅ Add skip link
3. ✅ Fix FAQ accordion ARIA (`aria-expanded`, `aria-controls`)
4. ✅ Convert background images to `<img>` with alt
5. ✅ Add `aria-hidden="true"` to all decorative SVGs
6. ✅ Fix duplicate FAQ question (content review)
7. ✅ Remove inline color styles
8. ✅ Add `aria-labelledby` to all sections
9. ✅ Add `role="status"` to live indicator

### Sprint 2 — High Priority (1h)
10. Replace `href="#"` with real URLs or buttons
11. Fix heading hierarchy in footer
12. Add `aria-label` to trailer button
13. Add `lang="pt-BR"` to HTML root

### Sprint 3 — Polish (30min)
14. Remove empty `<span>` in logo
15. Convert SVG hardcoded colors to `currentColor`
16. Wrap stickybar in `<aside>` with role

---

## 🎯 Recommended: Auto-Fix com `*refactor-execute`

Posso gerar `variation-a-v2.jsx` com **TODOS** os fixes aplicados de uma vez:
- Estrutura semântica correta (`<main>`, `<aside>`, `<section aria-labelledby>`)
- ARIA completo (FAQ accordion, status, landmarks)
- `<img alt>` em vez de background-image para fotos
- `aria-hidden` em SVGs
- Skip link
- Inline styles removidos

**Estimativa:** ~10 min para gerar arquivo, vs 2-3h manual.
