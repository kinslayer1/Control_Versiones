import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { InicioComponent } from './inicio/inicio.component';
import { PeritoComponent } from './perito/perito.component';
import { BasicaComponent } from './basica/basica.component';
import { BarrioComponent } from './barrio/barrio.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perito', component: PeritoComponent },
  { path: 'basica', component: BasicaComponent },
  { path: 'barrio', component: BarrioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
