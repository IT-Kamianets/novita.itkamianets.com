export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features?: string[];
  purchaseUrl?: string;
}

export const CATEGORIES = [
  'PRODUCTS.CATEGORIES.COTTON',
  'PRODUCTS.CATEGORIES.INTIMATE',
  'PRODUCTS.CATEGORIES.WIPES',
  'PRODUCTS.CATEGORIES.MAKEUP'
];
