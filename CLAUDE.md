# ARCHITECT-COMPONENTS — AI Website Generator

## What
Premium website generator using 222 UI components + 3 hooks from Aceternity UI, Magic UI, Motion Primitives, shadcn/ui.
Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4.1, Motion 12.35, Three.js, GSAP, Lenis.

## Component Catalog
- UI components (222): `src/components/ui/`
- Hooks (3): `src/hooks/`
- Full index: see COMPONENT-CATALOG.md
- Registries: @aceternity, @magicui, @motion (configured in components.json)

## Critical Technical Rules

### Tailwind v4 (NOT v3)
- NO tailwind.config.js — config in `src/app/globals.css` via `@theme inline {}`
- Colors: oklch format `oklch(0.145 0 0)`, NOT hex
- Gradients: `bg-linear-to-r` NOT `bg-gradient-to-r`
- Renamed: `shadow` → `shadow-sm`, `rounded` → `rounded-sm`, `ring` → `ring-3`, `blur` → `blur-sm`
- Custom: `@theme inline { --color-brand: oklch(0.75 0.18 195); }`
- `border` without color = currentColor (NOT gray-200). ALWAYS: `border border-border`
- `hover:` wrapped in `@media (hover: hover)`. Touch devices won't trigger.
  Fix if needed: `@custom-variant hover (&:hover);` in globals.css
- CSS variables: `bg-(--brand)` NOT `bg-[--brand]` (parentheses, not brackets)
- Arbitrary values with spaces: use underscores `grid-cols-[1fr_2fr]`
- Buttons: `cursor: default` by default. Add to base if needed: `button { cursor: pointer; }`
- `transition` now includes outline-color. Use `transition-colors` if unwanted
- Container queries: native `@container`, `@sm:flex`, `@lg:grid`
- `not-*` variants: `not-disabled:hover:bg-primary`
- tailwindcss-animate is DEPRECATED. Use `tw-animate-css` (`@import "tw-animate-css"`)
- `@apply` is limited in v4. Prefer `@utility` for custom utilities

### Motion v12 (NOT framer-motion)
- Import: `from 'motion/react'` NOT `from 'framer-motion'`
- All `motion.*` components, `AnimatePresence`, `useMotionValue`, `useInView` etc.
- NEVER use GSAP and Motion on the SAME element (transform conflict)
- GSAP on parent + Motion on child = OK (different elements)

### Client vs Server Components (Next.js 16 App Router)
- page.tsx and layout.tsx = ALWAYS Server Components (for metadata, SEO)
- ~85% of our UI components require 'use client' (Motion, hooks, browser APIs)
- ~15% are Server-safe: card, badge, label, separator, table, avatar, skeleton, progress, input(base), textarea(base), select(base), breadcrumb, alert, button(base)
- RULE: push 'use client' boundary as DEEP as possible in component tree
- Sections with animations = 'use client' (boundary at section level, NOT page level)
- `export const metadata` ONLY works in Server Components

### shadcn/ui (radix-nova style)
- Uses unified `radix-ui` package (NOT individual `@radix-ui/*`)
- Components use `data-slot` attributes
- NEVER add z-* to overlay components (Dialog, Sheet, Drawer manage their own)
- ALWAYS use `gap-*` with flex, NEVER `space-x-*` / `space-y-*`
- Use semantic tokens (bg-primary, text-muted-foreground), NEVER raw colors (text-gray-500)
- Icons inside shadcn components: NEVER add size-*, use data-icon

### Fonts
- Load via `next/font/google` → CSS variables → `@theme inline`
- NEVER use Inter as the only font
- Max 2 fonts, 2-3 weights each
- `display: 'swap'` (default in next/font)
- 25 proven pairings (see project instructions)

### Lenis Smooth Scroll
```typescript
import { ReactLenis } from 'lenis/react';
<ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
```
- NEVER combine with CSS scroll-snap (conflict)
- Test parallax-scroll inside Lenis on target devices

### Z-Index Scale (project-wide)
```
-1   background decorations (noise, patterns) + pointer-events-none
 0   default content
 1   cards with hover effects
10   sticky elements (banner, scroll-progress)
40   navbar (floating-navbar, resizable-navbar)
50   dropdown, popover, tooltip, dialog, sheet, drawer
60   toast/sonner
70   overlay behind modals
80   spotlight, following-pointer
```
NEVER use z-[9999]. ONLY use this scale.

## Design Rules
- NEVER: Inter-only, purple gradient on white, uniform border-radius, all-centered text, generic copy
- ALWAYS: unique font pair per site, scroll-reveal on every section, hover states on all interactive elements
- Mobile-first: base=mobile, md:/lg:=desktop
- Section spacing: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Body text NEVER < 16px on mobile
- Tap targets: min 44×44px on mobile
- Semantic HTML: header, nav, main, section, footer. One H1 per page. H1→H2→H3 hierarchy.
- prefers-reduced-motion: disable animations, show static content

## Performance Rules
- Dynamic import for heavy components: 3d-globe, globe, particles, vortex, dither-shader, pixelated-canvas, webcam-pixel-grid
  `const Globe = dynamic(() => import('@/components/ui/3d-globe'), { ssr: false });`
- Max 3 heavy animations in viewport simultaneously
- Images: always next/image with width/height. `priority` on hero image. `loading="lazy"` for below fold.
- Error boundaries: app/error.tsx for global, component-level fallbacks for heavy 3D

## Accessibility (WCAG 2.1 AA)
- Contrast: ≥4.5:1 body text, ≥3:1 large text and UI elements
- Focus visible on ALL interactive elements: `focus-visible:ring-2 focus-visible:ring-ring`
- Alt text on all images. `alt=""` or `aria-hidden="true"` for decorative
- Keyboard navigation: Tab, Enter, Escape
- Modals: focus trap + Escape closes + focus returns
- `lang` attribute on `<html>`

## SEO
- `export const metadata` in page.tsx (Server Component only)
- title (50-60 chars), description (150-160 chars), og:image (1200×630)
- JSON-LD for Organization and FAQ sections
- sitemap.xml via app/sitemap.ts
- robots.txt via app/robots.ts

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Type check: `npx tsc --noEmit`

## Generation Workflow
1. Classify site type (12 types in MASTER-PLAN) → select preset + font pair
2. Plan sections: Nav→Hero→LogoCloud→Features→Stats→Testimonials→Pricing→FAQ→CTA→Footer
3. Select components from catalog for each section (see recipes)
4. Generate section by section, mobile-first
5. Add scroll-reveal (in-view/animated-group) to EVERY section
6. Add hover states to EVERY interactive element
7. Self-check: scoring rubric 60 points (26 critical)
8. `npm run build` to verify
