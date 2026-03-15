# COMPONENT CATALOG — 226 UI + 6 Layout + 3 Hooks = 235 files
## Verified: 15 March 2026 | All files exist in src/components/
## Sources: Aceternity UI, Magic UI, Motion Primitives, shadcn/ui (radix-nova)
## Note: 3 components listed in 2 categories (†): infinite-moving-cards, macbook-scroll, animated-modal

---

## UI COMPONENTS BY CATEGORY

### Backgrounds & Patterns (27)
aurora-background, animated-background, background-beams, background-beams-with-collision, background-boxes, background-gradient, background-gradient-animation, background-lines, background-ripple-effect, noise-background, wavy-background, vortex, stars-background, shooting-stars, glowing-stars, dot-pattern, grid-pattern, animated-grid-pattern, interactive-grid-pattern, flickering-grid, retro-grid, dotted-glow-background, dither-shader, pixelated-canvas, light-rays, webcam-pixel-grid, ripple

### Text Effects (25)
text-effect, text-animate, text-generate-effect, text-hover-effect, text-shimmer, text-shimmer-wave, text-loop, text-morph, text-roll, text-scramble, typewriter-effect, typing-animation, flip-words, morphing-text, colourful-text, aurora-text, encrypted-text, hyper-text, line-shadow-text, sparkles-text, spinning-text, word-rotate, video-text, animated-gradient-text, animated-shiny-text

### Cards (17)
card (shadcn), 3d-card, magic-card, wobble-card, card-spotlight, glare-card, evervault-card, focus-cards, card-stack, card-hover-effect, comet-card, draggable-card, tooltip-card, hover-card, infinite-moving-cards, apple-cards-carousel, tweet-card

### Buttons (9)
button (shadcn), button-group, shimmer-button, shiny-button, pulsating-button, rainbow-button, ripple-button, stateful-button, tailwindcss-buttons

### Heroes & Showcases (7)
hero-parallax, hero-highlight, hero-video-dialog, parallax-hero-images, lamp, container-scroll-animation, container-text-flip

### Navigation (10)
floating-navbar, resizable-navbar, navbar-menu, navigation-menu, floating-dock, dock, tabs, sidebar, breadcrumb, menubar

### Scroll & Reveal (13)
scroll-progress, scroll-based-velocity, sticky-scroll-reveal, parallax-scroll, tracing-beam, progressive-blur, in-view, macbook-scroll, sticky-banner, scroll-area, animated-group, transition-panel, infinite-slider

### Motion & Effects (22)
animated-beam, animated-list, animated-tooltip, animated-modal, animated-number, border-beam, border-trail, shine-border, moving-border, confetti, sparkles, particles, meteors, spotlight, spotlight-new, glow-effect, glowing-effect, smooth-cursor, cursor, following-pointer, magnetic, pointer-highlight

### Interactive (7)
tilt, lens, compare, image-comparison, direction-aware-hover, hover-border-gradient, direction

### Testimonials & Social Proof (9)
animated-testimonials, marquee, 3d-marquee, avatar-circles, icon-cloud, orbiting-circles, number-ticker, infinite-moving-cards, sliding-number

### Device Mockups (5)
safari, iphone, macbook-scroll, android, keyboard

### Layout (7)
bento-grid, layout-grid, layout-text-flip, svg-mask-effect, canvas-reveal-effect, google-gemini-effect, aspect-ratio

### Maps & 3D (4)
3d-globe, globe, world-map, 3d-pin

### Dialogs & Overlays (11)
accordion, dialog, alert-dialog, animated-modal, morphing-dialog, morphing-popover, sheet, drawer, disclosure, popover, collapsible

### Form Elements (19)
input, input-group, input-otp, textarea, select, native-select, checkbox, radio-group, switch, slider, label, field, toggle, toggle-group, file-upload, placeholders-and-vanish-input, combobox, command, calendar

### Data Display (14)
table, badge, avatar, skeleton, progress, tooltip, separator, chart, images-badge, images-slider, kbd, text-reveal-card, timeline, scales

### Feedback & Notifications (4)
sonner, spinner, loader, multi-step-loader

### Other Utilities (15)
terminal, code-block, link-preview, carousel, ascii-art, canvas-text, pagination, resizable, dropdown-menu, context-menu, alert, empty, item, toolbar-dynamic, toolbar-expandable

---

## HOOKS (3)

| Hook | File | Purpose |
|---|---|---|
| use-mobile | src/hooks/use-mobile.ts | Responsive breakpoint detection (shadcn) |
| use-outside-click | src/hooks/use-outside-click.tsx | Click outside element (Aceternity) |
| useClickOutside | src/hooks/useClickOutside.tsx | Click outside detection (Motion Primitives) |

---

## REGISTRIES (components.json)

```json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json",
    "@magicui": "https://magicui.design/r/{name}",
    "@motion": "https://motion-primitives.com/c/{name}.json"
  }
}
```

Install: `npx shadcn@latest add @aceternity/lamp` | `npx shadcn@latest add @motion/text-effect`

---

## GSAP EFFECTS (4)

| Component | File | Purpose |
|---|---|---|
| fade-in | src/components/ui/fade-in.tsx | Motion whileInView wrapper with direction + reduced motion |
| split-text-reveal | src/components/ui/split-text-reveal.tsx | GSAP SplitText character/word/line reveal |
| pinned-section | src/components/ui/pinned-section.tsx | GSAP ScrollTrigger pin with configurable scroll length |
| horizontal-scroll | src/components/ui/horizontal-scroll.tsx | GSAP horizontal scroll with pin + scrub |

---

## LAYOUT COMPONENTS (6)

| Component | File | Purpose |
|---|---|---|
| smooth-scroll | src/components/layout/smooth-scroll.tsx | Lenis smooth scroll provider |
| smooth-scroll-gsap | src/components/layout/smooth-scroll-gsap.tsx | Lenis + GSAP ticker sync |
| page-transition | src/components/layout/page-transition.tsx | Entry-only page transition (Motion) |
| page-transition-full | src/components/layout/page-transition-full.tsx | Full enter/exit transition with FrozenRouter |
| preloader | src/components/layout/preloader.tsx | Loading screen with min duration + brand text |
| skip-to-content | src/components/layout/skip-to-content.tsx | Accessible skip navigation link (Server Component) |

---

## COMPOSITION RECIPES (12 site types — see MASTER-PLAN-WEBSITES.md)

### 1. SaaS Landing
Nav(resizable-navbar) → Hero(aurora-background + text-generate-effect + shimmer-button) → Logos(marquee) → Features(bento-grid + magic-card + border-beam) → Stats(number-ticker) → Testimonials(animated-testimonials) → Pricing(card + badge + switch + shine-border) → FAQ(accordion) → CTA(noise-background + shimmer-button) → Footer

### 2. Corporate
Nav(resizable-navbar) → Hero(background-lines + text-animate + shiny-button) → Logos(marquee) → Services(card + glow-effect) → Stats(number-ticker) → Testimonials(infinite-moving-cards) → CTA(shiny-button) → Footer

### 3. Agency / Portfolio
Nav(floating-navbar) → Hero(hero-parallax + text-shimmer-wave) → Work(focus-cards + lens) → Services(magic-card + spotlight) → Testimonials(marquee) → Contact(placeholders-and-vanish-input + magnetic) → Footer

### 4. E-commerce
Nav(resizable-navbar) → Hero(hero-video-dialog + text-animate) → Features(tabs + transition-panel) → Gallery(layout-grid + lens) → Compare(image-comparison) → Reviews(animated-testimonials) → Pricing(card + shine-border) → FAQ(accordion) → Footer

### 5. Startup Launch
Nav(floating-navbar) → Hero(lamp + text-shimmer + word-rotate + input) → Problem(wobble-card) → Solution(bento-grid) → Features(card-hover-effect + border-trail) → CTA(rainbow-button + confetti) → Footer

### 6. Restaurant / Local
Nav(resizable-navbar) → Hero(wavy-background + text-generate-effect) → Menu(tabs + card + badge) → Gallery(focus-cards + lens) → Reviews(marquee) → Location(world-map) → Footer

### 7. Personal Brand
Nav(floating-navbar) → Hero(grid-pattern + text-scramble + typing-animation) → Experience(timeline + animated-number) → Skills(bento-grid + progress) → Projects(focus-cards) → Contact(input + textarea) → Footer

### 8. Event
Nav(floating-navbar) → Hero(aurora-background + text-shimmer + animated-number) → Speakers(avatar-circles + card) → Schedule(tabs + table) → Sponsors(marquee) → CTA(rainbow-button) → Footer

### 9. Real Estate
Nav(resizable-navbar) → Hero(hero-parallax + text-shimmer) → Tour(hero-video-dialog + image-comparison) → Features(card + glow-effect) → Gallery(layout-grid + lens) → Location(world-map) → Footer

### 10. Auto Import (ОЗ)
Nav(resizable-navbar + badge) → Hero(background-gradient-animation + text-animate) → Calculator(iframe) → Services(card + glow-effect) → How It Works(tracing-beam + animated-number) → Reviews(animated-testimonials) → FAQ(accordion) → Footer

### 11. Blog
Nav(resizable-navbar) → Hero(text-effect + card) → Posts(card + badge + avatar) → Categories(tabs) → Newsletter(input + shiny-button) → Footer

### 12. Dashboard
Sidebar(sidebar) → Header(sticky-banner + breadcrumb) → Stats(card + animated-number + chart) → Table(table + pagination) → Activity(animated-list) → Notifications(sonner)
