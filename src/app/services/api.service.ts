import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProducts(page:number) {
    console.log("soygetall",this.http.get('http://localhost:3001/all-books'));
    return this.http.get('http://localhost:3001/all-books');
  }

  getAllProducts() {
    return this.http.get('http://localhost:3001/all-books');
  }

  postProducts(newArticle: any) {
    return this.http.post('http://localhost:3001/all-books', newArticle);
  }

  updateProduct(id: any, newArticle: any) {
    return this.http.put(`http://localhost:3001/all-books/${id}`, newArticle);
  }

  deleteProduct(id: any) {
    return this.http.delete(`http://localhost:3001/all-books/${id}`);
  }
  getProductsid(id: any) {
    return this.http.get(`http://localhost:3001/all-books/${id}`);
  }
}
