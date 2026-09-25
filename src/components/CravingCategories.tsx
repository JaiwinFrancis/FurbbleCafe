'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { categories } from '@/data/products';

export default function CravingCategories() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const active = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: active.color }}
    >
      
      {/* Dynamic Background Image / Visual (Masked) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          className="absolute inset-0 z-0 opacity-20 mix-blend-overlay flex items-center justify-center"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.2, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[40vw]">{active.icon}</span>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full px-[clamp(1.5rem,5vw,6rem)] py-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16">
          
          {/* Left: The Massive Interactive List */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-12">
              What are you craving?
            </h2>
            <div className="flex flex-col" onMouseLeave={() => setActiveCategory(categories[0].id)}>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="group cursor-pointer py-2 md:py-4 border-b border-white/20 last:border-b-0"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className="flex items-center gap-8">
                    <span 
                      className={`font-display font-black text-[clamp(2.5rem,5vw,5rem)] leading-none uppercase tracking-tighter transition-all duration-300 ${
                        activeCategory === category.id 
                          ? 'text-white translate-x-4' 
                          : 'text-white/30 group-hover:text-white/60'
                      }`}
                    >
                      {category.name}
                    </span>
                    {activeCategory === category.id && (
                      <motion.span 
                        layoutId="activeIcon"
                        className="text-4xl hidden md:block"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {category.icon}
                      </motion.span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Focused Description Area */}
          <div className="w-full lg:w-1/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-furbble-charcoal p-8 md:p-12 shadow-2xl"
              >
                <div className="w-12 h-1 bg-white mb-8" />
                <h3 className="font-display text-3xl font-black text-white uppercase mb-4">
                  {active.name}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {active.description}
                </p>
                <a href="#menu" className="inline-flex items-center gap-4 font-display text-sm font-bold uppercase tracking-widest text-white hover:text-white/70 transition-colors">
                  Explore <span className="text-2xl leading-none">→</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
