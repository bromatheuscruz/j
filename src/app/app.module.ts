import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NatalComponent } from './natal/natal.component';
import { AnoNovoComponent } from './ano-novo/ano-novo.component';

@NgModule({
  declarations: [
    AppComponent,
    NatalComponent,
    AnoNovoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
