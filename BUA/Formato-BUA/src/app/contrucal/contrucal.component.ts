import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-contrucal',
  templateUrl: './contrucal.component.html',
  styleUrls: ['./contrucal.component.css']
})
export class ContrucalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/prophorz']);
   return false;
  }
}
