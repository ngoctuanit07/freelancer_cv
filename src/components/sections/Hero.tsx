import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import heroImage from '../../../assets/images/hero.png';
import homeBgImage from '../../../assets/images/home-bg-img.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative bg-cover bg-center" style={{ backgroundImage: `url(${homeBgImage})` }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        <div className="flex-1 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-primary text-white px-6 py-2 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl font-bold mb-6"
          >
            Hello I'm
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl mb-4"
          >
            {CONTENT.profile.name}
          </motion.h1>
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-primary mb-6"
          >
            {CONTENT.profile.role}
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8"
          >
            I build, maintain, and improve custom websites and web applications for businesses using Laravel, WordPress, Node.js, and Python. I specialize in website maintenance, new builds, and feature development for startups and growing companies.
          </motion.p>

          <div className="space-y-4 mb-10 text-lg">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-primary">✉</span> {CONTENT.profile.email}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-primary">📞</span> {CONTENT.profile.phone}
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-primary">📍</span> {CONTENT.profile.address}
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4">
            {CONTENT.profile.socials.map((social, idx) => (
              <motion.a 
                key={idx}
                href={social.url}
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 md:w-96 md:h-96 p-4 border-8 border-gray-800 rounded-full overflow-hidden shadow-2xl"
          >
            <img src={heroImage} alt="Tuan Nguyen freelance Laravel and WordPress developer profile" className="w-full h-full object-cover rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
