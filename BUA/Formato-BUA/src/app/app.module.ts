import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
//import { LoginService } from "./login.service.service";
import { InicioComponent } from './inicio/inicio.component';
import { PeritoComponent } from './perito/perito.component';
import { BasicaComponent } from './basica/basica.component';
import { BarrioComponent } from './barrio/barrio.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, InicioComponent, PeritoComponent, BasicaComponent, BarrioComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule
  ],
  //providers: [LoginService],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule {}
