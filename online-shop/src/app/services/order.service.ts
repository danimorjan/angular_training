import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../modules/shared/types/products.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order) {
    return this.http.post(`${environment.apiUrl}/orders`, order, { responseType: 'text' });
  }
}
