import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
{path: 'contact', component:ContactComponent},
 {path: 'shop', component: ProductComponent},
 {path: 'admin', component: AdminComponent,
 children: [
   {path: '', redirectTo:'product', pathMatch:'full'},
   {path: 'product', component: ProductListComponent},
   {path: 'add', component: AddComponent},
   {path: 'edit/:productID', component: EditProductComponent},
  {path: 'delete/:productID', component: DeleteProductComponent}
 ]},
  
  {path: 'product/:productID', component: ProductDetailComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
