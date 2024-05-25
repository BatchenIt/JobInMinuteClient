import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AboutUsComponent } from './components/about-us/about-us/about-us.component';

export const routes: Routes = [
    // { path: '**', component: HomeComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signIn', component: SignInComponent },
    { path: 'aboutUs', component: AboutUsComponent }
];
