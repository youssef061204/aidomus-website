import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Let’s Talk</h2>
        <p className="text-gray-600 mb-8">Ready to automate your real estate business? Let’s chat about how Aidomus can help you grow.</p>
        <a href="mailto:hello@aidomus.ai" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Email Us</a>
      </motion.div>
    </section>
  );
};

export default Contact;
