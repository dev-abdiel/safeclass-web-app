import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForgotPasswordComponent } from "./modules/auth/presentation/pages/forgot-password/forgot-password.component";
import { LoginComponent } from './modules/auth/presentation/pages/login/login.component';


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