'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BrandIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="story"
      ref={ref}
      className="relative section-spacing bg-furbble-white overflow-hidden"
    >
      <div className="section-padding max-w-7xl mx-auto">
        
        {/* Massive Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
          
          {/* Left: The Bold Statement */}
          <div className="lg:col-span-7 z-10 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] font-display font-black text-furbble-charcoal uppercase tracking-tighter mb-8">
                Not just
                <br />
                <span className="text-furbble-purple">a café.</span>
                <br />
                It&apos;s a <span className="text-furbble-yellow border-b-8 border-furbble-yellow pb-2">mood.</span>
              </h2>
            </motion.div>

            <motion.div
              className="max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl font-medium text-furbble-charcoal leading-relaxed mb-6">
                Furbble is where food meets feelings. Born in the heart of Nagercoil, we turned a simple idea into your favorite hangout spot.
              </p>
              <p className="text-furbble-muted leading-relaxed">
                Smashed burgers that make a mess. Shakes you can&apos;t stop thinking about. Coffee that hits different. We stripped away the boring and kept only the good vibes.
              </p>
              
              <div className="mt-12 w-24 h-2 bg-furbble-charcoal" />
            </motion.div>
          </div>

          {/* Right: Abstract Organic Image Mask */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              className="relative w-full aspect-square md:aspect-[3/4] lg:-ml-12"
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Organic CSS Clip Path to replace generic boxes */}
              <div 
                className="w-full h-full bg-furbble-purple flex items-center justify-center overflow-hidden"
                style={{
                  clipPath: 'polygon(10% 0, 100% 5%, 95% 100%, 0 90%)'
                }}
              >
                {/* Image Placeholder */}
                <div className="text-center">
                  <span className="font-display text-[8rem] font-black text-furbble-purple-deep leading-none">FP</span>
                  <p className="font-display text-sm font-bold tracking-widest text-white/50 uppercase mt-4">
                    The Vibe
                  </p>
                </div>
              </div>

              {/* Graphic Accent */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-furbble-yellow rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-furbble-charcoal tracking-widest uppercase text-xs rotate-[-15deg]">
                  Est. 2024
                </span>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
