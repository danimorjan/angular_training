import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/modules/shared/types/products.types';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent {
  @Input() products!: Product[] | null;
  @Output() navigateToShoppingCartButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() navigateToAddButton: EventEmitter<void> = new EventEmitter<void>();
  @Output() navigateToDetailsButton: EventEmitter<string> = new EventEmitter<string>();
  @Output() logoutButton: EventEmitter<void> = new EventEmitter<void>();

}
