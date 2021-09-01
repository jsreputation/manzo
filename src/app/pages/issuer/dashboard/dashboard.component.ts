import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clockIcon = faClock;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editSTO() {

  }

}
