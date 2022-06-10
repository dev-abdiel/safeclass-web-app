import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { HomeService } from '../../services/home.service';
import { Subject } from '../../interfaces/subject.interface';
import { User } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: Subject[] = [];
  userData: User | null = null;
  loadedUsers: User[] = [];
  shownUsers: string = '';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.userData = this.homeService.authData.user;
    
    this.homeService.getSubjects()
    .subscribe((resp) => {
      if (resp !== null) {
        this.subjects = resp.subjects;
      }
    });
  }

  getUsersByType(type: string) {

    if (type == this.shownUsers) {
      this.loadedUsers = [];
      this.shownUsers = '';
      return;
    }

    this.shownUsers = type;
    this.homeService.getUsersByType(type).subscribe((resp) => {
      if (resp !== null) {
        const { users } = resp;
        this.loadedUsers = users;
      }
    });

  }

}
