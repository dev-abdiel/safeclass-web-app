import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  numberOrEmail: string = '';
  pwd: string = '';


  login() {
    if ( this.numberOrEmail.length >= 5 && this.pwd.length >= 5 ) {
      this.authService.login(this.numberOrEmail, this.pwd)
      .subscribe((resp) => {
        if (resp !== null) {
          this.router.navigate(['./dashboard/home']);
        }
      });
    }

  }


}
