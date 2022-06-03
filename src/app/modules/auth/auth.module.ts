import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
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
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
