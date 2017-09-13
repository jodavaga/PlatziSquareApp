import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Services
import { LugaresService } from "./services/lugares.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LugaresComponent } from './components/lugares/lugares.component';

//Google maps
import { AgmCoreModule } from '@agm/core';
//Routes
import { APP_ROUTING } from "./routes";
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { AgregarLugarComponent } from './components/agregar-lugar/agregar-lugar.component';

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
    APP_ROUTING
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
