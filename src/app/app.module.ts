import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service'
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BannerComponent } from './banner/banner.component';
import { FashionComponent } from './fashion/fashion.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { from } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ContactComponent } from './contact/contact.component';

import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    NotFoundComponent,
    BannerComponent,
    FashionComponent,
    HeaderTopComponent,
    ProductComponent,
    ProductDetailComponent,
    EditProductComponent,
    AdminComponent,
    AddComponent,
    DeleteProductComponent,
    ContactComponent,

    CheckoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
