import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/widgets/button/button.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { InputsModule } from 'src/app/widgets/inputs/inputs.module';


@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    AcceptRequestComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputsModule
  ]
})
export class AuthModule { }
