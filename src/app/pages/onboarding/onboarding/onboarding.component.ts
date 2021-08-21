import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  issues: Array<object> = [
    {
      id: 'xe3544beder4',
      logo: '',
      description: '',
      status: {
        totalInvestmentNeeded: 50,
        investedAmount: 27
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
