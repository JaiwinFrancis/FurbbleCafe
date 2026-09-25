export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Your next hangout spot.',
    author: 'Arun K.',
  },
  {
    id: '2',
    quote: 'Good vibes only.',
    author: 'Priya S.',
  },
  {
    id: '3',
    quote: 'One more shake? Always.',
    author: 'Deepak M.',
  },
  {
    id: '4',
    quote: 'See you tomorrow.',
    author: 'Sneha R.',
  },
  {
    id: '5',
    quote: 'Best café in Nagercoil. Period.',
    author: 'Vishnu P.',
  },
  {
    id: '6',
    quote: 'The Mushroom Burger changed my life.',
    author: 'Karthik N.',
  },
  {
    id: '7',
    quote: "Can't stop thinking about the Split Shake.",
    author: 'Meera J.',
  },
  {
    id: '8',
    quote: "Furbble isn't a café, it's a mood.",
    author: 'Rahul V.',
  },
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspect: 'square' | 'portrait' | 'landscape';
  type: 'food' | 'interior' | 'people' | 'branding' | 'reel';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/gallery/interior-1.jpg',
    alt: 'Furbble café interior with purple walls and wooden tables',
    aspect: 'landscape',
    type: 'interior',
  },
  {
    id: 'g2',
    src: '/mushroom-beef-burger.jpg',
    alt: 'Mushroom Beef Burger close-up',
    aspect: 'square',
    type: 'food',
  },
  {
    id: 'g3',
    src: '/images/gallery/people-1.jpg',
    alt: 'Friends hanging out at Furbble',
    aspect: 'portrait',
    type: 'people',
  },
  {
    id: 'g4',
    src: '/images/gallery/branding-1.jpg',
    alt: 'Furbble branded cup and packaging',
    aspect: 'square',
    type: 'branding',
  },
  {
    id: 'g5',
    src: '/mango-haseera-tub.jpg',
    alt: 'Mango Haseera Tub from above',
    aspect: 'square',
    type: 'food',
  },
  {
    id: 'g6',
    src: '/images/gallery/interior-2.jpg',
    alt: 'Furbble wall mural with mascot',
    aspect: 'landscape',
    type: 'interior',
  },
  {
    id: 'g7',
    src: '/split-shake.jpg',
    alt: 'Split Shake with two flavors',
    aspect: 'portrait',
    type: 'food',
  },
  {
    id: 'g8',
    src: '/paro-latte.jpg',
    alt: 'Customer enjoying Paro Latte',
    aspect: 'square',
    type: 'people',
  },
];

export interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export const eventTypes: EventType[] = [
  {
    id: 'birthdays',
    title: 'Birthdays',
    description: 'Make it a Furbble birthday. Cake, vibes, and everything nice.',
    image: '/images/events/birthdays-new.jpg',
    icon: '🎂',
  },
  {
    id: 'love-anniversary',
    title: 'Love Anniversary',
    description: 'Celebrate your special milestones. We handle the food and the romantic vibe.',
    image: '/images/events/anniversary-new.jpg',
    icon: '❤️',
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    description: "Any reason to celebrate is a good reason. We'll make it special.",
    image: '/images/events/celebrations-new.jpg',
    icon: '🎉',
  },
  {
    id: 'hangouts',
    title: 'Hangouts',
    description: 'No occasion needed. Just good food, good people, good time.',
    image: '/images/events/hangouts-new.jpg',
    icon: '✌️',
  },
];

export const instagramPosts = [
  { id: 'ig1', src: '/images/instagram/post-1.jpg', alt: 'Furbble food shot', type: 'image' as const },
  { id: 'ig2', src: '/images/instagram/post-2.jpg', alt: 'Café vibes', type: 'reel' as const },
  { id: 'ig3', src: '/images/instagram/post-3.jpg', alt: 'Burger close-up', type: 'image' as const },
  { id: 'ig4', src: '/images/instagram/post-4.jpg', alt: 'Friends at Furbble', type: 'image' as const },
  { id: 'ig5', src: '/images/instagram/post-5.jpg', alt: 'Shake preparation', type: 'reel' as const },
];
