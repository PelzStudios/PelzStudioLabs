'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { Play } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  const [isCharacterHovered, setIsCharacterHovered] = useState(false);

  const featuredGame = {
    title: "Eco Dash",
    description: "Eco Dash is an exciting endless runner where you dash through polluted environments, collect trash, and learn climate facts along the way! Test your reflexes, complete fun missions, and unlock power-ups—all while making a difference!",
    image: "/echo-dash-character.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.PelzStudioLabs.EcoDash"
  };

  // Coming soon with actual images
  const comingSoonGames = [
    { status: "Coming Soon", image: "/coming-soon-1.jpg" }, 
    { status: "Coming Soon", image: "/coming-soon-2.jpg" },
    { status: "Coming Soon", image: "/coming-soon-3.jpg" },
  ];

  // Character animation variants
  const characterVariants: Variants = {
    idle: {
      y: [0, -15, 0],
      scale: 1,
      rotate: 0,
      transition: {
        y: {
          duration: 2,
          repeat: Infinity as unknown as number, // Type workaround for Infinity
          ease: "easeInOut" as const, // Specific easing type
        }
      }
    },
    hover: {
      scale: 1.1,
      y: 0,
      rotate: [0, -3, 3, 0],
      transition: {
        scale: { duration: 0.3 },
        rotate: { 
          duration: 0.5, 
          repeat: 1,
          repeatType: "reverse" as const 
        },
      }
    }
  };

  const features = [
    {
      icon: '🎯',
      title: 'ENGAGING GAMEPLAY',
      description: 'We craft games that captivate and challenge, keeping players coming back for more. Every experience is designed to be fun, immersive, and memorable.'
    },
    {
      icon: '🌟',
      title: 'PURPOSE-DRIVEN',
      description: 'Our games inspire change, spark curiosity, and make a difference in the world. We believe in the power of play to educate and empower.'
    },
    {
      icon: '👥',
      title: 'COMMUNITY FOCUSED',
      description: 'We build with our players, listening and evolving together for a better experience. Your feedback shapes our journey.'
    },
    {
      icon: '💫',
      title: 'INNOVATIVE DESIGN',
      description: 'We blend creativity and technology to deliver unforgettable adventures. Expect the unexpected with every new release.'
    }
  ];

  return (
    <main className="min-h-screen relative z-10 pt-40">
      {/* Main Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Mission Statement */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Creating Games That Entertain,
            </span>
            <br />
            <span className="text-white">
              Educate, and Inspire Change
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            PelzStudiolabs is a game studio dedicated to crafting immersive gaming experiences that blend <span className="text-purple-400">entertainment with learning.</span>
            Explore our games and join us in shaping a better future through play.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {/* Explore Our Games - Scrolls to games section */}
            <motion.button 
              onClick={() => {
                const gamesSection = document.getElementById('games');
                if (gamesSection) {
                  gamesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Our Games</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            {/* Learn More - Goes to About page */}
            <Link href="/about">
              <motion.button 
                className="px-10 py-5 bg-black/40 text-gray-300 rounded-2xl font-bold text-lg border-2 border-purple-500/30 hover:border-purple-500/60 hover:text-white transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Our Games
          </span>
        </h2>

        {/* Featured Game with Animated Character */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} 
            className="relative group flex justify-center"
          >
            {/* Completely Transparent Container - No background, no border */}
            <div className="relative">
              {/* Animated Character Container - Transparent */}
              <motion.div
                className="relative cursor-pointer"
                onHoverStart={() => setIsCharacterHovered(true)}
                onHoverEnd={() => setIsCharacterHovered(false)}
                variants={characterVariants}
                initial="idle"
                animate={isCharacterHovered ? "hover" : "idle"}
              >                       
                {/* Character Image */}
                <motion.img 
                  src="/echo-dash-character.png" 
                  alt="Eco Dash Game Character"
                  className="w-80 h-80 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating Particles on Hover */}
                {isCharacterHovered && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm pointer-events-none"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 120],
                          y: [0, (Math.random() - 0.5) * 120]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                        style={{
                          left: `${30 + (i * 5)}%`,
                          top: `${20 + (i * 5)}%`,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </div>

            {/* Background Glow Effect - Only appears on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                width: '24rem',
                height: '24rem',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-3xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {featuredGame.title}
            </motion.h3>
            
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {featuredGame.description}
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href={featuredGame.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span className="relative z-10">Play Eco Dash</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Coming Soon Games - With Images and Square Containers */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-400 mb-8">More Adventures Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {comingSoonGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 border border-purple-500/20 rounded-xl backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Square Image Container */}
                <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 relative overflow-hidden">
                  <motion.img 
                    src={game.image} 
                    alt={`Coming Soon Game ${index + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay with Coming Soon text */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.span 
                      className="bg-purple-500/80 text-white px-6 py-3 rounded-full text-lg font-bold backdrop-blur-sm"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {game.status}
                    </motion.span>
                  </div>
                </div>

                {/* Status badge at bottom */}
                <div className="p-4">
                  <span className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-bold">
                    {game.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* We Inspire Change Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2 
                  className="text-5xl md:text-6xl font-bold"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    We Inspire
                  </span>
                  <br />
                  <span className="text-white">Change</span>
                </motion.h2>
                
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Our mission is to develop engaging, thought-provoking games that educate, raise awareness, and inspire positive change.
              </motion.p>

              {/* Interactive Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6 pt-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { number: '10K+', label: 'Players Inspired' },
                  { number: '50+', label: 'Countries Reached' },
                  { number: '100%', label: 'Passion Driven' },
                  { number: '24/7', label: 'Innovation' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-black/30 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Container - Smaller with Hover Effects */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 backdrop-blur-sm group cursor-pointer"
                whileHover="hover"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                style={{ maxWidth: '400px', width: '100%' }}
              >
                {/* Your Image */}
                <img 
                  src="/inspire-change.jpg" 
                  alt="PelzStudio Labs - Inspiring Change Through Games"
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Overlay with Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-bold mb-2">Making an Impact</h3>
                    <p className="text-purple-200 text-sm">Through innovative gaming experiences</p>
                  </div>
                </div>

                {/* Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-3xl"
                  variants={{
                    hover: {
                      borderColor: 'rgba(139, 92, 246, 0.5)',
                      boxShadow: '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)'
                    }
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Particles on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={false}
                  variants={{
                    hover: {
                    transition: {
                      staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${10 + (i * 15)}%`,
                      }}
                      variants={{
                        hover: {
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1.2, 0.5],
                        }
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Corner Accents */}
                <motion.div
                  className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  variants={{
                    hover: {
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity }
                    }
                  }}
                />
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  variants={{
                    hover: {
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity, delay: 0.5 }
                    }
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  variants={{
                    hover: {
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity, delay: 1 }
                    }
                  }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  variants={{
                    hover: {
                      scale: [1, 1.2, 1],
                      transition: { duration: 1, repeat: Infinity, delay: 1.5 }
                    }
                  }}
                />
              </motion.div>

              {/* Background Glow Effect */}
              <motion.div
                className="absolute -z-10 inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ maxWidth: '400px', width: '100%' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose
              </span>
              <span className="text-white"> Us</span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover what makes our approach to game development unique and impactful
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Feature Card */}
                <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-3xl border-2 border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 h-full">
                  {/* Animated Icon */}
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.span
                      className="text-3xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        delay: index * 0.5 
                      }}
                    >
                      {feature.icon}
                    </motion.span>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 blur-sm -z-10"
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Connection Lines (Visual Element) */}
                {index < features.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute -bottom-4 right-8 w-8 h-8 border-r-2 border-b-2 border-purple-500/20 rounded-br-2xl"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey With Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}