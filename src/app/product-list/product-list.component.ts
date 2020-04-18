import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { from } from 'rxjs';
import { Product } from '../Product';
import { data } from '../Mockupdata';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selected: Product;
products : Product[];
product : Product;
page = 2;
  pageSize = 4;
  collectionSize = data.length;
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
  removeItem(id){
  this.products = this.products.filter(product => product.id !=id);}
  updateProduct(){
    this.productService.updateProduct(this.product).subscribe(data => console.log(data));
  }
  deleteProduct(){
    this.productService.deleteProduct(this.product.id);
  }
    get data(): Product[] {
    return data
     
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
