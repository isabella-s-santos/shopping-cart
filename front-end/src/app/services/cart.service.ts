import { Injectable } from '@angular/core';

import { Subject, Subscription } from 'rxjs';

import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  public productSource = new Subject<Product>();
  productObservable = this.productSource.asObservable();
  
  subscription: Subscription;
  
  constructor() {
    this.subscription = this.productObservable.subscribe(
      product => this.products.push(product)
    );
  };

  deleteProduct(product: Product): void {
    const index = this.products.findIndex((toBeDeleted) => toBeDeleted._id == product._id);
    this.products.splice(index, 1);
  };
};
