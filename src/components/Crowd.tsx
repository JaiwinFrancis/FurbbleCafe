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
      className="relative w-full bg-furbble-cream section-spacing py-32 border-t border-furbble-charcoal/10 flex justify-center"
    >
      <div className="w-full max-w-7xl section-padding">

        {/* Editorial Header */}
        <motion.div
          className="mb-16 md:mb-24 flex flex-col items-center text-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[0.9] font-display font-black text-furbble-charcoal uppercase tracking-tighter">
            THE
            <br />
            <span className="text-furbble-purple">CROWD.</span>
          </h2>
          <p className="font-display text-sm font-bold tracking-[0.2em] uppercase text-furbble-muted max-w-md">
            Don&apos;t just take our word for it. Here is what the streets are saying.
          </p>
        </motion.div>

        {/* Premium Grid: 3-2-3 layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 w-full">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className={`flex flex-col h-full bg-white border-2 border-furbble-charcoal/10 p-8 md:p-10 hover:border-furbble-purple hover:shadow-[8px_8px_0px_0px_rgba(107,63,160,1)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 group cursor-pointer relative md:col-span-2 ${i === 3 ? 'lg:col-start-2' : ''
                }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <span className="font-display text-6xl text-furbble-yellow leading-none block mb-6 opacity-80 group-hover:scale-110 group-hover:text-furbble-purple transition-all duration-300 transform origin-left">
                &quot;
              </span>
              <p className="font-display text-xl md:text-2xl font-bold leading-tight mb-12 uppercase tracking-tight text-furbble-charcoal group-hover:text-furbble-purple transition-colors duration-300">
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-furbble-charcoal/10 group-hover:border-furbble-purple/20 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-furbble-cream group-hover:bg-furbble-purple group-hover:text-white flex items-center justify-center font-display font-bold text-lg text-furbble-charcoal transition-colors duration-300">
                  {testimonial.author.charAt(0)}
                </div>
                <span className="font-display text-sm font-bold uppercase tracking-widest text-furbble-charcoal/60 group-hover:text-furbble-purple transition-colors duration-300">
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
