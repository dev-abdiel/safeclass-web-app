import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './presentation/pages/home/home.component';
import { SettingsComponent } from './presentation/pages/settings/settings.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SettingsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    SettingsComponent,
    DashboardComponent
  ],
})
export class DashboardModule { }
