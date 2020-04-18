import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'manager', component: ProductListComponent,
 },
 {path: 'shop', component: ProductComponent},
 {path: 'admin', component: AdminComponent,
 children: [
   {path: '', redirectTo:'product', pathMatch:'full'},
   {path: 'product', component: ProductListComponent},
 ]},
  {path: 'product/edit/:productID', component: EditProductComponent},
  {path: 'product/:productID', component: ProductDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
