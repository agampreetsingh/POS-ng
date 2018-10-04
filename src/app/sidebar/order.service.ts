import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrderById(id: number) {
    return this.http.get<any>("http://localhost:8080/pos/order/"+id);
  }
  
  getOrdersOnHold() {
    return this.http.get<any[]>('http://localhost:8080/pos/order/bystatus?status=hold')
  }

    getOrdersCompleted():Observable<any[]>
    {
      return this.http.get<any[]>('http://localhost:8080/pos/order/bystatus?status=completed');
    }


}
