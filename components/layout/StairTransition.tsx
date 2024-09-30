'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function StairTransition() {
  const pathname = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <div className='pointer-events-none fixed left-0 right-0 top-0 z-40 flex h-screen w-screen'>
          <Stairs />
        </div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 0.5, ease: 'easeInOut' },
          }}
          className='pointer-events-none fixed top-0 h-screen w-screen bg-primary'
        />
      </div>
    </AnimatePresence>
  );
}

// Stairs Animation

// Animation variables
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: { top: ['100%', '0%'] },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

// Stairs Component
function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.08,
          }}
          className='relative h-full w-full bg-white'
        />
      ))}
    </>
  );
}
