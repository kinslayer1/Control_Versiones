import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service.service";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {}
  //Autentica haciendo el llamado al servicio REST-Autenticar
  autenticar(event) {
    event.preventDefault();
    const target = event.target;
    var div = target.querySelector("#contenedor");
    div.style.display = "block";
    const username = target.querySelector("#usuario").value;
    const password = target.querySelector("#password").value;
    const tipoAplicacion = "RACF";
    const autenticar: string = environment.autenticar;
    let codRespuesta: string = environment.codRespuesta;
    let descrRespuesta: string = environment.descrRespuesta;
    let tokenAutorizacion: string = environment.tokenAutorizacion;
    let exp: string = environment.exp;
    
    //usuario dummy INICIO
    var current_time = new Date().getTime() / 1000;   
    var caduc = current_time.toString;
    if (username == "BUA") {
        if (password == "BUA") {
          this.navigate();
          this.setSession("ok", caduc);
        }else{
          alert("Clave invalida");
          div.style.display = "none";  
        }
    } else {
      alert("Usuario invalido");
      div.style.display = "none";      
    }
    div.style.display = "none";
    //usuario dummy FIN

    /*
    this.loginService
      .login(username, password, tipoAplicacion, autenticar)
      .subscribe(
        (res: any) => {

          console.log(btoa("password"));
          //////////////DECRIPTAR////////////////
          //PAYLOAD - tokenAutorizacion
          console.log(
            atob(
              "eyJhdXRlbnRpY2FjaW9uIjoiT0siLCJjZWR1bGEiOiI4MDA5NzQ3NiIsIm5vbV9jYXJnbyI6IkFOQUxJU1RBIEkiLCJpcCI6IjEwLjEwLjQ1LjQ5IiwiaXNzIjoiQVZWSUxMQVMiLCJjb2RfY2Nvc3RvIjoiMTYxMyIsIm5vbV9jY3NvdG8iOiJESVJFQ0MuUFJPWUVDVE9TIEFETUlOSVNUUkFUSVYiLCJjbiI6InNvbGluYXNjIiwibm9tYnJlIjoiQ2FybG9zIEFsYmVydG8gU29saW5hcyBEdWXDsWFzIiwiY2FyZ29fdG1wIjoiIiwiaWQiOiJJeE00a2JUT1JSM25tVHlWcnNHTjFnPT0iLCJjYXJnbyI6IjExNTUiLCJleHAiOjE1NTQ1MTI1MjYsImVtYWlsIjoic29saW5hc2NAYmFuY29hdnZpbGxhcy5jb20uY28iLCJjY29zdG9fdG1wIjoiIn0"
            )
          );          

          //Buscar la caducidad de la sesion
          var tokenSplit = res["tokenAutorizacion"].split(".");
          tokenAutorizacion = atob(tokenSplit[1]);
          var tokenJson = JSON.parse(tokenAutorizacion);
          exp = tokenJson["exp"];
          codRespuesta = res["codRespuesta"];
          descrRespuesta = res["descrRespuesta"];
          if (codRespuesta != "0") {
            alert(descrRespuesta);
          } else {
            this.navigate();
            this.setSession(res, exp);
          }
          div.style.display = "none";
        },
        error => {
          console.error(error);
          div.style.display = "none";
        }
      );*/
  }
  //Guarda la sesion en almacenamiento local
  private setSession(authResult, expire) {
    localStorage.setItem("id_token",  JSON.stringify(authResult));
    localStorage.setItem("expires_at", expire);
  }
  //Enruta a la pagina de inicio
  navigate() {
    this.router.navigate(["/inicio"]);
  }
}
