import { Injectable } from '@angular/core';

@Injectable()
export class LugaresService {

  lugares = [
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
    
  ];

  constructor() { }

  getLugares(){
    return this.lugares;
  }

  getLugar(id){
    
    return this.lugares.filter((lugar) => id == lugar.id)[0];
    
  }

}
