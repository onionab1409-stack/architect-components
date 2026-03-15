import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

gsap.defaults({
  duration: 0.8,
  ease: "power2.out",
})

export { gsap, ScrollTrigger, SplitText }
