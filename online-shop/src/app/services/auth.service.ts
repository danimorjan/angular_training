import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials, Token, User } from '../modules/shared/types/products.types';
import { tokenKey } from '../modules/shared/types/token-key.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/auth/login`, credentials)
  }

  isLoggedIn(): Boolean {
    return localStorage.getItem(tokenKey) !== null
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/auth/profile`);
  }

  logout(): void {
    localStorage.removeItem(tokenKey);
  }
}
