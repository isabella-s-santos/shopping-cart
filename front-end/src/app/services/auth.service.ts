import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | '';
  isAuthenticated: Observable<any> | undefined; // De que tipo seria essa "Observable"?

  constructor(
    private http: HttpClient,
    private route: Router,
    private tokenService: TokenService
  ) { 
    this.token = this.tokenService.getToken();
  };

  buildHeaders = () => 
    new HttpHeaders().set('X-token', localStorage.getItem('token') ?? ''); // Por que não usar a variável "token"?

  login = (email: string, password: string): Observable<any> => // Fazer definição de tipo do retorno; retorna um objeto com as propriedades "accessToken" e "userId"
    this.http.post<any>('http://localhost:5000/login', { email, password });

  canActivate() { if (!this.token) this.route.navigate(['/login']) };
};
