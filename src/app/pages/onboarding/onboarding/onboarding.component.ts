import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  pauseOnHover = true;
  pauseOnFocus = true;

  issues = [1,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}
