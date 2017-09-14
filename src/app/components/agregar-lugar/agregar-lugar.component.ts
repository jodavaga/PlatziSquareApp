import { Component, OnInit } from '@angular/core';
import { LugaresService } from "../../services/lugares.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-agregar-lugar',
  templateUrl: './agregar-lugar.component.html'
})
export class AgregarLugarComponent implements OnInit {

  lugar:any = {};

  id = null;

  constructor(private _lugaresService: LugaresService,
              private activatedRoute: ActivatedRoute,
              private router: Router
              ) { 
                
                this.activatedRoute.params.subscribe(params => this.id = params['id']);
                console.log(this.id);

                if(this.id != 'nuevo'){
                  this._lugaresService.getLugar(this.id)
                      .subscribe(lugar => this.lugar = lugar);
                      console.log(this.lugar);
                }

               }

  ngOnInit() {
    
  }

  guardarLugar(){
    //obtengo la direccion del negocio para pasarsela al GeoData de google
    let direccion = `${ this.lugar.calle }${ this.lugar.ciudad }${ this.lugar.pais }`;

    this._lugaresService.obtenerGeoData(direccion)
              .subscribe( data => {
                  console.log(data.json());
                  //creo las referencias de longitud y latitud, y las obtengo desde el objeto recibido (data)
                  this.lugar.lat = data.json().results[0].geometry.location.lat;
                  this.lugar.lng = data.json().results[0].geometry.location.lng;

                  if(this.id == 'nuevo'){
                    //agrego el lugar a la base de datos desde el servicio
                    this.lugar.id = Date.now();
                    this._lugaresService.guardarLugar(this.lugar);
                    alert(`${ this.lugar.nombre } ha sido AGREGADO con exito!`);

                  }else{
                    this._lugaresService.editarLugar(this.lugar);
                    alert(`${ this.lugar.nombre } EDITADO con exito!`);
                   this.router.navigate(['lugares']);
                  }

                  this.lugar = {};
              });

  }

}
