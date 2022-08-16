import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nendrasys : any=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
   this.getProduct()
  }
  getProduct(){
    this.api.getJson().subscribe(resp=>{
      this.nendrasys=resp
    })
  }
 
  cart = [{}];  
  store() {
    this.cart.push([{ name: String,id:Number,desc:String, Image: String, price: Number }]);
    console.log(this.cart);
  }
}
