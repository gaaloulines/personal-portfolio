import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation, type Variants } from "framer-motion"

export const useScrollAnimation = (direction: "up" | "down" | "left" | "right" = "up", delay = 0, duration = 0.5) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  return { ref, controls, variants }
}

