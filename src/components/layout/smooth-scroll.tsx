"use client"
import { ReactLenis } from "lenis/react"
import { ReactNode } from "react"

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
