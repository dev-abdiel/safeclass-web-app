import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForgotPasswordComponent } from "./modules/auth/presentation/pages/forgot-password/forgot-password.component";
import { LoginComponent } from './modules/auth/presentation/pages/login/login.component';
import { DashboardComponent } from './modules/dashboard/presentation/pages/dashboard/dashboard.component';
import { HomeComponent } from './modules/dashboard/presentation/pages/home/home.component';
import { SettingsComponent } from './modules/dashboard/presentation/pages/settings/settings.component';


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