# COMPONENT CATALOG — 267 files (210 UI + 54 Blocks + 3 Hooks)

## UI COMPONENTS BY CATEGORY

### Backgrounds & Patterns (26)
aurora-background, background-beams, background-beams-with-collision, background-boxes, background-gradient, background-gradient-animation, background-lines, background-ripple-effect, noise-background, wavy-background, vortex, stars-background, shooting-stars, glowing-stars, dot-pattern, grid-pattern, animated-grid-pattern, interactive-grid-pattern, flickering-grid, retro-grid, dotted-glow-background, dither-shader, animated-background, pixelated-canvas, light-rays, webcam-pixel-grid

### Text Effects (24)
text-effect, text-animate, text-generate-effect, text-hover-effect, text-shimmer, text-shimmer-wave, text-loop, text-morph, text-roll, text-scramble, text-reveal-card, typewriter-effect, typing-animation, flip-words, morphing-text, colourful-text, aurora-text, encrypted-text, hyper-text, line-shadow-text, sparkles-text, spinning-text, word-rotate, video-text

### Cards (18)
card (shadcn), 3d-card, magic-card, wobble-card, card-spotlight, glare-card, evervault-card, focus-cards, card-stack, card-hover-effect, comet-card, draggable-card, tooltip-card, hover-card, infinite-moving-cards, apple-cards-carousel, tweet-card, text-reveal-card

### Buttons (8)
button (shadcn), shimmer-button, shiny-button, pulsating-button, rainbow-button, ripple-button, stateful-button, tailwindcss-buttons

### Heroes & Showcases (7)
hero-parallax, hero-highlight, hero-video-dialog, parallax-hero-images, lamp, container-scroll-animation, container-text-flip

### Navigation (10)
floating-navbar, resizable-navbar, navbar-menu, navigation-menu, floating-dock, dock, tabs (Aceternity), shadcn-tabs (Radix), sidebar, breadcrumb

### Scroll & Reveal (12)
scroll-progress, scroll-based-velocity, sticky-scroll-reveal, parallax-scroll, tracing-beam, progressive-blur, in-view, macbook-scroll, sticky-banner, scroll-area, animated-group, transition-panel

### Motion & Effects (20)
animated-beam, animated-list, animated-tooltip, animated-modal, animated-number, border-beam, border-trail, shine-border, moving-border, confetti, sparkles, particles, meteors, spotlight, spotlight-new, glow-effect, glowing-effect, smooth-cursor, cursor, following-pointer

### Interactive (8)
magnetic, tilt, lens, compare, image-comparison, direction-aware-hover, pointer-highlight, hover-border-gradient

### Testimonials & Social Proof (8)
animated-testimonials, marquee, 3d-marquee, avatar-circles, icon-cloud, orbiting-circles, number-ticker, infinite-moving-cards

### Device Mockups (5)
safari, iphone, macbook-scroll, android, keyboard

### Layout (6)
bento-grid, layout-grid, layout-text-flip, svg-mask-effect, canvas-reveal-effect, google-gemini-effect

### Maps & 3D (4)
3d-globe, globe, world-map, 3d-pin

### Dialogs & Overlays (9)
dialog, alert-dialog, animated-modal, morphing-dialog, morphing-popover, sheet, drawer, disclosure, popover

### Form Elements (14)
input, textarea, select, checkbox, radio-group, switch, slider, label, form, toggle, toggle-group, file-upload, placeholders-and-vanish-input, sliding-number

### Data Display (7)
table, badge, avatar, skeleton, progress, tooltip, separator

### Toolbars (2)
toolbar-dynamic, toolbar-expandable

### Other (7)
terminal, code-block, multi-step-loader, link-preview, ripple, carousel, loader, ascii-art, images-badge, images-slider, scales, canvas-text, collapsible, pagination, resizable, toast, sonner, command, dropdown-menu, alert

---

## PAGE BLOCKS (54)

### Heroes (6)
hero1 — badge + heading + desc + 2 buttons + image (split layout)
hero3 — centered heading + CTA + large image below
hero7 — minimal centered hero with background
hero45 — split hero with phone mockup
hero47 — hero with floating elements
hero115 — full-width hero with video background

### Features (10)
feature1 — icon + title + description grid (3 cols)
feature2 — alternating image/text (zigzag)
feature13 — bento grid layout
feature17 — tabs-based feature showcase
feature43 — large image + feature list
feature51 — numbered steps
feature72 — cards with hover effects
feature73 — icon grid with descriptions
feature166 — feature comparison table
feature197 — animated feature carousel

### Pricing (3)
pricing2 — 3-tier cards with toggle
pricing4 — comparison table style
pricing6 — minimal 2-tier

### Social Proof (3)
testimonial10 — carousel with photos
logos8 — logo cloud strip
stats8 — large numbers with labels

### Content (5)
blog7 — blog grid with featured post
blogpost1 — single post layout
content1 — rich text content block
gallery6 — masonry image gallery
changelog1 — versioned changelog

### Conversion (8)
cta10 — dark background CTA banner
cta11 — gradient CTA with form
contact7 — contact form + info
faq1 — accordion FAQ
signup1 — signup form
login1 — login form
waitlist1 — email capture
download2 — app download section

### Navigation & Layout (6)
navbar1 — responsive navbar with mobile menu
footer2 — 4-column footer with social links
banner1 — dismissible top banner
list2 — feature list with icons
service1 — service card grid
services4 — services with illustrations

### Specialized (13)
integration3 — integrations grid
compare7 — product comparison
compliance1 — compliance badges/certifications
community1 — community section
resource1 — resources/docs links
casestudies2 — case study cards
casestudy8 — single case study
experience5 — experience timeline
team1 — team member grid
careers4 — job listings
about3 — about company section
timeline9 — vertical timeline
codeexample1 — code snippet showcase

---

## COMPOSITION RECIPES

### SaaS Landing
Nav(navbar1) → Hero(aurora-background + hero1) → Logos(logos8 + marquee) → Features(bento-grid + feature13) → Stats(stats8 + number-ticker) → Testimonials(animated-testimonials) → Pricing(pricing2) → FAQ(faq1 + shadcn-accordion) → CTA(cta10 + shimmer-button) → Footer(footer2)

### Agency/Portfolio
Nav(floating-navbar) → Hero(hero-parallax + colourful-text) → Work(focus-cards + apple-cards-carousel) → Services(service1 + magic-card) → About(about3 + timeline) → Testimonials(testimonial10 + marquee) → Contact(contact7) → Footer(footer2)

### Startup Launch
Nav(resizable-navbar) → Hero(lamp + text-generate-effect + waitlist1) → Problem/Solution(feature2) → Features(feature72 + wobble-card) → HowItWorks(feature51 + tracing-beam) → Testimonials(infinite-moving-cards) → CTA(cta11 + rainbow-button) → Footer(footer2)

### E-commerce Product
Nav(navbar1) → Hero(hero-video-dialog + compare) → Features(feature43 + 3d-card) → Gallery(gallery6 + lens) → Reviews(animated-testimonials) → Pricing(pricing4) → FAQ(faq1) → CTA(cta10) → Footer(footer2)

### Dashboard
Nav(sidebar) → Header(sticky-banner) → Stats(stats8 + animated-number) → Charts(bento-grid) → Table(table) → Activity(animated-list)
