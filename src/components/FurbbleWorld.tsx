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
        <motion.div 
          className="relative w-full max-w-lg flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* New Image Logo */}
          <img 
            src="/new-logo.png" 
            alt="Furbble Logo" 
            className="w-full h-auto drop-shadow-2xl" 
          />
        </motion.div>
      </div>

    </section>
  );
}
