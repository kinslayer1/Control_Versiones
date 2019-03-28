import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-basica',
  templateUrl: './basica.component.html',
  styleUrls: ['./basica.component.css']
})
export class BasicaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 nextPage(){   
   this.router.navigate(['/barrio']);
  return false;
 }
}
