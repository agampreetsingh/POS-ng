import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
    console.log('Servce');
   }

  getProducts(): Observable<Product[]> {
    console.log('In products..safdass')
    return this.http.get<Product[]>('http://localhost:8080/pos/products/');
  }

  searchProducts(query:string):Observable<Product[]>{
    console.log(query+ "this")
    
    return this.http.get<Product[]>('http://localhost:8080/pos/products/searchby?key='+query);
  }



}
