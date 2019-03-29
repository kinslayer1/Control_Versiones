import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-prophorz',
  templateUrl: './prophorz.component.html',
  styleUrls: ['./prophorz.component.css']
})
export class ProphorzComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/dotacionc']);
   return false;
  }

}
