# NOVA SUPPLY — Premium E-Commerce Store

A sophisticated, mobile-first e-commerce website built with React, TypeScript, and Tailwind CSS. Features a refined editorial design with warm ivory backgrounds, premium product photography, and smooth animations.

![NOVA SUPPLY](https://image.qwenlm.ai/generated-images/071c036a-3760-46e4-bd35-9dbfafacf4ff/_result.png)

## ✨ Features

### Core Functionality
- **Product Catalog** — Browse 12 premium lifestyle products across multiple categories
- **Product Detail Pages** — Swipeable image galleries, variant selection (color/size), quantity controls
- **Shopping Cart** — Full cart management with add/remove/update quantities, persistent storage
- **Wishlist** — Save favorite products with persistent storage
- **Search & Filters** — Real-time search, category filters, collection filters, and sorting options
- **Responsive Design** — Mobile-first approach with bottom navigation and touch-optimized interactions

### Design & UX
- **Editorial Aesthetic** — Sophisticated retail design with warm ivory backgrounds and restrained orange accents
- **Smooth Animations** — Framer Motion-powered transitions, scroll reveals, and micro-interactions
- **Touch Gestures** — Swipeable product galleries, drag interactions, and mobile-optimized controls
- **Accessibility** — Keyboard navigation, focus indicators, reduced motion support, semantic HTML
- **Performance** — Lazy loading, optimized images, efficient animations using transform/opacity

## 🛠️ Tech Stack

- **React 18** — UI library with hooks and functional components
- **TypeScript** — Type-safe development
- **Tailwind CSS v4** — Utility-first CSS framework with custom theme
- **Framer Motion** — Production-ready animation library
- **React Router v6** — Client-side routing
- **Lucide React** — Beautiful icon library
- **Vite** — Fast build tool and dev server

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd nova-supply

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx                    # Main app component with routing
├── main.tsx                   # Application entry point
├── index.css                  # Global styles and Tailwind config
├── components/
│   ├── Layout.tsx             # Main layout with header, footer, mobile menu
│   ├── HomePage.tsx           # Landing page with hero and collections
│   ├── ProductList.tsx        # Product catalog with filters and search
│   ├── ProductDetail.tsx      # Individual product page with gallery
│   ├── CartPage.tsx           # Full shopping cart page
│   ├── CartDrawer.tsx         # Slide-out cart drawer
│   ├── WishlistPage.tsx       # Saved items page
│   ├── MobileBottomNav.tsx    # Mobile navigation bar
│   └── FallbackImage.tsx      # Image component with error handling
├── context/
│   ├── CartContext.tsx        # Shopping cart state management
│   └── WishlistContext.tsx    # Wishlist state management
├── data/
│   └── products.ts            # Product data and collections
└── types/
    └── index.ts               # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Ivory** (`#FAF8F5`) — Primary background
- **Charcoal** (`#1A1A1A`) — Primary text
- **Warm Gray** (`#8A8580`) — Secondary text
- **Accent Orange** (`#D4622B`) — Interactive elements
- **Divider** (`#E5E0DA`) — Borders and separators

### Typography
- **Inter** — Sans-serif for UI elements
- **Playfair Display** — Serif for headings and editorial moments

### Spacing
- Generous whitespace with 4-8px base units
- Responsive padding: 16px (mobile) → 24px (tablet) → 32px (desktop)

## 🚀 Key Features

### Product Listing
- Grid layout with 2 columns (mobile) to 4 columns (desktop)
- Quick add to cart on hover (desktop)
- Wishlist toggle with heart icon
- Color swatches preview
- Badge system (Best Seller, New, Limited, Popular)

### Product Detail
- Swipeable image gallery with drag gestures
- Image counter indicator
- Color and size variant selection
- Quantity controls
- Expandable product details accordion
- Related products section

### Shopping Cart
- Slide-out drawer for quick access
- Full cart page for detailed management
- Quantity updates with +/- controls
- Item removal with animation
- Subtotal calculation
- Shipping threshold indicator

### Mobile Experience
- Bottom navigation bar with active state indicators
- Touch-optimized controls (44px minimum targets)
- Swipeable product galleries
- Collapsible filters
- Safe area support for notched devices

## 🔧 Configuration

### Tailwind Theme
Custom theme defined in `src/index.css`:
```css
@theme {
  --color-ivory: #FAF8F5;
  --color-charcoal: #1A1A1A;
  --color-accent: #D4622B;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
}
```

### Environment
No environment variables required. All data is static and images are hosted externally.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Optimizations

- Lazy loading for route-based code splitting
- Image lazy loading with `loading="lazy"`
- Fallback images for error handling
- Efficient animations using `transform` and `opacity`
- Reduced motion support via `prefers-reduced-motion`
- LocalStorage persistence for cart and wishlist

## 📝 Product Data

Products are defined in `src/data/products.ts` with the following structure:
```typescript
{
  id: string;
  name: string;
  price: number;
  category: 'Apparel' | 'Accessories' | 'Home';
  collection: string;
  description: string;
  details: string[];
  images: string[];
  colors?: ColorVariant[];
  sizes?: string[];
  badge?: string;
  inStock: boolean;
}
```

## 🖼️ Image Sources

- **Generated Images** — Custom AI-generated product photography
- **Unsplash** — Fallback and supplementary images
- **FallbackImage Component** — Graceful error handling for broken images

## 📄 License

This project is a demonstration e-commerce website created for educational purposes.

## 🤝 Contributing

This is a demonstration project. For production use, consider:
- Adding backend API integration
- Implementing user authentication
- Adding payment processing
- Implementing inventory management
- Adding order tracking
- Setting up analytics

## 📞 Support

For questions or issues, please open an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
