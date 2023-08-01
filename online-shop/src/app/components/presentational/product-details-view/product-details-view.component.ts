import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent {
  @Input() product: Product | undefined;
  @Output() onClickDeletekButton: EventEmitter<string> = new EventEmitter<string>();
  @Output() onClickBuyButton: EventEmitter<Product> = new EventEmitter<Product>();
}
