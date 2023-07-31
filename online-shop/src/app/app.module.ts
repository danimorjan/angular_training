import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/containers/product-list/product-list.component';
import { ProductDetailsComponent } from './components/containers/product-details/product-details.component';
import { ProductListViewComponent } from './components/presentational/product-list-view/product-list-view.component';
import { ProductDetailsViewComponent } from './components/presentational/product-details-view/product-details-view.component';
import { ShoppingCartModule } from './modules/shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductListViewComponent,
    ProductDetailsViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
