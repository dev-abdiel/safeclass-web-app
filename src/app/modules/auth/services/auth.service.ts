import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { AuthData } from '../interfaces/auth.interface';
import { map, Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private _auth: AuthData | undefined;

  get auth(): AuthData {
    return {...this._auth!};
  }

  constructor(private htpp: HttpClient) { }

  verifyAuth(): Observable<boolean> {

    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.htpp.get<AuthData | null>(
      `${this.baseUrl}/users/get-user-by-id`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }
    ).pipe(map((data) => {
      if (data === null) {
        return false;
      }

      this._auth = data;
      return true;
    }));
  }

  login(numberOrEmail: string, password: string) {
    return this.htpp.post<AuthData | null>(`${this.baseUrl}/auth/login`, {
      numberOrEmail,
      password
    })
      .pipe( tap( (response) => {
        if (response !== null) {
          localStorage.setItem('token', response.token);
          this._auth = response;
        }
        return response;
      }));
  }
}
