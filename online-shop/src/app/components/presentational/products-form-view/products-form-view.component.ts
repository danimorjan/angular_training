import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-products-form-view',
  templateUrl: './products-form-view.component.html',
  styleUrls: ['./products-form-view.component.scss']
})
export class ProductsFormViewComponent implements OnInit {
  @Input() product!: Product | null;
  @Output() updateProduct: EventEmitter<Product> = new EventEmitter<Product>();

  productForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required],
    image: [''],
    price: [1, Validators.required],
    description: ['', Validators.required],
  });;

  constructor(private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    if (this.product) {
      this.productForm.patchValue(this.product);
    }
  }

  saveChanges() {
    const updatedProduct: Product = {
      id: this.product?.id,
      ...this.productForm.value,
    };
    this.updateProduct.emit(updatedProduct);
  }

  cancel() {
    this.location.back();
  }

}
