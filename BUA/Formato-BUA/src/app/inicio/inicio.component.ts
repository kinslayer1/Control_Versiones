import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   nextPage(){   
   this.router.navigate(['/perito']);
   /*if (pagina ="L"){
   this.router.navigate(['/inicio']);
   }*/
   /*
   switch(case) { 
   case case.id=1: { 
      //statements; 
      this.router.navigate(['/inicio']);
      break; 
   } 
   case case.id=1:: { 
      //statements; 
      this.router.navigate(['/login']);
      break; 
   } 
} 
*/
  return false;
 }

}
