# ARCHITECT-COMPONENTS — AI Website Generator

## What
Premium website generator using 267 custom components (Aceternity UI + Magic UI + Motion Primitives + shadcn/ui).
Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4.1, Motion 12.35.1, Three.js, GSAP, Lenis.

## Component Catalog
- UI components (210): `src/components/ui/`
- Page blocks (54): `src/components/blocks/`
- Hooks (3): `src/hooks/`
- Full index: see COMPONENT-CATALOG.md

## Critical Technical Rules

### Tailwind v4 (NOT v3)
- NO tailwind.config.js — config in `src/app/globals.css` via `@theme inline {}`
- Colors: oklch format `oklch(0.145 0 0)`, NOT hex
- Gradients: `bg-linear-to-r` NOT `bg-gradient-to-r`
- Renamed: `shadow` → `shadow-sm`, `rounded` → `rounded-sm`, `ring` → `ring-3`
- Custom: `@theme { --color-brand: oklch(0.75 0.18 195); }`

### Motion v12 (NOT framer-motion)
- Import: `from 'motion/react'` NOT `from 'framer-motion'`
- All `motion.*` components, `AnimatePresence`, `useMotionValue` etc.

### shadcn/ui (radix-nova style)
- Uses unified `radix-ui` package (NOT individual `@radix-ui/*`)
- Components use `data-slot` attributes
- Two accordion APIs: `accordion.tsx` (Aceternity/Motion) and `shadcn-accordion.tsx` (Radix)
- Two tabs APIs: `tabs.tsx` (Aceternity) and `shadcn-tabs.tsx` (Radix)

### Fonts
- Load via `next/font/google` → CSS variables → `@theme inline`
- NEVER use Inter as the only font
- 25 proven pairings available (see project instructions)

### Lenis Smooth Scroll
```typescript
import { ReactLenis } from 'lenis/react';
<ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
```

## Design Rules
- NEVER: Inter-only, purple gradient on white, uniform border-radius, all-centered text
- ALWAYS: unique font pair per site, scroll-reveal on every section, hover states everywhere
- Mobile-first: base=mobile, md:/lg:=desktop
- Section spacing: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Body text NEVER < 16px on mobile

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Type check: `npx tsc --noEmit`

## Generation Workflow
1. Classify site type → select design preset + font pair
2. Plan sections (Nav→Hero→LogoCloud→Features→Stats→Testimonials→Pricing→FAQ→CTA→Footer)
3. Select components from catalog for each section
4. Generate page-by-page, section-by-section
5. Self-check: responsive, a11y, SEO, no AI slop, animations work
6. `npm run build` to verify

## Dependencies (16)
motion, radix-ui, lucide-react, class-variance-authority, vaul, cmdk, sonner, react-hook-form, zod, input-otp, react-resizable-panels, embla-carousel-react, date-fns, next-themes, lenis, gsap
