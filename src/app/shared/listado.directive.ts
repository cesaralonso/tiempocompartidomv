import { Directive, Input, ElementRef, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appListado]'
})
export class ListadoDirective implements OnInit {

  @Input() membresia = "red"; 

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    this.elementRef.nativeElement.style.backgroundColor = this.membresia;


    console.log("qwe",this.elementRef.nativeElement);
    console.log(" this.membresia", this.membresia);

  }




}
