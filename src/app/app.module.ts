import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule }   from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PropertyComponent } from './property/property.component';
import { SearchComponent } from './search/search.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LoginComponent } from './login/login.component';

import { AgmCoreModule } from "angular2-google-maps/core";
import { ModalModule } from 'ng2-bootstrap/modal';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService }  from "./shared/auth.service";
import { HomeService }  from "./home/home.service";
import { AuthGuard }  from './shared/auth.guard';
import { AuthModule }  from './auth.module';


import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    PropertyComponent,
    SearchComponent,
    FaqsComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBStlVPD2HoAEH4bq4YhHXrLFiTEYqZdAE',
      libraries: ["places"]
    }),
    AuthModule
  ],

  providers: [
    AuthGuard,
    AuthService,
    HomeService,
    AuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
