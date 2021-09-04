import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faLightbulb, faGem } from '@fortawesome/free-solid-svg-icons';
import { aboutus } from 'src/app/core/constants/about';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  icons = {
    telegram: faPaperPlane,
    lightblub: faLightbulb,
    diamond: faGem
  };
  abouts = aboutus;
  constructor() { }

  ngOnInit(): void {
  }

}
