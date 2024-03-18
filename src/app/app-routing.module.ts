import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailModalComponent } from './product-detail-modal/product-detail-modal.component';

const routes: Routes = [ { path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'product-list', component: ProductListComponent },
{ path: 'products/:id', component: ProductDetailModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
