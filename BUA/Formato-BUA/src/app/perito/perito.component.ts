import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-perito',
  templateUrl: './perito.component.html',
  styleUrls: ['./perito.component.css']
})
export class PeritoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
 nextPage(){   
   this.router.navigate(['/basica']);
  return false;
 }
}
