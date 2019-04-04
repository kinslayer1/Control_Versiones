import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service.service";
import {Router} from "@angular/router"

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {
  //constructor(private router: Router){    
  }

 nextPage(user, pss){   
  if (user.value=='pruebas'){
    if(pss.value=='pruebas'){
    this.router.navigate(['/inicio']);
    }else {
      alert('Clave invalida')  
    }
  }else {
    alert('Usuario invalido')
  }
  return false;
 }
  ngOnInit() {
    this.loginService.login("peter@klaven", "cityslicka").subscribe(res => {
      console.log(res);
    });
  }

  
  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest    
    this.loginService.login(username, password).subscribe(

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
   this.router.navigateByUrl('./inicio/inicio.component.html');
   console.log('ok')
  }
  
}
