import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { CustomerService } from '../actionpane/customer.service';

@Component({
  selector: 'app-product',
  providers:[ProductService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input()
searchKey: string='';
products: Product[];
@Output() update = new EventEmitter<string>();


  constructor(private productservice: ProductService,
    private cartservice: CustomerService
  ) { }

  getProducts(): void{
    this.productservice.searchProducts(this.searchKey).subscribe(products => this.products = products);
  }
  addToCart(product)
  {
    this.cartservice.addToCart(product.id).subscribe(() => {
    });
    this.update.emit();
  }

  ngOnChanges(){
    this.getProducts();
  }
  ngOnInit() {
    this.getProducts();
  }

}
