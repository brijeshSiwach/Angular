import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { myGuardGuard } from './Guards/my-guard.guard';

export const routes: Routes = [
    {path: "", component: TemplateformComponent},
    // {path: "login", component: UserLoginComponent},
    // {path: "signup", component: UserSignUpComponent},
    {
        path: "login", 
        loadComponent: () => import('./user-login/user-login.component').then(mod => mod.UserLoginComponent),
        canActivate: [myGuardGuard]
    },
    {path: "signup", loadComponent: () => import('./user-sign-up/user-sign-up.component').then(mod => mod.UserSignUpComponent)}
];
