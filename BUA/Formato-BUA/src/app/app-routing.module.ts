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

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perito', component: PeritoComponent },
  { path: 'basica', component: BasicaComponent },
  { path: 'barrio', component: BarrioComponent },
  { path: 'inmueble', component: InmuebleComponent },
  { path: 'construccion', component: ConstruccionComponent },
  { path: 'consinmuebl', component: ConsinmueblComponent },
  { path: 'contruest', component: ContruestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
