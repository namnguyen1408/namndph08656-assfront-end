import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { from } from 'rxjs';
import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selected: Product;
products : Product[];
product : Product;

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  btnName: String = "Click to hide";
  isDisplay: boolean= true;
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
     });
   }
   click = () => {
    this.isDisplay = ! this.isDisplay;
    if(this.isDisplay) this.btnName="Click to hide"
    else this.btnName="Click to show";
  }
}
