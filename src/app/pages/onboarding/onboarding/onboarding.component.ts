import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPaperPlane, faLightbulb, faGem } from '@fortawesome/free-solid-svg-icons';
import { choosewhy } from '../../../constants/choosewhy'

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  chooseDes = choosewhy;
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

  actions = [
    {
      icon: faLightbulb,
      name: 'RAISE',
      description: 'Issuers are able to create a listing and start funding campaigns to raise investment capital from multiple investors.',
      background: 'bg-primary',
      route: 'newsto'
    },
    {
      icon: faGem,
      name: 'INVEST',
      description: 'Investors are able to browse investment opportunities and easily contact Issuers;  and securely participate in a funding round.',
      background: 'bg-info',
      route: 'invest'
    },
    {
      icon: faPaperPlane,
      name: 'MARKET',
      description: 'Companies listed on DPO may be promising start-up companies, to established revenue producing going concern businesses.',
      background: 'bg-warning',
      route: 'market'
    }
  ]

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
