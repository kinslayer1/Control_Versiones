import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-construccion',
  templateUrl: './construccion.component.html',
  styleUrls: ['./construccion.component.css']
})
export class ConstruccionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/consinmuebl']);
   return false;
  }
}
