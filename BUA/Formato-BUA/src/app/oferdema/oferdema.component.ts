import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-oferdema',
  templateUrl: './oferdema.component.html',
  styleUrls: ['./oferdema.component.css']
})
export class OferdemaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/inicio']);
   return false;
  }
}
