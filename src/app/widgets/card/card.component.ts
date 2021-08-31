import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'manzo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() actionItems: any;
  @Output() handleClick: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  navigateToConfigStO(route: string) {
    this.handleClick.emit(route);
  }

}
