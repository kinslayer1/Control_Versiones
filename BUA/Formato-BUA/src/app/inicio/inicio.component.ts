import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { LoginService } from "../login.service.service";
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //constructor(private loginService: LoginService, private router: Router) { }
  constructor(private router: Router) { }
  ngOnInit() {
  }

 nextPage(){   
   this.router.navigate(['/perito']);
  return false;
 }
   /*if (pagina ="L"){
   this.router.navigate(['/inicio']);
   }*/
   /*
   switch(case) { 
   case case.id=1: { 
      //statements; 
      this.router.navigate(['/inicio']);
      break; 
   } 
   case case.id=1:: { 
      //statements; 
      this.router.navigate(['/login']);
      break; 
   } 
} 
*/

/*
 autorizar(event) {
   event.preventDefault(); 
   //Manejo del elemento cargando    
   const  target = event.target;
   var div = target.querySelector("#contenedor");
   div.style.display = "block";

   const username = target.querySelector("#usuario").value;
   const password = target.querySelector("#password").value;
   const tipoAplicacion = "RACF"; 
   
   const autenticar: string = environment.autenticar;
   let codRespuesta: string = environment.codRespuesta;
   let descrRespuesta: string = environment.descrRespuesta;

   this.loginService.login(username, password, tipoAplicacion, autenticar).subscribe(
     (res: any) => {                    
      console.log(btoa("password"));
      console.log(atob("eyJhdXRlbnRpY2FjaW9uIjoiT0siLCJjZWR1bGEiOiI4MDA5NzQ3NiIsIm5vbV9jYXJnbyI6IkFOQUxJU1RBIEkiLCJpcCI6IjEwLjEwLjQ1LjQ5IiwiaXNzIjoiQVZWSUxMQVMiLCJjb2RfY2Nvc3RvIjoiMTYxMyIsIm5vbV9jY3NvdG8iOiJESVJFQ0MuUFJPWUVDVE9TIEFETUlOSVNUUkFUSVYiLCJjbiI6InNvbGluYXNjIiwibm9tYnJlIjoiQ2FybG9zIEFsYmVydG8gU29saW5hcyBEdWXDsWFzIiwiY2FyZ29fdG1wIjoiIiwiaWQiOiJJeE00a2JUT1JSM25tVHlWcnNHTjFnPT0iLCJjYXJnbyI6IjExNTUiLCJleHAiOjE1NTQ1MTI1MjYsImVtYWlsIjoic29saW5hc2NAYmFuY29hdnZpbGxhcy5jb20uY28iLCJjY29zdG9fdG1wIjoiIn0"))
      
      codRespuesta=res["codRespuesta"];
      descrRespuesta=res["descrRespuesta"];
      if(codRespuesta !="0"){
        alert(descrRespuesta);         
      }else{        
       this.navigate();
      }
      div.style.display = "none";
     },
     error => {
       console.error(error);
       div.style.display = "none";
     }      
   );
}  
 navigate() {   
  this.router.navigate(['/inicio']);   
 }
*/
}
