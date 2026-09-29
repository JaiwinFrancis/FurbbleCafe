'use client';

import { BRAND, FOOTER_NAV, SOCIAL_LINKS } from '@/lib/constants';
import { MessageCircle, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const socialIcons: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon size={16} />,
  whatsapp: <MessageCircle size={16} />,
  'map-pin': <MapPin size={16} />,
};

export default function Footer() {
  return (
    <footer className="w-full bg-furbble-black section-spacing flex justify-center border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 mb-24 md:mb-32">
          {/* Brand */}
          <div className="md:col-span-6 lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-furbble-purple flex items-center justify-center flex-shrink-0">
                <span className="font-display text-base font-bold text-furbble-yellow">FP</span>
              </div>
              <span className="font-display text-2xl font-bold tracking-[0.15em] text-furbble-white uppercase">
                {BRAND.name}
              </span>
            </div>
            <p className="font-display text-sm font-medium tracking-[0.2em] text-white/30 uppercase leading-relaxed max-w-sm">
              {BRAND.tagline}
            </p>
          </div>

          {/* Spacer for desktop */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* Navigation */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-label text-furbble-yellow mb-8">Navigate</h4>
            <nav className="space-y-4">
              {FOOTER_NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block font-body text-base text-white/40 hover:text-furbble-white transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-label text-furbble-yellow mb-8">Connect</h4>
            <div className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-white/40 hover:text-furbble-yellow transition-colors duration-300 group"
                >
                  <span className="group-hover:text-furbble-yellow transition-colors">
                    {socialIcons[link.icon]}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-white/20 font-body">
            © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
          </p>
          <p className="text-sm text-white/20 font-body">
            {BRAND.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
