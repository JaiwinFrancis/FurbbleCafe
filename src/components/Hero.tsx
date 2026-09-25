'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-furbble-cream"
    >
      {/* 
        CRITIQUE: Removed the generic AI-style glowing blobs that follow the cursor.
        Replaced with a stark, premium, typography-led editorial composition.
      */}

      {/* Top Navigation padding area */}
      <div className="h-24 md:h-32"></div>

      <div className="relative z-10 section-padding w-full flex-grow flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Main Statement */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
            >
              <h1 className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-display font-black text-furbble-charcoal uppercase tracking-tighter">
                Your Daily
                <br />
                <span className="text-furbble-purple">Dose of</span>
                <br />
                <span className="flex items-center gap-4 lg:gap-8">
                  Chill.
                  <motion.div
                    className="h-[clamp(3rem,8vw,6rem)] w-[clamp(10rem,25vw,20rem)] bg-furbble-yellow rounded-[4rem] flex items-center justify-center overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 3 }}
                    style={{ originX: 0 }}
                  >
                    <motion.span
                      className="font-display font-black text-xs sm:text-sm md:text-lg lg:text-xl tracking-widest uppercase text-furbble-purple whitespace-nowrap px-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 3.8, duration: 0.5 }}
                    >
                      Let&apos;s Furbble It
                    </motion.span>
                  </motion.div>
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Context / Secondary Info */}
          <div className="lg:col-span-4 flex flex-col justify-end h-full pt-12 lg:pt-0">
            <motion.div
              className="lg:pl-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2.8 }}
            >
              <p className="font-display text-sm font-bold tracking-[0.2em] text-furbble-charcoal uppercase mb-6">
                Nagercoil, TN
              </p>
              <p className="text-lg text-furbble-muted leading-relaxed max-w-sm">
                We didn&apos;t just build a café. We built a mood. Burgers, shakes, coffee, and unapologetic good vibes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Massive Background Typography */}
      <motion.div
        className="absolute -bottom-8 lg:-bottom-16 left-0 right-0 pointer-events-none overflow-hidden flex justify-center"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
      >
        <span className="font-display font-black text-[clamp(8rem,25vw,25rem)] leading-none text-furbble-charcoal/[0.03] whitespace-nowrap select-none">
          FURBBLE
        </span>
      </motion.div>

    </section>
  );
}
