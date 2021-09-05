import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'manzo-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  icons = {
    email: faEnvelope
  }

  radionSettings = {
    label: 'Wanna be an ISSUER or an INVESTOR ?',
    type: 'filter',
    values: [
      {
        id: 'issuer',
        label: 'Issuer',
        checked: true
      },
      {
        id: 'investor',
        label: 'Investor'
      }
    ]
  };

  isLoading = false;

  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  sendRequest() {
    
  }

}
