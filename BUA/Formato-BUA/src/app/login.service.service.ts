
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post("http://canaloficinas02desa:7003/PJBA_ManejoIdentidad_AutenticarRest/resources/Autenticar", {
      usuario: '80097476',
      clave: 'PWd12345',
      app:'RACF'      
      //VALIDAR CODIGO DE APLICACION IDM Y CREDITO HIP
    });
  }
}