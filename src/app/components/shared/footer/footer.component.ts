import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  mobileNumber: string = '';

  msg: boolean = false;

  onSubmit() {
    // console.log('Mobile Number:', this.mobileNumber);
    // const input = {
    //   mobile: this.mobileNumber,
    // };
    // this._ser.requestCall(input).subscribe((res) => {
    //   this.msg = false;
    //   if (res.responseCode === 201) {
    //     this.msg = true;
    //     setTimeout(() => {
    //       this.mobileNumber = '9133079089';
    //       this.msg = false;
    //     }, 3000);
    //   }
    // });
  }

  about() {
    this.router.navigate([`/about-us`]);
  }

  contact() {
    this.router.navigate([`/signup`]);
  }

  Clothing() {
    this.router.navigate([`/clothing`]);
  }

  location() {
    // this.router.navigate([`/signup`]);
    console.log('location data');
  }

  terms() {
    this.router.navigate([`/Terms-and-Conditions`]);
  }

  privacy() {
    this.router.navigate([`/privacy-policy`]);
  }

  login() {
    this.router.navigate([`/login`]);
  }

  Essentials() {
    this.router.navigate([`/essentials`]);
  }

  Gifts() {
    this.router.navigate([`/Gifts`]);
  }

  Purohit() {
    this.router.navigate([`/Purohit`]);
  }

  blog() {
    this.router.navigate([`/blogs`]);
  }

  // status(){};

  // career(){};

}
