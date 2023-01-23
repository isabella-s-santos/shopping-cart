import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { SellComponent } from './sell/sell.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    UsersComponent,
    ProductsComponent,
    SellComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: []
})
export class PagesModule { }
