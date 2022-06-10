import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForgotPasswordComponent } from "./modules/auth/pages/forgot-password/forgot-password.component";
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { SettingsComponent } from './modules/dashboard/pages/settings/settings.component';
import { AuthGuard } from './modules/auth/guard/auth.guard';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full',
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            }
        ],
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {}