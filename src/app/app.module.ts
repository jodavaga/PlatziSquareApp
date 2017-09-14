import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Services
import { LugaresService } from "./services/lugares.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { AgregarLugarComponent } from './components/agregar-lugar/agregar-lugar.component';

//Google maps
import { AgmCoreModule } from '@agm/core';
//Angular firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Routes
import { APP_ROUTING } from "./routes";


export const firebaseConfig = {
  apiKey: "AIzaSyC7LiC_XwRNo55TiihLGz0YcN7Gu--1kAo",
  authDomain: "platzisquareapp.firebaseapp.com",
  databaseURL: "https://platzisquareapp.firebaseio.com",
  storageBucket: "platzisquareapp.appspot.com",
  messagingSenderId: "49414842909"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LugaresComponent,
    ContactoComponent,
    DetalleComponent,
    AgregarLugarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8pjwyA6YVThLJJWaI1vW_OrwVdhG4X2s'
    }),
    APP_ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
