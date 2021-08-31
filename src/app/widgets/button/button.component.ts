import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: any;
  @Input() icon: any;
  constructor() { }

  ngOnInit(): void {
  }

}
