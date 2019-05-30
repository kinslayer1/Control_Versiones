import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  
  constructor(private http: HttpClient) { }

  //GUARDAR DATOS METODO POST
  conexion(opcion,Entidad_avaluadora,Direccion,Telefono,Banco,Id_banco,Departamento,Ciudad,Id_perito,FunctAPI){        
    const httpOptions = environment.httpOptions;
    return this.http.post(FunctAPI, {
      opcion,
      Entidad_avaluadora,
      Direccion,
      Telefono,
      Banco,
      Id_banco,
      Departamento,
      Ciudad,
      Id_perito,
      httpOptions
    });        
  }
  //LOGIN CONTRA LA BASE DE DATOS DE AZURE - METODO POST
  azureGET(opcion,lUsuario,lContrasenia,Departamento,Ciudad,FunctAPI){        
    const httpOptions = environment.httpOptions;
    return this.http.post(FunctAPI, {
      opcion,
      lUsuario,
      lContrasenia,
      Departamento,
      Ciudad,      
      httpOptions
    }); 
  }
}
