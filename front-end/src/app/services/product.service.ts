import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import Product from '../models/Product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { };

  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>('http://localhost:5000/products', {
      headers: this.authService.buildHeaders()
    });
  };

  // getUserById = (id: string): Observable<User> =>
  //   this.http.get<User>(`http://localhost:5000/users/${id}`, {
  //     headers: this.authService.buildHeaders()
  //   });

  addProduct = (product: Product) => // Fazer definição de tipo do retorno
    this.http.post('http://localhost:5000/sell', product);

  // updateUser = (user: User) => // Fazer definição de tipo do retorno
  //   this.http.put(`http://localhost:5000/users/${user._id}`, user, {
  //     headers: this.authService.buildHeaders()
  //   });

  // deleteUser = (id: string): Observable<User> =>
  //   this.http.delete<User>(`http://localhost:5000/users/${id}`, {
  //     headers: this.authService.buildHeaders()
  //   });
};
