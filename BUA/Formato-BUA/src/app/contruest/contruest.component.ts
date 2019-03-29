import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-contruest',
  templateUrl: './contruest.component.html',
  styleUrls: ['./contruest.component.css']
})
export class ContruestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/inicio']);
   return false;
  }
}
