import { Component } from '@angular/core';

import {sql} from '../../../../node_modules/mssql'
import {tedious} from '../../../../node_modules/tedious'
import {async} from '../../../../node_modules/async' 

declare const myTest: any;
/*
declare var require: any;

require('../../../../node_modules/mssql');
require('../../../../node_modules/tedious');
require('../../../../node_modules/async');


const sql = require('../../../../node_modules/mssql')
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  onClick() {
    myTest();
  }
  conexion(){
  var Connection = sql.Connection;
  }
}
