export const viewportOnce = { once: true, amount: 0.22 }

export const easing = [0.22, 1, 0.36, 1]

export const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easing },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
}

export const sectionVariants = {
  hidden: (direction = 'up') => ({
    opacity: 0,
    x: direction === 'left' ? -42 : direction === 'right' ? 42 : 0,
    y: direction === 'up' ? 28 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: easing },
  },
}

export const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

export const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easing },
  },
}

export const heroTextVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: easing },
  }),
}

export const heroImageVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.22, ease: easing },
  },
}

export const buttonMotion = {
  whileHover: {
    scale: 1.035,
    y: -2,
    boxShadow: '0 18px 40px -18px rgba(37, 99, 235, 0.85)',
  },
  whileTap: { scale: 0.97, y: 0 },
  transition: { type: 'spring', stiffness: 360, damping: 24 },
}
