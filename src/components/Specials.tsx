'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { specials } from '@/data/products';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function Specials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedItem, setSelectedItem] = useState<any>(null);

  return (
    <section
      ref={ref}
      className="relative section-spacing section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #6B3FA0 0%, #4A2670 60%, #1A1A2E 100%)',
      }}
    >
      {/* Decorative dots */}
      <div className="absolute top-12 right-12 flex gap-2 opacity-20">
        <div className="w-2 h-2 rounded-full bg-furbble-yellow" />
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="w-2 h-2 rounded-full bg-furbble-yellow" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles size={16} className="text-furbble-yellow" />
            <span className="text-label text-furbble-yellow">Limited Time</span>
          </div>
          <h2 className="text-display-lg text-furbble-white">
            SOMETHING
            <br />
            <span className="text-furbble-yellow">SPECIAL?</span>
          </h2>
        </motion.div>

        {/* Specials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specials.map((item, i) => (
            <motion.article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-furbble-yellow/30 cursor-pointer transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto bg-furbble-black/30 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {item.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-yellow">{item.badge}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center items-center text-center md:w-1/2">
                  <h3 className="font-display text-xl font-bold text-furbble-white mb-3 uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-sm text-white/40 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-display text-2xl font-bold text-furbble-yellow">
                      {item.price}
                    </span>
                    <ArrowRight size={16} className="text-white/30 group-hover:text-furbble-yellow group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[#1A1A2E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full text-white/70 hover:text-white transition-colors z-20 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Image Area */}
              <div className="w-full h-64 bg-furbble-black/40 flex items-center justify-center relative border-b border-white/5 overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
                {selectedItem.badge && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 bg-furbble-yellow text-furbble-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                      {selectedItem.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Area with extra padding */}
              <div className="px-10 py-10 flex flex-col gap-6">

                {/* Header Row */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-display text-3xl font-bold text-furbble-white uppercase tracking-wide leading-tight">
                    {selectedItem.name}
                  </h3>
                  <span className="font-display text-3xl font-bold text-furbble-yellow shrink-0">
                    {selectedItem.price}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10" />

                {/* Text Details */}
                <div className="flex flex-col gap-4">
                  <p className="text-lg text-white/90 leading-relaxed font-medium">
                    {selectedItem.description}
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    This is a special limited-time offer available exclusively at Furbble Café. Perfect for treating yourself or sharing with someone special. Ask our staff for allergy information.
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold uppercase tracking-wider text-sm transition-colors duration-300"
                  >
                    Got it
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
