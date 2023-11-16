import type { Variants } from 'framer-motion';

type AnimationType = 'decay' | 'spring' | 'keyframes' | 'tween' | 'inertia';
type Duration = number;
type StaggerChildren = number;
type Delay = number;

const slideIn: (
  type: AnimationType,
  duration: Duration,
  staggerChildren: StaggerChildren,
  delay?: Delay
) => Variants = (type, duration, staggerChildren, delay) => ({
  in: {
    y: 0,
    transition: {
      duration,
      type,
      when: 'beforeChildren',
      staggerChildren,
      delay,
    },
  },
  out: {
    y: 500,
    transition: {
      duration,
      type,
      when: 'afterChildren',
      staggerChildren,
      delay,
    },
  },
});

const fadeIn: (duration: Duration, delay?: Delay) => Variants = (
  duration,
  delay
) => ({
  in: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
    },
  },
  out: {
    opacity: 0,
    x: -50,
    transition: {
      duration,
      delay,
    },
  },
});

export { slideIn, fadeIn };
