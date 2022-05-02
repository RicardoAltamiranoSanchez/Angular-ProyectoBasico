import { Component} from '@angular/core';
import { PersonajeInterface } from '../interfaces/dragonball.interface';
import { DbzService } from '../service/dragonball.service';


@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball.component.html',
  styleUrls: ['./dragonball.component.css']
})
export class DragonBallComponent {

//Lo importamos al servicio lo dejamos asi para referencia
// Personajes:PersonajeInterface[]=[
// {
// nombre:"Goku",
// poder:25000
// },
// {
// nombre:"Vegeta",
// poder:24000
// }
// ]

Personaje:PersonajeInterface={
  nombre:"",
  poder:0
  }
  // AgregarNuevoPersonaje(Personaje:PersonajeInterface):void{
  
  // this.Personajes.push(Personaje)
  
  
  // }

//Inicializamos el servidor esto es una inyeccion de depedencias
constructor(private Servicio: DbzService){};
}





