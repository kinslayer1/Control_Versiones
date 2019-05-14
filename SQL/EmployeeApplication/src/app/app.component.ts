import { Component } from '@angular/core';
//import * as abcJS from '../assets/connect';
//declare var Querydb: any;

//declare const myTest: any;
//import * as ext from '../assets/connect.js';
//declare const hello: any;
declare const myTest: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'EmployeeApplication';
  onClick() {
    //Insert();    
    myTest();
  }    
}


