import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { Order, OrderProduct, Product } from 'src/app/modules/shared/types/products.types';
import { OrderService } from 'src/app/services/order.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent implements OnInit, OnDestroy {
  cartItems!: Product[];
  alive = true;

  constructor(private cartService: ShoppingCartService, private orderService: OrderService,
    private location: Location) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  checkout(orderProducts: OrderProduct[]) {

    const order: Order = {
      customerId: "de96921d-2f8d-46e7-8061-31468180de96",
      products: orderProducts.map((orderProduct) => ({
        productId: orderProduct.product.id,
        quantity: orderProduct.quantity,
      })),
    };

    this.orderService.createOrder(order).pipe(
      takeWhile(() => this.alive)
    ).subscribe({
      next: () => {
        window.alert('Order placed');
        this.cartService.clearCart();
        this.location.back();
      },
      error: (error) => {
        window.alert(error);
      }
    });
  }

  removeFromCart(productId: string) {
    if (this.cartItems.some((item) => item.id === productId)) {
      this.cartItems.splice(this.cartItems.findIndex((item) => item.id === productId), 1);
    }
  }

  ngOnDestroy(): void {
    this.alive = false
  }
}
