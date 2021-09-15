import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faClock, faBook, faCashRegister, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { stolist } from 'src/app/core/constants/stolist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  clockIcon = faClock;
  stolist = stolist;

  menu = [
    {
      title: 'Your STO',
      route: './stoyours',
      icon: faBook
    },
    {
      title: 'All STO',
      route: './stoall',
      icon: faCashRegister
    },
    {
      title: 'Your Investors',
      route: './investorsyours',
      icon: faUser
    },
    {
      title: 'All Investors',
      route: './investorsall',
      icon: faUsers
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editSTO() {

  }

}
