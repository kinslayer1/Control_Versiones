import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
//import { LoginService } from "./login.service.service";
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PeritoComponent } from './perito/perito.component';
import { BasicaComponent } from './basica/basica.component';
import { BarrioComponent } from './barrio/barrio.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perito', component: PeritoComponent },
  { path: 'basica', component: BasicaComponent },
  { path: 'barrio', component: BarrioComponent }
];
@NgModule({
  declarations: [AppComponent, LoginComponent, InicioComponent, PeritoComponent, BasicaComponent, BarrioComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  //providers: [LoginService],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule {}
