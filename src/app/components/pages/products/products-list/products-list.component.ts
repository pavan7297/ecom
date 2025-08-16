import { Component, model, OnInit } from '@angular/core';
import { PhotoService } from '../../../../services/photo.service';
import { GalleriaModule } from 'primeng/galleria';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  imports: [GalleriaModule, CommonModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  providers: [PhotoService],
})
export class ProductsListComponent implements OnInit {
  image: any[] = [];

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
images: any[]|undefined;

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhoneData().subscribe((data: any) => {
      console.log(data);
      this.image = data;
    });
  }
}
