import { Injectable }           from '@angular/core';
import { Router, 
         CanActivate,
         ActivatedRouteSnapshot, 
         RouterStateSnapshot }  from '@angular/router';
import { tokenNotExpired }      from 'angular2-jwt';
import { Observable }           from 'rxjs/Rx';
import { AuthService }          from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (tokenNotExpired()) {
      return true;
    }
    this.deleteLocalStorage;
    this.router.navigate(['/login']);
    return false;
  }
  
  //Eliminar localstorage
  deleteLocalStorage() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_role');
  }

}