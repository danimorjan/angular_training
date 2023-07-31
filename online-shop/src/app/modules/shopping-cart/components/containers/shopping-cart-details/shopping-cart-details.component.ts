import { Component } from '@angular/core';
import { products } from 'src/app/mocks/products.mocks';
import { Product } from 'src/app/modules/shared/types/products.types';
@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})
export class ShoppingCartDetailsComponent {
  products: Product[] = products;


}
