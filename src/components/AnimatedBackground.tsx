'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PARTICLE_CONFIGS = [
  { width: 129, height: 135, left: 94, top: 44 },
  { width: 120, height: 68, left: 63, top: 24 },
  { width: 105, height: 68, left: 84, top: 39 },
  { width: 69, height: 77, left: 47, top: 61 },
  { width: 76, height: 88, left: 1, top: 5 },
  { width: 96, height: 75, left: 7, top: 50 },
  { width: 129, height: 116, left: 39, top: 47 },
  { width: 131, height: 134, left: 86, top: 88 },
  { width: 130, height: 95, left: 1, top: 56 },
  { width: 98, height: 103, left: 80, top: 6 },
  { width: 70, height: 136, left: 87, top: 78 },
  { width: 74, height: 52, left: 10, top: 61 },
  { width: 129, height: 74, left: 13, top: 76 },
  { width: 83, height: 89, left: 84, top: 41 },
  { width: 111, height: 113, left: 17, top: 24 },
];

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/background.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image - Correct path from public folder */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/background.jpg")',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Animated Elements */}
      {PARTICLE_CONFIGS.map((config, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20"
          style={{
            width: config.width,
            height: config.height,
            left: `${config.left}%`,
            top: `${config.top}%`,
          }}
          animate={{
            x: [0, (i % 2 === 0 ? 1 : -1) * 50],
            y: [0, (i % 3 === 0 ? 1 : -1) * 50],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10 + (i * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #8b5cf6 1px, transparent 1px),
            linear-gradient(180deg, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.5, 1, 1.5],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}