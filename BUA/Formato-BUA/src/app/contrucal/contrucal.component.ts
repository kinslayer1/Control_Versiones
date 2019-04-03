import { Component, OnInit, Input } from '@angular/core';
import {Router} from "@angular/router"
import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
  selector: 'app-contrucal',
  templateUrl: './contrucal.component.html',
  styleUrls: ['./contrucal.component.css']
})
export class ContrucalComponent implements OnInit {
  @Input() pisos;

  constructor(private router: Router) { }
  ngOnInit() {
  }
  nextPage(contactForm){
    alert("pisos:"+contactForm.pisos.value + contactForm.muros.value
    +contactForm.carpmetal.value
    +contactForm.cocina.value
    +contactForm.techos.value
    +contactForm.carpmadera.value
    +contactForm.banos.value );
    this.router.navigate(['/prophorz']);
   return false;
  }


}
