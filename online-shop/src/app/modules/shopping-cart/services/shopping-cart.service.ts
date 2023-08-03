import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Order, Product } from '../../shared/types/products.types';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  private items: Product[] = [];

  createOrder(order: Order) {
    return this.http.post(`${environment.apiUrl}/orders`, order, { responseType: 'text' });
  }
}
