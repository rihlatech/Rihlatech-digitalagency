import { motion, useReducedMotion } from 'framer-motion'
import { sectionVariants, viewportOnce } from '../utils/animations'

export default function AnimatedSection({
  as = 'section',
  direction = 'up',
  className = '',
  children,
}) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] || motion.section

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>
  }

  return (
    <Component
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionVariants}
      className={className}
    >
      {children}
    </Component>
  )
}
