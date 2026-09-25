'use client';

import { motion } from 'framer-motion';

export default function FurbbleWorld() {
  return (
    <section className="relative overflow-hidden bg-furbble-purple py-24 md:py-32">
      
      {/* Massive Scrolling Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-20">
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <span className="font-display font-black text-[12vw] leading-none text-white uppercase px-4">
            YOUR DAILY DOSE OF CHILL • YOUR DAILY DOSE OF CHILL • YOUR DAILY DOSE OF CHILL • 
          </span>
        </motion.div>
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <span className="font-display font-black text-[12vw] leading-none text-furbble-yellow uppercase px-4">
            BURGER SHAKES COFFEE VIBES • BURGER SHAKES COFFEE VIBES • BURGER SHAKES COFFEE VIBES • 
          </span>
        </motion.div>
      </div>

      {/* Center Abstract Brand Element */}
      <div className="relative z-10 section-padding flex justify-center items-center">
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          
          {/* Furbble Splat Shape (SVG) */}
          <motion.svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full text-furbble-purple-deep drop-shadow-2xl"
            fill="currentColor"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.02, 0.98, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M45.7,29.9C60.2,16.5,82.3,13.6,101.4,18.4c19.1,4.7,35.2,17.2,50,30.7c14.8,13.5,28.3,28,31,46 c2.7,18-11.3,39.5-27.1,51.8c-15.8,12.3-33.3,15.5-52.2,18.1c-18.9,2.6-39.2,4.6-56-4.5c-16.8-9.1-30.1-29.3-30.2-48.4 C16.8,93,27,72.2,37.5,53.2C40,48.5,42.8,43.5,45.7,29.9z" />
          </motion.svg>

          {/* Center Logo */}
          <div className="relative z-10 text-center">
            <span className="font-display text-8xl font-black text-furbble-yellow drop-shadow-lg">
              FP
            </span>
            <div className="mt-4 bg-furbble-charcoal text-furbble-yellow px-4 py-2 font-display text-sm font-bold uppercase tracking-widest inline-block transform -rotate-3">
              The Universe
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}
