import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { ProgressBar } from '../ui/ProgressBar';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-separator bg-darkCard">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl">Technical & Professional Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl text-center mb-8">Technical Skills</h3>
            {CONTENT.skills.technical.map((skill, idx) => (
              <ProgressBar key={idx} {...skill} />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl text-center mb-8">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-8 justify-items-center">
              {CONTENT.skills.professional.map((skill, idx) => (
                <ProgressBar key={idx} {...skill} type="circular" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
