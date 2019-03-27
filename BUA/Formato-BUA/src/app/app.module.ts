import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login.service.service";
import { Route } from "@angular/router";
import { InicioComponent } from './inicio/inicio.component';

const routes: Route[] = [
  { path: "login", component: LoginComponent, pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, InicioComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {}
