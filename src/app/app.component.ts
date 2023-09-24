import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaNunezEvelina';
  aprobado : boolean= true;

  resaltarAprobados():object{
    return {
      backgroundColor : this.aprobado ?  'green' : 'red',
    }
  }
}
