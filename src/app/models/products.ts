export interface Review {
  user: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: number | string;
  name: string;
  type: 'Veg' | 'Non-Veg' | 'Veg/Other';
  price: number;
  weight?: string;
  description?: string;
  image?: string; // NEW: image field
  reviews?: Review[];
}
