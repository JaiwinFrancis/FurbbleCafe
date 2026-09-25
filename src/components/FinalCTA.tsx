'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-furbble-purple"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/10" />

      {/* Subtle brand mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
        <span className="font-display text-[20rem] font-black text-white leading-none">FP</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding">
        <motion.h2
          className="text-display-xl text-furbble-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          HUNGRY?
        </motion.h2>

        <motion.p
          className="text-display-md text-white/40 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          YOU KNOW
          <br />
          <span className="text-furbble-yellow">WHERE TO GO.</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#menu" className="btn btn-accent group">
            See the Menu
            <ArrowRight size={16} className="btn-arrow" />
          </a>
          <a href="#location" className="btn btn-ghost group">
            <MapPin size={14} />
            Find Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
