import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login.service.service";
import { InicioComponent } from './inicio/inicio.component';
import { PeritoComponent } from './perito/perito.component';
import { BasicaComponent } from './basica/basica.component';
import { BarrioComponent } from './barrio/barrio.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { ConstruccionComponent } from './construccion/construccion.component';
import { ConsinmueblComponent } from './consinmuebl/consinmuebl.component';
import { ContruestComponent } from './contruest/contruest.component';
import { ContrucalComponent } from './contrucal/contrucal.component';
import { ProphorzComponent } from './prophorz/prophorz.component';
import { DotacioncComponent } from './dotacionc/dotacionc.component';
import { OferdemaComponent } from './oferdema/oferdema.component';
import { AmbientalComponent } from './ambiental/ambiental.component';
import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { ObservacionesComponent } from './observaciones/observaciones.component';
import { FirmasComponent } from './firmas/firmas.component';
import { AnexosComponent } from './anexos/anexos.component';
import { CierreComponent } from './cierre/cierre.component';
import { ConexionService } from "./conexion.service";
import { connect } from "./connect";
@NgModule({
  declarations: [AppComponent, LoginComponent, InicioComponent, PeritoComponent, BasicaComponent, BarrioComponent, InmuebleComponent, ConstruccionComponent, ConsinmueblComponent, ContruestComponent, ContrucalComponent, ProphorzComponent, DotacioncComponent, OferdemaComponent, AmbientalComponent, LiquidacionComponent, ObservacionesComponent, FirmasComponent, AnexosComponent, CierreComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LoginService,ConexionService,connect],
  //providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule {}
