import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { getProduct, updateProduct } from 'src/app/modules/shared/state/actions/product.actions';
import { selectAdminRole } from 'src/app/modules/shared/state/selectors/auth.selectors';
import { selectCurrentProduct } from 'src/app/modules/shared/state/selectors/product.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-form',
  template: `<ng-container *ngIf="selectedProduct$">
  <app-products-form-view [product]="selectedProduct$ | async" (updateProduct)="updateProduct($event)"></app-products-form-view>
</ng-container>`,
})
export class ProductsFormComponent implements OnInit {
  selectedProduct$ = this.store.select(selectCurrentProduct);
  admin: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select(selectAdminRole).pipe(take(1)).subscribe(data => this.admin = data)
    const productId = this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(getProduct({ productId: productId }))
  }

  updateProduct(updatedProduct: Product) {
    if (this.admin) {
      this.store.dispatch(updateProduct({ product: updatedProduct }));
    }
    else {
      alert("You are not an admin")
    }
  }

}
