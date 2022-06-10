import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ProfileImageComponent
  ],
  exports: [
    SidebarComponent,
    ProfileImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
