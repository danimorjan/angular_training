import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/containers/login/login.component';
import { ProductAddComponent } from './components/containers/product-add/product-add.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { authGuard } from './guards/auth.guard';
import { ShoppingCartDetailsComponent } from './modules/shopping-cart/components/containers/shopping-cart-details/shopping-cart-details.component';
import { AppPaths } from './services/navigation.service';

const routes: Routes = [
  { path: AppPaths.ROOT, redirectTo: `/${AppPaths.LOGIN}`, pathMatch: 'full' },
  {
    path: AppPaths.ROOT,
    canActivate: [authGuard],
    children: [
      { path: AppPaths.PRODUCTS, component: ProductListComponent },
      { path: AppPaths.PRODUCT_DETAILS, component: ProductDetailsComponent },
      { path: AppPaths.SHOPPING_CART, component: ShoppingCartDetailsComponent },
      { path: AppPaths.EDIT_PRODUCT, component: ProductsFormComponent },
      { path: AppPaths.ADD_PRODUCT, component: ProductAddComponent },
    ],
  },
  { path: AppPaths.LOGIN, component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
