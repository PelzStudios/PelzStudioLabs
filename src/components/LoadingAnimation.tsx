'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on client side only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1
            }}
            className="relative px-4"
          >
            {/* Main Logo - RESPONSIVE TEXT */}
            <motion.div
              className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent text-center px-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              PelzStudioLabs
            </motion.div>

            {/* Particle Effects - FIXED WINDOW ERROR */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 md:w-2 md:h-2 bg-purple-500 rounded-full"
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1,
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * (isMobile ? 100 : 200)],
                    y: [0, (Math.random() - 0.5) * (isMobile ? 100 : 200)],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Loading Bar - responsive */}
            <motion.div
              className="mt-6 md:mt-8 w-48 md:w-64 h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="text-white text-sm md:text-base mt-4 text-center opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Loading your gaming experience...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}