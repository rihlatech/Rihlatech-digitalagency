import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function CountUp({ value, duration = 1200, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const shouldReduceMotion = useReducedMotion()
  const [count, setCount] = useState(shouldReduceMotion ? value : 0)

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return undefined
    }

    let frameId
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(Math.round(value * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [duration, isInView, shouldReduceMotion, value])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
