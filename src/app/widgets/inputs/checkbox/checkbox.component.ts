import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() settings: any
  constructor() { }

  ngOnInit(): void {
  }

}
