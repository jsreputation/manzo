import { Component, OnInit } from '@angular/core';
import { configInputs } from 'src/app/constants/configSto';

@Component({
  selector: 'app-config-sto',
  templateUrl: './config-sto.component.html',
  styleUrls: ['./config-sto.component.scss']
})
export class ConfigSTOComponent implements OnInit {
  configInputs = configInputs;
  constructor() {
  }

  ngOnInit(): void {
    
  }

}
