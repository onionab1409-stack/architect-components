# ДИЗАЙН-СИСТЕМА — ПОЛНАЯ СПЕЦИФИКАЦИЯ
## Версия: 1.0 | Дата: 10 марта 2026
## Пробелы закрываемые: B-01, B-02, B-03, B-04, B-05, NEW-4

---

## 1. ЦВЕТОВЫЕ ПАЛИТРЫ (5 пресетов)

Формат: oklch(lightness chroma hue)
Каждый пресет содержит: :root (light) + .dark переменные
Совместимость: shadcn/ui semantic tokens + Tailwind v4 @theme inline

### СТРУКТУРА ПЕРЕМЕННЫХ (единая для всех пресетов)

```
:root / .dark {
  --background          // Основной фон страницы
  --foreground          // Основной цвет текста
  --card                // Фон карточек
  --card-foreground     // Текст в карточках
  --popover             // Фон поповеров/дропдаунов
  --popover-foreground  // Текст в поповерах
  --primary             // Главный акцентный цвет (кнопки, ссылки)
  --primary-foreground  // Текст на primary фоне
  --secondary           // Вторичный цвет (менее важные действия)
  --secondary-foreground
  --muted               // Приглушённые элементы (disabled, подсказки)
  --muted-foreground
  --accent              // Hover-состояния, выделение
  --accent-foreground
  --destructive         // Ошибки, удаление
  --destructive-foreground
  --border              // Границы
  --input               // Границы инпутов
  --ring                // Focus ring
  --radius              // Border radius
  --chart-1 .. --chart-5 // Цвета для графиков
  --sidebar-background  // Сайдбар (если есть)
  --sidebar-foreground
  --sidebar-primary
  --sidebar-primary-foreground
  --sidebar-accent
  --sidebar-accent-foreground
  --sidebar-border
  --sidebar-ring
}
```

---

### ПРЕСЕТ 1: DARK TECH (SaaS / AI / Dev Tools)
**Характер:** Футуристичный, технологичный, продвинутый
**Шрифтовые пары (рекомендуемые):** Sora + DM Sans | Space Grotesk + Inter | JetBrains Mono + Geist
**Ключевые компоненты:** aurora-background, shimmer-button, bento-grid, border-beam, animated-beam, text-shimmer

```css
/* === DARK TECH === */
:root {
  --background: oklch(0.985 0.002 240);
  --foreground: oklch(0.145 0.005 240);
  --card: oklch(0.97 0.003 240);
  --card-foreground: oklch(0.145 0.005 240);
  --popover: oklch(0.97 0.003 240);
  --popover-foreground: oklch(0.145 0.005 240);
  --primary: oklch(0.55 0.17 195);          /* cyan — главный акцент */
  --primary-foreground: oklch(0.985 0.002 195);
  --secondary: oklch(0.93 0.008 240);
  --secondary-foreground: oklch(0.25 0.01 240);
  --muted: oklch(0.93 0.008 240);
  --muted-foreground: oklch(0.55 0.01 240);
  --accent: oklch(0.93 0.015 195);
  --accent-foreground: oklch(0.25 0.01 240);
  --destructive: oklch(0.55 0.22 27);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.88 0.008 240);
  --input: oklch(0.88 0.008 240);
  --ring: oklch(0.55 0.17 195);
  --radius: 0.625rem;
  --chart-1: oklch(0.55 0.17 195);
  --chart-2: oklch(0.65 0.15 160);
  --chart-3: oklch(0.60 0.20 280);
  --chart-4: oklch(0.70 0.18 140);
  --chart-5: oklch(0.55 0.15 310);
}

.dark {
  --background: oklch(0.08 0.01 240);       /* почти чёрный с синеватым */
  --foreground: oklch(0.93 0.005 240);
  --card: oklch(0.12 0.012 240);
  --card-foreground: oklch(0.93 0.005 240);
  --popover: oklch(0.12 0.012 240);
  --popover-foreground: oklch(0.93 0.005 240);
  --primary: oklch(0.65 0.19 195);          /* cyan ярче для тёмного фона */
  --primary-foreground: oklch(0.08 0.01 195);
  --secondary: oklch(0.18 0.015 240);
  --secondary-foreground: oklch(0.85 0.005 240);
  --muted: oklch(0.18 0.015 240);
  --muted-foreground: oklch(0.55 0.01 240);
  --accent: oklch(0.20 0.025 195);
  --accent-foreground: oklch(0.85 0.005 240);
  --destructive: oklch(0.50 0.20 27);
  --destructive-foreground: oklch(0.93 0 0);
  --border: oklch(0.22 0.015 240);
  --input: oklch(0.22 0.015 240);
  --ring: oklch(0.65 0.19 195);
  --chart-1: oklch(0.65 0.19 195);
  --chart-2: oklch(0.70 0.16 160);
  --chart-3: oklch(0.65 0.18 280);
  --chart-4: oklch(0.75 0.16 140);
  --chart-5: oklch(0.60 0.17 310);
  --sidebar-background: oklch(0.06 0.01 240);
  --sidebar-foreground: oklch(0.85 0.005 240);
  --sidebar-primary: oklch(0.65 0.19 195);
  --sidebar-primary-foreground: oklch(0.08 0.01 195);
  --sidebar-accent: oklch(0.15 0.02 240);
  --sidebar-accent-foreground: oklch(0.85 0.005 240);
  --sidebar-border: oklch(0.18 0.015 240);
  --sidebar-ring: oklch(0.65 0.19 195);
}
```

**Artifact HEX эквиваленты (Tailwind v3 CDN):**
- background: #050510 (dark default) / #fafbfe (light)
- primary: #06b6d4 (cyan-500)
- primary-foreground: #ecfeff
- secondary: #1e293b
- muted-foreground: #94a3b8
- border: #1e293b
- destructive: #ef4444

---

### ПРЕСЕТ 2: LIGHT CORPORATE (Business / Enterprise / Fintech)
**Характер:** Чистый, профессиональный, надёжный
**Шрифтовые пары:** Plus Jakarta Sans + Noto Sans | Instrument Sans + Source Sans 3 | Manrope + Inter
**Ключевые компоненты:** hero1, card, badge, feature1, pricing2, stats8, table

```css
/* === LIGHT CORPORATE === */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.50 0.18 260);           /* blue — надёжность */
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.95 0.005 260);
  --secondary-foreground: oklch(0.25 0.01 260);
  --muted: oklch(0.95 0.005 260);
  --muted-foreground: oklch(0.50 0.01 260);
  --accent: oklch(0.95 0.01 260);
  --accent-foreground: oklch(0.25 0.01 260);
  --destructive: oklch(0.55 0.22 27);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.90 0.005 260);
  --input: oklch(0.90 0.005 260);
  --ring: oklch(0.50 0.18 260);
  --radius: 0.5rem;
  --chart-1: oklch(0.50 0.18 260);
  --chart-2: oklch(0.60 0.15 200);
  --chart-3: oklch(0.55 0.12 300);
  --chart-4: oklch(0.65 0.15 150);
  --chart-5: oklch(0.50 0.18 30);
}

.dark {
  --background: oklch(0.10 0.005 260);
  --foreground: oklch(0.93 0.003 260);
  --card: oklch(0.14 0.008 260);
  --card-foreground: oklch(0.93 0.003 260);
  --popover: oklch(0.14 0.008 260);
  --popover-foreground: oklch(0.93 0.003 260);
  --primary: oklch(0.60 0.20 260);
  --primary-foreground: oklch(0.10 0.005 260);
  --secondary: oklch(0.20 0.01 260);
  --secondary-foreground: oklch(0.85 0.005 260);
  --muted: oklch(0.20 0.01 260);
  --muted-foreground: oklch(0.55 0.01 260);
  --accent: oklch(0.22 0.015 260);
  --accent-foreground: oklch(0.85 0.005 260);
  --destructive: oklch(0.50 0.20 27);
  --destructive-foreground: oklch(0.93 0 0);
  --border: oklch(0.24 0.01 260);
  --input: oklch(0.24 0.01 260);
  --ring: oklch(0.60 0.20 260);
  --chart-1: oklch(0.60 0.20 260);
  --chart-2: oklch(0.65 0.16 200);
  --chart-3: oklch(0.60 0.14 300);
  --chart-4: oklch(0.70 0.15 150);
  --chart-5: oklch(0.55 0.18 30);
}
```

**Artifact HEX:**
- background: #ffffff / #0f1117
- primary: #2563eb (blue-600)
- secondary: #f1f5f9
- muted-foreground: #64748b
- border: #e2e8f0

---

### ПРЕСЕТ 3: VIBRANT STARTUP (Product Launch / Tech Startup)
**Характер:** Энергичный, молодёжный, смелый
**Шрифтовые пары:** Outfit + Nunito Sans | Urbanist + DM Sans | Poppins + Inter
**Ключевые компоненты:** colourful-text, rainbow-button, lamp, wobble-card, confetti

```css
/* === VIBRANT STARTUP === */
:root {
  --background: oklch(0.985 0 0);
  --foreground: oklch(0.15 0.01 285);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.15 0.01 285);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.15 0.01 285);
  --primary: oklch(0.55 0.24 295);           /* violet — креативность */
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.95 0.01 295);
  --secondary-foreground: oklch(0.30 0.02 295);
  --muted: oklch(0.95 0.008 295);
  --muted-foreground: oklch(0.50 0.015 295);
  --accent: oklch(0.93 0.02 295);
  --accent-foreground: oklch(0.30 0.02 295);
  --destructive: oklch(0.55 0.22 27);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.90 0.01 295);
  --input: oklch(0.90 0.01 295);
  --ring: oklch(0.55 0.24 295);
  --radius: 0.75rem;
  --chart-1: oklch(0.55 0.24 295);
  --chart-2: oklch(0.65 0.20 340);
  --chart-3: oklch(0.60 0.18 200);
  --chart-4: oklch(0.70 0.20 160);
  --chart-5: oklch(0.55 0.22 30);
}

.dark {
  --background: oklch(0.09 0.01 285);
  --foreground: oklch(0.93 0.005 285);
  --card: oklch(0.13 0.015 285);
  --card-foreground: oklch(0.93 0.005 285);
  --popover: oklch(0.13 0.015 285);
  --popover-foreground: oklch(0.93 0.005 285);
  --primary: oklch(0.65 0.26 295);
  --primary-foreground: oklch(0.09 0.01 295);
  --secondary: oklch(0.19 0.02 285);
  --secondary-foreground: oklch(0.85 0.008 285);
  --muted: oklch(0.19 0.015 285);
  --muted-foreground: oklch(0.55 0.015 285);
  --accent: oklch(0.22 0.03 295);
  --accent-foreground: oklch(0.85 0.008 285);
  --destructive: oklch(0.50 0.20 27);
  --destructive-foreground: oklch(0.93 0 0);
  --border: oklch(0.24 0.02 285);
  --input: oklch(0.24 0.02 285);
  --ring: oklch(0.65 0.26 295);
  --chart-1: oklch(0.65 0.26 295);
  --chart-2: oklch(0.70 0.20 340);
  --chart-3: oklch(0.65 0.18 200);
  --chart-4: oklch(0.75 0.18 160);
  --chart-5: oklch(0.60 0.22 30);
}
```

**Artifact HEX:**
- background: #fafafa / #0f0d14
- primary: #7c3aed (violet-600)
- secondary: #f3f0ff
- muted-foreground: #71717a

---

### ПРЕСЕТ 4: LUXURY DARK (Premium / Fashion / Real Estate)
**Характер:** Элегантный, дорогой, минималистичный
**Шрифтовые пары:** Playfair Display + Lora | Cormorant Garamond + Montserrat | Italiana + Nunito
**Ключевые компоненты:** spotlight, glare-card, text-shimmer, focus-cards, hero-parallax

```css
/* === LUXURY DARK === */
:root {
  --background: oklch(0.98 0.003 85);
  --foreground: oklch(0.15 0.01 85);
  --card: oklch(0.96 0.005 85);
  --card-foreground: oklch(0.15 0.01 85);
  --popover: oklch(0.96 0.005 85);
  --popover-foreground: oklch(0.15 0.01 85);
  --primary: oklch(0.60 0.12 75);            /* gold — роскошь */
  --primary-foreground: oklch(0.12 0.01 85);
  --secondary: oklch(0.93 0.008 85);
  --secondary-foreground: oklch(0.25 0.01 85);
  --muted: oklch(0.93 0.005 85);
  --muted-foreground: oklch(0.50 0.01 85);
  --accent: oklch(0.92 0.015 75);
  --accent-foreground: oklch(0.25 0.01 85);
  --destructive: oklch(0.55 0.22 27);
  --destructive-foreground: oklch(0.985 0 0);
  --border: oklch(0.88 0.008 85);
  --input: oklch(0.88 0.008 85);
  --ring: oklch(0.60 0.12 75);
  --radius: 0.375rem;
  --chart-1: oklch(0.60 0.12 75);
  --chart-2: oklch(0.50 0.08 50);
  --chart-3: oklch(0.55 0.10 100);
  --chart-4: oklch(0.65 0.08 30);
  --chart-5: oklch(0.45 0.05 200);
}

.dark {
  --background: oklch(0.07 0.005 85);        /* глубокий чёрный с теплотой */
  --foreground: oklch(0.90 0.01 85);
  --card: oklch(0.11 0.008 85);
  --card-foreground: oklch(0.90 0.01 85);
  --popover: oklch(0.11 0.008 85);
  --popover-foreground: oklch(0.90 0.01 85);
  --primary: oklch(0.70 0.14 75);            /* gold ярче */
  --primary-foreground: oklch(0.07 0.005 85);
  --secondary: oklch(0.16 0.01 85);
  --secondary-foreground: oklch(0.82 0.01 85);
  --muted: oklch(0.16 0.008 85);
  --muted-foreground: oklch(0.50 0.01 85);
  --accent: oklch(0.18 0.015 75);
  --accent-foreground: oklch(0.82 0.01 85);
  --destructive: oklch(0.50 0.20 27);
  --destructive-foreground: oklch(0.90 0 0);
  --border: oklch(0.20 0.01 85);
  --input: oklch(0.20 0.01 85);
  --ring: oklch(0.70 0.14 75);
  --chart-1: oklch(0.70 0.14 75);
  --chart-2: oklch(0.55 0.10 50);
  --chart-3: oklch(0.60 0.08 100);
  --chart-4: oklch(0.70 0.10 30);
  --chart-5: oklch(0.50 0.06 200);
  --sidebar-background: oklch(0.05 0.005 85);
  --sidebar-foreground: oklch(0.82 0.01 85);
  --sidebar-primary: oklch(0.70 0.14 75);
  --sidebar-primary-foreground: oklch(0.05 0.005 85);
  --sidebar-accent: oklch(0.13 0.01 85);
  --sidebar-accent-foreground: oklch(0.82 0.01 85);
  --sidebar-border: oklch(0.16 0.01 85);
  --sidebar-ring: oklch(0.70 0.14 75);
}
```

**Artifact HEX:**
- background: #0a0a08 (dark) / #faf8f2 (light)
- primary: #d4a053 (gold)
- secondary: #1a1a18
- muted-foreground: #8a8a7a

---

### ПРЕСЕТ 5: WARM ORGANIC (Food / Wellness / Eco / Handcraft)
**Характер:** Тёплый, натуральный, уютный
**Шрифтовые пары:** Fraunces + Source Serif 4 | Libre Baskerville + Lato | DM Serif Display + Karla
**Ключевые компоненты:** wavy-background, focus-cards, text-generate-effect, marquee

```css
/* === WARM ORGANIC === */
:root {
  --background: oklch(0.97 0.008 70);        /* тёплый кремовый */
  --foreground: oklch(0.18 0.02 50);
  --card: oklch(0.99 0.005 70);
  --card-foreground: oklch(0.18 0.02 50);
  --popover: oklch(0.99 0.005 70);
  --popover-foreground: oklch(0.18 0.02 50);
  --primary: oklch(0.55 0.14 45);            /* terracotta — земля */
  --primary-foreground: oklch(0.97 0.005 70);
  --secondary: oklch(0.93 0.015 70);
  --secondary-foreground: oklch(0.28 0.02 50);
  --muted: oklch(0.92 0.012 70);
  --muted-foreground: oklch(0.50 0.02 50);
  --accent: oklch(0.91 0.02 45);
  --accent-foreground: oklch(0.28 0.02 50);
  --destructive: oklch(0.55 0.22 27);
  --destructive-foreground: oklch(0.97 0 0);
  --border: oklch(0.87 0.015 70);
  --input: oklch(0.87 0.015 70);
  --ring: oklch(0.55 0.14 45);
  --radius: 0.75rem;
  --chart-1: oklch(0.55 0.14 45);
  --chart-2: oklch(0.60 0.10 130);
  --chart-3: oklch(0.50 0.12 25);
  --chart-4: oklch(0.65 0.08 80);
  --chart-5: oklch(0.45 0.10 170);
}

.dark {
  --background: oklch(0.12 0.015 50);
  --foreground: oklch(0.90 0.012 70);
  --card: oklch(0.16 0.018 50);
  --card-foreground: oklch(0.90 0.012 70);
  --popover: oklch(0.16 0.018 50);
  --popover-foreground: oklch(0.90 0.012 70);
  --primary: oklch(0.65 0.15 45);
  --primary-foreground: oklch(0.12 0.015 50);
  --secondary: oklch(0.22 0.02 50);
  --secondary-foreground: oklch(0.82 0.012 70);
  --muted: oklch(0.22 0.015 50);
  --muted-foreground: oklch(0.55 0.015 50);
  --accent: oklch(0.24 0.025 45);
  --accent-foreground: oklch(0.82 0.012 70);
  --destructive: oklch(0.50 0.20 27);
  --destructive-foreground: oklch(0.90 0 0);
  --border: oklch(0.26 0.02 50);
  --input: oklch(0.26 0.02 50);
  --ring: oklch(0.65 0.15 45);
  --chart-1: oklch(0.65 0.15 45);
  --chart-2: oklch(0.65 0.12 130);
  --chart-3: oklch(0.55 0.14 25);
  --chart-4: oklch(0.70 0.10 80);
  --chart-5: oklch(0.50 0.10 170);
}
```

**Artifact HEX:**
- background: #faf8f5 (light) / #1a1510 (dark)
- primary: #c2703e (terracotta)
- secondary: #f0ece5
- muted-foreground: #8b7e6a

---

## 2. ТИПОГРАФИЧЕСКАЯ ШКАЛА

### 2.1 Размеры (fluid typography с clamp)

```css
/* Production (Tailwind v4 @theme inline) */
@theme inline {
  --font-size-display:  clamp(3rem, 5vw + 1rem, 5rem);      /* Hero H1 */
  --font-size-h1:       clamp(2.25rem, 3.5vw + 0.5rem, 3.75rem);
  --font-size-h2:       clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);
  --font-size-h3:       clamp(1.375rem, 1.5vw + 0.5rem, 1.75rem);
  --font-size-h4:       clamp(1.125rem, 1vw + 0.5rem, 1.375rem);
  --font-size-body-lg:  1.125rem;   /* 18px */
  --font-size-body:     1rem;       /* 16px — МИНИМУМ для mobile */
  --font-size-body-sm:  0.875rem;   /* 14px — только для подписи/мета */
  --font-size-caption:  0.8125rem;  /* 13px */
  --font-size-overline: 0.75rem;    /* 12px — uppercase labels */
}
```

### 2.2 Маппинг heading → шрифт/размер/вес/line-height

| Элемент | Размер | Вес | Line-height | Letter-spacing | Шрифт |
|---|---|---|---|---|---|
| Display (Hero H1) | --font-size-display | 700-800 | 1.05 | -0.02em | Heading font |
| H1 | --font-size-h1 | 700 | 1.1 | -0.015em | Heading font |
| H2 | --font-size-h2 | 600-700 | 1.15 | -0.01em | Heading font |
| H3 | --font-size-h3 | 600 | 1.25 | -0.005em | Heading font |
| H4 | --font-size-h4 | 600 | 1.3 | 0 | Heading font |
| Body Large | --font-size-body-lg | 400 | 1.6 | 0 | Body font |
| Body | --font-size-body | 400 | 1.6 | 0 | Body font |
| Body Small | --font-size-body-sm | 400 | 1.5 | 0 | Body font |
| Caption | --font-size-caption | 400-500 | 1.4 | 0.01em | Body font |
| Overline | --font-size-overline | 600-700 | 1.3 | 0.08em | Body font, uppercase |
| Button | 0.875-1rem | 500-600 | 1.25 | 0.01em | Body font |
| Nav Link | 0.875-1rem | 500 | 1.5 | 0 | Body font |

### 2.3 Правила

- **ЗАПРЕТ:** body text < 16px (1rem) на мобильных устройствах
- **ЗАПРЕТ:** heading без отрицательного letter-spacing (h1-h3 должны быть tight)
- **ПРАВИЛО:** line-height у heading = tight (1.05-1.25), у body = relaxed (1.5-1.6)
- **ПРАВИЛО:** максимальная ширина текста: 65-75 символов (max-w-prose или max-w-2xl)
- **ПРАВИЛО:** heading font ВСЕГДА отличается от body font (обе из одной пары)

### 2.4 Artifact (Tailwind v3 CDN) эквиваленты

```css
/* В <style> тег Artifact */
.display { font-size: clamp(3rem, 5vw + 1rem, 5rem); font-weight: 700; line-height: 1.05; letter-spacing: -0.02em; }
.h1 { font-size: clamp(2.25rem, 3.5vw + 0.5rem, 3.75rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.015em; }
.h2 { font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem); font-weight: 600; line-height: 1.15; letter-spacing: -0.01em; }
.h3 { font-size: clamp(1.375rem, 1.5vw + 0.5rem, 1.75rem); font-weight: 600; line-height: 1.25; }
```

---

## 3. SPACING SYSTEM

### 3.1 Секционный spacing (между секциями страницы)

| Тип | Mobile | Tablet (md) | Desktop (lg) | Tailwind классы |
|---|---|---|---|---|
| Compact | py-12 | py-16 | py-20 | py-12 md:py-16 lg:py-20 |
| Standard | py-16 | py-24 | py-32 | py-16 md:py-24 lg:py-32 |
| Spacious | py-20 | py-28 | py-36 | py-20 md:py-28 lg:py-36 |
| Hero (первая) | py-20 | py-28 | py-40 | py-20 md:py-28 lg:py-40 |

**Правило:** Используем Standard по умолчанию. Compact для dense контента (pricing, FAQ). Spacious для standalone CTA или между крупными блоками.

### 3.2 Контейнер

```
Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Narrow (text):  max-w-3xl mx-auto
Wide (full-width cards): max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8
```

### 3.3 Внутренний spacing

| Контекст | Gap/Padding | Tailwind |
|---|---|---|
| Card внутренний | p-6 md:p-8 | стандарт для всех карточек |
| Feature grid | gap-6 md:gap-8 lg:gap-10 | между карточками |
| Heading → subheading | mt-4 | после h2/h3 |
| Heading → body text | mt-4 md:mt-6 | после heading к описанию |
| Section heading → content | mt-10 md:mt-14 | от заголовка секции до грида |
| Button group | gap-3 md:gap-4 | между кнопками |
| Nav links | gap-6 md:gap-8 | между пунктами навигации |
| Icon → text | gap-2 md:gap-3 | в feature items |
| Form fields | gap-4 md:gap-5 | между полями формы |
| Footer columns | gap-8 md:gap-12 | между колонками |
| Logo cloud | gap-8 md:gap-12 lg:gap-16 | между логотипами |

### 3.4 Правила

- **ЗАПРЕТ:** margin на последнем элементе (используй gap вместо margin-bottom)
- **ЗАПРЕТ:** space-x-* / space-y-* (используй gap с flex/grid — правило shadcn)
- **ПРАВИЛО:** padding карточек масштабируется: p-5 (mobile) → p-6 (md) → p-8 (lg)
- **ПРАВИЛО:** gap между элементами грида всегда >= 1.5rem (gap-6)

---

## 4. Z-INDEX ШКАЛА (NEW-4: закрыт)

```css
@theme inline {
  /* Structured z-index scale — единая для всего проекта */
  --z-background:    -1;    /* фоновые декорации (noise, patterns) */
  --z-default:        0;    /* стандартный контент */
  --z-card:           1;    /* карточки с hover эффектами */
  --z-sticky:        10;    /* sticky элементы (banner, scroll-progress) */
  --z-navbar:        40;    /* навигация (floating-navbar, resizable-navbar) */
  --z-dropdown:      50;    /* dropdown-menu, popover, tooltip */
  --z-modal:         50;    /* dialog, sheet, drawer, animated-modal */
  --z-toast:         60;    /* toast, sonner */
  --z-overlay:       70;    /* overlay за модалками */
  --z-spotlight:     80;    /* spotlight, following-pointer */
  --z-max:          100;    /* emergency override only */
}
```

**Правила:**
- **ЗАПРЕТ:** z-[9999] или произвольные z-index (только шкала)
- **ПРАВИЛО:** shadcn overlay компоненты (Dialog, Sheet, Drawer) управляют z-index сами — НЕ добавлять z-* к ним
- **ПРАВИЛО:** Navbar ВСЕГДА ниже модалок (z-40 < z-50)
- **ПРАВИЛО:** Toast ВСЕГДА выше модалок (z-60 > z-50)
- **ПРАВИЛО:** Фоновые эффекты (noise-background, aurora) = z-[-1] + pointer-events-none

---

## 5. ТЕНИ И ЭФФЕКТЫ (B-04: закрыт)

### 5.1 Тени (по уровням elevation)

```css
/* Tailwind v4 named shadows */
--shadow-xs:   0 1px 2px 0 oklch(0 0 0 / 0.03);
--shadow-sm:   0 1px 3px 0 oklch(0 0 0 / 0.06), 0 1px 2px -1px oklch(0 0 0 / 0.06);
--shadow-md:   0 4px 6px -1px oklch(0 0 0 / 0.07), 0 2px 4px -2px oklch(0 0 0 / 0.05);
--shadow-lg:   0 10px 15px -3px oklch(0 0 0 / 0.08), 0 4px 6px -4px oklch(0 0 0 / 0.05);
--shadow-xl:   0 20px 25px -5px oklch(0 0 0 / 0.08), 0 8px 10px -6px oklch(0 0 0 / 0.04);
--shadow-2xl:  0 25px 50px -12px oklch(0 0 0 / 0.2);
```

| Элемент | Тень | Hover тень |
|---|---|---|
| Card (default) | shadow-sm | shadow-md (transition) |
| Card (elevated) | shadow-md | shadow-lg |
| Navbar (floating) | shadow-lg | — |
| Modal/Dialog | shadow-2xl | — |
| Button (primary) | shadow-sm | shadow-md |
| Dropdown | shadow-lg | — |
| Toast | shadow-lg | — |

### 5.2 Backdrop blur

| Элемент | Blur | Классы |
|---|---|---|
| Glass card | backdrop-blur-xl | bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] |
| Navbar (scroll) | backdrop-blur-md | bg-background/80 backdrop-blur-md |
| Modal overlay | backdrop-blur-sm | bg-black/50 backdrop-blur-sm |

### 5.3 Focus ring (accessibility)

```css
/* Стандартный focus ring для всех интерактивных элементов */
.focus-ring {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
/* Tailwind: focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 */
```

---

## 6. МАППИНГ КОМПОНЕНТ → ПРЕСЕТ (B-05: закрыт)

### Лучшие компоненты для каждого пресета

| Компонент | Dark Tech | Light Corp | Vibrant | Luxury | Warm |
|---|---|---|---|---|---|
| **Backgrounds** |||||
| aurora-background | ★★★ | ☆ | ★★ | ★ | ☆ |
| noise-background | ★★★ | ★ | ★ | ★★★ | ★★ |
| wavy-background | ★ | ★ | ★★ | ★ | ★★★ |
| dot-pattern | ★★ | ★★★ | ★ | ★ | ★★ |
| grid-pattern | ★★★ | ★★ | ★ | ☆ | ☆ |
| stars-background | ★★ | ☆ | ★ | ★★★ | ☆ |
| **Heroes** |||||
| lamp | ★★★ | ☆ | ★★★ | ★★ | ☆ |
| hero-parallax | ★★ | ★★ | ★★ | ★★★ | ★★ |
| hero-highlight | ★★ | ★★★ | ★★ | ★ | ★ |
| hero-video-dialog | ★★ | ★★★ | ★★★ | ★★ | ★★ |
| **Text** |||||
| text-shimmer | ★★★ | ☆ | ★★ | ★★★ | ☆ |
| colourful-text | ★★ | ☆ | ★★★ | ☆ | ★ |
| text-generate-effect | ★★★ | ★★ | ★★ | ★★ | ★★ |
| typewriter-effect | ★★ | ★★ | ★★★ | ★ | ★ |
| **Cards** |||||
| magic-card | ★★★ | ★ | ★★ | ★★ | ★ |
| wobble-card | ★ | ★ | ★★★ | ☆ | ★★ |
| glare-card | ★★★ | ☆ | ★ | ★★★ | ☆ |
| focus-cards | ★★ | ★★ | ★★ | ★★★ | ★★★ |
| **Buttons** |||||
| shimmer-button | ★★★ | ★ | ★★ | ★★ | ☆ |
| rainbow-button | ☆ | ☆ | ★★★ | ☆ | ☆ |
| shiny-button | ★★ | ★★★ | ★ | ★★ | ★ |
| **Effects** |||||
| border-beam | ★★★ | ☆ | ★★ | ★★ | ☆ |
| spotlight | ★★ | ☆ | ★ | ★★★ | ☆ |
| animated-beam | ★★★ | ★★ | ★ | ★ | ☆ |
| sparkles | ★★ | ☆ | ★★★ | ★★ | ★ |
| confetti | ☆ | ☆ | ★★★ | ☆ | ★ |
| **Layout** |||||
| bento-grid | ★★★ | ★★ | ★★ | ★ | ★ |

**Легенда:** ★★★ = идеально подходит | ★★ = хорошо | ★ = можно использовать | ☆ = не рекомендуется

---

## 7. СТАТУС ЗАКРЫТИЯ ПРОБЕЛОВ

| ID | Пробел | Статус |
|---|---|---|
| B-01 | Цветовые палитры (5 пресетов × полный набор) | ✅ ЗАКРЫТ |
| B-02 | Типографическая шкала | ✅ ЗАКРЫТ |
| B-03 | Spacing system | ✅ ЗАКРЫТ |
| B-04 | Тени и эффекты | ✅ ЗАКРЫТ |
| B-05 | Маппинг компонент→пресет | ✅ ЗАКРЫТ |
| NEW-4 | z-index конфликты | ✅ ЗАКРЫТ |

**Фаза 1A: 6/6 пробелов закрыты = 100%**

---

## СЛЕДУЮЩИЙ ШАГ: Фаза 1B — Технические пробелы (G-01, G-02, G-03)
