import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[calificacionPipe]',
})
export class CalificacionPipe{
  constructor( public elementRef : ElementRef ,
              public renderer: Renderer2){
                this.traerCalificacion();
              }

// también intente generar una directiva para poder cambiarlo con un setValue
// y no me lo toma, por lo unico que se me ocurre que no funcione es porque
// estoy seteando un booelano con un string.

  traerCalificacion(){
    if(this.elementRef){
      this.renderer.setValue(this.elementRef.nativeElement, 'Aprobado')
    }
    this.renderer.setValue(this.elementRef.nativeElement,'Desaprobado');
  }
}
