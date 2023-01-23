import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string = localStorage.getItem('token') ?? '';

  persistToken(token: string): void {
    this.token = token;
    
    localStorage.setItem('token', token);
  };

  getToken(): string {
    return this.token;
  };
};
