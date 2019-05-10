import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
//import { isDevMode } from '@angular/core';
@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(usuario, clave, app, accion) {
    const httpOptions = environment.httpOptions;
    const serviceEndpoint: string = environment.serviceEndpoint;
    return this.http.post(serviceEndpoint + accion, {
      usuario,
      clave,
      app,
      httpOptions
    });
  }
  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }
  public isLoggedIn(): boolean {
    var current_time = new Date().getTime() / 1000;
    var expira = localStorage.getItem("expires_at");
    if (expira != null) {
      if (current_time > parseInt(expira)) {
        return false;
      } else {        
        return true;
      }
    } else {
      return false;
    }
  }

  /*if (isDevMode()) {
      //('Desarrollo!')
    } else {
      //('Producción!')    
    }*/
}
