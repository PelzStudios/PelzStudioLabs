'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Fixed particle positions to avoid hydration mismatch
const FIXED_PARTICLE_POSITIONS = [
  { left: '20%', top: '30%' },
  { left: '60%', top: '10%' },
  { left: '80%', top: '70%' },
  { left: '40%', top: '50%' },
  { left: '10%', top: '80%' },
  { left: '70%', top: '40%' },
  { left: '30%', top: '20%' },
  { left: '90%', top: '60%' },
];

// Professional icons (using simple shapes instead of emojis)
const navIcons = {
  Home: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  About: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Games: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Contact: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Games', href: '/games' },
    { name: 'Contact', href: '/contact' },
  ];

  if (!isMounted) {
    // Server render - simplified version without animations
    return (
      <nav className="fixed top-0 w-full z-50">
        <div className="bg-black/10 backdrop-blur-2xl mx-4 mt-6 rounded-3xl">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-4">
                <img 
                  src="/logo.png" 
                  alt="PelzStudio Labs Logo" 
                  className="h-14 w-auto brightness-0 invert"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                    Pelzstudiolabs
                  </span>
                  <p className="text-xs text-purple-300/80 font-medium tracking-wider">
                    gaming innovation
                  </p>
                </div>
              </Link>
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-6 py-3 text-purple-200/80 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <button className="md:hidden w-14 h-14 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl">
                {/* Burger icon */}
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Floating Navigation Container */}
      <motion.div 
        className="bg-black/10 backdrop-blur-2xl mx-4 mt-6 rounded-3xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Area - Professional Animation */}
            <Link href="/" className="group relative">
              <motion.div 
                className="relative flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Logo with subtle pulse instead of rotation */}
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <img 
                    src="/logo.png" 
                    alt="PelzStudio Labs Logo" 
                    className="h-14 w-auto brightness-0 invert drop-shadow-lg"
                  />
                </motion.div>
                
                {/* Company Name */}
                <div className="relative">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    Pelzstudiolabs
                  </h1>
                  <p className="text-xs text-purple-300/80 font-medium tracking-wider">
                    gaming innovation
                  </p>
                </div>

                {/* Subtle Holographic Glow */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Menu - Professional Icons */}
            <div className="hidden md:flex items-center space-x-2 relative">
              {/* Animated Background Orb */}
              <motion.div
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onHoverStart={() => setActiveHover(item.name)}
                  onHoverEnd={() => setActiveHover(null)}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    delay: index * 0.1 
                  }}
                >
                  <Link
                    href={item.href}
                    className="relative px-6 py-3 text-purple-200/80 hover:text-white font-medium transition-all duration-500 group flex items-center space-x-3"
                  >
                    {/* Professional Icon */}
                    <motion.div
                      className="text-purple-300 group-hover:text-pink-400 transition-colors duration-300"
                      animate={{ 
                        scale: activeHover === item.name ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {navIcons[item.name as keyof typeof navIcons]}
                    </motion.div>
                    
                    <span className="relative z-10 font-comic">
                      {item.name}
                    </span>

                    {/* Liquid Fill Effect */}
                    <AnimatePresence>
                      {activeHover === item.name && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Sparkle Trail */}
                    <AnimatePresence>
                      {activeHover === item.name && (
                        <motion.div
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full blur-sm"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile menu button - Professional */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-14 h-14 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl flex items-center justify-center group"
              whileTap={{ scale: 0.9 }}
              animate={{
                rotate: isMenuOpen ? 180 : 0,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              {/* Inner Circle */}
              <div className="absolute inset-1 rounded-xl bg-black/80 backdrop-blur-sm" />
              
              {/* Professional Menu Lines */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                <motion.span 
                  className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{ 
                    rotate: isMenuOpen ? 45 : 0, 
                    y: isMenuOpen ? 6 : 0,
                  }}
                />
                <motion.span 
                  className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{ 
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span 
                  className="w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{ 
                    rotate: isMenuOpen ? -45 : 0, 
                    y: isMenuOpen ? -6 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu - Professional Icons */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden pt-6 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="grid grid-cols-2 gap-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ scale: 0, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        delay: index * 0.1 
                      }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="text-purple-300 group-hover:text-pink-400 transition-colors duration-300">
                          {navIcons[item.name as keyof typeof navIcons]}
                        </div>
                        <span className="text-purple-200 group-hover:text-white font-comic font-medium">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ambient Light Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 pointer-events-none -z-10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Fixed Particles in Background of Nav - No random values */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {FIXED_PARTICLE_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </nav>
  );
}