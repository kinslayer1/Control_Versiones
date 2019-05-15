//DECLARACION DE VARIABLES PARA AMBIENTE DE PRUEBAS

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { HttpHeaders } from "@angular/common/http";
export const environment = {
  production: false,
  //END-POINT del servicio de autenticacion
  serviceEndpoint: "http://canaloficinas02desa:7003/PJBA_ManejoIdentidad_AutenticarRest/resources/",
  azureFunction: "http://canaloficinas02desa:7003/PJBA_ManejoIdentidad_AutenticarRest/resources/",
  //avaluoPerito: "http://localhost:8080/api/avaluo",
  avaluoPerito: "https://nodebua.azurewebsites.net/api/avaluo",
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
  //Constantes de la aplicacion
  autenticar:"Autenticar",
  autorizar:"Autorizar",
  //Variables de la aplicacion
  codRespuesta:"",
  descrRespuesta:"",
  tokenAutorizacion:"",
  token:"",
  nombre:"",
  exp:"",
  grupos:"",
  grupo:"",
  tokenGrupo:""
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
