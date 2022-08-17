import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: any;
 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.product = res;
        console.log(this.product);
      })
  }
  cart: any;
  store() {
    this.api.getProduct().subscribe(res => {
      this.cart =res;
    });
    console.log(this.cart);
  }

}
