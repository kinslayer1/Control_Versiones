import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["/"]);
    } else {
      this.cargarDatos();
    }
  }
  private cargarDatos() {
    let tokenAutorizacion: string = environment.tokenAutorizacion;
    let nombre: string = environment.nombre;
    let token = JSON.parse(localStorage.getItem('id_token'));    
    var tokenSplit = token["tokenAutorizacion"].split(".");        
    tokenAutorizacion = atob(tokenSplit[1]);
    var tokenJson = JSON.parse(tokenAutorizacion);
    nombre = tokenJson["nombre"];
    alert(nombre);

  }
  nextPage() {
    this.router.navigate(["/perito"]);
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
}
