import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { stolist } from 'src/app/core/constants/stolist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clockIcon = faClock;
  stolist = stolist;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editSTO() {

  }

}
