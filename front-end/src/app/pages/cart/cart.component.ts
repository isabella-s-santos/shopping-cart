import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import Product from 'src/app/models/Product';

import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  
  displayedColumns: string[] = ['name', 'description', 'price', 'icon'];

  constructor(public cartService: CartService) { };
  
  ngOnInit(): void {
    this.products = this.cartService.products;
  };

  deleteProduct(product: Product): void {
    this.cartService.deleteProduct(product);
  };
};
