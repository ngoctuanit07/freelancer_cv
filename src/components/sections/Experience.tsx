import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../../constants/content';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-separator bg-darkBg relative">
       <div className="absolute inset-0 bg-black/40 z-0" style={{ backgroundImage: `url('/assets/images/home-bg-img.jpg')`, backgroundSize: 'cover' }} />
       <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-3xl mb-8 text-center md:text-left">Education</h3>
              {CONTENT.experience.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="p-6 bg-darkCard rounded-xl shadow-lg border-l-4 border-primary"
                >
                  <h4 className="text-xl mb-2">{edu.title}</h4>
                  <div className="text-primary font-bold mb-2">{edu.period}</div>
                  <p>{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Work */}
            <div className="space-y-8">
              <h3 className="text-3xl mb-8 text-center md:text-left">Work Experience</h3>
              {CONTENT.experience.work.map((work, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="p-6 bg-darkCard rounded-xl shadow-lg border-l-4 border-primary"
                >
                  <h4 className="text-xl mb-2">{work.title}</h4>
                  <div className="text-primary font-bold mb-2">{work.period}</div>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {work.responsibilities?.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
       </div>
    </section>
  );
};
