import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/modules/shared/state/actions/auth.actions';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { Credentials } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-login',
  template: `<app-login-view [loginForm]="loginForm" (login)="onLogin()"></app-login-view>`
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) { }

  onLogin() {
    const credentials: Credentials = { ...this.loginForm.value };
    this.store.dispatch(login({ credentials: credentials }));
  }


}
