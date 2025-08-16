import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ProductsListComponent } from './components/pages/products/products-list/products-list.component';
import { ProductsCatgeoryComponent } from './components/pages/products/products-catgeory/products-catgeory.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Contact-Us', component: ContactUsComponent },
  { path: 'About-Us', component: AboutUsComponent },

  // products
  { path: 'Products', component: ProductsListComponent },
  { path: 'Productscat', component: ProductsCatgeoryComponent },
];
