import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent {
  @Input() products: Product[] | undefined;
  
  constructor(private router: Router) {}

  navigateToShoppingCart(): void {
    this.router.navigate(['/shopping-cart']);
  }
}
