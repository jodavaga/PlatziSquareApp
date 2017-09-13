
import { Routes, RouterModule } from '@angular/router';

import { LugaresComponent } from './components/lugares/lugares.component';
import { ContactoComponent } from "./components/contacto/contacto.component";
import { DetalleComponent } from "./components/detalle/detalle.component";
import { AgregarLugarComponent } from "./components/agregar-lugar/agregar-lugar.component";

const ROUTES: Routes = [
  { path: 'lugares', component: LugaresComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'agregar', component: AgregarLugarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lugares' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);