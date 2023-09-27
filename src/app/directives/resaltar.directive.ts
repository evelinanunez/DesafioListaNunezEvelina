import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[ResaltarPipe]',
})
export class ResaltarPipe{
  constructor( public elementRef : ElementRef ,
              public renderer: Renderer2){
                this.resaltarString();
              }


  resaltarString(){
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'yellow'
      );
  }
}
