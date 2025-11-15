'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, Target, Lightbulb, Heart, Sparkles, ArrowRight, Play } from 'lucide-react';

export default function GamesSection() {
  const [isCharacterHovered, setIsCharacterHovered] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  
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

  // New approach for stories - Interactive story cards
  const storyCards = [
    {
      icon: Target,
      title: "Purpose-Driven Narratives",
      description: "Every game we create carries a meaningful message that resonates beyond the screen.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      icon: Lightbulb,
      title: "Educational Journeys",
      description: "Transforming complex topics into engaging adventures that inspire learning.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20"
    },
    {
      icon: Heart,
      title: "Impactful Experiences",
      description: "Creating emotional connections that motivate players to make real-world changes.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20"
    },
    {
      icon: Sparkles,
      title: "Innovative Storytelling",
      description: "Pushing creative boundaries with unique gameplay and narrative integration.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900/20 to-red-900/20"
    }
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

  return (
    <>
      {/* The Stories We Tell - Interactive Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-black to-pink-900/5" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <span className="text-white">The Stories</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> We Tell</span>
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              PelzStudiolabs was founded with a bold vision: to create games that do more than entertain. Our mission is to develop engaging, thought-provoking games that educate, raise awareness, and inspire positive change.
            </motion.p>
          </motion.div>

          {/* Interactive Story Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {storyCards.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveStory(index)}
                onMouseLeave={() => setActiveStory(0)}
              >
                <div className={`relative rounded-3xl overflow-hidden border-2 border-purple-500/20 backdrop-blur-sm transition-all duration-500 group-hover:border-purple-500/50 ${
                  activeStory === index ? 'scale-105' : 'scale-100'
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${story.bgColor} opacity-60`} />
                  
                  {/* Animated Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${story.color} opacity-0 group-hover:opacity-10`}
                    animate={{
                      opacity: activeStory === index ? 0.1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8">
                    <div className="flex items-start space-x-6">
                      {/* Icon Container */}
                      <motion.div
                        className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${story.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        animate={{
                          rotate: activeStory === index ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <story.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold text-white mb-3"
                          animate={{
                            x: activeStory === index ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {story.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-300 leading-relaxed"
                          animate={{
                            opacity: activeStory === index ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {story.description}
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Animated Arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        x: activeStory === index ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6 text-purple-400" />
                    </motion.div>
                  </div>
                  
                  {/* Floating Elements */}
                  {activeStory === index && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-4 h-4 bg-gradient-to-r ${story.color} rounded-full blur-sm pointer-events-none`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          style={{
                            left: `${20 + i * 20}%`,
                            top: `${30 + i * 15}%`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <BookOpen className="w-5 h-5" />
                <span>Explore All Stories</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.6, 0],
                x: [0, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Original Games Section */}
      <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Featured Games
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
    </>
  );
}