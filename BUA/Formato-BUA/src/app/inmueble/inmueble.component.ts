import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/construccion']);
   return false;
  }

}
