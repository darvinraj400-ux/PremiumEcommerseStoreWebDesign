export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  description: string;
  details: string[];
  images: string[];
  colors?: ColorVariant[];
  sizes?: string[];
  badge?: string;
  inStock: boolean;
}

export interface ColorVariant {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}
