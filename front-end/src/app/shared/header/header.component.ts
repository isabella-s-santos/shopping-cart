import { TokenService } from './../../services/token.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  token: string | '';

  isAuthenticated: boolean = false;

  constructor(private tokenService: TokenService) {
    this.token = this.tokenService.getToken();
  };
  
  ngOnInit(): void {
    if (this.token) this.isAuthenticated = true;
  };
};
