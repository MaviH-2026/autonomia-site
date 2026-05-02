# AUTONOMIA Landing Page — Design System Review

**Data:** 27 de abril de 2026  
**Projeto:** Mentoria Executiva AutonomIA  
**Status:** 🟡 Review em andamento

---

## 📊 Visão Geral Atual

### Paleta de Cores
- **Superfícies:** Bege (#E4D5C3) → Creme (#F9EFE3) → Off-white (#FEFAF2)
- **Texto:** Preto quente (#16140C) com variações de cinza
- **Acento:** Laranja-neon (#FF5C00) para CTAs
- **Marca:** Rosa (#EF4562)
- **AI:** Roxo (#6522F2)

✅ **Força:** Paleta editorial sofisticada, coerente
⚠️ **Oportunidade:** Laranja-neon pode ser refinado para melhor legibilidade em fundo creme

### Tipografia
- **Display:** Fraunces (serifa editorial)
- **Heading:** Inter (sans humanista)
- **Body:** Inter 16px
- **Mono:** JetBrains Mono (eyebrows técnicos)

✅ **Força:** Hierarquia clara, legível
⚠️ **Oportunidade:** Testar tamanhos em mobile; Inter é excelente mas verificar contraste

### Componentes
- Navbar com logo + links + CTA primária
- Hero com headline editorial + imagem Igor
- Seção módulos (5 itens numerados com duração)
- Seção stats (4 métricas)
- FAQ com accordion
- Footer

✅ **Força:** Estrutura lógica, progressão clara
⚠️ **Oportunidade:** Falta componentes de suporte (badges, avatars, social proof cards)

---

## 🔍 Análise Detalhada

### 1. Variações
- **Variation A:** Bege + laranja-neon (fidel ao MasterClass)
- **Variation B:** Alternativa a explorar
- **Canvas:** Design tool mockup

📋 **Verificar:** CSS completo, responsividade, acessibilidade

### 2. Estrutura de Arquivos

```
masterclass/
├── variation-a.jsx           ✅ Componente React
├── variation-b.jsx           ✅ Alternativa
├── design-canvas.jsx         ✅ Canvas editável
├── site/
│   ├── styles-tokens.css     ✅ Tokens bem estruturados
│   ├── styles-variation-a.css ⚠️ Precisa revisar
│   ├── AUTONOM.IA - Homepage.html
│   └── igor.png, igor-stage.png
├── uploads/
│   ├── Design_System_-_AutonomIA.md (RTF) ⚠️ Converter
│   └── Screenshots de referência
└── _check/
    └── Previews/screenshots
```

---

## 🎯 Itens para Melhorar

### 1. **Design System Documentation**
- [ ] Converter RTF → Markdown puro
- [ ] Adicionar exemplos visuais dos tokens
- [ ] Documentar mobile breakpoints
- [ ] Criar guia de uso para cada componente

### 2. **Acessibilidade**
- [ ] Auditar contraste (WCAG AA mínimo)
- [ ] Testar focus states em formulários
- [ ] Validar semantic HTML
- [ ] Testar com screen readers

### 3. **Componentes Faltando**
- [ ] Badge system (labels de status)
- [ ] Social proof cards
- [ ] Testimonials com avatars
- [ ] Loading states
- [ ] Error/success messages

### 4. **Responsividade**
- [ ] Mobile breakpoints (375px, 768px, 1024px)
- [ ] Typography scaling
- [ ] Image optimization
- [ ] Touch targets (min 48px)

### 5. **Performance**
- [ ] Otimizar fontes (subset + display: swap)
- [ ] Lazy load images
- [ ] CSS minification
- [ ] Remove unused tokens

### 6. **Interatividade**
- [ ] Smooth transitions
- [ ] Hover states para links/botões
- [ ] FAQ accordion logic (já existe)
- [ ] Form validation feedback

---

## 💾 Recursos Disponíveis

| Arquivo | Tamanho | Status |
|---------|---------|--------|
| variation-a.jsx | 22.2 KB | ✅ Ready |
| styles-tokens.css | ~5 KB | ✅ Ready |
| variation-b.jsx | 17 KB | ✅ Ready |
| Design System RTF | 8.4 KB | ⚠️ Precisa converter |

---

## 🚀 Próximos Passos

1. **Fase 1 - Auditoria**
   - [ ] Testar responsividade em real devices
   - [ ] Auditar acessibilidade com Axe/Wave
   - [ ] Documentar gaps

2. **Fase 2 - Refinamento**
   - [ ] Melhorar componentes existentes
   - [ ] Adicionar novos componentes
   - [ ] Expandir token system

3. **Fase 3 - Implementação**
   - [ ] Build sistema de componentes (Storybook)
   - [ ] Deploy da landing page
   - [ ] Monitoramento de performance

---

## 🎨 Próximas Decisões

### Cor Acento
- ✅ Laranja-neon (#FF5C00) funciona, mas considerar tom mais quente para a paleta editorial
- [ ] Testar #FF6B35 ou #FF7028 para melhor harmonia

### Tipografia Heading
- ✅ Inter é sólida para headings secundários
- [ ] Considerar manter Fraunces para h1/hero apenas (maior impacto editorial)

### Componentes Signature
- ✅ Pills com seta funcionam bem
- [ ] Expandir para buttons secundários (outline)
- [ ] Criar componentes de estado (loading, disabled)

---

**Próximo encontro:** Revisar screenshots e atualizar documentação
