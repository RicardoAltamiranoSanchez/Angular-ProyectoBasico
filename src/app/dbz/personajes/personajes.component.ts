import { Component,Input } from '@angular/core';
//hicimos una carpeta de interfaces para poder usarla en todos el programa solo exportamos
import { PersonajeInterface } from '../interfaces/dragonball.interface';
import { DbzService } from '../service/dragonball.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent  {

  

//el input es propio de angular lo usamos para recibir datos de otro componente
//se pede poner @Input() sin 
//referencia
// @Input("Personajes") Personajes:PersonajeInterface[]=[];
//el personajes es el metedo de esta clase o componente
get personajes():PersonajeInterface[]{
//el Servicio.personajes es el metodo get del servidor
 return this.Servicio.personajes;

}
constructor(private Servicio: DbzService){};


}
//separamos el codigo para cada funcion que vamos hacer para tener
//un mayor control del codigo