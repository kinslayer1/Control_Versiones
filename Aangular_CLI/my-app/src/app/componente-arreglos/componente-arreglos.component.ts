import { Component, OnInit } from '@angular/core';


export interface Food {
  value: string;
  viewValue: string;
}
export interface depto {}
export interface ciudades {}
export interface ciudadesfil {}
@Component({
  selector: 'app-componente-arreglos',
  templateUrl: './componente-arreglos.component.html',
  styleUrls: ['./componente-arreglos.component.css']
})

export class ComponenteArreglosComponent implements OnInit {


foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  selected = 'option2';
nombre: string ='Pruebas';
edad: number;
direccion :{
  calle: string;
  ciudad: string;
};
name: string='Jhon';
selectedValue: string;
ciudadesfil=[] ;
ciudades=[
  { "ID_CIUD": 1,
    "ID_DEPTO": 5,
    "NOMBRE_CIU": "MEDELLIN"
  },
  { "ID_CIUD": 2,
  "ID_DEPTO": 5,
  "NOMBRE_CIU": "POBLADO"
}
];
depto =
[
  {
    "ID_DEPTO": 5,
    "NOMBRE_DEPTO": "ANTIOQUIA"
  },
  {
    "ID_DEPTO": 8,
    "NOMBRE_DEPTO": "ATLANTICO"
  },
  {
    "ID_DEPTO": 11,
    "NOMBRE_DEPTO": "BOGOTA"
  },
  {
    "ID_DEPTO": 13,
    "NOMBRE_DEPTO": "BOLIVAR"
  },
  {
    "ID_DEPTO": 15,
    "NOMBRE_DEPTO": "BOYACA"
  },
  {
    "ID_DEPTO": 17,
    "NOMBRE_DEPTO": "CALDAS"
  },
  {
    "ID_DEPTO": 18,
    "NOMBRE_DEPTO": "CAQUETA"
  },
  {
    "ID_DEPTO": 19,
    "NOMBRE_DEPTO": "CAUCA"
  },
  {
    "ID_DEPTO": 20,
    "NOMBRE_DEPTO": "CESAR"
  },
  {
    "ID_DEPTO": 23,
    "NOMBRE_DEPTO": "CORDOBA"
  },
  {
    "ID_DEPTO": 25,
    "NOMBRE_DEPTO": "CUNDINAMARCA"
  },
  {
    "ID_DEPTO": 27,
    "NOMBRE_DEPTO": "CHOCO"
  },
  {
    "ID_DEPTO": 41,
    "NOMBRE_DEPTO": "HUILA"
  },
  {
    "ID_DEPTO": 44,
    "NOMBRE_DEPTO": "LA GUAJIRA"
  },
  {
    "ID_DEPTO": 47,
    "NOMBRE_DEPTO": "MAGDALENA"
  },
  {
    "ID_DEPTO": 50,
    "NOMBRE_DEPTO": "META"
  },
  {
    "ID_DEPTO": 52,
    "NOMBRE_DEPTO": "NARIÑO"
  },
  {
    "ID_DEPTO": 54,
    "NOMBRE_DEPTO": "N. DE SANTANDER"
  },
  {
    "ID_DEPTO": 63,
    "NOMBRE_DEPTO": "QUINDIO"
  },
  {
    "ID_DEPTO": 66,
    "NOMBRE_DEPTO": "RISARALDA"
  },
  {
    "ID_DEPTO": 68,
    "NOMBRE_DEPTO": "SANTANDER"
  },
  {
    "ID_DEPTO": 70,
    "NOMBRE_DEPTO": "SUCRE"
  },
  {
    "ID_DEPTO": 73,
    "NOMBRE_DEPTO": "TOLIMA"
  },
  {
    "ID_DEPTO": 76,
    "NOMBRE_DEPTO": "VALLE DEL CAUCA"
  },
  {
    "ID_DEPTO": 81,
    "NOMBRE_DEPTO": "ARAUCA"
  },
  {
    "ID_DEPTO": 85,
    "NOMBRE_DEPTO": "CASANARE"
  },
  {
    "ID_DEPTO": 86,
    "NOMBRE_DEPTO": "PUTUMAYO"
  },
  {
    "ID_DEPTO": 88,
    "NOMBRE_DEPTO": "SAN ANDRES"
  },
  {
    "ID_DEPTO": 91,
    "NOMBRE_DEPTO": "AMAZONAS"
  },
  {
    "ID_DEPTO": 94,
    "NOMBRE_DEPTO": "GUAINIA"
  },
  {
    "ID_DEPTO": 95,
    "NOMBRE_DEPTO": "GUAVIARE"
  },
  {
    "ID_DEPTO": 97,
    "NOMBRE_DEPTO": "VAUPES"
  },
  {
    "ID_DEPTO": 99,
    "NOMBRE_DEPTO": "VICHADA"
  }
];

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
  putThings(){
     alert("ok");
  }
  onSelect(countryid) {  
    this.ciudadesfil = this.ciudades.filter((item)=>item.ID_DEPTO==countryid);
    //this._countryService.getStates().filter((item) => item.countryid == countryid);  
  }
}
