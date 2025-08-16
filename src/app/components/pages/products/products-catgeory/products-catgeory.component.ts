import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../../services/Home.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-products-catgeory',
  imports: [CardModule, ButtonModule,CommonModule],
  templateUrl: './products-catgeory.component.html',
  styleUrl: './products-catgeory.component.css'
})
export class ProductsCatgeoryComponent implements OnInit {
  products: any[] = [];
  page: number = 1;
  pageSize: number = 10;
  karapodi: any[] = [];
  nonVeg: any[] = [];
  veg: any[] = [];

  constructor(private _router: Router, private _serv: HomeService) {}

  ngOnInit(): void {
    this.loadProducts();

    this.loadProductsData();
  }

  loadProducts(): void {
    // Simulate an API call to fetch products
    const allProducts = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: (Math.random() * 100).toFixed(2),
    }));

    this.products = allProducts.slice(
      (this.page - 1) * this.pageSize,
      this.page * this.pageSize
    );
  }

  loadProductsData() {
    this._serv.getHomeData().subscribe(
      (data: any) => {
        // this.products = data;
        this.karapodi = data.karapodi || [];
        this.nonVeg = data.nonVeg || [];
        this.veg = data.veg || [];
        console.log(this.karapodi);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  loadMore(): void {
    this.page++;
    this.loadProducts();
  }
}
