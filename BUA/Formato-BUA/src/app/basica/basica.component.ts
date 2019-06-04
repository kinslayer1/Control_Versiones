import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ConexionService } from "../conexion.service";
import { environment } from "../../environments/environment";
export interface tipo_id {}
@Component({
  selector: 'app-basica',
  templateUrl: './basica.component.html',
  styleUrls: ['./basica.component.css']
})
export class BasicaComponent implements OnInit {

  constructor(private router: Router, private ConexionService: ConexionService) {
   }
   tipo_id =[];
  ngOnInit() {
    this.cargarDatos();
  }
 nextPage(){   
   this.router.navigate(['/barrio']);
  return false;
 }
 cargarDatos(){
  const FunctAPI2: string = environment.FunctAPI2; 
  let opcion =4;
  this.ConexionService
    .azureGET(opcion,'','','','',FunctAPI2)
    .subscribe(
      (res: any) => {          
        this.tipo_id= res;
      },
      error => {
        console.error(error);          
      }
    );
 }
}
