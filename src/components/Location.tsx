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
      className="relative section-spacing section-padding bg-furbble-charcoal overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
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
              className="text-display-lg text-furbble-white mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              COME FIND
              <br />
              <span className="text-furbble-yellow">YOUR DOSE OF CHILL.</span>
            </motion.h2>

            {/* Info items */}
            <div className="space-y-6 mb-10">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="w-10 h-10 flex-shrink-0 bg-furbble-purple/20 flex items-center justify-center">
                  <MapPin size={16} className="text-furbble-yellow" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-furbble-white mb-1 uppercase tracking-wide">
                    Address
                  </h4>
                  <p className="text-sm text-white/50">{BRAND.address}</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="w-10 h-10 flex-shrink-0 bg-furbble-purple/20 flex items-center justify-center">
                  <Clock size={16} className="text-furbble-yellow" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-furbble-white mb-1 uppercase tracking-wide">
                    Hours
                  </h4>
                  <p className="text-sm text-white/50">
                    Mon – Fri: {BRAND.hours.weekdays}
                    <br />
                    Sat – Sun: {BRAND.hours.weekends}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="w-10 h-10 flex-shrink-0 bg-furbble-purple/20 flex items-center justify-center">
                  <Phone size={16} className="text-furbble-yellow" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-furbble-white mb-1 uppercase tracking-wide">
                    Contact
                  </h4>
                  <p className="text-sm text-white/50">{BRAND.phone}</p>
                  <p className="text-sm text-white/50">{BRAND.email}</p>
                </div>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
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
              {/* Map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={40} className="text-furbble-purple/40 mx-auto mb-4" />
                  <p className="font-display text-sm font-bold text-white/30 uppercase tracking-wider">
                    Furbble Café
                  </p>
                  <p className="text-xs text-white/20 mt-1">{BRAND.address}</p>
                </div>
              </div>

              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Pulsing dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-4 h-4 rounded-full bg-furbble-yellow"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(245, 166, 35, 0.4)',
                      '0 0 0 20px rgba(245, 166, 35, 0)',
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-furbble-yellow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
