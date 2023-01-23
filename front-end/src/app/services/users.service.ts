import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import User from '../models/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers: HttpHeaders | undefined;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { 
    this.headers = this.authService.buildHeaders();
  };
  

  getUsers = (): Observable<User[]> => {
    return this.http.get<User[]>('http://localhost:5000/users', {
      headers: this.headers
    });
  };

  getUserById = (id: string): Observable<User> =>
    this.http.get<User>(`http://localhost:5000/users/${id}`, {
      headers: this.headers
    });

  addUser = (user: User) => // Fazer definição de tipo do retorno
    this.http.post('http://localhost:5000/signup', user);

  updateUser = (user: User): Observable<User> =>
    this.http.put<User>(`http://localhost:5000/users/${user._id}`, user, {
      headers: this.headers
    });

  deleteUser = (id: string): Observable<User> =>
    this.http.delete<User>(`http://localhost:5000/users/${id}`, {
      headers: this.headers
    });

  searchUser = (name: string): Observable<User[]> =>
    this.http.get<User[]>(`http://localhost:5000/search?name=${name}`, {
      headers: this.headers
    });
};
