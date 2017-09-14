import { Component, OnInit } from '@angular/core';
import { LugaresService } from "../../services/lugares.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent implements OnInit {

  lat = 3.4074809;
  lng = -76.5515617;


  lugares = [];

  constructor( private _lugaresService: LugaresService,
               private router: Router ) { }

  ngOnInit() {
    this._lugaresService.getLugares()
                          .subscribe(lugares => this.lugares = lugares);
  }

  verDetalle( id ){
    this.router.navigate(['/detalle', id]);
  }

}
