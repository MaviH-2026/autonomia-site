# 🚀 Design System — Quick Start

## Em 30 segundos

```tsx
import { Button, Card, Header } from '@/design-system-components';
import { colors } from '@/design-system/tokens';

export default function MinhaPage() {
  return (
    <div className="bg-background-default min-h-screen">
      <Header />
      <Card className="p-lg m-lg">
        <h1 className="text-h1 text-text-primary">Olá!</h1>
        <Button>Clica aqui</Button>
      </Card>
    </div>
  );
}
```

---

## Componentes Mais Usados

| Componente | Uso | Exemplo |
|-----------|-----|---------|
| **Button** | CTA, ações | `<Button variant="primary">Enviar</Button>` |
| **Input** | Campos de texto | `<Input placeholder="Nome..." />` |
| **Card** | Container | `<Card className="p-lg">Conteúdo</Card>` |
| **Text** | Tipografia | `<Text variant="body-md">Texto</Text>` |
| **Alert** | Mensagens | `<Alert type="success">Sucesso!</Alert>` |

---

## Classes Tailwind com Tokens

```tsx
// Tamanhos
className="p-lg"        // padding: 24px
className="gap-md"      // gap: 16px
className="mt-xl"       // margin-top: 32px

// Cores
className="bg-primary-500"      // background azul
className="text-text-primary"   // texto escuro
className="border-border-light" // borda clara

// Tipografia
className="text-h1"     // 48px, bold
className="text-body-md" // 16px, regular

// Sombras
className="shadow-lg"   // sombra grande
```

---

## Importar do Design System

```tsx
// ✅ Componentes
import { Button, Input, Card } from '@/design-system-components';

// ✅ Tokens
import { colors, spacing, typography } from '@/design-system/tokens';

// ✅ Utilitários
import { cn } from '@/design-system/utils';
```

---

## Arquivo de Referência

Veja **`design-system/README.md`** para documentação completa.

---

Pronto! 🎨 Toda página nova já tem design system automático!
