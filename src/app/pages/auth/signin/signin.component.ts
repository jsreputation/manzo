import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'manzo-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  icons = {
    email: faEnvelope,
    password: faLock
  };

  isLoading = false;

  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  navigateToSignUp() {
    this.router.navigate(['request']);
  }

  navigateToForgot() {
    this.router.navigate(['forgotpassword'])
  }

  signIn() {

  }

}
