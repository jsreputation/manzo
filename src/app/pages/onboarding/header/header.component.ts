import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menus = [
    {
      name: 'Home',
      route: '/home'
    },
    // {
    //   name: 'Contact Us',
    //   route: '/contact'
    // },
    {
      name: 'About Us',
      route: '/about'
    },
    {
      name: 'Sign In',
      route: 'signin'
    },
    {
      name: 'Sign Up',
      route: 'request'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
