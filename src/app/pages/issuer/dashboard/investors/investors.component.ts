import { Component, OnInit } from '@angular/core';
import {  faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss']
})
export class InvestorsComponent implements OnInit {
  icons = {
    checked: faCheck,
    unchecked: faTimes
  }
  constructor() { }

  ngOnInit(): void {
  }

}
