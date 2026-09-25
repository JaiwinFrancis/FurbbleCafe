'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FurbbleEffect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] bg-furbble-white flex items-center justify-center overflow-hidden py-32"
    >
      <div className="max-w-7xl mx-auto px-[clamp(1.5rem,5vw,6rem)] w-full relative z-10">
        
        {/* Abstract typography background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="font-display font-black text-[30vw] leading-none">EFFECT</span>
        </div>

        <div className="flex flex-col items-center text-center">
          
          <motion.div
            className="w-full max-w-5xl mx-auto flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-black text-[clamp(2.5rem,7vw,7rem)] leading-[1.1] text-furbble-charcoal uppercase tracking-tighter mb-16 text-left md:text-center flex flex-col md:block gap-2">
              <span className="block">
                You come in <span className="text-transparent text-stroke-purple relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[8%] after:h-[8%] after:bg-furbble-purple after:-z-10">hungry.</span>
              </span>
              <span className="block">
                You leave <span className="text-furbble-yellow drop-shadow-sm">happy.</span>
              </span>
              <span className="block">
                You come back <span className="text-furbble-purple">tomorrow.</span>
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="w-16 h-[2px] bg-furbble-charcoal" />
            <h3 className="font-display text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-furbble-charcoal">
              That&apos;s the Furbble Effect
            </h3>
            <div className="w-16 h-[2px] bg-furbble-charcoal" />
          </motion.div>

        </div>
      </div>
      
      {/* CSS Utility for text stroke since standard tailwind doesn't have it */}
      <style dangerouslySetInnerHTML={{__html: `
        .text-stroke-purple {
          -webkit-text-stroke: 2px var(--color-furbble-purple);
          color: transparent;
        }
      `}} />
    </section>
  );
}
