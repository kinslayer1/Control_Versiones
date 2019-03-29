import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-consinmuebl',
  templateUrl: './consinmuebl.component.html',
  styleUrls: ['./consinmuebl.component.css']
})
export class ConsinmueblComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nextPage(){   
    this.router.navigate(['/contruest']);
   return false;
  }
}
