import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
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
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perito', component: PeritoComponent },
  { path: 'basica', component: BasicaComponent },
  { path: 'barrio', component: BarrioComponent },
  { path: 'inmueble', component: InmuebleComponent },
  { path: 'construccion', component: ConstruccionComponent },
  { path: 'consinmuebl', component: ConsinmueblComponent },
  { path: 'contruest', component: ContruestComponent },
  { path: 'contrucal', component: ContrucalComponent },
  { path: 'prophorz', component: ProphorzComponent },
  { path: 'dotacionc', component: DotacioncComponent },
  { path: 'oferdema', component: OferdemaComponent },
  { path: 'ambiental', component: AmbientalComponent },
  { path: 'liquidacion', component: LiquidacionComponent },
  { path: 'observaciones', component: ObservacionesComponent },
  { path: 'firmas', component: FirmasComponent },
  { path: 'anexos', component: AnexosComponent },
  { path: 'cierre', component: CierreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
