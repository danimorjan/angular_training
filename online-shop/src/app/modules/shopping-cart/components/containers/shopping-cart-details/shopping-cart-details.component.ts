import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs';
import { createOrder } from 'src/app/modules/shared/state/actions/shopping-cart.actions';
import { selectCurrentUser } from 'src/app/modules/shared/state/selectors/auth.selectors';
import { selectOrderProducts } from 'src/app/modules/shared/state/selectors/shopping-cart.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { Order, OrderProduct, User } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-shopping-cart-details',
  template: `<app-shopping-cart-details-view [products]="cartItems$ | async" (onClickCheckoutButton)="checkout($event)"></app-shopping-cart-details-view>`
})
export class ShoppingCartDetailsComponent implements OnInit, OnDestroy {
  cartItems$ = this.store.select(selectOrderProducts);
  currentUser$ = this.store.select(selectCurrentUser);
  currentUser!: User | null;
  constructor(private store: Store<AppState>) { }

  active = true;

  ngOnInit() {
    this.currentUser$.pipe(takeWhile(() => this.active)).subscribe(data => this.currentUser = data);
  }

  checkout(orderProducts: OrderProduct[]) {
    if (this.currentUser) {
      const order: Order = {
        customerId: this.currentUser.id,
        products: orderProducts.map((orderProduct) => ({
          productId: orderProduct.product.id,
          quantity: orderProduct.quantity,
        })),
      };
      this, this.store.dispatch(createOrder({ order }))
    }

  }

  ngOnDestroy(): void {
    this.active = false
  }
}
