import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../../constants/content';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(CONTENT.projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? CONTENT.projects 
    : CONTENT.projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-separator bg-darkBg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">Project Portfolio</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-darkCard text-gray-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-darkCard aspect-video cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.subTitle}</p>
                  <a href={project.link} className="px-4 py-2 bg-white text-primary rounded-full text-sm font-bold">View Project</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
