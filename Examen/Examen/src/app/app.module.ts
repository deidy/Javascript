import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MasterURLService} from "./services/master-url.service";
import { HeroeComponent } from './heroe/heroe.component';
import { HomeComponent } from './home/home.component';
import { PoderComponent } from './poder/poder.component';
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HomeComponent,
    PoderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
