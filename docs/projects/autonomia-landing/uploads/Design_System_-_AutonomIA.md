{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww29200\viewh18460\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Design System \'97 AUTONOM.IA\
\
> Extra\'eddo de `masterclass.com/certificates/`.\
> Fonte da verdade do sistema visual para landing pages.\
> Conven\'e7\'e3o de tokens: prefixo `--mc-*` (mantida do DS original) ou prefixo neutro (`--ds-*`) \'e0 sua escolha.\
\
---\
\
## 1. Vis\'e3o geral\
\
Linguagem visual editorial, sofisticada e calma, baseada em uma paleta neutra quente (bege, creme, preto quente) com **um \'fanico acento el\'e9trico laranja-neon (`#FF5C00`)** usado para guiar a a\'e7\'e3o. Tipografia mistura uma serifa display condensada (Ivar Display Condensed) com uma sans humanista (Sohne) e uma monoespa\'e7ada (Sohne Mono) para eyebrows t\'e9cnicos.\
\
Princ\'edpios:\
- **Contraste tonal antes de contraste de cor.** Hierarquia vem de varia\'e7\'f5es de bege/creme/preto, n\'e3o de muitas cores.\
- **Acento \'fanico e cir\'fargico.** Laranja-neon `#FF5C00` aparece s\'f3 em CTAs e \'edcones de progresso.\
- **Zero sombra.** Eleva\'e7\'e3o por cor de superf\'edcie e bordas tracejadas.\
- **Tipografia editorial nos t\'edtulos, neutra na UI.**\
- **Cantos generosos** (8\'9624 px) para suavizar o contraste forte preto/creme.\
\
---\
\
## 2. Tokens\
\
### 2.1 Cores\
\
#### Neutros (escala fria)\
| Token | Hex |\
|---|---|\
| `neutral-90`   | `#FFFFFF` |\
| `neutral-100`  | `#F4F4F5` |\
| `neutral-200`  | `#E9EAEC` |\
| `neutral-300`  | `#D4D5D9` |\
| `neutral-400`  | `#B3B5BC` |\
| `neutral-500`  | `#9EA0A9` |\
| `neutral-600`  | `#565961` |\
| `neutral-700`  | `#43454C` |\
| `neutral-800`  | `#303136` |\
| `neutral-900`  | `#222326` |\
| `neutral-1000` | `#0D0D0E` |\
| `neutral-1010` | `#000000` |\
\
#### Marca / Primary (Pink)\
| Token | Hex |\
|---|---|\
| `brand`        | `#EF4562` |\
| `primary-100`  | `#FEB0C2` |\
| `primary-200`  | `#EA5D7E` |\
| `primary-300`  | `#E84A6F` |\
| `primary-400`  | `#E84A6F` |\
| `primary-500`  | `#E32652` |\
| `primary-600`  | `#D61A46` |\
| `primary-700`  | `#C71A42` |\
| `primary-800`  | `#B5173C` |\
| `primary-900`  | `#A21536` |\
\
#### Utility (Purple) e AI\
| Token | Hex |\
|---|---|\
| `utility-100` | `#D4CAF7` |\
| `utility-200` | `#B7A7F1` |\
| `utility-300` | `#9A83EC` |\
| `utility-400` | `#7D60E6` |\
| `utility-500` | `#4721D0` |\
| `utility-600` | `#3C1CB0` |\
| `utility-700` | `#301680` |\
| `utility-800` | `#24116A` |\
| `utility-900` | `#190B50` |\
| `ai-500`      | `#6522F2` |\
\
#### Sem\'e2nticas\
| Token | Hex |\
|---|---|\
| `success-500` | `#3EBB70` |\
| `success-100` | `#C2EBD2` |\
| `warning-500` | `#FF9000` |\
| `warning-100` | `#FFDCAD` |\
| `error-500`   | `#FF3333` |\
| `error-100`   | `#FFD6D6` |\
| `announce`    | `#EED37F` |\
| `focus`       | `#3787FF` |\
\
#### Sociais\
| Token | Hex |\
|---|---|\
| `facebook`  | `#1877F2` |\
| `twitter`   | `#1D9BF0` |\
| `linkedin`  | `#0A66C2` |\
| `pinterest` | `#E71E27` |\
\
#### Cores sem\'e2nticas de superf\'edcie (uso real na p\'e1gina)\
| Fun\'e7\'e3o | Hex | Onde aparece |\
|---|---|---|\
| `bg-page`         | `#E4D5C3` | fundo geral da landing (areia/bege) |\
| `bg-surface`      | `#F9EFE3` | cart\'f5es, sticky bar |\
| `bg-surface-2`    | `#FEFAF2` | superf\'edcies de maior eleva\'e7\'e3o |\
| `bg-dark`         | `#16140C` | header, bot\'f5es prim\'e1rios, hero footer |\
| `accent-orange`   | `#FF5C00` | CTAs, \'edcones de seta/check |\
| `text-primary`    | `#16140C` | t\'edtulos e UI principal |\
| `text-secondary`  | `#52463A` | corpo de texto |\
| `text-muted`      | `#72685 5` | metadados, legendas |\
| `border-soft`     | `#D2C2B2` | borda 2px de bot\'f5es tertiary |\
\
#### Gradiente especial (AI)\
```css\
--gradient-ai: \
  radial-gradient(70% 70% at 50% 0%, rgba(251,125,247,0.8) 0%, rgba(222,156,253,0) 100%),\
  radial-gradient(70% 100% at 30% 120%, rgb(230,12,73) 0%, var(--ai-500) 100%);\
```\
\
---\
\
### 2.2 Tipografia\
\
#### Fam\'edlias\
| Token | Stack |\
|---|---|\
| `font-display` | `"Ivar Display Condensed", serif` |\
| `font-heading` | `"Sohne Kraftig", sans-serif` |\
| `font-body`    | `Sohne, Helvetica, Arial, sans-serif` |\
| `font-mono`    | `"Sohne Mono", monospace` |\
\
#### Escala (root: `font-size: 10px` \uc0\u8594  1rem = 10px)\
| Uso | Fam\'edlia | Size | Line-height | Weight | Letter-spacing | Transform |\
|---|---|---|---|---|---|---|\
| Hero H1 (XL) | display | 74 px | 81 px | 400 | 0.5 px | none |\
| H1           | display | 64 px | 70 px | 400 | 0.4 px | none |\
| H4 / t\'edtulo de cart\'e3o | heading | 22 px | 30 px | 500 | normal | none |\
| H2 / label de bloco | heading | 16 px | 23 px | 500 | 0.15 px | none |\
| Eyebrow (mono) | mono | 12 px | 20 px | 500 | 1.6 px | uppercase |\
| Body | body | 16 px | 24 px | 400 | 0.32 px | none |\
| Body em cart\'e3o | body | 16 px | 23.2 px | 400 | 0.15 px | none |\
| Bot\'e3o | body | 16 px | 20 px | 600 | 0.16 px | capitalize |\
| Nav link | body | 12 px | 17 px | 600 | 0.24 px | none |\
\
#### Line-heights tokenizados\
| Token | Valor |\
|---|---|\
| `lh-heading-ultra-tight` | 0.9 |\
| `lh-heading-super-tight` | 1.0 |\
| `lh-heading-tight`       | 1.15 |\
| `lh-heading`             | 1.25 |\
| `lh-body-tight`          | 1.45 |\
| `lh-body`                | 1.5 |\
| `lh-body-relaxed`        | 1.6 |\
\
---\
\
### 2.3 Espa\'e7amento\
\
Escala em rem (root 10 px) \'97 px equivalente entre par\'eanteses.\
\
| Token | rem | px |\
|---|---|---|\
| `scale-0`   | 0     | 0   |\
| `scale-1`   | 0.4   | 4   |\
| `scale-2`   | 0.8   | 8   |\
| `scale-3`   | 1.2   | 12  |\
| `scale-3-5` | 1.4   | 14  |\
| `scale-4`   | 1.6   | 16  |\
| `scale-5`   | 1.8   | 18  |\
| `scale-6`   | 1.8   | 18  |\
| `scale-7`   | 2     | 20  |\
| `scale-8`   | 2     | 20  |\
| `scale-9`   | 3.4   | 34  |\
| `scale-10`  | 4.6   | 46  |\
| `scale-11`  | 6     | 60  |\
| `scale-12`  | 7.2   | 72  |\
| `scale-13`  | 8.6   | 86  |\
| `scale-14`  | 9.8   | 98  |\
| `scale-15`  | 54.4  | 544 |\
| `scale-16`  | 60.4  | 604 |\
\
---\
\
### 2.4 Cantos (radius)\
| Token | Valor |\
|---|---|\
| `corners-sm` | 8 px |\
| `corners-md` | 12 px |\
| `corners-lg` | 16 px |\
| `corners-xl` | 18 px |\
\
Conven\'e7\'e3o de uso:\
- Bot\'f5es: 8 px\
- Cart\'f5es pequenos: 12 px\
- Cart\'f5es grandes / v\'eddeo hero: 16\'9624 px\
- Pills (tags, \'edcones em p\'edlula): 9999 px (totalmente arredondado)\
\
---\
\
### 2.5 Bordas\
| Token | Valor |\
|---|---|\
| `border-default` | 1px solid `border-soft` |\
| `border-md`      | 2px solid `border-soft` |\
\
Detalhe assinatura: divisores **tracejados (dashed)** horizontais dentro de cart\'f5es para separar t\'edtulo e conte\'fado.\
\
---\
\
### 2.6 Grid e breakpoints\
| Token | Valor |\
|---|---|\
| `grid-columns`    | 12 |\
| `grid-gutter`     | 20 px (10 px de meia-gutter) |\
| `container-max`   | 1136 px |\
| `content-max`     | 1264 px |\
\
| Breakpoint | Min-width |\
|---|---|\
| `xs` | 0 |\
| `sm` | 576 px |\
| `md` | 768 px |\
| `lg` | 960 px |\
| `xl` | 1200 px |\
\
---\
\
### 2.7 Eleva\'e7\'e3o\
Sem `box-shadow`. Hierarquia constru\'edda por:\
1. Mudan\'e7a de cor de superf\'edcie (`bg-page` \uc0\u8594  `bg-surface` \u8594  `bg-surface-2`).\
2. Cantos arredondados.\
3. Bordas tracejadas internas.\
\
---\
\
## 3. Componentes\
\
### 3.1 Bot\'e3o (`.c-button`)\
\
Tamanho padr\'e3o `md`: padding `12px 24px`, font-size 16/20, weight 600, capitalize, radius 8 px, border 2 px.\
\
| Varia\'e7\'e3o | bg | texto | borda | uso |\
|---|---|---|---|---|\
| `primary`        | `#16140C` | `#FFFFFF` | transparente | CTA principal ("Start Learning", "Sign up") |\
| `primary-accent` | `#FF5C00` | `#16140C` | nenhuma | CTA de destaque, \'edcones de seta circular |\
| `secondary`      | `#F9EFE3` | `#16140C` | transparente | a\'e7\'f5es secund\'e1rias ("Download Syllabus", "Play Trailer") |\
| `tertiary`       | transparente | `#000000` | 2px `#D2C2B2` | a\'e7\'f5es neutras ("View Course") |\
\
**Detalhe assinatura:** bot\'f5es prim\'e1rios costumam ter um **c\'edrculo laranja-neon (`#FF5C00`) com seta preta** ao lado direito do texto. \'c9 a marca visual do DS.\
\
```html\
<button class="c-button c-button--primary c-button--md">\
  Start Learning\
  <span class="c-button__icon-pill">\uc0\u8594 </span>\
</button>\
```\
\
---\
\
### 3.2 Cart\'f5es / containers\
\
- Background `#FEFAF2` ou `#F9EFE3` sobre o body bege.\
- Cantos 16\'9624 px.\
- Sem sombra.\
- Padding interno generoso (\uc0\u8805  32 px).\
- Divisor tracejado horizontal entre o t\'edtulo do cart\'e3o e o conte\'fado.\
\
Exemplos: "Course Outcomes", "Skills in this Course".\
\
---\
\
### 3.3 Tags / Pills (skills)\
\
P\'edlula com:\
- Borda fina (`border-soft`).\
- Cantos 9999 px.\
- Texto em **mono uppercase** com letter-spacing alto.\
- Bullet preto (\'95) \'e0 esquerda.\
\
Exemplo: `\'95 AI-FIRST MINDSET`, `\'95 VERIFICATION TECHNIQUES`.\
\
---\
\
### 3.4 Eyebrows\
\
Texto monoespa\'e7ado, uppercase, 12 px, letter-spacing 1.6 px, cor `#52463A`. **Sempre antecede um H1/H2 editorial** para criar lockup tipogr\'e1fico.\
\
```html\
<p class="c-eyebrow">SKILLS YOU'LL BUILD</p>\
<h1 class="c-h-display">Earn Your Edge in the AI Era</h1>\
```\
\
---\
\
### 3.5 Lista de instrutores\
\
- Avatar circular (foto recortada).\
- Nome em `Sohne Kraftig` 16 px / weight 500.\
- Cargo em `Sohne` 16 px / weight 400 / cor `#72685 5`.\
- Coluna \'fanica, espa\'e7amento vertical de 32\'9648 px.\
- Linha **vertical tracejada** \'e0 esquerda agrupa a lista.\
\
---\
\
### 3.6 Course Outcomes (checklist)\
\
- \'cdcone de check em **pill laranja-neon (`#FF5C00`)** sobre cart\'e3o creme.\
- Primeira frase em `text-primary`.\
- Continua\'e7\'e3o em `text-secondary` para criar hierarquia interna.\
\
---\
\
### 3.7 Sticky bar de convers\'e3o (rodap\'e9 fixo)\
\
- Altura ~80 px.\
- Background `#F9EFE3`.\
- Esquerda: t\'edtulo weight 600 + subt\'edtulo regular.\
- Direita: bot\'e3o `primary` com pill laranja de seta.\
- Persistente no scroll para convers\'e3o constante.\
\
---\
\
### 3.8 Header / navega\'e7\'e3o\
\
- Top bar `#16140C` (preta), full width.\
- Links em branco, font Sohne 12/17 weight 600, letter-spacing 0.24 px.\
- Logo "M" em escudo.\
- CTA `Start Learning` (primary) + link `Log In` \'e0 direita.\
\
---\
\
### 3.9 Hero (layout)\
\
Grid de 2 colunas em `lg+`:\
- **Esquerda:** lockup ("MasterClass / CERTIFICATES") + H1 display (4 linhas) + par\'e1grafo + dois bot\'f5es (primary + secondary).\
- **Direita:** v\'eddeo trailer com cantos arredondados (~24 px) e bot\'e3o flutuante "Play Trailer" (secondary com pill laranja de play).\
\
Em `md-`: empilha vertical, v\'eddeo abaixo do texto.\
\
---\
\
## 4. Iconografia\
\
- Setas em **c\'edrculo laranja-neon (`#FF5C00`)** com glifo preto interno.\
- Checks em p\'edlula laranja-neon.\
- Play em p\'edlula preta sobre laranja dentro do bot\'e3o "Play Trailer".\
- Bullets pretos s\'f3lidos em tags.\
- Linhas/divisores **dashed** consistentemente para separar se\'e7\'f5es.\
\
---\
\
## 5. Snippets prontos para importar\
\
### 5.1 CSS Custom Properties (`tokens.css`)\
\
```css\
:root \{\
  /* Cores \'97 superf\'edcie */\
  --color-bg-page:       #E4D5C3;\
  --color-bg-surface:    #F9EFE3;\
  --color-bg-surface-2:  #FEFAF2;\
  --color-bg-dark:       #16140C;\
\
  /* Cores \'97 texto */\
  --color-text-primary:   #16140C;\
  --color-text-secondary: #52463A;\
  --color-text-muted:     #72685 5;\
  --color-text-on-dark:   #FFFFFF;\
\
  /* Cores \'97 marca e acento */\
  --color-brand:        #EF4562;\
  --color-accent-orange:  #FF5C00;\
  --color-ai:           #6522F2;\
\
  /* Cores \'97 sem\'e2nticas */\
  --color-success: #3EBB70;\
  --color-warning: #FF9000;\
  --color-error:   #FF3333;\
  --color-focus:   #3787FF;\
\
  /* Bordas */\
  --color-border-soft: #D2C2B2;\
  --border-default: 1px solid var(--color-border-soft);\
  --border-md:      2px solid var(--color-border-soft);\
\
  /* Tipografia */\
  --font-display: "Ivar Display Condensed", serif;\
  --font-heading: "Sohne Kraftig", sans-serif;\
  --font-body:    Sohne, Helvetica, Arial, sans-serif;\
  --font-mono:    "Sohne Mono", monospace;\
\
  --fs-eyebrow: 12px;\
  --fs-body:    16px;\
  --fs-h4:      22px;\
  --fs-h1:      64px;\
  --fs-hero:    74px;\
\
  --lh-heading-tight: 1.15;\
  --lh-heading:       1.25;\
  --lh-body:          1.5;\
\
  /* Escala / espa\'e7amento */\
  --space-1:  4px;\
  --space-2:  8px;\
  --space-3:  12px;\
  --space-4:  16px;\
  --space-5:  18px;\
  --space-6:  20px;\
  --space-7:  34px;\
  --space-8:  46px;\
  --space-9:  60px;\
  --space-10: 72px;\
\
  /* Cantos */\
  --radius-sm: 8px;\
  --radius-md: 12px;\
  --radius-lg: 16px;\
  --radius-xl: 18px;\
  --radius-pill: 9999px;\
\
  /* Layout */\
  --container-max: 1136px;\
  --content-max:   1264px;\
\
  /* Gradiente AI */\
  --gradient-ai:\
    radial-gradient(70% 70% at 50% 0%, rgba(251,125,247,0.8) 0%, rgba(222,156,253,0) 100%),\
    radial-gradient(70% 100% at 30% 120%, rgb(230,12,73) 0%, var(--color-ai) 100%);\
\}\
\
/* Breakpoints (use em @media) */\
/* sm 576px | md 768px | lg 960px | xl 1200px */\
\
body \{\
  background: var(--color-bg-page);\
  color: var(--color-text-primary);\
  font-family: var(--font-body);\
  font-size: var(--fs-body);\
  line-height: var(--lh-body);\
\}\
```\
\
### 5.2 Tailwind config (`tailwind.config.js`)\
\
```js\
/** @type \{import('tailwindcss').Config\} */\
module.exports = \{\
  content: ['./src/**/*.\{html,js,jsx,ts,tsx,astro\}'],\
  theme: \{\
    screens: \{\
      sm: '576px',\
      md: '768px',\
      lg: '960px',\
      xl: '1200px'\
    \},\
    extend: \{\
      colors: \{\
        bg: \{\
          page:      '#E4D5C3',\
          surface:   '#F9EFE3',\
          surface2:  '#FEFAF2',\
          dark:      '#16140C'\
        \},\
        text: \{\
          primary:   '#16140C',\
          secondary: '#52463A',\
          muted:     '#72685 5',\
          onDark:    '#FFFFFF'\
        \},\
        brand: '#EF4562',\
        accent: '#FF5C00',\
        ai:    '#6522F2',\
        success: '#3EBB70',\
        warning: '#FF9000',\
        error:   '#FF3333',\
        focus:   '#3787FF',\
        borderSoft: '#D2C2B2'\
      \},\
      fontFamily: \{\
        display: ['Ivar Display Condensed', 'serif'],\
        heading: ['Sohne Kraftig', 'sans-serif'],\
        body:    ['Sohne', 'Helvetica', 'Arial', 'sans-serif'],\
        mono:    ['Sohne Mono', 'monospace']\
      \},\
      fontSize: \{\
        eyebrow: ['12px', \{ lineHeight: '20px', letterSpacing: '1.6px' \}],\
        body:    ['16px', \{ lineHeight: '24px' \}],\
        h4:      ['22px', \{ lineHeight: '30px' \}],\
        h1:      ['64px', \{ lineHeight: '70px' \}],\
        hero:    ['74px', \{ lineHeight: '81px' \}]\
      \},\
      spacing: \{\
        1: '4px', 2: '8px', 3: '12px', 4: '16px',\
        5: '18px', 6: '20px', 7: '34px', 8: '46px',\
        9: '60px', 10: '72px'\
      \},\
      borderRadius: \{\
        sm: '8px', md: '12px', lg: '16px', xl: '18px', pill: '9999px'\
      \},\
      maxWidth: \{\
        container: '1136px',\
        content:   '1264px'\
      \}\
    \}\
  \},\
  plugins: []\
\};\
```\
\
### 5.3 JSON W3C DTCG (fonte da verdade \'97 `tokens/color.json`)\
\
```json\
\{\
  "color": \{\
    "brand":   \{ "$value": "#EF4562", "$type": "color" \},\
    "accent":  \{ "$value": "#FF5C00", "$type": "color" \},\
    "ai":      \{ "$value": "#6522F2", "$type": "color" \},\
    "bg": \{\
      "page":     \{ "$value": "#E4D5C3", "$type": "color" \},\
      "surface":  \{ "$value": "#F9EFE3", "$type": "color" \},\
      "surface2": \{ "$value": "#FEFAF2", "$type": "color" \},\
      "dark":     \{ "$value": "#16140C", "$type": "color" \}\
    \},\
    "text": \{\
      "primary":   \{ "$value": "#16140C", "$type": "color" \},\
      "secondary": \{ "$value": "#52463A", "$type": "color" \},\
      "muted":     \{ "$value": "#72685 5", "$type": "color" \}\
    \},\
    "semantic": \{\
      "success": \{ "$value": "#3EBB70", "$type": "color" \},\
      "warning": \{ "$value": "#FF9000", "$type": "color" \},\
      "error":   \{ "$value": "#FF3333", "$type": "color" \},\
      "focus":   \{ "$value": "#3787FF", "$type": "color" \}\
    \},\
    "neutral": \{\
      "90":   \{ "$value": "#FFFFFF", "$type": "color" \},\
      "100":  \{ "$value": "#F4F4F5", "$type": "color" \},\
      "200":  \{ "$value": "#E9EAEC", "$type": "color" \},\
      "300":  \{ "$value": "#D4D5D9", "$type": "color" \},\
      "400":  \{ "$value": "#B3B5BC", "$type": "color" \},\
      "500":  \{ "$value": "#9EA0A9", "$type": "color" \},\
      "600":  \{ "$value": "#565961", "$type": "color" \},\
      "700":  \{ "$value": "#43454C", "$type": "color" \},\
      "800":  \{ "$value": "#303136", "$type": "color" \},\
      "900":  \{ "$value": "#222326", "$type": "color" \},\
      "1000": \{ "$value": "#0D0D0E", "$type": "color" \}\
    \}\
  \}\
\}\
```\
\
---\
\
## 6. Receitas de uso\
\
### 6.1 Bot\'e3o prim\'e1rio com pill de seta\
```html\
<a href="#" class="inline-flex items-center gap-3 bg-bg-dark text-text-onDark\
  font-body font-semibold capitalize px-6 py-3 rounded-sm tracking-wide">\
  Start Learning\
  <span class="inline-flex items-center justify-center w-7 h-7 rounded-pill\
    bg-accent text-text-primary">\uc0\u8594 </span>\
</a>\
```\
\
### 6.2 Eyebrow + t\'edtulo display\
```html\
<header class="text-center">\
  <p class="font-mono uppercase text-eyebrow text-text-secondary">\
    Skills You'll Build\
  </p>\
  <h2 class="font-display text-h1 text-text-primary mt-4">\
    Earn Your Edge in the AI Era\
  </h2>\
</header>\
```\
\
### 6.3 Cart\'e3o com divisor tracejado\
```html\
<article class="bg-bg-surface2 rounded-lg p-8">\
  <h3 class="font-heading text-h4 text-text-primary">Course Outcomes</h3>\
  <hr class="border-t border-dashed border-borderSoft my-6" />\
  <ul class="space-y-4">\
    <li class="flex gap-4">\
      <span class="w-7 h-7 rounded-pill bg-accent flex items-center justify-center">\uc0\u10003 </span>\
      <p class="text-body text-text-secondary">\
        <span class="text-text-primary font-semibold">Learn the essentials</span> of generative AI\'85\
      </p>\
    </li>\
  </ul>\
</article>\
```\
\
---\
\
## 7. Checklist de implementa\'e7\'e3o para uma nova landing\
\
- [ ] Importar `tokens.css` no `<head>` antes de qualquer outro CSS.\
- [ ] Carregar webfonts (Ivar Display Condensed, Sohne, Sohne Mono) com `font-display: swap`.\
- [ ] Aplicar `body \{ background: var(--color-bg-page) \}`.\
- [ ] Hero com eyebrow lockup + H1 display + 2 bot\'f5es (primary + secondary).\
- [ ] Sticky bar de convers\'e3o com CTA primary.\
- [ ] Acentuar **apenas CTAs e \'edcones de progresso** com `--color-accent-orange`. Nunca usar como background grande.\
- [ ] Usar divisores `border-dashed` dentro de cart\'f5es.\
- [ ] Garantir foco vis\'edvel com `outline: 2px solid var(--color-focus)`.\
\
---\
\
## 8. Versionamento\
\
- v1.0.0 \'97 Extra\'e7\'e3o inicial da p\'e1gina AI Fundamentals.\
- Atualizar este arquivo sempre que um token for adicionado/alterado e versionar via Git.\
- Se adotar Style Dictionary: este `design.md` documenta; os arquivos `tokens/*.json` s\'e3o a fonte da verdade que gera `tokens.css` e `tailwind.tokens.js`.}