import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import { Product } from '../Product';
import { from } from 'rxjs';
import { data } from '../Mockupdata';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements 
OnInit {
    product : Product;
  constructor(
    private route : ActivatedRoute,
    private produceService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  this.getProduct();
  }
getProduct(){
  this.route.params.subscribe(param =>{
    this.produceService.getProduct(param.productID).subscribe(data => this.product = data);
    console.log(data)
  })
}
updateProduct(){
  this.produceService.updateProduct(this.product).subscribe(data => 
      this.productService.deleteProduct(this.product).subscribe(data => {
        this.router.navigateByUrl("/admin/product")
      }));
}
}