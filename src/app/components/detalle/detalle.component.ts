import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LugaresService } from "../../services/lugares.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {

  id = null;
  lugar = {};

  constructor(private activatedRoute: ActivatedRoute,
              private _lugaresService: LugaresService) { 

    this.activatedRoute.params
            .subscribe( params => {
              this.id = params['id'];
              
              this.lugar = this._lugaresService.getLugar(this.id);
              console.log(this.id);
              
            })
  }

  ngOnInit() {
  }

    
  

}
