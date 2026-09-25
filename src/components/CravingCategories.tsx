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
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full flex items-start lg:items-center justify-center lg:justify-end pt-12 lg:pt-0 lg:pr-12">
            <img 
              src={active.id === 'burgers' ? "/burger-category.png" : `/${active.id}-category.png`}
              alt={active.name}
              className="w-[90vw] h-[50vh] lg:w-[50vw] lg:h-[80vh] object-contain drop-shadow-2xl translate-y-[-5%] lg:translate-y-[-10%]" 
            />
          </div>
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
                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
