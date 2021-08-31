import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-normal-input',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {
  @Input() settings: any
  constructor() { }

  ngOnInit(): void {
  }

}
