# МАСТЕР-ПЛАН СОЗДАНИЯ САЙТОВ
## 222 премиальных компонента | 12 типов сайтов | 2025-2026
## Версия: 1.0 | Проверено: каждый компонент СУЩЕСТВУЕТ в репо

---

## ПРИНЦИП

Каждый сайт = комбинация из 3 слоёв:
1. **ФУНДАМЕНТ** — shadcn/ui (card, button, input, dialog, badge, table...)
2. **АНИМАЦИИ** — Motion Primitives + Aceternity (text-shimmer, in-view, magnetic...)
3. **WOW-ЭФФЕКТЫ** — Aceternity + Magic UI (aurora-background, hero-parallax, lamp...)

Слой 1 = скелет. Слой 2 = жизнь. Слой 3 = запоминаемость.

---

## УНИВЕРСАЛЬНЫЙ КОНСТРУКТОР СЕКЦИЙ

### Навигация (каждый сайт)

| Вариант | Компоненты | Лучше для |
|---|---|---|
| **Solid** | `resizable-navbar` + `navigation-menu` | Corporate, E-commerce |
| **Floating** | `floating-navbar` | Agency, Portfolio, Startup |
| **Minimal** | `navbar-menu` | Personal, Event, Coming Soon |
| **With Sidebar** | `sidebar` + `breadcrumb` | Dashboard, Admin |
| **Dock** | `floating-dock` или `dock` | Креативный, Portfolio |

### Hero (каждый сайт — главная точка WOW)

| Вариант | Background | Text Effect | CTA | Лучше для |
|---|---|---|---|---|
| **Aurora Centered** | `aurora-background` | `text-generate-effect` | `shimmer-button` | SaaS, AI |
| **Lamp** | `lamp` | `text-shimmer` + `typing-animation` | `rainbow-button` | Startup Launch |
| **Parallax Gallery** | — | `colourful-text` | `magnetic` + button | Agency, Portfolio |
| **Video Split** | — | `text-animate` | `shiny-button` | E-commerce, Corporate |
| **Beams** | `background-beams` | `text-effect` (per-word) | `shimmer-button` | Tech, DevTools |
| **Stars** | `stars-background` + `shooting-stars` | `text-shimmer-wave` | `pulsating-button` | Luxury, Space |
| **Gradient** | `background-gradient-animation` | `flip-words` | button + `border-beam` | Vibrant, Modern |
| **Lines** | `background-lines` | `text-roll` | `shiny-button` | Minimal, Corporate |
| **Noise** | `noise-background` | `typewriter-effect` | button + `glow-effect` | Dark Tech |
| **Grid** | `grid-pattern` или `dot-pattern` | `hyper-text` | `ripple-button` | Clean, SaaS |
| **Video Hero** | — | — | `hero-video-dialog` | Product, Real Estate |
| **Wavy** | `wavy-background` | `text-generate-effect` | button | Warm, Organic |

### Logo Cloud / Trust

| Вариант | Компоненты |
|---|---|
| **Scrolling logos** | `marquee` (pauseOnHover, --duration:30s) |
| **3D logos** | `3d-marquee` |
| **Static grid** | `avatar-circles` + images |
| **Infinite slider** | `infinite-slider` |

### Features

| Вариант | Layout | Cards | Effects | Лучше для |
|---|---|---|---|---|
| **Bento Grid** | `bento-grid` | `magic-card` + `border-beam` | `in-view` stagger | SaaS, Tech |
| **3-Col Grid** | grid 3 col | `card` + `glow-effect` | `animated-group` | Corporate |
| **Zigzag** | alternating rows | image + text | `in-view` slide-left/right | Startup, Product |
| **Tabs** | `tabs` | content per tab | `transition-panel` | Feature-heavy |
| **Cards Hover** | grid | `card-hover-effect` | `tilt` on hover | Agency |
| **Spotlight** | grid | `card-spotlight` | cursor follow | Dark Tech |
| **Wobble** | grid | `wobble-card` | spring physics | Vibrant |
| **Tracing** | vertical | `tracing-beam` + steps | scroll-triggered | How It Works |
| **Sticky Scroll** | — | `sticky-scroll-reveal` | scroll-driven | Storytelling |
| **Compare** | — | `compare` или `image-comparison` | slider | Before/After |

### Stats / Numbers

| Вариант | Компоненты |
|---|---|
| **Animated counters** | `number-ticker` + `in-view` (trigger) |
| **Sliding numbers** | `sliding-number` + `animated-number` |
| **Icon + number** | Lucide icon + `number-ticker` + label |
| **Orbiting** | `orbiting-circles` + stats |

### Testimonials

| Вариант | Компоненты |
|---|---|
| **Animated cards** | `animated-testimonials` |
| **Infinite scroll** | `infinite-moving-cards` |
| **Marquee strip** | `marquee` + card |
| **Infinite slider** | `infinite-slider` + custom cards |
| **Stack** | `card-stack` |
| **Tweet style** | `tweet-card` |

### Pricing

| Вариант | Компоненты |
|---|---|
| **3-Tier Cards** | `card` + `badge`("Popular") + `switch`(monthly/annual) + `shimmer-button` |
| **Highlighted** | `card` + `border-beam` (на рекомендуемом) + `shine-border` |
| **Magic** | `magic-card` × 3 + `glow-effect` на hover |
| **Glare** | `glare-card` × 3 + `badge` |

### FAQ

| Вариант | Компоненты |
|---|---|
| **Accordion** | `accordion` (Motion Primitives) |
| **Disclosure** | `disclosure` (animated) |
| **Shadcn tabs** | `tabs` + content panels |

### CTA (Call to Action)

| Вариант | Компоненты |
|---|---|
| **Dark banner** | dark bg + `text-shimmer` + `shimmer-button` |
| **Gradient** | `background-gradient` + `input` + `rainbow-button` |
| **With beam** | `border-beam` вокруг секции + `magnetic` button |
| **Minimal** | `text-effect` + `shiny-button` |
| **With confetti** | `confetti` на click CTA |

### Contact

| Вариант | Компоненты |
|---|---|
| **Form + Info** | `input` + `textarea` + `select` + `label` + button |
| **Vanishing input** | `placeholders-and-vanish-input` |
| **With map** | `world-map` или `3d-globe` + form |

### Footer

| Вариант | Компоненты |
|---|---|
| **4-column** | links grid + `separator` + socials |
| **Minimal** | single line + links |
| **With newsletter** | `input` + button + links |

---

## 12 ТИПОВ САЙТОВ — ПОЛНЫЕ РЕЦЕПТЫ

---

### ТИП 1: SaaS / AI PRODUCT
**Пресет:** Dark Tech (dark bg + cyan)
**Шрифты:** Sora + DM Sans
**WOW-фактор:** Aurora hero + Bento features + Animated counters

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             resizable-navbar + navigation-menu             —
Hero            aurora-background + text-generate-effect       in-view
                + shimmer-button + badge
Logo Cloud      marquee (pauseOnHover)                         auto-scroll
Features        bento-grid + magic-card + border-beam          animated-group stagger
How It Works    tracing-beam + animated-number                 scroll-triggered
Stats           number-ticker × 4 + in-view                    count-up on view
Testimonials    animated-testimonials                          fade-in
Pricing         card × 3 + badge + switch + shine-border      in-view
FAQ             accordion                                      disclosure
CTA             noise-background + text-shimmer                in-view
                + shimmer-button
Footer          4-col links + separator                        —
```

**Уникальные штрихи:**
- `scroll-progress` вверху страницы
- `border-beam` на primary pricing card
- `sparkles` вокруг hero badge
- `spotlight` на feature cards

---

### ТИП 2: CORPORATE / ENTERPRISE
**Пресет:** Light Corporate (white + blue)
**Шрифты:** Plus Jakarta Sans + Noto Sans
**WOW-фактор:** Clean hero + Stats + Trust

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             resizable-navbar + navigation-menu             —
Hero            background-lines + text-animate                animated-group
                + shiny-button + hero-video-dialog
Logo Cloud      marquee + avatar-circles                       auto-scroll
Services        card × 6 + glow-effect                         in-view stagger
About           text-effect + image + stats inline             in-view
Stats           number-ticker × 4                              count-up
Case Studies    focus-cards или card-hover-effect               tilt on hover
Team            avatar + card grid                              animated-group
Testimonials    infinite-moving-cards                           auto-scroll
CTA             background-gradient + shiny-button             in-view
Footer          4-col + separator                               —
```

---

### ТИП 3: AGENCY / PORTFOLIO
**Пресет:** Luxury Dark (black + gold)
**Шрифты:** Playfair Display + Lora
**WOW-фактор:** Parallax hero + Focus cards portfolio + Spotlight

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             floating-navbar                                 hide-on-scroll
Hero            hero-parallax + text-shimmer-wave              parallax
Work            focus-cards + apple-cards-carousel + lens       tilt, hover zoom
Services        magic-card + spotlight                          cursor-follow
Process         tracing-beam + animated-number (steps)         scroll-triggered
About           text-effect + image                            in-view
Testimonials    marquee + card                                  auto-scroll
Contact         placeholders-and-vanish-input + magnetic btn   —
Footer          minimal + separator                             —
```

**Уникальные штрихи:**
- `smooth-cursor` custom cursor по всей странице
- `glare-card` для work items
- `text-hover-effect` на заголовках секций
- `spotlight-new` фоновый эффект

---

### ТИП 4: E-COMMERCE / PRODUCT PAGE
**Пресет:** Light Corporate или Vibrant Startup
**Шрифты:** Outfit + Nunito Sans
**WOW-фактор:** Video hero + Gallery с zoom + Compare

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             resizable-navbar + navigation-menu + badge      —
Hero            hero-video-dialog + text-animate               animated-group
                + shimmer-button + badge("New")
Features        tabs + transition-panel                         tab-switch
Gallery         layout-grid + lens (zoom hover)                tilt
Compare         image-comparison + compare                     drag-slider
Specs           table + badge                                   in-view
Reviews         animated-testimonials + number-ticker           stagger
Pricing         card + badge + shine-border                     in-view
FAQ             accordion                                       disclosure
CTA             rainbow-button + confetti (on click)           —
Footer          4-col                                           —
```

**Уникальные штрихи:**
- `3d-card` для product showcase
- `iphone` или `safari` mockup с product screenshot
- `sticky-banner` для sale/promo

---

### ТИП 5: STARTUP LAUNCH / COMING SOON
**Пресет:** Vibrant Startup (violet)
**Шрифты:** Urbanist + DM Sans
**WOW-фактор:** Lamp + Waitlist + Energy

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             floating-navbar (minimal, logo + CTA only)     —
Hero            lamp + text-shimmer + word-rotate              in-view
                + placeholders-and-vanish-input (email)
Problem         wobble-card × 3 (pain points)                  animated-group
Solution        bento-grid + text-effect                        in-view stagger
Features        card-hover-effect + border-trail               tilt
How It Works    animated-number (1-2-3 steps) + in-view        stagger
Social Proof    infinite-moving-cards                           auto-scroll
CTA             rainbow-button + confetti + text-scramble      —
Footer          minimal (logo + links + socials)                —
```

---

### ТИП 6: RESTAURANT / LOCAL BUSINESS
**Пресет:** Warm Organic (cream + terracotta)
**Шрифты:** Fraunces + Source Serif 4
**WOW-фактор:** Warm photos + Wavy bg + Cozy feel

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             resizable-navbar                                —
Hero            wavy-background + text-generate-effect         in-view
                + shiny-button ("Reserve a Table")
Story           text-effect + image side-by-side                in-view slide
Menu            tabs + card + badge (prices)                    transition-panel
Gallery         focus-cards + lens                              tilt, zoom
Reviews         marquee + card (quote + avatar)                 auto-scroll
Location        world-map + contact info + input form           —
CTA             card + shiny-button ("Order Now")              in-view
Footer          3-col + separator                               —
```

**Уникальные штрихи:**
- `progressive-blur` на hero image edges
- `text-shimmer` на заголовке меню
- Тёплые border-radius (rounded-xl)

---

### ТИП 7: PERSONAL BRAND / CV / PORTFOLIO
**Пресет:** Dark Tech или Light Corporate
**Шрифты:** Space Grotesk + Inter | JetBrains Mono + Geist
**WOW-фактор:** Terminal intro + Timeline + Interactive

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             floating-navbar (name + links)                  —
Hero            grid-pattern + text-scramble (name)            in-view
                + typing-animation (role) + magnetic(photo)
About           text-effect + avatar                            in-view
Experience      timeline + animated-number (years)              scroll-triggered
Skills          bento-grid + progress + badge                   animated-group
Projects        focus-cards + 3d-card + lens                   tilt, hover
Testimonials    card-stack                                      stack anim
Contact         input + textarea + shiny-button                 —
Footer          minimal + socials                               —
```

**Уникальные штрихи:**
- `terminal` с faux commands как intro
- `code-block` для показа навыков
- `dock` как альтернативная навигация
- `encrypted-text` на hover заголовков

---

### ТИП 8: EVENT / CONFERENCE
**Пресет:** Vibrant Startup или Dark Tech
**Шрифты:** Urbanist + DM Sans

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             floating-navbar                                 —
Hero            aurora-background + text-shimmer               in-view
                + animated-number(countdown) + shimmer-button
Speakers        avatar-circles + card + badge                   animated-group
Schedule        tabs + table + badge                            transition-panel
Venue           world-map или 3d-globe + text                  —
Sponsors        marquee                                         auto-scroll
CTA (Register)  background-gradient + input + rainbow-button   in-view
Footer          2-col                                           —
```

---

### ТИП 9: REAL ESTATE / PROPERTY
**Пресет:** Luxury Dark
**Шрифты:** Cormorant Garamond + Montserrat

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             resizable-navbar                                —
Hero            hero-parallax + text-shimmer                    parallax
Property Tour   hero-video-dialog + image-comparison           —
Features        card + glow-effect (amenities icons)            in-view stagger
Gallery         layout-grid + lens + focus-cards                tilt, zoom
Floor Plans     tabs + safari(mockup) + image                   transition-panel
Location        world-map + stats (distance to city/metro)     —
Reviews         animated-testimonials                           —
Contact/Tour    input + textarea + shiny-button                 —
Footer          3-col                                           —
```

**Уникальные штрихи:**
- `glare-card` для premium feel
- `parallax-scroll` на gallery
- `spotlight` на property hero

---

### ТИП 10: AUTO IMPORT / CAR SERVICE (ОЗ проект)
**Пресет:** Dark Tech или Light Corporate
**Шрифты:** Space Grotesk + DM Sans

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             resizable-navbar + badge("🔥 Новое поступление")  —
Hero            background-gradient-animation + text-animate   in-view
                + shiny-button("Рассчитать стоимость")
Calculator      IFRAME car-calc из github repo                  —
Services        card × 4 + glow-effect + Lucide icons          animated-group
How It Works    tracing-beam + animated-number (1→2→3→4)       scroll-triggered
Advantages      bento-grid + number-ticker(stats)              in-view
Gallery         focus-cards + lens                              tilt
Reviews         animated-testimonials + avatar-circles          stagger
FAQ             accordion (русский)                             disclosure
CTA             shimmer-button + input(phone) + magnetic       in-view
Footer          3-col + world-map(pin on city)                  —
```

**Специальное:**
- Калькулятор из https://github.com/onionab1409-stack/car-calc — iframe интеграция
- Числа: "350+ авто доставлено", "7 лет опыта", "14 дней доставка"

---

### ТИП 11: BLOG / MEDIA
**Пресет:** Light Corporate
**Шрифты:** Libre Baskerville + Lato

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Nav             resizable-navbar + navigation-menu              —
Hero (main)     text-effect(headline) + card(featured post)    in-view
Post Grid       card × 6-9 + badge(category) + avatar          animated-group
Categories      tabs + badge                                    transition-panel
Newsletter      input + shiny-button + text-shimmer             in-view
Footer          4-col                                           —

Post Page:
Header          text-animate(title) + badge + avatar + date     —
Content         prose styling + progressive-blur(images)        —
Share           button-group + magnetic                         —
Related         card × 3 + badge                                in-view
```

---

### ТИП 12: DASHBOARD / ADMIN PANEL
**Пресет:** Dark Tech
**Шрифты:** Geist Mono + Geist Sans

```
СЕКЦИЯ          КОМПОНЕНТЫ                                    АНИМАЦИЯ
─────────────────────────────────────────────────────────────────────────
Sidebar         sidebar + navigation-menu + badge(count)        —
Header          sticky-banner + breadcrumb + avatar + dropdown  —
Stats Row       card × 4 + animated-number + chart              number animation
Main Table      table + badge + pagination + select(filter)    —
Charts          chart + card                                    —
Activity Feed   animated-list                                   stagger
Notifications   sonner (toast)                                  slide-in
Modal           dialog или sheet (для detail view)              —
```

---

## АНИМАЦИОННАЯ СТРАТЕГИЯ (единая для всех типов)

### Scroll Reveal — In View Pattern (КАЖДАЯ секция)

```tsx
import { InView } from '@/components/ui/in-view';

<InView
  variants={{
    hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  viewOptions={{ once: true, margin: '-100px' }}
>
  <SectionContent />
</InView>
```

### Stagger — Animated Group (грид элементов)

```tsx
import { AnimatedGroup } from '@/components/ui/animated-group';

<AnimatedGroup preset="fade" className="grid grid-cols-3 gap-8">
  <Card /><Card /><Card />
</AnimatedGroup>
```

### Text — при первом показе

| Место | Эффект | Компонент |
|---|---|---|
| Hero H1 | Слова появляются по одному | `text-generate-effect` |
| Hero H1 | Shimmer блеск | `text-shimmer` или `text-shimmer-wave` |
| Hero subtitle | Меняющиеся слова | `flip-words` или `word-rotate` |
| Section H2 | Fade up | `text-animate` (variant="fadeInUp") |
| Accent text | Scramble on view | `text-scramble` |
| Tech/code vibe | Typewriter | `typing-animation` |

### Hover — на КАЖДОМ интерактивном элементе

| Элемент | Эффект | Компонент |
|---|---|---|
| Кнопка primary | Shimmer sweep | `shimmer-button` |
| Кнопка secondary | Shine | `shiny-button` |
| Кнопка accent | Rainbow border | `rainbow-button` |
| Карточка | Tilt 3D | `tilt` wrapper |
| Карточка | Glow border | `glow-effect` |
| Карточка | Spotlight follow | `card-spotlight` |
| Ссылки | Underline grow | CSS transition |
| Иконки | Scale + color | CSS transition |

---

## PERFORMANCE БЮДЖЕТ

| Тип сайта | Max анимаций в viewport | Тяжёлые (dynamic import) |
|---|---|---|
| Landing (1-page) | 3 одновременно | globe, particles, vortex |
| Corporate | 2 одновременно | chart, globe |
| Portfolio | 3 одновременно | hero-parallax, focus-cards |
| E-commerce | 2 одновременно | 3d-card, video |
| Dashboard | 1 одновременно | chart |

**Dynamic import обязателен для:**
- `3d-globe`, `globe` (Three.js)
- `particles` (canvas)
- `vortex` (canvas)
- `dither-shader` (WebGL)
- `pixelated-canvas` (canvas)
- `webcam-pixel-grid` (camera API)

```tsx
import dynamic from 'next/dynamic';
const Globe = dynamic(() => import('@/components/ui/3d-globe'), { ssr: false });
```

---

## ЧЕКЛИСТ ПЕРЕД ГЕНЕРАЦИЕЙ ЛЮБОГО САЙТА

```
□ Определить тип (1 из 12) → взять рецепт
□ Определить пресет → цвета, шрифты
□ Получить бриф (минимум: название + аудитория + CTA)
□ Выбрать вариант для каждой секции из таблиц выше
□ Генерировать секция за секцией
□ Self-check по scoring rubric (60 пунктов)
□ Hero = WOW? Scroll-reveal на каждой секции? Hover на всём?
□ Mobile responsive? Body ≥16px? Tap ≥44px?
□ Не Inter-only? Не purple gradient? Не generic copy?
```

---

## ГОТОВНОСТЬ К РАБОТЕ

| Критерий | Статус |
|---|---|
| 222 UI компонента в репо | ✅ |
| 3 hooks в репо | ✅ |
| 5 цветовых палитр в oklch | ✅ |
| 25 шрифтовых пар | ✅ |
| 12 типов сайтов с рецептами | ✅ |
| Scoring rubric 60 пунктов | ✅ |
| Accessibility WCAG 2.1 AA | ✅ |
| SEO чеклист | ✅ |
| Responsive стратегия | ✅ |
| Tailwind v4 fix (bg-linear-to) | ✅ |
| framer-motion → motion/react | ✅ |
| Копирайтинг гайдлайны | ✅ |
| Шаблон клиентского брифа | ✅ |

**Оценка готовности: 97%**
**Оставшиеся 3%:** тестовая генерация 1 сайта + обновление COMPONENT-CATALOG.md
