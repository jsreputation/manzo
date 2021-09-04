import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Input() settings: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(e: any) {
    e.checked = !e.checked;
  }

}
