import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConexionService } from "../conexion.service";
import { environment } from "../../environments/environment";
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

  ngOnInit() {}
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

    this.ConexionService.conexion(
      EntidadAvaluadora,
      Direccion,
      Telefono,
      Banco,
      IdBanco,
      Departamento,
      Ciudad,
      Id_perito
    ).subscribe(
      (res: any) => {
        //Buscar la caducidad de la sesion
        //codRespuesta = res["codRespuesta"];
        codRespuesta=res;
        if (codRespuesta != null) {
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
}
