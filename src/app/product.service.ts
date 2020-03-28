import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './Mockupdata';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e79aefa17314d0016133349.mockapi.io/products';

  products = data;
  constructor(
    private http: HttpClient

  ) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  removeProduct(id){
    return this.products.filter(product => product.id != id);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }

}
