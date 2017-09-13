import { Component, OnInit } from '@angular/core';
import { LugaresService } from "../../services/lugares.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent implements OnInit {

  lat = 3.4060674;
  lng = -76.551282;

  lugares = [];

  constructor( private _lugaresService: LugaresService,
               private router: Router ) { }

  ngOnInit() {
    this.lugares = this._lugaresService.getLugares();
  }

  verDetalle( id ){
    this.router.navigate(['/detalle', id]);
  }

}
