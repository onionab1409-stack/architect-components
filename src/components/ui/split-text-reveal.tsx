"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap"

interface SplitTextRevealProps {
  children: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  type?: "chars" | "words" | "lines"
  stagger?: number
  duration?: number
  delay?: number
  trigger?: "scroll" | "load"
}

export function SplitTextReveal({
  children,
  className,
  tag: Tag = "h2",
  type = "chars",
  stagger = 0.03,
  duration = 0.8,
  delay = 0,
  trigger = "scroll",
}: SplitTextRevealProps) {
  const container = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!textRef.current) return

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      if (prefersReducedMotion) return

      const split = SplitText.create(textRef.current, { type })
      const targets =
        type === "chars"
          ? split.chars
          : type === "words"
            ? split.words
            : split.lines

      const animationProps = {
        opacity: 0,
        y: type === "lines" ? 40 : 20,
        duration,
        stagger,
        delay,
        ease: "power2.out",
      }

      if (trigger === "scroll") {
        gsap.from(targets, {
          ...animationProps,
          scrollTrigger: {
            trigger: container.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      } else {
        gsap.from(targets, animationProps)
      }

      return () => split.revert()
    },
    { scope: container }
  )

  return (
    <div ref={container}>
      <Tag ref={textRef as any} className={className}>
        {children}
      </Tag>
    </div>
  )
}
