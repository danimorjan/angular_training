import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from 'src/app/modules/shared/state/actions/products.actions';
import { selectAllProducts } from 'src/app/modules/shared/state/selectors/products.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';

@Component({
  selector: 'app-product-list',
  template: `<app-product-list-view [products]="products$ | async"></app-product-list-view>`
})
export class ProductListComponent implements OnInit {
  products$ = this.store.select(selectAllProducts);

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getProducts());
  }
}
