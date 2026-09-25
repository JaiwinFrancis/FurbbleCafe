'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { testimonials } from '@/data/content';

export default function Crowd() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative bg-furbble-cream section-spacing py-32 border-t border-furbble-charcoal/10"
    >
      <div className="max-w-7xl mx-auto px-[clamp(1.5rem,5vw,6rem)]">
        
        {/* Editorial Header */}
        <motion.div
          className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[0.9] font-display font-black text-furbble-charcoal uppercase tracking-tighter">
            THE
            <br />
            <span className="text-furbble-purple">CROWD.</span>
          </h2>
          <p className="font-display text-sm font-bold tracking-[0.2em] uppercase text-furbble-muted max-w-xs text-right">
            Don&apos;t just take our word for it. Here is what the streets are saying.
          </p>
        </motion.div>

        {/* Brutalist Masonry/Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="break-inside-avoid border border-furbble-charcoal/20 p-8 md:p-10 hover:bg-furbble-charcoal hover:text-white transition-colors duration-500 group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <span className="font-display text-6xl text-furbble-yellow leading-none block mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                &quot;
              </span>
              <p className="font-display text-xl md:text-2xl font-bold leading-tight mb-12 uppercase tracking-tight">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-furbble-charcoal/5 group-hover:bg-white/10 flex items-center justify-center font-display font-bold text-sm transition-colors">
                  {testimonial.author.charAt(0)}
                </div>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-furbble-muted group-hover:text-white/50 transition-colors">
                  {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
