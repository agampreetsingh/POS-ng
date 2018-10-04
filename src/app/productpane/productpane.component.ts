import { ProductService } from './../product/product.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { ProductComponent } from '../product/product.component';
import { CustomerService } from '../actionpane/customer.service';

@Component({
  selector: 'app-productpane',
  templateUrl: './productpane.component.html',
  styleUrls: ['./productpane.component.css']
})
export class ProductpaneComponent implements OnInit {

  @Output() update = new EventEmitter<string>();

  private paneproducts: ProductComponent = new ProductComponent(this.productservice,this.customerservice);
  searchedProducts:Product[];
  onKey(event: any)
  {
    console.log(event.target.value);
    this.searchedProducts=[];
    this.productservice.searchProducts(event.target.value).subscribe(products => this.paneproducts.products = products);
    console.log(this.paneproducts.products)
  }
  clear(){
    this.searchedProducts=[]; 
  }
  constructor(private productservice: ProductService, private customerservice: CustomerService) { }

  refreshCart() {
    console.log("Product Pane");
    this.update.emit();
  }

  ngOnInit() {
    
  }

}
