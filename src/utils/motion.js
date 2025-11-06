// Framer Motion animation variants for consistent animations

export const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      duration: 1.2,
      delay,
    },
  },
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', duration: 0.6 },
  },
};

export const slideIn = (direction = 'left', delay = 0) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : '100%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1,
      delay,
    },
  },
});

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
};
