import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Animated background logo */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src={logo}
          alt="Background Logo"
          className="w-96 opacity-10"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl px-4"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Automate Your Real Estate with AI
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-6">
          Boost efficiency, streamline workflows, and grow your business with Aidomus – your AI-powered automation partner.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[var(--highlight-color)]-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-[var(--highlight-color)] transition"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
