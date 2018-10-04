import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { Product } from '../product/product';

@Component({
  selector: 'app-actionpane',
  templateUrl: './actionpane.component.html',
  styleUrls: ['./actionpane.component.css']
})
export class ActionpaneComponent implements OnInit {

selectedCustomer:Customer;
cartItems:any;
customers:Customer[];
amount:number = 0;
@Input()
refreshFlag: string = '';

  constructor(private customerservice:CustomerService) { }
onKey(event:any)
{
  this.customerservice.searchCustomer(event.target.value).subscribe(customers => this.customers = customers);
}

dec(cartProduct:Product)
{
  this.customerservice.dec(this.selectedCustomer.id,cartProduct.id).subscribe(()=>{
    //this.getCart(this.selectedCustomer.id);
  });
  this.getCart(this.selectedCustomer.id);
}
deleteCart(customer:Customer)
{
  this.customerservice.deleteCart(customer.id).subscribe(()=>{
    this.getCart(this.selectedCustomer.id);
  });
  this.getCart(this.selectedCustomer.id);
}

inc(cartProduct:Product)
{
  this.customerservice.inc(this.selectedCustomer.id,cartProduct.id).subscribe(()=>{
    //this.cartItems=[];
    //this.getCart(this.selectedCustomer.id);
  });
  this.getCart(this.selectedCustomer.id);
}

saveOrder()
{
 this.customerservice.saveOrder(this.selectedCustomer.id).subscribe();
 this.cartItems=[];
}

placeOrder()
{
 this.customerservice.placeOrder(this.selectedCustomer.id).subscribe();
 this.cartItems=[];
}


getCustomer(id:number)
{
  
  this.customerservice.getCustomer(id).subscribe(customer=>{
    this.selectedCustomer=customer;
    this.cartItems=[];
    this.getCart(this.selectedCustomer.id);
  });
  
}
getCart(id:number):void
{
  this.amount=0;
  this.customerservice.getCart(id).subscribe(cart=>{
    
    this.cartItems=cart;
  for(let i=0;i<this.cartItems.length;i++)
  {
    this.amount+=this.cartItems[i].product.price * this.cartItems[i].quantity;
  }
  });


}
report() : void {
  console.log("Report")
}
onSelected(customer:Customer) : void {
  this.amount=0;
  this.selectedCustomer=customer;
  this.customers=[];
   console.log(this.selectedCustomer.name);
   this.getCustomer(this.selectedCustomer.id);
}
clear()
{
  this.customers=[];
}

  ngOnInit() {
   
  }
  ngOnChanges(){
    this.cartItems=[];   
    if(this.selectedCustomer)
         this.getCart(this.selectedCustomer.id);
  }

}
