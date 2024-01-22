import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


    constructor(private http: HttpClient) { }
  
    getProducts(){
      return this.http.get("http://localhost:3000/products")
    }
    postProducts(newArticle:any){
      return this.http.post("http://localhost:3000/products", newArticle)
    }
  
    updateProduct(id:any,newArticle:any){
      return this.http.put(`http://localhost:3000/products/${id}`,newArticle)
    }
  
    deleteProduct(id:any){
      return this.http.delete(`http://localhost:3000/products/${id}`)
    }
    getProductsid(id:number){
      return this.http.get(`http://localhost:3000/products/${id}`)
    }
  }


