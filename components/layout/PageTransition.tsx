'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 1, ease: 'easeInOut' },
          }}
          className='pointer-events-none fixed top-0 h-screen w-screen bg-primary'
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
