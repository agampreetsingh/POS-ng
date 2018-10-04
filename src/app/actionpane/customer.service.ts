
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Customer } from './customer';
import { ThrowStmt } from '@angular/compiler';


@Injectable()
export class CustomerService {

  customer:any;
  constructor(private http: HttpClient) {
    console.log('Servce');
   }

  searchCustomer(query:string): Observable<Customer[]> {
    console.log('In products..safdass')
    return this.http.get<Customer[]>('http://localhost:8080/pos/customers/searchby?search='+query);
  }

  getCustomer(id:number): Observable<Customer> {
    console.log('In products..safdass')
  this.http.get<Customer>('http://localhost:8080/pos/customers/'+id).subscribe(customer=>{this.customer=customer;
  console.log(this.customer.name);});
  
    return this.http.get<Customer>('http://localhost:8080/pos/customers/'+id);
  }

  saveOrder(id:number): Observable<any>
  {
    return this.http.post<any>('http://localhost:8080/pos/order/customer/'+id+'/paymenttype/status',{
      "paymentType": "cash",
      "status":"hold"
    });
  }
  placeOrder(id:number): Observable<any>
  {
    return this.http.post<any>('http://localhost:8080/pos/order/customer/'+id+'/paymenttype/status',{
      "paymentType": "cash",
      "status":"completed"
    });
  }
  addToCart(productId): Observable<any>
  {
    console.log("Working for:  "+this.customer.name+" " + productId)
    return this.http.post('http://localhost:8080/pos/cart/customer/'+this.customer.id+'/addproduct/'+productId,'');
  }
  getCart(customerId:number){
    
    return this.http.get('http://localhost:8080/pos/cart/customer/'+customerId);
  }


  deleteCart(id:number)
  {
    return this.http.delete('http://localhost:8080/pos/cart/customer/'+id);

  }
  dec(customerId:number, productId:number){
        
    return this.http.put('http://localhost:8080/pos/cart/dec/customer/'+customerId+'/product/'+productId,'');
  }
  inc(customerId:number, productId:number){
        
    return this.http.put('http://localhost:8080/pos/cart/inc/customer/'+customerId+'/product/'+productId,'');
  }


}
