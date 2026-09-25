export interface Product {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  tagline?: string;
  price: string;
  category: string;
  image: string;
  isSignature?: boolean;
  isNew?: boolean;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
  color: string;
}

export const categories: Category[] = [
  {
    id: 'burgers',
    name: 'Burgers',
    icon: '🍔',
    description: 'Smashed, stacked & irresistible',
    image: '/images/categories/burgers.jpg',
    color: '#F5A623',
  },
  {
    id: 'pasta',
    name: 'Pasta',
    icon: '🍝',
    description: 'Comfort in every bite',
    image: '/images/categories/pasta.jpg',
    color: '#E74C3C',
  },
  {
    id: 'fries',
    name: 'Fries',
    icon: '🍟',
    description: 'Crispy, loaded & addictive',
    image: '/images/categories/fries.jpg',
    color: '#F39C12',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    description: 'Sweet endings, happy vibes',
    image: '/images/categories/desserts.jpg',
    color: '#E91E63',
  },
  {
    id: 'shakes',
    name: 'Shakes',
    icon: '🥤',
    description: 'Blended perfection',
    image: '/images/categories/shakes.jpg',
    color: '#9C27B0',
  },
  {
    id: 'coffee',
    name: 'Coffee',
    icon: '☕',
    description: 'Your daily dose of chill',
    image: '/images/categories/coffee.jpg',
    color: '#795548',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: '🧃',
    description: 'Cool, refreshing & colorful',
    image: '/images/categories/beverages.jpg',
    color: '#00BCD4',
  },
  {
    id: 'specials',
    name: 'Specials',
    icon: '⭐',
    description: 'Limited time only',
    image: '/images/categories/specials.jpg',
    color: '#6B3FA0',
  },
];

export const signatureProducts: Product[] = [
  {
    id: 'mushroom-beef-burger',
    name: 'Mushroom Beef Burger',
    shortName: 'Mushroom\nBeef Burger',
    description: 'Double smashed beef patties with sautéed mushrooms, melted cheese, and our signature sauce.',
    tagline: 'DOUBLE SMASHED.\nMESSY.\nWORTH IT.',
    price: '₹299',
    category: 'burgers',
    image: '/mushroom-beef-burger.jpg',
    isSignature: true,
    badge: 'BESTSELLER',
  },
  {
    id: 'mango-haseera-tub',
    name: 'Mango Haseera Tub',
    shortName: 'Mango\nHaseera Tub',
    description: 'Fresh mango chunks with creamy haseera, layered in our signature tub.',
    tagline: 'FRESH.\nCREAMY.\nADDICTIVE.',
    price: '₹199',
    category: 'desserts',
    image: '/mango-haseera-tub.jpg',
    isSignature: true,
    badge: 'FAN FAVORITE',
  },
  {
    id: 'split-shake',
    name: 'Split Shake',
    shortName: 'Split\nShake',
    description: 'Two flavors, one cup. Pick your combo and watch the magic happen.',
    tagline: 'TWO FLAVORS.\nONE CUP.\nPURE MAGIC.',
    price: '₹179',
    category: 'shakes',
    image: '/split-shake.jpg',
    isSignature: true,
    badge: 'MUST TRY',
  },
  {
    id: 'paro-latte',
    name: 'Paro Latte',
    shortName: 'Paro\nLatte',
    description: 'Our signature latte with a unique twist that keeps you coming back.',
    tagline: 'SMOOTH.\nUNIQUE.\nUNFORGETTABLE.',
    price: '₹149',
    category: 'coffee',
    image: '/paro-latte.jpg',
    isSignature: true,
  },
];

export const menuProducts: Product[] = [
  // Burgers
  {
    id: 'mushroom-beef-burger',
    name: 'Mushroom Beef Burger',
    description: 'Double smashed beef patties with sautéed mushrooms & signature sauce.',
    price: '₹299',
    category: 'burgers',
    image: '/mushroom-beef-burger.jpg',
    isSignature: true,
  },
  {
    id: 'classic-smash-burger',
    name: 'Classic Smash Burger',
    description: 'Single smashed patty with cheese, pickles & our house sauce.',
    price: '₹199',
    category: 'burgers',
    image: '/images/products/classic-smash-burger.jpg',
  },
  {
    id: 'chicken-crunch-burger',
    name: 'Chicken Crunch Burger',
    description: 'Crispy fried chicken with slaw and spicy mayo.',
    price: '₹229',
    category: 'burgers',
    image: '/images/products/chicken-crunch-burger.jpg',
  },
  // Pasta
  {
    id: 'creamy-alfredo',
    name: 'Creamy Alfredo Pasta',
    description: 'Rich and creamy alfredo sauce with perfectly cooked penne.',
    price: '₹249',
    category: 'pasta',
    image: '/images/products/creamy-alfredo.jpg',
  },
  {
    id: 'spicy-arrabiata',
    name: 'Spicy Arrabiata',
    description: 'Fiery tomato sauce with chili flakes and fresh herbs.',
    price: '₹229',
    category: 'pasta',
    image: '/images/products/spicy-arrabiata.jpg',
  },
  // Fries
  {
    id: 'loaded-cheese-fries',
    name: 'Loaded Cheese Fries',
    description: 'Golden fries topped with cheese sauce, jalapeños & bacon bits.',
    price: '₹179',
    category: 'fries',
    image: '/images/products/loaded-cheese-fries.jpg',
  },
  {
    id: 'peri-peri-fries',
    name: 'Peri Peri Fries',
    description: 'Crispy fries with our house peri peri seasoning.',
    price: '₹129',
    category: 'fries',
    image: '/images/products/peri-peri-fries.jpg',
  },
  // Desserts
  {
    id: 'mango-haseera-tub',
    name: 'Mango Haseera Tub',
    description: 'Fresh mango chunks with creamy haseera, layered in our signature tub.',
    price: '₹199',
    category: 'desserts',
    image: '/mango-haseera-tub.jpg',
    isSignature: true,
  },
  {
    id: 'bambooza',
    name: 'Bambooza',
    description: 'Our signature layered dessert with cream, cookie crumble & drizzle.',
    price: '₹169',
    category: 'desserts',
    image: '/images/products/bambooza.jpg',
  },
  // Shakes
  {
    id: 'split-shake',
    name: 'Split Shake',
    description: 'Two flavors, one cup. Pick your combo and watch the magic happen.',
    price: '₹179',
    category: 'shakes',
    image: '/split-shake.jpg',
    isSignature: true,
  },
  {
    id: 'oreo-cookie-shake',
    name: 'Oreo Cookie Shake',
    description: 'Creamy vanilla shake blended with Oreo cookies and whipped cream.',
    price: '₹169',
    category: 'shakes',
    image: '/images/products/oreo-cookie-shake.jpg',
  },
  {
    id: 'strawberry-smoothie',
    name: 'Strawberry Smoothie',
    description: 'Fresh strawberries blended with yogurt and a hint of honey.',
    price: '₹149',
    category: 'shakes',
    image: '/images/products/strawberry-smoothie.jpg',
  },
  // Coffee
  {
    id: 'paro-latte',
    name: 'Paro Latte',
    description: 'Our signature latte with a unique twist that keeps you coming back.',
    price: '₹149',
    category: 'coffee',
    image: '/paro-latte.jpg',
    isSignature: true,
  },
  {
    id: 'taro-latte',
    name: 'Taro Latte',
    description: 'Creamy taro root latte with a beautiful purple hue.',
    price: '₹159',
    category: 'coffee',
    image: '/images/products/taro-latte.jpg',
  },
  {
    id: 'matcha-bubble-tea',
    name: 'Matcha Bubble Tea',
    description: 'Premium matcha with chewy tapioca pearls and oat milk.',
    price: '₹169',
    category: 'coffee',
    image: '/images/products/matcha-bubble-tea.jpg',
  },
  // Beverages
  {
    id: 'fresh-lime-cooler',
    name: 'Fresh Lime Cooler',
    description: 'Refreshing lime with mint and a splash of soda.',
    price: '₹99',
    category: 'beverages',
    image: '/images/products/fresh-lime-cooler.jpg',
  },
  {
    id: 'blue-lagoon',
    name: 'Blue Lagoon',
    description: 'Blue curaçao syrup with lemonade and crushed ice.',
    price: '₹129',
    category: 'beverages',
    image: '/images/products/blue-lagoon.jpg',
  },
];

export const specials: Product[] = [
  {
    id: 'furbble-snack-box',
    name: 'Furbble Snack Box',
    description: 'A curated box of our best-selling snacks. Perfect for sharing.',
    price: '₹399',
    category: 'specials',
    image: '/images/products/furbble-snack-box.jpg',
    isNew: true,
    badge: 'NEW',
  },
  {
    id: 'fathers-day-combo',
    name: "Father's Day Special Combo",
    description: 'Burger + Shake + Fries combo at a special price. Limited time only.',
    price: '₹449',
    category: 'specials',
    image: '/images/products/fathers-day-combo.jpg',
    badge: 'LIMITED',
  },
];
