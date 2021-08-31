import { Component, OnInit } from '@angular/core';
import { configInputs } from 'src/app/core/constants/configSto';
import { faSave } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-config-sto',
  templateUrl: './config-sto.component.html',
  styleUrls: ['./config-sto.component.scss']
})
export class ConfigSTOComponent implements OnInit {
  configInputs = configInputs;
  saveIcon = faSave;
  constructor() {
  }

  ngOnInit(): void {
    
  }

  createSTO(e: any) {
    e.preventDefault();
  }

}
