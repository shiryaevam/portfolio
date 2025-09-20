# Typography System

Система типографики основана на дизайн-системе Portfolio for Developers Concept V.2.

## Шрифт

- **Основной шрифт:** Fira Code (monospaced, variable)
- **Fallback:** Courier New, monospace
- **Назначение:** Appearance - Monospaced, Technology - Variable, Sans Serif

## Шкала размеров шрифтов

| Step | Font Size | Line Height | Usage |
|------|-----------|-------------|-------|
| 1    | 14px      | 140% (19.6px) | Body small |
| 2    | 16px      | 150% (24px)   | Body medium, base |
| 3    | 18px      | 150% (27px)   | Body large |
| 4    | 20px      | 150% (30px)   | H6 |
| 5    | 24px      | 140% (33.6px) | H5 |
| 6    | 30px      | 140% (42px)   | H4 |
| 7    | 36px      | 130% (46.8px) | H3 |
| 8    | 48px      | 120% (57.6px) | H2 |
| 9    | 60px      | 110% (66px)   | H1 |

## Веса шрифтов

- **Light:** 300
- **Regular:** 400
- **Medium:** 500
- **SemiBold:** 600
- **Bold:** 700

## Использование

### CSS классы

```html
<h1 class="h1">Heading 1</h1>
<h2 class="h2">Heading 2</h2>
<p class="body-medium">Body text</p>
<div class="text-5">Custom text size</div>
```

### TypeScript утилиты

```typescript jsx
import { typographyStyles, typographyClasses } from '../styles/typography';

// Использование стилей
const MyComponent = () => (
  <h1 style={typographyStyles.h1}>Heading</h1>
);

// Использование классов
const MyComponent = () => (
  <h1 className={typographyClasses.h1}>Heading</h1>
);
```

### Прямое использование из темы

```typescript
import { typography } from '../theme';

const fontSize = typography.fontSize[5]; // 24px
const lineHeight = typography.lineHeight[5]; // 1.4
const fontWeight = typography.fontWeight.bold; // 700
```

## Border Radius System

Система радиусов границ основана на дизайн-системе Portfolio for Developers Concept V.2.

### Шкала радиусов

| Step | Value | Usage |
|------|-------|-------|
| 1    | 2px   | Checkboxes |
| 2    | 4px   | Icon boxes |
| 3    | 8px   | Buttons, backdrop, inputs |
| 4    | 16px  | Cards |

### Использование

#### CSS классы

```html
<div class="radius-1">Checkbox style</div>
<div class="radius-2">Icon box style</div>
<div class="radius-3">Button style</div>
<div class="radius-4">Card style</div>

<!-- Семантические классы -->
<div class="radius-checkbox">Checkbox</div>
<div class="radius-icon-box">Icon box</div>
<div class="radius-button">Button</div>
<div class="radius-input">Input</div>
<div class="radius-backdrop">Backdrop</div>
<div class="radius-card">Card</div>
```

#### TypeScript утилиты

```typescript jsx
import { borderRadiusStyles, borderRadiusClasses } from '../styles/borderRadius';

// Использование стилей
const MyComponent = () => (
  <div style={borderRadiusStyles.card}>Card content</div>
);

// Использование классов
const MyComponent = () => (
  <div className={borderRadiusClasses.card}>Card content</div>
);
```

#### Прямое использование из темы

```typescript
import { borderRadius } from '../theme';

const radius = borderRadius[3]; // 8px
const radiusPx = `${borderRadius[3]}px`; // "8px"
```

## Файлы

- `public/fonts.css` - Подключение шрифтов Fira Code и CSS переменные
- `src/theme.ts` - Конфигурация типографики и радиусов для Ant Design
- `src/styles/typography.ts` - Утилиты и стили для типографики
- `src/styles/borderRadius.ts` - Утилиты и стили для радиусов
