import { Component, model, OnInit } from '@angular/core';
import { PhotoService } from '../../../../services/photo.service';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-products-list',
  imports: [GalleriaModule, CommonModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [PhotoService],
})
export class ProductsListComponent implements OnInit {
  image: any[] = [];

  value: any;

  images: any[] = [];

  productsList: any[] = [];

  currentIndex = 0;

  intervalId: any;

  productmenu: any[] = [
    {
      id: 1,
      Title: 'veg pickels',
      route: 'vp',
    },
    {
      id: 2,
      Title: 'Non Veg Pickle',
      route: 'nvp',
    },
    {
      id: 3,
      Title: 'podi',
      route: 'pd',
    },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  constructor(
    private photoService: PhotoService,
    private _Serv: ProductsService
  ) {}

  ngOnInit() {
    this.getProducts();
    this.onChangeMenu('vp');
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  onChangeMenu(event: any) {
    console.log(event);
    switch (event) {
      case 'vp':
        this._Serv.getCatalog().subscribe((data: any) => {
          this.productsList = data.veg;

          console.log(this.productsList);
        });
        break;
      case 'nvp':
        this._Serv.getCatalog().subscribe((data: any) => {
          this.productsList = data.nonVeg;
          console.log(this.productsList);
        });
        break;
      case 'pd':
        this._Serv.getCatalog().subscribe((data: any) => {
          this.productsList = [];
          this.productsList = data.karapodi;
          console.log(this.productsList);
        });
        break;
      default:
        this.getProducts();
        break;
    }
  }

  getProducts() {
    this._Serv.getCatalog().subscribe((data: any) => {
      this.productsList = data;
      // console.log(this.productsList);
    });
    this.photoService.getPhoneData().subscribe((data: any) => {
      console.log(data);
      this.images = data;
      console.log(this.images);
    });
  }

  prevImage() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
