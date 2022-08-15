import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
 nendrasys= [
  {
    name: 'srikanth',
    id: 1,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/mobile.jpg'
  },
  {
    name: 'srikanth',
    id: 2,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/mobile1.jpg'
  },
  {
    name: 'srikanth',
    id: 3,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/mobile2.jpg'
  },
  {
    name: 'srikanth',
    id: 4,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/varun-tej.jpg'
  },
  {
    name: 'srikanth',
    id: 5,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/varun-tej.jpg'
  },
  {
    name: 'srikanth',
    id: 6,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/varun-tej.jpg'
  },
  {
    name: 'srikanth',
    id: 7,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/varun-tej.jpg'
  },
  {
    name: 'srikanth',
    id: 8,
    desc: 'h1',
    price: 2000,
    Image: '../assets/images/varun-tej.jpg'
  }
]
cart = [{}];

ngOnInit(): void {
  this.nendrasys;
}

store() {
  this.cart.push([{ name: String,id:Number,desc:String, Image: String, price: Number }]);
  console.log(this.cart);
}

}
