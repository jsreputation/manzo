import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-layout',
  template: `
      <router-outlet></router-outlet>
  `
})
export class IssuerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
