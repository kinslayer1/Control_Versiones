import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Holamundo } from './componente/componente';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';
import { UserComponent } from './user/user.component';
import { ComponenteArreglosComponent } from './componente-arreglos/componente-arreglos.component';
import { ComponenteEventosComponent } from './componente-eventos/componente-eventos.component';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Holamundo,
    ComponenteDosComponent,
    UserComponent,
    ComponenteArreglosComponent,
    ComponenteEventosComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
