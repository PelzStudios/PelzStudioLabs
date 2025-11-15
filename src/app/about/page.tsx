'use client';

import ClientOnly from '@/components/ClientOnly';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Hammer, 
  Lightbulb,
  Palette,
  Zap,
  Leaf,
  Handshake,
  Sparkles,
  GraduationCap,
  Globe,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen relative z-10 pt-32">
      {/* Hero Section for About Page */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About
            </span>
            <span className="text-white"> PelzStudiolabs</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Where creativity meets purpose, and games become catalysts for change
          </motion.p>
        </div>
      </section>

      {/* Section 1: Our Mission & Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
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
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                  <span className="text-white"> & Story</span>
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
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                PelzStudiolabs was founded with a bold vision: to create games that do more than entertain. Our mission is to develop engaging, thought-provoking games that educate, raise awareness, and inspire positive change. Whether it's environmental advocacy, strategic thinking, or social impact, our games challenge players to think differently while having fun.
              </motion.p>

              {/* Mission Stats */}
              <motion.div
                className="grid grid-cols-2 gap-6 pt-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  { number: '100%', label: 'Purpose Driven' },
                  { number: '24/7', label: 'Innovation' },
                  { number: '∞', label: 'Creativity' },
                  { number: '2021', label: 'Founded' }
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

            {/* Mission Visual */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 backdrop-blur-sm">
                {/* Mission Image */}
                <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center relative">
                  {/* Animated Elements */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  
                  {/* Floating Game Elements */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
                      animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        repeatType: "reverse",
                      }}
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                    />
                  ))}
                  
                  <div className="text-center p-8 relative z-10">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl mx-auto mb-6 flex items-center justify-center border-2 border-purple-500/50"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Target className="w-8 h-8 text-purple-300" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Purpose-Driven Gaming</h3>
                    <p className="text-purple-200">Where every game tells a meaningful story</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Vision with Custom Background */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Custom Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url("/vision-background.jpg")',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Vision Icon */}
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl mx-auto flex items-center justify-center border-2 border-purple-500/30 backdrop-blur-sm"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Eye className="w-10 h-10 text-purple-300" />
            </motion.div>

            {/* Vision Heading */}
            <motion.h2
              className="text-4xl md:text-6xl font-bold"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Our Vision
              </span>
            </motion.h2>

            {/* Vision Content */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-500/20 mx-auto max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-white leading-tight"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                "To be a leading force in game-based learning and awareness."
              </motion.p>
            </motion.div>

            {/* Vision Elements */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { icon: GraduationCap, title: "Learning", desc: "Educational Excellence" },
                { icon: Globe, title: "Awareness", desc: "Global Impact" },
                { icon: Rocket, title: "Innovation", desc: "Cutting-Edge Tech" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 bg-black/30 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-purple-300">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        <ClientOnly>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 50],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  repeatType: "reverse",
                }}
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${10 + (i * 7)}%`,
                }}
              />
            ))}
          </div>
        </ClientOnly>
      </section>

      {/* Section 3: What We Do with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black" />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2, repeatType: "reverse" }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image on Left */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 backdrop-blur-sm">
                {/* What We Do Image */}
                <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center relative">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 2px, transparent 0)`,
                      backgroundSize: '50px 50px'
                    }} />
                  </div>
                  
                  {/* Interactive Elements */}
                  {[
                    { icon: Lightbulb, delay: 0 },
                    { icon: Palette, delay: 0.7 },
                    { icon: Zap, delay: 1.4 },
                    { icon: Leaf, delay: 2.1 },
                    { icon: Handshake, delay: 2.8 },
                    { icon: Sparkles, delay: 3.5 }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center"
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: item.delay,
                        repeatType: "reverse",
                      }}
                      style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + i * 12}%`,
                      }}
                    >
                      <item.icon className="w-5 h-5 text-purple-300" />
                    </motion.div>
                  ))}
                  
                  <div className="text-center p-8 relative z-10">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl mx-auto mb-6 flex items-center justify-center border-2 border-purple-500/50 backdrop-blur-sm"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Hammer className="w-10 h-10 text-purple-300" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Creative Process</h3>
                    <p className="text-purple-200">Blending art, technology, and purpose</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white">What</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> We Do</span>
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
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                We create games that go beyond entertainment. Our team blends creativity, technology, and purpose to build experiences that educate, inspire, and empower players to make a difference. From environmental advocacy to social impact, we believe in the power of play to change the world—one game at a time.
              </motion.p>

              {/* What We Do Features */}
              <motion.div
                className="space-y-4 pt-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                {[
                  "Purpose-driven game design",
                  "Educational content integration", 
                  "Social impact storytelling",
                  "Cutting-edge technology",
                  "Player empowerment focus",
                  "Global awareness campaigns"
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-4 p-3 bg-black/30 rounded-xl backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ x: 10 }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Make a Difference</span> Through Gaming?
          </h3>
          <Link href="/contact">
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Mission
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}