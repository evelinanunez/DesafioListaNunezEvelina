import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.interface';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  mostrarMensaje: boolean = false;

  alumnos : Alumno[] = [
       {
          nombre: 'Evelina',
          apellido: 'Nuñez',
          edad: 33,
          fechaIngreso: new Date(),
          calificacion: true,
          dni: 2345678,
          sexo: 'F',
        },
        {
          nombre: 'Jesica',
          apellido: 'Caceres',
          edad: 36,
          fechaIngreso: new Date(),
          calificacion: true,
          dni: 2334455,
          sexo: 'F',
        },
        {
          nombre: 'Cristina',
          apellido: 'Nuñez',
          edad: 45,
          fechaIngreso: new Date(),
          calificacion: true,
          dni: 1233666,
          sexo: 'O',
          },
          {
            nombre: 'Cleopatra',
            apellido: 'Reina del Nilo',
            edad: 2,
            fechaIngreso: new Date(),
            calificacion: false,
            dni: 54321,
            sexo: 'F',
            },
            {
              nombre: 'Patricio',
              apellido: 'Rey',
              edad: 23,
              fechaIngreso: new Date(),
              calificacion: false,
              dni: 3456,
              sexo: 'S',
              },


  ]




  }

