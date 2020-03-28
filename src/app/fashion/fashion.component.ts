import { Component, OnInit } from '@angular/core';
import { ProductService }from '../product.service';
import { Product } from '../Product';
@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
 selected: Product;
  products: Product[];
  product : Product;
  constructor(
        private productService: ProductService

  ) { }

  ngOnInit() {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
     });
   }
}