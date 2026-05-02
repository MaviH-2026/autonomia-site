# Brief de Revisão — Design System AUTONOMIA

## 🎯 Contexto

**Projeto:** Landing page para mentoria executiva "AutonomIA"  
**Responsável:** Igor Drews  
**Tipo:** B2B High-Touch Mentorship Program  
**Status Atual:** Design implementado, pronto para refinamento

---

## 📋 O que está pronto

### Paleta de Cores
```
Superfícies:  #E4D5C3 (bege) → #F9EFE3 (creme) → #FEFAF2 (off-white)
Texto:        #16140C (preto quente)
Acento:       #FF5C00 (laranja-neon) — CTAs apenas
Marca:        #EF4562 (rosa) — não usado atualmente
AI:           #6522F2 (roxo)
```

### Tipografia
- **Display:** Fraunces (serifa editorial condensada)
- **Headings:** Inter (sans humanista)
- **Body:** Inter 16px / 1.5 line-height
- **Mono:** JetBrains Mono (eyebrows técnicos)

### Componentes Implementados
1. **Navbar** — Logo + navegação + CTA primária
2. **Hero** — Headline editorial + imagem hero
3. **Módulos** (5 items) — Sessões numeradas com duração
4. **Stats** (4 items) — Métricas de credibilidade
5. **FAQ** — Accordion com 5 perguntas
6. **Footer** — Links + contato

---

## 🔍 Questões para Revisão

### 1. Harmonia de Cor
- ✅ Paleta editorial funciona bem em geral
- ❓ Laranja-neon (#FF5C00) se sobressai muito? Testar contraste em fundo creme
- ❓ Rosa (#EF4562) não aparece na página — necessária ou remover?
- ❓ Roxo (#6522F2) para "AI" — onde deve aparecer? É marca ou decoração?

### 2. Tipografia
- ✅ Fraunces para h1/hero é sofisticado
- ❓ Inter em 16px é ótimo, mas mobile fica legível? Testar 14px em sm
- ❓ JetBrains Mono em eyebrows é muito técnico? Considerar Inter Mono?
- ❓ Line-height 1.5 é bom, mas em headings pode ser aperto?

### 3. Componentes Faltando
- ❌ **Button states** — Hover, active, disabled
- ❌ **Badges** — Para status ("Vagas limitadas", "Gratuito")
- ❌ **Social proof** — Avatars, testimonials (se aplicável)
- ❌ **Form elements** — Input, textarea, select
- ❌ **Feedback** — Toast, alerts, validation messages
- ❌ **Loading** — Skeleton, spinners

### 4. Responsividade
- ❓ Mobile breakpoints? (não encontrado no CSS)
- ❓ Imagens (igor.png, stage) são responsivas?
- ❓ FAQs funcionam bem em mobile?
- ❓ Touch targets ≥48px em botões?

### 5. Acessibilidade
- ❓ Contraste laranja (#FF5C00) em fundo creme (#F9EFE3) = 4.2:1?
- ❓ Focus states visíveis em links?
- ❓ HTML semântico (header, nav, main, footer)?
- ❓ Alt text em imagens? (igor.png)
- ❓ ARIA labels em accordion?

### 6. Performance
- ❓ Fraunces, Inter, JetBrains carregam de font API?
- ❓ Subsetting de fontes? (remover pesos não usados)
- ❓ Imagens otimizadas? (PNG → WebP?)
- ❓ CSS minificado?

---

## 🎨 Sugestões Preliminares

### A Considerar
1. **Simplificar paleta** — Remover rosa se não for usada
2. **Expandir componentes** — Criar sistema de botões (primary, secondary, outline)
3. **Breakpoints claros** — 375px, 768px, 1024px, 1440px
4. **Focus states** — Fundamental para acessibilidade
5. **Variações de estado** — Hover, active, disabled, loading para todos os componentes

### Oportunidades Rápidas
- [ ] Adicionar sombra sutil (apenas em elevação de superfícies)
- [ ] Criar sistema de espaçamento consistente
- [ ] Documentar tokens de forma visual (Figma/Storybook)
- [ ] Testar em navegadores antigos

---

## 📂 Arquivos para Revisão

```
docs/projects/autonomia-landing/
├── variation-a.jsx                      [React component]
├── variation-b.jsx                      [Alternative variant]
├── design-canvas.jsx                    [Design canvas]
├── site/
│   ├── styles-tokens.css               [Bem estruturado!]
│   ├── styles-variation-a.css          [Precisa revisar]
│   ├── AUTONOM.IA - Homepage.html      [Mockup]
│   └── *.png                           [Imagens]
├── uploads/
│   ├── Design_System_-_AutonomIA.md    [RTF → converter]
│   └── screenshots/
└── _check/
    └── previews/                        [Screenshots de QA]
```

---

## ✅ Próximas Ações

1. **@ux-design-expert** — Auditoria visual + acessibilidade
2. **@dev** — Implementar melhorias sugeridas
3. **@qa** — Testar em múltiplos dispositivos + browsers

---

**Criado:** 27 abr 2026  
**Responsável:** Design Squad
