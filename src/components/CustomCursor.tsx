'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Your exact mobile detection function
  const checkMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
  };

  useEffect(() => {
    const updateMobileStatus = () => {
      const mobile = checkMobile();
      setIsMobile(mobile);
      
      if (mobile) {
        document.body.style.cursor = 'auto';
      }
    };

    // Initial check
    updateMobileStatus();

    // Update on resize (for responsive design)
    window.addEventListener('resize', updateMobileStatus);

    // If mobile, don't set up cursor events
    if (isMobile) return;

    // Cursor event handlers 
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.onclick !== null ||
        target.closest('button') !== null ||
        target.closest('a') !== null;
      
      setIsPointer(isClickable);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', updateMobileStatus);
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render anything on mobile - equivalent to your cursor.style.display = 'none'
  if (isMobile) return null;

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-[9998] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.7 : isPointer ? 1.8 : 1.2,
          opacity: isVisible ? 0.8 : 0,
          borderColor: isPointer ? '#ec4899' : '#8b5cf6',
        }}
        transition={{ 
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 },
          borderColor: { duration: 0.3 }
        }}
      />

      {/* Pulsing Effect (your ripple equivalent) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-purple-300 rounded-full pointer-events-none z-[9997] transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hover Text for Interactive Elements */}
      {isPointer && (
        <motion.div
          className="fixed px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full pointer-events-none z-[9999] whitespace-nowrap shadow-lg"
          style={{
            left: cursorXSpring.get() + 20,
            top: cursorYSpring.get() - 10,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          Click me!
        </motion.div>
      )}
    </>
  );
}