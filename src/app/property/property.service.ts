import { Injectable }     from "@angular/core";
import { Http, Headers }  from "@angular/http";
import { Router }         from "@angular/router";
import { contentHeaders } from "../shared/headers";

import { Property } from "../shared/property.model";

import { Observable } from "rxjs/Rx";

import { AuthHttp, 
         AuthConfig, 
         JwtHelper }      from 'angular2-jwt';

@Injectable()
export class PropertyService {

  base = 'http://localhost/ngtiempocompartido/api/v1/';

  jwtHelper: JwtHelper = new JwtHelper();
  
  constructor( private router: Router, public http: Http, private authHttp: AuthHttp) {}

  getMembresiaById(id: number): Observable<Property[]> {
    return this.authHttp.get(this.base + 'propiedad/' + id )
                    .map(res => res.json().data)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
