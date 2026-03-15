"use client"
import { useRef, ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface HorizontalScrollProps {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export function HorizontalScroll({
  children,
  className,
  innerClassName,
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current || !innerRef.current) return

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReducedMotion) return

      const totalWidth =
        innerRef.current.scrollWidth - window.innerWidth

      gsap.to(innerRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={className}>
      <div
        ref={innerRef}
        className={innerClassName || "flex w-max gap-0"}
      >
        {children}
      </div>
    </div>
  )
}
