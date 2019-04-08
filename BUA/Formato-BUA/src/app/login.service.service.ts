import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../environments/environment';
//import { isDevMode } from '@angular/core';  
@Injectable({
  providedIn: "root"
})

export class LoginService { 
  constructor(private http: HttpClient) {}

  login(usuario, clave, app, accion) {
    
    const httpOptions =environment.httpOptions;        
    const serviceEndpoint: string = environment.serviceEndpoint;
    return this.http.post(serviceEndpoint+accion, 
        { usuario,
          clave,
          app,
          httpOptions        
      })
    }
    /*if (isDevMode()) {
      //('Desarrollo!')
    } else {
      //('Producción!')    
    }*/
}