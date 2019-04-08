import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service.service";
import {Router} from "@angular/router"
import { environment } from '../../environments/environment';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {}
  
  autenticar(event) {
    event.preventDefault(); 
        
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
       //ENCRIPTAR
       console.log(btoa("password"));
       //DECRIPTAR
       console.log(atob("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9"))
       console.log(atob("eyJhdXRlbnRpY2FjaW9uIjoiT0siLCJjZWR1bGEiOiI4MDA5NzQ3NiIsIm5vbV9jYXJnbyI6IkFOQUxJU1RBIEkiLCJpcCI6IjEwLjEwLjQ1LjQ5IiwiaXNzIjoiQVZWSUxMQVMiLCJjb2RfY2Nvc3RvIjoiMTYxMyIsIm5vbV9jY3NvdG8iOiJESVJFQ0MuUFJPWUVDVE9TIEFETUlOSVNUUkFUSVYiLCJjbiI6InNvbGluYXNjIiwibm9tYnJlIjoiQ2FybG9zIEFsYmVydG8gU29saW5hcyBEdWXDsWFzIiwiY2FyZ29fdG1wIjoiIiwiaWQiOiJJeE00a2JUT1JSM25tVHlWcnNHTjFnPT0iLCJjYXJnbyI6IjExNTUiLCJleHAiOjE1NTQ1MTI1MjYsImVtYWlsIjoic29saW5hc2NAYmFuY29hdnZpbGxhcy5jb20uY28iLCJjY29zdG9fdG1wIjoiIn0"))
       console.log(atob("ihEicc760bOZTsHGnzbEF4ZByNkwX9yRN43XdyerwEcLCwTOuXxcpRsSUxD8feThBqPxA1NYuHoyuzjIdShabw"))
       console.log(atob("k6aq+cuv3QxOwoM/MRu7k3ZOirqd6Uzs+nPd7uodx+VqbvXBv+2jlhMMlVHIZYMtnE+d8av1E/9W3pvqgPsOTgCpKykTU7KToICrLzhJdxBBrAGiqulbFui3r5ElDrMO"))
       
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
}
