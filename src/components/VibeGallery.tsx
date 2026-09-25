'use client';

import { motion } from 'framer-motion';
import { galleryImages } from '@/data/content';

export default function VibeGallery() {
  // Duplicate images for infinite scroll
  const scrollImages = [...galleryImages, ...galleryImages];

  return (
    <section id="vibe" className="relative bg-furbble-charcoal py-24 md:py-32 overflow-hidden">
      
      {/* Editorial Header */}
      <div className="px-[clamp(1.5rem,5vw,6rem)] mb-16 relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[0.9] font-display font-black text-furbble-white uppercase tracking-tighter">
            YOUR NEXT
            <br />
            <span className="text-furbble-yellow">HANGOUT SPOT.</span>
          </h2>
        </div>
        <div className="max-w-xs text-white/50 text-sm">
          Furbble isn&apos;t just a place to eat. It&apos;s a place to be. Check out the vibe.
        </div>
      </div>

      {/* Infinite Marquee 1 - Going Left */}
      <div className="relative flex overflow-hidden mb-8">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {scrollImages.map((img, i) => (
            <div 
              key={`row1-${i}`} 
              className={`relative flex-shrink-0 bg-furbble-black overflow-hidden group ${
                img.aspect === 'landscape' ? 'w-[60vw] md:w-[40vw] aspect-[16/9]' : 'w-[40vw] md:w-[25vw] aspect-square'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-furbble-purple/20 to-furbble-purple/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">
                <span className="text-6xl opacity-30">
                  {img.type === 'food' ? '🍔' : img.type === 'interior' ? '🛋️' : '📸'}
                </span>
              </div>
              {/* Brutalist overlay label */}
              <div className="absolute bottom-4 left-4 bg-furbble-yellow text-furbble-charcoal px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.type}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Marquee 2 - Going Right */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          {scrollImages.slice().reverse().map((img, i) => (
            <div 
              key={`row2-${i}`} 
              className={`relative flex-shrink-0 bg-furbble-black overflow-hidden group ${
                img.aspect === 'portrait' ? 'w-[45vw] md:w-[30vw] aspect-[3/4]' : 'w-[40vw] md:w-[25vw] aspect-square'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-furbble-yellow/20 to-transparent flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">
                <span className="text-6xl opacity-30">
                  {img.type === 'food' ? '🍟' : img.type === 'people' ? '👥' : '📸'}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fades for Marquee edges */}
      <div className="absolute top-0 bottom-0 left-0 w-[10vw] bg-gradient-to-r from-furbble-charcoal to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-[10vw] bg-gradient-to-l from-furbble-charcoal to-transparent pointer-events-none z-10" />

    </section>
  );
}
