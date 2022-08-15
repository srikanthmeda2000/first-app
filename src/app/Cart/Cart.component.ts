import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.css']
})
export class Cartcomponent implements OnInit {

  carts = [];

  constructor() { }

  ngOnInit(): void {
  }

}