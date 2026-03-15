"use client"
import { ReactLenis, useLenis } from "lenis/react"
import { useEffect, ReactNode } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

export function SmoothScrollWithGSAP({
  children,
}: {
  children: ReactNode
}) {
  const lenis = useLenis(() => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    if (!lenis) return

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tickerCallback)
    }
  }, [lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        autoRaf: false,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}
