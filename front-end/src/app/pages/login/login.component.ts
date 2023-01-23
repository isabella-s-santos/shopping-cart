import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';
import { TokenService } from './../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  public isShowing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private route: Router
  ) { };
  
  loginForm = this.formBuilder.group({
    email: '',
    password: ''
  });     

  onSubmit(): void {
    this.authService.login(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? ''
    )
    .subscribe({
      next: (response) => {
        this.tokenService.persistToken((response as any).accessToken);
        localStorage.setItem('userId', (response as any).userId);

        this.route.navigate(['\home'])
      }, 
      error: () => console.log('Invalid e-mail or password.')
    });
  };

  public togglePasswordVisibility(): void {
    this.isShowing = !this.isShowing;
  };
};
