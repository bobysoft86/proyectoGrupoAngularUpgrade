import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:3000/productos');
  }
  postProducts(newArticle: any) {
    return this.http.post('http://localhost:3000/productos', newArticle);
  }

  updateProduct(id: any, newArticle: any) {
    return this.http.put(`http://localhost:3000/productos/${id}`, newArticle);
  }

  deleteProduct(id: any) {
    return this.http.delete(`http://localhost:3000/productos/${id}`);
  }
  getProductsid(id: any) {
    return this.http.get(`http://localhost:3000/productos/${id}`);
  }
}
