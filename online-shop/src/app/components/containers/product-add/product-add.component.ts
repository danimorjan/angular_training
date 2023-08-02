import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Product, ProductInsert } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  template: `<app-product-add-view (insertProduct)="insertProduct($event)"></app-product-add-view>`,
})
export class ProductAddComponent {
  selectedProduct: Product | undefined;
  alive = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) { }

  insertProduct(insertProduct: ProductInsert) {
    this.productService.insertProduct(insertProduct).pipe(
      takeWhile(() => this.alive)
    ).subscribe({
      next: () => {
        window.alert('Product added');
        this.location.back();
      },
      error: (error) => {
        window.alert(error);
      }
    });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
