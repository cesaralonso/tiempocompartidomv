import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PropertyComponent } from './property/property.component';
import { SearchComponent } from './search/search.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'about-us', component: AboutUsComponent }, 
  { path: 'property', component: PropertyComponent, canActivate: [AuthGuard] }, 
  { path: 'search', component: SearchComponent }, 
  { path: 'faqs', component: FaqsComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}