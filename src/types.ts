export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  sizes: string[];
  price?: string;
  imageAlt: string;
  category: 'body' | 'feet' | 'face' | 'first-aid';
  note?: string;
}

export interface Review {
  id: number;
  rating: number;
  text: string;
  author: string;
  location: string;
}

export interface Ingredient {
  id: string;
  name: string;
  title: string;
  description: string;
  worksOn: string[];
  iconName: string;
}
