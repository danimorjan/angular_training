import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { addProduct } from 'src/app/modules/shared/state/actions/product.actions';
import { selectAdminRole } from 'src/app/modules/shared/state/selectors/auth.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { ProductInsert } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-product-add',
  template: `<app-product-add-view (insertProduct)="insertProduct($event)"></app-product-add-view>`,
})
export class ProductAddComponent implements OnInit {
  admin: Boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectAdminRole).pipe(take(1)).subscribe(data => this.admin = data)
  }

  insertProduct(product: ProductInsert) {
    if (this.admin) {
      this.store.dispatch(addProduct({ product }))
    }
    else {
      alert("You are not an admin")
    }
  }

}
