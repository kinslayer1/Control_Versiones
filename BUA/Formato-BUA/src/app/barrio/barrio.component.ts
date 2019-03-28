import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.component.html',
  styleUrls: ['./barrio.component.css']
})
export class BarrioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 nextPage(){   
   this.router.navigate(['/login']);
  return false;
 }
}
