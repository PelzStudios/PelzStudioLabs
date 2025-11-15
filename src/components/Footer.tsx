'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Gamepad2, 
  Mail, 
  MessageCircle, 
  Users, 
  ArrowUp, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  MessageSquare
} from 'lucide-react';
import ClientOnly from './ClientOnly'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Games', href: '/games' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    connect: [
      { name: 'Email', href: 'mailto:pelzstudiolabs@gmail.com', icon: Mail },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/pelzstudiolabs/', icon: Linkedin },
      { name: 'Community', href: '#', icon: Users }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-purple-900/10 to-black border-t border-purple-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-pink-900/5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center space-x-4 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <img 
                    src="/logo.png" 
                    alt="PelzStudiolabs Logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-300" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  PelzStudioLabs
                </h3>
                <p className="text-gray-400 text-sm mt-1">Creating games that matter</p>
              </div>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              We create immersive gaming experiences that educate, inspire, and make a positive impact on the world.
            </p>

            {/* Social Links with Icons */}
            <div className="flex space-x-4">
              {[
                { 
                  name: 'Twitter', 
                  href: '#', 
                  icon: Twitter,
                  color: 'hover:text-blue-400 hover:border-blue-400/40' 
                },
                { 
                  name: 'Instagram', 
                  href: '#', 
                  icon: Instagram,
                  color: 'hover:text-pink-400 hover:border-pink-400/40' 
                },
                { 
                  name: 'LinkedIn', 
                  href: 'https://www.linkedin.com/company/pelzstudiolabs/', 
                  icon: Linkedin,
                  color: 'hover:text-blue-500 hover:border-blue-500/40' 
                },
                { 
                  name: 'YouTube', 
                  href: '#', 
                  icon: Youtube,
                  color: 'hover:text-red-400 hover:border-red-400/40' 
                }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-black/40 border border-purple-500/20 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 backdrop-blur-sm hover:border-purple-500/40`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-white">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-white">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      target={link.href.startsWith('http') || link.href.startsWith('mailto') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-3 group"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Get the latest news about our games and updates.
            </p>
            
            <form className="space-y-3">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/40 border border-purple-500/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors duration-300 backdrop-blur-sm"
                />
                <motion.button
                  type="submit"
                  className="px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium text-sm hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join
                </motion.button>
              </div>
            </form>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-full py-3 bg-black/40 border border-purple-500/20 rounded-xl text-gray-400 hover:text-white hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} PelzStudiolabs. All Rights Reserved.
          </div>

          {/* Additional Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles - Client Only */}
      <ClientOnly>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
                x: [0, (Math.random() - 0.5) * 40],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                repeatType: "reverse",
              }}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${10 + (i * 12)}%`,
              }}
            />
          ))}
        </div>
      </ClientOnly>
    </footer>
  );
}