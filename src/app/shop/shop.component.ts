import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  cart = [];  // shopping cart items
  cartTotal:number = 0.00; // shopping cart total
  products: any;  // API response

  /**
   * class constructor
   */
   constructor(private shopService: ShopService) { 

  }

  ngOnInit(): void {
    this.getProducts();    
  }

  getProducts(): void {
    this.shopService.getAll()
      .subscribe(
        data => {
          this.products = data;          
        },
        error => {
          console.log(error);
        });
  }

  addToCart(id: any, price: any): void {
    this.cartTotal = this.cartTotal + parseFloat(price);    
  }

}
