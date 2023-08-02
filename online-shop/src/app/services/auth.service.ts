import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../modules/shared/types/products.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<string> {
    console.log(credentials)
    return this.http.post<string>(`${environment.apiUrl}/auth/login`, credentials).pipe(tap((token) => {
      localStorage.setItem("token", token);
    }))
  }

  isLoggedIn(): Boolean {
    return localStorage.getItem("token") !== null
  }
}
