"use client"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react"
import { usePathname } from "next/navigation"
import { useContext, useRef, ReactNode } from "react"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"

/**
 * FrozenRouter freezes the router context during exit animations
 * to prevent premature unmounting of the old page content.
 *
 * ⚠️ Uses internal Next.js API (LayoutRouterContext).
 * May break on Next.js updates. Use only when exit animations are critical.
 */
function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current
  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  )
}

interface PageTransitionFullProps {
  children: ReactNode
  className?: string
}

export function PageTransitionFull({
  children,
  className,
}: PageTransitionFullProps) {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <main className={className}>{children}</main>
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.27, 0.94, 0.48, 1.0],
        }}
        className={className}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.main>
    </AnimatePresence>
  )
}
