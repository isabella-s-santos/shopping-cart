import { CartService } from './../../services/cart.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

import Product from 'src/app/models/Product';

import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService) { };

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => { this.products = products }
    });    
  };

  addToCart(product: Product): void {
    this.cartService.productSource.next(product);

    window.alert(`${product.name} added to cart!`); // Trocar isto por um componente
  };
};
