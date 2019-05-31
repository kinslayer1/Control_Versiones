import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConexionService } from "../conexion.service";
import { environment } from "../../environments/environment";
export interface departamentos {}
export interface ciudades {}
@Component({
  selector: "app-perito",
  templateUrl: "./perito.component.html",
  styleUrls: ["./perito.component.css"]
})
export class PeritoComponent implements OnInit {
  constructor(
    private router: Router,
    private ConexionService: ConexionService
  ) {}
selectedValue: string;
ciudades =[];
departamentos =[];
  ngOnInit() {
    this.cargarDatos();
  }
  nextPage(event) {
    event.preventDefault();
    const target = event.target;
    //var div = target.querySelector("#contenedor");
    //div.style.display = "block";
    const EntidadAvaluadora = target.querySelector("#EntidadAvaluadora").value;
    const Direccion = target.querySelector("#Direccion").value;
    const Telefono = target.querySelector("#Telefono").value;
    const Banco = target.querySelector("#Banco").value;
    const IdBanco = target.querySelector("#IdBanco").value;
    const Departamento = target.querySelector("#Departamento").value;
    const Ciudad = target.querySelector("#Ciudad").value;
    const Id_perito = 1;
    let codRespuesta: string = environment.codRespuesta;
    const FunctAPI: string = environment.FunctAPI;   
    let status: string='';
    let opcion =1;
    this.ConexionService.conexion(
      opcion,
      EntidadAvaluadora,
      Direccion,
      Telefono,
      Banco,
      IdBanco,
      Departamento,
      Ciudad,
      Id_perito,
      FunctAPI
    ).subscribe(
      (res: any) => {
        //Buscar la caducidad de la sesion        
        codRespuesta=res;
        status = codRespuesta["status"];
        if (status != '200') {
          alert("Error al grabar informacion");
        } else {
          this.navigate();
        }
        //div.style.display = "none";
      },
      error => {
        console.error(error);
        //div.style.display = "none";
      }
    );
  }
  navigate() {
    this.router.navigate(["/basica"]);
  }
  cargarDatos(){
    const FunctAPI2: string = environment.FunctAPI2; 
    let opcion =2;
    this.ConexionService
      .azureGET(opcion,'','','','',FunctAPI2)
      .subscribe(
        (res: any) => {          
          this.departamentos= res; 
        },
        error => {
          console.error(error);          
        }
      );
      opcion =3;
      this.ConexionService
        .azureGET(opcion,'','','','',FunctAPI2)
        .subscribe(
          (res: any) => {          
            this.ciudades= res;         
          },
          error => {
            console.error(error);          
          }
        );
  }
}
