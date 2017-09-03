import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMydirect]'
})
export class MydirectDirective {

  constructor(elem: ElementRef) {
    console.log(elem); 
    elem.nativeElement.style.color = "Red";
   }
    
}
