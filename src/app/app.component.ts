import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public username;

  constructor(private authService: AuthService) {}

  logout() {

    this.authService.logout();

  }

  ngOnInit() {

    this.username = this.authService.getUserName();

  }


}