import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from 'src/app/modules/shared/state/actions/products.actions';
import { selectAllProducts } from 'src/app/modules/shared/state/selectors/products.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-product-list',
  template: `<app-product-list-view [products]="products$ | async"
  (navigateToShoppingCartButton)="onNavigateToShoppingCartButtonClick()"
  (navigateToAddButton)="onNavigateToAddButtonClick()"
  (navigateToDetailsButton)="onNavigateToDetailsButtonClick($event)"
  (logoutButton)="onLogoutButtonClick()"></app-product-list-view>`
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);

  constructor(private store: Store<AppState>,
    private authService: AuthService, private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts());
  }

  onNavigateToDetailsButtonClick(productId: string) {
    this.navigationService.navigateToProductDetails(productId);
  }

  onNavigateToShoppingCartButtonClick(): void {
    this.navigationService.navigateToShoppingCart();
  }

  onNavigateToAddButtonClick(): void {
    this.navigationService.navigateToAddProduct()
  }

  onLogoutButtonClick() {
    this, this.authService.logout();
    this.navigationService.navigateToLogin()
  }
}
