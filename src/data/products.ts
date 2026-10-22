import { Product, Collection } from '../types';

export const products: Product[] = [
  {
    id: 'ns-001',
    name: 'Merino Crew Sweater',
    price: 128,
    category: 'Apparel',
    collection: 'winter-essentials',
    description: 'Crafted from 100% extra-fine merino wool, this crew neck sweater offers unparalleled softness and temperature regulation. A wardrobe foundation for the modern minimalist.',
    details: ['100% Extra-fine Merino Wool', 'Relaxed fit', 'Ribbed cuffs and hem', 'Machine washable on gentle', 'Ethically sourced from New Zealand'],
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc63cb6a06d?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#3D3D3D' },
      { name: 'Ivory', hex: '#FAF8F5' },
      { name: 'Camel', hex: '#C4A77D' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    badge: 'Best Seller',
    inStock: true
  },
  {
    id: 'ns-002',
    name: 'Canvas Weekender Bag',
    price: 195,
    category: 'Accessories',
    collection: 'travel',
    description: 'A versatile carry-all crafted from heavyweight organic cotton canvas with vegetable-tanned leather handles. Designed for weekend getaways and daily commutes alike.',
    details: ['Organic cotton canvas', 'Vegetable-tanned leather handles', 'Interior zip pocket', 'Brass hardware', 'Dimensions: 22" × 12" × 10"'],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80'
    ],
    colors: [
      { name: 'Natural', hex: '#E8E0D4' },
      { name: 'Olive', hex: '#5C6B4F' }
    ],
    badge: 'New',
    inStock: true
  },
  {
    id: 'ns-003',
    name: 'Ceramic Pour-Over Set',
    price: 72,
    category: 'Home',
    collection: 'daily-rituals',
    description: 'Hand-thrown ceramic dripper and carafe set, finished in our signature matte glaze. Elevate your morning coffee ritual with intention and craft.',
    details: ['Hand-thrown stoneware', 'Matte glaze finish', 'Includes dripper + 500ml carafe', 'Dishwasher safe', 'Includes 50 paper filters'],
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=800&q=80',
      'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=800&q=80'
    ],
    colors: [
      { name: 'Bone', hex: '#F5F0E8' },
      { name: 'Slate', hex: '#6B7B8D' }
    ],
    inStock: true
  },
  {
    id: 'ns-004',
    name: 'Relaxed Linen Shirt',
    price: 98,
    category: 'Apparel',
    collection: 'summer-edit',
    description: 'A perfectly relaxed linen shirt in a washed finish. Pre-softened for immediate comfort with a slightly oversized silhouette that drapes beautifully.',
    details: ['100% European flax linen', 'Pre-washed for softness', 'Relaxed, slightly oversized fit', 'Mother-of-pearl buttons', 'Single chest pocket'],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
      'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Sand', hex: '#D4C5A9' },
      { name: 'Sky', hex: '#A8C4D4' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-005',
    name: 'Leather Card Holder',
    price: 45,
    category: 'Accessories',
    collection: 'daily-rituals',
    description: 'Slim card holder in full-grain leather that develops a rich patina over time. Four card slots and a center pocket for folded bills.',
    details: ['Full-grain vegetable-tanned leather', '4 card slots + center pocket', 'Dimensions: 4" × 3"', 'Hand-stitched edges', 'Made in Portugal'],
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
      'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&q=80',
      'https://images.unsplash.com/photo-1624223863014-fb649093e06c?w=800&q=80'
    ],
    colors: [
      { name: 'Cognac', hex: '#8B5E3C' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Tan', hex: '#C4A77D' }
    ],
    inStock: true
  },
  {
    id: 'ns-006',
    name: 'Wool Blend Overcoat',
    price: 345,
    category: 'Apparel',
    collection: 'winter-essentials',
    description: 'A refined overcoat in a premium wool-cashmere blend. Clean lines, concealed placket, and a silhouette that transitions effortlessly from office to evening.',
    details: ['70% Wool, 20% Cashmere, 10% Nylon', 'Fully lined in cupro', 'Concealed button placket', 'Two interior pockets', 'Dry clean only'],
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80'
    ],
    colors: [
      { name: 'Charcoal', hex: '#3D3D3D' },
      { name: 'Camel', hex: '#C4A77D' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'Limited',
    inStock: true
  },
  {
    id: 'ns-007',
    name: 'Stoneware Dinner Set',
    price: 156,
    category: 'Home',
    collection: 'daily-rituals',
    description: 'A 16-piece dinner set in reactive-glazed stoneware. Each piece is unique due to the glaze process, bringing organic beauty to your table.',
    details: ['16-piece set: 4 plates, 4 bowls, 4 side plates, 4 mugs', 'Reactive glaze', 'Stoneware, oven & dishwasher safe', 'Stackable design', 'Each piece is unique'],
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80'
    ],
    colors: [
      { name: 'Cloud', hex: '#E8E4DE' },
      { name: 'Forest', hex: '#4A5D4A' }
    ],
    inStock: true
  },
  {
    id: 'ns-008',
    name: 'Minimalist Watch',
    price: 225,
    category: 'Accessories',
    collection: 'daily-rituals',
    description: 'A clean, understated timepiece with a Swiss quartz movement. The 38mm case sits perfectly on any wrist, while the sapphire crystal ensures lasting clarity.',
    details: ['Swiss quartz movement', 'Sapphire crystal glass', '38mm stainless steel case', 'Italian leather strap', 'Water resistant to 50m'],
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
      'https://images.unsplash.com/photo-1509048191080-d5984d13b415?w=800&q=80'
    ],
    colors: [
      { name: 'Silver/Brown', hex: '#C4A77D' },
      { name: 'Gold/Black', hex: '#1A1A1A' }
    ],
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'ns-009',
    name: 'Organic Cotton Tee',
    price: 48,
    category: 'Apparel',
    collection: 'summer-edit',
    description: 'The perfect everyday tee in heavyweight organic cotton. A slightly boxy cut with a clean crew neck that holds its shape wash after wash.',
    details: ['100% GOTS-certified organic cotton', '220gsm heavyweight', 'Slightly boxy fit', 'Reinforced crew neck', 'Pre-shrunk'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80'
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Sage', hex: '#9CAF88' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },
  {
    id: 'ns-010',
    name: 'Brass Desk Lamp',
    price: 185,
    category: 'Home',
    collection: 'home-office',
    description: 'A sculptural desk lamp in solid brass with an adjustable arm. The warm, directional light creates the perfect atmosphere for focused work.',
    details: ['Solid brass construction', 'Adjustable arm and shade', 'E27 bulb (included)', 'Inline dimmer switch', 'Weighted base for stability'],
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=800&q=80',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80'
    ],
    inStock: true
  },
  {
    id: 'ns-011',
    name: 'Merino Wool Scarf',
    price: 68,
    category: 'Accessories',
    collection: 'winter-essentials',
    description: 'A luxuriously soft scarf in fine merino wool. Generously sized for wrapping, with a clean edge finish that works with everything.',
    details: ['100% Merino wool', '200cm × 70cm', 'Lightweight warmth', 'Finished edges', 'Dry clean recommended'],
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ],
    colors: [
      { name: 'Grey', hex: '#8A8580' },
      { name: 'Navy', hex: '#2C3E50' },
      { name: 'Camel', hex: '#C4A77D' }
    ],
    inStock: true
  },
  {
    id: 'ns-012',
    name: 'Linen Throw Blanket',
    price: 112,
    category: 'Home',
    collection: 'home-office',
    description: 'A stonewashed linen throw that adds texture and warmth to any space. Gets softer with every use and wash.',
    details: ['100% European linen', 'Stonewashed finish', '140cm × 200cm', 'Fringed edges', 'OEKO-TEX certified'],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1616627561950-9f746e330187?w=800&q=80',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80'
    ],
    colors: [
      { name: 'Natural', hex: '#E8E0D4' },
      { name: 'Clay', hex: '#C4836A' }
    ],
    inStock: true
  }
];

export const collections: Collection[] = [
  {
    id: 'daily-rituals',
    name: 'Daily Rituals',
    description: 'Objects that elevate everyday moments',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    productCount: 4
  },
  {
    id: 'winter-essentials',
    name: 'Winter Essentials',
    description: 'Warmth and refinement for the cold season',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80',
    productCount: 3
  },
  {
    id: 'summer-edit',
    name: 'The Summer Edit',
    description: 'Light layers and breathable fabrics',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    productCount: 2
  },
  {
    id: 'home-office',
    name: 'Home & Office',
    description: 'Curated pieces for your space',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=800&q=80',
    productCount: 2
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Built for the journey',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    productCount: 1
  }
];

export const categories = ['All', 'Apparel', 'Accessories', 'Home'];
