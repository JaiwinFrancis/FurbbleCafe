'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { instagramPosts } from '@/data/content';
import { ArrowUpRight, Play } from 'lucide-react';

export default function InstagramWall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative w-full section-spacing bg-furbble-white overflow-hidden flex justify-center"
    >
      <div className="w-full max-w-7xl section-padding">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <hr className="section-divider" />
              <span className="text-label text-furbble-purple">Social</span>
            </div>
            <h2 className="text-display-lg text-furbble-charcoal">
              FURBBLE
              <br />
              <span className="text-furbble-purple">ON THE &apos;GRAM.</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/furbble.cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group flex-shrink-0"
          >
            @furbble.cafe
            <ArrowUpRight size={14} className="btn-arrow" />
          </a>
        </motion.div>

        {/* Instagram grid — masonry-like */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/furbble.cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden group cursor-pointer ${
                i === 0 ? 'row-span-2 aspect-[3/5] md:aspect-auto' : 'aspect-square'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            >
              {/* Image / Placeholder */}
              {post.src ? (
                <img 
                  src={post.src} 
                  alt={post.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-furbble-purple/15 to-furbble-purple/5 flex items-center justify-center">
                  <div className="text-center">
                    {post.type === 'reel' ? (
                      <Play size={24} className="text-furbble-purple/30 mx-auto" />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-furbble-purple/10 mx-auto flex items-center justify-center">
                        <span className="font-display text-xs font-bold text-furbble-purple/40">FP</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-furbble-purple/0 group-hover:bg-furbble-purple/60 transition-all duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-center">
                  <span className="font-display text-xs font-bold text-white tracking-widest uppercase">
                    View Post
                  </span>
                </div>
              </div>

              {/* Reel indicator */}
              {post.type === 'reel' && (
                <div className="absolute top-3 right-3 z-10">
                  <Play size={14} className="text-white/60 fill-white/60" />
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://www.instagram.com/furbble.cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-medium text-furbble-purple link-underline hover:text-furbble-purple-deep transition-colors"
          >
            FOLLOW THE VIBE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
