import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderProduct, Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-shopping-cart-details-view',
  templateUrl: './shopping-cart-details-view.component.html',
  styleUrls: ['./shopping-cart-details-view.component.scss']
})
export class ShoppingCartDetailsViewComponent implements OnInit {
  @Input() products!: Product[] | null;
  @Output() onClickCheckoutButton: EventEmitter<OrderProduct[]> = new EventEmitter<OrderProduct[]>();

  orderProducts: OrderProduct[] = []

  ngOnInit() {
    if (this.products != null) {
      this.orderProducts = this.products.map((product) => ({
        product,
        quantity: 1,
      }));
    }
  }

  onRemoveButtonClick(orderProduct: OrderProduct) {
    if (this.orderProducts.includes(orderProduct)) {
      this.orderProducts.splice(this.orderProducts.indexOf(orderProduct), 1);
    }
  }
}
