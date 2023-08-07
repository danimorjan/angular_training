import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs';
import { Location } from '@angular/common';
import { addProduct } from 'src/app/modules/shared/state/actions/product.actions';
import { selectAdminRole } from 'src/app/modules/shared/state/selectors/auth.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { ProductInsert } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-product-add',
  template: `<app-product-add-view [productForm]="productForm"
  (cancel)="onCancelClick()" (insertProduct)="insertProduct()"></app-product-add-view>`,
})
export class ProductAddComponent implements OnInit, OnDestroy {
  admin: Boolean = false;
  active: boolean = true;
  productForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    image: [''],
    price: [1, Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private store: Store<AppState>, private formBuilder: FormBuilder, private location: Location
  ) { }

  ngOnInit(): void {
    this.store.select(selectAdminRole).pipe(takeWhile(() => this.active)).subscribe(data => this.admin = data)
  }

  insertProduct() {
    const product: ProductInsert = { ...this.productForm.value }
    if (this.admin) {
      this.store.dispatch(addProduct({ product }))
    }
    else {
      alert("You are not an admin")
    }
  }

  onCancelClick() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.active = false;
  }

}
