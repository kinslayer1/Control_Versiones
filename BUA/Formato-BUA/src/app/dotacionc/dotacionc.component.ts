import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-dotacionc',
  templateUrl: './dotacionc.component.html',
  styleUrls: ['./dotacionc.component.css']
})
export class DotacioncComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/oferdema']);
   return false;
  }
}
