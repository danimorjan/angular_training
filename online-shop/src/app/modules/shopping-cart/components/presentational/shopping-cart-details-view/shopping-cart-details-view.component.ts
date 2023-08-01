import { Component, Input, OnInit } from '@angular/core';
import { Product, OrderProduct } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent implements OnInit {
  @Input() products!: Product[]
  orderProducts: OrderProduct[] = []

  ngOnInit() {
    this.orderProducts = this.products.map((product) => ({
      product,
      quantity: 1,
    }));
  }

  onRemoveButtonClick(orderProduct: OrderProduct) {
    const index = this.orderProducts.indexOf(orderProduct);
    if (index !== -1) {
      this.orderProducts.splice(index, 1);
    }
  }

  onCheckoutButtonClick() {
    console.log('Checkout button clicked!');
  }
}
