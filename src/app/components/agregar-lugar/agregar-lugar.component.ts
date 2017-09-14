import { Component, OnInit } from '@angular/core';
import { LugaresService } from "../../services/lugares.service";

@Component({
  selector: 'app-agregar-lugar',
  templateUrl: './agregar-lugar.component.html'
})
export class AgregarLugarComponent implements OnInit {

  lugar:any = {};

  constructor(private _lugaresService: LugaresService) { }

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

                  //agrego el lugar a la base de datos desde el servicio
                  this.lugar.id = Date.now();
                  this._lugaresService.guardarLugar(this.lugar);
                  alert(`${ this.lugar.nombre } ha sido agregado con exito!`);
                  this.lugar = {};
              });

  }

}
