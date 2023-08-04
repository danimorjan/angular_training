import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs';
import { deleteProduct, getProduct } from 'src/app/modules/shared/state/actions/product.actions';
import { addToCart } from 'src/app/modules/shared/state/actions/shopping-cart.actions';
import { selectAdminRole } from 'src/app/modules/shared/state/selectors/auth.selectors';
import { selectCurrentProduct } from 'src/app/modules/shared/state/selectors/product.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { Product } from 'src/app/modules/shared/types/products.types';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-product-details',
  template: `<app-product-details-view [product]="selectedProduct$ | async" 
  (onClickDeletekButton)="deleteProduct($event)"
  (onClickBuyButton)="addToCart($event)"
  (navigateToEditButton)="onNavigateToEditClick($event)" ></app-product-details-view>`
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  selectedProduct$ = this.store.select(selectCurrentProduct);
  admin: boolean = false;
  active: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.store.select(selectAdminRole).pipe(takeWhile(() => this.active)).subscribe(data => this.admin = data)
    this.route.params.pipe(takeWhile(() => this.active)).subscribe((_) => {
      const productId = this.route.snapshot.paramMap.get('id')!;
      this.store.dispatch(getProduct({ productId: productId }))
    });
  }

  deleteProduct(productId: string): void {
    if (this.admin) {
      this.store.dispatch(deleteProduct({ productId: productId }));
    }
    else {
      alert("You are not an admin")
    }
  }

  addToCart(product: Product) {
    this.store.dispatch(addToCart({ product }))
  }

  onNavigateToEditClick(productId: string) {
    this.navigationService.navigateToEditProduct(productId);
  }

  ngOnDestroy(): void {
    this.active = false
  }
}
