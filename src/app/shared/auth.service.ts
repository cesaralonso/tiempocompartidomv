import { Injectable }     from "@angular/core";
import { User }           from "./user.interface";
import { Http, Headers }  from "@angular/http";
import { Router }         from "@angular/router";
import { contentHeaders } from "./headers";


import { Observable } from "rxjs/Observable";

import { AuthHttp, 
         AuthConfig, 
         AUTH_PROVIDERS, 
         JwtHelper }      from 'angular2-jwt';

@Injectable()
export class AuthService {

  private base = 'http://localhost/ngtiempocompartido/api/v1/login';
  public username: string;

  jwtHelper: JwtHelper = new JwtHelper();
  

  constructor(private router: Router, public http: Http) {}

  signinUser(user: User) {

    console.log("user", user);

    let body = JSON.stringify({ login: { user: user.username, email: user.email, password: user.password } });
    this.http.post(this.base, body, { headers: contentHeaders })
      .subscribe(
        response => {

          this.deleteLocalStorage();
          console.log("response", response.json());

          localStorage.setItem('id_token', response.json().token);
          localStorage.setItem('user_id', response.json().user.id);
          localStorage.setItem('user_name', response.json().user.nombre);
          localStorage.setItem('user_email', response.json().user.email);

          console.log("localStorage", localStorage);

          this.username = response.json().user.nombre;

          this.router.navigate(['/about-us']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  deleteLocalStorage(): any {
    console.log("id_token", localStorage.getItem('id_token'));
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    this.username = null;
    return true;
  }

  logout() {
    this.deleteLocalStorage();
    this.router.navigate(['/login']);
  }
  
  getUserName() {
    let user_name = localStorage.getItem('user_name');
    if (user_name) {
      return user_name;
    } else {
      return 'Guest';
    }
  }

  getUserId(): any {
    let user_id = localStorage.getItem('user_id');
    if (user_id) {
      return user_id;
    } else {
      return false;
    }
  }

  useJwtHelper() {
    var token = localStorage.getItem('id_token');
    return this.jwtHelper.decodeToken(token);
  }

  isAuthenticated() {
    var id_token  = localStorage.getItem('id_token');
    if (id_token) {
      return true;
    } else {
      return false;
    }
  }


}
