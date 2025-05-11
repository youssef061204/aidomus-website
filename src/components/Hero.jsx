import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 to-blue-100 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl px-4"
      >
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4">AI Automation for Real Estate Professionals</h1>
        <p className="text-lg text-gray-700 mb-6">Boost efficiency, streamline workflows, and grow your business with Aidomus – your AI-powered automation partner.</p>
        <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition">Get Started</a>
      </motion.div>
    </section>
  );
};

export default Hero;
