# 🎨 Atomic Design System — AUTONOM.IA

**Version:** 1.0.0  
**Framework:** Next.js (App Router)  
**UI Library:** React + shadcn/ui  
**Styling:** Tailwind CSS v4  
**Architecture:** Atomic Design 3  
**TypeScript:** Strict Mode  

---

## 📐 Architecture Overview

```
src/
├── components/
│   ├── atoms/              # Primitive components (Button, Input, Icon, etc.)
│   ├── molecules/          # Composed components (InputField, Card, etc.)
│   ├── organisms/          # Complex components (Header, Sidebar, etc.)
│   ├── templates/          # Page layouts
│   └── index.ts            # Centralized exports
│
├── design-system/
│   ├── tokens/             # Design tokens (colors, spacing, typography, etc.)
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── shadows.ts
│   │   ├── radius.ts
│   │   ├── transitions.ts
│   │   └── index.ts        # Re-export all tokens
│   │
│   ├── utils/
│   │   ├── cn.ts           # Tailwind merge utility
│   │   ├── color.ts        # Color utilities
│   │   └── responsive.ts   # Responsive utilities
│   │
│   ├── styles/
│   │   ├── globals.css     # Base styles, CSS variables
│   │   ├── typography.css  # Typography base
│   │   └── reset.css       # Normalize
│   │
│   └── config/
│       ├── tailwind.config.ts  # Tailwind configuration with tokens
│       └── design-tokens.config.ts # Design system config
│
├── hooks/                  # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useClickOutside.ts
│   └── etc.
│
└── types/
    ├── components.ts       # Component prop types
    ├── design.ts           # Design token types
    └── etc.
```

---

## 🎯 Phase 1: Foundation & Tokens

### Design Tokens Definition

#### Color Palette
```typescript
// Colors organized by semantic meaning
const colors = {
  // Primitives
  white: '#FFFFFF',
  black: '#000000',
  
  // Semantic - Primary (Brand)
  primary: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#0EA5E9',  // Main
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C3D66',
  },
  
  // Semantic - Success
  success: { /* ... */ },
  
  // Semantic - Warning
  warning: { /* ... */ },
  
  // Semantic - Error/Danger
  error: { /* ... */ },
  
  // Semantic - Info
  info: { /* ... */ },
  
  // Neutral (Grayscale)
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // State colors
  state: {
    hover: 'rgba(0, 0, 0, 0.04)',
    active: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.12)',
  },
}
```

#### Typography Scale
```typescript
const typography = {
  // Display (page titles)
  display: {
    lg: { fontSize: '48px', lineHeight: '60px', fontWeight: 700 },
    md: { fontSize: '40px', lineHeight: '48px', fontWeight: 700 },
    sm: { fontSize: '32px', lineHeight: '40px', fontWeight: 700 },
  },
  
  // Heading
  heading: {
    lg: { fontSize: '28px', lineHeight: '36px', fontWeight: 700 },
    md: { fontSize: '24px', lineHeight: '32px', fontWeight: 700 },
    sm: { fontSize: '20px', lineHeight: '28px', fontWeight: 700 },
    xs: { fontSize: '18px', lineHeight: '26px', fontWeight: 700 },
  },
  
  // Body
  body: {
    lg: { fontSize: '18px', lineHeight: '28px', fontWeight: 400 },
    md: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    sm: { fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
    xs: { fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
  },
  
  // Label (form labels, small text)
  label: {
    lg: { fontSize: '14px', lineHeight: '20px', fontWeight: 500 },
    md: { fontSize: '12px', lineHeight: '16px', fontWeight: 500 },
    sm: { fontSize: '11px', lineHeight: '14px', fontWeight: 500 },
  },
}
```

#### Spacing Scale (8px base)
```typescript
const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
}
```

#### Border Radius
```typescript
const radius = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
}
```

#### Shadows
```typescript
const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
}
```

---

## 🧬 Phase 2: Atoms (Primitive Components)

### Button
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  // Implementation with Tailwind classes
}
```

### Input
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  icon?: React.ReactNode;
}

export function Input({
  variant = 'primary',
  size = 'md',
  error = false,
  icon,
  ...props
}: InputProps) {
  // Implementation
}
```

### Icon
```typescript
interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  animated?: boolean;
}

export function Icon({ name, size = 'md', color, animated, ...props }: IconProps) {
  // Implementation using icon library
}
```

### Text/Typography
```typescript
interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span' | 'div';
  variant?: 'display' | 'heading' | 'body' | 'label';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  weight?: 400 | 500 | 600 | 700;
  color?: string;
}

export function Text({
  as = 'p',
  variant = 'body',
  size = 'md',
  weight = 400,
  color,
  ...props
}: TextProps) {
  // Implementation
}
```

### Other Atoms
- `Badge` - Status indicators
- `Tag` - Labels and categorization
- `Spinner` - Loading indicator
- `Skeleton` - Loading placeholder
- `Divider` - Visual separator
- `Avatar` - User/entity image
- `Link` - Navigation link

---

## 🧪 Phase 3: Molecules (Composed Components)

### InputField (Input + Label + Error)
```typescript
interface InputFieldProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  inputProps: InputProps;
}

export function InputField({
  label,
  error,
  hint,
  required,
  inputProps,
}: InputFieldProps) {
  // Label + Input + Error message + Hint
}
```

### Card
```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'flat' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ variant = 'elevated', padding = 'md', ...props }: CardProps) {
  // Implementation
}
```

### Alert
```typescript
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function Alert({ type = 'info', title, dismissible, onDismiss, ...props }: AlertProps) {
  // Icon + Title + Message + Dismiss button
}
```

### Other Molecules
- `ButtonGroup` - Multiple buttons
- `FormField` - Label + Input + Error + Hint
- `Breadcrumb` - Navigation path
- `Pagination` - Page navigation
- `Dropdown` - Dropdown menu
- `Tooltip` - Contextual help
- `Badge with Icon` - Status with icon

---

## 🏛️ Phase 4: Organisms (Complex Components)

### Header/Navigation
```typescript
interface HeaderProps {
  logo?: React.ReactNode;
  navigation: NavLink[];
  rightContent?: React.ReactNode;
  sticky?: boolean;
}

export function Header({ logo, navigation, rightContent, sticky }: HeaderProps) {
  // Logo + Nav + User menu
}
```

### Sidebar
```typescript
interface SidebarProps {
  items: SidebarItem[];
  collapsible?: boolean;
  width?: 'sm' | 'md';
}

export function Sidebar({ items, collapsible, width }: SidebarProps) {
  // Navigation items with icons
}
```

### Form
```typescript
interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
  submitLabel?: string;
  layout?: 'vertical' | 'horizontal' | 'inline';
}

export function Form({ fields, onSubmit, submitLabel, layout }: FormProps) {
  // Multiple form fields + submit button
}
```

### Other Organisms
- `DataTable` - Sortable/filterable table
- `Modal/Dialog` - Modal overlay
- `Dropdown Menu` - Complex dropdown
- `Tabs` - Tab navigation
- `Accordion` - Collapsible sections
- `File Upload` - File input with preview

---

## 🎭 Phase 5: Templates

Templates are page-level layouts combining organisms.

```typescript
export function DashboardTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar items={navItems} />
      <div className="flex-1 flex flex-col">
        <Header navigation={headerNav} />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
```

---

## 📋 Implementation Checklist

### Phase 1: Tokens ✓
- [ ] Design token files created (colors, typography, spacing, etc.)
- [ ] Tailwind config updated with tokens
- [ ] CSS variables generated
- [ ] Token types defined in TypeScript
- [ ] Token documentation

### Phase 2: Atoms ✓
- [ ] Button (5 variants × 3 sizes = 15 combinations)
- [ ] Input (2 variants × 3 sizes = 6 combinations)
- [ ] Icon (scalable SVG icon system)
- [ ] Text/Typography (responsive scales)
- [ ] Badge, Tag, Spinner, Skeleton, Divider, Avatar
- [ ] Atoms story in Storybook

### Phase 3: Molecules ✓
- [ ] InputField (label + input + error + hint)
- [ ] Card (flat, elevated, outlined)
- [ ] Alert (4 types, dismissible)
- [ ] ButtonGroup, FormField, Breadcrumb
- [ ] Pagination, Dropdown, Tooltip
- [ ] Molecules story in Storybook

### Phase 4: Organisms ✓
- [ ] Header/Navigation (sticky, responsive)
- [ ] Sidebar (collapsible, width options)
- [ ] Form (multiple field types)
- [ ] DataTable (sorting, filtering, pagination)
- [ ] Modal/Dialog (keyboard shortcuts, focus trap)
- [ ] Dropdown Menu, Tabs, Accordion
- [ ] Organisms story in Storybook

### Phase 5: Templates ✓
- [ ] DashboardTemplate (sidebar + header + main)
- [ ] AuthTemplate (centered form)
- [ ] LandingTemplate (hero + sections)
- [ ] DocumentationTemplate (sidebar nav + content)

### Phase 6: Documentation ✓
- [ ] Component API documentation
- [ ] Usage examples for each component
- [ ] Design token reference
- [ ] Color palette showcase
- [ ] Typography showcase
- [ ] Spacing guide
- [ ] Accessibility guide (WCAG 2.2)

### Phase 7: Quality Gates ✓
- [ ] TypeScript strict mode (0 errors)
- [ ] Component unit tests
- [ ] Accessibility tests (a11y-audit checklist)
- [ ] Visual regression tests
- [ ] Performance benchmarks (<100ms render)
- [ ] Color contrast validation (WCAG AAA)
- [ ] Focus order validation

---

## 🚀 Quick Start Commands

```bash
# Phase 1: Generate tokens
/Design
*tokenize

# Phase 2: Build atoms
*build button
*build input
*build icon
*build text

# Phase 3: Compose molecules
*compose input-field
*compose card
*compose alert

# Phase 4: Create organisms
# (More complex, documented separately)

# Quality audit
*a11y-audit
*contrast-matrix
*validate-tokens
```

---

## 📐 File Naming Conventions

```
Atoms:
  - Button.tsx
  - Input.tsx
  - Icon.tsx
  - Text.tsx
  - Badge.tsx

Molecules:
  - InputField.tsx
  - Card.tsx
  - Alert.tsx
  - ButtonGroup.tsx

Organisms:
  - Header.tsx
  - Sidebar.tsx
  - Form.tsx
  - DataTable.tsx

Templates:
  - DashboardTemplate.tsx
  - AuthTemplate.tsx

Types:
  - [ComponentName].types.ts

Tests:
  - [ComponentName].test.tsx
```

---

## 🎓 Design System Principles

1. **Token-First** — All styling comes from tokens, zero hardcoded values
2. **Composition** — Atoms → Molecules → Organisms → Templates
3. **Accessibility** — WCAG 2.2 compliance by default
4. **Type Safety** — Full TypeScript types for all props
5. **Responsive** — Mobile-first, responsive by default
6. **Performance** — <50KB CSS, <200µs component renders
7. **Documentation** — Every component has examples and API docs
8. **Testing** — Unit tests + visual tests + a11y tests

---

## 📊 Expected Deliverables

```
src/
├── components/
│   ├── atoms/              # 10+ components
│   ├── molecules/          # 10+ components
│   ├── organisms/          # 6+ components
│   ├── templates/          # 4+ templates
│   └── index.ts
├── design-system/
│   ├── tokens/             # 5 files
│   ├── utils/              # 3 files
│   ├── styles/             # 3 files
│   └── config/             # 2 files
├── hooks/                  # 5+ custom hooks
├── types/                  # 3+ type files
└── __stories__/            # Storybook stories for all components
```

**Total:** 50+ production-ready components + design tokens + documentation

---

**Status:** Ready to implement | **Next Step:** Create Phase 1 (Tokens)
