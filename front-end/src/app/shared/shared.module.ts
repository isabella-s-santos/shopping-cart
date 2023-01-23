import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DialogComponent } from './dialog/dialog.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProductFormComponent } from './product-form/product-form.component';

import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    UserFormComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    UserFormComponent,
    ProductFormComponent
  ]
})
export class SharedModule { };
