import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { 
   console.log('servicio trabajando');
  }
  obtenerData(){
  return this.httpclient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
