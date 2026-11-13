import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '../../constants/content';
import { TemplateProduct, SupportedStack } from '../../types';
import { 
  Sparkles, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Server, 
  Layers, 
  Code2, 
  ArrowRight,
  Filter,
  SlidersHorizontal,
  X
} from 'lucide-react';

const STACK_BADGE_STYLES: Record<SupportedStack, string> = {
  'Laravel': 'bg-red-500/10 text-red-400 border-red-500/30',
  'WordPress': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Next.js': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

export const Templates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStack, setSelectedStack] = useState<string>('All');

  const intro = (CONTENT as any).templatesIntro;
  const allTemplates: TemplateProduct[] = (CONTENT as any).templates || [];

  const handleSelectTemplateForBuild = (templateTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const textarea = contactSection.querySelector('textarea') as HTMLTextAreaElement | null;
      if (textarea) {
        textarea.value = `Hi Tuan, I am interested in building a full-stack website using the "${templateTitle}" template (with Laravel / WordPress / Next.js). Here are my project requirements: `;
        textarea.focus();
      }
    }
  };

  // Get distinct categories
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(allTemplates.map(t => t.category)))];
  }, [allTemplates]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allTemplates.length };
    allTemplates.forEach(t => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, [allTemplates]);

  // Filter templates
  const filteredTemplates = useMemo(() => {
    return allTemplates.filter(template => {
      const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
      const matchesStack = selectedStack === 'All' || template.supportedStacks.includes(selectedStack as SupportedStack);
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = !query || 
        template.title.toLowerCase().includes(query) ||
        template.tagline.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.category.toLowerCase().includes(query) ||
        template.tags.some(tag => tag.toLowerCase().includes(query)) ||
        template.supportedStacks.some(stack => stack.toLowerCase().includes(query));

      return matchesCategory && matchesStack && matchesSearch;
    });
  }, [allTemplates, selectedCategory, selectedStack, searchQuery]);

  return (
    <section id="templates" className="section-separator bg-darkBg border-t border-gray-800/80 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {intro?.badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold mb-4 tracking-wide uppercase">
              <Sparkles size={14} />
              <span>{intro.badge}</span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{intro?.title || "Website Templates & Full-Stack Solutions"}</h2>
          {intro?.subtitle && (
            <p className="text-lg md:text-xl text-primary font-medium mb-4">{intro.subtitle}</p>
          )}
          {intro?.description && (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              {intro.description}
            </p>
          )}
        </div>

        {/* Full-Stack Conversion Highlight Banner */}
        {intro?.fullStackNotice && (
          <div className="max-w-6xl mx-auto mb-14 rounded-2xl bg-gradient-to-br from-darkCard via-darkCard to-gray-900 border border-primary/30 p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-gray-800 pb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
                  Full-Stack Development Capability
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {intro.fullStackNotice.headline}
                </h3>
                <p className="text-gray-400 text-sm max-w-2xl">
                  {intro.fullStackNotice.subheadline}
                </p>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-darkBg font-bold text-sm rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 whitespace-nowrap self-start lg:self-center"
              >
                <span>Request Custom Build</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Supported Stacks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {intro.fullStackNotice.stacks.map((stack: any, idx: number) => {
                const IconComponent = idx === 0 ? Server : idx === 1 ? Code2 : Layers;
                return (
                  <div 
                    key={stack.name} 
                    className="p-5 rounded-xl bg-darkBg/70 border border-gray-800 hover:border-primary/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                          <IconComponent size={20} />
                        </div>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">
                          {stack.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-1.5">{stack.name}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed mb-4">{stack.desc}</p>
                    </div>

                    <ul className="space-y-1.5 pt-3 border-t border-gray-800/80 text-xs text-gray-300">
                      {stack.features?.map((feat: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-primary flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-primary text-darkBg font-bold shadow-lg shadow-primary/25'
                      : 'bg-darkCard text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat ? 'bg-darkBg/20 text-darkBg' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input & Tech Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search templates or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-darkCard border border-gray-800 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-colors"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Stack filter dropdown */}
              <div className="relative">
                <select
                  value={selectedStack}
                  onChange={(e) => setSelectedStack(e.target.value)}
                  className="bg-darkCard border border-gray-800 text-gray-300 text-xs md:text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-primary/60 cursor-pointer"
                >
                  <option value="All">All Stacks</option>
                  <option value="Laravel">Laravel Ready</option>
                  <option value="WordPress">WordPress Ready</option>
                  <option value="Next.js">Next.js Ready</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between text-xs text-gray-400 px-1">
          <span>Showing <strong className="text-white">{filteredTemplates.length}</strong> of {allTemplates.length} templates</span>
          {(selectedCategory !== 'All' || selectedStack !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStack('All');
                setSearchQuery('');
              }}
              className="text-primary hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Templates Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredTemplates.map((template) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={template.id}
                className="group flex flex-col rounded-2xl bg-darkCard border border-gray-800/90 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Browser Mockup Header */}
                <div className="bg-gray-900/90 px-4 py-2 border-b border-gray-800 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
                  </div>
                  <span className="truncate max-w-[180px] text-gray-400">
                    {template.demoUrl.replace('https://', '')}
                  </span>
                  <div className="w-3" />
                </div>

                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
                  <img
                    src={template.image}
                    alt={template.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Category Pill floating */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-semibold bg-darkBg/85 text-primary border border-primary/30 rounded-full backdrop-blur-md">
                      {template.category}
                    </span>
                  </div>

                  {/* Hover Overlay with direct Preview button */}
                  <div className="absolute inset-0 bg-darkBg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 backdrop-blur-sm">
                    <a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-darkBg font-bold text-xs shadow-lg hover:bg-primary/90 transition-all transform translate-y-2 group-hover:translate-y-0"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-primary transition-colors">
                      {template.title}
                    </h3>
                    <p className="text-xs text-primary/90 font-medium mb-2.5">
                      {template.tagline}
                    </p>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {template.description}
                    </p>

                    {/* Features list */}
                    {template.features && template.features.length > 0 && (
                      <div className="mb-4 space-y-1">
                        {template.features.slice(0, 2).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Stacks & Links */}
                  <div className="pt-3 border-t border-gray-800/80">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                        Integrations:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {template.supportedStacks.map(stack => (
                          <span
                            key={stack}
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${STACK_BADGE_STYLES[stack]}`}
                          >
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold transition-colors"
                      >
                        <span>Live Preview</span>
                        <ExternalLink size={12} />
                      </a>
                      <button
                        type="button"
                        onClick={() => handleSelectTemplateForBuild(template.title)}
                        className="inline-flex items-center justify-center py-2 px-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-xs font-semibold transition-colors cursor-pointer"
                        title="Contact to develop with this template"
                      >
                        Build With This
                      </button>
                    </div>

                    {template.vercelProjectUrl && (
                      <div className="mt-2 text-right">
                        <a
                          href={template.vercelProjectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-gray-500 hover:text-gray-300 underline"
                        >
                          <span>Vercel Project Dashboard</span>
                          <ExternalLink size={9} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16 bg-darkCard rounded-2xl border border-gray-800 max-w-xl mx-auto">
            <Filter size={36} className="text-gray-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white mb-1">No templates found</h4>
            <p className="text-xs text-gray-400 mb-4">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedStack('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-primary text-darkBg rounded-lg text-xs font-bold hover:bg-primary/90"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
