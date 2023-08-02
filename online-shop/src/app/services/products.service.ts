import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductInsert } from '../modules/shared/types/products.types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/products`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl}/products/${id}`)
  }

  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/products/${productId}`);
  }

  updateProduct(updatedProduct: Product) {
    return this.http.put(`${environment.apiUrl}/products/${updatedProduct.id}`, updatedProduct);
  }

  insertProduct(insertProduct: ProductInsert) {
    return this.http.post(`${environment.apiUrl}/products`, insertProduct);
  }
}
