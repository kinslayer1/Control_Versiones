//DECLARACION DE VARIABLES PARA AMBIENTE DE PRODUCCION

import { HttpHeaders } from "@angular/common/http";
export const environment = {
  production: true,
  //END-POINT del servicio de autenticacion
  serviceEndpoint: "http://canaloficinas02desa:7003/PJBA_ManejoIdentidad_AutenticarRest/resources/",
  //HEADERS de opciones
  httpOptions: {
    headers: new HttpHeaders({
      "Access-Control-Allow-Credentials" : "true",
      'Access-Control-Allow-Headers': 'origin, content-type, accept, authorization',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Origin': '*',
      'Content-Type':  'application/json'
    })      
  },
  //Variables tipo de peticion para el servicio de autenticacion
  autenticar:"Autenticar",
  autorizar:"Autorizar",
  //Variables respuesta del servicio de autenticacion
  codRespuesta:"",
  descrRespuesta:"",
  tokenAutorizacion:"",
  grupos:"",
  grupo:"",
  tokenGrupo:""
};
