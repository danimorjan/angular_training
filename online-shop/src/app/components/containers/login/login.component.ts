import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from 'src/app/modules/shared/state/actions/auth.actions';
import { AppState } from 'src/app/modules/shared/state/state/app.state';
import { Credentials } from 'src/app/modules/shared/types/products.types';

@Component({
  selector: 'app-login',
  template: `<app-login-view (login)="onLogin($event)"></app-login-view>`
})
export class LoginComponent {

  constructor(private store: Store<AppState>) { }

  onLogin(credentials: Credentials) {
    this.store.dispatch(login({ credentials: credentials }));
  }


}
