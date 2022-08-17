import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private _jsonURL='assest/product.json'
  constructor(private Http:HttpClient) {   }
  getProduct(){
    return this.Http.get('http://localhost:4200/assets/product.json')
  }
  
  // getJson():Observable<any>{
  //   return this.Http.get(this._jsonURL)
  // }
}
