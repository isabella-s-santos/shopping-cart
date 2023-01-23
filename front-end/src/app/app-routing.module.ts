import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UsersComponent } from './pages/users/users.component';
import { SellComponent } from './pages/sell/sell.component';
import { CartComponent } from './pages/cart/cart.component';

import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthService],
    children: [
      {
        path: ':id',
        component: UsersComponent,
        canActivate: [AuthService]
      }
    ]
  },
  {
    path: 'sell',
    component: SellComponent,
    canActivate: [AuthService]
  },
  {
    path: 'cart',
    component:CartComponent,
    canActivate: [AuthService]
  },
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: '**',
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
