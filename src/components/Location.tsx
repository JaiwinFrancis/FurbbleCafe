'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BRAND } from '@/lib/constants';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="location"
      ref={ref}
      className="relative w-full section-spacing bg-furbble-charcoal overflow-hidden flex justify-center"
    >
      <div className="w-full max-w-7xl section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <hr className="section-divider" />
              <span className="text-label text-furbble-yellow">Visit</span>
            </motion.div>

            <motion.h2
              className="text-display-lg text-furbble-white pb-12 md:pb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              COME FIND
              <br />
              <span className="text-furbble-yellow">YOUR DOSE OF CHILL.</span>
            </motion.h2>

            {/* Info items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 mb-16 mt-8 md:mt-12">
              {/* Address Block */}
              <motion.div
                className="flex gap-4 py-10 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-furbble-purple/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-furbble-yellow" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display text-sm font-bold text-furbble-white uppercase tracking-wider mb-2 mt-2.5">
                    Address
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed mt-auto">
                    {BRAND.address}
                  </p>
                </div>
              </motion.div>

              {/* Contact Block */}
              <motion.div
                className="flex gap-4 py-10 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-furbble-purple/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-furbble-yellow" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-display text-sm font-bold text-furbble-white uppercase tracking-wider mb-2 mt-2.5">
                    Contact
                  </h4>
                  <div className="text-sm text-white/60 leading-relaxed flex flex-col gap-1 mt-auto">
                    <span>{BRAND.phone}</span>
                    <span>{BRAND.email}</span>
                  </div>
                </div>
              </motion.div>

              {/* Hours Block */}
              <motion.div
                className="flex gap-4 py-10 border-t border-b border-white/10 sm:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-furbble-purple/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-furbble-yellow" />
                </div>
                <div className="flex flex-col w-full">
                  <h4 className="font-display text-sm font-bold text-furbble-white uppercase tracking-wider mb-4 mt-2.5">
                    Hours
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/60 leading-relaxed mt-2">
                    <div>
                      <span className="block text-white/40 mb-1 text-xs uppercase tracking-widest font-bold">Weekdays</span>
                      <span>Mon – Fri: {BRAND.hours.weekdays}</span>
                    </div>
                    <div>
                      <span className="block text-white/40 mb-1 text-xs uppercase tracking-widest font-bold">Weekends</span>
                      <span>Sat – Sun: {BRAND.hours.weekends}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent group"
              >
                <Navigation size={14} />
                Get Directions
              </a>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost group"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right: Map/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative aspect-square bg-furbble-black/50 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Furbble+Cafe+Nagercoil&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70"
              ></iframe>
            </div>

            {/* Corner accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-furbble-yellow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
