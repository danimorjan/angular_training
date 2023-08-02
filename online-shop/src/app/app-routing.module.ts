import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/containers/login/login.component';
import { ProductAddComponent } from './components/containers/product-add/product-add.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { authGuard } from './guards/auth.guard';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '', canActivate: [authGuard], children: [{ path: 'products', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'shopping-cart', component: ShoppingCartDetailsComponent },
    { path: 'edit-product/:id', component: ProductsFormComponent },
    { path: 'add-product', component: ProductAddComponent },]
  },
  { path: 'login', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
