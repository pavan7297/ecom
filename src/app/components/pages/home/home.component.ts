import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Title } from '@angular/platform-browser';
import { HomeService } from '../../../services/Home.service';
import { Product } from '../../../models/products';
import { FeaturedProductsService } from '../../../services/featured-products.service';
import { ProductsService } from '../../../services/products.service';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-home',
  imports: [CommonModule,CarouselModule,CardModule, ButtonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featured: Product[] = [];
  loading = true;

  images = [
    {
      id: 1,
      src: '/assets/icons/vegpickels.jpg',
      alt: 'Veg Pickles',
      title: 'Veg Pickles',
    },
    {
      id: 2,
      src: '/assets/icons/nonveg pickels.jpg',
      alt: 'Non Veg Pickels',
      title: 'Non Veg Pickles',
    },
    {
      id: 3,
      src: '/assets/icons/karapodi.jpg',
      alt: 'Karapodi',
      title: 'Karapodi',
    },
  ];

  constructor(
    private _home_ser: HomeService,
    private productsService: ProductsService,
    private featuredService: FeaturedProductsService
  ) {}

  ngOnInit(): void {
    this._home_ser.getHomeData().subscribe((data) => {
      console.log(data);
    });
    this.productsService.getCatalog().subscribe({
      next: (data) => {
        this.featured = this.featuredService.pickAndStoreFeatured(data);
        this.loading = false;
      },
      error: () => {
        this.featured = this.featuredService.getStoredFeatured();
        this.loading = false;
      },
    });
  }

  trackById(_: number, item: Product) {
    return item.id;
  }

scrollLeft() {
  const container = document.getElementById('featured-scroll');
  if (container) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
}

scrollRight() {
  const container = document.getElementById('featured-scroll');
  if (container) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}

}
