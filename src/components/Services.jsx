import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const items = [
    { title: 'Lead Generation', desc: 'Automate lead capture, qualification, and follow-up with AI-driven funnels.' },
    { title: 'CRM Integration', desc: 'Sync leads and automate workflows directly into your CRM.' },
    { title: 'Property Analysis', desc: 'AI tools that scan, analyze, and present property data instantly.' },
    { title: 'Email & SMS Campaigns', desc: 'Smart follow-ups that close deals faster without manual work.' },
    { title: 'Appointment Scheduling', desc: 'Let AI schedule, remind, and manage appointments with prospects.' },
    { title: 'Custom Bots & Workflows', desc: 'Tailored automation based on your unique real estate needs.' },
  ];

  return (
    <section id="services" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-12">What We Automate</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 backdrop-blur-md bg-white/5 text-left border border-transparent hover:border-white/20 transition duration-300 shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[var(--highlight-color)]-300 mb-2">{service.title}</h3>
              <p className="text-white text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
