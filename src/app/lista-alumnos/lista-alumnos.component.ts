import { Component } from '@angular/core';
import { Alumno } from './alumno.interface';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos : Alumno[] = [
       {
          nombre: 'Evelina',
          apellido: 'Nuñez',
          edad: 33,
          fechaIngreso: new Date(),
          calificacion: true,
          dni: 2345678,
        },
        {
          nombre: 'Jesica',
          apellido: 'Caceres',
          edad: 36,
          fechaIngreso: new Date(),
          calificacion: true,
          dni: 2334455,
        },
        {
          nombre: 'Cristina',
          apellido: 'Nuñez',
          edad: 45,
          fechaIngreso: new Date(),
          calificacion: true,
          dni: 1233666,
          },
  ]


  resaltarDesaprobados(){

  }
  }

