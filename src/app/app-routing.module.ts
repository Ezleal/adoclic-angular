import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailModalComponent } from './product-detail-modal/product-detail-modal.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ { path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'product-list', component: ProductListComponent, canActivate: [AuthGuard]},
{ path: 'products/:id', component: ProductDetailModalComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
