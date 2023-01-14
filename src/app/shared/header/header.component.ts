import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  links: any[];

  constructor() {
    this.links = [
      {
        label: 'Home',
        link: '/home'
      }, {
        label: 'Login',
        link: '/login'
      }, {
        label: 'Sign up',
        link: '/signup'
      }, 
    ];
  };
};
