import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database/database";
import { Http } from "@angular/http";

@Injectable()
export class LugaresService {

  /*lugares = [
    {
      id: 1,
      description: 'Este es un lugar de una ciudad en cuestion', 
      plan: "pagado", 
      distancia: 1, 
      cercania: 1, 
      active: true, 
      nombre: "Donas - la tinaja"
    },
    {
      id: 2,
      description: 'Este es un lugar de una ciudad en cuestion', 
      plan: "gratuito", 
      distancia: 10, 
      cercania: 3, 
      active: true, 
      nombre: "Floristeria - doña adriana"
    },
    {
      id: 3,
      description: 'Este es un lugar de una ciudad en cuestion', 
      plan: "gratuito", 
      distancia: 5, 
      cercania: 2, 
      active: false, 
      nombre: "Sushi - el sushiroll"
    },
    {
      id: 4,
      description: 'Este es un lugar de una ciudad en cuestion', 
      plan: "pagado", 
      distancia: 1.8, 
      cercania: 1, 
      active: true, 
      nombre: "Veterinaria - huellitas"
    },
    {
      id: 5,
      description: 'Este es un lugar de una ciudad en cuestion', 
      plan: "gratuito", 
      distancia: 1.3, 
      cercania:1, 
      active: true, 
      nombre: "Hotel - dulce sueño"
    },
    {
      id: 6,
      description: 'Este es un lugar de una ciudad en cuestion', 
      plan: "gratuito", 
      distancia: 1.5,
      cercania:1, 
      active: true, 
      nombre: "Lavanderia33 - la rosa"
    }
    
  ];*/

  geoDataURL = "http://maps.google.com/maps/api/geocode/json?address=";

  constructor(private afDb: AngularFireDatabase,
              private http: Http
            ) { }

  getLugares(){
    //return this.lugares;
    return this.afDb.list('lugares/');
  }

  getLugar(id){ 
    return this.afDb.object(`lugares/${ id }`);
  }

  guardarLugar(lugar){
    this.afDb.database.ref(`lugares/${ lugar.id }`).set(lugar);
  }

  editarLugar(lugar){
    this.afDb.database.ref(`lugares/${ lugar.id }`).set(lugar);
  }

  obtenerGeoData(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
   return this.http.get(`${ this.geoDataURL }${ direccion }`);
  }

}
