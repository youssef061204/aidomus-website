import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Let’s Talk</h2>
        <p className="text-shadow-white mb-8">
          Ready to automate your real estate business? Let’s chat about how Aidomus can help you grow.
        </p>

        {/* Formspree Contact Form */}
        <form
          action="https://formspree.io/f/mbloajga"  // Replace with your actual Formspree form ID
          method="POST"
          className="grid gap-4 bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name:"
            className="p-3 rounded bg-white bg-opacity-10 text-black placeholder-black"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email:"
            className="p-3 rounded bg-white bg-opacity-10 text-black placeholder-black"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message:"
            className="p-3 rounded bg-white bg-opacity-10 text-black placeholder-black"
          ></textarea>
          <button
            type="submit"
            className="bg-[var(--highlight-color)] text-a py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
