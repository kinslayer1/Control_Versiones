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
    //const serviceEndpoint: string = environment.serviceEndpoint;
    //return this.http.post(serviceEndpoint + accion, {
    const azureFunction: string = environment.azureFunction;
    return this.http.post(azureFunction + accion, {
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
  aurotizar() {
    let token: string = environment.token;
    token = JSON.parse(localStorage.getItem('id_token'));
    var tokenSplit = token["tokenAutorizacion"].split(".");
    /*
    tokenAutorizacion = atob(tokenSplit[1]);
    var tokenJson = JSON.parse(tokenAutorizacion);
    nombre = tokenJson["nombre"];
    this.refreshExp();
    */
  }
  //Refrescar caducidad de la sesion
  refreshExp() {
    var current_time: any = new Date().getTime() / 1000;
    localStorage.setItem("expires_at", current_time);
  }
  /*if (isDevMode()) {
      //('Desarrollo!')
    } else {
      //('Producción!')    
    }*/
}
