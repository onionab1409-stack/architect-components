"use client"
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react"
import { useEffect, useState } from "react"

interface PreloaderProps {
  /** Minimum display duration in ms (for branding) */
  minDuration?: number
  /** Brand name or text to display */
  brandName?: string
  /** Custom className for the container */
  className?: string
}

export function Preloader({
  minDuration = 1500,
  brandName,
  className,
}: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const minTimer = new Promise((resolve) =>
      setTimeout(resolve, minDuration)
    )
    const domReady = new Promise((resolve) => {
      if (document.readyState === "complete") resolve(true)
      else
        window.addEventListener("load", () => resolve(true), {
          once: true,
        })
    })

    Promise.all([minTimer, domReady]).then(() => setIsLoading(false))
  }, [minDuration])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={
            className ||
            "fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          }
        >
          {brandName ? (
            <motion.span
              className="text-2xl font-semibold text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {brandName}
            </motion.span>
          ) : (
            <motion.div
              className="h-8 w-8 rounded-full border-2 border-muted border-t-foreground"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
