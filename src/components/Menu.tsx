'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { menuProducts, categories } from '@/data/products';

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const activeProducts = menuProducts.filter(p => p.category === activeCategory);

  return (
    <section
      id="menu"
      ref={ref}
      className="relative section-spacing section-padding bg-furbble-charcoal text-furbble-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <motion.h2
            className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-display font-black uppercase tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            THE
            <br />
            <span className="text-furbble-yellow">MENU.</span>
          </motion.h2>
          
          {/* Stark Category Navigation */}
          <motion.div 
            className="flex flex-wrap gap-x-8 gap-y-4 max-w-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`font-display text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  activeCategory === c.id ? 'text-furbble-yellow border-b-2 border-furbble-yellow pb-1' : 'text-white/30 hover:text-white'
                }`}
              >
                {c.name}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Typographic Menu List instead of Cards */}
        <div className="border-t-2 border-white/10">
          {activeProducts.map((product, i) => (
            <motion.article
              key={product.id}
              className="group relative border-b border-white/10 py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="flex-1 md:pr-12">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-display text-xl md:text-3xl font-bold uppercase tracking-tight group-hover:text-furbble-yellow transition-colors duration-300">
                    {product.name}
                  </h3>
                  {product.isSignature && (
                    <span className="font-display text-[10px] bg-furbble-purple text-white px-2 py-1 uppercase tracking-widest rounded-sm">
                      Signature
                    </span>
                  )}
                </div>
                <p className="text-white/40 max-w-xl text-sm md:text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="flex-shrink-0 flex items-center justify-between md:justify-end gap-6 md:w-48">
                <span className="font-display text-2xl font-bold text-furbble-white group-hover:text-furbble-yellow transition-colors">
                  {product.price}
                </span>
                
                {/* Visual Indicator instead of always-visible image */}
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-furbble-yellow group-hover:border-furbble-yellow transition-all duration-300">
                  <span className="text-lg opacity-50 group-hover:opacity-100 group-hover:text-furbble-charcoal transition-all">
                    {categories.find(c => c.id === product.category)?.icon || '✨'}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
