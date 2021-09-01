import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() settings: any;
  constructor() { }

  ngOnInit(): void {
  }

}
