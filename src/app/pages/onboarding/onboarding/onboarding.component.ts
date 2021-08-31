import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { choosewhy } from '../../../core/constants/choosewhy'
import { actions } from 'src/app/core/constants/onboardactions';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  chooseDes = choosewhy;
  actions = actions;
  
  images = [1, 2, 3].map((n) => `https://picsum.photos/300/100.webp?grayscale&random=${n}`);

  pauseOnHover = true;
  pauseOnFocus = true;

  issues = [
    { 
      logo: 'https://picsum.photos/id/100/100/50',
      title: 'Issue 1'
    }, 
    {
      logo: 'https://picsum.photos/id/101/100/50',
      title: 'Issue 1'
    }, 
    {
      logo: 'https://picsum.photos/id/102/100/50',
      title: 'Issue 1'
    }
  ];

  

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToConfigStO(route: string) {
    console.log(route);
    this.router.navigate(['issue/' + route]);
  }

}
