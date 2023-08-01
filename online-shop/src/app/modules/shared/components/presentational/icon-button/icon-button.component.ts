import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderProduct } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() iconType!: string;
  @Output() onClickButton: EventEmitter<OrderProduct> = new EventEmitter<OrderProduct>();
}
