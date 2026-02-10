export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  features?: string[];
}

export const CATEGORIES = [
  'Ватна продукція',
  'Інтимна гігієна',
  'Вологі серветки',
  'Зняття макіяжу'
];
