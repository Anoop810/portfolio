import type { Transition, Variants } from 'framer-motion';

export const revealEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = {
  duration: 0.72,
  ease: revealEase,
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export function createRevealItemVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.35, ease: 'easeOut' },
      },
    };
  }

  return {
    hidden: {
      opacity: 0,
      y: 48,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: revealTransition,
    },
  };
}

export function createIntroVariants(reducedMotion: boolean | null): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeOut' },
      },
    };
  }

  return {
    hidden: {
      opacity: 0,
      y: 32,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { ...revealTransition, duration: 0.85 },
    },
  };
}
