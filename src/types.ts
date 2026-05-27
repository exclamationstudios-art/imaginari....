export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  colours: { name: string; hex: string }[];
  sizes: string[];
  category: string;
  gender: 'Men' | 'Women' | 'Unisex';
  details: string[];
  fit: string;
  delivery: string;
  returns: string;
  isNew?: boolean;
  isDrop?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  moodImage: string;
  shortLine: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
  date: string;
}

export interface CartItem {
  id: string; // unique cart item identifier (e.g., productId + color + size)
  product: Product;
  selectedColour: string;
  selectedSize: string;
  quantity: number;
}
