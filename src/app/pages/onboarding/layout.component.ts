import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-layout',
  template: `
      <manzo-header></manzo-header>
      <router-outlet></router-outlet>
      <!-- <manzo-footer></manzo-footer> -->
  `
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
