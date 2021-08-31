import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'manzo-both-input',
  templateUrl: './both.component.html',
  styleUrls: ['./both.component.scss']
})
export class BothComponent implements OnInit {
  @Input() settings: any;
  constructor() { }

  ngOnInit(): void {
  }

}
