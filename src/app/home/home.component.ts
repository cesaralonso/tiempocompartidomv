import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { contentHeaders } from "../shared/headers";

import { HomeService } from "./home.service";
import { Property } from "../shared/property.model";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destacadas: Property[];
  msgError: string;
  msgSuccess: string;

  constructor(public http: Http, private service: HomeService) { }

  ngOnInit() {
    this.getDestacadas();
  }

  getDestacadas() {
    this.service.getDestacadas()
                .subscribe(
                  destacadas => this.destacadas = destacadas,
                  error => this.msgError = error);
  }

}
