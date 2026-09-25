'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { NAV_ITEMS, BRAND } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 80);
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? 'bg-furbble-black/90 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-furbble-purple flex items-center justify-center">
              <span className="font-display text-sm font-bold text-furbble-yellow">FP</span>
            </div>
            <span className="font-display text-sm font-bold tracking-[0.15em] text-furbble-white uppercase hidden sm:block">
              {BRAND.name}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-display text-xs font-medium tracking-[0.15em] text-white/60 hover:text-furbble-yellow uppercase transition-colors duration-300 link-underline"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#location"
              className="font-display text-xs font-semibold tracking-[0.1em] text-furbble-charcoal bg-furbble-yellow px-5 py-2.5 uppercase hover:bg-furbble-yellow-warm transition-all duration-300 hover:-translate-y-0.5"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-furbble-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-[99] bg-furbble-black flex flex-col items-center justify-center gap-8 md:hidden ${
          isMobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={false}
        animate={isMobileOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {NAV_ITEMS.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
            className="font-display text-2xl font-bold tracking-[0.1em] text-furbble-white uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            {item.label}
          </motion.a>
        ))}
        <motion.a
          href="#location"
          onClick={() => setIsMobileOpen(false)}
          className="btn btn-accent mt-4"
          initial={{ opacity: 0 }}
          animate={isMobileOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          Visit Us
        </motion.a>
      </motion.div>
    </>
  );
}
