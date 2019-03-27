import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-arreglos',
  templateUrl: './componente-arreglos.component.html',
  styleUrls: ['./componente-arreglos.component.css']
})
export class ComponenteArreglosComponent implements OnInit {
nombre: string ='Pruebas';
edad: number;
direccion :{
  calle: string;
  ciudad: string;
}
hobbies: string[];
  constructor() { 
    this.edad=18,
    this.direccion={
      calle:'avenida z',
      ciudad:'Bogota'
    };
    this.hobbies=['Leer', 'Jugar'];
  }

  ngOnInit() {
  }

}
