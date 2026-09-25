'use client';

import { motion } from 'framer-motion';
import { signatureProducts } from '@/data/products';

export default function SignatureProducts() {
  return (
    <section className="relative bg-furbble-charcoal text-furbble-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">

        {/* Pinned Scroll Layout */}
        <div className="flex flex-col lg:flex-row relative">

          {/* Left: Sticky Header Area */}
          <div className="lg:w-1/3 py-24 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[1.1] font-display font-black uppercase tracking-tighter mb-12">
                THE ONES
                <br />
                <span className="text-furbble-yellow inline-block py-1">YOU&apos;LL COME</span>
                <br />
                <span className="text-furbble-yellow inline-block border-b-[6px] border-furbble-yellow pb-2 mb-4">BACK FOR.</span>
              </h2>
              <p className="text-white/40 text-lg max-w-sm mx-auto">
                These aren&apos;t just menu items. These are Furbble signatures. The heavy hitters.
              </p>
            </motion.div>
          </div>

          {/* Right: Scrolling Massive Images */}
          <div className="lg:w-2/3 lg:pl-16 pb-24 lg:py-24 space-y-32">
            {signatureProducts.map((product, i) => (
              <motion.article
                key={product.id}
                className="relative"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative aspect-[4/5] bg-furbble-black overflow-hidden group">

                  {/* Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out z-0">
                    <img 
                      src={`/${product.id}.jpg`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <span className="text-9xl opacity-80 hidden">
                      {product.category === 'burgers' ? '🍔' :
                        product.category === 'desserts' ? '🥭' :
                          product.category === 'shakes' ? '🥤' : '☕'}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-furbble-charcoal/90 via-transparent to-furbble-charcoal/50 z-10 pointer-events-none" />

                  {/* Overlaid Typography */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      {product.badge && (
                        <span className="font-display text-xs font-bold uppercase tracking-widest bg-furbble-yellow text-furbble-charcoal px-3 py-1 drop-shadow-md">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 text-furbble-white drop-shadow-lg">
                        {product.shortName || product.name}
                      </h3>
                      {product.tagline && (
                        <p className="font-display text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-furbble-yellow leading-relaxed w-2/3 drop-shadow-md">
                          {product.tagline.replace(/\n/g, ' • ')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
