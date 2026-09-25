'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { eventTypes } from '@/data/content';
import { ArrowRight } from 'lucide-react';

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative w-full section-spacing bg-furbble-cream overflow-hidden flex justify-center"
    >
      <div className="w-full max-w-7xl section-padding">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <hr className="section-divider" />
            <span className="text-label text-furbble-purple">Events</span>
          </div>
          <h2 className="text-display-lg text-furbble-charcoal">
            MAKE IT
            <br />
            <span className="text-furbble-purple">A FURBBLE DAY.</span>
          </h2>
        </motion.div>

        {/* Event cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventTypes.map((event, i) => (
            <motion.div
              key={event.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-2xl bg-furbble-charcoal shadow-md">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-furbble-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Info */}
              <h3 className="font-display text-base font-bold text-furbble-charcoal uppercase tracking-wide mb-2 group-hover:text-furbble-purple transition-colors">
                {event.title}
              </h3>
              <p className="text-sm text-furbble-muted leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="#location" className="btn btn-primary group">
            Plan Your Event
            <ArrowRight size={16} className="btn-arrow" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
