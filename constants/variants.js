export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === 'left' ? 0 : direction === 'right' ? 0 : 0,
        y: direction === 'up' ? 0 : direction === 'down' ? 0 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: 'easeOut',
        },
      },
    };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren,
        },
      },
    };
};