import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiNuevoComponenteComponent } from './mi-nuevo-componente/mi-nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiNuevoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
