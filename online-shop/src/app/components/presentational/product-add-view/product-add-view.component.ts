import { Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductInsert } from 'src/app/modules/shared/types/products.types';
@Component({
  selector: 'app-product-add-view',
  templateUrl: './product-add-view.component.html',
  styleUrls: ['./product-add-view.component.scss']
})
export class ProductAddViewComponent {
  @Output() insertProduct: EventEmitter<ProductInsert> = new EventEmitter<ProductInsert>();

  productForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    image: [''],
    price: [1, Validators.required],
    description: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private location: Location) { }

  saveChanges() {
    const insertProduct: ProductInsert = { ...this.productForm.value }
    this.insertProduct.emit(insertProduct);
  }

  cancel() {
    this.location.back();
  }
}
