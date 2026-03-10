# БЛЮПРИНТЫ И РЕЦЕПТЫ — ФАЗА 3
## Пробелы: C-01 (блюпринты), C-02 (варианты секций), C-03 (responsive), C-04 (анимации), A-06 (рецепты)
## Дата: 10 марта 2026

---

## 1. БЛЮПРИНТЫ — 10 ТИПОВ САЙТОВ (C-01: закрыт)

### Формат каждого блюпринта:
- Тип и аудитория
- Рекомендуемый пресет (из 5)
- Секции (порядок и обязательность)
- Компоненты (UI + Blocks)
- Фокус: что должно быть WOW

---

### BP-01: SaaS / AI Product Landing Page
**Аудитория:** Разработчики, PM, decision-makers
**Пресет:** Dark Tech или Light Corporate
**Шрифты:** Sora + DM Sans | Space Grotesk + Inter

| # | Секция | Block | UI компоненты | Обязательно |
|---|---|---|---|---|
| 1 | Navbar | navbar1 | floating-navbar | ✅ |
| 2 | Hero | hero1 / hero3 | aurora-background, text-generate-effect, shimmer-button | ✅ |
| 3 | Logo Cloud | logos8 | marquee | ✅ |
| 4 | Features | feature13 / feature1 | bento-grid, magic-card, border-beam | ✅ |
| 5 | How It Works | feature51 | tracing-beam, animated-number | ⬜ |
| 6 | Stats | stats8 | number-ticker | ⬜ |
| 7 | Testimonials | testimonial10 | animated-testimonials, avatar-circles | ✅ |
| 8 | Pricing | pricing2 | shadcn-tabs (toggle) | ✅ |
| 9 | FAQ | faq1 | shadcn-accordion | ✅ |
| 10 | CTA | cta10 | shimmer-button | ✅ |
| 11 | Footer | footer2 | — | ✅ |

**WOW-фокус:** Hero (aurora-background + text animation) + Features (bento-grid layout)

---

### BP-02: Corporate / Business
**Аудитория:** B2B клиенты, партнёры, инвесторы
**Пресет:** Light Corporate
**Шрифты:** Plus Jakarta Sans + Noto Sans | Manrope + Inter

| # | Секция | Block | UI компоненты | Обязательно |
|---|---|---|---|---|
| 1 | Navbar | navbar1 | resizable-navbar | ✅ |
| 2 | Hero | hero1 / hero3 | hero-highlight, shiny-button | ✅ |
| 3 | Logo Cloud | logos8 | marquee | ✅ |
| 4 | Services | service1 / services4 | card, hover-card | ✅ |
| 5 | About | about3 | — | ✅ |
| 6 | Stats | stats8 | number-ticker | ⬜ |
| 7 | Case Studies | casestudies2 | card, badge | ⬜ |
| 8 | Team | team1 | avatar | ⬜ |
| 9 | Testimonials | testimonial10 | animated-testimonials | ✅ |
| 10 | CTA | cta10 / cta11 | shiny-button | ✅ |
| 11 | Footer | footer2 | — | ✅ |

**WOW-фокус:** Clean professional hero + Stats (animated counters) + Trust (logos + testimonials)

---

### BP-03: Agency / Portfolio
**Аудитория:** Потенциальные клиенты
**Пресет:** Luxury Dark или Dark Tech
**Шрифты:** Playfair Display + Lora | Cormorant + Montserrat

| # | Секция | Block | UI компоненты | Обязательно |
|---|---|---|---|---|
| 1 | Navbar | — | floating-navbar | ✅ |
| 2 | Hero | — | hero-parallax, colourful-text, text-shimmer | ✅ |
| 3 | Work/Portfolio | — | focus-cards, apple-cards-carousel, lens | ✅ |
| 4 | Services | service1 | magic-card, spotlight | ✅ |
| 5 | Process | feature51 | tracing-beam | ⬜ |
| 6 | About | about3 | — | ⬜ |
| 7 | Testimonials | testimonial10 | marquee, avatar-circles | ✅ |
| 8 | Contact | contact7 | magnetic (button) | ✅ |
| 9 | Footer | footer2 | — | ✅ |

**WOW-фокус:** Hero (parallax + text effect) + Portfolio grid (карточки с эффектами)

---

### BP-04: E-commerce / Product Page
**Аудитория:** Покупатели
**Пресет:** Light Corporate или Vibrant Startup
**Шрифты:** Outfit + Nunito Sans | Urbanist + DM Sans

| # | Секция | Block | UI компоненты | Обязательно |
|---|---|---|---|---|
| 1 | Navbar | navbar1 | resizable-navbar | ✅ |
| 2 | Hero (Product) | hero45 | hero-video-dialog, compare | ✅ |
| 3 | Features | feature43 / feature2 | 3d-card, tabs | ✅ |
| 4 | Gallery | gallery6 | lens, image-comparison | ✅ |
| 5 | Specs | feature166 | table | ⬜ |
| 6 | Reviews | testimonial10 | animated-testimonials | ✅ |
| 7 | Pricing | pricing4 | badge | ✅ |
| 8 | FAQ | faq1 | shadcn-accordion | ✅ |
| 9 | CTA | cta10 | rainbow-button | ✅ |
| 10 | Footer | footer2 | — | ✅ |

**WOW-фокус:** Product showcase (video + comparison) + Gallery (lens zoom)

---

### BP-05: Startup Launch / Coming Soon
**Аудитория:** Early adopters, инвесторы
**Пресет:** Vibrant Startup или Dark Tech
**Шрифты:** Outfit + Nunito Sans | Sora + DM Sans

| # | Секция | Block | UI компоненты | Обязательно |
|---|---|---|---|---|
| 1 | Navbar | — | floating-navbar (minimal) | ✅ |
| 2 | Hero + Waitlist | — | lamp, text-generate-effect, waitlist1 | ✅ |
| 3 | Problem/Solution | feature2 | wobble-card | ✅ |
| 4 | Features | feature72 | card-hover-effect | ✅ |
| 5 | How It Works | feature51 | tracing-beam | ⬜ |
| 6 | Social Proof | — | infinite-moving-cards | ⬜ |
| 7 | CTA | cta11 | rainbow-button, confetti | ✅ |
| 8 | Footer | footer2 (minimal) | — | ✅ |

**WOW-фокус:** Hero (lamp + waitlist integration) + Energy (vibrant colors + confetti)

---

### BP-06: Restaurant / Local Business
**Аудитория:** Местные клиенты
**Пресет:** Warm Organic или Luxury Dark
**Шрифты:** Fraunces + Source Serif 4 | DM Serif Display + Karla

| # | Секция | Block | UI компоненты | Обязательно |
|---|---|---|---|---|
| 1 | Navbar | navbar1 | — | ✅ |
| 2 | Hero | hero115 / hero3 | wavy-background | ✅ |
| 3 | About / Story | about3 | — | ✅ |
| 4 | Menu / Services | service1 | card, badge (prices) | ✅ |
| 5 | Gallery | gallery6 | focus-cards | ✅ |
| 6 | Reviews | testimonial10 | marquee | ✅ |
| 7 | Location + Hours | contact7 | — | ✅ |
| 8 | CTA (Reserve) | cta10 | shiny-button | ✅ |
| 9 | Footer | footer2 | — | ✅ |

**WOW-фокус:** Фотографии (gallery) + Атмосфера (warm colors + serif fonts)

---

### BP-07: Personal Brand / CV
**Аудитория:** Работодатели, клиенты
**Пресет:** Dark Tech или Light Corporate
**Шрифты:** Space Grotesk + Inter | JetBrains Mono + Geist

| # | Секция | Block | UI компоненты | Обязательно |
|---|---|---|---|---|
| 1 | Navbar | — | floating-navbar (minimal) | ✅ |
| 2 | Hero (Intro) | — | text-generate-effect, magnetic (photo) | ✅ |
| 3 | Experience | experience5 | timeline9 | ✅ |
| 4 | Skills | — | bento-grid, progress | ✅ |
| 5 | Projects | — | focus-cards, 3d-card | ✅ |
| 6 | Testimonials | — | animated-testimonials | ⬜ |
| 7 | Contact | contact7 | — | ✅ |
| 8 | Footer | footer2 (minimal) | — | ✅ |

---

### BP-08: Event / Conference
**Пресет:** Vibrant Startup или Dark Tech
**Шрифты:** Urbanist + DM Sans | Outfit + Inter

| # | Секция | Ключевые компоненты |
|---|---|---|
| 1 | Navbar | floating-navbar |
| 2 | Hero (дата + название) | hero-highlight, text-shimmer, countdown (custom) |
| 3 | Speakers | team1, avatar-circles, 3d-card |
| 4 | Schedule | tabs, table, timeline9 |
| 5 | Venue | world-map или embed map |
| 6 | Sponsors | logos8, marquee |
| 7 | CTA (Register) | cta11, shimmer-button |
| 8 | Footer | footer2 |

---

### BP-09: Real Estate / Property
**Пресет:** Luxury Dark или Light Corporate
**Шрифты:** Cormorant Garamond + Montserrat | Playfair Display + Source Sans 3

| # | Секция | Ключевые компоненты |
|---|---|---|
| 1 | Navbar | resizable-navbar |
| 2 | Hero (Property showcase) | hero-video-dialog, hero-parallax |
| 3 | Features/Amenities | feature1, icon grid |
| 4 | Gallery | gallery6, lens, image-comparison |
| 5 | Floor Plans | tabs, safari (mockup) |
| 6 | Location | world-map, stats8 |
| 7 | Testimonials | testimonial10 |
| 8 | Contact / Schedule Visit | contact7, CTA |
| 9 | Footer | footer2 |

---

### BP-10: Auto Import / Car Service (для проекта ОЗ)
**Пресет:** Dark Tech или Light Corporate
**Шрифты:** Space Grotesk + DM Sans | Manrope + Inter

| # | Секция | Ключевые компоненты | Обязательно |
|---|---|---|---|
| 1 | Navbar | navbar1 / resizable-navbar | ✅ |
| 2 | Hero | hero1 / hero3 + фото авто | ✅ |
| 3 | Calculator (интеграция) | Embed car-calc из репо | ✅ |
| 4 | Services | service1, card | ✅ |
| 5 | How It Works | feature51, tracing-beam | ✅ |
| 6 | Gallery авто | gallery6, focus-cards | ⬜ |
| 7 | Reviews | testimonial10, animated-testimonials | ✅ |
| 8 | FAQ | faq1, shadcn-accordion | ✅ |
| 9 | Contact | contact7 | ✅ |
| 10 | Footer | footer2 | ✅ |

**Специальное:** Калькулятор из https://github.com/onionab1409-stack/car-calc интегрируется как iframe или React component.

---

## 2. ВАРИАНТЫ КЛЮЧЕВЫХ СЕКЦИЙ (C-02: закрыт)

### Hero (5 вариантов)

| Вариант | Описание | Компоненты | Лучше для |
|---|---|---|---|
| **Centered** | Заголовок по центру + CTA + фоновый эффект | hero3 + aurora/noise + text-generate | SaaS, Startup |
| **Split** | Текст слева + изображение/видео справа | hero1 + hero-highlight | Corporate, E-commerce |
| **Full-screen Video** | Видео/фоновое изображение на весь экран | hero115 + hero-video-dialog | Agency, Real Estate |
| **Parallax** | Многослойный parallax при скролле | hero-parallax + colourful-text | Portfolio, Luxury |
| **Minimal** | Только текст + CTA, минимум декора | hero7 + text-shimmer | Personal, Event |

### Features (4 варианта)

| Вариант | Описание | Компоненты |
|---|---|---|
| **Grid** | 3-4 карточки в ряд | feature1 + card / magic-card |
| **Bento** | Неравномерный grid (2+1, 1+2) | feature13 + bento-grid |
| **Zigzag** | Чередование: текст слева/справа + изображение | feature2 |
| **Tabs** | Переключение между features | feature17 + shadcn-tabs |

### Pricing (3 варианта)

| Вариант | Описание | Компоненты |
|---|---|---|
| **3-Tier Cards** | 3 колонки, средняя выделена | pricing2 + badge("Popular") |
| **Comparison Table** | Таблица features × tiers | pricing4 + table |
| **Minimal 2-Tier** | Free vs Pro, простой toggle | pricing6 + switch |

### Testimonials (4 варианта)

| Вариант | Описание | Компоненты |
|---|---|---|
| **Carousel** | Слайдер с фото + цитатой | testimonial10 + carousel |
| **Grid** | 2-3 карточки одновременно | card + avatar |
| **Marquee** | Бесконечная лента | infinite-moving-cards / marquee |
| **Featured** | 1 большой отзыв + мелкие | animated-testimonials |

### CTA (3 варианта)

| Вариант | Описание | Компоненты |
|---|---|---|
| **Dark Banner** | Тёмный блок на всю ширину | cta10 + shimmer-button |
| **Gradient + Form** | Градиентный фон + email capture | cta11 + input + rainbow-button |
| **Minimal** | Одна строка: текст + кнопка | button + text |

---

## 3. RESPONSIVE СТРАТЕГИЯ (C-03: закрыт)

### Breakpoints

| Breakpoint | px | Использование |
|---|---|---|
| base (mobile) | 0-639 | Все стили по умолчанию |
| sm | 640+ | Мелкие корректировки |
| md | 768+ | Tablet — основная точка перелома |
| lg | 1024+ | Desktop |
| xl | 1280+ | Wide desktop |
| 2xl | 1536+ | Ultra-wide (редко используем) |

### Grid Collapse Rules

| Desktop (lg) | Tablet (md) | Mobile (base) |
|---|---|---|
| 4 columns | 2 columns | 1 column |
| 3 columns | 2 columns | 1 column |
| 2 columns (split) | 2 columns | 1 column (stack) |
| Sidebar + content | Content only | Content only |

```
/* Универсальный паттерн */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8
```

### Компонент-специфичные правила

| Компонент | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navbar | Hamburger menu | Hamburger | Full links |
| Hero (split) | Stack: image → text | Stack: image → text | Side by side |
| Feature grid | 1 col | 2 col | 3-4 col |
| Pricing | Stack cards | 2 col | 3 col side by side |
| Footer | Stack columns | 2 col | 4 col |
| Stats | 2 col grid | 4 col | 4 col inline |
| Testimonials | 1 card | 2 cards | 3 cards или carousel |
| Bento grid | Stack | 2 col | Full bento layout |

### Элементы скрытия

```
/* Показать только на desktop */
hidden lg:block

/* Показать только на mobile */
lg:hidden

/* Текст — укоротить на mobile */
<span className="hidden md:inline">Full description text</span>
<span className="md:hidden">Short text</span>
```

---

## 4. ХОРЕОГРАФИЯ АНИМАЦИЙ (C-04: закрыт)

### Принципы

1. **Scroll-reveal на каждой секции** — элементы появляются при входе в viewport
2. **Stagger** — элементы внутри секции появляются с задержкой (100-150ms между элементами)
3. **Direction** — элементы "приходят" снизу (translateY) или с боков (translateX)
4. **Once** — анимация срабатывает один раз (не повторяется при scroll up)
5. **Duration** — 0.5-0.8s для появления, 0.3s для hover
6. **Easing** — ease-out для входа, ease-in-out для hover

### Стандартные анимации

| Анимация | CSS | Применение |
|---|---|---|
| Fade Up | opacity 0→1, translateY 30→0 | Любой элемент |
| Fade In | opacity 0→1 | Лёгкие элементы |
| Scale In | opacity 0→1, scale 0.95→1 | Карточки |
| Slide Left | opacity 0→1, translateX -30→0 | Левая колонка split layout |
| Slide Right | opacity 0→1, translateX 30→0 | Правая колонка split layout |

### Порядок появления (stagger) внутри секций

```
Секция:
  1. Heading (0ms delay) — появляется первым
  2. Subheading (100ms delay)
  3. CTA buttons (200ms delay)
  4. Cards/items (300ms + i*100ms для каждой карточки)
  5. Decorative elements (400ms) — последними
```

### Production (Motion 12) pattern

```tsx
'use client';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
}
```

### Artifact (CSS-only) pattern

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger */
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 100ms; }
.reveal:nth-child(3) { transition-delay: 200ms; }
.reveal:nth-child(4) { transition-delay: 300ms; }
```

### prefers-reduced-motion

При `prefers-reduced-motion: reduce`:
- Все translateY/X → убрать (только opacity)
- Duration → 0.01ms (мгновенно)
- Marquee → pause
- Parallax → static
- Background анимации → static gradient

---

## 5. СТАТУС

| ID | Пробел | Статус |
|---|---|---|
| C-01 | Блюпринты (10 типов) | ✅ ЗАКРЫТ |
| C-02 | Варианты секций | ✅ ЗАКРЫТ (5 hero, 4 features, 3 pricing, 4 testimonials, 3 CTA) |
| C-03 | Responsive стратегия | ✅ ЗАКРЫТ |
| C-04 | Хореография анимаций | ✅ ЗАКРЫТ |
| A-06 | Рецепты поверхностные | ✅ ЗАКРЫТ (блюпринты заменяют рецепты) |

**Фаза 3: 5/5 = 100%**

---

## СЛЕДУЮЩИЙ ШАГ: Фаза 5 — Контент и процесс (D-01, F-01)
## Фаза 4 (компоненты A-01, A-02, A-03) требует Claude Code / доступ к репо — отложена
