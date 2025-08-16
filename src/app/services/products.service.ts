import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/products';

export interface CatalogResponse {
  veg: Product[];
  nonVeg: Product[];
  karapodi: Product[];
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private apiUrl = 'assets/data/Products.json'; // or your API endpoint

  constructor(private http: HttpClient) {}

  getCatalog(): Observable<CatalogResponse> {
    return this.http.get<CatalogResponse>(this.apiUrl);
  }
}
