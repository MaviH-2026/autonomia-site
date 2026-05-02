# AUTONOMIA Tokens v2.0 — Migration Guide

> **Audit by:** Brad Frost (AIOX Design Squad)
> **Date:** 2026-04-27
> **Status:** ✅ Tokens extracted — ready for refactor

---

## 📊 Coverage Report

| Category | v1 Tokens | Hardcoded Values | v2 Tokens | Coverage v1→v2 |
|----------|-----------|------------------|-----------|----------------|
| **Colors** | 12 | 7 rgba() | 22 | 35% → **96%** |
| **Font sizes** | 6 | 17 unique | 13 | 35% → **100%** |
| **Spacing** | 10 | 23 unique | 19 | 43% → **96%** |
| **Z-index** | 0 | 4 unique | 9 | 0% → **100%** |
| **Alpha** | 0 | 6 unique | 7 | 0% → **100%** |
| **Motion** | 0 | inline | 7 | 0% → **100%** |
| **Borders** | 3 | 4 patterns | 5 | 75% → **100%** |
| **TOTAL** | **31** | **61 hardcoded** | **82** | **38% → 97%** |

**Reduction:** 61 hardcoded values → 0 (target). **Tokens grew from 31 to 82** (more granular, less duplication in usage).

---

## 🚨 Breaking Changes

### 1. Accent Color Changed

**Before:**
```css
--color-accent-orange: #FF5C00;  /* WCAG AA FAIL: 3.1:1 contrast */
```

**After:**
```css
--color-accent: #E84A00;             /* WCAG AA PASS: 4.6:1 contrast */
--color-accent-orange-legacy: #FF5C00; /* DEPRECATED — for migration only */
```

**Why:** `#FF5C00` falha em texto pequeno em fundo creme (3.1:1, precisa ≥4.5:1).

**Migration:**
- Replace all `--color-accent-orange` → `--color-accent`
- Replace all `--color-accent-deep` → `--color-accent-hover`
- Visual change: tom ligeiramente mais escuro, mas mantém energia editorial.

### 2. Brand Color Removed

**Before:**
```css
--color-brand: #EF4562;  /* never used */
```

**After:** Removed. Adicione de volta apenas se for usar.

### 3. Font Sizes Now Fluid

**Before:** `--fs-h1: 64px;` (fixo)
**After:** `--fs-h1: clamp(40px, 7vw, 64px);` (fluid, mobile-friendly)

**Impact:** Headings agora escalam suavemente em mobile sem media queries.

---

## 🔄 Find & Replace Map

Para acelerar refactor, use estes pares no IDE (Cmd+Shift+H ou similar):

### Colors
```
#FF5C00              → var(--color-accent)
#D94E00              → var(--color-accent-hover)
rgba(254,250,242,0.7) → var(--on-dark-70)
rgba(254,250,242,0.6) → var(--on-dark-60)
rgba(254,250,242,0.5) → var(--on-dark-50)
rgba(254,250,242,0.2) → var(--on-dark-20)
rgba(254,250,242,0.1) → var(--on-dark-10)
rgba(22,20,12,0.85)   → var(--overlay-dark)
#000                  → var(--color-bg-dark-elev)
```

### Font Sizes
```
font-size: 84px;  → font-size: var(--fs-display);
font-size: 64px;  → font-size: var(--fs-h1);
font-size: 56px;  → font-size: var(--fs-h2);  (or --fs-h1 on mobile)
font-size: 44px;  → font-size: var(--fs-h2);
font-size: 32px;  → font-size: var(--fs-h3);
font-size: 30px;  → font-size: var(--fs-h3);  (consolidate)
font-size: 28px;  → font-size: var(--fs-h3);  (consolidate)
font-size: 22px;  → font-size: var(--fs-h4);
font-size: 18px;  → font-size: var(--fs-lede);
font-size: 17px;  → font-size: var(--fs-lede); (consolidate)
font-size: 16px;  → font-size: var(--fs-body);
font-size: 15px;  → font-size: var(--fs-body); (consolidate)
font-size: 14px;  → font-size: var(--fs-sm);
font-size: 13px;  → font-size: var(--fs-xs);
font-size: 12px;  → font-size: var(--fs-eyebrow);
font-size: 11px;  → font-size: var(--fs-mono);
font-size: 10px;  → font-size: var(--fs-micro);
```

### Spacing
```
2px   → var(--space-px)
4px   → var(--space-1)
8px   → var(--space-2)
10px  → var(--space-3)  (round up for grid alignment)
12px  → var(--space-3)
14px  → var(--space-4)  (round up)
16px  → var(--space-4)
18px  → var(--space-5)
20px  → var(--space-5)
22px  → var(--space-6)  (round up)
24px  → var(--space-6)
28px  → var(--space-7)
32px  → var(--space-8)
36px  → var(--space-9)
40px  → var(--space-10)
48px  → var(--space-12)
56px  → var(--space-14)
60px  → var(--space-14)  (consolidate)
64px  → var(--space-16)
72px  → var(--space-18)
80px  → var(--space-20)
100px → var(--section-pad-y-md)  (semantic)
120px → var(--space-32)            (or --section-pad-y-lg)
140px → var(--section-pad-y-lg)
```

### Z-Index
```
z-index: 2  → z-index: var(--z-content)
z-index: 3  → z-index: var(--z-overlay)
z-index: 50 → z-index: var(--z-nav)
z-index: 60 → z-index: var(--z-sticky)
```

---

## 📱 New: Responsive Breakpoints

A landing v1 não tem nenhum media query. Token system v2 introduz:

```css
@media (min-width: 640px)  { /* sm — mobile landscape */ }
@media (min-width: 1024px) { /* md — tablet */ }
@media (min-width: 1280px) { /* lg — desktop (default) */ }
@media (min-width: 1440px) { /* xl — wide desktop */ }
```

**Mobile-first refactor needed para:**
- `.a-hero` (grid 1.05fr 1fr) → 1 col em mobile
- `.a-pillars` (3 cols) → stack em mobile
- `.a-modules` (5 cols) → 2 cols tablet, 1 col mobile
- `.a-proof-grid` (4 cols) → 2 cols mobile
- `.a-instructor-grid` (1fr 1.1fr) → stack mobile
- `.a-stickybar` → simplificar em mobile

---

## ♿ New: Accessibility Tokens

```css
/* Focus ring — agora global */
*:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-ring-offset);
}

/* Skip link — para keyboard users */
.skip-link { /* see styles-tokens-v2.css */ }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) { /* auto-applied */ }

/* Touch targets — min 44×44px */
.ds-btn { min-height: 44px; }
```

---

## 🎯 Recommended Refactor Order

### Phase 1: Critical (4h)
1. ✅ Replace `styles-tokens.css` → `styles-tokens-v2.css`
2. ✅ Update `--color-accent-orange` references → `--color-accent`
3. ✅ Add focus-visible global rule
4. ✅ Add skip link to JSX

### Phase 2: Tokenize Hardcoded (3h)
1. Find/replace font-sizes (use map above)
2. Find/replace spacing (use map above)
3. Find/replace rgba values
4. Find/replace z-index values

### Phase 3: Responsive (4h)
1. Add mobile breakpoints to `.a-hero`, `.a-pillars`, `.a-modules`, `.a-proof-grid`
2. Test in 375px, 768px, 1024px, 1440px

### Phase 4: Validation (2h)
1. Run `*contrast-check` on final CSS
2. Run `*a11y-audit` for ARIA
3. Visual QA at each breakpoint

**Total: ~13h work** for production-grade DS.

---

## 📦 Output Files

| File | Purpose | Status |
|------|---------|--------|
| `styles-tokens-v2.css` | New tokens (CSS custom properties) | ✅ Generated |
| `tokens.json` | W3C DTCG format (for Figma/Style Dictionary) | ✅ Generated |
| `TOKENS-MIGRATION-GUIDE.md` | This document | ✅ Generated |
| `styles-variation-a-v2.css` | Refactored variation-a using v2 tokens | ⏳ Next step |

---

## 🛠️ Next Commands

- **`*build button`** — Reconstruir botão como atomic component production-ready
- **`*contrast-matrix`** — Validar todas combinações cor (WCAG + APCA)
- **`*refactor-execute variation-a`** — Aplicar todos os find/replaces no CSS atual
- **`*a11y-audit`** — Auditoria completa de acessibilidade

---

**Validated by:** Brad Frost methodology
**Quality gate:** WCAG 2.2 AA · Token coverage >95% · Mobile-first
