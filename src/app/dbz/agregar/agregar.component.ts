import { Component,Input,Output,EventEmitter  } from '@angular/core';
import { PersonajeInterface } from '../interfaces/dragonball.interface';
import { DbzService } from '../service/dragonball.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  {
 


// @Input('Personajes') Personajes:PersonajeInterface[]=[];
// //lo hacemos asi porque vamos a recibir un nuevo personaje y pero se va incializar en cero para que funciones el codigo dificil de explicar
@Input('Personaje')Personaje:PersonajeInterface={
  nombre:"",
  poder:0
  }
  constructor(private Servicio: DbzService){};
//el Ouput  es para emitir eventos o enviar datos a otro componente desde la clase hijo a al aclase padre
// y EventEmitter es para emitir el personaje es un metodo que haga una acion y es de tipo PersonajeInterface
//Outpu funciona igual que el Input el EventEmitter es el tipo y es un generico <T> puede ser cualquier cosa
// @Output() onNuevoPersonaje: EventEmitter <PersonajeInterface>=new EventEmitter();

  Agregar():void{
    //si  esta vacion que no devulva nada 
    if(this.Personaje.nombre.trim().length<=5){return;}
    if(this.Personaje.poder <= 0){return;}
    //llamamos la funcion o el metedo y usamos el emit para enviar los datos 
    //el emit seria los mismo que si usaramos socket en  express misma estrutura
    // this.onNuevoPersonaje.emit(this.Personaje);    
    // const Nuevo=this.Personaje;
    // this.Personajes.push(Nuevo);
    //este es para reinciar el objeto que esta en el input
    //llamamos le metodo de nuestro servicio donde esta todos los datos y de añadimos el nuevo personaje
    this.Servicio.agregarPersonaje(this.Personaje);
    this.Personaje={nombre:"",poder:0};
     
    
    }
    
}
