import { Component, OnInit } from '@angular/core';
// Importamos la clase del servicio
import {PaisesService} from '../dbrequests/readData.service';
 

@Component({
  selector: 'app-nombre-del-componente',
  templateUrl: './nombre-del-componente.component.html',
  styleUrls: ['./nombre-del-componente.component.css'],
  providers:[PaisesService]
})
export class NombreDelComponenteComponent implements OnInit {

   dato = 'Creando componentes para DesarrolloWeb.com';

   arrayClases = ['positivo', 'si'];

   preguntasObj = [
    {
      pregunta: '¿España ganará la Euro 2016?',
      si: 22,
      no: 95
    },
    {
      pregunta: '¿Estás aprendiendo Angular 2 en DesarrolloWeb?',
      si: 262,
      no: 3
    },
    {
      pregunta: '¿Has hecho ya algún curso en EscuelaIT?',
      si: 1026,
      no: 1
    }
  ]

  ngOnInit() {;
  }

}
