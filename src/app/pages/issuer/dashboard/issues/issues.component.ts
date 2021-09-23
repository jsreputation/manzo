import { Component, OnInit } from '@angular/core';
import { faClock, faBook, faCashRegister, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { stolist } from 'src/app/core/constants/stolist';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  stolist = stolist;
  clockIcon = faClock;

  constructor() { }

  ngOnInit(): void {
  }

  editSTO() {

  }

}
