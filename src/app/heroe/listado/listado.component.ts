//para crear un componente rapidamente o en automatico es context
//ng g c heroe/listado al ultimo solo es la ruta donde vamos a crear el componennte
//y el nombre que de vamos a poner la carpeta ya con los archivos

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {


public heroes:string[]=["Batman","Superman","Flash","Wonderwoman","Aquaman"];
public borrado:string="";

EliminarHero():void{
//Eliminamos el ultimo valor de un arreglo con el pop
//pusimos el || por que nos devuelve un undefined y para que no marque un error
 this.borrado=this.heroes.shift() || '';

}





}
