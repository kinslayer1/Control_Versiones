import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post("http://candoshi.bancoavvillas.net:7778", {
      email: username,
      password: password
    });
  }
}
