import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, OrderProduct } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent implements OnInit {
  @Input() products!: Product[]
  @Output() onClickCheckoutButton: EventEmitter<OrderProduct[]> = new EventEmitter<OrderProduct[]>();
  @Output() onClickRemoveButton: EventEmitter<string> = new EventEmitter<string>();

  orderProducts: OrderProduct[] = []

  ngOnInit() {
    this.orderProducts = this.products.map((product) => ({
      product,
      quantity: 1,
    }));
  }

  onRemoveButtonClick(orderProduct: OrderProduct) {
    if (this.orderProducts.includes(orderProduct)) {
      this.orderProducts.splice(this.orderProducts.indexOf(orderProduct), 1);
    }
    this.onClickRemoveButton.emit(orderProduct.product.id);
  }
}
