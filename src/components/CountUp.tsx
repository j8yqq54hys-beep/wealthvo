import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import { isStaticRender } from '../lib/isStatic'

interface CountUpProps {
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

/** Animated number that counts up when it scrolls into view. */
export default function CountUp({ to, duration = 1.4, prefix = '', suffix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(isStaticRender ? to : 0)

  useEffect(() => {
    if (isStaticRender) {
      setValue(to)
      return
    }
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: v => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
