export const leftNav = {
  hidden: { x: -50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};
export const rightNav = {
  hidden: { x: 50, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,

    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 400}px at -100px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at -20px -10px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const headerImage = {
  hidden: { opacity: 0, scale: 0.2 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.6, 0.05, -0.01, 0.9] },
  },
};
export const planeImage = {
  hidden: { y: -50, scale: 0.9 },
  show: {
    scale: 1.1,
    opacity: 1,
    y: 10,
    x: 10,
    x: -20,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};
export const containerdiv = {
  hidden: { opacity: 0.2 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.15,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
};

export const lineAnim = {
  hidden: { width: '0%' },
  show: {
    width: '100%',
    transition: { duration: 1 },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const slider = {
  hidden: { x: '-130%', skew: '45deg' },
  show: {
    x: '100%',
    skew: '0deg',
    transition: { ease: 'easeOut', duration: 1 },
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5, ease: 'easeIn' } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const fade = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.75 },
  },
};
