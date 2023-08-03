import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
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
import { AuthEffects } from './modules/shared/state/effects/auth.effects';
import { ProductEffects } from './modules/shared/state/effects/product.effects';
import { ProductsEffects } from './modules/shared/state/effects/products.effects';
import { ShoppingCartEffects } from './modules/shared/state/effects/shopping-cart.effects';
import { authReducer } from './modules/shared/state/reducers/auth.reducers';
import { productReducer } from './modules/shared/state/reducers/product.reducers';
import { productsReducer } from './modules/shared/state/reducers/products.reducers';
import { shoppingCartReducer } from './modules/shared/state/reducers/shopping-cart.reducers';
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
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ShoppingCartModule,
    StoreModule.forRoot({
      auth: authReducer,
      products: productsReducer,
      product: productReducer,
      shoppingCart: shoppingCartReducer,
    }, {}),
    EffectsModule.forRoot([AuthEffects, ProductsEffects, ProductEffects, ShoppingCartEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
