import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/modules/shared/types/products.types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: `<app-login-view (login)="onLogin($event)"></app-login-view>`
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(credentials: Credentials) {
    this.authService.login(credentials).subscribe({
      next: (_) => {
        alert("Welcome");
        this.router.navigate(['/products']);
      },
      error: (error) => {
        if (error.status === 404) {
          alert("User not found. Please check your credentials.");
        } else {
          alert("Please try again later.");
        }
      }
    });
  }


}
