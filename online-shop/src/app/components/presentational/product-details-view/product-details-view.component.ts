import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent {
  @Input() product!: Product | null;
  @Output() onClickDeletekButton: EventEmitter<string> = new EventEmitter<string>();
  @Output() onClickBuyButton: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private router: Router) { }

  navigateToEdit(productId: string) {
    this.router.navigate(['edit-product', productId]);
  }
}
