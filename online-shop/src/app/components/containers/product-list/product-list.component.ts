import { Component, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  template: `<app-product-list-view [products]="products"></app-product-list-view>`
})
export class ProductListComponent implements OnDestroy {
  products: Product[] | undefined;
  alive = true;

  constructor(private productService: ProductsService) {
    this.productService.getProducts()
    .pipe(takeWhile(() => this.alive))
    .subscribe((products) => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
