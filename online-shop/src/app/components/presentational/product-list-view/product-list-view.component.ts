import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent {
  @Input() products: Product[] | undefined;

}
