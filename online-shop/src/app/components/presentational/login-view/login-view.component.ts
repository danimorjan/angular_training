import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {
  @Output() login: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  onLogin() {
    const credentials: Credentials = { ...this.loginForm.value };
    this.login.emit(credentials);
  }
}
