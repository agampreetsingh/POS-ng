import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  orders:any[];
  myOrder: any;

  constructor(private orderservice: OrderService) { }

  onOrderSelect(id: number) {
    console.log("Working fine.");
    this.orderservice.getOrderById(id).subscribe(order=> this.myOrder = order);
  }

  getOrdersOnHold() {
    
    this.orderservice.getOrdersOnHold().subscribe(orders=> this.orders=orders);
  }

  getOrdersCompleted()
  {
    this.orderservice.getOrdersCompleted().subscribe(orders=>this.orders=orders);
  }


  ngOnInit() {
  }

}
