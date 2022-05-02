//es el archivo de servicio sirve para iniciar los servicios como los http o las apis
//el Inject es para los servicios
//sirve para tener una unica instancia mas bien seria hacerlo globales
//puede crearse en cualquier parte del software normamente se hacer cuando esta en un componente
import { Injectable } from "@angular/core";
import { PersonajeInterface } from "../interfaces/dragonball.interface";

@Injectable()
export class DbzService{
//lo hacemos privada para que solo se pueda usar desdes aqui desde esta class
//el _Personajes es para indicar que es una propiedad privada
   private _Personajes:PersonajeInterface[]=[
        {
        nombre:"Goku",
        poder:25000
        },
        {
        nombre:"Vegeta",
        poder:24000
        }
    ];
//hacemos un get para poder enviar los personajes alos hijos    
  get personajes():PersonajeInterface[]{
  //lo enviamos de esta formar para que nos retorno cada uno del arreglo y que haga una copia
  //si lo devolvemos sin los corchetes nos la la referencia del arreglo osea el valor autentico de la variable
  return [...this._Personajes];
   
  }    
constructor(){
console.log("Iniciando Servicio");
}
//hacemos que se agrege un nuevo personaje creamos un metodo para  agregar de tipo vacio y que tome como parametro un personaje
agregarPersonaje(personaje:PersonajeInterface):void{

 this._Personajes.push(personaje);

}


}