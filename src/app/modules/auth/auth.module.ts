import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './presentation/pages/login/login.component';
import { ForgotPasswordComponent } from './presentation/pages/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  exports: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
