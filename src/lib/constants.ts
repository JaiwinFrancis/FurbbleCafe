// Furbble Brand Constants

export const BRAND = {
  name: 'Furbble',
  fullName: 'Furbble Café',
  tagline: 'Your Daily Dose of Chill',
  description: 'Discover Furbble Café — food, shakes, coffee, desserts and good vibes in Nagercoil.',
  instagram: '@furbble.cafe',
  instagramUrl: 'https://www.instagram.com/furbble.cafe/',
  whatsappUrl: 'https://wa.me/919876543210', // placeholder
  googleMapsUrl: 'https://maps.google.com/?q=Furbble+Cafe+Nagercoil', // placeholder
  address: 'Nagercoil, Tamil Nadu, India',
  phone: '+91 98765 43210', // placeholder
  email: 'hello@furbble.cafe', // placeholder
  hours: {
    weekdays: '11:00 AM — 10:00 PM',
    weekends: '10:00 AM — 11:00 PM',
  },
} as const;

export const NAV_ITEMS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Experience', href: '#vibe' },
  { label: 'Visit', href: '#location' },
] as const;

export const FOOTER_NAV = [
  { label: 'Home', href: '#hero' },
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Gallery', href: '#vibe' },
  { label: 'Visit', href: '#location' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/furbble.cafe/', icon: 'instagram' },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210', icon: 'whatsapp' },
  { label: 'Google Maps', href: 'https://maps.google.com/?q=Furbble+Cafe+Nagercoil', icon: 'map-pin' },
] as const;

// Animation timing constants
export const ANIM = {
  fast: 0.2,
  medium: 0.5,
  slow: 0.8,
  xslow: 1.2,
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.83, 0, 0.17, 1] as const,
  spring: { type: 'spring' as const, stiffness: 100, damping: 20 },
  springBouncy: { type: 'spring' as const, stiffness: 200, damping: 15 },
} as const;
