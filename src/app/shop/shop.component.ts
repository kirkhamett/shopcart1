import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ShopService } from '../shop.service';
=======
>>>>>>> 272a6ecfee94c3fb284d2c0aa36396103af3e398

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 272a6ecfee94c3fb284d2c0aa36396103af3e398
  }

}
