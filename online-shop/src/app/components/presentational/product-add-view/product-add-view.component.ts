import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductInsert } from 'src/app/modules/shared/types/products.types';
@Component({
  selector: 'app-product-add-view',
  templateUrl: './product-add-view.component.html',
  styleUrls: ['./product-add-view.component.scss']
})
export class ProductAddViewComponent {
  @Output() insertProduct: EventEmitter<ProductInsert> = new EventEmitter<ProductInsert>();
  @Input() productForm!: FormGroup;
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

}
