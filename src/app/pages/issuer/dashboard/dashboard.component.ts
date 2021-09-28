import { Component, OnInit } from '@angular/core';
import {  faBook, faUser, faCogs } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  


  menu = [
    {
      title: 'Issues',
      route: './issues',
      icon: faBook
    },
    {
      title: 'Investors',
      route: './investors',
      icon: faUser
    },
    {
      title: 'Settings',
      route: './settings',
      icon: faCogs
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

  

}
