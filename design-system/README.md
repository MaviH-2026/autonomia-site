# 🎨 AUTONOM.IA Design System

**Versão:** 1.0.0  
**Status:** ✅ Integrado ao repositório  
**Localização:** `design-system/` | `design-system-components/`

---

## 📚 Estrutura

```
design-system/
├── tokens/                    # Design tokens
│   ├── colors.ts             # Paleta de cores
│   ├── typography.ts         # Tipografia
│   ├── spacing.ts            # Espaçamento
│   ├── shadows.ts            # Sombras
│   ├── radius.ts             # Border radius
│   ├── transitions.ts        # Animações
│   ├── index.ts              # Exports
│   └── design-tokens.json    # JSON com todos os tokens
│
├── styles/                    # CSS base
│   ├── globals.css           # Estilos globais
│   └── typography.css        # Base de tipografia
│
└── utils/                     # Utilitários
    ├── cn.ts                 # Tailwind merge (classnames)
    └── color.ts              # Funções de cor

design-system-components/
├── atoms/                     # Componentes primitivos
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Text.tsx
│   ├── Badge.tsx
│   ├── Tag.tsx
│   ├── Avatar.tsx
│   └── ...
│
├── molecules/                 # Componentes compostos
│   ├── InputField.tsx
│   ├── Card.tsx
│   ├── Alert.tsx
│   ├── ButtonGroup.tsx
│   └── ...
│
├── organisms/                 # Componentes complexos
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── Modal.tsx
│   └── ...
│
├── templates/                 # Layouts de página
│   ├── DashboardTemplate.tsx
│   ├── AuthTemplate.tsx
│   └── ...
│
└── index.ts                   # Exports centralizados
```

---

## 🚀 Como Usar

### 1. **Importar Componentes**

```tsx
// Atoms (componentes básicos)
import { Button, Input, Text, Badge } from '@/design-system-components';

// Molecules (componentes compostos)
import { Card, Alert, InputField } from '@/design-system-components';

// Organisms (componentes complexos)
import { Header, Modal } from '@/design-system-components';
```

### 2. **Usar Tokens de Design**

```tsx
import { colors, spacing, typography } from '@/design-system/tokens';

// Cores
const textColor = colors.text.primary;  // #0A0E27
const bgColor = colors.background.default;  // #FFFFFF

// Espaçamento
const padding = spacing.lg;  // 24px
const gap = spacing.md;      // 16px

// Tipografia
const headingStyle = typography.heading.h1;
```

### 3. **Usar Tailwind CSS**

Todos os tokens estão disponíveis como classes Tailwind:

```tsx
<div className="bg-background-default text-text-primary p-lg rounded-md shadow-lg">
  <h1 className="text-h1 font-bold">Título</h1>
  <p className="text-body-md text-text-secondary">Descrição</p>
</div>
```

### 4. **Criar Nova Página com Design System**

```tsx
// pages/new-page.tsx
import { Button, Card, Header } from '@/design-system-components';
import { colors } from '@/design-system/tokens';

export default function NewPage() {
  return (
    <div className="min-h-screen bg-background-default">
      <Header />
      <main className="p-lg max-w-6xl mx-auto">
        <Card>
          <h1 className="text-h1">Bem-vindo</h1>
          <p className="text-body-md text-text-secondary mt-md">
            Esta página usa o design system AUTONOM.IA
          </p>
          <Button className="mt-lg">Começar</Button>
        </Card>
      </main>
    </div>
  );
}
```

---

## 🎯 Componentes Disponíveis

### **Atoms (Primitivos)**
- `Button` — Botão (variants: primary, secondary, outline, ghost)
- `Input` — Input de texto
- `Text` — Tipografia base
- `Badge` — Pequeno indicador
- `Tag` — Etiqueta
- `Avatar` — Imagem de usuário
- `Skeleton` — Placeholder de carregamento
- `Divider` — Separador
- `Spinner` — Indicador de carregamento

### **Molecules (Compostos)**
- `InputField` — Input + Label + Validação
- `Card` — Container com estilo
- `Alert` — Mensagem de alerta
- `ButtonGroup` — Grupo de botões
- `Breadcrumb` — Navegação
- `Tooltip` — Dica ao passar mouse

### **Organisms (Complexos)**
- `Header` — Cabeçalho da aplicação
- `Sidebar` — Menu lateral
- `Modal` — Dialog/Modal

### **Templates (Layouts)**
- `DashboardTemplate` — Layout de dashboard
- `AuthTemplate` — Layout de autenticação

---

## 🎨 Tokens de Design

### **Cores** (`design-system/tokens/colors.ts`)

```
Primárias:     #2563EB (blue)
Secundárias:   #64748B (slate)
Sucesso:       #10B981 (emerald)
Aviso:         #F59E0B (amber)
Erro:          #EF4444 (red)
```

### **Tipografia** (`design-system/tokens/typography.ts`)

```
h1: 48px (bold)
h2: 32px (semibold)
h3: 24px (semibold)
body-lg: 18px (regular)
body-md: 16px (regular)
label-sm: 12px (semibold)
```

### **Espaçamento** (`design-system/tokens/spacing.ts`)

```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
```

---

## 📖 Referência Completa

Para documentação detalhada, veja:
- `DESIGN_SYSTEM.md` — Visão geral da arquitetura
- `design-system/tokens/design-tokens.json` — Todos os tokens em JSON

---

## ✅ Próximos Passos

Ao criar uma nova página:

1. ✅ Importe componentes do `design-system-components/`
2. ✅ Use classes Tailwind com tokens
3. ✅ Valide cores, tipografia e espaçamento
4. ✅ Teste responsividade

**Resultado:** Todas as novas páginas terão consistência visual automática! 🎯
