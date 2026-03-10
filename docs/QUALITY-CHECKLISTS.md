# ЧЕКЛИСТЫ КАЧЕСТВА — ФАЗА 2
## Пробелы: E-01 (scoring rubric), E-03 (a11y), E-04 (SEO), E-05 (performance)
## Дата: 10 марта 2026

---

## 1. SCORING RUBRIC — 60 пунктов (E-01: закрыт)

Каждый пункт: ✅ (1 балл) / ❌ (0 баллов)
**Проходной балл: 54/60 (90%)**
**Минимум для выпуска: 48/60 (80%) + все КРИТИЧНЫЕ = ✅**

### КАТЕГОРИЯ A: ВИЗУАЛЬНОЕ КАЧЕСТВО (15 пунктов)

| # | Критерий | Вес |
|---|---|---|
| A-01 | Hero секция вызывает WOW-эффект (не generic template) | КРИТ |
| A-02 | Шрифтовая пара уникальна (НЕ Inter-only, НЕ Roboto-only) | КРИТ |
| A-03 | Цветовая палитра согласована (не случайные цвета) | КРИТ |
| A-04 | Визуальная иерархия: H1 > H2 > H3 > body чётко различимы | НОРМ |
| A-05 | Hover states на ВСЕХ интерактивных элементах (кнопки, карточки, ссылки) | КРИТ |
| A-06 | Scroll-reveal анимация на КАЖДОЙ секции | КРИТ |
| A-07 | Не purple gradient на белом фоне | КРИТ |
| A-08 | Не uniform border-radius везде (вариация для разных элементов) | НОРМ |
| A-09 | Не весь текст по центру (вариация alignment) | НОРМ |
| A-10 | Достаточный контраст текст/фон (ratio ≥ 4.5:1 для body, ≥ 3:1 для large) | КРИТ |
| A-11 | Изображения/иллюстрации стилистически согласованы | НОРМ |
| A-12 | Иконки из одного набора (Lucide recommended) | НОРМ |
| A-13 | CTA кнопки визуально выделяются (не теряются в дизайне) | КРИТ |
| A-14 | Footer не выглядит как afterthought (полноценный дизайн) | НОРМ |
| A-15 | Spacing между секциями consistent (py-16 md:py-24 lg:py-32 или вариант) | НОРМ |

### КАТЕГОРИЯ B: КОД И СТРУКТУРА (15 пунктов)

| # | Критерий | Вес |
|---|---|---|
| B-01 | Semantic HTML: header, nav, main, section, footer | КРИТ |
| B-02 | Ровно один H1 на страницу | КРИТ |
| B-03 | Правильная иерархия headings (H1→H2→H3, не пропускать уровни) | КРИТ |
| B-04 | Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 (или equivalent) | НОРМ |
| B-05 | Нет inline styles (всё через Tailwind classes) | НОРМ |
| B-06 | Нет !important (кроме исключительных случаев) | НОРМ |
| B-07 | Компоненты используют правильные импорты (motion/react, НЕ framer-motion) | КРИТ |
| B-08 | 'use client' только где нужно (не на page.tsx) | НОРМ |
| B-09 | TypeScript: нет any, нет @ts-ignore | НОРМ |
| B-10 | Нет console.log в production коде | НОРМ |
| B-11 | Все ключи в списках (key prop) уникальны и стабильны | НОРМ |
| B-12 | Нет утечек памяти (cleanup в useEffect) | НОРМ |
| B-13 | CSS variables для цветов (не hardcoded hex/rgb) | КРИТ |
| B-14 | Tailwind v4 синтаксис (bg-linear-to-r, shadow-sm, border border-border) | КРИТ |
| B-15 | npm run build проходит без ошибок | КРИТ |

### КАТЕГОРИЯ C: RESPONSIVE (10 пунктов)

| # | Критерий | Вес |
|---|---|---|
| C-01 | Mobile-first: base стили = mobile, md:/lg: = desktop | КРИТ |
| C-02 | Body text ≥ 16px на mobile | КРИТ |
| C-03 | Tap targets ≥ 44×44px на mobile | КРИТ |
| C-04 | Навигация: hamburger menu на mobile | КРИТ |
| C-05 | Grid collapse: 3 col → 2 → 1 на mobile | НОРМ |
| C-06 | Изображения responsive (не overflow на mobile) | КРИТ |
| C-07 | Горизонтальный scroll отсутствует на mobile | КРИТ |
| C-08 | Pricing cards: stack вертикально на mobile | НОРМ |
| C-09 | Footer: columns stack на mobile | НОРМ |
| C-10 | Hero: адаптируется без потери читаемости | НОРМ |

### КАТЕГОРИЯ D: UX И КОНТЕНТ (10 пунктов)

| # | Критерий | Вес |
|---|---|---|
| D-01 | CTA конкретные ("Start Free Trial"), НЕ generic ("Learn More") | КРИТ |
| D-02 | Нет generic copy ("Revolutionize", "Transform your workflow") | КРИТ |
| D-03 | Navigation содержит все ключевые ссылки | НОРМ |
| D-04 | Pricing понятен без разъяснений | НОРМ |
| D-05 | FAQ отвечает на реальные вопросы (не placeholder) | НОРМ |
| D-06 | Social proof присутствует (testimonials/logos/stats) | НОРМ |
| D-07 | Есть чёткий value proposition в первых 3 секундах | КРИТ |
| D-08 | Контактная информация доступна (footer или contact section) | НОРМ |
| D-09 | Переходы между секциями логичны (story flow) | НОРМ |
| D-10 | Нет lorem ipsum или явного placeholder текста | КРИТ |

### КАТЕГОРИЯ E: ACCESSIBILITY + SEO + PERFORMANCE (10 пунктов)

| # | Критерий | Вес |
|---|---|---|
| E-01 | Alt text на всех изображениях (или aria-hidden для декоративных) | КРИТ |
| E-02 | Focus visible на интерактивных элементах (keyboard navigation) | КРИТ |
| E-03 | ARIA labels на иконках-кнопках | НОРМ |
| E-04 | Meta title уникальный и описательный (50-60 символов) | КРИТ |
| E-05 | Meta description (150-160 символов) | КРИТ |
| E-06 | Open Graph теги (og:title, og:description, og:image) | НОРМ |
| E-07 | Изображения: next/image с width/height (no CLS) | КРИТ |
| E-08 | Шрифты: font-display swap или next/font/google | НОРМ |
| E-09 | Нет layout shift при загрузке (skeleton/placeholder) | НОРМ |
| E-10 | Lazy loading на изображениях below the fold | НОРМ |

### ПОДСЧЁТ

- **КРИТИЧНЫХ пунктов:** 26 (все ДОЛЖНЫ быть ✅)
- **НОРМАЛЬНЫХ пунктов:** 34
- **Формула:** Score = (✅ count) / 60 × 100%
- **БЛОКЕР:** Если ЛЮБОЙ КРИТ = ❌, сайт НЕ выпускается до исправления

---

## 2. ACCESSIBILITY CHECKLIST — WCAG 2.1 AA (E-03: закрыт)

### Обязательные (Level A + AA)

**Восприимчивость:**
- [ ] Все изображения имеют alt text (информативные = описание, декоративные = `alt=""` или `aria-hidden="true"`)
- [ ] Контраст текста: ≥4.5:1 для обычного, ≥3:1 для крупного (≥18px bold или ≥24px)
- [ ] Контраст UI элементов: ≥3:1 для границ, иконок, focus indicators
- [ ] Информация не передаётся только цветом (+ иконка или текст)
- [ ] Видео имеет субтитры (если применимо)
- [ ] Контент читаем при увеличении до 200%

**Управляемость:**
- [ ] Вся функциональность доступна с клавиатуры (Tab, Enter, Escape)
- [ ] Focus indicator видимый на ВСЕХ интерактивных элементах
- [ ] Порядок Tab логичен (left→right, top→bottom)
- [ ] Skip link ("Skip to main content") для keyboard users
- [ ] Нет keyboard traps (можно Tab out из любого элемента)
- [ ] Модалки: focus trap внутри + Escape закрывает + focus возвращается
- [ ] Меню: Enter открывает, Escape закрывает, Arrow keys навигация
- [ ] Motion: `prefers-reduced-motion` отключает анимации

**Понятность:**
- [ ] `lang` атрибут на `<html>` (lang="en" или lang="ru")
- [ ] Формы: каждый input имеет `<label>` (или aria-label)
- [ ] Ошибки форм: описательные сообщения рядом с полем
- [ ] Ссылки: текст описывает назначение (НЕ "click here")

**Робастность:**
- [ ] Валидный HTML (нет duplicate IDs)
- [ ] ARIA roles корректны (role="button" только на не-кнопках)
- [ ] Интерактивные элементы используют правильные HTML теги (button, a, input)

### Паттерны для наших компонентов

| Компонент | A11y требования |
|---|---|
| floating-navbar | role="navigation", aria-label="Main navigation", hamburger: aria-expanded |
| dialog/sheet/drawer | role="dialog", aria-modal="true", focus trap, Escape to close |
| accordion/faq | aria-expanded, aria-controls, Enter/Space toggle |
| carousel | aria-roledescription="carousel", aria-label, pause on hover |
| tabs | role="tablist"/"tab"/"tabpanel", aria-selected, Arrow keys |
| tooltip | role="tooltip", aria-describedby, keyboard accessible |
| toast | role="alert" или role="status", auto-dismiss с достаточным временем |
| marquee | prefers-reduced-motion: pause |
| ALL animations | prefers-reduced-motion: reduce → static альтернатива |

### Паттерн для prefers-reduced-motion

```css
/* Production (Motion 12) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Artifact (CSS) */
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
}
```

---

## 3. SEO CHECKLIST (E-04: закрыт)

### Обязательные meta теги

```tsx
// app/layout.tsx — Server Component
export const metadata = {
  title: {
    template: '%s | Brand Name',
    default: 'Brand Name — Tagline',
  },
  description: 'Описание 150-160 символов',
  openGraph: {
    title: 'Brand Name — Tagline',
    description: 'Описание для шеринга',
    url: 'https://example.com',
    siteName: 'Brand Name',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Name',
    description: 'Описание',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};
```

### Структурные требования

- [ ] Один `<h1>` на страницу (содержит главный keyword)
- [ ] Правильная иерархия H1→H2→H3 (не пропускать)
- [ ] Semantic HTML (nav, main, article, section, aside, footer)
- [ ] Внутренние ссылки используют `<Link>` из Next.js (не `<a>`)
- [ ] Изображения: alt text с описанием (для индексации)
- [ ] URL-структура: чистые, описательные (/about, /pricing, не /page1)
- [ ] Canonical URL указан
- [ ] sitemap.xml (Next.js генерирует автоматически через app/sitemap.ts)
- [ ] robots.txt (app/robots.ts)

### JSON-LD Structured Data (рекомендуется)

```tsx
// Для Organization (корневая страница)
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brand Name",
  url: "https://example.com",
  logo: "https://example.com/logo.png",
  sameAs: ["https://twitter.com/brand", "https://linkedin.com/company/brand"]
})}
</script>

// Для FAQ секции
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
}
```

---

## 4. PERFORMANCE CHECKLIST (E-05: закрыт)

### Изображения
- [ ] Все через `next/image` (автоматическая оптимизация, WebP/AVIF)
- [ ] Width + height указаны (предотвращает CLS)
- [ ] `priority` на hero image (above the fold)
- [ ] `loading="lazy"` на below-the-fold (default в next/image)
- [ ] Placeholder: `placeholder="blur"` + `blurDataURL` для LCP image
- [ ] Sizes prop для responsive: `sizes="(max-width: 768px) 100vw, 50vw"`

### Шрифты
- [ ] `next/font/google` с subset (latin, cyrillic если нужно)
- [ ] Максимум 2 шрифта, 2-3 веса каждый
- [ ] `display: 'swap'` (default в next/font)
- [ ] CSS variables для использования в Tailwind

```tsx
import { Sora, DM_Sans } from 'next/font/google';
const heading = Sora({ subsets: ['latin'], variable: '--font-heading', weight: ['600', '700'] });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500'] });
// В layout: <body className={`${heading.variable} ${body.variable}`}>
```

### Bundle Size
- [ ] Нет импорта всей библиотеки (tree-shaking: `import { motion } from 'motion/react'`)
- [ ] Dynamic imports для тяжёлых компонентов (3D globe, Three.js)
- [ ] `next/dynamic` с `{ ssr: false }` для browser-only компонентов

```tsx
import dynamic from 'next/dynamic';
const Globe3D = dynamic(() => import('@/components/ui/3d-globe'), { ssr: false });
```

### Рендеринг
- [ ] Server Components по умолчанию (меньше JS на клиенте)
- [ ] Suspense boundaries для async секций
- [ ] Streaming: тяжёлые секции грузятся отдельно
- [ ] Нет блокирующих запросов в head

### Анимации
- [ ] `will-change` только при необходимости (не на всё подряд)
- [ ] `transform` для анимаций (не left/top/width/height)
- [ ] `IntersectionObserver` для scroll-triggered (не scroll event listener)
- [ ] Не более 3 тяжёлых анимаций одновременно на viewport

---

## 5. СТАТУС ЗАКРЫТИЯ

| ID | Пробел | Статус |
|---|---|---|
| E-01 | Scoring rubric 50+ пунктов | ✅ ЗАКРЫТ (60 пунктов, 26 критичных) |
| E-02 | Reference примеры | ❌ ОТКРЫТ (отложено — не блокирует) |
| E-03 | Accessibility чеклист | ✅ ЗАКРЫТ (WCAG 2.1 AA) |
| E-04 | SEO чеклист | ✅ ЗАКРЫТ |
| E-05 | Performance чеклист | ✅ ЗАКРЫТ |

**Фаза 2: 4/5 закрыты = 80% (E-02 не блокирует следующую фазу)**

---

## СЛЕДУЮЩИЙ ШАГ: Фаза 3 — Блюпринты и рецепты (C-01, C-02, A-06)
