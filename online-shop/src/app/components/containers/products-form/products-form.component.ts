import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeWhile } from 'rxjs';
import { getProduct, updateProduct } from 'src/app/modules/shared/state/actions/product.actions';
import { selectAdminRole } from 'src/app/modules/shared/state/selectors/auth.selectors';
import { selectCurrentProduct } from 'src/app/modules/shared/state/selectors/product.selectors';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-form',
  template: `<ng-container *ngIf="selectedProduct$">
  <app-products-form-view [productForm]="productForm" (updateProduct)="updateProduct()"
  (cancel)="onCancelClick()"></app-products-form-view>
</ng-container>`,
})
export class ProductsFormComponent implements OnInit, OnDestroy {
  selectedProduct$ = this.store.select(selectCurrentProduct);
  selectedProduct !: Product | null
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
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private location: Location
  ) { }

  ngOnInit() {
    this.store.select(selectAdminRole).pipe(takeWhile(() => this.active)).subscribe(data => this.admin = data)
    this.route.params.pipe(takeWhile(() => this.active)).subscribe((_) => {
      const productId = this.route.snapshot.paramMap.get('id')!;
      this.store.dispatch(getProduct({ productId: productId }));
    });
    this.selectedProduct$.pipe(takeWhile(() => this.active)).subscribe(data => {
      this.selectedProduct = data
      if (this.selectedProduct) {
        this.productForm.patchValue(this.selectedProduct)
      }
    })
  }

  updateProduct() {
    const updatedProduct: Product = {
      id: this.selectedProduct?.id,
      ...this.productForm.value,
    };
    if (this.admin) {
      this.store.dispatch(updateProduct({ product: updatedProduct }));
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
