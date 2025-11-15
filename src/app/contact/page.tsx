'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Users, Sparkles, AlertCircle } from 'lucide-react';
import ClientOnly from '@/components/ClientOnly';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Your Formspree form ID - replace with your actual Formspree form ID
  // You can get this from https://formspree.io/ after creating a form
  const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'xvgwnwdl';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Reset the form
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again or contact us directly at contact@pelzstudiolabs.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      details: 'pelzstudiolabs@gmail.com',
      color: 'from-purple-500 to-pink-500',
      link: 'mailto:pelzstudiolabs@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'Social Media',
      description: 'Connect with us online',
      details: '@PelzStudioLabs',
      color: 'from-blue-500 to-cyan-500',
      link: 'https://www.linkedin.com/company/pelzstudiolabs/'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our player community',
      details: 'Discord & Forums',
      color: 'from-green-500 to-emerald-500',
      link: 'https://discord.gg/your-invite-link'
    }
  ];

  return (
    <main className="min-h-screen relative z-10 pt-32">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Get In
            </span>
            <span className="text-white"> Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Ready to create something amazing together? We'd love to hear from you. 
            Let's start a conversation about your next gaming adventure.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10" />
        
        <ClientOnly>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
        </ClientOnly>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
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
                  <span className="text-white">Let's Create</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Together</span>
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
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                we're here to help. Let's build something extraordinary together.
              </motion.p>

              {/* Contact Methods */}
              <motion.div
                className="space-y-6 pt-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-6 p-6 bg-black/30 rounded-2xl backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group block"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{method.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                      <p className="text-purple-300 font-medium">{method.details}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Additional Info */}
              <motion.div
                className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <h4 className="text-white font-bold">Based in Nigeria</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Creating global impact from the heart of Africa. We're proud to be part of the 
                  growing tech and gaming ecosystem in Nigeria.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 backdrop-blur-sm">
                {/* Form Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
                
                <ClientOnly>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </ClientOnly>
                
                {/* Form Content */}
                <div className="relative z-10 p-8">
                  {isSubmitted ? (
                    // Success Message
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Sparkles className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                      <p className="text-gray-300">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <motion.button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 px-6 py-2 bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    // Contact Form
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Error Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <p className="text-sm">{error}</p>
                        </motion.div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-white mb-3 font-medium">Name *</label>
                          <input 
                            type="text" 
                            id="name"
                            name="name"
                            required
                            disabled={isSubmitting}
                            className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white mb-3 font-medium">Email *</label>
                          <input 
                            type="email" 
                            id="email"
                            name="email"
                            required
                            disabled={isSubmitting}
                            className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-white mb-3 font-medium">Subject *</label>
                        <input 
                          type="text" 
                          id="subject"
                          name="subject"
                          required
                          disabled={isSubmitting}
                          className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm disabled:opacity-50"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-white mb-3 font-medium">Message *</label>
                        <textarea 
                          id="message"
                          name="message"
                          rows={6} 
                          required
                          disabled={isSubmitting}
                          className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all duration-300 backdrop-blur-sm resize-none disabled:opacity-50"
                          placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                      </div>
                      
                      <motion.button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mx-auto"
                          />
                        ) : (
                          <>
                            <span className="relative z-10 flex items-center justify-center space-x-3">
                              <Send className="w-5 h-5" />
                              <span>Send Message</span>
                            </span>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                          </>
                        )}
                      </motion.button>
                    </form>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-sm opacity-40" />
            </motion.div>
          </div>
        </div>

        {/* Floating Particles - WRAPPED WITH CLIENTONLY */}
        <ClientOnly>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"
                animate={{
                  y: [0, -40, 0],
                  opacity: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 80],
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
        </ClientOnly>
      </section>
    </main>
  );
}