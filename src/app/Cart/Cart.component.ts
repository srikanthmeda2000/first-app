import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()  carts:any;
  constructor(private api:ApiService ,private Http:HttpClient) { }
    
  ngOnInit(): void {
    // this.api.getProduct()
    // .subscribe(res=>
    //   this.carts=res )
      
  }

}
