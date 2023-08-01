import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { takeWhile } from 'rxjs';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  template: `<app-product-details-view [product]="selectedProduct" 
  (onClickDeletekButton)="deleteProduct($event)"
  (onClickBuyButton)="addToCart($event)" ></app-product-details-view>`
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  selectedProduct: Product | undefined;
  alive = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
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

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).pipe(
      takeWhile(() => this.alive)
    ).subscribe({
      next: () => {
        window.alert('Product deleted');
        this.location.back();
      },
      error: (error) => {
        window.alert(error);
      }
    });
  }

  addToCart(product: Product) {
    if(this.shoppingCartService.addToCart(product)){
      alert('Product added to cart!');
    }
    else{
      alert('Product already in cart!');
    }
    
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
