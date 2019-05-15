import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  
  constructor(private http: HttpClient) { }

  conexion(Entidad_avaluadora,Direccion,Telefono,Banco,Id_banco,Departamento,Ciudad,Id_perito){    
    const avaluoPerito: string = environment.avaluoPerito;   
    const httpOptions = environment.httpOptions;
    return this.http.post(avaluoPerito, {
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
}
