import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Holamundo } from './componente/componente';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    Holamundo,
    ComponenteDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
