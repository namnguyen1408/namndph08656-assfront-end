import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { data } from '../Mockupdata';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService : ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }
getProduct(){
  this.route.params.subscribe(param =>{
    this.productService.getProduct(param.productID).subscribe(data => this.product = data);

  })
}
removeProduct(){
  this.productService.deleteProduct(this.product).subscribe(data =>{
    this.router.navigateByUrl("/admin/product")
  })
}
}