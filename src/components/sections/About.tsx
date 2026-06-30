import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { Button } from '../ui/Button';
import { Download } from 'lucide-react';
import aboutImage from '../../../assets/images/ab-img.png';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-separator bg-darkBg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="relative p-4 bg-gray-800 rounded-2xl shadow-xl">
              <img src={aboutImage} alt="Freelance web development services for Laravel WordPress Node.js and Python" className="rounded-xl w-full" />
            </div>
          </motion.div>

          <div className="flex-1 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl"
            >
              About Tuan Nguyen | Freelance Web Developer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {CONTENT.profile.summary}
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {CONTENT.profile.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 border border-primary text-primary rounded-md text-sm hover:bg-primary hover:text-white transition-colors">
                  {tag}
                </span>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <a href="/cv_tuannguyen.pdf" download>
                <Button className="flex items-center gap-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
