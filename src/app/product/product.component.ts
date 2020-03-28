import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { from } from 'rxjs';
import { Product } from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  selected: Product;
products : Product[];
product : Product;
 page= 1;
  pageSize = 3;
  constructor(
        private productService : ProductService

  ) { }

  ngOnInit() {
    this.getProducts();
  }
 getProducts(){
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
     });
   }
}