"use client"
import { useRef, ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface PinnedSectionProps {
  children: ReactNode
  className?: string
  pinSpacing?: boolean
  scrub?: boolean | number
  /** Scroll length in viewport heights (100 = one screen) */
  scrollLength?: number
}

export function PinnedSection({
  children,
  className,
  pinSpacing = true,
  scrub = true,
  scrollLength = 200,
}: PinnedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReducedMotion) return

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollLength}vh`,
        pin: true,
        pinSpacing,
        scrub: scrub === true ? 1 : scrub,
      })
    },
    { scope: sectionRef }
  )

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
