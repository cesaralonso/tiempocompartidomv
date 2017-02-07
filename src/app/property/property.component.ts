import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService} from './property.service';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(private route: ActivatedRoute,
     private router: Router, private propertyService: PropertyService ) { }

  msgError: string;

  ngOnInit() {
        // Recogemos los parametros de la URL
         this.route.params.subscribe(params => {
            if(params['id']!=null){
                console.log("params",params);
                this.propertyService.getMembresiaById(params['id'])
                .subscribe(
                    propiedad => console.log(propiedad),
                    error => this.msgError = error);
            }
 
         });
  }

}
