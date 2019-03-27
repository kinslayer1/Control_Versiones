import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {

  constructor() { }
   title ='COMPONENTE DOS';
   tipo_id = ['cc','ce','nit'];
  ngOnInit() {
  }

}
