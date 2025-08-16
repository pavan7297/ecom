import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { CatalogResponse, ProductsService } from './products.service';

const STORAGE_KEY = 'featuredProducts';

@Injectable({ providedIn: 'root' })
export class FeaturedProductsService {
 private storageKey = 'featuredProducts';

  pickAndStoreFeatured(data: any): Product[] {
    const combined = [...data.veg, ...data.nonVeg, ...data.karapodi];
    const randomTwo = this.shuffleArray(combined).slice(0, 10);
    localStorage.setItem(this.storageKey, JSON.stringify(randomTwo));
    return randomTwo;
  }

  getStoredFeatured(): Product[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  private shuffleArray(array: Product[]): Product[] {
    return [...array].sort(() => Math.random() - 0.5);
  }
}
