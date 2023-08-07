import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  @Output() login: EventEmitter<void> = new EventEmitter<void>();
  @Input() loginForm!: FormGroup;
}
