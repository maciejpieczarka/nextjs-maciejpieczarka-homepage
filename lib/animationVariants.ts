import { type Variants } from 'framer-motion';

export const slideLeft: Variants = {
  start: {
    x: -50,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 1 },
  },
};

export const slideRight: Variants = {
  start: {
    x: 30,
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.5 },
  },
};

export const rise: Variants = {
  start: {
    y: 30,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
};

export const riseDelay: Variants = {
  start: {
    y: 30,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export const visibility: Variants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const scale: Variants = {
  start: {
    scale: 0,
  },
  end: {
    scale: 1,
    transition: { duration: 1 },
  },
};
