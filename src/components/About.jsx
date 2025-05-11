import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Aidomus?</h2>
        <p className="text-gray-700 text-lg">
          We're not just an automation agency — we're your partner in modernizing real estate. Our AI-first approach empowers brokers, agents, and investors to scale smarter, close faster, and save time every day.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
