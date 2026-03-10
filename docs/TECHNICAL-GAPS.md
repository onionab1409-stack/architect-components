# ТЕХНИЧЕСКИЕ ПРОБЕЛЫ — ФАЗА 1B
## Пробелы закрываемые: G-01, G-02, G-03
## Дата: 10 марта 2026

---

## 1. TAILWIND v3 → v4 ПОЛНАЯ ТАБЛИЦА ИЗМЕНЕНИЙ (G-01: закрыт)

### 1.1 Переименованные утилиты (КРИТИЧНО — сломает компоненты)

| Tailwind v3 | Tailwind v4 | Где затронуто |
|---|---|---|
| `bg-gradient-to-r` | `bg-linear-to-r` | Все градиентные фоны, кнопки |
| `bg-gradient-to-l` | `bg-linear-to-l` | |
| `bg-gradient-to-t` | `bg-linear-to-t` | |
| `bg-gradient-to-b` | `bg-linear-to-b` | |
| `bg-gradient-to-tr` | `bg-linear-to-tr` | |
| `bg-gradient-to-br` | `bg-linear-to-br` | |
| `bg-gradient-to-tl` | `bg-linear-to-tl` | |
| `bg-gradient-to-bl` | `bg-linear-to-bl` | |
| `shadow` (без суффикса) | `shadow-sm` | Карточки, кнопки |
| `rounded` (без суффикса) | `rounded-sm` | Все компоненты |
| `ring` (без суффикса) | `ring-3` | Focus states |
| `blur` (без суффикса) | `blur-sm` | Backdrop effects |
| `flex-shrink-0` | `shrink-0` | Layouts |
| `flex-grow` | `grow` | Layouts |
| `overflow-ellipsis` | `text-ellipsis` | Text truncation |
| `decoration-clone` | `box-decoration-clone` | |
| `decoration-slice` | `box-decoration-slice` | |

### 1.2 Поведенческие изменения (НЕ переименования — другая логика)

| Изменение | v3 поведение | v4 поведение | Влияние |
|---|---|---|---|
| `border` без цвета | gray-200 по умолчанию | currentColor по умолчанию | ВСЕ компоненты с border нужно проверить. Добавить явный цвет: `border border-border` |
| `hover:` варианты | Всегда применяются | Завёрнуты в `@media (hover: hover)` | На тач-устройствах hover не сработает. Для sticky hover: кастомный вариант |
| CSS переменные | `bg-[--brand]` | `bg-(--brand)` | Скобки вместо квадратных — все arbitrary values с переменными |
| `transition` | Без outline-color | Включает outline-color | Могут быть неожиданные outline анимации |
| `transform` | Единое свойство transform | Отдельные rotate/scale/translate | Компоненты с кастомным CSS transform могут конфликтовать |
| `via-*` в градиентах | Сбрасывается при variant override | Сохраняется | Нужно `via-none` если хотите сбросить |
| Arbitrary с пробелами | `grid-cols-[1fr 2fr]` | `grid-cols-[1fr_2fr]` (подчёркивания) | Grid и object-position arbitrary values |
| Контейнер | Конфигурируемый в config | @utility для кастомизации | `container` нужно через @utility |
| Кнопки | `cursor: pointer` | `cursor: default` | Добавить cursor-pointer в base CSS если нужно |
| Placeholder | gray-400 | currentColor/50% opacity | Может быть другой цвет |

### 1.3 Конфигурация

| v3 | v4 |
|---|---|
| `tailwind.config.js` | Нет. Всё в CSS через `@theme inline {}` |
| `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| `theme.extend.colors` | `:root { --color-brand: oklch(...); }` + `@theme inline { --color-brand: var(--color-brand); }` |
| `content: ['./src/**/*.tsx']` | Автоматическое определение (не нужно) |
| `darkMode: 'class'` | Встроенно (`.dark` class или `prefers-color-scheme`) |
| `require('tailwindcss-animate')` в plugins | `@import "tw-animate-css"` (tailwindcss-animate deprecated) |
| `@apply` свободно | `@apply` ограничен — предпочтителен `@utility` |

### 1.4 Новые возможности v4 (можно использовать)

- **Container queries:** `@container` / `@sm:flex` — нативная поддержка
- **`not-*` variants:** `not-disabled:hover:bg-primary` 
- **`inert:` variant:** стилизация инертных элементов
- **3D transforms:** нативная поддержка
- **Arbitrary values напрямую:** `h-100` вместо `h-[100px]`, `grid-cols-15`

---

## 2. CLIENT vs SERVER COMPONENTS (G-02: закрыт)

### 2.1 Золотое правило

> В Next.js 16 App Router ВСЕ компоненты — Server Components по умолчанию.
> `'use client'` добавляем ТОЛЬКО когда нужно. Граница `'use client'` — как можно глубже.

### 2.2 Когда нужен 'use client'

Компонент ТРЕБУЕТ 'use client' если использует ЛЮБОЕ из:
- **React hooks:** useState, useEffect, useRef, useCallback, useMemo, useReducer, useContext
- **Event handlers:** onClick, onChange, onSubmit, onScroll, onMouseEnter и др.
- **Browser APIs:** window, document, localStorage, navigator, IntersectionObserver
- **Motion 12:** motion.div, AnimatePresence, useMotionValue — вся библиотека
- **Lenis:** ReactLenis — клиентский smooth scroll
- **GSAP:** ScrollTrigger, gsap.to() — browser-only
- **Three.js:** Canvas, WebGL — browser-only

### 2.3 Классификация НАШИХ компонентов

**ТРЕБУЮТ 'use client' (≈85% каталога):**

| Категория | Причина | Примеры |
|---|---|---|
| ВСЕ Backgrounds (26) | Анимации (Motion/CSS/Canvas) | aurora-background, background-beams |
| ВСЕ Text Effects (24) | Анимации, IntersectionObserver | text-shimmer, typewriter-effect |
| ВСЕ Cards с анимацией (15) | Motion, hover handlers | magic-card, wobble-card, 3d-card |
| ВСЕ Buttons с эффектами (7) | Hover/click анимации | shimmer-button, rainbow-button |
| ВСЕ Heroes (7) | Parallax, scroll, video | hero-parallax, lamp |
| ВСЕ Scroll & Reveal (12) | IntersectionObserver, scroll events | scroll-progress, parallax-scroll |
| ВСЕ Motion & Effects (20) | Motion library | animated-beam, sparkles |
| ВСЕ Interactive (8) | Mouse events, transforms | magnetic, tilt, lens |
| ВСЕ Testimonials с анимацией (6) | Motion, scroll | animated-testimonials, marquee |
| ВСЕ Device Mockups (5) | Scroll animations | macbook-scroll |
| ВСЕ Maps & 3D (4) | Three.js, WebGL | 3d-globe, world-map |
| Dialogs с анимацией (4) | Motion, state | animated-modal, morphing-dialog |
| Forms с интерактивностью (6) | onChange, onSubmit | file-upload, placeholders-and-vanish-input |
| Navigation с state (5) | useState, scroll | floating-navbar, floating-dock |
| Другие интерактивные (10) | Various | carousel, command, toast |

**НЕ требуют 'use client' (≈15% — Server Components):**

| Компонент | Причина — чистый HTML/CSS |
|---|---|
| card (shadcn) | Статическая обёртка |
| button (shadcn base) | Чистый HTML button + Tailwind |
| badge | Статический элемент |
| avatar | Статический img + fallback |
| separator | Чистый `<hr>` |
| skeleton | CSS animation (не JS) |
| label | Статический `<label>` |
| table | Статический HTML |
| breadcrumb | Статические ссылки |
| alert | Статический блок |
| progress | HTML `<progress>` |
| input (base) | Нативный `<input>` |
| textarea (base) | Нативный `<textarea>` |
| select (base) | Нативный `<select>` |

**Page Blocks — ВСЕ требуют 'use client':**
Все 54 блока содержат интерактивность или анимации → 'use client'

### 2.4 Архитектурный паттерн для страниц

```tsx
// app/page.tsx — Server Component (НЕ 'use client')
import { HeroSection } from '@/components/sections/hero';
import { FeaturesSection } from '@/components/sections/features';

export const metadata = { title: '...', description: '...' }; // SEO — только Server

export default function HomePage() {
  return (
    <main>
      <HeroSection />      {/* 'use client' внутри */}
      <FeaturesSection />   {/* 'use client' внутри */}
    </main>
  );
}

// components/sections/hero.tsx — Client Component
'use client';
import { motion } from 'motion/react';
import { AuroraBackground } from '@/components/ui/aurora-background';
// ... интерактивность здесь
```

**Правила:**
1. `page.tsx` и `layout.tsx` — ВСЕГДА Server Components (для metadata, SEO)
2. Секции сайта (hero, features, pricing) — Client Components (анимации)
3. Граница 'use client' — на уровне секции, НЕ на уровне страницы
4. Данные передаём из Server → Client через props
5. `metadata` export ТОЛЬКО в Server Components

---

## 3. МАППИНГ ARTIFACT (v3) → PRODUCTION (v4) (G-03: закрыт)

### 3.1 Зачем маппинг

Artifact канал использует Tailwind v3 CDN (`<script src="https://cdn.tailwindcss.com">`).
Production использует Tailwind v4.1 с @theme inline.
Визуальные расхождения БУДУТ если не учитывать различия.

### 3.2 Таблица быстрого маппинга (для генерации)

| Artifact (v3 CDN) | Production (v4) | Комментарий |
|---|---|---|
| `bg-gradient-to-r from-X to-Y` | `bg-linear-to-r from-X to-Y` | Только название |
| `shadow` | `shadow-sm` | + shadow → shadow-xs в v4 тоже есть |
| `rounded` | `rounded-sm` | Чуть менее закруглённый |
| `ring` | `ring-3` | 3px по умолчанию |
| `blur` | `blur-sm` | |
| `border` (без цвета) | `border border-border` | ОБЯЗАТЕЛЬНО добавить цвет |
| Цвета: `bg-cyan-500` | `bg-primary` (через CSS vars) | Semantic tokens |
| `bg-[--var]` | `bg-(--var)` | Скобки вместо квадратных |
| `hover:bg-gray-100` | `hover:bg-gray-100` | Работает, но wrapped в @media(hover:hover) |
| `text-gray-500` | `text-muted-foreground` | Semantic tokens preferred |
| `@apply` в style | `@apply` (ограниченно) или `@utility` | Минимизировать @apply |

### 3.3 Стратегия для Artifact генерации

При генерации Artifact (Tailwind v3 CDN):
1. Используем v3 синтаксис (bg-gradient-to-r, shadow, rounded)
2. Цвета — hex/rgb (не oklch — v3 CDN не поддерживает)
3. Анимации — CSS @keyframes + IntersectionObserver (не Motion)
4. Hover — работает везде (v3 не оборачивает в @media)

При переносе в Production (v4):
1. Заменить gradient → linear
2. Заменить shadow/rounded/ring на -sm/-sm/-3
3. Заменить hex → oklch через CSS variables
4. Заменить CSS @keyframes → Motion 12 где уместно
5. Добавить border-border ко всем border без цвета
6. Проверить hover на мобильных

### 3.4 Таблица hex → oklch для основных цветов (конвертация при переносе)

| Цвет (hex) | oklch | Tailwind v4 name |
|---|---|---|
| #06b6d4 (cyan-500) | oklch(0.65 0.15 195) | --color-cyan-500 |
| #2563eb (blue-600) | oklch(0.55 0.22 260) | --color-blue-600 |
| #7c3aed (violet-600) | oklch(0.50 0.27 295) | --color-violet-600 |
| #d4a053 (gold custom) | oklch(0.73 0.12 75) | --color-primary (custom) |
| #c2703e (terracotta) | oklch(0.58 0.13 45) | --color-primary (custom) |
| #ef4444 (red-500) | oklch(0.63 0.24 25) | --color-red-500 |
| #22c55e (green-500) | oklch(0.72 0.19 150) | --color-green-500 |
| #f59e0b (amber-500) | oklch(0.77 0.17 75) | --color-amber-500 |
| #ffffff | oklch(1 0 0) | --color-white |
| #000000 | oklch(0 0 0) | --color-black |
| #f8fafc (slate-50) | oklch(0.98 0.005 260) | --color-slate-50 |
| #1e293b (slate-800) | oklch(0.25 0.02 260) | --color-slate-800 |
| #0f172a (slate-900) | oklch(0.18 0.02 260) | --color-slate-900 |

---

## 4. ДОПОЛНЕНИЕ К CLAUDE.md (пропущенные правила)

Следующие правила НЕОБХОДИМО добавить в CLAUDE.md:

```markdown
### Tailwind v4 — Дополнительные критичные изменения

#### Поведенческие (не переименования)
- `border` без цвета = currentColor (не gray-200). ВСЕГДА указывай: `border border-border`
- `hover:` завёрнут в @media(hover:hover). На touch = не работает. 
  Для fallback: `@custom-variant hover (&:hover);` в globals.css
- CSS vars: `bg-(--brand)` НЕ `bg-[--brand]` (скобки, не квадратные)
- Arbitrary с пробелами: подчёркивания `grid-cols-[1fr_2fr]`
- Кнопки: cursor:default по умолчанию. Добавить в base:
  `@layer base { button { cursor: pointer; } }`
- transition включает outline-color. Если мешает: используй transition-colors

#### Новые возможности (использовать)
- Container queries: `@container`, `@sm:flex @lg:grid`
- `not-*` variants: `not-disabled:hover:bg-primary`
- Inline arbitrary: `h-100` вместо `h-[100px]`

#### Deprecated
- tailwindcss-animate → заменён на tw-animate-css
  `@import "tw-animate-css"` вместо `@plugin 'tailwindcss-animate'`

### Client vs Server Components
- page.tsx / layout.tsx = ВСЕГДА Server (для metadata)
- Секции с анимациями = 'use client' (граница на уровне секции)
- ~85% наших UI компонентов требуют 'use client' (Motion, handlers, hooks)
- ~15% статических (card, badge, label, separator, table) — Server OK
- ПРАВИЛО: 'use client' как можно глубже в дереве
```

---

## 5. СТАТУС

| ID | Пробел | Статус |
|---|---|---|
| G-01 | Стек не верифицирован | ✅ ЗАКРЫТ — полная таблица v3→v4 |
| G-02 | Нет правил Client/Server | ✅ ЗАКРЫТ — классификация всех компонентов |
| G-03 | Нет маппинга Artifact→Prod | ✅ ЗАКРЫТ — таблица + стратегия |

**Фаза 1B: 3/3 пробелов закрыты = 100%**

---

## СЛЕДУЮЩИЙ ШАГ: Фаза 2 — Чеклисты качества (E-01 → E-05)
