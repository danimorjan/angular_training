import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/containers/login/login.component';
import { ProductAddComponent } from './components/containers/product-add/product-add.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ProductsFormComponent } from './components/containers/products-form/products-form.component';
import { LoginViewComponent } from './components/presentational/login-view/login-view.component';
import { ProductAddViewComponent } from './components/presentational/product-add-view/product-add-view.component';
import { ProductDetailsViewComponent } from './components/presentational/product-details-view/product-details-view.component';
import { ProductListViewComponent } from './components/presentational/product-list-view/product-list-view.component';
import { ProductsFormViewComponent } from './components/presentational/products-form-view/products-form-view.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductListViewComponent,
    ProductDetailsViewComponent,
    ProductsFormComponent,
    ProductsFormViewComponent,
    ProductAddViewComponent,
    ProductAddComponent,
    LoginComponent,
    LoginViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
