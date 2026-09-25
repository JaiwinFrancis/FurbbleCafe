'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const ANIM_DURATION = 2.4; // total animation time in seconds

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),    // Show logo
      setTimeout(() => setPhase(2), 900),    // Show brand name
      setTimeout(() => setPhase(3), 1500),   // Show tagline
      setTimeout(() => setIsVisible(false), ANIM_DURATION * 1000), // Fade out
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-furbble-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* FP Logo Mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={phase >= 1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* SVG FP Mark */}
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="36" cy="36" r="36" fill="#6B3FA0" />
                <text
                  x="36"
                  y="44"
                  textAnchor="middle"
                  fontFamily="Sora, sans-serif"
                  fontWeight="800"
                  fontSize="28"
                  fill="#F5A623"
                >
                  FP
                </text>
              </svg>
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(107, 63, 160, 0.4), transparent 70%)',
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              className="font-display text-2xl font-bold tracking-[0.2em] text-furbble-white uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              FURBBLE
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="font-display text-xs font-medium tracking-[0.25em] text-furbble-purple-light uppercase"
              initial={{ opacity: 0 }}
              animate={phase >= 3 ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              YOUR DAILY DOSE OF CHILL
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="w-16 h-[2px] bg-furbble-purple-deep overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={phase >= 1 ? { opacity: 1 } : {}}
            >
              <motion.div
                className="h-full bg-furbble-yellow"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: ANIM_DURATION - 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
