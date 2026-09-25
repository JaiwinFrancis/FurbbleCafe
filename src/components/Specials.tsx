'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { specials } from '@/data/products';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Specials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative section-spacing section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6B3FA0 0%, #4A2670 60%, #1A1A2E 100%)',
      }}
    >
      {/* Decorative dots */}
      <div className="absolute top-12 right-12 flex gap-2 opacity-20">
        <div className="w-2 h-2 rounded-full bg-furbble-yellow" />
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-furbble-yellow" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={16} className="text-furbble-yellow" />
            <span className="text-label text-furbble-yellow">Limited Time</span>
          </div>
          <h2 className="text-display-lg text-furbble-white">
            SOMETHING
            <br />
            <span className="text-furbble-yellow">SPECIAL?</span>
          </h2>
        </motion.div>

        {/* Specials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specials.map((item, i) => (
            <motion.article
              key={item.id}
              className="relative group overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-furbble-yellow/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto bg-furbble-black/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">⭐</span>
                  </div>
                  {item.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-yellow">{item.badge}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
                  <h3 className="font-display text-xl font-bold text-furbble-white mb-3 uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/40 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-furbble-yellow">
                      {item.price}
                    </span>
                    <ArrowRight size={16} className="text-white/30 group-hover:text-furbble-yellow group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
