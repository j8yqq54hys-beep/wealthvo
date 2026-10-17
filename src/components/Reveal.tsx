import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { isStaticRender } from '../lib/isStatic'
import { cn } from '../lib/cn'

interface RevealProps {
  children: ReactNode
  /** stagger delay in seconds (ignored in static render mode) */
  delay?: number
  className?: string
}

/**
 * Scroll-reveal wrapper. In static render mode (?static) it renders
 * children immediately with no animation.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  if (isStaticRender) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
