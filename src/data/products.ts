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
      'https://image.qwenlm.ai/generated-images/399b5433-42b8-4b3f-8e57-80c9c609bab8/_result.png',
      'https://images.unsplash.com/photo-1434389677669-e08b4cead0e2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80'
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
      'https://image.qwenlm.ai/generated-images/79fc14af-6635-4e6c-9f14-8475c16d81bd/_result.png',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80'
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
      'https://image.qwenlm.ai/generated-images/e4cd6f82-ce1f-4448-bef4-9d09ceca7319/_result.png',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&auto=format&fit=crop&q=80'
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
      'https://image.qwenlm.ai/generated-images/c16e61d2-e892-465f-8d62-ddbd73284554/_result.png',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80'
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
      'https://image.qwenlm.ai/generated-images/80911a4c-d563-4b9e-a684-db9405ffb1c9/_result.png',
      'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80'
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
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&auto=format&fit=crop&q=80'
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
      'https://image.qwenlm.ai/generated-images/03f25524-bd22-4dfe-bbce-2f9f7c5ab9c3/_result.png',
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80'
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
      'https://image.qwenlm.ai/generated-images/168ed04e-935a-4136-bd98-d4e8b6cca7e1/_result.png',
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509048191080-d598641064d5?w=800&auto=format&fit=crop&q=80'
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
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80'
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
      'https://image.qwenlm.ai/generated-images/9bf9c6f8-435c-47d3-8cf5-3cfd59f9c68e/_result.png',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop&q=80'
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
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=80'
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
      'https://images.unsplash.com/photo-1616627561950-9f746e330187?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80'
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
    image: 'https://image.qwenlm.ai/generated-images/e4cd6f82-ce1f-4448-bef4-9d09ceca7319/_result.png',
    productCount: 4
  },
  {
    id: 'winter-essentials',
    name: 'Winter Essentials',
    description: 'Warmth and refinement for the cold season',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop&q=80',
    productCount: 3
  },
  {
    id: 'summer-edit',
    name: 'The Summer Edit',
    description: 'Light layers and breathable fabrics',
    image: 'https://image.qwenlm.ai/generated-images/c16e61d2-e892-465f-8d62-ddbd73284554/_result.png',
    productCount: 2
  },
  {
    id: 'home-office',
    name: 'Home & Office',
    description: 'Curated pieces for your space',
    image: 'https://image.qwenlm.ai/generated-images/9bf9c6f8-435c-47d3-8cf5-3cfd59f9c68e/_result.png',
    productCount: 2
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Built for the journey',
    image: 'https://image.qwenlm.ai/generated-images/79fc14af-6635-4e6c-9f14-8475c16d81bd/_result.png',
    productCount: 1
  }
];

export const categories = ['All', 'Apparel', 'Accessories', 'Home'];
