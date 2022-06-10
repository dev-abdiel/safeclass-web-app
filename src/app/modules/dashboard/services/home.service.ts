import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { AuthData, Users } from '../../auth/interfaces/auth.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Subjects } from '../interfaces/subject.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = environment.baseUrl;

  get authData():AuthData {
    return this.authService.auth;
  }

  constructor(private authService: AuthService, private http: HttpClient) { }

  getSubjects() {
    let url: string = `${this.baseUrl}/subjects`;

    if (this.authData.user.type != 'administrative') {
      url += '/get-subjects-by-user';
    } else {
      url += '/get-entire-subjects';
    }

    return this.http.get<Subjects | null>(
      url, 
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }

  getUsersByType(type: string) {
    return this.http.post<Users | null>(
      `${this.baseUrl}/users/get-users-by-type`,
      {
        type
      },
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
}
