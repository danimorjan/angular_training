import { Injectable } from '@angular/core';
import { Product } from '../../shared/types/products.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  private items: Product[] = [];

  addToCart(product: Product): Boolean {
    if (this.items.includes(product)) {
      return false;
    }
    else {
      this.items.push(product);
      return true
    }
  }

  getCartItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
