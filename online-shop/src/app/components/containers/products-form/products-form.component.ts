import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form',
  template: `<ng-container *ngIf="selectedProduct">
  <app-products-form-view [product]="selectedProduct" (updateProduct)="updateProduct($event)"></app-products-form-view>
</ng-container>`,
})
export class ProductsFormComponent implements OnInit, OnDestroy {
  selectedProduct: Product | undefined;
  alive = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId)
      .pipe(takeWhile(() => this.alive))
      .subscribe((product) => {
        this.selectedProduct = product;
      });
  }

  updateProduct(updatedProduct: Product) {
    this.productService.updateProduct(updatedProduct).pipe(
      takeWhile(() => this.alive)
    ).subscribe({
      next: () => {
        window.alert('Product updated');
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
