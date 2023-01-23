import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import Product from 'src/app/models/Product';

import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent {
  isHidden: boolean = true;
  
  product: Product | undefined;
  
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: Router
  ) { };
  
  productForm = this.formBuilder.group({
    userId: '',
    name: '',
    description: '',
    price: 0
  });     

  onSubmit(): void {
    this.product = {
      _id: '',
      userId: localStorage.getItem('userId') ?? '',
      name: this.productForm.value.name ?? '',
      description: this.productForm.value.description ?? '',
      price: this.productForm.value.price ?? 0
    };

    console.log(this.product.userId);

    this.productService.addProduct(this.product).subscribe(() => this.route.navigate(['\home']));
  };
};
