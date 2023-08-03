import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { deleteProduct, getProduct } from 'src/app/modules/shared/state/actions/product.actions';
import { addToCart } from 'src/app/modules/shared/state/actions/shopping-cart.actions';
import { selectAdminRole } from 'src/app/modules/shared/state/selectors/auth.selectors';
import { selectCurrentProduct } from 'src/app/modules/shared/state/selectors/product.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { Product } from 'src/app/modules/shared/types/products.types';
import { ShoppingCartService } from 'src/app/modules/shopping-cart/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  template: `<app-product-details-view [product]="selectedProduct$ | async" 
  (onClickDeletekButton)="deleteProduct($event)"
  (onClickBuyButton)="addToCart($event)" ></app-product-details-view>`
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct$ = this.store.select(selectCurrentProduct);
  admin: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private store: Store<AppState>
  ) { }


  ngOnInit() {
    this.store.select(selectAdminRole).pipe(take(1)).subscribe(data => this.admin = data)
    const productId = this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(getProduct({ productId: productId }))
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

}
