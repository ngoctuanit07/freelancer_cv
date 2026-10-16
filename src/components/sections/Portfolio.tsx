import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { Sparkles, ExternalLink } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(CONTENT.projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? CONTENT.projects 
    : CONTENT.projects.filter(p => p.category === filter);

  const intro = (CONTENT as any).portfolioIntro;

  return (
    <section id="portfolio" className="section-separator bg-darkBg">
      <div className="container mx-auto px-4">
        {/* Header & Value Proposition */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {intro?.badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
              <Sparkles size={14} />
              <span>{intro.badge}</span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{intro?.title || "Web Development Portfolio"}</h2>
          {intro?.subtitle && (
            <p className="text-lg md:text-xl text-primary font-medium mb-4">{intro.subtitle}</p>
          )}
          {intro?.description && (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8">
              {intro.description}
            </p>
          )}

          {/* Conversion Service Cards */}
          {intro?.conversionServices && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mt-6">
              {intro.conversionServices.map((service: any, sIdx: number) => (
                <div 
                  key={sIdx} 
                  className="p-4 rounded-xl bg-darkCard/80 border border-gray-800 hover:border-primary/50 transition-all hover:-translate-y-0.5"
                >
                  <div className="text-[11px] uppercase tracking-wider text-primary font-bold mb-1">
                    {service.tag}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5">{service.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                  : 'bg-darkCard text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-darkCard aspect-video border border-gray-800 hover:border-primary/50 transition-all"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                
                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-darkBg/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left backdrop-blur-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-0.5 text-[11px] font-semibold bg-primary/20 text-primary border border-primary/30 rounded">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{project.subTitle}</p>
                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.tags?.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-gray-800/80 text-gray-400 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      <span>Preview Demo</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
