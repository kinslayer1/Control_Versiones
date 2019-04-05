import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})

export class LoginService { 
  constructor(private http: HttpClient) {}

  login(usuario, clave, app) {
    const httpOptions : any    = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Credentials" : "true",
        'Access-Control-Allow-Headers': 'origin, content-type, accept, authorization',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Origin': '*',
        'Content-Type':  'application/json'
      })      
    };       
    const restService="http://canaloficinas02desa:7003/PJBA_ManejoIdentidad_AutenticarRest/resources/Autenticar";
    return this.http.post(restService, 
      { usuario,
        clave,
        app,
        httpOptions,
        reportProgress: true,
        responseType:'json' 
    })
  }
}