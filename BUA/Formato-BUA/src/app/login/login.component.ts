import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service.service";
import {Router} from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit() {}
  
  logIn(event) {
    event.preventDefault();     
    const  target = event.target;
    const username = target.querySelector("#usuario").value;
    const password = target.querySelector("#password").value;
    const tipoAplicacion = "RACF";    
    this.loginService.login(username, password, tipoAplicacion).subscribe(
      res => {
       console.log(res);
      },
      error => {
        console.error(error);
      },
      () => this.navigate()
    );
}  
  navigate() {   
   this.router.navigate(['/inicio']);   
  }
}
