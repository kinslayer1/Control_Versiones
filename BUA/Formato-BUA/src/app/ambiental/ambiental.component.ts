import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-ambiental',
  templateUrl: './ambiental.component.html',
  styleUrls: ['./ambiental.component.css']
})
export class AmbientalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/liquidacion']);
   return false;
  }
}
