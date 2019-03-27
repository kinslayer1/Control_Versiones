import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-eventos',
  templateUrl: './componente-eventos.component.html',
  styleUrls: ['./componente-eventos.component.css']
})
export class ComponenteEventosComponent implements OnInit {
 users: string[] =['lola','santi'];
 name: string='Jhon';
 edad: number=20;

 sayhello(){
   alert('Hello');
 }
 borrarusuario(user){
   for(let i=0;i<this.users.length;i++){
     if(user==this.users[i]){
       this.users.splice(i,1);
     }
   }
 }
 agregarusuario(newuser){
  this.users.push(newuser.value);
  newuser.value='';
  newuser.focus();
  return false;
 }
  constructor() { }

  ngOnInit() {
  }

}
